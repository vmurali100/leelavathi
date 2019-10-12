import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.css"]
})
export class UserInfoComponent implements OnInit {
  msgFromUser;
  objFromUser;
  arrayFromUser = [];
  constructor() {}

  ngOnInit() {}

  getValues(userDetails) {
    console.log(userDetails.value);
    this.msgFromUser = userDetails.value.fname;
    this.objFromUser = userDetails.value;
    this.arrayFromUser.push(userDetails.value);
  }
}
