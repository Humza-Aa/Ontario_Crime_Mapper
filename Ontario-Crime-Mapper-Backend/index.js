const express = require("express");
const app = express();
require("dotenv").config();
const mongoose = require("mongoose");

//Importing Routes
const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");

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

//Route Middleware
app.use("/api/newUser", authRoute);
app.use('/api/post', postRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(process.env.PORT, () =>
  console.log(`Server is running on Port: ${process.env.PORT}`)
);
