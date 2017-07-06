import React from "react";
import Header from "./section/header.js";
import Footer from "./section/footer.js";



var Health = React.createClass({

 

render: function() {

    
    return (

           <div>
             <Header SelectedMenu="Health"/>
                <h1> Health Benefits </h1>
             <Footer/>

	       </div>

		     );
    }

});
module.exports = Health;