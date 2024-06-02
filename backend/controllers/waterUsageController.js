const WaterUsage = require("../models/WaterUsage");

exports.getWaterUsage = async (req, res) => {
  try {
    const waterUsage = await WaterUsage.find();
    res.json(waterUsage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.recordWaterUsage = async (req, res) => {
  try {
    const { amount } = req.body;
    const waterUsage = new WaterUsage({ amount });
    await waterUsage.save();
    res.status(201).json(waterUsage);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
