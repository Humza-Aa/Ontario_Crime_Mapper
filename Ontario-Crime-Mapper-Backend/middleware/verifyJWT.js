const jwt = require("jsonwebtoken");

const verifyJWT = (req, res, next) => {
  // Check if token exists
  const Token = req.headers['authorization']
  // console.log(refreshToken)
  if (Token) {
    // Get Token
    const Tokensplit = Token.split(' ')[1];
    // Verify Token
    jwt.verify(
      Tokensplit,
      process.env.TOKENPASSWORD,
      (error, decoded) => {
        if (error) {
          return res.status(401).json({ message: "Unauthorized" });
        } else {
          req._id = decoded._id; 
          console.log(req._id)
          next();
        }
      }
      );
    } else {
    res.status(401).json({ message: "Unauthorized " });
  }
};

module.exports = verifyJWT;
