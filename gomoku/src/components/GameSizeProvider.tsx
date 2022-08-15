import { useState } from "react"
import { Size } from '../types'
import { GameSizeContext } from "../context"

type GameSizeProps = {
    children: React.ReactNode
}


export default function GameSizeProvider({ children }: GameSizeProps) {
    const [boardSize, setSize] = useState<number>(15) //useState<Size>(15)
    const setBoardSize = (boardSize: number) => setSize(boardSize)

    return (
        <GameSizeContext.Provider value={{ boardSize, setBoardSize }}>{children}</GameSizeContext.Provider>
    )
}
