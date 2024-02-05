const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());
const videoRoutes = require("./routes/videos.js");

app.use("/videos", videoRoutes);

// const PORT = process.env.PORT || 8082;
const CLIENT_URL = process.env.CLIENT_URL;
app.use("/videos", express.static("./public"));

app.listen(8082, () => {
  // console.log(`listening on PORT ${PORT}`);
  console.log(`listening on PORT `);
});
