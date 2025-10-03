const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DB);
// .then(() => {console.log("connected");});

const express = require("express");
const app = express();
app.listen(process.env.PORT || 8080);

app.use(express.static("view"));

// app.get("/", (req, res) => {
//   res.send("success");
// });
