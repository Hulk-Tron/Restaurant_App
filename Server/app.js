var route = require ('./routes/index.js');
var db = require('./Db/index.js');
var express = require("express");
var path = require("path");
var bodyParser = require("body-Parser");
var app = express();
  app.set("port",8080);

var dirpath = path.resolve(__dirname, "static");
app.use(express.static(dirpath));
app.use(bodyParser.json());
app.use(function(req,res,next){
  res.append('Access-Control-Allow-Origin',req.headers.origin || '*');
  res.append('Access-Control-Allow-Credentials','true');
  res.append('Access-Control-Allow-Methods',['GET','OPTIONS','PUT','POST']);
  res.append('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept');
  next();
});







//app.use(function(req,res,next){
//  res.header('Acess-Control-Allow-Origin','*');
//  res.header('Acess-Control-Allow-Methods','GET,PUT,POST,DELETE');
//  res.header('Acess-Control-Allow-Headers','Content-Type');
//  next()
//
//
//})
app.use(function(req,res,next){
next()
});
app.use("/api",route);
app.get("*",function(req,res){
  var index = path.resolve(__dirname,"../App/www/index.html")
  res.sendfile(index)
})
app.listen(app.get("port"),function(){
  console.log("server is listening")
})
