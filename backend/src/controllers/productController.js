const Product = require("../models/Product");

const {
  insertValidate,
  updateValidate,
} = require("../validations/validateProduct");

exports.insert = async (req, res) => {
  const { error } = insertValidate(req.body);
  if (error) return res.status(400).send(error.message);

  try {
    const product = new Product({
      productName: req.body.productName,
      originDate: req.body.originDate,
      isPerishable: req.body.isPerishable,
      expirationDate: req.body.expirationDate,
      price: req.body.price,
    });

    await product.save();
    return res.send(product);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json(error);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const removedItem = await Product.findOneAndRemove(req.body.id);
    if (removedItem.modifiedCount === 0)
      return res.status(404).json({ error: "Product not found" });
  } catch (error) {
    return res.json(error);
  }

  return res.json({ ok: "Success" });
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findById(req.body.id);

  if (!req.body.originDate) {
    req.body.originDate = product.originDate;
  }

  if (req.body.isPerishable === undefined) {
    req.body.isPerishable = product.isPerishable;
  }

  const { error } = updateValidate(req.body);
  if (error) return res.status(400).send(error.message);

  try {
    await Product.findByIdAndUpdate(req.body.id, {
      productName: req.body.newProductName,
      originDate: req.body.originDate,
      isPerishable: req.body.isPerishable,
      expirationDate: req.body.expirationDate,
      price: req.body.price,
    });

    if (!req.body.isPerishable) {
      await Product.findByIdAndUpdate(req.body.id, {
        $unset: {
          expirationDate: "",
        },
      });
    }
  } catch (error) {
    return res.json(error);
  }
  return res.json({ ok: "Success" });
};
