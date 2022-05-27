const OrderService = require("./../services/order.service");

const response = require("../utils/response");

class OrderContoller {
  async create(req, res) {
    console.log(req.body);
    const result = await OrderService.create(req.body);
    res.status(201).send(response("order created", result));
  }

  async getAll(req, res) {
    const result = await OrderService.getAll();
    res.status(200).send(response("All order", result));
  }

  async getOne(req, res) {
    const result = await OrderService.getOne(req.params.orderId);
    res.status(200).send(response("order data", result));
  }

  async update(req, res) {
    const result = await OrderService.update(req.params.orderId, req.body);
    res.status(200).send(response("order updated", result));
  }

  async delete(req, res) {
    const result = await OrderService.delete(req.params.orderId);
    res.status(200).send(response("order deleted", result));
  }
}

module.exports = new OrderContoller();
