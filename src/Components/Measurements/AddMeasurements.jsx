import React, { useState ,useEffect } from "react";
// import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";



const WorkoutFolder = (props) => {
    const [user, setUser] = useState([])
    const [measurement, setMeasurement] = useState()
    const [openTable, setOpenTable] = useState(false)
    const [bodyPart, setBodyPart] = useState('')
   
    
    
    
    useEffect(()=> {
        setUser(props.user);
    }, [props])




//     const handleClick= (val) =>{
        
//   }


  const add_user_measurements = async(body) =>{
      debugger
      console.log("Add User Measurements",body)
      let response = await axios.post(`http://127.0.0.1:8000/api/measurements/add/`, body);
      setMeasurement(response.data);
      console.log(response.data)
      setOpenTable(true)
  }
   

  const handleChangeBP= (event) => {
    setBodyPart(event.target.value)
}

const handleChangeM= (event) => {
    setMeasurement(event.target.value)
}

const handleSubmit = (e) => {
   e.preventDefault();
   let body = {
    user : user,
    body_part : bodyPart,
    measurement : measurement
}
    console.log("Add Measurement: ",body)
    add_user_measurements(body);
}


    if (openTable){
        return(
            <Redirect to = '/viewMeasurements'/>
        );
    }
    return(
        <div className="WF_list">
        <h1> Add Measurements </h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Body Part</label>
                    <input name="bodyPart" onChange={handleChangeBP} value={bodyPart}/>
                <label>Measurement</label>
                    <input name="measurement" onChange={handleChangeM} value={measurement}/>

                <button type="submit">Add Measurement</button>

            </form>
                
            
            <button >
                
            </button>
        </div>
    );
}

export default WorkoutFolder







