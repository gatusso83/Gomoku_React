import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Dropdown, Button } from '../components'
import { UserContext } from '../context'
import style from './Home.module.css'


export default function Home() {
    const navigate = useNavigate()
    const { user } = useContext(UserContext)


    const getActions = () => {
        if (user) {
            return (
                <>
                    <button className={style.action} onClick={() => navigate('game')}>Start Game</button>

                </>
            )
        }
        else {
            return (
                <button className={style.action} onClick={() => navigate('login')}>Login</button>
            )
        }
    }


    return (
        <form className={style.container} onSubmit={(e) => {
            e.preventDefault()
            //navigate
        }}>

            <Dropdown />
            <div className={style.actions}>
                {getActions()}
            </div>


        </form>

    )
}
//<Button type="submit" onClick={() => navigate('game')}>Start Game</Button>