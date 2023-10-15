var express = require('express');
var router = express.Router();

let prdController = require("../controllers/products");

router.get("/products", prdController.getAllPrds);
router.post("/create", prdController.createPrd);
router.get("/get/:id", prdController.prdById, prdController.read);
router.put("/edit/:id", prdController.update);
router.delete("/delete/:id", prdController.deletePrd);

module.exports = router;
