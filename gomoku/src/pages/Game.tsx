import { useContext, useState } from "react"
import { useNavigate, Navigate } from "react-router-dom"
import { UserContext } from "../context"
import { GameSizeContext } from '../context'
import { Position, Button } from '../components'
import style from './Game.module.css'
import { PLAYERTURN } from "../constants"
import { Message } from '../components'
import { useLocalStorage } from "../hooks"
import { User } from '../types'

export default function Game() {
  const navigate = useNavigate()
  const { user } = useContext(UserContext)
  const [playerTurn, setPlayerTurn] = useState(PLAYERTURN.PLAYER1)
  const { boardSize } = useContext(GameSizeContext)
  const [p1List, setP1List] = useState([])
  const [p2List, setP2List] = useState([])
  const [allPositionList, setAllPositionList] = useState([])
  const [p1Turn, setP1Turn] = useState(true)
  const [win, setWin] = useState(false)
  const [draw, setDraw] = useState(false)
  const [currentUser, saveCurrentUser] = useLocalStorage<User | undefined>(`user-${user}`, user)
  const [state, setState] = useState(currentUser)
  const columns = boardSize
  const rows = boardSize

  const currentPlayer = () => {
    if (playerTurn === PLAYERTURN.PLAYER1) {
      console.log("testing states", p1Turn)
      console.log("Player 1 moves", p1List)
      console.log("All position list", allPositionList)
      setPlayerTurn(PLAYERTURN.PLAYER2)
    }
    else {
      setPlayerTurn(PLAYERTURN.PLAYER1)
      console.log("Player 2 moves:", p2List)
      console.log("testing states", p1Turn)
      console.log("All position list", allPositionList)
    }
  }

  const checkForFive = (list: number[]) => {
    let desDiagIncrement: number = columns + 1
    let ascDiagIncrement: number = columns - 1
    let verticalIncrement: number = columns
    let horizontalIncrement: number = 1

    list.forEach(element => {
      //Descending diagonal \ code
      if (list.includes(element + desDiagIncrement) && list.includes(element + 2 * desDiagIncrement) && +
        list.includes(element + 3 * desDiagIncrement) && list.includes(element + 4 * desDiagIncrement) && +
        ((element + 4 * desDiagIncrement) % columns !== 0) && ((element + 3 * desDiagIncrement) % columns !== 0) && +
        ((element + 2 * desDiagIncrement) % columns !== 0) && ((element + 1 * desDiagIncrement) % columns !== 0)) {
        setWin(true)
      }

      //Ascending diagonal / code
      if (list.includes(element - ascDiagIncrement) && list.includes(element - 2 * ascDiagIncrement) && +
        list.includes(element - 3 * ascDiagIncrement) && list.includes(element - 4 * ascDiagIncrement) && +
        ((element - 4 * ascDiagIncrement) % columns !== 0) && ((element - 3 * ascDiagIncrement) % columns !== 0) && +
        ((element - 2 * ascDiagIncrement) % columns !== 0) && ((element - 1 * ascDiagIncrement) % columns !== 0)) {
        setWin(true)
      }

      //Vertical | code
      if (list.includes(element + verticalIncrement) && list.includes(element + 2 * verticalIncrement) && +
        list.includes(element + 3 * verticalIncrement) && list.includes(element + 4 * verticalIncrement)) {
        setWin(true)
      }

      //Horizontal - code
      if (list.includes(element + horizontalIncrement) && list.includes(element + 2 * horizontalIncrement) && +
        list.includes(element + 3 * horizontalIncrement) && list.includes(element + 4 * horizontalIncrement) && +
        ((element + 4 * horizontalIncrement) % columns !== 0) && ((element + 3 * horizontalIncrement) % columns !== 0) && +
        ((element + 2 * horizontalIncrement) % columns !== 0) && ((element + 1 * horizontalIncrement) % columns !== 0)) {
        setWin(true)
      }
    })
  }

  const checkWinDraw = () => {

    if (p1Turn === true && win === false) {
      console.log("checkForFive P1list:", p1List)
      checkForFive(p1List)
      setP1Turn(false)
    }
    else if (p1Turn === false && win === false) {
      console.log("checkForFive P2list:", p2List)
      checkForFive(p2List)
      setP1Turn(true)
    }

    if (win === false && ((p1List.length + p2List.length) === (rows * columns))) {
      setDraw(true)
    }
  }

  const resetBoard = () => {
    saveCurrentUser(user)
    setP1List([])
    setP2List([])
    setAllPositionList([])
    setWin(false)
    setDraw(false)
    setP1Turn(true)
    window.location.reload()
    console.log(currentUser)
    setState(user)
  }


  const gameStateMessage = () => {
    if (p1Turn === true && win === false && draw === false)
      return "P1's Turn"
    else if (p1Turn === false && win === false && draw === false)
      return "P2's Turn"
    else if (p1Turn === false && win === true && draw === false)
      return "P1 Wins!"
    else if (p1Turn === true && win === true && draw === false)
      return "P2 Wins!"
    else
      return "It's a Draw!"
  }

  if (!user) return <Navigate to="/login" />

  return (
    <div>
      <div className={style.positions} style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}>
        {[...Array(boardSize * boardSize)].map((_, index) => (
          <Position key={`position-${index}`} id={index} onSelect={() => { currentPlayer(); checkWinDraw() }} player={playerTurn} p1List={p1List} p2List={p2List} win={win} allPositionList={allPositionList} />
        ))}

      </div>
      <div>
        <Message variant="info" message={gameStateMessage()} />
      </div>

      <div className={style.btncontainer}>
        <Button onClick={() => navigate('/')}>Leave</Button>
        <Button onClick={resetBoard} >Reset </Button>
      </div >
    </div>
  )
}