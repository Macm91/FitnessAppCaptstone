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

                <h1>
                    Welcome <span className="user_name"> Megan </span>
                </h1>
                <button className="logout_btn" onClick= {(e)=> handleLogout(e)}>Logout</button>
        </div>
    )
}

export default Logout



    
    