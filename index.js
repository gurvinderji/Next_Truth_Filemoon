const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DB);
// .then(() => {console.log("connected");});

const express = require("express");
const { signup, login } = require("./controller/user.controller");
const app = express();
app.listen(process.env.PORT || 8080);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("view"));

app.post("/signup", signup);
app.post("/login", login);

// app.get("/", (req, res) => {
//   res.send("success");
// });
