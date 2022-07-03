import { useRef, useContext } from "react";
import { loginCall } from "../../apiCalls"
import { AuthContext } from "../../context/AuthContext"

import { useNavigate } from "react-router-dom";
import "./login.css"

export function Login() {

    const email = useRef();
    const password = useRef();

    const navigate = useNavigate();

    const { user, isFetching, error, dispatch } = useContext(AuthContext);

    //Start user's session 
    const handleClick = (e) => {
        e.preventDefault();
        loginCall({
            email: email.current.value,
            password: password.current.value,
        }, dispatch);
    }

    //Navigate from login to register
    const handleRegister = () => {
        navigate('/register')
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3
                        className="loginLogo">Social Sex
                    </h3>

                    <span className="loginDesc">
                        Connect with friends and the world around you on Social Sex
                    </span>
                </div>

                <div className="loginRight">
                    <form
                        className="loginBox"
                        onSubmit={handleClick}
                    >
                        <input
                            placeholder="Email"
                            type="email"
                            required
                            className="loginInput"
                            ref={email}
                        />
                        <input
                            placeholder="Password"
                            type="password"
                            required
                            minLength="6"
                            className="loginInput"
                            ref={password}
                        />
                        <button
                            className="loginButton"
                            disabled={isFetching}
                        >
                            {isFetching
                                ? "Loading"
                                : "Log In"
                            }
                        </button>

                        <span
                            className="loginForgot">
                            Forgot Password?
                        </span>

                    </form>
                    <button
                        className="loginRegisterButton"
                        onClick={handleRegister}
                    >
                        Create a New Account
                    </button>
                </div>
            </div>
        </div>
    )
}
