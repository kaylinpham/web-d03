const User = require("../models/user.model");
module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });

  if (!user) {
    return res
      .status(400)
      .json({ isSuccess: false, message: "Wrong email or password." });
  }

  return res.status(200).json({
    isSuccess: true,
    message: "Login successfully.",
  });
};
