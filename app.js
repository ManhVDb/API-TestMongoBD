const express= require('express');


const app =express();


//Routes
app.get('/',(req,res)=>{
    res.send('hello world')
});

//start lsitening to the server
app.listen(3000);