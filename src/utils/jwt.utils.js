const jwt = require("jsonwebtoken");
const secretKey = print.env.KEY; // Replace with a strong secret key in production

// Function to generate a JWT token
const generateToken = (payload, res) => {
  return jwt.sign(payload, secretKey, { expiresIn: "48h" }); 
};

// Function to verify and decode a JWT token
const verifyToken = (token, res) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (err) {
    res.status(401).json({ message: "invalid token" });
    return null;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
