import React, { useState ,useEffect } from "react";
import AddWorkoutFolder from "./AddWorkoutFolder";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import "./WorkoutFolder.css";



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

    // const handleLoad = (e) => {
    //     e.preventDefault();
    //     console.log("workout folder UserID",e)
    //     props.userIDSet(e);
    //     setAdd(true)
    // }


    if (clicked){
        return(<Redirect to = {{
            pathname:"/workouts",
            props: {workouts: workouts} }}/>);
    }
    return(
        <div className="WF_list"  > 
            <h1>Workout Folders</h1>
            <button className="addBtn">
                    <Link to='/AddWorkoutFolder'><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-folder-plus" viewBox="0 0 16 16">
                        <path d="m.5 3 .04.87a1.99 1.99 0 0 0-.342 1.311l.637 7A2 2 0 0 0 2.826 14H9v-1H2.826a1 1 0 0 1-.995-.91l-.637-7A1 1 0 0 1 2.19 4h11.62a1 1 0 0 1 .996 1.09L14.54 8h1.005l.256-2.819A2 2 0 0 0 13.81 3H9.828a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 6.172 1H2.5a2 2 0 0 0-2 2zm5.672-1a1 1 0 0 1 .707.293L7.586 3H2.19c-.24 0-.47.042-.683.12L1.5 2.98a1 1 0 0 1 1-.98h3.672z"/>
                        <path d="M13.5 10a.5.5 0 0 1 .5.5V12h1.5a.5.5 0 1 1 0 1H14v1.5a.5.5 0 1 1-1 0V13h-1.5a.5.5 0 0 1 0-1H13v-1.5a.5.5 0 0 1 .5-.5z"/>
                        </svg></Link>
            </button>
            
            <div className="col  w-auto h-20 overflow-scroll">
                {folders.map((val, index)=> {
                    
                    return(
                        <div >
                        
                        
                        <div key={index} >
                        <button className="folderButton" onClick={event => {handleClick(val.id)}}>
                            <h3> {val.folder_name}</h3>
                            <p>{val.folder_description}</p> 
                            </button>
                            



                            {/* <button onClick={event =>{handleLoad(val.user)}}><Link to='/AddWorkoutFolder'> Add Folder</Link></button> */}
                        </div>
                        
                        
                        </div>
                    )
                
                })}
            </div>
            
            
        </div>
    );
}

export default WorkoutFolder


