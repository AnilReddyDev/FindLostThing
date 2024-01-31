const express = require('express');
const app = express()
const PORT = 3000 || process.env.PORT
const connectDB = require("./Config/DBConfiguration")

connectDB()

app.use(express.json())



app.use("/api/item",require("./Routes/ItemsRoutes"))
app.use("/api/user",require("./Routes/UserRoutes"))

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})