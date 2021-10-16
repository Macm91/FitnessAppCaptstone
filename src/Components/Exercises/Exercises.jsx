import React, { useState ,useEffect } from "react";
import { Redirect } from "react-router";

// import { render } from "@testing-library/react";

import AddExerciseForm from "./AddExercise";

const Exercises = (props) => {
    console.log("exercise props", props.exercises);
    const [exercises, setExercises] = useState([]);
    const [moveOn, setMoveOn] = useState(false)
    // const [ex, setEx] = useState();

    // const [searchTerm, setSearchTerm] = useState('');
    console.log ("exercises in Exercises Comp", exercises);
   
    useEffect(()=> {
        setExercises(props.exercises);
    }, [props])
    

    const handleClick = (e) =>{
        console.log ("exercise name @ exercise component: ", e);
        props.chosenExerciseSetID(e);
        setMoveOn(true);
    }
    

    // need to conditionally redirect to add workout exercise component 




    if (moveOn){
        return(<Redirect to = "/addWorkoutExercise"/>);
    }
        return(
        <div className="exercise_list">
        
                {exercises.map((val, index)=> {
                    return(
                        <ul>
                        
                        <div key={index}>
                        <button onClick={event => {handleClick(val.name)}}>
                            <h3> {val.name}</h3>
                            <p> {val.body_part}</p>
                            <p> {val.equipment}</p>
                       
                        </button>
                        </div>
                        </ul>
                        
                    )
                })}
           
        <AddExerciseForm/>
        </div>
    );
//     }
// }
}

export default Exercises


