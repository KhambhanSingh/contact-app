// const express = require('express');
import express from 'express';
const app = express();
// import Contact from "./models/contacts.model.js";
import ContactRoutes from "./routes/contact.routes.js";
import connectDB from "./config/database.js";

const PORT = process.env.PORT

//Database Cnnection
connectDB();

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

// Routers
app.use("/", ContactRoutes)

app.listen(PORT, () => {
    console.log(`Server Started at port ${PORT}.`);
});