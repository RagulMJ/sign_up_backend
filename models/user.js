const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    confirmPassword: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },
    dob: {
      type: String,
      require: true,
    },
    mobile: {
      type: Number,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
