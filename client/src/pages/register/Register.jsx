import { useNavigate } from "react-router-dom"
import { useRef } from "react"

import "./register.css"
import axios from "axios"

export function Register() {
    const email = useRef();
    const password = useRef();
    const username = useRef();
    const passwordAgain = useRef();

    const navigate = useNavigate();
    const url = "http://localhost:4000/api/"

    //Navigate from register to login 
    const handleLogin = () => {
        navigate('/login')
    }

    //Create user from client side
    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Password doesn't match!");
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }

            try {
                await axios.post(`${url}auth/register`, user)
                navigate("/login");

            } catch (err) {
                console.log("This is the error: " + err);
            }
        }
    }

    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3
                        className="registerLogo"
                    > Social Sex
                    </h3>
                    <span className="registerDesc">
                        Connect with friends and the world around you on Social Sex
                    </span>
                </div>

                <div className="registerRight">
                    <form
                        className="registerBox"
                        onSubmit={handleClick}>
                        <input
                            required
                            ref={username}
                            type="text"
                            placeholder="Username"
                            className="registerInput"
                        />

                        <input
                            required
                            ref={email}
                            type="email"
                            placeholder="Email"
                            className="registerInput"
                        />

                        <input
                            required
                            minLength="6"
                            ref={password}
                            type="password"
                            placeholder="Password"
                            className="registerInput"
                        />

                        <input
                            required
                            ref={passwordAgain}
                            type="password"
                            placeholder="Repeat password"
                            className="registerInput"
                        />
                        <button
                            type="submit"
                            className="loginButton">
                            Sign Up In
                        </button>
                    </form>
                    <button
                        className="registerButton"
                        onClick={handleLogin}
                    >
                        Log into Account
                    </button>
                </div>
            </div>
        </div>
    )
}
