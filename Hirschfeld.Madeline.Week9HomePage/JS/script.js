//Navigation Menu
function menuFunction() {
  var x = document.getElementById("links");
  if (x.style.display === "block") {
    //hide menu if it is not open
    x.style.display = "none";
    // all menu items are unfocused
    const links = document.querySelectorAll("#links a");
    links.forEach((link) => link.setAttribute("tabindex", "-1"));
  } else {
    x.style.display = "block";
    // Show menu items if closed
    const links = document.querySelectorAll("#links a");
    links.forEach((link) => link.setAttribute("tabindex", "0"));
    // Focus on the first menu item
    const firstLink = x.querySelector("a");
    if (firstLink) {
      firstLink.focus();
    }
  }
}
//AUDIO
function togglePlay() {
  var audioPlayer = document.getElementById("audioPlayer");
  if (audioPlayer.paused) {
    audioPlayer.play();
  } else {
    audioPlayer.pause();
  }
}