
import {Link} from "react-router-dom";
import React,{Component} from "react";


 export default class  CNA extends Component 
{
    render(){
    return (
        <form >
            <h1>Create New Account</h1>
            <br/>
        <div>
            <label>FullName</label>
            <input type = "text" placeholder = "FullName" ></input>
        </div>
        <br/> 
        <div>
            <label>Age</label>
            <input type = "number" placeholder = "Age" ></input>
        </div>
        <br/>
        <div>
            <label>Gender:</label>
            <input type = "radio" name = "gender" value= "male"></input>
            <label>Male</label>
            <input type = "radio" name = "gender" value= "female"></input>
            <label>Female</label>
        </div>
        <br/>
        <div>
            <label>Email</label>
            <input type = "email" placeholder = "Email" ></input>
        </div>
        <br/>
        <br/>
        <div>
            <label>Type:</label>
            <input type = "radio" name = "usertype" value= "0"></input>
            <label>User</label>
            <input type = "radio" name = "usertype" value= "1"></input>
            <label>Admin</label>
        </div>
        <br/>
        <div>
            <label>Email</label>
            <input type = "email" placeholder = "Email" ></input>
        </div>
        <br/>
        <div>
            <label>Password</label>
            <input type = "password" placeholder = "Password" ></input>
        </div>
        <br/>
        <div>
            <label>Confirm Password</label>
            <input type = "password" placeholder = "Password" ></input>
        </div>
        <br/>
        <div>
            <Link to = "/Login"><button >Submit</button></Link>    
        </div>
        <br/>     
    </form>
    );
  }
}
  //export default CNA;
  