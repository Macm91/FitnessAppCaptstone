import React, { useState ,useEffect } from "react";
import AddWorkoutFolder from "./AddWorkoutFolder";
import { Link } from "react-router-dom";
import axios from "axios";


const WorkoutFolder = (props) => {
    const [folders, setFolders] = useState([])
    const [workouts, setWorkouts] = useState([])
    console.log(folders);
    
    useEffect(()=> {
        setFolders(props.folders);
    }, [props])

    console.log("folders from components",folders);


    // http://127.0.0.1:8000/api/wf/workout/folder/1

    // const getFolderWorkouts (folder) {
    //     let response =  axios.get(`http://127.0.0.1:8000/api/wf/workout/folder/${folder}`);
    //     console.log("response getFolderWorkouts",response);
    //     // setWorkouts(response);
    //     // console.log(workouts);
    //   }


        return(
        <div className="WF_list">
        
                {folders.map((val, index)=> {
                    
                    return(
                        <div>
                        
                        <button className="folderButton" onClick={()=> props.getFolderWorkouts(val.id)}>
                        <div key={index}>
                            <h3> {val.folder_name}</h3>
                            <p>{val.folder_description}</p> 
                            <p>{val.id}</p>                           
                            {/* <button  > <Link to={{
                                pathname:'/Workouts',
                                aboutProps:{
                                folder : val
                                }
                                }}>Open Folder</Link></button> */}



                            
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
//     }
// }
}

export default WorkoutFolder


