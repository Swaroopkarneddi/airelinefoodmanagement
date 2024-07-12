const mongoose = require("mongoose");
const { Schema } = mongoose;

const OrdersSchema = mongoose.Schema(
  {
    passsName: {
      type: String,
      required: true,
    },
    subpass: {
      type: [String],
      required: true,
    },
    mealname: {
      type: [String],
      required: true,
    },
    totalprice: {
      type: Number,
    },
  },
  { timestamps: true }
);

const OrdersModel = mongoose.model("Order", OrdersSchema);
module.exports = OrdersModel;
