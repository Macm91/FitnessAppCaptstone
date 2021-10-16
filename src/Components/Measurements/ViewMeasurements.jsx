import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from "react-router";
import axios from "axios";
import MeasurementsTable from "./MeasurementsTable";




const ViewMeasurements = (props) => {
    const [user, setUser] = useState([])
    const [measurements, setMeasurements] = useState([])
    // const [openTable, setOpenTable] = useState(false)
    
    
    
    useEffect(()=> {
        setUser(props.user);
        get_user_measurements();
    }, [props])




//     const handleClick= (val) =>{
        
//   }


  const get_user_measurements = async() =>{
      let response = await axios.get(`http://127.0.0.1:8000/api/measurements/all/${user}`);
      setMeasurements(response.data);
      console.log(response.data)
  }
   

    // if (clicked){
    //     return(
            
    //     );
    // }
    return(
        <div className="WF_list">
        <h1> Measurements </h1>
           
                {measurements.map((val, index)=> {
                    
                    return(
                        <div>
                        
                        {/* <button className="folderButton" onClick={event => {handleClick(val.id)}}> */}
                        <div key={index} on>
                            <h3> {val.body_part}</h3>
                            <p>{val.measurement}</p> 
                            <p>{val.date}</p>                           
                            

                        </div>
                        </div>
                        
                    )
                })}
            
            
            <button >
                        <Link to='/addMeasurements'>Add Measurement</Link>
                        </button>
            
        </div>
    );
}

export default ViewMeasurements







