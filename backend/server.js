require("dotenv").config();

const path = require("path");

const express = require("express");

const app = express();

const mongoose = require("mongoose");

// const cors = require("cors");

const fileupload = require("express-fileupload");

const cookieParser = require("cookie-parser");

app.use(express.json());

app.use(cookieParser());

// const allowedOrigins = ["http://localhost:5000"];

// const corsOptions = {
//   origin: function (origin, callback) {
//     if (allowedOrigins.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed"));
//     }
//   },
// };

// // Use CORS middleware for all routes except the root

// app.use(cors(corsOptions));

app.use(
  fileupload({
    useTempFiles: true,
  })
);
//routes
app.use("/user", require("./routes/userrouter"));

app.use("/api", require("./routes/categoryRouter"));

//connect to db
const uri = process.env.mongo_url;

mongoose.connect(uri, (err) => {
  if (err) throw err;

  console.log("connected to MongoDb");
});

//server setup

app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../", "client", "build", "index.html"));
});

const PORT = process.env.port || 5000;

app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
