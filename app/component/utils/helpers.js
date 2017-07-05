var axios = require("axios");

module.exports = {
  getProducts: function() {
    return axios.get("/api");
  },
  //saveClicks: function(clickData) {
    //return axios.post("/api", clickData);
  //}
};