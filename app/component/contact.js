import React from "react";
import Header from "./section/header.js";
import Footer from "./section/footer.js";

class Contact extends React.Component{
	render(){	
		     return(
		       
		       <div>

		       	<h1 className="header"><a href="#/main"> A Matcha Made in Heaven</a></h1>

		       	<Header SelectedMenu="Contact"/>

		       	<div>

		           <h2 className="about-contact">Contact Us</h2>
		           
		       </div>

		       <Footer />
		       </div>

		     );
 
    }

});
  
export default Contact;

