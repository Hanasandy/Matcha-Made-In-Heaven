var axios = require("axios");

module.exports = {
  getProducts: function() {
    return axios.get("/api");
  },
  
  saveProducts: function(productData) {
    return axios.post("/api", productData);
  }
};