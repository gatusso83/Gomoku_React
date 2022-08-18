import { useState } from "react"
import { GameLogicContext } from "../context"

type GameLogicProps = {
    children: React.ReactNode
}

export default function GameLogicProvider({ children }: GameLogicProps) {
    const [win, setWin] = useState<boolean>(false)
    const setWinState = (win: boolean) => setWin(win)
    const [draw, setDraw] = useState<boolean>(false)
    const setDrawState = (draw: boolean) => setDraw(draw)


    return (
        <GameLogicContext.Provider value={{ win, setWinState, draw, setDrawState }}>{children}</GameLogicContext.Provider>
    )
}