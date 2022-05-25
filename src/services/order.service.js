const Order = require("../models/order.model");
const CustomError = require("../utils/custom-error");

class OrderService {

  async create(data) {
    return await new Order(data).save();
  }

  async getAll() {
    return await Order.find({});
  }

  async getOne(orderId) {
    const order = await Order.findOne({ _id: orderId });
    if (!order) throw new CustomError("Order does not exists");

    return order
  }

  async update(orderId, data) {
    const order = await Order.findByIdAndUpdate(
    { _id: orderId },
    { $set: data },
    { new: true }
    );

    if (!order) throw new CustomError("Order dosen't exist", 404);

    return order;
  }

  async delete(orderId) {
    const order = await Order.findOne({ _id: orderId });
    order.remove()
    return order
  }

}

module.exports = new OrderService();