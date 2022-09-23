import { useNavigate } from 'react-router-dom'
import style from './GameItem.module.css'

type GameItemProps = {
    _id: string,
    name: string
    date: string
    result: string
}
//`game-log`)}>
export default function GameItem(props: GameItemProps) {
    const { _id, name, date, result } = props
    const navigate = useNavigate()

    return (
        <div>
            <div className={style.list} id={_id}>

                <div className={style.gametext}>Game Name: {name}, Date recorded: {date}, Result: {result}</div>
                <button className={style.button} onClick={() => navigate(`/game-log/${_id}`)}>
                    More info
                </button>
            </div>
        </div>
    )
}