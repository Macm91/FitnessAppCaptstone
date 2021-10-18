import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import "./Workout.css";


const Workouts = (props) => {
//    console.log ("about", props.location.aboutProps)
    const [workouts, setWorkouts] = useState([])
    const [folderID, setFolderID] = useState()
    const [edit, setEdit] = useState(false)
    const [singleWorkout, setSingleWorkout] = useState([])
    console.log("component workout", workouts)
    const [seeWorkoutExercises, setSeeWorkoutExercises] = useState(false)

    useEffect(()=>{
        setWorkouts(props.workouts)
        setFolderID(props.folderID)
    },[props])

  

    // handleEditClick needs to open component to edit workout && set edit to true

    const handleEditClick = (val) =>{
        props.workoutSetID(val)
        setEdit(true)
    }


    const handleClick = (val) => {
        props.workoutSetID(val);
        props.getWorkoutExercises(val);
        setSeeWorkoutExercises(true);

    }

    
    
    
    
    
    if (edit){
        return(<Redirect to = "/editWorkout"/>);
    }

    if (seeWorkoutExercises)
        return(<Redirect to = "/workoutExerciseDisplay"/>)

            return(
            <div className="WF_list" >
                            
            <h1>Workouts</h1>





            <button className="addWorkout">
                    <Link to='/addWorkout'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </Link>
                </button>



                
            <div >
                
                    {workouts.map((val, index)=> {
                        return(
                            <div>
                                
                                
                            <div key={index}>
                            <button className="exerciseOfWorkout" onClick={event => {handleClick(val.id)}}>
                                {/* this button on click will route to the exercise display  */}
                                <h3> {val.name}</h3>
                                <p>{val.notes}</p>
                                <button className="editWorkout" onClick={event => {handleEditClick(val.id)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
                                    </svg></button>
                                </button>     
                            </div>  
                            


                            

                            </div>
                        )
                    })}
            
                
            </div>

            </div>
        );
    //     }
    // }
    }

export default Workouts

