const express = require("express");
const {
  insert,
  getProducts,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController.js");
const { validateToken } = require("../middleware/auth");

const router = express.Router();

router.use(validateToken);

router.post("/insert", insert);
router.get("/getAll", getProducts);
router.delete("/delete", deleteProduct);
router.put("/update", updateProduct);

module.exports = router;
