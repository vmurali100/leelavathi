import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-andhra",
  templateUrl: "./andhra.component.html",
  styleUrls: ["./andhra.component.css"]
})
export class AndhraComponent implements OnInit {
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.getDistricts("andhra").subscribe(response => {
      console.log(response);
    });
  }
}
