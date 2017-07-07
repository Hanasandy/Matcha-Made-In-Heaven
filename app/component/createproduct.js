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
    this.setState({

    	Name: event.target.Name,
    	Desc: event.target.Desc,
    	Price: event.target.Price,
    	Image: event.target.Image,

    });
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.Name);
    event.preventDefault();
    helpers.saveProducts({ 
      Name: this.state.Name,
      Desc: this.state.Desc,
      Price: this.state.NamePrice,
      Image: this.state.Image})

        .then(function() {
          console.log("Posted to MongoDB");
        });
  }

	render(){	
		     return(

		       <div>

		           <h2> Create Product </h2>
		           <form onSubmit={this.handleSubmit}>
                     Name:<input type="text" value={this.state.Name} onChange={this.handleChange} />
                     Price:<input type="text" value={this.state.Price} onChange={this.handleChange} />
                     Image:<input type="text" value={this.state.Image} onChange={this.handleChange} />
                     Desc:<textarea value
                     ={this.state.Desc} onChange={this.handleChange} />

                     <input type="submit" value="Submit" />
                   </form>
		       </div>

		     );
 
    }

} 
export default CreateProduct;

