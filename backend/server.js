require("dotenv").config();

const path = require("path");

const express = require("express");

const app = express();

const mongoose = require("mongoose");

const cors = require("cors");

const fileupload = require("express-fileupload");

const cookieParser = require("cookie-parser");

app.use(express.json());

app.use(cookieParser());

app.use(cors());

app.use(
  fileupload({
    useTempFiles: true,
  })
);
//routes
app.use("/user", require("./routes/userrouter"));

app.use("/api", require("./routes/categoryRouter"));

app.use('/api',require('./routes/upload'))

app.use('/api',require('./routes/productrouter'))

//connect to db
const uri = process.env.mongo_url;

mongoose.connect(uri, (err) => {
  if (err) throw err;

  console.log("connected to MongoDb");
});

//server setup

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../", "client", "build", "index.html"));
});

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
