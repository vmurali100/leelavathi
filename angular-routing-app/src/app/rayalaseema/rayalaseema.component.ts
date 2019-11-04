import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";

@Component({
  selector: "app-rayalaseema",
  templateUrl: "./rayalaseema.component.html",
  styleUrls: ["./rayalaseema.component.css"]
})
export class RayalaseemaComponent implements OnInit {
  data: any;
  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.commonService.getDistricts("rayalaseema").subscribe(response => {
      console.log(response);
      this.data = response;
    });
  }
}
