const jwt = require("jsonwebtoken");

const JWT_SECRET = "supersecret";

async function checkToken(req, res, next) {
  const tokenFromHeader = req.headers["authorization"];
  if (tokenFromHeader) {
    const payload = jwt.verify(tokenFromHeader, JWT_SECRET);
    if (payload) {
      return next();
    }
  }
  return next("Not authorized.");
}

module.exports = checkToken;