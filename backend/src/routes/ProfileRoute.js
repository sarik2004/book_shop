const express = require("express");
const router = express.Router();

const {VerifyToken} = require("../middleware/VerifyToken");

router.get("/profile", VerifyToken, (req, res) => {
  res.json({
    message: "user profile",
    user: req.user,
  });
});

module.exports = router;
