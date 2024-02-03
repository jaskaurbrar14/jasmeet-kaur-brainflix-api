const express = require("express");
const app = express();
const cors = require("cors");

app.use = cors();

const videoRoutes = require("/routes/videos");
app.use = ("/videos", videoRoutes);

app.post("/", (req, res) => {});

app.listen("PORT", () => {
  console.log("HI");
});
