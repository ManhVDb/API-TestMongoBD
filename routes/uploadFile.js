const express= require('express');
const routes= express.Router();
const Post =require('../models/Post')
const userController= require('../controller/userController');


const homeController = require("../controller/home");
const uploadController = require("../controller/uploadController");


routes.get('/',homeController.getHome);

routes.post('/upload',uploadController.uploadFile);

module.exports= routes;