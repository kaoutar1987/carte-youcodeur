const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


// set up express
const app = express();
app.use(express.json());
app.use(cors());

const port = 5000;

app.listen(port, ()=> console.log(`listening on port ${port}`));

// set up mongoose