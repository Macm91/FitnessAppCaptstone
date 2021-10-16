import React, { Component} from "react";
import Login from "./Components/Login";
import Logout from "./Components/Logout/Logout";
import Register from "./Components/Register";
import jwtDecode from 'jwt-decode';
import Exercises from "./Components/Exercises/Exercises";
import axios from "axios";
import { Redirect } from 'react-router';
import { Switch, Route} from 'react-router-dom';
import WorkoutFolder from "./Components/WorkoutFolder/WorkoutFolder";
import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Workouts from "./Components/Workouts/Workouts";
import AddWorkoutFolder from "./Components/WorkoutFolder/AddWorkoutFolder";
import AddWorkout from "./Components/Workouts/AddWorkout";
import EditWorkout from "./Components/Workouts/EditWorkout";
import WorkoutExerciseDisplay from "./Components/WorkoutExercises/WorkoutExerciseDisplay";
import AddWorkoutExercise from "./Components/WorkoutExercises/AddWorkoutExercise";
import FastCountdownTimer from "./Components/Fasts/FastCountdownTimer";



class App extends Component{
  state={
    user: "",
    token: "",
    exercises: [],
    wFolders:[],
    workouts: [],
    folderID: 0,
    workoutID: 0,
    workoutExercises: [],
    chosenExercise: "",
    userID: 0,
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
    this.getUserFolders();
    // console.log("state",this.exercises);
    
}




async getExercises(){
  let response = await axios.get(`http://127.0.0.1:8000/api/wf/exercises/`)
  // console.log("response",response)
  this.setState({
    exercises:response.data
  });
  // console.log ("exercise state", this.state.exercises);
}





async getUserFolders(){
  const jwt = localStorage.getItem('token');
  console.log("jwt", jwt);
  const bearerToken = 'Bearer ' + jwt;
  console.log(bearerToken);
  try{
  let response = await axios.get(`http://127.0.0.1:8000/api/wf/folders/`, { headers : {Authorization : bearerToken}});
  console.log("WF response1",response);
  this.setState({
    wFolders : response.data
  });
 
  console.log ("wFolders State", this.state.wFolders);
}
catch{
  const refreshToken = localStorage.getItem('refresh');
  let refreshObject = {
    refresh: refreshToken
  }
  let refreshResponse = await axios.post(`http://127.0.0.1:8000/api/auth/login/refresh`, refreshObject)
  localStorage.setItem('token', refreshResponse.data.access);
  let response = await axios.get(`http://127.0.0.1:8000/api/wf/folders/`, { headers : {Authorization : refreshResponse.data.access}});
  console.log("WF response2",response);
  this.setState({
    wFolders : response.data
  });
  console.log ("wFolders State2", this.state.wFolders);
}}



userIDSet = (val) => {
  this.setState({
    userID : val
  });
}



workoutSetID = (val) => {
  this.setState({
    workoutID : val
  })
}

chosenExerciseSetID = (val) => {
  debugger
  this.setState({
    chosenExercise : val
  });
  console.log ("chosen exercise in app", this.chosenExercise);
  console.log("chosen ex APP WorkoutID", this.workoutID)
}



getFolderWorkouts = async (folder)=>{
  let response = await axios.get(`http://127.0.0.1:8000/api/wf/workout/folder/${folder}/`);
  console.log("workouts", response.data);
  this.setState({
    workouts : response.data
  });
  this.setState({
    folderID : folder
  });
  console.log("folder id in state app",this.state.folderID);
 

}
setFolderId = async (id)=>{
  this.setState({})
}


getWorkoutExercises = async (fk)=>{
  let response = await axios.get(`http://127.0.0.1:8000/api/wf/workoutexercises/${fk}/`);
  console.log("workouts", response.data);
  this.setState({
    workoutExercises : response.data
  });
  
  console.log("folder id in state app",this.state.workoutExercises);

}



render(){
  const user = this.state.user;
return(
  <div>
    <NavBar className="navbar" user = {user}/>   
    

  <div>
      <Switch>
          <Route path = '/profile' render={props => {
            if (!user){
              return <Redirect to="/login"/>;
            } else {
              return <Home {...props} user = {user}/>
            }
          }}
          />
                  <Route exact path="/" component={Home}/>
                  <Route path="/register" component={Register}/>
                  <Route path="/exercises" 
                    render = {(props) => (
                    <Exercises {...props} exercises = {this.state.exercises}
                    chosenExerciseSetID={this.chosenExerciseSetID}/>)}/>
                  <Route path="/login" component = {Login}/>
                  <Route path="/logout" component = {Logout}/>
                  <Route path="/workoutFolder" 
                    render = {(props) => (
                    <WorkoutFolder {...props} userIDSet={this.userIDSet} getFolderWorkouts = {this.getFolderWorkouts} getUserFolders = {this.getUserFolders} folders= {this.state.wFolders}/>)}/>
                  
                  
                  <Route path="/AddWorkoutFolder" 
                  render = {(props) => (
                    <AddWorkoutFolder {...props} user= {this.state.user}/>)}/>
                  
                  
                  
                  
                  <Route path="/workouts" 
                    render ={(props) => (
                      <Workouts {...props} workouts = {this.state.workouts} workoutSetID={this.workoutSetID} 
                      getWorkoutExercises={this.getWorkoutExercises}/>)}/>
                  <Route path ='/addWorkout'
                   render ={(props) => (
                    <AddWorkout {...props} folderID = {this.state.folderID}/>)}/>
                  <Route path = '/editWorkout' 
                   render ={(props) => (
                    <EditWorkout {...props} folderID = {this.state.folderID} workoutID={this.state.workoutID}/>)}/>
                  <Route path = '/workoutExerciseDisplay' 
                    render ={(props) => (
                    <WorkoutExerciseDisplay {...props} allExercises = {this.state.exercises} 
                    workoutExercises={this.state.workoutExercises} workoutID={this.state.workoutID}/>)}/>


                  <Route path="/addWorkoutExercise" 
                  render ={(props) => (
                    <AddWorkoutExercise {...props} chosenExercise={this.state.chosenExercise} workoutID={this.state.workoutID}/>)}/>


                  <Route path="/fastTimer" component = {FastCountdownTimer}/>

                  
      </Switch>
  </div>
 
  </div> 

);
}
}

export default App;