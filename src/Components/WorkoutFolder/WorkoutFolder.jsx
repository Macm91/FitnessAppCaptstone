import React, { useState ,useEffect } from "react";
import AddWorkoutFolder from "./AddWorkoutFolder";
import { Link } from "react-router-dom";


const WorkoutFolder = (props) => {
    const [folders, setFolders] = useState([])
    console.log(folders);
    
    useEffect(()=> {
        setFolders(props.folders);
    }, [props])

    console.log("folders from components",folders);

        return(
        <div className="WF_list">
        
                {folders.map((val, index)=> {
                    return(
                        <div>
                        
                        <button className="folderButton">
                        <div key={index}>
                            <h3> {val.folder_name}</h3>
                            <p>{val.folder_description}</p>
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


