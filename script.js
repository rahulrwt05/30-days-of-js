const a = document.querySelector("#main");
const b = document.querySelector(".cursor");
a.addEventListener("mousemove", function (e) {
  b.style.left = e.x + "px";
  b.style.top = e.y + "px";
});
