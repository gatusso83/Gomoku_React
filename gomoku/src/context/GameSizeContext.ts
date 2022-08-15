import { createContext } from "react"
import { Size } from '../types'

type GameSizeContextType = {
    boardSize: number
    setBoardSize: (boardSize: number) => void
}
const GameSizeContext = createContext<GameSizeContextType>({} as GameSizeContextType)
export default GameSizeContext