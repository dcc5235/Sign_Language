const videoArray = [
  "assets/production ID_5211957.mp4",
  "assets/production ID_5211958.mp4",
  "assets/production ID_5211959 (1).mp4",
  "assets/production ID_5211960.mp4"
];


const btn = document.getElementById("click");
const videoSrc = document.querySelector(".img-fluid > source");
const video = document.querySelector("video");

btn.onclick = function () {
  videoSrc.setAttribute('src', "assets/production ID_5211971.mp4")
  video.load();
};



// when btn is clicked, it targets video
// video src needs to change
// video src pulled and called from an array

