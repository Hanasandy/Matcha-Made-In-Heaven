import React from "react";
import {  Router , Route , hashHistory} from "react-router";
import Home from "../component/home.js";
import Main from "../component/main.js";
import Contact from "../component/contact.js";
import Product from "../component/product.js";
import Cart from "../component/cart.js";
import What from "../component/whatismatcha.js";
import Recipes from "../component/recipes.js";
import Health from "../component/healthbenefits.js";
import CreateProduct from "../component/createproduct.js"

const routes = (
  
     <Router  history = {hashHistory}>

        <Route path = "/" component = {Home} /> 
        <Route path = "/Main" component = {Main} /> 
        <Route path = "/Contact" component = {Contact} />
        <Route path = "/Product" component = {Product} /> 
        <Route path = "/What" component = {What} />
        <Route path = "/Recipes" component = {Recipes} />
        <Route path = "/Health" component = {Health} />
        <Route path = "/Cart" component = {Cart} />
        <Route path = "/CreateProduct" component = {CreateProduct} />
          
     </Router>
  
);

export default routes;

