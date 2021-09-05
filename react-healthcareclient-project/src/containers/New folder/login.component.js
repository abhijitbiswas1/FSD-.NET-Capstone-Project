import React, { Component, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

function Login() {

    //this.state = {username: "", password: ""};  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    async function login() {

        console.warn(username, password)
        let item = {username, password};
        let result = await fetch("http://localhost:8001/login", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
            body: JSON.stringify(item)
            

        });
        console.warn(item);
        //result = await result.JSON()
    }

    // console.log(this.state.username);      
    return (

        <form>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => setUsername(e.target.value)} />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            {username == "admin@outlook.com"&&password=="1234678" ? 
            <Link to="/admin-login"><button type="button" class="btn btn-primary" onClick={login}>Submit</button></Link> : <Link to="/user-login"><button type="button" class="btn btn-primary" onClick={login}>Submit</button></Link>}
        </form>

    );

}

export default Login;
