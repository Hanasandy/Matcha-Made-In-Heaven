import React from "react";
import Header from "./section/header.js";
import Footer from "./section/footer.js";
import {Carousel} from "antd";



class Main extends React.Component{
	render(){	
		     return(
		       <div>

		       	<Header SelectedMenu="Main"/>
		        
		           <h1 className="header"> A Matcha Made in Heaven </h1>

		           <Carousel autoplay className="carousel">
    					<div className= "myImages">
    						<img src="../images/cup.jpg" alt="cup of matcha" />
    					</div>
    					<div className= "myImages">
    						<img src="../images/japan.jpg" alt="matcha" />
    					</div>
    					<div className= "myImages">
    						<img src="../images/mat.png" alt="powder" />
    					</div>		
  					</Carousel>

		           <div className="intro">
            	   		<h1 className="intro-matcha">Introducing Matcha</h1>
            				<p className="intro-mat">
                			Matcha is a finely ground powder of specially grown and processed green tea. It is special in two aspects of farming and processing: the green tea plants for matcha are shade-grown for about three weeks before harvest, and the stems and veins are removed in processing. During shaded growth, the plant Camellia sinensis produces more theanine and caffeine and this combination of chemicals is considered to account for the calm energy people might feel from drinking matcha.</p>
            			<div className="video">
                			<iframe width="560" height="315" src="https://www.youtube.com/embed/Vy6slu-D0v8" frameborder="0" allowfullscreen></iframe>
            			</div>
        			</div>

		         <Footer /> 

		       </div>
		     );
    }
} 
  
export default Main;