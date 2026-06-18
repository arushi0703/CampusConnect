const express = require("express")
const logger = require("./middleware/logger")
const cors = require("cors")

const studentRoutes = require("./routes/studentRoutes")
const taskRoutes = require("./routes/taskRoutes")
const errorMiddleware = require("./middleware/errorMiddleware")

const app = express()

app.use(cors())

app.use(logger)

app.use(express.json())

app.get("/",(req,res)=>{

    res.send("CampusConnect Backend Running")

})

app.use("/students",studentRoutes)

app.use("/tasks",taskRoutes)

app.use((req,res)=>{

    res.status(404).json({
        success:false,
        message:"Route not found"
    })

})

app.use(errorMiddleware)

module.exports = app