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
        //    console.log(res.body);

        } catch (error) {
            res.send(createError(404, error))
        }
    },
    getUser: async(req,res)=>{
        try{
            const getuser=await PostModel.find();
            res.json(getuser);
        }catch(err){
            res.json({message :err})
        }
    },
    getIDUser: async (req,res)=>{
        try{
            const getID=await PostModel.findById(req.params.getIDUser);
           // console.log(req.params.getIDUser);
            res.json(getID);
        }catch(err){ 
            res.json({message: err});
        }
    },
    deleteUser: async (req,res)=>{
        try{
            const deleteac=await PostModel.deleteOne({_id: req.params.deleteUser });
            if(res.json(deleteac)){
            }
            
        }catch(err){
            res.json({message: err})
        }
    },
    updateUser: async (req,res)=>{
        try{
            const updateAc= await PostModel.updateMany(
                {_id: req.params.updateUser},
                {$set: {user: req.body.user,
                        password: req.body.password}
                })
                    res.json(updateAc)
        }catch(err){
            res.json({message: err})
        }
    }
};