// Require mongoose
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

// Create a Schema for Cart.
var CartSchema = new Schema({
  total: {
    type: String,
    require: true
  },
  user: [{
    type: Schema.Types.ObjectId,
    ref: "Users"
  }],
  product: [{
    type: Schema.Types.ObjectId,
    ref: "Products"
  }],
});

var Carts = mongoose.model("Carts", CartSchema);

module.exports = Carts;
