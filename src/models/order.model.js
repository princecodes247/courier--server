const mongoose = require("mongoose");
const shortid = require('shortid');
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
     {    
          _id: {
               type: String,
               default: shortid.generate
          },
          name: {
            type: String,
          },
          products: {
            type: Array,
            required: [true, "Products are required"],
          },
          price: {
            type: Number,
               required: [true, "Price is required"],
          },
          status: {
            type: String,
            trim: true,
            enum: ["processing", "shipped", "delivered", "cancelled"],
               default: "pending",
          }
        },
        {
          timestamps: true
        }
);

module.exports = mongoose.model("Order", OrderSchema)
