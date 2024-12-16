const express = require('express');
const mongoose =require('mongoose');
const fileUpload = require("express-fileupload");
const methodOverride = require("method-override");
const pageRoute = require('./routers/pageRoute');
const connectDB = require('./config/db'); 
const ejs = require("ejs");
const portfolioRoute = require('./routers/portfolioRoutes')


//Connect DB
connectDB();


const app = express();
//template Engine
app.set("view engine","ejs");

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(methodOverride('_method'));
app.use(express.static('public'));


//Route
app.use('/',pageRoute);
app.use('/portfolio',portfolioRoute);
  


const port = 3000;
app.listen(port, () => {
  console.log(`App started on port ${port}`);
});