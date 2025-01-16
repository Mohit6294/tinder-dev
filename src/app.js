const express = require("express");

const app = express();

const {adminAuth, userAuth } = require('./middleware/auth');

app.use("/admin", adminAuth);

app.use("/user",userAuth, (req, res) => {
  res.send("User Data Sent");
} )

app.get("/admin/getAllData", (req, res, next) =>{
  res.send("send all Data");
});

app.delete("/admin/deleteUser", (req, res) => {
  //Logic of deleting the data
  res.send("Deleted the user");
})

/*
app.get(
  "/user",
  (req, res, next) => {
    console.log("Handling the route user !!");
    next();
    
  }
);

app.get(
  "/user",
  (req, res, next) => {
    console.log("handling the route handler");
    res.send("2nd Route Handler");
  }
)

/*
app.use(
  "/user",
  [(req, res, next) => {
    // Route Handler
    //res.send("route Handler 1")
    console.log("Handling the route user !!");
    //res.send("Resonse !");
    next(); 
    //res.send("REsponse 1!");
    
  },
  (req, res, next) => {
    //route handler 2
    console.log("Handling the route user 2");
    next();
    //res.send("2nd Response !");
  },
  (req, res) => {
    console.log("Handling the route user 3");
    res.send("3rd Response !")
  }]
);
*/
/*
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

*/
app.listen(5000, () => {
  console.log("listnening the port on 5000");
});
