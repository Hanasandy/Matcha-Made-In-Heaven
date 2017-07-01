var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for products.
var ProductSchema = new Schema({
  Name: {
    type: String,
    require: true
  },
  Desc:{
  	type:String
  }
  ,
  Price: {
    type: String,
    require: true
  },
  image:{
    type: String,
    require:true
  }
  
});

// Create the Model
var Product = mongoose.model("Product", ProductSchema);

// Export it for use elsewhere
module.exports = Product;