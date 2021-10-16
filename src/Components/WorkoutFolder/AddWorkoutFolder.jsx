import React, { useEffect, useState } from "react";
import axios from "axios";


const AddWorkoutFolder = (props) => {
    const[folder_description, setFolder_description] = useState('')
    const [folder_name, setFolder_name] = useState ('')
    const [user, setUser] = useState()

            
    useEffect(()=> {
        console.log(props.user);
        setUser(props.user.user_id);
    }, [props])


  const addWorkoutFolder = (wf) => {
      axios.post('http://127.0.0.1:8000/api/wf/add/folder/', wf)
  } 


    const handleChangeName= (event) => {
        setFolder_name(event.target.value)
   }

   const handleChangeDescription= (event) => {
    setFolder_description(event.target.value)
}

   const handleSubmit = (e) => {
       debugger
       e.preventDefault();
       let wf= {
        user : user,
        folder_description : folder_description, 
        folder_name : folder_name
        };
        console.log("Add Folder: ",wf)
        addWorkoutFolder(wf);
   }
    
    
    
        return(
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Folder Name</label>
                    <input name="folder_name" onChange={handleChangeName} value={folder_name}/>
                <label>Folder Description</label>
                    <input name="folder_description" onChange={handleChangeDescription} value={folder_description}/>

                <button type="submit">Add Folder</button>

            </form>
        );

      
}


export default AddWorkoutFolder


// onSubmit= {handleSubmit}