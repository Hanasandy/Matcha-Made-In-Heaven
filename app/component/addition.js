import React from "react";
import Header from "./section/header.js";
import Footer from "./section/footer.js";



const Topics = ({pathname}) =>{
     return(
       <div>
           <h2> Topics </h2>
           {pathname}  
       </div>

     );
 



} 


export default Topics;