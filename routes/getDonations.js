const express = require("express");
const Donation = require("../models/Donation");
const router = express.Router();
const dotenv = require("dotenv").config();
router.get("/",async (req,res)=>{
    try{
       const donations = await Donation.find({completed:false})
       res.status(200).json(donations)
        
    }catch(e){
        console.log(e.message);
        res.status(500).json("server Error")
    }

})

module.exports = router