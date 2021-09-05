import React, { Component, useState } from "react";
import axios from "axios";
import {BrowserRouter as Router, Link, NavLink, Redirect, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin.css';

class AdminList extends Component {
        constructor(props) {
            super(props);
            this.state = {
                events: [],
            }
        };

        componentDidMount() {
            axios.get('http://localhost:8001/movies')
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
        <div class="container-xl" >

        <div class="nav nav-pills flex-column flex-sm-row justify-content-center">
            {/* <a class="active" href="#Admin">Admin-HomePage</a> */}
                <Link to="/ProductView"><button className="btn btn-link">View Product</button></Link>
                <Link to="/ProductAdd"><button class="btn btn-link">Add Product</button></Link>
                <Link to="/ProductDelete"><button className="btn btn-link">Delete Product</button></Link>
                <Link to="/ProductEdit"><button className="btn btn-link">Edit Product</button></Link>
                <Link to="/ProductSearch"><button className="btn btn-link">ProductSearch</button></Link>
                <Link to="/UserView"><button className="btn btn-link">UserView</button></Link>
            
        </div>

        <div class="content">
            <img src="http://ratecracker.com/bill/admin/assets/plugins/images/logo.png" class="img-fluid" alt="..." />
            <br/>

            <h2>Welcome Admin! You can add, edit, delete or search data here based on your requirement!</h2>
        </div>
    
            
        </div>
        </>   
    )
  }
}

export default AdminList;