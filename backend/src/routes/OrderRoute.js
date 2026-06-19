const express = require("express");
const routes = express.Router();

const {
  CreateOrder,
  GetAllOrders,
  GetMyOrders,
  GetOrderById,
  UpdateOrder,
  DeleteOrder,
} = require("../controller/OrderController");
const {VerifyToken} = require("../middleware/VerifyToken");
const {Authorize} = require("../middleware/Authorize");

routes.post("/orders", VerifyToken, Authorize("customer"), CreateOrder);

routes.get("/my-orders", VerifyToken, Authorize("customer"), GetMyOrders);

routes.get("/orders", VerifyToken, Authorize("admin"), GetAllOrders);

routes.get(
  "/orders/:id",
  VerifyToken,
  Authorize("admin", "customer"),
  GetOrderById,
);

routes.patch(
  "/orders/:id/status",
  VerifyToken,
  Authorize("customer"),
  UpdateOrder,
);

routes.delete("/orders/:id", VerifyToken, Authorize("admin"), DeleteOrder);

module.exports = routes;
