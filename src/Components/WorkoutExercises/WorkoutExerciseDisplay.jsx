import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";



const WorkoutExerciseDisplay = (props) => {
    const[wExercises, setWExercises] = useState([])
    const [allExercises, setAllExercises] = useState([])
    
    useEffect(()=> {
        setWExercises(props.workoutExercises)
        setAllExercises(props.allExercises)
    }, [props]);

    console.log (wExercises);
    console.log(allExercises)
   
    const handleClick = (e) =>{
        axios.delete(`http://127.0.0.1:8000/api/wf/workout/edit/exercise/${e}/`)
        alert ("Exercise Successfully Deleted")
    }


 
    // const getExerciseName = async (fk)=>{
    //     let response = await axios.get(`http://127.0.0.1:8000/api/wf/exercises/${fk}/`);
    //     console.log("exercise name", response.data);
    //     setExerciseName(response);
    //   }


    //a function: If val.workout == exercise ID , return Exercise Name 
    return(
        <div className="WF_list">
        <h1>Workout Exercises</h1>
                {wExercises.map((val, index)=> {
                    
                    
                    return(
                        <div>
                        
                       
                        <div key={index}>
                            <div>
                {/* {allExercises.filter(allExercises => allExercises.includes(val.id )).map(name =>(
                        <h2>
                            {name}
                        </h2>
                    ))} */}
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
        </div>
    );
}

export default WorkoutExerciseDisplay


