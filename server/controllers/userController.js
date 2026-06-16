const User = require("../models/User")

const createUser = async (req, res) => {

    try {
        
        const existingUser = await User.findOne({
            email: req.body.email
        })

        if (existingUser) {

            return res.status(400).json({
                success: false,
                message: "Email already exists"
            })

        }

        const user = await User.create(req.body)

        res.status(201).json({
            success: true,
            message: "User created successfully",
            data: user
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
            message: error.message
        })

    }

}

const getUsers = async (req, res) => {

    try {

        const users = await User.find()

        res.status(200).json({
            success: true,
            data: users
        })

    }
    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })

    }

}

const getUserById = async (req, res) => {

    try {

        const user = await User.findById(req.params.id)

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User not found"
            })

        }

        res.status(200).json({
            success: true,
            data: user
        })

    }
    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })

    }

}

const updateUser = async (req, res) => {

    try {

        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User not found"
            })

        }

        res.status(200).json({
            success: true,
            message: "User updated successfully",
            data: user
        })

    }
    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })

    }

}

const deleteUser = async (req, res) => {

    try {

        const user = await User.findByIdAndDelete(req.params.id)

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User not found"
            })

        }

        res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })

    }
    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        })

    }

}



module.exports = {
    createUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}