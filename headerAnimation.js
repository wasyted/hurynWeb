window.onscroll = function() {scrollFunction()};
const linksList = document.getElementsByClassName("link");
console.log(linksList)
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").style.paddingTop = "5px";
    document.getElementById("header").style.paddingBottom = "5px";
    document.getElementById("headerContactButton").style.height = '30px';
    for(let i = 0; i < linksList.length; i++){
      linksList[i].style.paddingTop = '3px';
      linksList[i].style.paddingBottom = '3px';
    }
  } else {
    document.getElementById("header").style.paddingTop = "10px";
    document.getElementById("header").style.paddingBottom = "10px";
    document.getElementById("headerContactButton").style.height = '40px';
    linksList[i].style.paddingTop = '10px';
    linksList[i].style.paddingBottom = '10px';
  }
}