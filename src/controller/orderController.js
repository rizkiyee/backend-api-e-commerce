const { Order, User, Product } = require("../../models");

const { formatResponse } = require("../../helpers/formatResponse.js");

const placeOrder = async (req, res) => {
  try {
    const { userId, productId, orderQuantity } = req.body;
    const user = await User.findByPk(userId);
    const product = await Product.findByPk(productId);

    if (!user || !product) {
      throw new Error("User or product not found");
    }

    if (product.productStock < orderQuantity) {
      res.status(410).json(formatResponse("Insufficient stock"));
      throw new Error("Insufficient stock");
    }

    const totalPrice = orderQuantity * product.productPrice;

    const order = await Order.create({
      userId,
      productId,
      orderQuantity,
      totalPrice,
      orderStatus: "Pending",
    });

    await Product.update(
      { productStock: product.productStock - orderQuantity },
      { where: { id: productId } }
    );
    // console.log(product);

    res.status(200).json(formatResponse(order, "success"));
  } catch (error) {
    return res.status(500).json(formatResponse(error, "Internal Server Error"));
  }
};

const updateOrder = async (req, res) => {
  await Order.update(
    { orderStatus: "Berhasil" },
    {
      where: {
        id: req.body.id,
      },
    }
  )
    .then((result) => {
      res.status(200).json(formatResponse(result));
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(formatResponse(err, "Internal server error"));
    });
};

module.exports = { placeOrder, updateOrder };
