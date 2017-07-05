import React from "react";
import Header from "./section/header.js";
var helpers = require("../utils/helpers");


class Products extends React.Component{

	getInitialState: function() {
    return { selectedItem:[], products: [] };
  },

	componentDidMount: function() {
    // Get the latest history.
    helpers.getProducts().then(function(response) {
      console.log(response);
      if (response !== this.state.products) {
        console.log("products", response.data);
        this.setState({ products: response.data });
      }
    }.bind(this));
  },

	render(){	
		     return(

		     <div className="container">

                <Header SelectedMenu="Products"/>
		        <h2> Products </h2>
		        
             

		     );
 
    }

} 
  


export default Products;