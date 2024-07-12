const mongoose = require("mongoose");
const { Schema } = mongoose;

const LoginSchema = mongoose.Schema(
  {
    UserName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const LoginModel = mongoose.model("login", LoginSchema);
module.exports = LoginModel;
