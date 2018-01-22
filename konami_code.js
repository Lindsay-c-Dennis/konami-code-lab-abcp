const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
keys = [];

document.addEventListener("keydown" keysPressed(e) {
  keys.push(e.which);
}
if (keys === code) {
  alert("Hooray!");
}
  
  
}