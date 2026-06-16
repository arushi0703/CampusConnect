const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({

    title:{
        type:String,
        required:[true,"Title is required"],
        minlength:[3,"Title must be at least 3 characters"],
        maxlength:[100,"Title cannot exceed 100 characters"]
    },

    description:{
        type:String,
        required:[true,"Description is required"],
        maxlength:[500,"Description cannot exceed 500 characters"]
    },

    status:{
        type:String,
        enum:["Pending","In Progress","Completed"],
        default:"Pending"
    },

    assignedUser:{
        type:String,
        required:[true,"Assigned User is required"]
    },

    createdDate:{
        type:Date,
        default:Date.now
    }

})

module.exports = mongoose.model("Task",taskSchema)