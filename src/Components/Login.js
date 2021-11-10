import React, { Component } from 'react'
import { Link } from "react-router-dom";
import './../App.css';
// function login() {
//     var data =[]
//     data this.ref.email
// }


// function Login() {
//     return (
//         <form >
//             <h1>Login Form</h1>
//             <br />
//             <div>
//                 <label>Email</label>
//                 <input type="email" placeholder="Email" ref="email"></input>
//             </div>
//             <br />
//             <div>
//                 <label>Password</label>
//                 <input type="password" placeholder="Password" ref="password" ></input>
//             </div>
//             <br />
//             <div>
//                 <button onClick={() => { login() }}>Login</button>
//             </div>
//             <br />
//             <div>
//                 <Link to="/CNA"><p>Create New Account</p></Link>
//             </div>
//         </form>
//     );
// }
/////////////////////////////////////////////////////////////


// export default class Login extends Component {
//     login() {
//         //alert("Login Called");
//         console.warn(this.state)
//         fetch('https://userapiforltiproject.azurewebsites.net/api/Token/Authenticate',
//             {
//                 method: "POST",
//                 headers: {
//                     "Accept": "application/json",
//                     "Content-Type": "application / json"

//                 },
//                 body: JSON.stringify(this.state)
//             }).then((result) => {
//                 result.json().then((resp) => {
//                     // var resp = JSON.parse(resp).access_token
//                     // localStorage.setItem(this.state.UserName1, JSON.stringify(resp))
//                     // console.warn(this.state.UserName1, JSON.stringify(resp));
//                     var token = JSON.parse(resp).access_token
//                     var role = JSON.parse(resp).Role
//                     localStorage.setItem(this.state.UserName1, JSON.stringify(token))
//                     console.warn(this.state.UserName1, JSON.stringify(resp));
//                     if (role == "Admin") {
//                         alert("This is admin")
//                     }
//                     else if (role == "User") {
//                         alert("This is User")
//                     }
//                 })
//             })
//     }
export default class Login extends Component {
    login() {
        //alert("Login Called");
        //console.warn(this.state)
        fetch('https://userapiforltiproject.azurewebsites.net/api/Token/Authenticate',
            {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"

                },
                body: JSON.stringify(this.state)
            }).then((result) => {
                result.json().then((resp) => {
                    var token = JSON.parse(resp).access_token
                    var role = JSON.parse(resp).Role
                    var User_Validity = JSON.parse(resp).Error
                    if (User_Validity == "unauthorized") {
                        alert("Invalid Username and Password")
                    }
                    else if (User_Validity === "None") {
                        localStorage.setItem(this.state.UserName1, JSON.stringify(token))
                        //localStorage.setItem("Token", JSON.stringify(token))
                        //console.warn(this.state.UserName1, JSON.stringify(resp));
                        if (role == "Admin") {
                            //window.location = "/Details"
                            alert("This is admin")
                        }
                        else if (role == "User") {
                            //window.location = "/Chat"
                            alert("This is usser")
                        }
                    }
                })
            })
    }
    render() {
        return (
            <div className="Container">
                <div className="Inner-Container">
                    <input type="text" placeholder="Username" onChange={(e) => { this.setState({ UserName1: e.target.value }) }} /> <br /><br />
                    <input type="password" placeholder="Password" onChange={(e) => { this.setState({ UserPassword: e.target.value }) }} /> <br /><br />
                    <button onClick={() => this.login()}>Login</button>
                </div>
            </div>
        )
    }
}



