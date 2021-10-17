import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";
import "./EditWorkout.css";

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
        editWorkout(body);

  }

  const editWorkout = (e) => {
      axios.put(`http://127.0.0.1:8000/api/wf/workout/edit/${e.id}/`, e)
};


    const handleDeleteClick = (e) =>{
        axios.delete(`http://127.0.0.1:8000/api/wf/workout/edit/${e}/`)
        alert ("Workout Successfully Deleted")
    }


    return(
        <div className="EditList">
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
        

          <button className="submit_btn" type ="submit"> Update </button>
          </form>



          <button className="delete" onClick={event => {handleDeleteClick(id)}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                </svg> Delete
          </button>
        </div>
       




        
    );
}

export default WorkoutFolder


