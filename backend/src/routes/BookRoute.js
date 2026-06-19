const {
  CreateBook,
  UpdateBook,
  DeleteBook,
  GetAllBooks,
  GetBookById,
} = require("../controller/BookController");
const upload = require("../middleware/multer")
const { VerifyToken } = require("../middleware/VerifyToken");
const { Authorize } = require("../middleware/Authorize");

const express = require("express");
const router = express.Router();
//public routes
router.get("/books", GetAllBooks);
router.get("/books/:id", GetBookById);

router.post(
  "/books",
  VerifyToken,
  upload.single("image"),
  Authorize("admin"),
  CreateBook,
);
router.put(
  "/books/:id",
  VerifyToken,
  Authorize("admin"),
  upload.single("image"),
  UpdateBook,
);
router.delete(
  "/books/:id",
  VerifyToken,
  Authorize("admin"),
  upload.single("image"),
  DeleteBook,
);

module.exports = router;
