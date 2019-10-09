import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"]
})
export class ParentComponent implements OnInit {
  constructor() {}
  messageFromChild;
  objFromChild;
  arrayChild;
  ngOnInit() {}

  receiveDataFromChild(info) {
    this.messageFromChild = info;
  }

  receiveObjFromChild(obj) {
    console.log(obj);
    this.objFromChild = obj;
  }

  receiveArrayFromChild(arrysObj) {
    console.log(arrysObj);
    this.arrayChild = arrysObj;
  }

  convertObjArray(obj) {
    return Object.keys(obj);
  }
}
