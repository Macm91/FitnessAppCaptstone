import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";



const WorkoutExerciseDisplay = (props) => {
    const[wExercises, setWExercises] = useState([])
    
    useEffect(()=> {
        setWExercises(props.workoutExercises)
    }, [props]);

    console.log (wExercises);
   


 



  


    
    return(
        <div className="WF_list">
        <h1>Workout Exercises</h1>
                {wExercises.map((val, index)=> {
                    
                    return(
                        <div>
                        
                        {/* <form> */}
                        <div key={index}>
                            <h3> {val.sets} x {val.reps}</h3> 
                            {/* <input>{val.folder_description}</input> 
                            <input>{val.notes}</input>                            */}
                        </div>
                        {/* </form> */}
                        
                        </div>
                    )
                })}
            
            
        </div>
    );
}

export default WorkoutExerciseDisplay


