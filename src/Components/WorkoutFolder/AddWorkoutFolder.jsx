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


    async AddUserFolders(){
        debugger
        const jwt = localStorage.getItem('token');
        // console.log("jwt", jwt);
        const bearerToken = 'Bearer ' + jwt;
        // console.log("addfolder", bearerToken);
        let stuff = this.state
        // let body = {
        //     "folder_description" : this.state.folder_description,
        //     "folder_name" : this.state.folder_name
        // }
        console.log("body", stuff)
        try{
        
        let response = await axios.post(`http://127.0.0.1:8000/api/wf/folders/`, { headers : {Authorization : bearerToken}}, stuff);
        console.log("WFA response1",response);

      }
      catch{
        const refreshToken = localStorage.getItem('refresh');
        let refreshObject = {
          refresh: refreshToken
        }
        let refreshResponse = await axios.post(`http://127.0.0.1:8000/api/auth/login/refresh`, refreshObject)
        localStorage.setItem('token', refreshResponse.data.access);


        let response = await axios.get(`http://127.0.0.1:8000/api/wf/folders/`, { headers : {Authorization : refreshResponse.data.access}}, stuff);
        console.log("WFA response2",response);
      }}
      

      createExercise=(newEx)=>{axios.post("http://127.0.0.1:8000/api/wf/addexercise/", newEx)}


    handleChange= (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        });
   }

   handleSubmit = (event) => {
       event.preventDefault();
       this.AddUserFolders();
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


