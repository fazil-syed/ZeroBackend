const jwt = require("jsonwebtoken")
const express = require("express");
const User = require("../models/User");
const router = express.Router();
const dotenv = require("dotenv").config();
const bcrypt = require("bcrypt")

router.post("/",async (req,res)=>{
    User.findOne({ email: req.body.email })
    .then((user)=>{
        bcrypt.compare(req.body.password,user.password)
        .then((passwordCheck)=>{
            if(!passwordCheck){
                return res.status(400).json("Invalid Password")
            }

            const token = jwt.sign({
                userId : user._id,
                userEmail : user.email
            },
            "RANDOM-TOKEN",{
                expiresIn: "24h"
            }
            )
            res.status(200).json(token)
        })
        .catch((e)=>res.status(400).json("Invalid Password"))
    })
    .catch((e)=>res.status(400).json("Email Not Found"))
})

module.exports = router