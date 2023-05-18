const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");
const cookieParser = require('cookie-parser');

// Importing cors
  const cors = require('cors');
  const corsOptions = require('./config/corsOptions');

  app.use(cors(corsOptions));

//Importing Routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
const verifyJWT = require("./middleware/verifyJWT");
const refresh = require("./routes/refresh");
const logoutRoute = require("./routes/logoutRoute");
// const refreshTokenRoute = require("./routes/refreshToken");

//connect to db
mongoose
  .connect(
    process.env.MONGODB_LINK
  )
  .then(() => console.log("Connected to db"))
  .catch((error) => {
    console.log(error);
  });

mongoose.connection.on("error", (err) => {
  console.log(err);
});

//Middleware
app.use(express.json());
app.use(cookieParser())

//Route Middleware
app.use("/api/User", authRoute);
app.use("/api/refresh", refresh);
app.use("/api/logout", logoutRoute);

//Verified Routes
app.use(verifyJWT)
app.use('/api/post', postRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running on Port: ${process.env.PORT}`)
);
