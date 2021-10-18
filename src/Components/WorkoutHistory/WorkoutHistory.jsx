import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./WorkoutHistory.css";




const WorkoutHistory = (props) => {
    const [user, setUser] = useState([])
    const [workoutHistory, setWorkoutHistory] = useState([])
    const [conditonal, setConditional] = useState(false)
    
    
    
    useEffect(()=> {
        setUser(props.user);
    }, [props])


    const handleClick = () =>{
        get_user_workout_history();
    }


    const get_user_workout_history = async() => {
        let response = await axios.get(`http://127.0.0.1:8000/api/wf/workout/history/${user.user_id}/`)
        setWorkoutHistory(response.data)
        setConditional(true)
    }

    if (!conditonal){
        return(
        <button className="clicktoOpen" onClick={event=>{handleClick()}}><h1> Click to Open</h1></button>
            );
    }else{
    return(
        <div className="WF_list">
        <h1>Workout History</h1>
                {workoutHistory.map((val, index)=> {
                    
                    return(
                        <div>
                        
                        <table>
                        <div key={index} on>
                            
                            <tr>
                            <h3> {val.workout}</h3>
                            <p>{val.date}</p> 
                            </tr>               
                            



                        </div>
                        </table>
                        
                        </div>
                    )
                })}
            
            
        </div>
    );
    }
}

export default WorkoutHistory


