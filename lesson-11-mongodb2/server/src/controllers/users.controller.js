const User = require("../models/user.model");

module.exports.getUsers = async (req, res) => {
  const users = await User.find();
  return res.status(200).json({
    isSuccess: true,
    message: "Successfully received",
    users,
  });
};

module.exports.getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) {
    return res.status(400).json({
      isSuccess: false,
      message: "Not found the user's id.",
    });
  }

  return res.status(200).json({
    isSuccess: true,
    message: "Successfully received",
    user,
  });
};

module.exports.deleteUserById = async (req, res) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);

  if (!user) {
    return res.status(500).json({
      isSuccess: false,
      message: "Not found the user's id",
    });
  }
  return res.status(200).json({
    isSuccess: true,
    message: "Success delete.",
    user,
  });
};

module.exports.createNewUser = (req, res) => {
  const { email, password, firstName, lastName, birthday, isMale } = req.body;

  if (!email || !password || !firstName || !lastName || !birthday) {
    return res.status(400).json({
      isSuccess: false,
      message: "Missing required fields",
    });
  }

  const newUser = new User({ ...req.body });

  newUser.save(function (err, doc) {
    if (err) {
      return res.status(500).json({
        isSuccess: false,
        message: "Database error",
      });
    } else {
      return res.status(200).json({
        isSuccess: true,
        message: "User is successfully created",
        newUser: doc,
      });
    }
  });
};

module.exports.updateUserById = (req, res) => {
  const { id } = req.params;

  User.findByIdAndUpdate(id, req.body, function (err, doc) {
    if (err) {
      return res.status(500).json({
        isSuccess: false,
        message: "Not found the user's id",
      });
    }
    return res.status(200).json({
      isSuccess: true,
      message: "Success update item",
      updatedUser: { ...doc._doc, ...req.body },
    });
  });
};
