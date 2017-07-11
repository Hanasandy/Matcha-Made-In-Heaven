import React from "react";

import axios from "axios";



class add extends React.Component{
  constructor(props) {
        super(props);
        
         this.state = { test :
               ""

          };
           

            //console.log(response);
            //console.log(this.state.test);
          
       
    }
   
   

  
    logout(){
      axios.patch("/login/logout").then((response) => {
        console.log(response.data);
       

        this.setState({
          test: ""
        })
      });  



    }
    componentWillMount(){
      console.log('mount');
      axios.patch("/login/getcookie").then((response) => {
        console.log(response.data);
        let val = response.data+"";
        console.log(val);

        this.setState({
          test: val
        })
      });   
       


    }
  render(){ 
         console.log(this.state.test);
            if(this.state.test == "true"){

             <Header SelectedMenu="Contact"/>
            <h1 className="header"> A Matcha Made in Heaven </h1>

           
           
           return(
             <div>
                 <button  id="logout"  onClick= {() => {this.logout()}}>logout</button>  
                 <h2> login success! </h2>
                  
             </div>


           );
        }else{
           return(
            <div>
                 <h2> login fail!</h2>
                  
             </div>
           );  

        }

    
 
    }

} 
  



export default add;