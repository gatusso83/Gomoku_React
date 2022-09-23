

import { useContext } from "react"
import { useNavigate, Navigate } from "react-router-dom"
import { UserContext } from "../context"
import { Button } from '../components'

export default function Gamelog() {
    const { user } = useContext(UserContext)
    const navigate = useNavigate()
    if (!user) return <Navigate to="/login" />



    return (
        <div>Gamelog
            <div>
                <Button onClick={() => navigate('/games')}>Leave</Button>
            </div>
        </div>
    )
}
