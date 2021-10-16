import React, { useState ,useEffect } from "react";
import {Line} from 'react-chartjs-2';




const MeasurementsTable = (props) => {
    
   

  
    return(
        <div className="WF_list">
        <h1> Measurements Table</h1>
               

               <Line 
                data = {{
                    labels:['Red', 'Blue', 'Yellow', 'Green', 'Blue']
                }}
                height = {400}
                width = {600}
                options = {{
                    maintainAspectRatio: false
                }}
                />
            
        </div>
    );
}

export default MeasurementsTable







