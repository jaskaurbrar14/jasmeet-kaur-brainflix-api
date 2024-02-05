const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());
const videoRoutes = require("./routes/videos.js");

app.use("/videos", videoRoutes);

// I tried using the PORT variable but it kept giving me the error taht port was in use.
// Just leaving the code snippet below in case if this one of teh requirements. I have hardcoded the values everywhere else for the prompt.
// const PORT = process.env.PORT || 8082;
// const CLIENT_URL = process.env.CLIENT_URL;
// app.listen(PORT, () => {
//   console.log(`listening on PORT ${PORT}`);
// });

app.use("/videos", express.static("./public"));

app.listen(8082, () => {
  console.log("listening on PORT 8082");
});
