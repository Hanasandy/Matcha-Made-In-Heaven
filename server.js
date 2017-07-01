var express = require("express");
var mongoose = require("mongoose");
var bluebird = require("bluebird");
var bodyParser = require("body-parser");
var http = require("http");

//var routes = require("./routes/routes");
//var socket = require("socket.io");
//var smodule = require("./socketmodule"); 

//var ntimes = require("./nytimes.js");

// Set up a default port, configure mongoose, configure our middleware
var PORT = process.env.PORT || 8000;
mongoose.Promise = bluebird;
var app = express();
var serverMan = http.createServer(app);
serverMan.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
//app.use("/", routes);
//var apiRoutes = require("./rrouter");
//app.use("/api", apiRoutes);



app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});



var socketio = require('socket.io');
var io = socketio.listen(serverMan);
/*
io.sockets.on('connection', function(socket){ 



	socket.on('message', function(message) {
       
           // logger.log('info',message.value);
            console.log(message);
            socket.emit('returnval', 'Hello World from client');
            //console.log('from console',message.value);
    

     

    });



 });   
 */
// Start the server
//io.sockets.on('connection', smodule);