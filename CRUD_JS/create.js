var users = JSON.parse(localStorage.getItem("users"));
if (users) {
  displayUsers(users);
} else {
  users = [];
}
function getValues() {
  //   person.email = document.getElementById("email").value;
  //   person.password = document.getElementById("password").value;

  //   person["email"] = document.getElementById("email").value;
  //   person["password"] = document.getElementById("password").value;

  person = captureValues();
  users.push(person);
  localStorage.setItem("users", JSON.stringify(users));
  clearForm(person);
  displayUsers(users);
}

function displayUsers(users) {
  console.log(users);
  document.getElementById("myTable").innerHTML = "";

  users.map(function(obj, i) {
    console.log(obj);
    var myTr = document.createElement("tr");
    for (a in obj) {
      var myTd = document.createElement("td");
      myTd.innerHTML = obj[a];
      myTr.appendChild(myTd);
    }
    var editTd = document.createElement("td");
    var deleteTd = document.createElement("td");

    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("class", "btn btn-warning");
    editBtn.setAttribute("onclick", "editUser(" + i + ")");
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("class", "btn btn-danger");
    deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")");
    editTd.appendChild(editBtn);
    deleteTd.appendChild(deleteBtn);
    myTr.appendChild(editTd);
    myTr.appendChild(deleteTd);
    document.getElementById("myTable").appendChild(myTr);
  });
}

function captureValues() {
  var person = {
    email: "",
    password: ""
  };
  for (a in person) {
    person[a] = document.getElementById(a).value;
  }

  return person;
}
