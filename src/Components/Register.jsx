import React from "react";
import axios from "axios";
import { Component } from "react";

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
  };

  registerUser = (newUser) => {
    axios.post("http://127.0.0.1:8000/api/auth/register/", newUser);
  };

  render() {
    return (
      <div>
        <form
          className="register"
          onSubmit={(event) => this.handleSubmit(event)}
        >
          <label>First Name</label>
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
          <button type="submit">Register!</button>
        </form>
      </div>
    );
  }
}

export default Register;
