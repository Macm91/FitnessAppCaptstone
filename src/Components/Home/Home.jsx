import React from "react";
import { Link } from "react-router-dom";


const Home = (props) => {
  return ( 
    <div>
      <h1> Home</h1>
      <button className="WFBtn">
              <Link to='/workoutFolder'>Workout Folders</Link>
            </button>
    </div>
   );
}

export default Home ;