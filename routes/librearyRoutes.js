const routes = require("express").Router();
const librearyControler = require("../controllers/libraryControler");

routes.post("/upload", librearyControler.addPhoto);
routes.post("/bookmark", librearyControler.bookmark);
routes.post("/getAllPhotos", librearyControler.getAllPhotos);

module.exports = routes;
