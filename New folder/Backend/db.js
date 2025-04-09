const mongoose=require('mongoose')
const UserSchema =new mongoose.Schema({
    first:{
        type:String,
        required:true
    },
    last:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },

})

const User=mongoose.model('User',UserSchema)
module.exports=User