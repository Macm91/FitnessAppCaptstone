import React, { Component } from 'react';
import axios from 'axios';
//import jwt_decode from "jwt-decode";

class RegisterUser extends Component {
    state = {
        
        firstName: '',
        lastName: '',
        userName: '',
        password: '',
        email: '',        
        phoneNumber: ''
        
        
    }

    registerUser =async () =>{

      
       let response = await axios.post('https://localhost:44394/api/authentication', {firstName:this.state.firstName,lastName:this.state.lastName,userName:this.state.userName,email:this.state.email,password:this.state.password,phoneNumber:this.state.phoneNumber})
        
             console.log(response);
             localStorage.setItem('token' , response.token);
             const tokenFromStorage = localStorage.getItem('token');

            console.log(tokenFromStorage);

            window.location = "/";
     

          }


    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        //alert(`First Name: ${this.state.firstName} Last Name: ${this.state.lastName}`)  // add the other RegisterUser states objects?
        //TODO: call registerUser
        this.registerUser();
    };
   
        

    render(){
        return(
            <React.Fragment>
            <form onSubmit={(event) => this.handleSubmit(event)} className="container">
                <label>First Name</label>
                <input type="text" name="firstName"onChange={this.handleChange} value={this.state.firstName}/>
                <label>Last Name</label>
                <input type="text" name="lastName"onChange={this.handleChange} value={this.state.lastName}/>
                <label>User Name</label>
                <input type="text" name="userName"onChange={this.handleChange} value={this.state.userName}/>
                <label>Email</label>
                <input type="text" name="email"onChange={this.handleChange} value={this.state.email}/>
                <label>Password</label>
                <input type="text" name="password"onChange={this.handleChange} value={this.state.password}/>
                <label>Phone Number</label>
                <input type="text" name="phoneNumber"onChange={this.handleChange} value={this.state.phoneNumber}/>  
                <button type="submit">Register</button>
            </form>
            </React.Fragment>
        );
    }
}
export default RegisterUser;