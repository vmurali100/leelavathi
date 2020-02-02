var users = [];
var allCheckBoxes = document.getElementsByName("subject");
var allRadioBtns = document.getElementsByName("gender");

function captureUser() {
  var user = {
    fname: "",
    lname: "",
    email: "",
    gender: "",
    subjects: []
  };
  for (a in user) {
    if (a !== "gender" && a !== "subjects") {
      user[a] = document.getElementById(a).value;
    }
  }
  var allRadioBtns = document.getElementsByName("gender");

  for (i = 0; i < allRadioBtns.length; i++) {
    if (allRadioBtns[i].checked) {
      user.gender = allRadioBtns[i].value;
    }
  }

  var allCheckBoxes = document.getElementsByName("subject");
  for (i = 0; i < allCheckBoxes.length; i++) {
    if (allCheckBoxes[i].checked) {
      user.subjects.push(allCheckBoxes[i].value);
    }
  }
  return user;
}
function getData() {
  //   Type 1:
  //   user.fname = document.getElementById("fname").value;
  //   user.lname = document.getElementById("lname").value;
  //   user.email = document.getElementById("email").value;

  //   Type 2:
  var user = captureUser();
  users.push(user);
  displayUsers(users);
}

function displayUsers(users) {
  document.getElementById("myTable").innerHTML = "";

  for (i = 0; i < users.length; i++) {
    var myTr = document.createElement("tr");
    for (a in users[i]) {
      var myTd = document.createElement("td");
      myTd.innerHTML = users[i][a];
      myTr.appendChild(myTd);
    }

    var editTd = document.createElement("td");
    var deleteTd = document.createElement("td");

    var editBtn = document.createElement("button");
    editBtn.innerHTML = "Edit";
    editBtn.setAttribute("class", "btn btn-warning");
    editBtn.setAttribute("onclick", "editUser(" + i + ")");
    editTd.appendChild(editBtn);
    myTr.appendChild(editTd);
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.setAttribute("class", "btn btn-danger");
    deleteBtn.setAttribute("onclick", "deleteUser(" + i + ")");
    deleteTd.appendChild(deleteBtn);
    myTr.appendChild(deleteTd);

    document.getElementById("myTable").appendChild(myTr);
  }
  clearForm(users[0]);
}

function clearForm(user) {
  for (a in user) {
    if (a !== "gender" && a !== "subjects") {
      document.getElementById(a).value = "";
    }
  }

  for (i = 0; i < allRadioBtns.length; i++) {
    allRadioBtns[i].checked = false;
  }

  for (i = 0; i < allCheckBoxes.length; i++) {
    allCheckBoxes[i].checked = false;
  }
}

function editUser(index) {
  gIndex = index;
  // document.getElementById("fname").value = users[i].fname;
  // document.getElementById("lname").value = users[i].lname;
  // document.getElementById("email").value = users[i].email;
  for (a in users[index]) {
    if (a !== "gender" && a !== "subjects") {
      document.getElementById(a).value = users[index][a];
    } else if (a == "gender") {
      for (i = 0; i < allRadioBtns.length; i++) {
        if (allRadioBtns[i].value == users[index].gender) {
          allRadioBtns[i].checked = true;
        }
      }
    } else if (a == "subjects") {
      for (i = 0; i < allCheckBoxes.length; i++) {
        for (j = 0; j < users[index].subjects.length; j++) {
          if (allCheckBoxes[i].value == users[index].subjects[j]) {
            allCheckBoxes[i].checked = true;
          }
        }
      }
    }
  }
}

function deleteUser(i) {
  users.splice(i, 1);
  displayUsers(users);
}

function updateUser() {
  var user = captureUser();
  users[gIndex] = user;
  displayUsers(users);
}
