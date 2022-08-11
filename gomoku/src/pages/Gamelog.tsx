import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { UserContext } from "../context"








export default function Gamelog() {
    const { user } = useContext(UserContext)
    if (!user) return <Navigate to="/login" />
    return (
        <div>Gamelog</div>
    )
}
