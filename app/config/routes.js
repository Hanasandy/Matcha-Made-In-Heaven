import React from "react";
import {  Router , Route , hashHistory} from "react-router";
//import Addition from "../component/addition";
import Home from "../component/home.js";
import Main from "../component/main.js";
import Contact from "../component/contact.js";


const routes = (
  
     <Router  history = {hashHistory}>

        <Route path = "/" component = {Home} /> 
        <Route path = "/Main" component = {Main} /> 
        <Route path = "/Contact" component = {Contact} /> 
          
     </Router>
  
);

export default routes;

