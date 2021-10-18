import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";
import "./WorkoutExercises.css";




const WorkoutExerciseDisplay = (props) => {
    const[wExercises, setWExercises] = useState([])
    const [allExercises, setAllExercises] = useState([])
    const [redirect, setRedirect] = useState(false)
    const [user, setUser] = useState ()
    const [workout, setWorkout] = useState ()
     
    useEffect(()=> {
        setWExercises(props.workoutExercises)
        setAllExercises(props.allExercises)
        setUser(props.user)
        setWorkout(props.workoutID)
    }, [props]);

    console.log (wExercises);
    console.log(allExercises)
   
    const handleClick = (e) =>{
        axios.delete(`http://127.0.0.1:8000/api/wf/workout/edit/exercise/${e}/`)
        alert ("Exercise Successfully Deleted")
    }

    const handleComplete = () =>{
        completeWorkout();
        setRedirect(true)
    }

   

    const completeWorkout = () =>{
        let wh = {
            user : user.user_id, 
            workout: workout, 
        }
        axios.post(`http://127.0.0.1:8000/api/wf/workout/history/`, wh)
    }


    if (redirect){
        return(
            <Redirect to = '/workoutHistory'/>
                );
            
        }else{
    return(
        <div className="WE_list">
        <h1>Workout Exercises</h1>
                {wExercises.map((val, index)=> {
                    
                    
                    return(
                        <div>
                        
                       
                        <div key={index}>
                            <div>
                                </div>
                            <div>
                            <input type="checkbox"/>
                            <h3> {val.exercise}: </h3> 
                            <h4> {val.weight} </h4>
                            <p>{val.sets} x {val.reps}</p>
                            <p><small> Notes: {val.notes}</small> </p> 
                            </div>


                            <button className="deletebtn" onClick={event => {handleClick(val.id)}}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                                Delete Exercise
                            </button>
                        </div>
                      
                        
                        </div>
                    )
                })}
            
            <button className="addWE"> <Link to='/exercises' style={{ color: '#FFF' , textDecoration: 'inherit'}}>
               <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg> Add Exercise
                 </Link></button>


            <button className="completeWorkout" onClick={event => {handleComplete()}}> Complete Workout </button>
        </div>
    );
}
}




export default WorkoutExerciseDisplay