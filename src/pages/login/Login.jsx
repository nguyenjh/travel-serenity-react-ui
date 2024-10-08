import { useContext, useState } from "react"
import "./login.css"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    })

    const {loading, error, dispatch} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleChange = (e) => {
        setCredentials((prev)=>({...prev, [e.target.id]: e.target.value}))
    }

    const handleClick = async e => {
        // prevents refresh page
        e.preventDefault()
        dispatch({type:"LOGIN_START"})

        try {
            const res = await axios.post("/auth/login", credentials)
            dispatch({type:"LOGIN_SUCCESS", payload:res.data})
            navigate("/")
        } catch(err) {
            dispatch({type:"LOGIN_FAILURE", payload:err.response.data})
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev)
    }

    return (
        <div className="login">
            <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
                <span className="lLogo">Travel Serenity</span>
            </Link>
            <div className="lTitle">
                <span>LOGIN</span>
            </div>
            <div className="lContainer">
                <span>Username</span>
                <input type="text" placeholder="" id="username" onChange={handleChange} className="lInput" />
                <span>Password</span>
                <div className="passwordContainer">
                    <input
                        type={showPassword ? "text" : "password"}
                        placeholder=""
                        id="password"
                        onChange={handleChange}
                        className="lPasswordInput"
                    />
                    <FontAwesomeIcon
                        icon={showPassword ? faEyeSlash : faEye}
                        onClick={togglePasswordVisibility}
                        className="passwordIcon"
                    />
                </div>
                <button disabled={loading} onClick={handleClick} className="lBtn">Login</button>
                {error && <span>{error.message}</span>}
            </div>
        </div>
    )
}

export default Login