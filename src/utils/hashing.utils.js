const crypto = require("crypto");

const hashPassword = (password) => {
  const hash = crypto.createHash("sha256"); // You can choose different algorithms like sha256, sha512, etc.
  hash.update(password);
  return hash.digest("hex");
};

module.exports = hashPassword;
