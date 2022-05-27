const router = require("express").Router();
const OrderController = require("../controllers/order.controller");
const auth = require("../middlewares/auth.middleware");
const { role } = require("../config");

router.post("/", OrderController.create);
router.get("/", OrderController.getAll);
// router.post("/", auth(role.ADMIN), OrderController.create);
// router.get("/", auth(role.ADMIN), OrderController.getAll);
router.get("/:orderId", OrderController.getOne);
router.put("/:orderId", OrderController.update);
router.delete("/:orderId", OrderController.delete);
// router.put("/:orderId", auth(role.ADMIN), OrderController.update);
// router.delete("/:orderId", auth(role.ADMIN), OrderController.delete);

module.exports = router;
