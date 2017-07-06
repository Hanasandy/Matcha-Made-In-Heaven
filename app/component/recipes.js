import React from "react";
import Header from "./section/header.js";
import Footer from "./section/footer.js";



var Recipes = React.createClass({

 

render: function() {

    
    return (

           <div>
             <Header SelectedMenu="Recipes"/>
                <h1> Recipes </h1>
             <Footer/>

	       </div>

		     );
    }

});
module.exports = Recipes;