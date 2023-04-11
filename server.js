const { default: mongoose } = require("mongoose");
const app = require("./app");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary");

dotenv.config({ path: "./config.env" });

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

mongoose
  .connect(`${process.env.mongoDB}`)
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log("err is connection  :-", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`sever is running on ${PORT}`);
});
