import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";

// I want this to have the add exercises component at the end. 

const WorkoutFolder = (props) => {
    const [folderID, setFolderID] = useState()
    const [name, setName] = useState('')
    const [notes, setNotes] = useState('')
    const [id, setID] = useState ()


    
    useEffect(()=> {
        setID(props.workoutID)
        setFolderID(props.folderID)
    }, [props])

    console.log ("from Edit Workout COmponent workout id",id)
    console.log ("from Edit Workout COmponent folderID",folderID)
    


    const handleChangeName =(event)=>{
        setName(event.target.value)
    }

    const handleChangeNotes =(event)=>{
        setNotes(event.target.value)
    }

  

    const handleSubmit= () =>{
        let body = {
            id: id,
            workout_folder: folderID,
            notes: notes,
            name: name
        }
        console.log (body);
        editWorkout(body)
      

  }

  const editWorkout = (e) => {
      axios.put(`http://127.0.0.1:8000/api/wf/workout/edit/${e.id}/`, e)
};
// function works. Just need to create the form now 

    return(
        <div className="WF_list">
        <h1> Edit Workout </h1>

        <form
          className="editWorkoutForm"
          onSubmit={() => handleSubmit()}
        >
          <label>Workout Name</label>
          <input
            name="firstname"
            onChange={handleChangeName}
            value={name}
          />
          <label>Notes</label>
          <input
            name="lastname"
            onChange={handleChangeNotes}
            value={notes}
          />
        

          <button type ="submit"> Update </button>
          </form>
        </div>
       




        
    );
}

export default WorkoutFolder


