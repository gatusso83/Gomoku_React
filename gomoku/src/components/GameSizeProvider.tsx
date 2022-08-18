import { useState } from "react"
import { GameSizeContext } from "../context"

type GameSizeProps = {
    children: React.ReactNode
}


export default function GameSizeProvider({ children }: GameSizeProps) {
    const [boardSize, setSize] = useState<number>(5)
    const setBoardSize = (boardSize: number) => setSize(boardSize)

    return (
        <GameSizeContext.Provider value={{ boardSize, setBoardSize }}>{children}</GameSizeContext.Provider>
    )
}
