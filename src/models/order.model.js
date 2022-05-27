const mongoose = require("mongoose");
const shortid = require("shortid");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    _id: {
      type: String,
      default: shortid.generate,
    },
    from: {
      type: String,
      required: [true, "Start location is required"],
    },
    to: {
      type: String,
      required: [true, "End location is required"],
    },
    // products: {
    //   type: Array,
    //   required: [true, "Products are required"],
    // },
    // price: {
    //   type: Number,
    //      required: [true, "Price is required"],
    // },
    status: {
      type: String,
      trim: true,
      enum: ["pending", "processing", "in transit", "delivered", "cancelled"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", OrderSchema);
