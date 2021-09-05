//import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import {BrowserRouter as Router,Link,NavLink,Route,Redirect} from "react-router-dom";

import Home from "./components/Home";
import CartApp from './components/CartApp';

import LoginEvent from "./Login/LoginEvent";
import Contact from "./Login/Contact";
import RegisterEvent from './Login/RegisterEvent';

import AdminList from './containers/AdminList';
import ProductView from './containers/ProductView';
import ProductAdd from './containers/ProductAdd';
import ProductDelete from './containers/ProductDelete';
import ProductEdit from './containers/ProductEdit';
import ProductSearch from './containers/ProductSearch';
import UserView from './containers/UserView';
import './Login/carousel.css';


class App extends Component {
  
  render() {
    return (

      <Router>
             <div className="container">
                  <header className="d-flex justify-content-center py-3 border-bottom">
                    <ul className="nav nav-pills">
                      <li className="nav-item"><NavLink to="/home" className="nav-link">Home</NavLink></li>  
                      <li className="nav-item"><NavLink to="/CartApp" className="nav-link">ShoppingCart</NavLink></li>
                      {/* <li className="nav-item"><NavLink to="/AdminList" className="nav-link">Admin</NavLink></li>              */}
                      <li className="nav-item"><NavLink to="/LoginEvent" className="nav-link">SignIn</NavLink></li>   
                    </ul>
                  </header>

            </div >

        <Route path="/" exact render={Home} />
        <Route path="/home" render={Home} />
        <Route path="/contact" render={Contact} />
        <Route path="/CartApp" render={CartApp} />
        
        
        <Route path="/AdminList" component={AdminList} />
        <Route path="/LoginEvent" component={LoginEvent} />
        <Route path="/RegisterEvent" component={RegisterEvent} />
        <Route path="/ProductView" component={ProductView} />
        <Route path="/ProductAdd" component={ProductAdd} />
        <Route path="/ProductDelete" component={ProductDelete} />
        <Route path="/ProductEdit" component={ProductEdit} />
        <Route path="/ProductSearch" component={ProductSearch} />
        <Route path="/UserView" component={UserView} />

        
      </Router>
    );
  }
}
export default App;