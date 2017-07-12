var bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
var express = require("express");
var authRouter = express.Router();
var salt = require("./salt.js");
var tokenSecret = require("./token.js");
var userS = require("../models/users.js");
var cookieParser = require("cookie-parser");

var jwtExp = require("express-jwt");

authRouter.use(cookieParser(tokenSecret));



authRouter.get("/", function(req, res, next) {
    res.sendFile(__dirname + "/publictwo/login.html");

  
});


authRouter.get("/rego", function(req, res, next) {
    res.sendFile(__dirname + "/publictwo/registeruman.html");

  
});


authRouter.post("/find", function(req, res) {
         console.log(req.body);
        userS.find({'username': req.body.userId  }, function(err, doc) {
        // log any errors
        if (err) {
            console.log(err);
        }
        // or send the doc to the browser as a json object
        else {
            
            let sendFile = {
                  docs : doc, 
                  save : req.body 

            }
            res.send(sendFile);
        }
        });


}); 


authRouter.patch("/logout", function(req, res, next) {

     res.clearCookie("jwtAuthToken");
     console.log("here");
     res.send("finish");

  
});


authRouter.patch("/getcookie", jwtExp({
  secret: tokenSecret,
  getToken: function fromCookie(req) {
    if (req.signedCookies) {
      return req.signedCookies.jwtAuthToken;
    }
    return null;
  },
  credentialsRequired: false
}), function(req, res, next) {
  if (req.user) {
    res.send("true"); 
  } else {
    res.send("fail");
  }
});



authRouter.post("/record", function(req, res) {
     console.log("check point");
     console.log(req.body);
     //res.send("hello");
     
     bcrypt.genSalt(10, function(err, data) {
          if (err) {
            console.log("there is an error");
            res.render("register", {
              status: "Unable to create username with password provided."
            });
          } else {
            bcrypt.hash(req.body.password, salt, function(err, hash) {
               var good ={
                 username: req.body.userId,
                 password : hash ,
                 email : req.body.email 

                }
               var saveUser = new userS( good);

               saveUser.save(function(err, doc) {
                                // log any errors
                      if (err) {
                                    console.log(err);
                       }
                                // otherwise
                      else {

                         res.send("/login");         
                      }
                });
             
            });
          }
   });
   
  
});

authRouter.post("/cookie", function(req, res) {

               var jwtAuthToken = jwt.sign({
               exp: Math.floor(Date.now() / 1000) + (60 * 60),
               data: {
                userId: req.body.user
                }
               }, tokenSecret);
                console.log(jwtAuthToken );
                //res.send(jwtAuthToken);
                
                res.cookie("jwtAuthToken", jwtAuthToken, {
                secure: process.env.NODE_ENV === "production",
                signed: true
                });
                
                
               res.send("/#/Main");

   
  
});



/*
authRouter.get("/login", function(req, res, next) {
  if (req.user) {
    res.redirect("/");
  } else {
    res.render("login", {
      status: "Enter your username and password."
    });
  }
});
*/
authRouter.post("/search", function(req, res) {

    userS.find({'username': req.body.user }, function(err, doc) {
        // log any errors
        if (err) {
            console.log(err);
        }else {
             console.log(doc);
            if(doc.length == 0 ){ 
              console.log("No user found.");
               var nothing ={
                        username : req.body.user,
                        result : "bed"
               }
               res.send(nothing );
              } else { 
                  console.log(doc[0].password);
                  
                  bcrypt.hash(req.body.password, salt, function(err, hash) {
                     if(hash == doc[0].password){
                      var success ={
                        username : req.body.user,
                        result : "success"
                      }
                      res.send(success);
                     }else{
                      var fail ={
                        username : req.body.user,
                        result : "fail"
                      }
                       res.send(fail);


                     }


               
                  });
                  


          
              }
        }
    
  /*
  userS.find({'username': req.body.userId  }, function(user) {
    if (!user) {
      console.log("No user found.");
      res.render("login", {
        status: "Invalid username or password."
      });
    } else {
      var jwtAuthToken = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {
          userId: user.userId
        }
      }, tokenSecret);

      res.cookie("jwtAuthToken", jwtAuthToken, {
        secure: process.env.NODE_ENV === "production",
        signed: true
      });

      res.redirect("/");
    }
  }).catch(next);

 */

  });


});    





module.exports = authRouter;