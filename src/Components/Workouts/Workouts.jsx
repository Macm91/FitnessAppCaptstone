import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";


const Workouts = (props) => {
//    console.log ("about", props.location.aboutProps)
    const [workouts, setWorkouts] = useState([])
    const [folderID, setFolderID] = useState()
    console.log("component workout", workouts)

useEffect(()=>{
    setWorkouts(props.workouts)
    setFolderID(props.folderID)
},[props])


        return(
        <div className="WF_list">
         <h1>Workouts</h1>
         <div>
                {workouts.map((val, index)=> {
                    return(
                        <div>
                            <button>
                        <div key={index}>
                            
                            <h3> {val.name}</h3>
                            <p>{val.notes}</p>
                           
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

