const express = require("express");
const mongoose = require("mongoose");
const connectDB =require('./database/db');
const cors = require("cors");
require("dotenv").config();


// set up express
const app = express();
app.use(express.json());
app.use(cors());





connectDB();
app.get('/',(req ,res)=>{
    res.send('Inside Server')
})
const port = 5000;

app.listen(port, ()=> console.log(`listening on port ${port}`));

// set up mongoose