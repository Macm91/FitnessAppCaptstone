import React, { useState ,useEffect } from "react";
import AddWorkoutFolder from "./AddWorkoutFolder";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";



const WorkoutFolder = (props) => {
    const [folders, setFolders] = useState([])
    const [workouts, setWorkouts] = useState([])
    const [clicked, setClicked] = useState(false)
    console.log(folders);
    
    useEffect(()=> {
        setFolders(props.folders);
    }, [props])

    console.log("folders from components",folders);


    const handleClick= (val) =>{
        let response = props.getFolderWorkouts(val);
        // console.log("handleclick response: ",response)
        // setWorkouts(response);
        // console.log("workouts from handle clicke",workouts);
        setClicked(true)



  }


    if (clicked){
        return(<Redirect to = {{
            pathname:"/workouts",
            props: {workouts: workouts} }}/>);
    }
    return(
        <div className="WF_list">
        
                {folders.map((val, index)=> {
                    
                    return(
                        <div>
                        
                        {/* <button className="folderButton" onClick={event => {props.getFolderWorkouts(val.id)}}> */}
                        <button className="folderButton" onClick={event => {handleClick(val.id)}}>
                        <div key={index}>
                            <h3> {val.folder_name}</h3>
                            <p>{val.folder_description}</p> 
                            <p>{val.id}</p>                           
                            <Link to='/workouts'></Link>



                            
                        </div>
                        </button>
                        
                        </div>
                    )
                })}
            <AddWorkoutFolder/>
            <button>
                <Link to='/exercises'>Exercises</Link>
            </button>
        </div>
    );
}

export default WorkoutFolder


