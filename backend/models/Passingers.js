const mongoose = require("mongoose");
const { Schema } = mongoose;

const PassingerSchema = mongoose.Schema(
  {
    PassingerName: {
      type: String,
      required: true,
    },
    seatnumber: {
      type: Number,
      unique: true,
    },
  },
  { timestamps: true }
);

const PassingersModel = mongoose.model("Passinger", PassingerSchema);
module.exports = PassingersModel;
