const { User } = require("../../models/index.js");
const { formatResponse } = require("../../helpers/formatResponse.js");
const {hashPassword }= require("../../utils/bcrypt.js")

const addUser = (req, res) => {
  const { name, email, password } = req.body; // Assuming password is part of the req.body

  hashPassword(password, (err, hashedPassword) => {
    if (err) {
      console.error('Error hashing password:', err);
      return res.status(500).json(formatResponse(err));
    }

    User.create({
      name,
      email,
      password: hashedPassword,
    })
      .then((result) => {
        console.log(result);
        res.status(200).json(formatResponse(result, 'success'));
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(formatResponse(err));
      });
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

const updateUserById = (req, res) => {
  const userId = req.params.id;
  const { name, email, password } = req.body;

  hashPassword(password, (err, hashedPassword) => {
    if (err) {
      console.error('Error hashing password:', err);
      return res.status(500).json(formatResponse(err));
    }

    User.update(
      {
        name,
        email,
        password: hashedPassword,
      },
      {
        where: { id: userId },
      }
    )
      .then((result) => {
        console.log(result);
        if (result[0] === 1) {
          res.status(200).json(formatResponse(result, 'success'));
        } else {
          res.status(404).json(formatResponse('User not found', 'error'));
        }
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json(formatResponse(err));
      });
  });
};

module.exports = { addUser, removeUserById, updateUserById };