import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";



const WorkoutExerciseDisplay = (props) => {
    const [exercises, setExercises] = useState ([[]])
    const [workout, setWorkout] = useState ([])
    const [sets, setSets] = useState()
    const [reps, setReps] = useState()
    const [notes, setNotes] = useState("")
    const [exerciseID, setExerciseID] = useState()

    // const [exID, ]
    
    useEffect(()=> {
        setExercises(props.exercises);
        setWorkout(props.workoutID)
    }, [props]);

console.log ("addex exercises", exercises)
console.log ("addex userID", workout)




const handleSubmit = (event) => {
    debugger
    event.preventDefault();
    let newExercise = {
        exercise_id : 1,
        workout_id : workout, 
        sets : sets,
        reps : reps, 
        notes : notes
    };
    console.log("new exercise",newExercise);
    addWorkoutExercise(newExercise);
};


const addWorkoutExercise = (e) => {
    axios.post('http://127.0.0.1:8000/api/wf/workout/add/exercise/', e)
    alert("Exercise Added")
};


const handleChangSets =(event)=>{
    setSets(event.target.value)
}

const handleChangeReps =(event)=>{
    setReps(event.target.value)
}

const handleChangeNotes =(event)=>{
    setNotes(event.target.value)
}

const handleChangeExerciseID =(event)=>{
    setExerciseID(event.target.value)
}


    return(
        <div className="WF_list">
        {/* form with handle change and submit  */}
        {/* button with onclick submit  */}



        <div>
        <label>Exercise Name</label>
                <input
                    name="lastname"
                    onChange={handleChangeNotes}
                    value={notes}
                />
            <form
            className="addExercise"
            onSubmit={(event) => handleSubmit(event)}
            >
            <label>Sets</label>
                <input
                    name="sets"
                    onChange={handleChangSets}
                    value={sets}
                />
            <label>Reps</label>
                <input
                    name="reps"
                    onChange={handleChangeReps}
                    value={reps}
                />
          

            {/* <label>
                Exercise:
                <select name="exerciseID" value={exerciseID} onChange = {handleChangeExerciseID}>
                    <option value={1}> Squat </option>

                </select>
            </label> */}
            <button type="submit">Create Workout</button>
            </form>
            </div> 


        </div>

    );
}

export default WorkoutExerciseDisplay


