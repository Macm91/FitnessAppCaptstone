import React, { useState } from "react";
import "./Login.css"

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");





    return(
        <div className="login">
            <form className="login_form">
                <h1>
                    Login Here
                </h1>
                <input type="username" placeholder="Username" value={username} onChange={(e)=> setUsername(e.target.value)}/>
                <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <button type="submit" className="submit_btn">Login</button>
            </form>
        </div>
    )
}

export default Login