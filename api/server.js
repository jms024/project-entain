'use strict';

const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const upload = multer();

// Config
const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();

// Initialize CORS
app.use(cors());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse multipart/form-data
app.use(upload.array());
app.use(express.static('public'));
app.use(bodyParser.raw());

// Route for root access
app.get("/", (req, res) => {
    res.json({message: "API up and running!"});
})

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);