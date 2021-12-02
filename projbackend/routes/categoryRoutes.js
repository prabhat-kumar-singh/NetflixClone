const express = require("express");
const router = express.Router();

const { createCategory, updateCategory, getCategoryById, getAllCategories } = require("../controllers/category");

//param
router.param("categoryId", getCategoryById)

router.post("/create", createCategory);
router.post("/:categoryId/update", updateCategory);
router.get("/getCategories", getAllCategories);

module.exports = router;