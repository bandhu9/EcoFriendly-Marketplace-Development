const QualityAssurance = require("../models/QualityAssurance");

exports.getProductQuality = async (req, res) => {
  try {
    const productId = req.params.productId;
    const qualityAssurance = QualityAssurance({ productId, isEcoFriendly });
    await qualityAssurance.save();
    res.status(201).json(qualityAssurance);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.verifyProductQualtiy = async (req, res) => {
  try {
    const productId = req.params.productId;
    const qualityAssurance = await QualityAssurance.findOne({ productId });
    res.josn(qualityAssurance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
