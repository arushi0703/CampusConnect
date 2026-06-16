const express = require("express")

const router = express.Router()

const students = require("../data/students")

router.post("/", (req,res) => {

    const student = req.body

    students.push(student)

    res.status(201).json({
        success:true,
        message:"Student created successfully",
        data:student
    })

})

router.get("/", (req,res) => {

    res.status(200).json({
        success:true,
        message:"Students retrieved successfully",
        data:students
    })

})

router.get("/:id", (req,res) => {

    res.status(200).json({
        success:true,
        message:"Single student retrieved"
    })

})

router.put("/:id", (req,res) => {

    res.status(200).json({
        success:true,
        message:"Student updated successfully"
    })

})

router.delete("/:id", (req,res) => {

    res.status(200).json({
        success:true,
        message:"Student deleted successfully"
    })

})

module.exports = router