// const credential = require("../model/users.json");
const { User } = require("../../models");
const { formatResponse } = require("../../helpers/formatResponse.js");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json(formatResponse(null, "Email and password are required."));
    }
    const user = await User.findOne({
      where: {
        email: email,
        password: password,
      },
    });

    if (user) {
      return res.status(200).json(formatResponse(user, "Login success!"));
    } else {
      return res
        .status(401)
        .json(formatResponse(null, "Email or password is incorrect."));
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json(formatResponse(null, "Internal Server Error"));
  }
};

module.exports = { login };
