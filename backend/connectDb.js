const mongoose = require("mongoose");
require("dotenv").config();
const connectDatabase = async () => {
    try{
        console.log(process.env.DB_CONNECTION_STRING);
        const connect = await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log(`Database connected: ${connect.connection.name}`);

    } catch (error) {
        console.error("Database Connection failed");
    }
};

module.exports = connectDatabase;