const UserLiberary = require("../model/userLibraryModel");
const { fileUpload } = require("../util/imageUpload");

const upload = async (PhotoUrl, userId) => {
  let newUserLibrary;

  const userLibrary = await UserLiberary.findOne({ userId });

  if (!userLibrary || userLibrary.length == 0) {
    newUserLibrary = await UserLiberary.create({
      userId,
      AllPhotos: [PhotoUrl],
    });
  } else {
    let { AllPhotos } = userLibrary;
    userLibrary.AllPhotos = [PhotoUrl, ...AllPhotos];
    newUserLibrary = await userLibrary.save();
  }
  return newUserLibrary;
};

exports.addPhoto = async (req, res) => {
  const { userId } = req.body;
  const imageTemPath = req.files?.image.tempFilePath;
  if (!userId || !imageTemPath) return;
  const PhotoUrl = await fileUpload(imageTemPath);

  let newUserLibrary = await upload(PhotoUrl, userId);

  res.json({ newUserLibrary });
};

exports.bookmark = async (req, res) => {
  const { userId, PhotoUrl } = req.body;

  let newUserLibrary = await upload(PhotoUrl, userId);

  res.json({ newUserLibrary });
};
exports.getAllPhotos = async (req, res) => {
  const { userId } = req.body;
  const { AllPhotos } = await UserLiberary.findOne({ userId });
  res.json({
    AllPhotos,
  });
};
