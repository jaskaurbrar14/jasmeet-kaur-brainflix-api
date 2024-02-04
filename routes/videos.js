const express = require("express");
const Router = require("Router");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const VIDEO_PATH = "./data/videos.json";

const fetchVideos = () => {
  const videosData = fs.readFileSync(VIDEO_PATH);
  const parsedVideos = JSON.parse(videosData);
  return parsedVideos;
};

router.get("/", (req, res) => {
  const videosData = fetchVideos();
  res.status(200).json(videosData);
});

router.get("/:videoid", (req, res) => {
  const videosData = fetchVideos();
  videoId = req.params.videoid;
  filteredVideo = videosData.filter((video) => video.id === videoId);
  res.status(200).json(filteredVideo);
});

router.post("/", (req, res) => {
  const videoObj = req.body;
  const newVideo = {
    id: uuidv4(),
    title: videoObj.title,
    description: videoObj.description,
  };

  const videosData = fetchVideos();
  videosData.push(newVideo);
  fs.writeFileSync(VIDEO_PATH, JSON.stringify(videosData));
  res.status(201).json(newVideo);
});
module.exports = router;
