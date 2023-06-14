console.log("Script loaded");
// Function for toggling nav menu using hamburger icon
function toggleNav() {
  var x = document.getElementById("nav-links");
  if (x.style.display === "flex" || x.style.display === "block") {
    x.style.display = "none";
    console.log("Nav menu hidden");
  } else {
    x.style.display = "flex";
    console.log("Nav menu shown");
  }
}
