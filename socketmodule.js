var product = require("./models/products.js");


module.exports = function(socket) {
  
        socket.on('testso', function(message) {
           // logger.log('info',message.value);
            //console.log(message);
            socket.emit('returnso', 'Hello World from client');
            //console.log('from console',message.value);
        });
       
        socket.on('testso', function(message) {
           // logger.log('info',message.value);
            //console.log(message);
            socket.emit('returnso', 'Hello World from client');
            //console.log('from console',message.value);
        });

        
         socket.on('productDelete', function(message){
             

             console.log(message);
             var check = message+"";

             
             product.remove({"Name" : check}, function(err, doc) {
                 
                   if(err){
                       console.log(err);
                   }
                   else{
                     console.log( "success");
                     socket.emit("reback" , '/#/input'); 
                           
                     
                       
                   }
                 
             });
             









         }); 


         socket.on('productSave', function(message) {

            //console.log(message);
            var preProduct = 
            {
             Name : message.name,
             Desc : message.desc,
             Price : message.price, 
             Image : message.image
             };
            //console.log(preProduct)
            let insertProduct = new product (preProduct); 
            

             insertProduct.save(function(err, doc) {
                    if (err) {
                      console.log(err);
                    }
                    else {
                     // console.log(doc); 
                      socket.emit('receiveP', 'success save!!');
                       
                    }
             });
             
      
          
            //socket.emit('resultp', 'success');
        
         });    


         socket.on('getProduct', function(message) {
             product.find({}, function(err, doc) {
            // log any errors
                 if (err) {
                   console.log(err);
                  }
                 // or send the doc to the browser as a json object
                 else {
                   
                 //console.log("chekc point")
                 //console.log(doc);
                 socket.emit("takeProduct", doc);
                
                }
            });
            




        
         });

          /*
          socket.on('saveArticle', function(message) {

            console.log(message);
              
             var putitle = {title : message};
             let newArticle = new ntimes(putitle);

             newArticle.save(function(err, doc) {
                    if (err) {
                      console.log(err);
                    }
                    else {
                      console.log(doc); 
                       socket.emit('returncheck', 'success save!!');
                    }
                  });
             



        
         });    
       */
     

    
};