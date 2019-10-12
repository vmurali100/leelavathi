import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-new-child",
  templateUrl: "./new-child.component.html",
  styleUrls: ["./new-child.component.css"]
})
export class NewChildComponent implements OnInit {
  msgFromChild;
  constructor() {}
  @Output() sendData = new EventEmitter();
  @Output() sendObj = new EventEmitter();

  ngOnInit() {}

  sendToParent(userForm) {
    console.log(userForm.value);
    this.msgFromChild = userForm.value.fName;
    this.sendData.emit(this.msgFromChild);
    this.sendObj.emit(userForm.value);
  }
}
