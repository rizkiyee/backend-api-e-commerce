// const usersData = require("../model/users.json");
const { User } = require("../../models");
const { formatResponse } = require("../../helpers/formatResponse.js");

const addUser = (req, res) => {
  const { name, email, password } = req.body;
  User.create({
    name: name,
    email: email,
    password: password,
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

const removeUserById = (req, res) => {
  const userId = req.params.id;
  User.destroy({
    where: {
      id: userId,
    },
  })
    .then((result) => {
      return res.status(200).json(formatResponse(result, "success"));
    })
    .catch((err) => {
      res.status(500).json(formatResponse(err));
    });
};

module.exports = { addUser, removeUserById };
