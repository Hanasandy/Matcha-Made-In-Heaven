import React from "react";
import axios from "axios";
import Header from "./section/header.js";
import Footer from "./section/footer.js";



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

           
           

          return(
            <div>
            <h1 className="header"><a href="#/main"> A Matcha Made in Heaven</a></h1>

            <Header SelectedMenu={"Contact"}/>
          
                <button  id="logout"  onClick= {() => {this.logout()}}>logout</button>  
                <h2> login success! </h2>
                  
            </div>


          );
        }else{
           return(
            <div>
                 <h2> login fail!</h2>

                <Footer/>
                  
            </div>



          );  

       }

   

   }

}
  



export default add;