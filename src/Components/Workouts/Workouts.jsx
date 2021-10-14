import React, { useState ,useEffect } from "react";


const Workouts = (props) => {
//    console.log ("about", props.location.aboutProps)
    const [workouts, setWorkouts] = useState([])

useEffect(()=>{
    setWorkouts(props.workouts)
},[props])


        return(
        <div className="WF_list">
         <h1>Workouts</h1>
                {workouts.map((val, index)=> {
                    return(
                        <div>
                        
                        <button className="folderButton" >
                        <div key={index}>
                            
                            <h3> {val.name}</h3>
                            <p>{val.notes}</p>
                            
                        </div>
                        </button>
                        
                        </div>
                    )
                })}
           
            
          
        </div>
    );
//     }
// }
}

export default Workouts

