import React from "react";
import helpers from "./utils/helpers.js";
import { InputNumber } from 'antd';
import { Row, Col } from 'antd';

class Product extends React.Component {
  
 constructor(props) {
    super(props);
    this.state = {
      orders:"3",
      user:"5957b78ff3059ce743ba625e",
      indexes : []
    };
    this.onChange = this.onChange.bind(this);
    this.AddtoCart = this.AddtoCart.bind(this);
  }

onChange(value) {
  console.log('changed', value);
  var newState = value;
  this.setState({orders: newState});

  }

  AddtoCart()
  {
    var newIndexes = this.state.indexes;

    if(this.state.indexes.indexOf(this.props.details._id)== -1)
     {
         var indesOfproduct = this.props.details._id;
         helpers.saveCart({ 
         orders: this.state.orders,
         user: this.state.user,
         product: this.props.details._id})

           .then(function() {
              console.log("Posted to MongoDB");
              
              
                           });
          newIndexes.push(this.props.details._id);
          this.setState({indexes:newIndexes}); 
      }

      else
      {
        helpers.updateCart(this.props.details._id,{
          orders: this.state.orders,
        }).then(function() {
              console.log("Edited to MongoDB");
            });
      }

  }


render()
{
  console.log("Hello" + this.state.orders);

  let details = this.props.details;
  return(
       <Col span={8}>
                      <div className="produt-container">
                           <div>
                             <img src={details.Image} className="productimg" />
                           </div>

                           <div>
                                   <h3><b>Product Name:{details.Name}</b></h3>
                                   <div>Desc:{details.Desc}</div>
                                   <div><b>Price:{details.Price}</b></div>
                                   <div>Quantity
                                    <InputNumber  min={1} max={50} defaultValue={3}  onChange={this.onChange} />
                                    <button  type="button" className="productButton" onClick={this.AddtoCart}>Add To Cart</button>
                                   </div>
                                   
                           </div>
                       </div>      
        </Col>
                  

  );
  } 
}

export default Product;
