const {
  CreateCategory,
  GetAllCategories,
  GetCategoryById,
  UpdateCategory,
  DeleteCategory,
  getBooksByCategory
} = require("../controller/CatetgoriesConstroller");
const {VerifyToken} = require("../middleware/VerifyToken")
const {Authorize} = require("../middleware/Authorize")
const express = require("express");
const router = express.Router();

router.get( "/categories/:id/book", getBooksByCategory);
router.get("/categories", GetAllCategories);
router.get("/categories/:id", GetCategoryById); 

router.post("/categories",VerifyToken , Authorize("admin"), CreateCategory);
router.put("/categories/:id",VerifyToken , Authorize("admin"), UpdateCategory);
router.delete("/categories/:id",VerifyToken , Authorize("admin"), DeleteCategory);


module.exports = router;
