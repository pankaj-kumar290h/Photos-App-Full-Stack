const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    require: [true, "plz provide username"],
  },
  password: {
    type: String,
    require: [true, "plz provide valid password"],
  },
  email: {
    type: String,
    require: [true, "plz provide valid email"],
    unique: true,
  },
  profileImage: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
