import React, { useEffect, useRef, useState } from "react";
import "./FastCountdownTimer.css";
import Timer from "./Timer";
import ControlButtons from "./ControlButtons";



 const FastCountdownTimer = () => {

    const [endTime, setEndTime] = useState("00")
    const [startTime, setStartTime] = useState(Date)
    
    const [isActive, setIsActive] = useState(false);
    const [isPaused, setIsPaused] = useState(true);
    const [time, setTime] = useState(0);




    React.useEffect(() => {
        let interval = null;
      
        if (isActive && isPaused === false) {
          interval = setInterval(() => {
            setTime((time) => time + 10);
          }, 10);
        } else {
          clearInterval(interval);
        }
        return () => {
          clearInterval(interval);
        };
      }, [isActive, isPaused]);
      
      const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
        // put function in here to set start time 
      };
      
      const handlePauseResume = () => {
        setIsPaused(!isPaused);
      };
      
      const handleReset = () => {
        setIsActive(false);
        setTime(0);
      };

    //   const handleSubmit = () = {

    //   }

return(
    <div className="stop-watch">
      <Timer time={time} />
      <ControlButtons
        active={isActive}
        isPaused={isPaused}
        handleStart={handleStart}
        handlePauseResume={handlePauseResume}
        handleReset={handleReset}
      />
    </div>
);


}

export default FastCountdownTimer;




// import React, { useEffect, useRef, useState } from "react";
// import "./FastCountdownTimer.css";

// const FastCountdownTimer = () => {
//     const [timerDays, setTimerDays] = useState('00');
//     const [timerHours, setTimerHours] = useState('00');
//     const [timerMinutes, setTimerMinutes] = useState('00');
//     const [timerSeconds, setTimerSeconds] = useState('00');

//     const [endTime, setEndTime] = useState("00")
//     const [startTime, setStartTime] = useState(Date)




//     let interval = useRef();

//     const startTimer = () => {
//         const countdownDate = new Date().getTime();

//         interval = setInterval(() => {
//             const now = new Date().getTime();
//             const distance = countdownDate - now;

//             const days = Math.floor(distance / (1000 * 60 * 60 * 24));
//             const hours = Math.floor((distance % (1000 * 60 * 60 * 24)/(1000 * 60 *60)));
//             const minutes = Math.floor((distance % (1000 * 60 * 60 )/(1000*60)));
//             const seconds = Math.floor((distance % (1000 * 60))/1000);

//             if (distance < 0) {
//                 // stop timer
//                 clearInterval(interval.current)
//             } else {
//                 setTimerDays(days);
//                 setTimerHours(hours);
//                 setTimerMinutes(minutes);
//                 setTimerSeconds(seconds);
//             }



//         }, 1000);
//     };

//     useEffect(() => {
//         startTimer();
        
//     })

//     return(
//         <div>
//         <section className="timer-container">
//             <section className="timer">
//                 <div>
//                     <span className="mdi mdi-calendar-clock timer-icon">
//                         <h2>Countdown Timer</h2>
//                     </span>
//                 </div>

//                 <div>
//                     <section>
//                         <p> {timerDays} </p>
//                         <p> <small> Days</small> </p> 
//                     </section>
//                     <span>:</span>
//                     <section>
//                         <p> {timerHours} </p>
//                         <p> <small> Hours</small> </p> 
//                     </section>
//                     <span>:</span>
//                     <section>
//                         <p> {timerMinutes} </p>
//                         <p> <small> Minutes</small> </p> 
//                     </section>
//                     <span>:</span>
//                     <section>
//                         <p> {timerSeconds} </p>
//                         <p> <small> Seconds</small> </p> 
//                     </section>
//                 </div>
//             </section>
//         </section>





// <div class="container">
//    <div class="panel panel-primary">
//       <div class="panel-heading">Start A Fast</div>
//       <div class="panel-body">
//          <div class="row">
//          <div class='col-md-6'>
//                <div class="form-group">
//                   <label class="control-label">Start Time</label>
//                   <div class='input-group date' id='datetimepicker1'>
//                      <input type='text' class="form-control" />
//                      <span class="input-group-addon">
//                      <span class="glyphicon glyphicon-calendar"></span>
//                      </span>
//                   </div>
//                </div>
//             </div>
         
//             <div class='col-md-6'>
//                <div class="form-group">
//                   <label class="control-label">End Time</label>
//                   <div class='input-group date' id='datetimepicker1'>
//                      <input type='text' class="form-control" />
//                      <span class="input-group-addon">
//                      <span class="glyphicon glyphicon-calendar"></span>
//                      </span>
//                   </div>
//                </div>
//             </div>
//          </div>
//          <input type="submit" class="btn btn-primary" value="Submit"/>
//       </div>
//    </div>
// </div>



//         </div>
//     );
// };

// export default FastCountdownTimer;