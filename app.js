const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

const connectDB = require("./config/db")

connectDB()

app.use(express.json())
app.use(cors())

const PORT = process.env.port || 5000;

// app.use("/", (request, response) => response.send("hello"));
// app.use("/api/register",require("./routes/register"))
// app.use("/api/login",require("./routes/login"))
app.use("/api/donate",require("./routes/donate"))
app.use("/api/getdonations",require("./routes/getDonations"))
// Start Express
app.listen(PORT, () => console.log(`Server Started at port ${PORT}`));

module.exports = app;