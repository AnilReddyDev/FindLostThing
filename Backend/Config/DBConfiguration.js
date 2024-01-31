const mongoose = require('mongoose');
require('dotenv').config()
const connectDB =async ()=>{
    try {
        // console.log(process.env.CONNECTION_STRING)
        const connect = await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("DB connection is successfull")
        // console.log(connect.connection.host)
        console.log(connect.connection.name)
    } catch (error) {
        console.log('DB connection failed !',error)
    }
}

module.exports = connectDB;