const express = require('express');

const app = express();



app.use('/hello',(req,res)=>{
  res.send('response from hello page');
});

app.use('/test', (req, res) => {
  res.send('response from test page');
});

app.use('/',(req,res) => {
  res.send('resonse from home page');
});

app.listen(5000,()=>{
  console.log("listnening the port on 5000");
  
})