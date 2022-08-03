
import { Dropdown } from '../components'
import style from './Home.module.css'


export default function home() {
    return (
        <div className={style.container}>
            <Dropdown />
        </div>
    )
}
