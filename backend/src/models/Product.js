const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  productName: { type: String, required: true, minlength: 3, maxlength: 100 },
  originDate: { type: Date, required: true },
  isPerishable: { type: Boolean, required: true },
  expirationDate: { type: Date },
  price: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Product", userSchema);
