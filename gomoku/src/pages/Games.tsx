import { useContext, useEffect, useState } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../context"
import type { Game } from "../types/Game"
import { get } from '../utils/http'
import GameItem from '../components/GameItem'

import style from './Games.module.css'

export default function Games() {
    const [games, setGames] = useState<Game[]>([])
    const fetchGames = async () => {
        const fetchedGames = await get<Game[]>('/api/games')
        setGames(fetchedGames)
    }

    useEffect(() => {
        fetchGames()
    }, [])

    const { user } = useContext(UserContext)
    if (!user) return <Navigate to="/login" />


    return (
        <div className={style.container}>
            {games.length === 0 && <p>Fetching Games...</p>}
            {games.map(({ _id, name, date, result }) => (
                //console.log({ _id }, { name }, { date }, { result })
                <GameItem _id={_id} name={name} date={date} result={result} />
            ))}
        </div>
    )
}
