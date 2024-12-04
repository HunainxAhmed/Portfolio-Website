
// FIRST PAGE DIV COLLAPSE ANIMATION
var changing = document.getElementsByClassName("serve-body");
var icon = document.getElementsByClassName("ri-add-circle-line");
var services = document.getElementsByClassName("services");

for (let i = 0; i < changing.length; i++) {
  services[i].addEventListener("click", function () {
    changing[i].classList.toggle("service-body");
    icon[i].classList.toggle("icon-rotate");
  });
}
