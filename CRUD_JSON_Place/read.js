function displayUsers() {
  document.getElementById("myTable").innerHTML = "";
  users.map(function(resiveData, index) {
    var myTr = document.createElement("tr");
    for (a in resiveData) {
      if (a !== "address" && a !== "company") {
        var myTd = document.createElement("td");
        myTd.innerHTML = resiveData[a];
        myTr.appendChild(myTd);
      }
    }
    var editTd = document.createElement("td");
    var editBtn = document.createElement("button");
    editBtn.setAttribute("class", "btn btn-warning");
    editBtn.innerHTML = "Edit";
    editTd.appendChild(editBtn);
    myTr.appendChild(editTd);

    var delTd = document.createElement("td");
    var delBtn = document.createElement("button");
    delBtn.setAttribute("class", "btn btn-danger");
    delBtn.setAttribute("onclick", "deleteUser(" + index + ")");
    delBtn.innerHTML = "Delete";
    delTd.appendChild(delBtn);
    myTr.appendChild(delTd);

    document.getElementById("myTable").appendChild(myTr);
  });
}

// displayUsers();
