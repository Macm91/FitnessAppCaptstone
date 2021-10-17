import React from "react";
import axios from "axios";
import { Component } from "react";
import "./Register.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      first_name: "",
      last_name: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    let newUser = {
      username: this.state.username,
      password: this.state.password,
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
    };
    console.log(newUser);
    console.log(this.state);
    this.registerUser(this.state);
    alert ("User Created. Go to Login");
  };

  registerUser = (newUser) => {
    axios.post("http://127.0.0.1:8000/api/auth/register/", newUser);
  };

  render() {
    return (
      <div className="register">


                

        <form className="register_form" onSubmit={(event) => this.handleSubmit(event)}>
         
          <h1>Register </h1>
          <label for="floatingInput">First Name</label>
              <input
                name="firstname"
                onChange={this.handleChange}
                value={this.state.firstname}
              />
          <label>Last Name</label>
              <input
                name="lastname"
                onChange={this.handleChange}
                value={this.state.lastname}
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
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
              />
          <button className="submit_btn" type="submit">Register!</button>
        </form>

        <button className="redirect_btn">Login</button>
      </div>
    );
  }
}

export default Register;
