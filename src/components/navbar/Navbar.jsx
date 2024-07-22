import { Link, useNavigate } from "react-router-dom"
import "./navbar.css"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"

const Navbar = () => {
    const {user, dispatch} = useContext(AuthContext)

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    const navigate = useNavigate()

    const handleRegister = async e => {
        e.preventDefault()
        navigate("/register")
    }

    const handleLogin = async e => {
        e.preventDefault()
        navigate("/login")
    }

    return (
        <div className="navbar">
            <div className="navContainer">
                <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
                    <span className="logo">Travel Serenity</span>
                </Link>
                {user ? (
                    <div className="navItems">
                        <span>{user.username}</span>
                        <button className="navButton" onClick={handleLogout}>Logout</button>
                    </div>
                ) : (
                    <div className="navItems">
                        <button onClick={handleRegister} className="navButton">Register</button>
                        <button onClick={handleLogin} className="navButton">Login</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar