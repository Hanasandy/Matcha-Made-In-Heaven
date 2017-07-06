// ntimes = require("./nytimes.js");


module.exports = function(socket) {
  
        socket.on('testso', function(message) {
           // logger.log('info',message.value);
            console.log(message);
            socket.emit('returnso', 'Hello World from client');
            //console.log('from console',message.value);
        });
        



         socket.on('submit', function(message) {

         	console.log(message);
             



        
         });	


         socket.on('yo', function(message) {

         	console.log(message);




        
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