import React from "react";
import {  Router , Route , browserHistory} from "react-router";
//import Addition from "../component/addition";
import Home from "../component/home.js";


const routes = (
  
     <Router  history = {browserHistory}>
        <Route path = "/" component = {Home} /> 
          
     </Router>
  
);

export default routes;

