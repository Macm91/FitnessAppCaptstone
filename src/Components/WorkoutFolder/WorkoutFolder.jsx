import React, { useState ,useEffect } from "react";
import AddWorkoutFolder from "./AddWorkoutFolder";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";



const WorkoutFolder = (props) => {
    const [folders, setFolders] = useState([])
    const [workouts, setWorkouts] = useState([])
    const [clicked, setClicked] = useState(false)
    const [add, setAdd] =useState(false)
    
    
    useEffect(()=> {
        setFolders(props.folders);
    }, [props])




    const handleClick= (val) =>{
        let response = props.getFolderWorkouts(val);
        console.log("handleclick response: ",response)
        setWorkouts(response);
        console.log("workouts from handle clicke",workouts);
        setClicked(true)
  }

    const handleLoad = (e) => {
        e.preventDefault();
        console.log("workout folder UserID",e)
        props.userIDSet(e);
        setAdd(true)
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
                        
                        <button className="folderButton" onClick={event => {handleClick(val.id)}}>
                        <div key={index} on>
                            <h3> {val.folder_name}</h3>
                            <p>{val.folder_description}</p> 
                            <p>{val.id}</p>                           
                            



                            <button onClick={event =>{handleLoad(val.user)}}><Link to='/AddWorkoutFolder'> Add Folder</Link></button>
                        </div>
                        </button>
                        
                        </div>
                    )
                })}
            
            <button >
                <Link to='/AddWorkoutFolder'>Add Folder</Link>
            </button>
        </div>
    );
}

export default WorkoutFolder


