import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";


const Workouts = (props) => {
//    console.log ("about", props.location.aboutProps)
    const [workouts, setWorkouts] = useState([])
    const [folderID, setFolderID] = useState()
    const [edit, setEdit] = useState(false)
    const [clicked, setClicked] = useState(false)
    const [singleWorkout, setSingleWorkout] = useState([])
    console.log("component workout", workouts)

    useEffect(()=>{
        setWorkouts(props.workouts)
        setFolderID(props.folderID)
    },[props])

    // handleclick needs to  && set clicked to true

    const handleClick = (val) =>{
        setSingleWorkout(val);
        setEdit(true)
    }

    // handleEditClick needs to open component to edit workout && set edit to true

    const handleEditClick = (val) =>{
        setSingleWorkout(val);
        setEdit(true)
    }




    if (edit){
        return(<Redirect to = {{
            pathname:"/editWorkout",
            props: {workouts: workouts} }}/>);
    }
            return(
            <div className="WF_list">
            <h1>Workouts</h1>
            <div>
                    {workouts.map((val, index)=> {
                        return(
                            <div>
                                <button>
                                {/* <button className="exerciseOfWorkout" onClick={event => {handleClick(val.id)}}> */}
                            <div key={index}>
                                
                                <h3> {val.name}</h3>
                                <p>{val.notes}</p>
                            <button className="editWorkout" onClick={event => {handleEditClick(val.id)}}>Edit</button>
                            </div>  
                            </button>     


                            

                            </div>
                        )
                    })}
            
                
            </div>
            <button>
                    <Link to='/addWorkout'>Add Workout</Link>
                </button>
            </div>
        );
    //     }
    // }
    }

export default Workouts

