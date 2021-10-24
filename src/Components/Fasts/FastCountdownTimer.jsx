import React, { useEffect, useState } from "react";
import "./FastCountdownTimer.css";
import axios from "axios";
import { Redirect } from "react-router";






 const FastCountdownTimer = (props) => {
    const [count, setCount] = useState(0)
    const [clicked, setClicked] = useState(false)
    const [year, setYear] = useState(new Date().getUTCFullYear())
    const [month, setMonth] = useState(new Date().getUTCMonth())
    const [day, setDay] = useState(new Date().getUTCDate())
    const [hours, setHours] = useState(new Date().getUTCHours())
    const [minutes, setMinutes] = useState(new Date().getUTCMinutes())
    const [seconds, setSeconds] = useState(new Date().getUTCSeconds())

    const [dayEnd, setDayEnd] = useState(new Date().getUTCDate())
    const [hoursEnd, setHoursEnd] = useState(new Date().getUTCHours())
    const [minutesEnd, setMinutesEnd] = useState(new Date().getUTCMinutes())
    
    const [djangoTime, setDjangoTime] = useState()
    const [djangoTimeEnd, setDjangoTimeEnd] = useState()
    const [user, setUser] = useState()
    const [hist, setHist] = useState(["Start a fast to add to fast history"])


   
    const [currentFast, setCurrentFast] = useState([])

    


    useEffect(()=> {
      console.log("user fast",props.user)
      console.log("active passed fast",props.activeFast)
      console.log("hist passed fast",props.fastHist)
    setCurrentFast(props.activeFast)
    setHist(props.fastHist)
    setUser(props.user)
    setStartInput()
  }, [props])
console.log("af",props.activeFast)

  const reset = () => {
    setCount(0);
    setHoursEnd(hours);
    setDayEnd(day)
  }

    const increment=()=>{
      setCount(count+1)
        
      if(hoursEnd<23){
          setHoursEnd(hoursEnd + 1)
      }
      else if (hoursEnd === 23){
        setDayEnd(dayEnd +1)
        setHoursEnd(0)
      }
    };


    const decrement=()=>{
      if (count === 0) {
        setCount(0)
      }
      else{
      setCount(count-1);
      decrementHours();
      }
    };

    const click=()=>{
      
        hist.map((val, index)=>{
            return(
              <div key={index}>
                  <h3> {val.start}</h3>
                      <p>{val.total_duration}</p> 
                      <hr/>  
              </div>
            )
          })
        
      
    };


    const decrementHours = () =>{
      if(hoursEnd === 0){
        setHoursEnd(23)
        setDayEnd(dayEnd -1)
    }
    else if(hoursEnd ){
      setHoursEnd(hoursEnd - 1)
    }
    };


    const setStartInput = () => {
      setYear(new Date().getUTCFullYear())
      setMonth(new Date().getUTCMonth())
      setDay(new Date().getUTCDate())
      setHours(new Date().getUTCHours())
      setMinutes(new Date().getUTCMinutes())
      setSeconds(new Date().getUTCSeconds())
      setDjangoTime(year +"-"+month+"-"+day+"T"+hours+":"+minutes+":"+seconds+"Z")
      console.log(djangoTime)
      console.log(`${djangoTime}`)
      
    }

    const setEndInput = () => {
      setDjangoTimeEnd(year +"-"+month+"-"+dayEnd+"T"+hoursEnd+":"+minutes+":"+seconds+"Z")
      console.log(djangoTimeEnd)
      console.log(`${djangoTimeEnd}`)
    }


    const addFast = () => {
      setStartInput();
      setEndInput();
      let fast = {
        "user": user,
        "start": `${djangoTime}`,
        "end": `${djangoTimeEnd}`,
        "total_duration": count,
        "completed": false
    }
    console.log(fast)
      axios.post('http://127.0.0.1:8000/api/fasts/', fast).then (()=>setClicked(true))
    
      
  } 

  const endFast = async(e) => {
    setStartInput();
    let fast = {
      "user": user,
      "start": e[0].start,
      "end": `${djangoTime}`,
      "total_duration": count,
      "completed": true
  }
  console.log("fast obj",e)
  console.log("obj of end function",fast)
  console.log("fast id", e[0].id)
    await axios.put(`http://127.0.0.1:8000/api/fasts/${e[0].id}/`, fast).then (()=>setClicked(true))
  

  } 


const StartButtons = (
  <div className="start_buttons">
    <button id="start" onClick={addFast}>Start</button>
    <button onClick={reset}>Reset</button>  
  </div>
)



const ActiveFast =(
    <div className="start_buttons">
    <button id="endbutton" onClick={(e)=>endFast(props.activeFast)}>End</button>
      </div>)
  

    


if (clicked){
  return<Redirect to='/'/>
}
else{
 
    return(
    <div>
      <div className="fastingTimer">
    
      <div class="container">
      <div class="row">
        <div class="col-2">
            <p> Start Time: <br/>
            {month}/{day} at {hours}:{minutes}</p>
        </div>

        <div class="col-8">
        <div className="buttons">
          <h1>
          <button className="decrement" onClick={decrement}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-down-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
            </svg>
          </button>
            Current Count: {count}
            <button className="increment" onClick={increment}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-up-circle" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
            </svg>
          </button>
          </h1>
        </div>
        </div>

        <div class="col-2">
        <p>End Time:   {month}/{dayEnd} at {hoursEnd}:{minutesEnd} </p>
        </div>

        
          <div className="timer-buttons">
            {props.activeFast.length === 0 ? StartButtons : ActiveFast}
          </div>

    
          
      </div>
      </div>
      </div>
      <button className="click" onClick={click}>Fasting History</button> 
      </div>
      
      )

 }
 }   


export default FastCountdownTimer;


