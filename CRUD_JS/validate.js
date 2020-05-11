function validateForm() {
  var person = captureValues(); //Values capturing
  var isError = false; // Eror value declare
  //Checking any field is empty
  for (a in person) {
    if (person[a] == "") {
      isError = true;
    }
  }
  if (isError) {
    document.getElementById("submit").setAttribute("disabled", true);
  } else {
    document.getElementById("submit").removeAttribute("disabled");
  }
}
