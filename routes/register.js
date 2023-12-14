const express = require("express");
const User = require("../models/User");
const router = express.Router();
const dotenv = require("dotenv").config();
const bcrypt = require("bcrypt")
router.post("/",async (req,res)=>{
    const {name,email,phoneNumber,address,password}= req.body;
    try{
        const user = User.findOne({email})
        if(user){
            return res.status(400).json("User Exists")
        }else{
            bcrypt.hash(password, 10)
            .then((password)=>{
                const user = new User({
                    name,
                    email,
                    password,
                    phoneNumber,
                    address
                })
                 user.save()
                return res.json(user)
            })
            .catch((e)=>res.status(500).json(e.message))

        }
        
    }catch(e){
        console.log(e.message);
        res.status(500).json("server Error")
    }

})

module.exports = router