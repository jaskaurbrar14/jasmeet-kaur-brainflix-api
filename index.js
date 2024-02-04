const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());
const videoRoutes = require("./routes/videos.js");
const videoUploadRoute = require("./routes/videoUpload.js");

app.use("/videos", videoRoutes);
// app.use("/video-upload-page", videoUploadRoute);

// const PORT = process.env.PORT || 8082;
const CLIENT_URL = process.env.CLIENT_URL;

app.listen(8082, () => {
  // console.log(`listening on PORT ${PORT}`);
  console.log(`listening on PORT `);
});

// app.use("/videos", express.static("./public"));
