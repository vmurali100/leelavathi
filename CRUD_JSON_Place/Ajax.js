function getData() {
  var getDetails = new XMLHttpRequest();
  getDetails.onreadystatechange = function() {
    if (getDetails.readyState == 4 && getDetails.status == 200) {
      console.log(getDetails.response);
      users = JSON.parse(getDetails.response);
      displayUsers();
    }
  };
  getDetails.open("GET", "https://jsonplaceholder.typicode.com/users");
  getDetails.send();
}

getData();
