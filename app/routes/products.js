var express = require('express');
var router = express.Router();

let prdController = require("../controllers/products");

router.get("/products", prdController.getAllPrds);
router.get("/products/:id", prdController.prdById);
router.post("/products", prdController.createPrd);
router.put("/products/:id", prdController.update);
router.delete("/products/:id", prdController.deletePrd);

module.exports = router;

