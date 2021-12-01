import React from "react";
import "./FastCountdownTimer.css";


 const FastHistList = (props) => {
   
        props.fastHist.map((val, index)=>{
        return(
          <div key={index}>
              <h3> {val.start}</h3>
                  <p>{val.total_duration}</p> 
                  <hr/>  
          </div>
        )
      })
    }


export default FastHistList;