import React from "react";
import Header from "./section/header.js";
import Footer from "./section/footer.js";
import helpers from "./utils/helpers.js";
import { InputNumber } from 'antd';
import { Row, Col } from 'antd';



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
        　
                <div key={i}>  

                  
                    <Col span={8}>
                      <div className="produt-container">
                           <div>
                             <img src={this.state.products[i].Image} className="productimg" />
                           </div>

                           <div>
                                   <h3><b>Product Name:{this.state.products[i].Name}</b></h3>
                                   <div>Desc:{this.state.products[i].Desc}</div>
                                   <div><b>Price:{this.state.products[i].Price}</b></div>
                                   <div>Quantity
                                    <InputNumber min={1} max={50} defaultValue={3} onChange={this.onChange} />
                                    <button type="button" className="productButton">Add to cart</button>
                                   </div>
                                   
                           </div>
                       </div>      
                     </Col>
                  
                                             
                </div>         

      );
    }  
    return (
      <div>
        <Header SelectedMenu="Products"/>
        <div className="container">
            <Row>


                {indents}
                  
                    

  	        </Row> 
        </div>
      </div>  

		     );
 
    }

});
module.exports = Product;