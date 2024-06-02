const mongoose = require("mongoose");

const qualityAssuranceSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  isEcoFriendly: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("QualityAssurance", qualityAssuranceSchema);
