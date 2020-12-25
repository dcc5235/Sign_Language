const btn = document.getElementById("click");
const video = document.getElementsByTagName("source");

btn.onclick = function () {
  console.log("this works. you clicked the button");
};

// when btn is clicked, it targets video
// video src needs to change
// video src pulled and called from an array
