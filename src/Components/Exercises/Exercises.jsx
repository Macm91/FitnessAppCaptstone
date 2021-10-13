import React, { useState ,useEffect } from "react";

// import { render } from "@testing-library/react";

import AddExerciseForm from "./AddExercise";

const Exercises = (props) => {
    console.log("exercise props", props.exercises);
    const [exercises, setExercises] = useState([]);
    const [ex, setEx] = useState();

    // const [searchTerm, setSearchTerm] = useState('');
    console.log ("exercises in Exercises Comp", exercises);
   
    useEffect(()=> {
        setExercises(props.exercises);
    }, [props])
    


    

        return(
        <div className="exercise_list">
        
                {exercises.map((val, index)=> {
                    return(
                        <ul>
                        <button>
                        <div key={index}>
                            <h3> {val.name}</h3>
                            <p> {val.body_part}</p>
                            <p> {val.equipment}</p>
                        </div>
                        </button>
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


