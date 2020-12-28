const videoArray = [
  "assets/production ID_5211957.mp4",
  "assets/production ID_5211958.mp4",
  "assets/production ID_5211959 (1).mp4",
  "assets/production ID_5211960.mp4",
  "assets/production ID_5211962.mp4",
  "assets/production ID_5211963.mp4",
  "assets/production ID_5211964.mp4",
  "assets/production ID_5211965.mp4",
  "assets/production ID_5211966.mp4",
  "assets/production ID_5211967.mp4",
  "assets/production ID_5211968.mp4",
  "assets/production ID_5211969.mp4",
  "assets/production ID_5211970.mp4",
  "assets/production ID_5211971.mp4",
  "assets/production ID_5211972.mp4",
  "assets/production ID_5211973.mp4",
  "assets/production ID_5212084.mp4",
  "assets/production ID_5212086.mp4",
  "assets/production ID_5212087.mp4"
];


const btn = document.getElementById("click");
const videoSrc = document.querySelector(".img-fluid > source");
const video = document.querySelector("video");

window.onload = () => generateRandomVideo(videoArray);

btn.onclick = () => {
  generateRandomVideo(videoArray);
};

const generateRandomVideo = array => {
  let randomVideo = Math.floor(Math.random() * array.length);
  videoSrc.setAttribute('src', array[randomVideo]);
  video.load();
};