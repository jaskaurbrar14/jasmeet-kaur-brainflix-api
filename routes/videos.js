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
  videoData = videosData.map((video) => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
    };
  });
  res.status(200).json(videoData);
});

router.get("/:videoid", (req, res) => {
  const videosData = fetchVideos();
  videoId = req.params.videoid;
  filteredVideo = videosData.filter((video) => video.id === videoId);
  const [objFilterVideo] = filteredVideo;
  res.status(200).json(objFilterVideo);
});

router.post("/", (req, res) => {
  const videoObj = req.body;
  const newVideo = {
    id: uuidv4(),
    title: videoObj.title,
    channel: "Scotty Cranmer",
    image: videoObj.image,
    description: videoObj.description,
    views: "3,092,284",
    likes: "75,985",
    duration: "4:20",
    video: "https://project-2-api.herokuapp.com/stream",
    timestamp: Date.now(),
    comments: [],
  };

  const videosData = fetchVideos();
  videosData.push(newVideo);
  fs.writeFileSync(VIDEO_PATH, JSON.stringify(videosData));
  res.status(201).json(newVideo);
});
module.exports = router;
