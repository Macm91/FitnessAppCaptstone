import React, { useState ,useEffect } from "react";
import axios from "axios";
// import { render } from "@testing-library/react";

const Exercises = (props) => {
    const [exercises, setExercises] = useState(props.exercises);
    // const [searchTerm, setSearchTerm] = useState('');
   

    // useEffect(() => {
    //     getExercises();
    // },[])

    // async function getExercises(){
    //     let response = await axios.get(`http://127.0.0.1:8000/api/wf/exercises/`)
    //     .then(response => {setExercises(response.data)})
    //     .then(setShowTable(true));
    //     console.log(response.data)
    //   }


    

    // render(){
        
    //     if(exercises == []){
    //         return("Loading")
    //     }
        
    //     else{
        return(
        <div className="exercise_list">
        {/* <input type="text" placeholder="search..." onChange={event => {setSearchTerm(event.target.value)}} /> */}
        <table>
            <tbody>
                {exercises.map((val, index)=>{
                    setExercises(val)
                    return(
                    <tr key={index} className="songdetails">
                    <th> {val.name}</th>
                    <th> {val.body_part}</th>
                    {/* Will want a button here to add exercise to workout */}
                    </tr>
                    )
                }
                )
                }
                </tbody>
                </table>
        </div>
    );
//     }
// }
}

export default Exercises


