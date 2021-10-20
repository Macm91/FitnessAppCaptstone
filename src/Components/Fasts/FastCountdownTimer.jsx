import React, { useEffect, useRef, useState } from "react";
import "./FastCountdownTimer.css";




 const FastCountdownTimer = () => {

    const [endTime, setEndTime] = useState("00")
    const [startTime, setStartTime] = useState(Date)
    const [totalTime, setTotalTime] = useState()
    const [isActive, setIsActive] = useState(false)
    const [time, setTime] = useState(0)
    const [count, setCount] = useState(16)


    const increment=()=>{
      setCount(count+1)
    };

    const decrement=()=>{
      setCount(count-1)
    };




    

return(
    <div className="fastingTimer">
      

      <div className="buttons">
        <h1>
        <button className="increment" onClick={increment}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
          </svg>
        </button>
          Current Count: {count}
        <button className="decrement" onClick={decrement}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
          </svg>
        </button>
        </h1>
      </div>


    </div>
);


}

export default FastCountdownTimer;


