import React, { useState ,useEffect } from "react";
import axios from "axios";
// import { render } from "@testing-library/react";
import { Link } from "react-router-dom";
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
        <table>
            <tbody>
                {exercises.map((val, index)=> {
                    return(
                        <ul>
                        <button>
                        <tr key={index}>
                            <th> {val.name}</th>
                            <th> {val.body_part}</th>
                            <th> {val.equipment}</th>
                        </tr>
                        </button>
                        </ul>
                        
                    )
                })}
            </tbody>
        </table>
        <AddExerciseForm/>
        </div>
    );
//     }
// }
}

export default Exercises


