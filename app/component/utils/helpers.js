var axios = require("axios");

module.exports = {
  getProducts: function() {
    return axios.get("/api");
  },
  
  // saveProducts: function(productData) {
  //   return axios.post("/api", productData);
  // }

   saveCart: function(cartData) {
     return axios.post("/cart", cartData);
   },

   updateCart: function(productId,cartData)
   {
   	 return axios.post("/cart/:" + productId, cartData);
   }
};