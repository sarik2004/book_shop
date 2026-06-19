const express = require("express");
const router = express.Router();

const {
  CreateCart,
  addToCart,
  getCart,
  updateCartItem,
  deleteCartItem,
} = require("../controller/CartController");

const {VerifyToken} = require("../middleware/VerifyToken");
const {Authorize} = require("../middleware/Authorize");

// CART
router.post("/carts", VerifyToken, Authorize("customer"), CreateCart);
router.get("/cart", VerifyToken, Authorize("customer"), getCart);

// CART ITEMS
router.post("/cart/items", VerifyToken, Authorize("customer"), addToCart);
router.patch("/cart/items/:id", VerifyToken, Authorize("customer"), updateCartItem);
router.delete("/cart/items/:id", VerifyToken, Authorize("customer"), deleteCartItem);

module.exports = router;