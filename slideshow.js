var index = 1;
var index1 = 2;
function change() {
  document.getElementById("photo0").src = `images/${index}.jpg`;
  document.getElementById("photo1").src = `images/${index+2}.jpg`;
  if (index1 == 5) {
    index = 1;
  } else {
    index++;
    index1++;
  }

  setTimeout(change, 5000);
}
window.onload = change();