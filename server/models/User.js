const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Name is required"],
        minlength:[3,"Minimum 3 characters"],
        maxlength:[50,"Maximum 50 characters"]
    },

    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true,
        lowercase:true,
        trim:true
    },

    password:{
        type:String,
        required:[true,"Password is required"]
    },

    role:{
        type:String,
        enum:["Student","Faculty","Admin"],
        default:"Student"
    },

    isActive:{
        type:Boolean,
        default:true
    }

},
{
    timestamps:true
})

module.exports = mongoose.model("User",userSchema)