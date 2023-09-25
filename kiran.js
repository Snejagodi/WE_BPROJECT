var con=require('./connection');
var express = require("express");
var app     = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.get('/',function(req,res){
    res.sendFile(__dirname+'/loo.html');
  });
  app.post('/',function(req,res){

    var name=req.body.name;
    var password=req.body.password;
   
    
    con.connect(function(error) {
        if (error) throw error;

        var sql ="INSERT INTO students (name, password) VALUES (' "+name+" ',' "+password+" ') ";
        con.query(sql, function(error,result) {
            if (error) throw error;
            res.send("login sucessfuly"+result.insertId);
            res.end();
        });
    });
});
app.listen(7600);
      
