import React, { Component, useState } from "react";
import axios from "axios";
import {BrowserRouter as Router, Link, NavLink, Redirect, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class UserView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [],
        }
    };

    componentDidMount() {
        axios.get('http://localhost:46936/api/users')
            .then(result => {
                this.setState({ events: result.data })
                console.log(this.state.events);
            })
            .catch(error => {
                console.log("Error Caught : " + error)
            })
        }

render(){
  return( 
    <>
    <div className="container-xl" >

    <div class="nav nav-pills flex-column flex-sm-row justify-content-center">
            {/* <a class="active" href="#Admin">Admin-HomePage</a> */}
                <Link to="/ProductView"><button className="btn btn-link">View Product</button></Link>
                <Link to="/ProductAdd"><button class="btn btn-link">Add Product</button></Link>
                <Link to="/ProductDelete"><button className="btn btn-link">Delete Product</button></Link>
                <Link to="/ProductEdit"><button className="btn btn-link">Edit Product</button></Link>
                <Link to="/ProductSearch"><button className="btn btn-link">ProductSearch</button></Link>
                <Link to="/UserView"><button className="btn btn-link">UserView</button></Link>
            
        </div>
            <div className="content">
   


                <div className="container-xl">
                        <div className="image-container justify-content-start" >
                        <div className='overlay align-items-center justify-content-center'>  
                                
                                
                                <section className="py-5 text-center container"> 
                                    <div className="">
                                    <div className="col-lg-6 col-md-8 mx-auto">
                                        <h2 className="fw-light" style={{color: "black"}}>User Details</h2>
                                        
                                        <p className="lead text-muted" style={{color: "black"}}></p>
                                    </div>
                                    </div>
                                </section>
  
                                {this.state.events.map((event,index) =>{
                                    return(
                                            <div className="col" class="text-primary">
                                            <div className="card shadow-sm">
                                            <div className="card-body w-100">
                                                        
                                                        <p className="card-text"  > <b>Id - {event.userId}  , user - {event.username} , Email - {event.email} , Password - {event.password} </b></p>  
                                           
                                                        <div className="d-flex justify-content-between align-items-center"></div>
                                                        </div>
                                            </div>
                                            </div>
                                    )
                                    })}
                       
                        </div>
                        </div>
                </div>
            </div>   
    </div>   
    </>   
)
}
}

export default UserView;