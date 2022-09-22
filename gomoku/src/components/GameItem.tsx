import { useNavigate } from 'react-router-dom'
import style from './GameItem.module.css'

type GameItemProps = {
    name: string
    date: string
    result: string
}

export default function GameItem(props: GameItemProps) {
    const { name, date, result } = props
    const navigate = useNavigate()

    return (
        <div className={style.list}>
            <div className={style.title}>{name}{date}{result}</div>
            {/*<button className={style.button} onClick={() => navigate(`movie/${id}`)}>
        More info
      </button>*/}
        </div>
    )
}