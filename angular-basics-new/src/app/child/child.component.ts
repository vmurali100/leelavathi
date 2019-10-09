import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  message = "Message from Child";
  objChild = {
    fname: "Murali",
    lname: "Krrishna"
  };

  arrayChild = [
    {
      fname: "Murali",
      lname: "Krrishna"
    },
    {
      fname: "Leela",
      lname: "Krrishna"
    },
    {
      fname: "Gaye",
      lname: "Krrishna"
    }
  ];
  constructor() {}
  @Output() sendData = new EventEmitter();

  @Output() sendObj = new EventEmitter();

  @Output() sendArray = new EventEmitter();

  ngOnInit() {}
  sendDataToParent() {
    this.sendData.emit(this.message);
  }

  sendObjToParent() {
    this.sendObj.emit(this.objChild);
  }

  sendArrayToParent() {
    this.sendArray.emit(this.arrayChild);
  }
}
