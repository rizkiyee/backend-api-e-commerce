const { Product } = require("../../models");
const { formatResponse } = require("../../helpers/formatResponse.js");

const getAllItems = (req, res) => {
  Product.findAll({})
    .then((products) => {
      // console.log(products);
      return res.status(200).json(formatResponse(products, "success"));
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(formatResponse(err));
    });
};

const getItemsById = (req, res) => {
  const productId = req.params.id;
  Product.findOne({
    where: {
      id: productId,
    },
  })
    .then((result) => {
      if (result) {
        console.log(result.dataValues);
        return res.status(200).json(formatResponse(result, "success"));
      } else {
        return res.status(404).json(formatResponse(result, "not found"));
      }
    })
    .catch((err) => {
      res.status(500).json(formatResponse(err, "Internal Server error"));
      // console.log(err);
    });
};

const deleteItemById = (req, res) => {
  const itemId = req.params.id;
  Product.destroy({
    where: {
      id: itemId,
    },
  })
    .then((result) => {
      return res.status(200).json(formatResponse(result, "success"));
    })
    .catch((err) => {
      res.status(500).json(formatResponse(err));
    });
};

const addItem = (req, res) => {
  const { prodName, prodPrice, prodStock } = req.body;

  if (!prodName || !prodPrice || !prodStock) {
    return res.status(400).json(formatResponse(null, "Missing body request."));
  }
  Product.create({
    productName: prodName,
    productPrice: prodPrice,
    productStock: prodStock,
  })
    .then((result) => {
      console.log(result);
      res.status(200).json(formatResponse(result, "success"));
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(formatResponse(err));
    });
};
module.exports = { getAllItems, getItemsById, deleteItemById, addItem };
