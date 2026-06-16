const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Name is required"],
        minlength:[3,"Name must be at least 3 characters"],
        maxlength:[50,"Name cannot exceed 50 characters"]
    },

    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true
    },

    password:{
        type:String,
        required:[true,"Password is required"],
        minlength:[6,"Password must be at least 6 characters"]
    },

    registrationDate:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("User",userSchema)