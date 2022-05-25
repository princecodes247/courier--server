const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
     {
          name: {
            type: String,
            trim: true,
            required: [true, "Name is required"],
          },
          email: {
            type: String,
            trim: true,
            unique: true,
            required: [true, "Email is required"],
          },
          password: {
            type: String,
          },
          image: {
            type: String,
          },
          role: {
            type: String,
            trim: true,
            enum: ["user", "admin"],
            default: "user"
          },
          isActive: {
            type: Boolean,
            default: true,
          },
          isVerified: {
            type: Boolean,
            default: false,
          }
        },
        {
          timestamps: true
        }
);


module.exports = mongoose.model("Order", OrderSchema)
