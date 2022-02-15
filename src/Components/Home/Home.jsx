import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import "./Home.css";
import { Redirect } from "react-router";
import Calendar from "../Calendar"



const Home = (props) => {
  const [clicked, setClicked] = useState(false)
  const[fasting, setFasting] = useState(false)
  const [measure, setMeasure] = useState(false)


  if (clicked){
    return(<Redirect to = '/workoutFolder'/>);
}
  if (fasting){
    return(<Redirect to='/getFastHistory'/>);
}
if (measure){
  return(<Redirect to='/viewMeasurements'/>);
}
  return ( 
    <div>


      <Container>
  <Row>
    <Col xs={6} md={4}>
      
      <button className="Btn" id="wf" onmouseover="bigImg(this)" onClick={()=>setClicked(true)}>
       <img src="./victor-freitas-hOuJYX2K5DA-unsplash.jpeg" alt = "Workouts" />
       <p className="label">Workouts</p>
            </button>
    </Col>
    <Col xs={6} md={4}>
    <button className="Btn" onClick={()=>setFasting(true)}> 
        <img src="./fasting.jpg" alt = "Fasting" />
        <p className="label">Start A Fast</p>
            </button>
    </Col>
    <Col xs={6} md={4}>
      <button className="Btn" onClick={()=>setMeasure(true)}>
      <img src="./jennifer-burk-ECXB0YAZ_zU-unsplash.jpeg" alt = "workout folder" thumbnail/>
        <p className="label">Measurments</p>
    </button>
      
    </Col>
  </Row>
</Container>


<div id='calendar'><Calendar/></div>
      


            
    </div>



   );
}

export default Home ;



