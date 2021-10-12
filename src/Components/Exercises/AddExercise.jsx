import React, { Component } from "react";
import axios from "axios";

class AddExerciseForm extends Component{
    constructor (props){
        super(props);
        this.state = {
            name: "",
            body_part:"",
            equipment: "",
        }
    }

    handleChange= (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        });
   }

   handleSubmit = (event) => {
       this.props.createExercise(this.state);
   }

   createExercise=(newEx)=>{axios.post('http://127.0.0.1:8000/api/wf/exercise/', newEx)}

   render() { 
       return ( 
           <footer>
           <form onSubmit= {this.handleSubmit}>
               <label>Exercise Name</label>
               <input name="name" onChange={this.handleChange} value={this.state.name}/>
               <label>Body Part</label>
               <input name="body_part" onChange={this.handleChange} value={this.state.body_part}/>
               <label>Equipment</label>
               <input name="equipment" onChange={this.handleChange} value={this.state.equipment}/>
               
              
               <button type="submit">Create Exercise</button>

           </form>
           </footer>
        );
   }
}

export default AddExerciseForm;
