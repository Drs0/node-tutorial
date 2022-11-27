// window.onload = (event)=>{
    
// }
const functions = require("./functions");
// function sum(a,b){
//     return a+b
// }
// const total = sum(1,5);
// const total2 = functions.mince(3,2);
// const power = functions.power(2,2);
// console.log(total);
// console.log(total2);
// console.log(power);

const {mince,power} = require("./functions");
console.log(mince(1,1),power(2,2));



//normal server creation

// //connect to a server write localhost:serverPort
// const http = require("http");
// const server = http.createServer((req,res)=>{
//     res.end("<h1>Hello From Nodes</h1>");
// })
// server.listen("4040");
//run command npm init
// run this npm i nodemon 
// in package.json in the script write  "dev": "node index.js" in the scripts
// npm run dev in terminal





//create server using express
let express = require("express");
var app = express();
app.get("/",function(req,res){
    res.send("<h1>Hello From Nodes</h1>");
})
app.listen("4040");




 
const fs = require("fs");
let fileName = "target.txt";
//watch
fs.watch(fileName,()=>{
    console.log("Change!");
})
//read

let errorHandler = err => console.log(err);
let dataHandler = data => console.log(data.toString()); 


fs.readFile(fileName,(err,data)=>{
    if(err) errorHandler(err);
    dataHandler(data);
})


// const data = fs.readFileSync(fileName);
// console.log(data.toString());