const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')
  if (!token) {
    return res.status(401).send({ error: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, "cool");
    req.user = decoded;
    next();
  } catch (ex) {
    console.log(ex);
    res.status(400).send({ error: 'Invalid token.' });
  }
};

module.exports = {
  authMiddleware,
};
