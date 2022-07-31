import Header from '../components/Header'
import DropDown from '../components/DropDown'
import { Button, Dropdown } from '../components'
import style from './Home.module.css'


export default function home() {
    return (
        <div className={style.container}>
            <Dropdown />
        </div>
    )
}
