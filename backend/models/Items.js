const mongoose = require("mongoose");
const { Schema } = mongoose;

const ItemSchema = mongoose.Schema(
  {
    ItemName: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Cal: {
      type: Number,
      required: true,
    },
    Type: {
      type: [String],
      required: true,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  { timestamps: true }
);

const ItemModel = mongoose.model("Items", ItemSchema);
module.exports = ItemModel;
