import React, { useState ,useEffect } from "react";


const Exercises = (props) => {
    const [folders, setFolders] = useState([])
    console.log(folders);
    
    useEffect(()=> {
        props.getUserFolders();
        setFolders(props.folders);
    }, [props])

    console.log(folders);

        return(
        <div className="WF_list">
        
                {/* {exercises.map((val, index)=> {
                    return(
                        <ul>
                        <button>
                        <div key={index}>
                            <h3> {val.name}</h3>
                            <p> {val.body_part}</p>
                            <p> {val.equipment}</p>
                        </div>
                        </button>
                        </ul>
                        
                    )
                })} */}
           
        
        </div>
    );
//     }
// }
}

export default Exercises


