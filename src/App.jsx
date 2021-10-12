import React, { Component} from "react";
import Login from "./Components/Login";
import Logout from "./Components/Logout/Logout";
import Register from "./Components/Register";
import jwtDecode from 'jwt-decode';
// import { Redirect } from 'react-router';
// import { Route} from 'react-router-dom';



class App extends Component{
  state={
    user: ""
  }
  

  componentDidMount() {
    const jwt = localStorage.getItem('token');
    try{
        const user = jwtDecode(jwt);
        this.setState({user});
    }catch{
      console.log("use != jwtdecpde")
    }
}

render(){
  // const user = this.state.user;
return(
  <div>
    <Register/>
    <Login/>
    <Logout/>
  </div>

);
}
}

export default App;