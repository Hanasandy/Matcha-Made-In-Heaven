import React from "react";
import Header from "./section/header.js";

class Cart extends React.Component{
  constructor(props) {
        super(props);
        
         this.state = { test :
               ""

          };
           

            //console.log(response);
            //console.log(this.state.test);
          
       
   }
   componentDidMount(){
    	 var socketsMan = io.connect(); 	
         //event.preventDefault();
         console.log("work");
     
         socketsMan.emit('testso', "dodo");
         socketsMan.on('returnso', function(data) {
           console.log(data);
         });
    



   }
  render(){ 
         return(
           <div>

            <Header SelectedMenu="Contact"/>

               <h2> Cart </h2>
               
           </div>

         );
 
    }

} 
  

export default Cart;