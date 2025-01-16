const express = require('express');

const app = express();

//this will only handle get call to /user
app.get("/user/:userId",(req,res) => {
  console.log(req.params)
  console.log(req.query);
  
  res.send({firstname:"Mohit",lastname:"Bhadani"});
})

app.post("/user",(req, res) => {
  //saving to database 
  res.send("Data saved to Db Successfully");
})

app.delete("/user",(req, res) => {
  //delete user
  res.send("user deleted succesfully")
})

// this will match all the http method api calls to /test 
app.use('/test', (req, res) => {
  res.send('response from test page');
});


app.listen(5000,()=>{
  console.log("listnening the port on 5000");
  
})