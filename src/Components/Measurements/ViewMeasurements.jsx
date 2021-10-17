import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from "react-router";
import axios from "axios";
import {Line} from 'react-chartjs-2';




const ViewMeasurements = (props) => {
    const [user, setUser] = useState([])
    const [measurements, setMeasurements] = useState([])
    // const [openTable, setOpenTable] = useState(false)
    const [chartData, setChartData] = useState({})
    const [userMeasurements, setUserMeasurements] = useState([])
    const [bodyPart, SetBodyPart] = useState('Weight')
    const [dates, setDates] = useState([])
    

    
    
    
    useEffect(()=> {
        setUser(props.user);
        initiate()
    }, [props])



    const initiate = (e) =>{
        console.log("waiting");
        console.log(user, "waiting")
        get_user_measurements()
    }



    const chart = ()=>{
        setChartData({
            labels:[1,2,3,4,5,6,7,8,9,10],
            datasets:[
                {
                    label: bodyPart,
                    data: measurements,
                    badkgroundColor: [
                        'rgba(75, 192, 192, .06)'
                    ],
                    borderWidth: 4
                }
            ]
        })
    }


//     const handleClick= (val) =>{
        
//   }


  const get_user_measurements = async() =>{
    setUser(props.user);
      let response = await axios.get(`http://127.0.0.1:8000/api/measurements/all/${user}`);
      setMeasurements(response.data);
      console.log("Measurements",measurements);

      chart();
    //   console.log("Measurement data set in view mes",response.data);
    //   props.setUserMeasurements(response.data)
  }
   



    // if (clicked){
    //     return(
            
    //     );
    // }
    return(
        <div className="WF_list">
       
       <div className="WF_list">
        <h1> Measurements Table</h1>
               
            <div style= {{height: "500px", width: "500px"}}>
               <Line data = {chartData} options = {{
                   responsive: true,
                   title: {text: "Measurements", display: true},
               }}/>
            </div>



        </div>

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







