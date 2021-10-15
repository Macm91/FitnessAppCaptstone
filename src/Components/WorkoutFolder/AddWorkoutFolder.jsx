import React, { Component } from "react";
import axios from "axios";


// const AddWorkoutFolder = (props) => {
//     const [folder_name, setFolder_name] = useState('')
//     const [folder_description, setFolder_description] = useState ('')

class AddWorkoutFolder extends Component{
    constructor (props){
        super(props);
        this.state = {
            folder_description:"",
            folder_name: "",
        }
    }


  addWorkoutFolder(){

  }
      

      // createExercise=(newEx)=>{axios.post("http://127.0.0.1:8000/api/wf/addexercise/", newEx)}


    handleChange= (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        });
   }

   handleSubmit = (event) => {
       event.preventDefault();
       this.addWorkoutFolder();
   }
    
    
    render(){
        return(
            <form onSubmit= {this.handleSubmit}>
                <label>Folder Name</label>
                    <input name="folder_name" onChange={this.handleChange} value={this.state.folder_name}/>
                <label>Folder Description</label>
                    <input name="folder_description" onChange={this.handleChange} value={this.state.folder_description}/>

                <button type="submit">Add Folder</button>

            </form>
        )
    }

      
}


export default AddWorkoutFolder


