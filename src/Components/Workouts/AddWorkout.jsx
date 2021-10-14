import axios from "axios";
import React, { useState ,useEffect } from "react";


const Workouts = (props) => {
    const [folderID, setFolderID] = useState()
    const [name, setName] = useState('')
    const [notes, setNotes] = useState('')


    useEffect(()=>{
        setFolderID(props.folderID)
    },[props.folderID])



    const handleSubmit = (event) => {
        event.preventDefault();
        let newWorkout = {
            workout_folder : folderID,
            notes : notes,
            name : name
        };
        console.log(newWorkout);
        addWorkout(newWorkout);
    };


    const addWorkout = (e) => {
        axios.post('http://127.0.0.1:8000/api/wf/workout/add_workout/', e)
    };

   
    const handleChangeName =(event)=>{
        setName(event.target.value)
    }

    const handleChangeNotes =(event)=>{
        setNotes(event.target.value)
    }

    return(
        <div>
        <form
          className="addWorkout"
          onSubmit={(event) => handleSubmit(event)}
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
          <button type="submit">Create Workout</button>
        </form>
      </div>
        );

}

export default Workouts