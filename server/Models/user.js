const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
