import { useState, useContext } from 'react'
import { UserContext } from '../context'
import { useNavigate } from 'react-router-dom'

import { Button, Input, Message } from '../components'
import users from '../data/users.json'


import style from './Login.module.css'

export default function Login() {
    const { login } = useContext(UserContext)
    const navigate = useNavigate()
    const [username, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [isCredentialInvalid, setIsCredentialInvalid] = useState(false)

    const handleLogin = () => {
        const user = users.find((u) => u.username === username && u.password === password)
        if (!user) {
            setIsCredentialInvalid(true)
        } else {
            login(username)
            navigate('Home')
        }
    }

    return (
        <form className={style.container} onSubmit={(e) => {
            e.preventDefault()
            handleLogin()
        }}>
            {isCredentialInvalid && (<Message variant="error" message="Invalid username or password" />)}
            <Input name="username" placeholder="Username" value={username}
                onChange={(e) => {
                    setUserName(e.target.value)
                    setIsCredentialInvalid(false)
                }}
            />
            <Input name="password" type="password" placeholder="Password" value={password}
                onChange={(e) => {
                    setPassword(e.target.value)
                    setIsCredentialInvalid(false)
                }}
            />
            <Button type="submit">Login</Button>
        </form >
    )
}
