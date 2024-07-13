const crypto = require("crypto");
const User = require("../model/customer.model");
const technician = require("../model/technician.model");

const hashingUtil = require("../utils/hashing.utils");
const jwt = require("jsonwebtoken");

exports.customerSignIn = async (req, res) => {
  try {
    const rawEmail = req.body.email;
    const user = await User.findOne({ email: rawEmail });
    console.log(user);

    const { password } = req.body;
    const hashedPassword = hashingUtil(password);
    if (hashedPassword !== user.password) {
      return res.status(400).send({ error: "Invalid email or password." });
    }
    const token = jwt.sign({ _id: user._id }, "cool");
    res.send({ token });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: "Invalid email or password." });
  }
};
exports.technicianSignIn = async (req, res) => {
  try {
    const rawEmail = req.body.email;
    const user = await technician.findOne({ email: rawEmail });
    console.log(user);

    const { password } = req.body;
    const hashedPassword = hashingUtil(password);
    if (hashedPassword !== user.password) {
      return res.status(400).send({ error: "Invalid email or password." });
    }
    const token = jwt.sign({ _id: user._id }, "cool");
    res.send({ token });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ error: "Invalid email or password." });
  }
};
exports.customerSignUp = (req, res) => {};
exports.technicianSignUp = (req, res) => {};
exports.technicianForgotPassword = (req, res) => {};
exports.customerForgotPassword = (req, res) => {};
