import { Component, OnInit, ViewChild } from "@angular/core";
import { CommonService } from "../common.service";
import { DatePickerComponent } from "gijgo-angular-wrappers";
import * as types from "gijgo";
@Component({
  selector: "app-rayalaseema",
  templateUrl: "./rayalaseema.component.html",
  styleUrls: ["./rayalaseema.component.css"]
})
export class RayalaseemaComponent implements OnInit {
  data: any;
  districts: any;
  @ViewChild("datepicker", null) datepicker: DatePickerComponent;

  configuration: types.DatePickerSettings;

  date = "03/08/2019";
  eventLog: string = "";

  constructor(private commonService: CommonService) {
    this.configuration = {
      value: this.date,
      uiLibrary: "bootstrap4",
      width: 200,
      open: e => {
        this.eventLog += "Open is fired.";
      },
      close: e => {
        this.eventLog += "Close is fired.";
      },
      change: e => {
        this.date = this.datepicker.instance.value().toString();
        this.eventLog += "Change is fired. ";
      }
    };
  }

  ngOnInit() {
    this.districts = this.commonService.getDistricts("Rayalaseema");
  }

  goBackToDistricts() {}
}
