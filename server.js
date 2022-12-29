var express=require("express");

var app=express()
app.get("/",function(req,res){
res.write("hello world!!!!");
res.end();
})
app.listen(3001);
console.log("server listening at port 3000");