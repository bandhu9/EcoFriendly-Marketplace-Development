const mongoose = require("mongoose");

const waterUsageSchema = new mongoose.Schema({
  timeStamp: {
    type: Date,
    default: Date.now(),
  },
  amount: {
    type: Number,
    require: true,
  },
});

module.exports = mongoose.model("waterUsage", waterUsageSchema);
