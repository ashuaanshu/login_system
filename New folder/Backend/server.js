const express =require('express');
const mongoose=require('mongoose');
// import {dotenv} from './dotenv';
require ('dotenv').config();
const cors= require('cors')
const User=require('./db')

const app=express();
const PORT=process.env.PORT || 5000
app.use(cors());
app.use(express.json());
//connect to mongo db
mongoose.connect(process.env.Mongo,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})

.then(()=>console.log("Mongo connected"))
.catch((error)=>console.error('error: ',error))
//Dummy login

app.post('/login', async(req,res)=>{
    const {email, password}=req.body;

    try{
        const User=await User.findOne({email});
        if(!User || User.password!==password){
            return res.status(401).json({message: "Invalid password"})
        }
        res.status(200).json({message:`welcome ${User.first} ${User.last}`})
    } catch{    
        console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
    }
});
//check


// signup  part 

app.post('/signup',async(req,res)=>{
    const {first, last,email, password}=req.body;
    try{
        const existingUser=await User.findOne({email})
        if(existingUser){
            return res.status(409).json({message: "already exits user"})
        }
        const newUser=new User({first, last, email, password})
        await newUser.save();
        res.status(201).json({message:"signup successfull"})
    }catch(error){
        console.error("Signup error: ", error)
        res.status(500).json({message:"server error"})
    }
});

app.listen(PORT,()=>{
    console.log('server is running on port', PORT)
})
