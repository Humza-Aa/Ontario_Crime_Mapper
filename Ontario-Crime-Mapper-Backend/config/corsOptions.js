const express = require('express');
const cors = require('cors');
const app = express();
const allowedOrigins = require('./allowedOrigin');

const corsOptions = {
    origin: 'https://crimevue.vercel.app/',
    credentials: true,
    optionSuccessStatus: 200

}

module.exports = corsOptions
