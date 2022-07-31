import { useState } from 'react'

import { Button, Input } from '../components'


import style from './Login.module.css'

export default function Login() {
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form className={style.container}>
            <Input name="username" placeholder="Username" value={username} onChange={(e) => setUserName(e.target.value)} />
            <Input name="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit">Login</Button>
        </form >
    )
}
