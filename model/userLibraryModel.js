const mongoose = require("mongoose");

const librearySchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    require: [true, "plz provide valid userId"],
  },
  AllPhotos: {
    type: Array,
    require: true,
    default: [],
  },
});

const UserLiberary = mongoose.model("userLiberary", librearySchema);

module.exports = UserLiberary;
