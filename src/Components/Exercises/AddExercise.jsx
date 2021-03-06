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
