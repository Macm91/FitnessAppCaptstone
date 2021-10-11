import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
//import { Link, Switch, Route } from 'react-router';
// import NavBar from './components/NavBar';
import Registration from './components/Registration';
import Login from './components/Login';
import LandingPage from './components/LandingPage';
import jwt_decode from "jwt-decode";



export default class App extends Component {

  state= {
      user:{}

   };
  

   
  componentDidMount() {
    
    
      const jwt = localStorage.getItem('token');
      try{
      const user = jwt_decode(jwt);  
          this.setState({
            user: user
            
          });                     

              }catch {
         
       }
      }
      

  render() { 
    console.log("token", this.state.user)
    if (this.state.user === {}) {
      return (
        <React.Fragment>
          <h1>Loading...</h1>
        </React.Fragment>
      )
      } else {
        return (
        <BrowserRouter>
          <div className="App">
            
            {/* <NavBar /> */}
            <Switch>
              <Route exact path="/"  component={()=><LandingPage user = {this.state.user}/>}/>
              <Route exact path="/registration"  component={Registration}/>
              <Route exact path="/login"  component={Login}/>
              {/* <Route path="/home"  render={props => <Home {...props} user={this.state.user}/>} />               */}
            </Switch>
          </div>
        </BrowserRouter>
      
        );
    }
  }
}