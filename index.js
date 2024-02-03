const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const { PORT, SERVER_URL } = process.env;
// app.listen("PORT", () => {
//   console.log("HI");
// });
console.log(PORT);
app.use = cors();

const videoRoutes = require("./routes/videos");
app.use = ("/videos", videoRoutes);

app.post("/video-upload-page", (req, res) => {});
