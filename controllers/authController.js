const User = require("../model/userModel");
const cloudinary = require("cloudinary");

exports.signup = async (req, res, next) => {
  const { email, userName, password } = req.body;
  const profileImage = req.files?.image;
  let imageURL;
  if (profileImage) {
    await cloudinary.uploader
      .upload(profileImage.tempFilePath)
      .then((result) => {
        imageURL = result.url;
      })
      .catch((err) => console.log(err));
  }
  const user = await User.create({
    email,
    userName,
    password,
    profileImage: imageURL,
  });
  console.log(user);
  user.password = undefined;

  res.json({ user });
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password)
    return res.status(400).json({ error: "plz provide email and password" });

  await User.findOne({ email })
    .then((user) => {
      if (user.password === password) {
        user.password = undefined;
        res.json({
          user,
        });
      }
    })
    .catch((err) => console.log(err));
};
