const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
keys = [];

document.addEventListener("keydown" keysPressed(e) {
  keys[e.which] = true;
}
if (keys === code) {
  alert("Hooray!");
}
  
  
}