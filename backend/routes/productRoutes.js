const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const waterUsageController = require("../controllers/waterUsageController");
const qualityAssuranceController = require("../controllers/qualityAssuranceController");

router.get("/products", productController.getAllProducts);

router.get("/water-usage", waterUsageController.getWaterUsage);
router.post("/water-usage", waterUsageController.recordWaterUsage);

router.get("/quality-assurance/:productId", qualityAssuranceController.getProductQuality);
router.post("/quality-assurance", qualityAssuranceController.verifyProductQualtiy);

module.exports = router;
