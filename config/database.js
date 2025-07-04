// const mongoose = require("mongoose");
import mongoose, { connect } from 'mongoose';



const connectDB = async () => {
 try {
    await mongoose.connect('mongodb://127.0.0.1:27017/contacts-crud').then( ()=> {
        console.log("monogDB connected successfully");
    });
} catch (error) {
 console.log(error);
}
};

export default connectDB;
