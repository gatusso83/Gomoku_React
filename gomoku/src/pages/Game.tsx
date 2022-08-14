import { useContext, useReducer, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { UserContext } from "../context"
import { Position } from '../components'
import style from './Game.module.css'
import { PLAYERTURN } from "../constants"
import boardSizes from '../data/boardSizes.json'



export default function Game() {
  const { user } = useContext(UserContext)
  const { boardSizeId } = useParams()
  const [playerTurn, setPlayerTurn] = useState(PLAYERTURN.PLAYER1)

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
  //if (!boardSizeId) return null
  //const boardSize = 5//boardSizes.find((b) => b.id === {boardSizeId} )
  //const { columns, rows } = boardSize

  return (
    <div>Game

      <div className={style.container}>
        <div className={style.positions} style={{ gridTemplateColumns: `repeat(${10}, 1fr)` }}>
          {[...Array(10 * 10)].map((_, index) => (
            <Position key={`position-${index}`} id={index} onSelect={() => { currentPlayer() }} player={playerTurn} />//; console.log("current player:", playerTurn) }} />//setPlayerTurn(PLAYERTURN.PLAYER2); console.log("Test:", playerTurn) }} />
          )
          )
          }
        </div>
      </div>
    </div>
  )
}