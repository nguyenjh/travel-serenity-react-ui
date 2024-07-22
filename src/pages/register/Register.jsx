import { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import "./register.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: "",
        email: "",
        password: "",
    })

    const [error, setError] = useState(null)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault()
        setError(null)

        try {
            await axios.post("/auth/register", credentials);
            navigate("/login")
        } catch (err) {
            setError(err.response.data)
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev)
    }

    return (
        <div className="register">
            <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
                <span className="rLogo">Travel Serenity</span>
            </Link>
            <div className="rTitle">
                <span>REGISTER</span>
            </div>
            <div className="rContainer">
                <span>Username</span>
                <input
                    type="text"
                    placeholder=""
                    id="username"
                    onChange={handleChange}
                    className="rInput"
                />
                <span>Email</span>
                <input
                    type="email"
                    placeholder=""
                    id="email"
                    onChange={handleChange}
                    className="rInput"
                />
                <span>Password</span>
                <div className="passwordContainer">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder=""
                        id="password"
                        onChange={handleChange}
                        className="rPasswordInput"
                    />
                    <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        onClick={togglePasswordVisibility}
                        className="passwordIcon"
                    />
                </div>
                <button onClick={handleClick} className="rBtn">
                    Register
                </button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    )
}

export default Register