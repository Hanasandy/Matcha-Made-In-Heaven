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
    ref: "User"
  }],
  product: [{
    type: Schema.Types.ObjectId,
    ref: "Product"
  }],
});

var Cart = mongoose.model("Cart", CartSchema);

module.exports = Cart;
