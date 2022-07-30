import style from './Header.module.css'

export default function Header() {
    return (
        <header className={style.header}>
            <div className={style.container}>Gomoku</div>
        </header>
    )
}
