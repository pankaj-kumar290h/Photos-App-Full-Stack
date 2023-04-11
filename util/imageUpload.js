const cloudinary = require("cloudinary");

exports.fileUpload = async (filePath) => {
  const url = await cloudinary.uploader
    .upload(filePath)
    .then((result) => {
      return result.url;
    })
    .catch((err) => console.log(err));

  return url;
};
