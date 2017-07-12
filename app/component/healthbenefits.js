import React from "react";
import Header from "./section/header.js";
import Footer from "./section/footer.js";



var Health = React.createClass({

 

render: function() {

    
    return (

           <div>

            <h1 className="header"><a href="#/main"> A Matcha Made in Heaven</a></h1>

             <Header SelectedMenu="Health"/>
              
                

            <div>
            	<h2 className="about-health">The Health Benefits of Matcha</h2>

            <div className="health-benefits">
                <h2 className="health-header"><b>Among its many health benefits, matcha...</b></h2>
                	<ul className="health-list">
                    	<li>-Is packed with antioxidants which detoxifies effectively and naturally</li>
                    	<li>-Boosts metabolism and burns calories</li>
                    	<li>-Calms the mind and relaxes the body and also enhances mood and aids in concentration</li>
                    	<li>-Provides vitamin C, selenium, chromium, zinc and magnesium and is rich in fiber, chlorophyll and vitamins which helps lowers cholesterol and blood sugar</li>
                    	
                	</ul>

                    <img className="images-health" src="../images/matcha-health.png" />

            </div>

            <div className="health-images">
                <img className="image1" src="../images/matcha-benefits.png" />
                <img className="image3" src="../images/matcha-tea.png" />
             </div>
            </div>
             <Footer/>

	       </div>

		);
    }

});

module.exports = Health;