/**
 * Created by HulkTron on 4/9/2016.
 */
   var firebase = require('firebase');
   var fdb = new Firebase ("https://blood-bank1.firebaseio.com/");

   function SaveUser(details){
      var det = details;
      fdb.child("Blood_bank/signup").push(details)
   }
   exports.SaveUser = SaveUser;
   function LoginUser(user){
      var login = user;

   }


