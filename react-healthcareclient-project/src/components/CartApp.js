import React, {Component} from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ProductHome from './ProductHome';
import Cart from './Cart';
import {CartProvider} from "react-use-cart";


function App() {
  return (
    <>


    <CartProvider>
    <ProductHome/>
    <div class="row">
        <div class="col-8"><Cart/></div>
    </div>
     
    </CartProvider>
  

    </>
  );
}

export default App;