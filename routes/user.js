const express= require('express');
const routes= express.Router();
const Post =require('../models/Post')
const userController= require('../controller/userController');
const { updateUser } = require('../controller/userController');

const homeController = require("../controller/home");
const uploadController = require("../controller/uploadController");

//Routes
routes.get('/',userController.getUser);

routes.post('/',userController.PostUser);

routes.get('/:getIDUser',userController.getIDUser);

routes.delete('/:deleteUser',userController.deleteUser);

routes.patch('/:updateUser',updateUser);



module.exports= routes;
