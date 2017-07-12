import React from "react";
import Header from "./section/header.js";

class Contact extends React.Component{
    render(){    
             return(
               <div>

               		 <h1 className="header"><a href="#/main"> A Matcha Made in Heaven</a></h1>

                   <Header SelectedMenu="Contact"/>

                   <h2> Contact Us </h2>
                   
               </div>

             );
 
    }

} 
  

export default Contact;