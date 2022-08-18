import { createContext } from "react"

type GameLogicContextType = {
    win: boolean
    setWinState: (win: boolean) => void
    draw: boolean
    setDrawState: (draw: boolean) => void
}
const GameLogicContext = createContext<GameLogicContextType>({} as GameLogicContextType)
export default GameLogicContext