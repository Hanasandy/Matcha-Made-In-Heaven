import React from "react";
import Header from "./section/header.js";
import Footer from "./section/footer.js";



var What = React.createClass({

 

render: function() {

    
    return (

           <div>
             <Header SelectedMenu=""/>
                <h1> What Is Matcha? </h1>
             <Footer/>

	       </div>

		     );
    }

});
module.exports = What;