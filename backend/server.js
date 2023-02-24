require("dotenv").config();
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

//connect to db
const uri = process.env.mongo_url;
mongoose.connect(uri, (err) => {
  if (err) throw err;
  console.log("connected to MongoDb");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server is running on port", PORT);
});
