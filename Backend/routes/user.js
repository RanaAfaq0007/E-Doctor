import express from "express";
import mongoose from "mongoose";
import jwt from 'jsonwebtoken';

import User from "../models/User.js";


const router = express.Router();


router.post('/signup',async (req,res)=>{
   
    const {email,password,phoneNumber,name} = req.body;

    try{
      const user = new User({email,password,phoneNumber,name});
      await  user.save();
      const token = jwt.sign({userId:user._id},process.env.JWT_SECRET);
      res.send({
        name,
        password,
        phoneNumber,
        email,
        token
    })

    }catch(err){
      return res.status(422).send(err.message)
    }
    
    
});

router.post('/signin',async (req,res)=>{
    const {email,password} = req.body
    if(!email || !password){
        return res.status(422).send({error :"must provide email or password"})
    }
    const user = await User.findOne({email})
    if(!user){
        return res.status(422).send({error :"must provide email or password"})
    }
    try{
        if(user && (await user.comparePassword(password))){
            res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                phoneNumber:user.phoneNumber,
                token : jwt.sign({userId:user._id},process.env.JWT_SECRET),
            })
        }
         
     
    }catch(err){
        return res.status(422).send({error :"Wrong Password !! "})
    }
    
})

export default router;