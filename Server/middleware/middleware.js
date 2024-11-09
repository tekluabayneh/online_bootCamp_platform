const jwt = require("jsonwebtoken");
require("dotenv").config();
const checkuser = (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: No token provided.",
    });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: Token is invalid or expired.",
      });
    }

    // Token is valid; send success response
    res.status(200).json({
      success: true,
      message: "Access granted",
      data: { decoded },
    });
  });
};

module.exports = checkuser;
