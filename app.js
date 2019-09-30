const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function(req,res){

var today = new Date();
if(today.getDate()===5 || today.getDate()===6){
  res.send("Yeh! It's holiday! ");
}
else
res.send("Boo! I have to work!");

});

app.listen(3000, function(){
  console.log("App started at port 3000");
});
