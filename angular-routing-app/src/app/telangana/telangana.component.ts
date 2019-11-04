import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-telangana",
  templateUrl: "./telangana.component.html",
  styleUrls: ["./telangana.component.css"]
})
export class TelanganaComponent implements OnInit {
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.getDistricts("telangana").subscribe(response => {
      console.log(response);
    });
  }
}
