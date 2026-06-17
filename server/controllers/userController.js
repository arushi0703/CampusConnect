const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const createUser = async (req, res) => {

    try {

        const { name, email, password } = req.body

        if (!name || !email || !password) {

            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })

        }

        const existingUser = await User.findOne({ email })

        if (existingUser) {

            return res.status(400).json({
                success: false,
                message: "Email already registered"
            })

        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            name,
            email,
            password: hashedPassword
        })

        res.status(201).json({
            success: true,
            message: "Registration Successful",
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
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

const loginUser = async (req, res) => {

    try {

        const { email, password } = req.body

        if (!email || !password) {

            return res.status(400).json({
                success: false,
                message: "Email and Password are required"
            })

        }

        const user = await User.findOne({ email })

        if (!user) {

            return res.status(401).json({
                success: false,
                message: "Invalid Credentials"
            })

        }

        const isMatch = await bcrypt.compare(
            password,
            user.password
        )

        if (!isMatch) {

            return res.status(401).json({
                success: false,
                message: "Invalid Credentials"
            })

        }

        const token = jwt.sign(
            {
                id: user._id,
                email: user.email,
                role: user.role
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            }
        )

        res.status(200).json({
            success: true,
            message: "Login Successful",
            token,
            role: user.role,
            name: user.name
        })

    }
    catch (error) {

        res.status(500).json({
            success: false,
            message: "Server Error"
        })

    }

}

const getUsers = async (req,res) => {

    try {

        console.log("GET USERS HIT")

        const users = await User.find()

        console.log(users)

        res.status(200).json({
            success:true,
            data:users
        })

    }
    catch(error){

        console.log(error)

        res.status(500).json({
            success:false,
            message:error.message
        })

    }

}

const getUserById = async (req, res) => {

    try {

        const user = await User.findById(req.params.id).select("-password")

        if (!user) {

            return res.status(404).json({
                success: false,
                message: "User not found"
            })

        }

        res.status(200).json({
            success: true,
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
        })

    }
    catch (error) {

        res.status(500).json({
            success: false,
            message: "Server Error"
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
            data: {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role
            }
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

const deleteUser = async (req, res) => {

    try {

        const user = await User.findByIdAndDelete(
            req.params.id
        )

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
            message: "Server Error"
        })

    }

}

module.exports = {
    createUser,
    loginUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}