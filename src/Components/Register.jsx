import React from "react";
import axios from "axios";
import { Component } from "react";
import "./Register.css";
import { Redirect } from "react-router";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
      clicked: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let newUser = 
    {
      username: this.state.username,
      password: this.state.password,
      email : this.state.email,
      first_name : this.state.first_name,
      last_name: this.state.last_name
  };
  
    console.log(newUser);
    console.log(this.state);
    this.registerUser(newUser);
    alert ("User Created. Go to Login");
  };



  handleClick = (event) => {
    event.preventDefault();
    this.setState({
      clicked: true
    });
  };

  registerUser = (newUser) => {
    axios.post("http://127.0.0.1:8000/api/auth/register/", newUser);
  };

  render() {

    if(this.state.clicked){
      return(
      <Redirect to="/login"/>
      );
    }else{
    return (
      <div className="register">


                

        <form className="register_form" onSubmit={(event) => this.handleSubmit(event)}>
         
          <h1>Register </h1>
          <label for="floatingInput">First Name</label>
              <input
                name="first_name"
                onChange={this.handleChange}
                value={this.state.first_name}
              />
          <label>Last Name</label>
              <input
                name="last_name"
                onChange={this.handleChange}
                value={this.state.last_name}
              />
          <label>Email</label>
              <input
                name="email"
                type="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
          <label>Username</label>
              <input
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
              />
          <label>Password</label>
              <input
                type = "password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
          <button className="submit_btn" type="submit">Register!</button>
        </form>

        <button className="redirect_btn" onClick={(event) => this.handleClick(event)}>Login</button>
      </div>
    );
  }}
}

export default Register;
