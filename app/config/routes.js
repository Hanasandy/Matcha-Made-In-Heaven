import React from "react";
import {  Router , Route , hashHistory} from "react-router";
//import Addition from "../component/addition";
import Home from "../component/home.js";
import Main from "../component/main.js";
import Contact from "../component/contact.js";
import Products from "../component/product.js";
import Cart from "../component/cart.js";



const routes = (
  
     <Router  history = {hashHistory}>

        <Route path = "/" component = {Home} /> 
        <Route path = "/Main" component = {Main} /> 
        <Route path = "/Contact" component = {Contact} />
        <Route path = "/Products" component = {Products} /> 
        <Route path = "/Cart" component = {Cart} />
          
     </Router>
  
);

export default routes;

