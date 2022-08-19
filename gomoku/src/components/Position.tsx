import { useState, useContext } from 'react'
import { GameSizeContext } from '../context'
import { STATUS, PLAYERTURN } from '../constants/index' //PLAYERTURN } from '../constants/index'
import style from './Position.module.css'


type PositionProps = {
    id: number
    onSelect: () => void
    player: PLAYERTURN
    p1List: Array<number>
    p2List: Array<number>
    win: boolean
}

export default function Position(props: PositionProps) {
    const { id, onSelect, player, p1List, p2List, win } = props
    //const { id, onSelect, player } = props
    const [p1Turn, setP1Turn] = useState(true)
    const [status, setStatus] = useState(STATUS.AVAILABLE)
    //const [win, setWin] = useState(false)
    const [draw, setDraw] = useState(false)
    const { boardSize } = useContext(GameSizeContext)
    const columns = boardSize
    const rows = boardSize

    const getClassNames = () => {
        const className = style.position
        switch (status) {
            case STATUS.AVAILABLE:
                return `${className} ${style.available}`
            case STATUS.OCCUPIEDP1:
                return `${className} ${style.occupiedp1}`
            case STATUS.OCCUPIEDP2:
                return `${className} ${style.occupiedp2}`
            default:
                return className
        }
    }

    const handleClick = () => {
        if (status === STATUS.AVAILABLE && player === PLAYERTURN.PLAYER1 && win === false) {
            setStatus(STATUS.OCCUPIEDP1)
            p1List.push(id)
            onSelect()

            //setP1Turn(false)
            return player
        }
        if (status === STATUS.AVAILABLE && player === PLAYERTURN.PLAYER2 && win === false) {
            console.log('select position', id)
            setStatus(STATUS.OCCUPIEDP2)
            p2List.push(id)
            onSelect()

            //setP1Turn(true)
            return player
        }
        if (win === true) {
            onSelect()
            return player
        }

        if (status === STATUS.OCCUPIEDP1 || status === STATUS.OCCUPIEDP2)
            console.log('position selected already', id)
    }

    return (
        <div className={getClassNames()} onClick={handleClick} />
    )
}
