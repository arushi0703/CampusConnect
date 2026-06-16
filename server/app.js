const express = require("express")
const logger = require("./middleware/logger")

const studentRoutes = require("./routes/studentRoutes")
const taskRoutes = require("./routes/taskRoutes")

const app = express()

app.use(logger)

app.use(express.json())

app.use("/students",studentRoutes)

app.use("/tasks",taskRoutes)

app.get("/",(req,res)=>{

    res.send("CampusConnect Backend Running")

})

module.exports = app