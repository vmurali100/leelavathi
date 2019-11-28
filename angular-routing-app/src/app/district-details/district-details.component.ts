import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CommonService } from "../common.service";

@Component({
  selector: "app-district-details",
  templateUrl: "./district-details.component.html",
  styleUrls: ["./district-details.component.css"]
})
export class DistrictDetailsComponent implements OnInit {
  district: any;
  dist: {};
  constructor(
    private route: ActivatedRoute,
    private myRoute: Router,
    private commonService: CommonService
  ) {}

  ngOnInit() {
    console.log(this.route.snapshot.params);
    this.district = this.route.snapshot.params.district;
    this.dist = this.commonService.getDestrictDetails(this.district);
  }

  goBackToDistricts() {
    this.myRoute.navigate(["/"]);
  }
}
