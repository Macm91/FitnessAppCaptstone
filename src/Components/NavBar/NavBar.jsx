import { Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";


const NavBar = ({user}) => {
  const [currentUser,setCurrentUser] = useState({})

  

  return ( 
    <nav className="navigationWrapper">
     
    <ul class="navigation">
            <React.Fragment>
                <Link to = '/register'>
                <li class="parent" >Register As Client</li>
                </Link>  

                <Link to = '/Login'>
                <li class="parent">Login</li>
                </Link>
            </React.Fragment>  
        </ul>
    </nav>
   );
}

export default NavBar;