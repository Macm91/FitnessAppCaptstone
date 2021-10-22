import React, { useEffect, useState } from "react";
import "./FastCountdownTimer.css";
import axios from "axios";

const FastingHistory = (props) => {
    const [userFasts, setUserFasts] = useState([])
    const [currentFast, setCurrentFast] = useState({})
    const [user, setUser] = useState ()
    const [opened, setOpened] = useState(false)


    useEffect(()=> {
        setUser(props.user)
      }, [props.user])



      const get_user_fast = async() => {
          console.log(user)
        let response = await axios.get(`http://127.0.0.1:8000/api/fasts/all/${user}`)
        setUserFasts(response.data)
        setOpened(true)
        console.log(user)
        console.log("FAsting history",response.data)
    
    } 

    if ( !opened){
        return(
            <button onClick={get_user_fast}>Get Fasting History</button> 
            );
    }else{

    return(
        <div>
            Hello
        </div>

    );
    };
}

export default FastingHistory;