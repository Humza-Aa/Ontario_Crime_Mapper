const { json } = require("express");

const handleLogout = (req, res) => {
  // Check if token exists
  if (req.cookies?.refresh_jwt) {
    console.log("token");
    console.log(req.cookies.refresh_jwt)
    // Verify Token
    res.clearCookie("refresh_jwt", {
      httpOnly: true,
      domain: 'http://localhost:3000/logout',
      sameSite: "None",
      secure: true,
    }); // secure true
    res.status(200).json({ message: "Logout Success" });
  } else {
    console.log("no token");
    res.status(204).json({ message: "Logout Success - No Content" });
  }
};

module.exports = { handleLogout };
