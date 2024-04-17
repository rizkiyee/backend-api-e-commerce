const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashPassword = (password, callback) => {
  bcrypt.hash(password, saltRounds, callback);
};

module.exports = { hashPassword };