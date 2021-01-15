//const { Mongoose } = require('mongoose');
const PostModel=require('../models/Post');
const mongoose=require('mongoose');
//const { create } = require('../models/Post');
module.exports={
    PostUser: async (req,res)=>{
        try {
            const newUser= new PostModel({
                _id: new mongoose.Types.ObjectId(),
                user: req.body.user,
                password: req.body.password
            })
            const result = await newUser.save();
            res.status(200).json({
                data: result
            })
            console.log(res.body);

        } catch (error) {
            res.send(createError(404, error))
        }
    }
};