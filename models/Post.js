const mongoose =require ('mongoose');

const PostUser =mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user:{
        type: String,
        require: true
    },
    password:{
        type: String,
        require:true
    }
});
const PortDât= mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    
})

module.exports=mongoose.model('posts', PostUser);