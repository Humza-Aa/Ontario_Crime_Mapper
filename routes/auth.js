const router = require("express").Router();
const User = require("../model/User");
const { registerValidation, loginValidation } = require("./validation");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
  //Validate Data
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //Check if user exists
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).send("Email Already Exist");
  }

  //Hash Password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  //Create a New User
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const savedUser = await user.save();
    res.send({ User: user._id });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  const user = await User.findOne({
    email: req.body.email,
  });
  if (!user) {
    return res.status(400).send(`Email: ${req.body.email} does not exist`);
  }

  bcrypt.compare(req.body.password, user.password, function (err, data) {
    if (err) throw err
    if (data) {
        return res.status(200).json({ msg: "Login success" })
    } else {
        return res.status(401).json({ msg: "Invalid credential" })
    }
  });

//   return res.send(user);
});

module.exports = router;
