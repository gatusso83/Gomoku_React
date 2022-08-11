import { useContext } from 'react'
import { UserContext } from '../context'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import style from './Header.module.css'

export default function Header() {
    const navigate = useNavigate()
    const location = useLocation()
    const { user } = useContext(UserContext)

    const getActions = () => {
        if (user) {
            return (
                <>
                    <button className={style.action} onClick={() => navigate('login')}>Login</button>
                    <button className={style.action} onClick={() => navigate('games')}>Previous Games</button>
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
        <header className={style.header}>
            <div className={style.container}>
                <Link to="/">Gomoku</Link>
                {location.pathname === "/" &&
                    <div className={style.actions}>
                        {getActions()}
                    </div>
                }
            </div>
        </header>
    )
}
