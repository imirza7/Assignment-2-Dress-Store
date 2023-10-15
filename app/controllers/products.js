let Prd = require("../models/products");

// Create new product
module.exports.createPrd = async (req, res, next) => {
  try {
    let newPrd = new Prd(req.body);
    let result = await Prd.createPrd(newPrd);
    console.log(result);
    res.json({
      success: true,
      message: "Product successfully added.",
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Get all products
module.exports.getAllPrds = async function (req, res, next) {
    try {
      let allprds = await Prd.find({}, '-category');
      res.json(allprds);
    } catch (error) {
      console.log(error);
      next(error);
    }
};

// Get product by ID
module.exports.prdById = async function (req, res, next) {
    try {
      let id = req.params.prdId;
      let prd = await Prd.findone({ _id: id }, '-category');
      res.json(prd);
      next();
    } catch (error) {
      console.log(error);
      next(error);
    }
};

module.exports.read = async function (req, res, next) {
  res.json(req.prd);
};

// Update product by ID
module.exports.update = async (req, res, next) => {
  try {
    let prdId = req.params.prodID;
    let updatedPrd = Prd(req.body);
    updatedPrd._id = prdId;

    let results = await Prd.updateOne({ _id: prdId }, updatedPrd);
    console.log(results);
    if (results.modifiedCount > 0) {
      res.json({
        success: true,
        message: "Product successfully updated.",
      });
    } else {
      
      throw new Error("Product did not update, please try again!");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// Delete a product by ID
module.exports.deletePrd = async (req, res) => {
  try {
    let prdId = req.params.prdID;

    let result = await Prd.deleteOne(prdId);

    if (result.deletedCount > 0) {
      res.json({
        success: true,
        message: "Product deleted successfully.",
      });
    } else {
      throw new Error("Unable to delete product, please try again!");
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};
