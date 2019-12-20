const jwt = require("jsonwebtoken");

const secret = require("../config/secrets");

module.exports = (req, res, next) => {
  const token = req.headers.authorizaion;

  if (token) {
    jwt.verify(token, secret.jwtSecrets, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: "Please add a valid token" });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Token required" });
  }
};
