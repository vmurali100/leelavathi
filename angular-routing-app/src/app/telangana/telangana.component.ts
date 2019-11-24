import { Component, OnInit } from "@angular/core";
import { CommonService } from "../common.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-telangana",
  templateUrl: "./telangana.component.html",
  styleUrls: ["./telangana.component.css"]
})
export class TelanganaComponent implements OnInit {
  districts: any;
  constructor(
    private commonService: CommonService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.districts = this.commonService.getDistricts("Telangana");
    console.log(this.districts);
  }
}
