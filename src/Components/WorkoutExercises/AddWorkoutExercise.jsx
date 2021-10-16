import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";



const WorkoutExerciseDisplay = (props) => {
    const [workout, setWorkout] = useState ([])
    const [sets, setSets] = useState()
    const [reps, setReps] = useState()
    const [notes, setNotes] = useState("")
    const [exercise, setExercise] = useState()
    const [weight, setWeight] = useState ()

 
    // const [exID, ]
    
    useEffect(()=> {
        setExercise(props.chosenExercise);
        setWorkout(props.workoutID)
    }, [props]);

console.log ("addex exercises", exercise)
console.log ("addex userID", workout)




const handleSubmit = (event) => {
    event.preventDefault();
    let newExercise = {
        exercise : exercise,
        workout : workout, 
        weight : weight,
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

const handleChangeWeight =(event)=>{
    setWeight(event.target.value)
}




    return(
        <div className="WF_list">
        {/* form with handle change and submit  */}
        {/* button with onclick submit  */}



        <div>
            <label><large>Weight</large></label>
                <input
                    name="weight"
                    onChange={handleChangeWeight}
                    value={weight}
                />
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
          
          <label>Notes</label>
                <input
                    name="lastname"
                    onChange={handleChangeNotes}
                    value={notes}
                />
            <form
            className="addExercise"
            onSubmit={(event) => handleSubmit(event)}
            >
            
            <button type="submit">Create Workout</button>
            </form>
            </div> 


        </div>

    );
}

export default WorkoutExerciseDisplay


