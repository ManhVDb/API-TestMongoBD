const express= require('express');
const routes= express.Router();
const Post =require('../models/Post')
const userController= require('../controller/userController');
//Routes
routes.get('/',(req,res)=>{
    res.send('hello world')
});

routes.post('/',userController.PostUser);

module.exports= routes;
