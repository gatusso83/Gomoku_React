

// import { useContext } from "react"
// import { useNavigate, Navigate } from "react-router-dom"
// import { UserContext } from "../context"
// import { Button } from '../components'

// export default function Gamelog() {
//     const { user } = useContext(UserContext)
//     const navigate = useNavigate()
//     if (!user) return <Navigate to="/login" />



//     return (
//         <div>Gamelog
//             <div>
//                 <Button onClick={() => navigate('/games')}>Leave</Button>
//             </div>
//         </div>
//     )
// }

import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { API_HOST } from '../constants'
import type { Game } from '../types/Game'
import { get } from '../utils/http'
import style from './Gamelog.module.css'

export default function Gamelog() {
    const navigate = useNavigate()
    const { gameId = '' } = useParams()
    const [game, setGame] = useState<Game>()

    const fetchMovieDetails = async (id: string) => {
        const fetchedMovie = await get<Game>(`${API_HOST}/api/gamelogs/${id}`) //Might not be /api/games
        setGame(fetchedMovie)
        console.log("fteched movie:", fetchedMovie)
    }

    useEffect(() => {
        fetchMovieDetails(gameId)
    }, [gameId])

    if (!game) return null

    return (
        <div className={style.container}>
            <h1 className={style.title}>{game._id}</h1>
            <div className={style.details}>
                <p>
                    <strong>Game Name: </strong>
                    {game.name}
                </p>
                <p>
                    <strong>Date: </strong>
                    {game.date}
                </p>
                <p>
                    <strong>Black Moves: </strong>
                    {game.black.join(',')}
                </p>
                <p>
                    <strong>White Moves: </strong>
                    {game.white.join(',')}
                </p>
                <p>
                    <strong>Result: </strong>
                    {game.result}
                </p>
            </div>
        </div>
    )
}