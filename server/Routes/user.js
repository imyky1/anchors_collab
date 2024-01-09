const express = require("express");
const qs = require('querystring');
const axios = require('axios');
const { error } = require("console");
const router = express.Router();
const Influencer = require('../models/Inluencer')

router.post('/saveinfo',async(req,res)=>{
    try{
      const {linkedinProfile,name,email,picture,mobile,refered_code} = req.body
      if(!email || !name || !mobile){
        return res.status(402).json("Empty data")
      }
      const founduser1 = await Influencer.findOne({ email: email })
      if (founduser1) {
        console.log(founduser1)
          return res.status(422).json({ error: "This email Already Exist" })
      }
      let refered
      if(refered_code){
        refered = await Influencer.findOne({referal_code:refered_code})
        if(!refered){
          return res.status(422).json({ error: "Invalid referal code" })
        }
      }
      let referal_code = mobile.slice(-4)
      let foundCode = await Influencer.findOne({ referal_code })
      while(foundCode){
        referal_code = parseInt(foundCode.referal_code, 10); // Convert string to number
        referal_code = referal_code + 1; // Add 1 to the number
        referal_code.toString()
        foundCode = await Influencer.findOne({ referal_code })
      }
      const created_at = new Date()
      const updated_at = new Date()
      const info = new Influencer({name,email,picture,mobile,linkedinProfile,referal_code,created_at,updated_at})
      const saved_user = await info.save()
      
        if(refered){
          await Influencer.findByIdAndUpdate(refered._id,{$push:{refered_to:saved_user._id}})
          await Influencer.findByIdAndUpdate(saved_user._id,{refered_by:refered._id})
        }
      return res.json({ message: saved_user })
    }catch(e){
      console.log("error saving data",e)
      return res.status(422).json({error:"error saving user info"})
    }
  })
  
module.exports = router;