import React from "react";
import Header from "./section/header.js";
import Footer from "./section/footer.js";



var What = React.createClass({

 

render: function() {

    
    return (

           <div>

              <h1 className="header"><a href="#/main"> A Matcha Made in Heaven</a></h1>

             <Header SelectedMenu=""/>
              

                <div>
                    <h2 className="about">What is Matcha?</h2>
                </div>

                <div className="image">
                    <img className="img" src="../images/about.jpg" />
                </div>

                <div className="row">   
                    <div className="col-md-24">
                        <h2 className="row-center">A Way of Tea Unique to Japan</h2>
                            <p>Matcha is premium green tea powder from Japan used for drinking as tea or as an ingredient in recipes. While other green teas are grown throughout the world, matcha is unique to Japan. It is the heart of the Japanese way of tea and has been celebrated in the traditional Japanese tea ceremony for hundreds of years.</p>
                    </div>                  
                    <div className="col-md-24">
                        <h2 className="row-center">Unparalleled Nutrition</h2>
                            <p>Matcha is renowned for numerous health benefits. It is rich in nutrients, antioxidants, fiber and chlorophyll. The health benefits of matcha exceed those of other green teas because matcha drinkers ingest the whole leaf, not just the brewed water. One glass of matcha is the equivalent of 10 glasses of green tea in terms of nutritional value and antioxidant content.</p>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-24">
                        <h2 className="row-center">Naturally Mood Enhancing</h2>
                            <p>Matcha contains L-theanine, an amino acid known to relax the mind. For this reason, matcha is also known as a mood enhancer. Buddhist monks drank matcha to assist in meditation, as matcha’s amino acids, combined with caffeine, offer a sustained calm alertness over time. Amino acids are also what gives matcha is distinctive taste. They contribute to what is known as the fifth taste, or umami, characterized by a rich creamy mouth feel.</p>
                    </div>
                    <div className="col-md-24">
                        <h2 className="row-center">The Complex and Alluring Taste of Matcha Tea</h2>
                            <p>Chlorophyll and amino acids give matcha its unique rich taste, an initial vegetal, astringent taste, followed by a lingering sweetness. Matcha made in the traditional Japanese style, whisked with water, is a full-bodied green tea. The intensity of the experience compares to one’s first taste of dark chocolate or red wine. When added as an ingredient, the taste of matcha becomes subtler. It adds the flavor and color of green tea to your creation, be it a smoothie, latte, savory sauce or pastry. </p>
                    </div>                  
                </div>
                
                <br />

             <Footer/>
           
           </div>


        );
    }

});

module.exports = What;