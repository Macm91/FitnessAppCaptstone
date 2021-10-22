import React, { useEffect, useRef, useState } from "react";
import "./FastCountdownTimer.css";
import axios from "axios";
import FastCountdownTimer from "./FastCountdownTimer";


const GetFastHist = (props) => {
    const [clicked, setClicked] = useState(false)
    const [doubleClicked, setDoubleClicked] = useState(false)
    const [user, setUser] = useState()
    const [activeFast, setActiveFast] = useState([])

    useEffect(()=> {
        setUser(props.user)
      }, [props.user])

    const get_user_fast = async() => {
        let response = await axios.get(`http://127.0.0.1:8000/api/fasts/all/${user}`)
        let res = response.data
        const active = res.filter(res =>{return res.completed === false})
        setActiveFast(active)
        props.set_active_fast(active)
        const history = res.filter(res =>{return res.completed === true})
       props.setFastHist(history)
        
    
    } 
    
     const click = ()=> {
       get_user_fast();
       setClicked(true)
     }
    
     const doubleclick = ()=> {
      get_user_fast();
      setDoubleClicked(true)
      setClicked(false)
    }


    if (clicked){
        return(<button onClick={doubleclick}>Get Fasting History</button> );
        }
    else if (doubleClicked){
        return(
           <FastCountdownTimer user={user} activeFast={activeFast}/>
        );
    }
    else{
        return(<button onClick={click}>Get Fasting History</button>)
        }

}


export default GetFastHist