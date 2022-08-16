import { useContext, useReducer, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { UserContext } from "../context"
import { GameSizeContext } from '../context'
import { Position } from '../components'
import style from './Game.module.css'
import { PLAYERTURN } from "../constants"

//Need to have a prop captured here for boardsize from the dropdown component. 


export default function Game() {
  const { user } = useContext(UserContext)
  const [playerTurn, setPlayerTurn] = useState(PLAYERTURN.PLAYER1)
  const { boardSize } = useContext(GameSizeContext)
  const [p1List, setP1List] = useState([])
  const [p2List, setP2List] = useState([])

  const currentPlayer = () => {
    if (playerTurn === PLAYERTURN.PLAYER1) {

      setPlayerTurn(PLAYERTURN.PLAYER2)
      return playerTurn
    }
    else {
      setPlayerTurn(PLAYERTURN.PLAYER1)
      return playerTurn
    }
  }

  if (!user) return <Navigate to="/login" />

  return (
    <div>

      <div className={style.container}>
        <div className={style.positions} style={{ gridTemplateColumns: `repeat(${boardSize}, 1fr)` }}>
          {[...Array(boardSize * boardSize)].map((_, index) => (
            <Position key={`position-${index}`} id={index} onSelect={() => { currentPlayer() }} player={playerTurn} p1List={p1List} p2List={p2List} />
          )
          )
          }
        </div>
      </div>
    </div>
  )
}