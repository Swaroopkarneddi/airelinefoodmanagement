const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
// const cookieparser = require("cookie-parser");
const bodyParser = require("body-parser");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("database connected"))
  .catch((err) => console.log("database not connected", err));

const app = express();
app.use(bodyParser.json());
app.use(express.json());
// app.use(cookieparser());
app.use(express.urlencoded({ extended: false }));

app.use("/", require("./routes/authroutes"));

const port = 8000;

app.listen(port, () => console.log(`server is running at ${port}`));
