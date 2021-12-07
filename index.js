const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log('Sever started on port' + PORT));

app.get('/',(req,res)=>{
    res.send('Hello!!!');
});

app.get('/add/:a/:b',(req,res)=>{
   var a = parseInt(req.params.a);
   var b= parseInt(req.params.b);
   var sum = Number(a+b);
    res.send("Sum: "+ Number(sum));
});

module.exports=app