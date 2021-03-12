const express= require('express');
const mongoose =require('mongoose');
const app =express();
const bodyParser =require('body-parser');

require('dotenv/config');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

// inport Routes
const userRoutes=require('./routes/user');

const uploadController= require('./routes/uploadFile');
<<<<<<< HEAD
const exRoutes= require('./routes/ex');
=======
<<<<<<< HEAD
const exRoutes= require('./routes/ex');
=======
>>>>>>> c4bff4ab625a3bb596cc72f5c0a7d73ddc3755e5
>>>>>>> 4cbb8393519631e097af2f800b152de3b47faa2f
app.use('/user',userRoutes);

app.use('/post',userRoutes);

app.use('/delete',userRoutes);

app.use('/update',userRoutes);

app.use('/',uploadController);
<<<<<<< HEAD
app.use('/',exRoutes);
=======
<<<<<<< HEAD
app.use('/',exRoutes);
=======

>>>>>>> c4bff4ab625a3bb596cc72f5c0a7d73ddc3755e5
>>>>>>> 4cbb8393519631e097af2f800b152de3b47faa2f
///Connect To Db
mongoose.connect(process.env.DBConnection,
 {useNewUrlParser: true,useUnifiedTopology: true}, ()=>
console.log('Connected to DB')
);

//start lsitening to the server
app.listen(3001);