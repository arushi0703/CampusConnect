const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
        minlength:3,
        maxlength:100
    },

    description:{
        type:String,
        required:true,
        maxlength:500
    },

    status:{
        type:String,
        required:true,
        enum:["Pending","In Progress","Completed"],
        default:"Pending"
    },

    assignedUser:{
        type:String,
        required:true
    },

    createdDate:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("Task",taskSchema)