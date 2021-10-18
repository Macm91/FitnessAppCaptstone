import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";
import "./AddWE.css";



const AddWorkoutExercise = (props) => {
    const [workout, setWorkout] = useState ([])
    const [sets, setSets] = useState()
    const [reps, setReps] = useState()
    const [notes, setNotes] = useState("")
    const [exercise, setExercise] = useState()
    const [weight, setWeight] = useState ()
    const [clicked, setClicked] = useState(false)

 
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
    axios.post('http://127.0.0.1:8000/api/wf/workout/add/exercise/', e).then(()=>setClicked(true))
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





if (clicked){
    return(
        <Redirect to = "/workoutExerciseDisplay" />
    );
}
else{
    return(
        <div className="WF_list">
        {/* form with handle change and submit  */}
        {/* button with onclick submit  */}



        <div className="lastStep">
            <h3> Last step:</h3>
            <p>Enter the weight, sets and reps for this exercise</p>
            <form className="addtoWE">
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
          
          <label >Notes</label>
                <input id="notes"
                    name="lastname"
                    onChange={handleChangeNotes}
                    value={notes}
                />

            </form>

            <form
            className="addWE"
            onSubmit={(event) => handleSubmit(event)}
            >
            
            <button className="addWEbtn" type="submit">Add To Workout</button>
            </form>
            </div> 


        </div>

    );}
}

export default AddWorkoutExercise