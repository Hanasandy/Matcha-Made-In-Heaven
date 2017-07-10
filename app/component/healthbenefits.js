import React from "react";
import Header from "./section/header.js";
import Footer from "./section/footer.js";



var Health = React.createClass({

 

render: function() {

    
    return (

           <div>
             <Header SelectedMenu="Health"/>
              <h1 className="header"> A Matcha Made in Heaven </h1>
                
            <div class="jumbotron text center">
            //style=background: #f3f2e7">
            	<h2 class="about">What are the health benefits?</h2>
            </div>
            <div class="health-benefits">
                <h2><b>Among its many health benefits, matcha...</b></h2>
                	<ul>
                    	<li>Is packed with antioxidants including the powerful EGCg</li>
                    	<li>Boosts metabolism and burns calories</li>
                    	<li>Calms the mind and relaxes the body and also enhances mood and aids in concentration</li>
                    	<li>Provides vitamin C, selenium, chromium, zinc and magnesium</li>
                    	<li>Is rich in fiber, chlorophyll and vitamins and lowers cholesterol and blood sugar</li>
                    	<li>Detoxifies effectively and naturally</li>
                	</ul>
                    <img class="images" src="../images/health.jpg" />
            </div>
             
             <Footer/>

	       </div>

		);
    }

});

module.exports = Health;