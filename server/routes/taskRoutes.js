const express = require("express")

const router = express.Router()

const tasks = require("../data/tasks")

router.post("/", (req,res) => {

    const task = req.body

    tasks.push(task)

    res.status(201).json({
        success:true,
        message:"Task created successfully",
        data:task
    })

})

router.get("/", (req,res) => {

    res.status(200).json({
        success:true,
        message:"Tasks retrieved successfully",
        data:tasks
    })

})

router.get("/:id", (req,res) => {

    res.status(200).json({
        success:true,
        message:"Single task retrieved"
    })

})

router.put("/:id", (req,res) => {

    res.status(200).json({
        success:true,
        message:"Task updated successfully"
    })

})

router.delete("/:id", (req,res) => {

    res.status(200).json({
        success:true,
        message:"Task deleted successfully"
    })

})

module.exports = router