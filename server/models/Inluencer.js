const mongoose = require('mongoose')

const Influencerschema = new mongoose.Schema({
    name:{
        type: String,
        required : true
    },
    email : {
        type: String,
        required: true
    },
    picture:{
        type:String,
        default:''
    },
    mobile:{
        type:String,
        default:''
    },
    linkedinProfile:{
        type:String,
        default:''
    },
    referal_code:{
        type:String
    },
    is_verified:{
        type:Boolean,
        default:false
    },
    refered_by:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Influencer'
    },
    refered_to:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Influencer'
    }],
    created_at:{
        type:Date
    },
    updated_at:{
        type:Date
    }
})

module.exports = new mongoose.model('Influencer',Influencerschema)