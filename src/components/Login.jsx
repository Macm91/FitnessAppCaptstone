import React, { useState } from "react";
import "./Login.css";
import axios from 'axios';
import { Redirect } from "react-router";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [clicked, setClicked] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        loginUser(username, password);
        setClicked(true);
    };

    async function loginUser(login,pass){
        let payload = {username: login, password:pass}
        let response = await axios.post(`http://127.0.0.1:8000/api/auth/login/`, payload)
        console.log("Login Result: ", response.data)
        localStorage.setItem('token', response.data.access);
        localStorage.setItem('refresh', response.data.refresh)
        window.location = '/home';
        return localStorage;
      }




      if (clicked){
        return(<Redirect to = "/"/>);
    }
    return(
        <div className="login">
            <form className="login_form" onSubmit={(e) => handleSubmit(e)}>
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