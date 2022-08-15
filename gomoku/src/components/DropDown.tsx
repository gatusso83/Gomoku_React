
import style from './DropDown.module.css'
import { useState, useContext } from 'react'
import { GameSizeContext } from '../context'


//see https://www.newline.co/@andreeamaco/react-dropdown-tutorial-for-beginners-create-a-dropdown-menu-from-scratch--9831d197


export default function DropDown() {
    const [aboardSize, setaBoardSize] = useState("")
    const { setBoardSize } = useContext(GameSizeContext)

    return (
        <div className={style.container}>
            <label className={style.label}>Select Board Size</label>
            <select className={style.selectlist} onChange={e => setBoardSize(parseInt(e.target.value))}>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
            </select>
        </div>
    )
}
