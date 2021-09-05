import React, { Component } from "react";
import {BrowserRouter as Router, Link, NavLink, Redirect, Route } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';



class ProductSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: "default",
            title: "default",
            price: "default",
            qty: "default",
            img: "https://wallpaperaccess.com/full/676549.jpg",
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
    
    
    axios.get("http://localhost:8002/product/"+this.state.id)
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
            this.setState({ title: response.data.title });
            this.setState({ price: response.data.price });
            this.setState({ qty: response.data.qty });
            this.setState({ img: response.data.img });

            console.log("Nstatus",this.state.Nstatus);
            console.log("isaunthenticated",this.state.isaunthenticated);
            console.log("Product_ID",this.state.Nstatus);
            console.log("Product_Name",this.state.title);
            console.log("Product_Price",this.state.price);
            console.log("Product_qty",this.state.qty);
            console.log("Product_img",this.state.img);

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
                        <div className="col-sm"><br /><br />
                        <h2 className="display-5 fw-bold">Product Search</h2>
                        <br />
                            <form onSubmit={this.handleSubmit}>
                               
                                <div className="form-group">
                                    <label>Product Id</label>
                                    <input type="text" className="form-control" name="id" required onChange={this.handleChange} />
                                </div>
                             
                        <br />
                        <br />
                        <input type="submit" className="btn btn-warning" value="Search Product"  />  
                        </form> </div>
                           
                <div className="col-sm">    
                                 
           
            </div><div className="col-sm">
                <br /><br /><br /><br />

                <table className="table table-striped">
                                    <thead>
                                        <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Product_ID</th>
                                        <th scope="col">Product_Name</th>
                                        <th scope="col">Product_Price</th>
                                        <th scope="col">Product_Qty</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="table-primary">
                                        <th scope="row"></th>
                                        <td>{this.state.id}</td>
                                        <td>{this.state.title}</td>
                                        <td>{this.state.price}</td>
                                        <td>{this.state.qty}</td>
                                        </tr>
                                    </tbody>
                </table>

                <img src={this.state.img}  width="460" height="345"  ></img>
               

          
            </div>
            </div>
                        
            </div>    
        </div>    

        </div>
        </>                




        );
    }
    
}
export default ProductSearch;