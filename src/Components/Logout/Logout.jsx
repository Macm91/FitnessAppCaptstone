import React from "react";
import "./Logout.css"

const Logout = () => {
  

    const handleLogout = (e) => {
        e.preventDefault();

        localStorage.clear();
        window.location.href = '/';
    };

    return(
        <div className="logout">
                <button className="logout_btn" onClick= {(e)=> handleLogout(e)}>Logout</button>
        </div>
    )
}

export default Logout



    
    