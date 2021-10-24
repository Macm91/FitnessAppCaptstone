import { Link } from "react-router-dom";
import React from "react";
import { NaNav } from "react-bootstrap";
import "./NavBar.css";





const NavBar = ({user}) => {
  
  return ( 

    <div className="nav">
      {/* {user && <p/>} */}
      
      
     
        


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
     


          <Link className="logoutLink"  to='/logout'>Logout</Link>
  
          </div>
            
            
           
            
           
          
        }
     
      </div>
   
   );
}

export default NavBar;










