
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser')
var app= express();

app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/',function(req,res,next) {
  res.sendfile("index.html");
});

app.post('/profile',function(req,res) {
 
 //console.log(req.body);

 var data = req.body;
  var MongoClient = require('mongodb').MongoClient;

  var url = "mongodb://localhost:27017/test";

  MongoClient.connect(url,function(err,db) {
    if(err) throw err;
    var dbo = db.db("test");
    console.log(db.isConnected());
  dbo.collection("gaurav").insertOne(data, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });


  });
});


module.exports = app;
