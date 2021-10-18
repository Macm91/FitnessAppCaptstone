import React, { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
// import { Redirect } from "react-router";
import axios from "axios";
import {Line} from 'react-chartjs-2';
import "./ViewMeasurements.css"




const ViewMeasurements = (props) => {
    const [user, setUser] = useState([])
    const [chartData, setChartData] = useState({})
    const [measurements, setMeasurements] = useState([])
    
    

    let userMeasurements =[]
    let bodyPart =[]
    let date = [] 
    
    
    
    useEffect(()=> {
        setUser(props.user);
        initiate()
    }, [props])



    const initiate = (e) =>{
        console.log("waiting");
        console.log(user, "waiting")
        get_user_measurements()
    }

    const handleClick= (e) =>{
        console.log(e)
        const M = userMeasurements.push(e.measurement)
        console.log(M);
        const bp = bodyPart.push(e.body_part)
        const D = date.push(e.date)
        console.log(bp)
        console.log(bodyPart)
        console.log (date);
        chart();
        
        // let BP = val.body_part;
        // let M = val.measurement;
        // let D = val.date;

        // if (BP == Hips){

        // }
   }


    const chart = ()=>{
        setChartData({
            labels:[1,2,3,4,5,6,7,8,9,10],
            datasets:[
                {
                    label: bodyPart,
                    data: userMeasurements,
                    badkgroundColor: [
                        'rgba(75, 192, 192, .06)'
                    ],
                    borderWidth: 4
                },
                {
                    label: "Weight",
                    data: [140, 150, 155, 145],
                    fill: false,
                    borderColor: "#98B9AB"
            
                }
            ]
        })
    }




  const get_user_measurements = async() =>{
    setUser(props.user);
      let response = await axios.get(`http://127.0.0.1:8000/api/measurements/all/${user}`);
      setMeasurements(response.data);
      console.log("Measurements",measurements);
      chart();
    //   console.log("Measurement data set in view mes",response.data);
    //   props.setUserMeasurements(response.data)
  }
   


    
    return(
        <div className="WF_list">
       
       <div className="WF_list">
        <h1> Measurements Table</h1>
               
            <div style= {{height: "600px", width: "600px", color: "whitesmoke"}}>
               <Line className="chart" data = {chartData} options = {{
                   responsive: true,
                   title: {text: "Measurements", display: true, color:"white.l"},
               }}/>
            </div>

            <button className="addMeasurements">
                        <Link className="addMesLink"  to='/addMeasurements'>Add Measurement</Link>
                        </button>

        </div>

           <h1> Measurements </h1>
                {measurements.map((val, index)=> {
                    
                    return(
                        <div>
                        
                        {/* <button className="folderButton" onClick={event => {handleClick(val.id)}}> */}
                        <div key={index}>
                            <button onClick={event => {handleClick(val)}}>
                            <h3> {val.body_part}</h3>
                            <p>{val.measurement}</p> 
                            <p>{val.date}</p>                           
                            </button>

                        </div>
                        </div>
                        
                    )
                })}
            
            
            
            
        </div>
    );
}

export default ViewMeasurements







