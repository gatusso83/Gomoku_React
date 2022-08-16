import { useState } from 'react'
import { STATUS, PLAYERTURN } from '../constants/index' //PLAYERTURN } from '../constants/index'
import style from './Position.module.css'


type PositionProps = {
    id: number
    onSelect: () => void
    player: PLAYERTURN
    p1List: Array<number>
    p2List: Array<number>
    //   getPlayerTurn: () => void
}

export default function Position(props: PositionProps) {
    const { id, onSelect, player, p1List, p2List } = props
    //const { id, onSelect, player } = props
    const [status, setStatus] = useState(STATUS.AVAILABLE)

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
        if (status === STATUS.AVAILABLE && player === PLAYERTURN.PLAYER1) {
            console.log('select position', id)
            setStatus(STATUS.OCCUPIEDP1)
            onSelect()
            console.log("Which player is this: ", player)
            p1List.push(id)
            console.log(p1List)
            return player
        }
        if (status === STATUS.AVAILABLE && player === PLAYERTURN.PLAYER2) {
            console.log('select position', id)
            setStatus(STATUS.OCCUPIEDP2)
            onSelect()
            console.log("Which player is this: ", player)
            p2List.push(id)
            console.log(p2List)
            return player
        }
        if (status === STATUS.OCCUPIEDP1 || status === STATUS.OCCUPIEDP2)
            console.log('position selected already', id)
    }

    return (
        <div className={getClassNames()} onClick={handleClick} />
    )
}
