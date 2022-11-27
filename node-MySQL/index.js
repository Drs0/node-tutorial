const mysql = require("mysql");
const connetion = mysql.createConnection({host:"localhost",user:"root",password:"",database:"nodeMySql"});
const express = require("express");
const bodyparser = require("body-parser");
const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
app.get("/profile",function(req,res){
    res.sendFile(__dirname+"/profile.html");
})
app.listen("1212");
connetion.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log("Connected Succusfully");
    }
})
app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})
app.post("/",function(req,res){
    var email = req.body.email;
    var password = req.body.password;
    connetion.query("SELECT * FROM users WHERE email = ? and password=?",[email,password],function(error,result,fields){
        if(fields.length>0){
            res.redirect("/profile");
        }else{
            res.redirect("/");
        }
        res.end();
    });

});