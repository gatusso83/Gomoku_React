import { createContext } from "react"

type GameSizeContextType = {
    boardSize: number
    setBoardSize: (boardSize: number) => void
}
const GameSizeContext = createContext<GameSizeContextType>({} as GameSizeContextType)
export default GameSizeContext