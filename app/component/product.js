import React from "react";
import Header from "./section/header.js";
import Footer from "./section/footer.js";
import helpers from "./utils/helpers.js";
import { InputNumber } from 'antd';



var Product = React.createClass({

 onChange: function(value) {
  console.log('changed', value);
  }
,
	getInitialState: function() {
    return { selectedItem:[], products: [] };
  },

	componentDidMount: function() {
    // Get the latest history.
    helpers.getProducts().then(function(response) {
      console.log(response);
      if (response !== this.state.products) {
        console.log("products", response.data.length);
        this.setState({ products: response.data});
        console.log(this.state.products);
      }
    }.bind(this));
  },

render: function() {

    var indents = [];
    for (var i = 0; i < this.state.products.length; i++) {
      indents.push(
            <div className="product-section1-box" key={i}>   

                       <a href="#" className="product-section1-card" target="_blank">

                           <div className="product-section1-cardbac1">
                             <img src={this.state.products[i].Image} className="productimg" />
                           </div>

                           <div>
                                   <h2>Product Name:{this.state.products[i].Name}</h2>
                                   <div>Desc:{this.state.products[i].Desc}</div>
                                   <div>Price:{this.state.products[i].Price}</div>
                                   <div>Quantity
                                    <InputNumber min={1} max={10} defaultValue={1} onChange={this.onChange} />
                                   </div>
                                   <button>Add to cart</button>
                           </div>
                       </a>
                       
                   </div>        );
     }  
    return (

      <div className="product-section1">
              <Header SelectedMenu="Products"/>
              <h1> Products </h1>


              {indents}
                
                   
               
             
            <Footer/>

	       </div>

		     );
 
    }

});
module.exports = Product;