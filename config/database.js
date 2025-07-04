// const mongoose = require("mongoose");
import mongoose, { connect } from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
 try {
    await mongoose.connect(process.env.MONGO_URL).then( ()=> {
        console.log("monogDB connected successfully");
    });
} catch (error) {
 console.log(error);
}
};

export default connectDB;
