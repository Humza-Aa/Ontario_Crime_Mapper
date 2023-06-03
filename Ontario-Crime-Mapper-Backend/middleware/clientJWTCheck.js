const jwt = require("jsonwebtoken");

const clientJWTChecker = (req, res) => {
  // Check if token exists
  // console.log(req.headers.cookies)
  const Token = req.headers.cookies;
  if (Token) {
    // Get Token
    // const Tokensplit = Token.split(" ")[1];
    // Verify Token
    jwt.verify(Token, process.env.REFRESHTOKENPASSWORD, (error, decoded) => {
      if (error) {
        return res.status(401).json({ message: "Unauthorized" });
      } else {
        req._id = decoded._id;
        req.email = decoded.name;
        res.status(200).json({message: "allgood"})
      }
    });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = clientJWTChecker;