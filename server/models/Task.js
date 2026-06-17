const mongoose = require("mongoose")

const taskSchema = new mongoose.Schema({

    title:{
        type:String,
        required:[true,"Title is required"],
        minlength:[3,"Minimum 3 characters"]
    },

    description:{
        type:String,
        required:[true,"Description is required"]
    },

    status:{
        type:String,
        enum:[
            "Pending",
            "In Progress",
            "Completed"
        ],
        default:"Pending"
    },

    assignedUser:{
        type:String,
        required:[true,"Assigned User is required"]
    }

},
{
    timestamps:true
})

module.exports = mongoose.model("Task",taskSchema)