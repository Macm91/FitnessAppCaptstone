import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";



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
        <div className="WF_list">
        <h1>Workout Exercises</h1>
                {wExercises.map((val, index)=> {
                    
                    
                    return(
                        <div>
                        
                       
                        <div key={index}>
                            <div>
                                </div>
                            <div>
                            <h3> {val.exercise}: </h3> 
                            <h4> {val.weight} </h4>
                            <p>{val.sets} x {val.reps}</p>
                            <p><small> Notes: {val.notes}</small> </p> 
                            </div>


                            <button onClick={event => {handleClick(val.id)}}>
                                Delete 
                            </button>
                        </div>
                      
                        
                        </div>
                    )
                })}
            
            <button> <Link to='/exercises'>Add Exercise </Link></button>


            <button onClick={event => {handleComplete()}}> Complete Workout </button>
        </div>
    );
}
}




export default WorkoutExerciseDisplay