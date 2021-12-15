import React, { Component, useState } from "react";
import axios from "axios";
import "./Exercises.css";
import { Redirect } from "react-router";



const AddExercise = (props) => {
    const [name, setName] = useState('')
    const [bodyPart, setBodyPart] = useState('')
    const [equipment, setequipment] = useState('')
    const [home, setHome] = useState(false)


const handleChangeName= (event) => {
    setName(event.target.value)
}

const handleChangeBodyPart= (event) => {
    setBodyPart(event.target.value)
}

const handleChangeEquipment= (event) => {
    setequipment(event.target.value)
}

const createExercise = (newEx) => {
    axios.post("http://127.0.0.1:8000/api/wf/addexercise/", newEx).then(setHome(true))
}

const handleSubmit = (event) => {
        event.preventDefault();
        let form= {
         name : name,
         body_part : bodyPart, 
         equipment : equipment
         };
         createExercise(form);
}

if (home){
    return(
        <Redirect to= '/workoutFolder'/>
        );
}

return ( 
               <div className="addExercise">
                   <h4 id="add">Add Exercise</h4>
               <form onSubmit= {handleSubmit}>
                   <label>Exercise Name</label>
                   <input name="name" onChange={handleChangeName} value={name}/>
                   <label>Body Part</label>
                   <input name="body_part" onChange={handleChangeBodyPart} value={bodyPart}/>
                   <label>Equipment</label>
                   <input name="equipment" onChange={handleChangeEquipment} value={equipment}/>
                   <br/>
                  
                   <button type="submit">Create Exercise</button>
    
               </form>
               </div>
            );
}

export default AddExercise

// class AddExerciseForm extends Component{
//     constructor (props){
//         super(props);
//         this.state = {
//             name: "",
//             body_part:"",
//             equipment: "",
//         }
//     }

//     handleChange= (event) => {
//         this.setState ({
//             [event.target.name]: event.target.value,
//         });
//         console.log("form add", this.state)
//    }

//    handleSubmit = (event) => {
//        event.preventDefault();
//        console.log("addfolder state", this.state)
//        this.createExercise(this.state);
//    }

//    createExercise=(newEx)=>{axios.post("http://127.0.0.1:8000/api/wf/addexercise/", newEx)
// }

//    render() { 
//        return ( 
//            <div className="addExercise">
//                <h4 id="add">Add Exercise</h4>
//            <form onSubmit= {this.handleSubmit}>
//                <label>Exercise Name</label>
//                <input name="name" onChange={this.handleChange} value={this.state.name}/>
//                <label>Body Part</label>
//                <input name="body_part" onChange={this.handleChange} value={this.state.body_part}/>
//                <label>Equipment</label>
//                <input name="equipment" onChange={this.handleChange} value={this.state.equipment}/>
//                <br/>
              
//                <button type="submit">Create Exercise</button>

//            </form>
//            </div>
//         );
//    }
// }

// export default AddExerciseForm;


// // there is an issue with prevent default. Losing data before it can be sent. 