const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: String,
    password: String,
    firstName: String,
    lastName: String,
    birthday: String,
    isMale: Boolean,
    created: { type: Date, default: Date.now },
  },
  { collection: "Users" }
);

module.exports = mongoose.model("User", userSchema);
