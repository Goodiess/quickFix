// loggingMiddleware.js

const loggingMiddleware = (req, res, next) => {
  const timestamp = new Date().toISOString();
  const method = req.method;
  const url = req.url;
  const body = req.method === "GET" ? "" : JSON.stringify(req.body); // Only log request body if not GET

  console.log(`[${timestamp}] ${method} ${url} - Body: ${body}`);

  next(); // Pass control to the next middleware or route handler
};

module.exports = loggingMiddleware;
