import React from "react";
import helpers from "./utils/helpers.js";

//var CreateProduct = React.createClass({
class CreateProduct extends React.Component {
	constructor(props) {
    super(props);

    this.state = {
      Name:"",
      Desc:"",
      Price:"",
      Image:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    helpers.saveProducts({ 
      Name: this.state.Name,
      Desc: this.state.Desc,
      Price: this.state.Price,
      Image: this.state.Image})

        .then(function() {
          console.log("Posted to MongoDB");

        });
                  console.log("name :" + this.state.Name);

  }

	render(){	
		     return(

		       <div>

		           <h2> Create Product </h2>
		           <form onSubmit={this.handleSubmit}>
                     Name:<input type="text" id="Name"   value={this.state.Name } onChange={this.handleChange} />
                     Price:<input type="text" id="Price" value={this.state.Price } onChange={this.handleChange} />
                     Image:<input type="text" id="Image" value={this.state.Image } onChange={this.handleChange} />
                     Desc:<textarea id="Desc" value={this.state.Desc } onChange={this.handleChange} />

                     <input type="submit" value="Submit" />
                   </form>
		       </div>

		     );
 
    }

} 
export default CreateProduct;

