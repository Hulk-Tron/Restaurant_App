  var express = require("express");
  var firebase = require("firebase");
  var fbase = new Firebase ("https://blood-bank1.firebaseio.com/");
  var db = require('../Db/index.js')
  var router = express.Router();
     router.post("/login",function(req,res){
     var log = req.body.data;
    console.log(log)
    })


     router.post("/signup", function (req,res) {
     fbase.createUser({
      email : req.body.data.email,
      password : req.body.data.pass
     }),function(err,success){
       if (err){
         console.log(err)
       }
       else {
         req.body.data.FirebaseToken = success.uid;
         db.SaveUser(req.body.data)
             .then(function (userInstance) {
               res.send({ status: true, user: userInstance });
             }, function (err) {
               res.send({ status: false, message: err });
             });
       }
     }




     //fbase.child("Blood_Bank/signup").push({
     // First_Name : Newuser.fname,
     // Last_Name : Newuser.lname,
     // Email : Newuser.email,
     // BloodGroup : Newuser.bloodG,
     // Password : Newuser.pass
     //})




  });
  module.exports = router;
