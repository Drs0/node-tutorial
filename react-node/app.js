const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const expressValidator = require("express-validator");




dotenv.config();
var app = express();





//use before routes
app.use(bodyParser.json());
app.use(expressValidator());










// const postRouts = require("./routes/post");
// app.get("/",function(req,res){
//     res.send("<h1>Hello From Nodes</h1>");
// })
//change from loocalhost to 127.0.0.1
mongoose.connect(process.env.DB,{useNewUrlParser:true,useUnifiedTopology:true}).then (() => {console.log("DB Connected")});
mongoose.connection.on("error",err=>{
    console.log("Error");
})




//routes
const postRouts = require("./routes/post");








//middleware

// const myOwnMiddleWare = (re,res,next)=>{
//     console.log("My Own MiddleWare");
//     next();
// }
// app.get("/",postRouts.getPosts);
app.use("/",postRouts);

app.use(morgan("dev"));


app.use(express.json());

// app.use(myOwnMiddleWare);


//npm i express-validator   go to package.json and change version to 5.3.1










const port = process.env.PORT ||"8080";
app.listen(port,()=>{ console.log("u are connected to nodejs server") });
// npm i morgan
// npm i -g dotenv
// npm i mongoose