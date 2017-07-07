var express = require("express");
var mongoose = require("mongoose");
var bluebird = require("bluebird");
var bodyParser = require("body-parser");
var logger = require("morgan");
var http = require("http");

var carts = require("./models/carts");
var products = require("./models/products");
var users = require("./models/users");

var smodule = require("./socketmodule.js");

//var routes = require("./routes/routes");
//var socket = require("socket.io");
//var smodule = require("./socketmodule.js"); 

//var ntimes = require("./nytimes.js");

// Set up a default port, configure mongoose, configure our middleware
var PORT = process.env.PORT || 8000;
//mongoose.Promise = bluebird;
var app = express();
var serverMan = http.createServer(app);
serverMan.listen(PORT, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", PORT);
});


// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));
//app.use("/", routes);
//var apiRoutes = require("./rrouter");
//app.use("/api", apiRoutes);

// MongoDB configuration (Change this URL to your own DB)
//mongoose.connect("mongodb://localhost/e-shop");
mongoose.connect("mongodb://localhost/Matcha");
//mongoose.connect("mongodb://heroku_q76pl7q0:4k75boumo23e8m1o05i18red1s@ds151062.mlab.com:51062/heroku_q76pl7q0");
//mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_rsl43tx1:hd17lonv50hobpc3465u5u8spm@ds129402.mlab.com:29402/heroku_rsl43tx1");

var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------


app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/api", function(req, res) {

  products.find({}, function(error, doc) {

    if (error) {
      console.log(error);
    }

    else {
      res.send(doc);
    }
  });
});

app.post("/api", function(req, res) {

  console.log("BODY: " + req.body.Name);

  
  products.create({
    Name: req.body.Name,
    Desc: req.body.Desc,
    Price:req.body.Price,
    image:req.body.Image
  }, function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Saved Search");
    }
  });
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
io.sockets.on('connection', smodule);