import React from "react";
import Header from "./section/header.js";
import Footer from "./section/footer.js";
import { InputNumber } from 'antd';
import { Row, Col } from 'antd';

class Product extends React.Component {
  
 constructor(props) {
    super(props);
  }

onChange(value) {
  console.log('changed', value);
  }


render()
{
  console.log("Hello" + this.props.details);
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
                                    <InputNumber min={1} max={50} defaultValue={3} onChange={this.onChange} />
                                    <button  type="button" className="productButton" >Add to cart</button>
                                   </div>
                                   
                           </div>
                       </div>      
        </Col>
                  

  );
  } 
}

export default Product;
