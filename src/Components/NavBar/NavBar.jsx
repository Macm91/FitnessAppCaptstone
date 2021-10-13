import { Link } from "react-router-dom";
import React from "react";






const NavBar = ({user}) => {
  
  return ( 
    <div className="navigationWrapper">
      {user && <h4> Welcome {user.username}</h4>}
      <ul class="navigation">
        <li>
          <Link to='/'> Home </Link>  
        </li>     
        

        {!user &&
          <React.Fragment>
              <li>
                <Link to='/register'>Register</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
          </React.Fragment>
        }
        {user &&
          <React.Fragment>
            <li>
              <Link to='/workoutFolder'>Workout Folders</Link>
            </li>
            <li>
              <Link to='/logout'>Logout</Link>
            </li>
          </React.Fragment>
        }

      </ul>
    </div>
   );
}

export default NavBar;