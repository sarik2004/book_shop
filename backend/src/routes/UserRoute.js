const express = require("express");
const router = express.Router();

const {
  UserRegister,
  UserLogin,
  ListAllUser,
} = require("../controller/UserController");

const {VerifyToken} = require("../middleware/VerifyToken");
const {Authorize} = require("../middleware/Authorize");

router.post("/register", UserRegister);
router.post("/login", UserLogin);

router.get("/users", VerifyToken, Authorize("admin"), ListAllUser);

module.exports = router;
