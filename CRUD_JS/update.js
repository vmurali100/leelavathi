function editUser(i) {
  document.getElementById("update").style.display = "block";
  document.getElementById("submit").style.display = "none";
  index = i;
  for (a in users[i]) {
    document.getElementById(a).value = users[i][a];
  }
}

function clearForm(obj) {
  for (a in obj) {
    document.getElementById(a).value = "";
  }
}

function updateUser() {
  var newPerson = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
  };
  users[index] = newPerson;
  displayUsers(users);
  clearForm(users[index]);
  document.getElementById("update").style.display = "none";
  document.getElementById("submit").style.display = "block";
}
