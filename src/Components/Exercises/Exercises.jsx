import React, { useState ,useEffect } from "react";
import { Redirect } from "react-router";
import "./Exercises.css";

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
        <h3 className="h3Ex">Select an exercise:</h3>
                {exercises.map((val, index)=> {
                    return(
                        
                        
                        <div key={index}>
                        <button className="exerciseBtn" onClick={event => {handleClick(val.name)}}>
                        
                            <p> <b>{val.name}</b><br/>
                            Boady Part: {val.body_part}  
                            <br/>   Equipment: {val.equipment}</p>
                            
                      
                        </button>
                        </div>
                        
                        
                    )
                })}
           
        <AddExerciseForm/>
        </div>
    );
//     }
// }
}

export default Exercises


