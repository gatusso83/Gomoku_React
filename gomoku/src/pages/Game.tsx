import { useContext, useState } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../context"
import { GameSizeContext } from '../context'
import { Position, GameLogic, Button } from '../components'
import style from './Game.module.css'
import { PLAYERTURN } from "../constants"

export default function Game() {
  const { user } = useContext(UserContext)
  const [playerTurn, setPlayerTurn] = useState(PLAYERTURN.PLAYER1)
  const { boardSize } = useContext(GameSizeContext)
  const [p1List, setP1List] = useState([])
  const [p2List, setP2List] = useState([])
  const [p1Turn, setP1Turn] = useState(true)
  const [win] = useState(false)


  const currentPlayer = () => {
    if (playerTurn === PLAYERTURN.PLAYER1) {
      console.log("testing states", p1Turn)
      setPlayerTurn(PLAYERTURN.PLAYER2)
      setP1Turn(false)
      console.log("Player 1 moves", p1List)
      console.log("testing states", p1Turn)
      console.log("BoardSize:", boardSize)
      return playerTurn
    }
    else {
      setPlayerTurn(PLAYERTURN.PLAYER1)
      setP1Turn(true)
      console.log("Player 2 moves:", p2List)
      console.log("testing states", p1Turn)
      return playerTurn

    }
  }

  const winner = () => {
    console.log("Winner?", win)
    return win
  }

  if (!user) return <Navigate to="/login" />

  return (
    <div>

      <div className={style.container}><GameLogic p1Turn={p1Turn} rows={boardSize} columns={boardSize} p1List={p1List} p2List={p2List} onSelect={() => { winner() }} />
        <GameLogic p1Turn={p1Turn} rows={boardSize} columns={boardSize} p1List={p1List} p2List={p2List} onSelect={() => { winner() }} />
        <div>

          <div className={style.positions} style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}>
            {[...Array(boardSize * boardSize)].map((_, index) => (
              <Position key={`position-${index}`} id={index} onSelect={() => { currentPlayer() }} player={playerTurn} p1List={p1List} p2List={p2List} />


            ))}
          </div>

        </div>

      </div>
      <div>
        <Button onClick={() => window.location.reload()} >Reset</Button>
      </div >
    </div >
  )
}