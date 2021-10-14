import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {NavLink} from "react-router-dom";


const Workouts = (props) => {
    const [workouts, setWorkouts] = useState([])
  
    console.log ("about", props.location.aboutProps)




        return(
        <div className="WF_list">
        
                {/* {folders.map((val, index)=> {
                    return(
                        <div>
                        
                        <button className="folderButton" >
                        <div key={index}>
                            
                            <h3> {val.folder_name}</h3>
                            <p>{val.folder_description}</p>
                            <button onClick={()=> getFolderWorkouts(val)}>Open Folder</button>
                        </div>
                        </button>
                        
                        </div>
                    )
                })} */}
            <h1>Workouts</h1>
            {/* <button onClick={()=> getFolderWorkouts(val)}>Open Folder</button> */}
          
        </div>
    );
//     }
// }
}

export default Workouts

