function checkAvailability(){
  var availableText = document.querySelector(".available")
  var inputList = document.getElementsByClassName("vehicle-input")
  availableText.textContent = "";
  if(inputList[0].value != '' && inputList[1].value != '' && inputList[2].value != ''){
    availableText.textContent = "Trabajamos tu vehiculo, pedi un turno"
    submitAvailableForm.textContent = "Pedir turno";
    submitAvailableForm.addEventListener("click", contact);
    submitAvailableForm.removeEventListener("click", preventDefault);
  }
}

var submitAvailableForm = document.querySelector("#submitAvailableForm")
submitAvailableForm.addEventListener("click", preventDefault);

function preventDefault(event){
  event.preventDefault();
  checkAvailability();
}

function contact(event){
  event.preventDefault();
  document.getElementById("location").scrollIntoView({behavior: 'smooth'});
}