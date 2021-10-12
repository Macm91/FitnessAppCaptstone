import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../features/userSlice";
import "./Logout.css"

const Logout = () => {
    const dispatch = useDispatch();

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logout());
        localStorage.clear();
        window.location.href = '/';
    };

    return(
        <div className="logout">

                <h1>
                    Welcome <span className="user_name"> Megan </span>
                </h1>
                <button className="logout_btn" onClick= {(e)=> handleLogout(e)}>Logout</button>
        </div>
    )
}

export default Logout



    
    