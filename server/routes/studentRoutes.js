const express = require("express")
const router = express.Router()
const authMiddleware = require("../middleware/authMiddleware")
const roleMiddleware = require("../middleware/roleMiddleware")

const {
    createUser,
    loginUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
} = require("../controllers/userController")

router.post("/",createUser)

router.post("/login",loginUser)

router.get("/",authMiddleware,getUsers)

router.get("/:id",authMiddleware,getUserById)

router.put("/:id",authMiddleware,updateUser)

router.delete("/:id",authMiddleware,roleMiddleware("Admin"),deleteUser)

module.exports = router