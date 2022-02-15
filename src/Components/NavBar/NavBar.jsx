import { Link } from "react-router-dom";
import React from "react";
// import { NaNav } from "react-bootstrap";
import "./NavBar.css";





const NavBar = ({user}) => {

  const handleLogout = (e) => {
    e.preventDefault();

    localStorage.clear();
    window.location.href = '/';
};
  
  return ( 

    <div className="nav" style={{position: 'absolute', left: '0px', width: '100%', backgroundColor: "rgba(5, 5, 5, 0.219)", display: "grid"}}> 
        {!user &&
          <div className="nav">
          <Link className="link" to='/'> Home </Link> 
          <Link className="link" to='/register'><b>Register</b></Link>
          <Link className="link" to='/login'><b>Login</b></Link>

         
          </div>
        }
        {user &&
        

          <div className="nav" >
          <Link className="link" to='/'> Home </Link> 
          <Link className="link" to='/workoutFolder'>Workout Folders</Link>
          <Link className="link" to='/getFastHistory'>Start A Fast</Link>
          <Link className="link" to='/viewMeasurements'>Measurements</Link>
          <Link  className="link" to='/workoutHistory'>Workout History</Link>
          
          <Link className="link" ><button className="logout_btn"  onClick= {(e)=> handleLogout(e)}><b>Logout</b></button> </Link> 
           

          </div>
            
            
           
            
           
          
        }
     
      </div>
   
   );
}

export default NavBar;










