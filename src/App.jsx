import React from "react";
import { useSelector } from "react-redux";
import Login from "./Components/Login";
import Logout from "./Components/Logout/Logout";
import { selectUser } from "./features/userSlice";


const App = () => {
  const user = useSelector(selectUser);
  console.log (React.version);



return(
  <div>
    {user ? <Logout/> : <Login/>}
    
  </div>

);

}

export default App;