import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-new-parent",
  templateUrl: "./new-parent.component.html",
  styleUrls: ["./new-parent.component.css"]
})
export class NewParentComponent implements OnInit {
  msgChild: any;
  objFromChild: any;
  constructor() {}

  ngOnInit() {}
  recDataFromChild(msg) {
    this.msgChild = msg;
  }
  recObjFromChild(obj) {
    this.objFromChild = obj;
  }

  convertObjToAry(obj) {
    return Object.keys(obj);
  }
}
