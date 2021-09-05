import React, { Component } from "react";
import {BrowserRouter as Router, Link, NavLink, Redirect, Route } from "react-router-dom";
import axios from "axios";

class LoginEvent extends Component {
  
    constructor(props) {
        super(props);
            this.state = {           
             email: "default",
             password: "default",
             isaunthenticated:"flase",
             resdata:""  ,
             Nstatus: "0"         
                        };
            }
  
   handleSubmit = (event) => {
        event.preventDefault();
            const details = {
                email: this.state.email,
                password: this.state.password,
               
             };
    
    console.log("details:", details);
    console.log("this.state.email- details:", this.state.email);
    
    axios.get("http://localhost:8003/login/",{
        params: {
            email: this.state.email
        }
      })
        .then((response) => {
            console.log("Event Added Successfully..!!" + response);
            console.log("response.data",response.data);
            console.log("response.status",response.status);
            console.log("response.statusText",response.statusText);
            console.log("response.headers",response.headers);
            console.log("response.config",response.config);
            //this.setState({ isaunthenticated:  })

            console.log("Nstatus",this.state.Nstatus);
            this.setState({ Nstatus: response.status });
            this.setState({ isaunthenticated:"true" });


            console.log("Nstatus",this.state.Nstatus);
            console.log("isaunthenticated",this.state.isaunthenticated);

            })
               
        .catch((error) => {
        console.log("Custome Error",error);
        this.setState({ isaunthenticated:"false" });
        console.log("Custome Error - isaunthenticated",this.state.isaunthenticated);

         });
    };


    handleChange = (event) => {
        event.preventDefault();
            const { name, value } = event.target;
            this.setState({ [name]: value });
            console.log(this.state);
    };

  render() {

        if (this.state.email == "eve.holt@reqres.in" && this.state.password=="cityslicka"&&this.state.isaunthenticated =="true"){
        return (<Redirect to={'/AdminList'}/>)
        }
        if (this.state.isaunthenticated =="true"){

        return (<Redirect to={'/CartApp'}/>)
        }
        if (this.state.isaunthenticated =="false"){
            return (<Redirect to={'/home'}/>)
        }
    
    return (

        <div class="container">
                <div class="row">
                        <div class="col-sm"></div>
                                
                <div class="col-sm">    
                <br /><br />
                        <h2 className="display-5 fw-bold">Signin Page</h2>
                        <br />
                        
                        <form onSubmit={this.handleSubmit}>
                               
                                <div className="form-group">
                                    <label>Enter email</label>
                                    <input type="text" className="form-control" name="email" required onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Enter password</label>
                                    <input type="password" className="form-control" name="password" required onChange={this.handleChange} />
                                </div>
                       <br/>
                        <input type="submit" className="btn btn-info" value="Signin"  /> &nbsp;

                        <Link to="/RegisterEvent">
                        <button className="btn btn-danger">Register User</button>
                        </Link>
                                
                        <br />
                        <br />
                    </form>      
                </div>
              
                <div class="col-sm"></div>
                </div>
            </div>   
            

    );

    
    



  }
}
export default LoginEvent;