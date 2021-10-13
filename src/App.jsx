import React, { Component} from "react";
import Login from "./Components/Login";
import Logout from "./Components/Logout/Logout";
import Register from "./Components/Register";
import jwtDecode from 'jwt-decode';
import Exercises from "./Components/Exercises/Exercises";
import axios from "axios";
import { Redirect } from 'react-router';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import WorkoutFolder from "./Components/WorkoutFolder/WorkoutFolder";
// import NavBar from "./Components/NavBar/NavBar";



class App extends Component{
  state={
    user: "",
    token: "",
    exercises: [],
    wFolders:[],
  }
  

  componentDidMount() {
    const jwt = localStorage.getItem('token');
    try{
        const user = jwtDecode(jwt);
        this.setState(
          {user:user}
          );
          this.setState(
            {token: jwt}
          );
          console.log ("user state", user);
          console.log ("jwt state",jwt)
    }catch{
      console.log("use != jwtdecpde")
    };
    this.getExercises();
    console.log("state",this.exercises);
    
}

async getExercises(){
  let response = await axios.get(`http://127.0.0.1:8000/api/wf/exercises/`)
  // .then(response => {this.setState({exercises : response.data})})
  console.log("response",response)

  this.setState({
    exercises:response.data
  });
  console.log ("exercise state", this.state.exercises);
}

async getUserFolders(){
  try{
  let response = await axios.get(`http://127.0.0.1:8000/api/wf/folders/`, {headers : {"Authorization" : `Bearer ${this.state.token}`}});
  // .then(response => {this.setState({exercises : response.data})})
  console.log("WF response",response);
  this.setState({
    wFolders : response.data
  });
 
  console.log ("wFolders State", this.state.exercises);
}
catch{
  console.log ("jwt token not loaded for WF")
}}

render(){
  // const user = this.state.user;
return(
  <div>
    {/* <NavBar className="navbar" user = {user}/>    */}
    <WorkoutFolder getUserFolders = {this.getUserFolders} folders= {this.state.wFolders}/>
    <Exercises exercises = {this.state.exercises}/>
    <Register/>
    <Login/>
    <Logout/>



{/* <BrowserRouter>
    <Switch>
                <Route path="/register" component={Register}/>
                <Route path="/exercises" render = {props => <Exercises {...props} exercises = {this.state.exercises}/>}/>
                <Route path="/login" component = {Login}/>
                <Route path="/logout" component = {Logout}/>
                
                
    </Switch>
</BrowserRouter> */}

  </div>

);
}
}

export default App;