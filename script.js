const lamp = document.getElementById("lamp");
const button = document.getElementsByTagName("button")[0];
const body = document.body;
const hbd = document.getElementById("animationHBD");
const anyaw = document.getElementById("anyaw");
const lope = document.getElementById("lope");
const sound = document.getElementsByTagName("iframe")[0];

lamp.addEventListener("click", function () {
  lamp.removeChild(button);
});
lamp.addEventListener("click", function () {
  body.classList.replace("mati", "nyala");
});
lamp.addEventListener("click", function () {
  hbd.classList.add("text");
});
lamp.addEventListener("click", function () {
  anyaw.classList.add("text-anyaw");
});
lamp.addEventListener("click", function () {
  lope.classList.add("lope");
});
lamp.addEventListener("click", function () {
  sound.setAttribute("src", "HBD.mp3");
});
