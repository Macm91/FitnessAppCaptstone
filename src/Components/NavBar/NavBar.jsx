import { Link } from "react-router-dom";
import React from "react";
import { Navbar, Nav } from "react-bootstrap";
// import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
// import Navbar.Toggle from "react-bootstrap/esm/NavbarToggle";
import { NavDropdown } from "react-bootstrap";





const NavBar = ({user}) => {
  
  return ( 
    <Navbar bg="light" expand="lg">
    <container>
      {user && <p/>}
      
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Navbar.Brand> <Link to='/'> Home </Link> </Navbar.Brand>
        


        {!user &&
          <React.Fragment>

          <Nav.Link href="#register"><Link to='/register'>Register</Link></Nav.Link>
          <Nav.Link href="#login"><Link to='/login'>Login</Link></Nav.Link>

         
          </React.Fragment>
        }
        {user &&
          <React.Fragment>


          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#workoutFolder"><Link to='/workoutFolder'>Workout Folders</Link></NavDropdown.Item>
            <NavDropdown.Item href="#fastTimer"><Link to='/fastTimer'>Start A Fast</Link></NavDropdown.Item>
            <NavDropdown.Item href="#viewMeasurements"><Link to='/viewMeasurements'>Measurements</Link></NavDropdown.Item>
            <NavDropdown.Item href="#workoutHistory"><Link to='/workoutHistory'>Workout History</Link></NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#logout"><Link to='/logout'>Logout</Link></NavDropdown.Item>
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










