const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const authRoute = require("./routes/authRoutes");
const librearyRoute = require("./routes/librearyRoutes");
const path = require("path");

const app = express();

//middelware
app.use(express.static("./client/build"));

app.use(express.json());
app.use(fileUpload({ useTempFiles: true }));
app.use(cors());

//routes

app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/user", librearyRoute);

module.exports = app;
