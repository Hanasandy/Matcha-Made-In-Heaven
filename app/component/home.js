import React from "react";
import Header from "./section/header.js";

class Home extends React.Component{
	render(){	
		     return(
		       <div className="home">
		       
		       <h1 className="opener">A Matcha</h1>
    		   <h1 className="opener1">Made in</h1>
    		   <h1 className="opener2">Heaven</h1>
    		   <a href="#/Main">

                 <button className="welcome" type="button" ><span>Welcome</span></button>

               </a>
		       
		       </div>

		     );
 
    }

} 

export default Home;