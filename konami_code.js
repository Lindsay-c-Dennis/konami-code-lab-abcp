const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
keys = [];

function keysPressed(e) {
  keys[e.which] = true;
}
if (keys === code) {
  alert("Hooray!");
}
  
  
}