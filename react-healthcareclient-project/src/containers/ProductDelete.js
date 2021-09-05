import React, { Component } from "react";
import {BrowserRouter as Router, Link, NavLink, Redirect, Route } from "react-router-dom";
import axios from "axios";

class ProductDelete extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
            id: "default",
            isaunthenticated:"flase",
            resdata:""  ,
            Nstatus: "0",
            product: {}
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
            const details = {
                id: this.state.id,  
             };
    
    console.log("details:", details);
    console.log("State details:",details );
    
    
    axios.delete("http://localhost:8002/product/"+this.state.id)
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
        return (

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
            <h2></h2>
            <div className="container">
                <div className="row">
                        <div className="col-sm"></div>
                           
                <div className="col-sm">    
                <br /><br />
                        <h2 className="display-5 fw-bold">Delete Medicine</h2>
                        <br />



            <div className="container" justify="left">
                            <form onSubmit={this.handleSubmit}>
                               
                                <div className="form-group">
                                    <label>Product Id</label>
                                    <input type="text" className="form-control" name="id" required onChange={this.handleChange} />
                                </div>
                             
                        <br />
                        <br />
                        <input type="submit" className="btn btn-danger" value="Delete"  />&nbsp;
                        <NavLink className="btn btn-info" to="/AdminList">Back to Admin</NavLink>
                        
                        </form>          
            </div>

            </div>
                    <div className="col-sm"></div>
                </div>
            </div>    
        </div>    

        </div>
        </>                




        );
    }
}
export default ProductDelete;