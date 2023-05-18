const express = require('express');
const cors = require('cors');
const app = express();
const allowedOrigins = require('./allowedOrigin');

const corsOptions = {
    origin: allowedOrigins,
    credentials: true,
    optionSuccessStatus: 200    
}

module.exports = corsOptions
