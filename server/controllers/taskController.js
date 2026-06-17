const Task = require("../models/Task")

const createTask = async (req, res) => {

    try {

        const task = await Task.create(req.body)

        res.status(201).json({
            success: true,
            message: "Task created successfully",
            data: task
        })

    }
    catch (error) {

        if (error.name === "ValidationError") {

            const errors = Object.values(error.errors).map(
                item => item.message
            )

            return res.status(400).json({
                success: false,
                errors
            })

        }

        res.status(500).json({
            success: false,
            message: "Server Error"
        })

    }

}

const getTasks = async (req, res) => {

    try {

        const tasks = await Task.find()

        res.status(200).json({
            success: true,
            data: tasks
        })

    }
    catch (error) {

        res.status(500).json({
            success: false,
            message: "Server Error"
        })

    }

}

const updateTask = async (req, res) => {

    try {

        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )

        if (!task) {

            return res.status(404).json({
                success: false,
                message: "Task not found"
            })

        }

        res.status(200).json({
            success: true,
            message: "Task updated successfully",
            data: task
        })

    }
    catch (error) {

        if (error.name === "ValidationError") {

            const errors = Object.values(error.errors).map(
                item => item.message
            )

            return res.status(400).json({
                success: false,
                errors
            })

        }

        res.status(500).json({
            success: false,
            message: "Server Error"
        })

    }

}

const deleteTask = async (req, res) => {

    try {

        const task = await Task.findByIdAndDelete(
            req.params.id
        )

        if (!task) {

            return res.status(404).json({
                success: false,
                message: "Task not found"
            })

        }

        res.status(200).json({
            success: true,
            message: "Task deleted successfully"
        })

    }
    catch (error) {

        res.status(500).json({
            success: false,
            message: "Server Error"
        })

    }

}

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
}