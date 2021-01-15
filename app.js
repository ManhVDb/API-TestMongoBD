const express= require('express');
const mongoose =require('mongoose');
const app =express();
const bodyParser =require('body-parser');

require('dotenv/config');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// inport Routes
const userRoutes=require('./routes/user');
app.use('/user',userRoutes);

app.use('/post',userRoutes);

///Connect To Db
mongoose.connect(process.env.DBConnection,
 {useNewUrlParser: true,useUnifiedTopology: true}, ()=>
console.log('Connected to DB')
);

//start lsitening to the server
app.listen(3000);