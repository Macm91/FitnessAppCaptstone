import { Link } from "react-router-dom";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
// import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
// import Navbar.Toggle from "react-bootstrap/esm/NavbarToggle";
import { NavDropdown } from "react-bootstrap";
import "./NavBar.css";





const NavBar = ({user}) => {
  
  return ( 
    <Navbar class="navbar .bg-light" expand="lg " >
    <container>
      {user && <p/>}
      
      <Navbar.Toggle className="toggle"/>
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Navbar.Brand> <Link className="link" to='/'> Home </Link> </Navbar.Brand>
        


        {!user &&
          <React.Fragment>

          <Nav.Link href="#register"><Link to='/register'>Register</Link></Nav.Link>
          <Nav.Link href="#login"><Link to='/login'>Login</Link></Nav.Link>

         
          </React.Fragment>
        }
        {user &&
          <React.Fragment>


          <NavDropdown title="Account"  >
            <NavDropdown.Item  href="#workoutFolder"><Link className="droplink" to='/workoutFolder'>Workout Folders</Link></NavDropdown.Item>
            <NavDropdown.Item  href="#fastTimer"><Link className="droplink" to='/fastTimer'>Start A Fast</Link></NavDropdown.Item>
            <NavDropdown.Item  href="#viewMeasurements"><Link className="droplink" to='/viewMeasurements'>Measurements</Link></NavDropdown.Item>
            <NavDropdown.Item  href="#workoutHistory"><Link  className="droplink" to='/workoutHistory'>Workout History</Link></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#logout"><Link className="logoutLink" to='/logout'>Logout</Link></NavDropdown.Item>
          </NavDropdown>
          
            
            
           
            
           
          </React.Fragment>
        }
      </Nav>
      </Navbar.Collapse>
      </container>
    </Navbar>
   );
}

export default NavBar;










