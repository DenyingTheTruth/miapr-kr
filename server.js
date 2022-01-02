const { uploadHandler } = require('./controllers/uploadHandler');
const { linksHandler } = require('./controllers/linksHandler');

const express = require("express");
const multer  = require("multer");

const app = express();
const jsonParser = express.json();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.use(express.static(__dirname));

app.post("/recognizer/uploads", upload.single('image'), uploadHandler);

app.post("/recognizer/links", jsonParser, linksHandler);

app.listen(4000, () => {
  console.log('Server start on localhost:4000');
});
