const addToCardModel = require("../../models/cartProduct");

const addToCartViewProduct = async (req, res) => {
  try {
    const currentUser = req.userId;

    const allProduct = await addToCardModel
      .find({
        userId: currentUser,
      })
      .populate("productId");

    res.json({
      data: allProduct,
      success: true,
      error: false,
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      success: false,
      error: true,
    });
  }
};
module.exports = addToCartViewProduct;
