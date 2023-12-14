const express = require("express");
const Donation = require("../models/Donation");
const router = express.Router();
const dotenv = require("dotenv").config();
router.post("/",async (req,res)=>{
    const {name,email,foodCategory,foodName,qty,phoneNumber,address}= req.body;
    try{
        const donation = new Donation({
            name,email,foodCategory,foodName,qty,phoneNumber,address
        })
        await donation.save()
        return res.status(200).json(donation)
        
    }catch(e){
        console.log(e.message);
        res.status(500).json("server Error")
    }

})

module.exports = router