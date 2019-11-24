import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(private _http: HttpClient) {}

  getDistricts(area) {
    // return this._http.get("http://localhost:3000/" + area);
    let districts;
    state.map(function(obj) {
      if (area == obj.areaName) {
        districts = obj.districts;
      }
    });
    return districts;
  }
}

let state = [
  {
    areaName: "Andhra",
    districts: ["East Godavari", "West Godavari", "Krishna"]
  },
  {
    areaName: "Telangana",
    districts: ["Hyderabad", "Kammam", "Hyderabad"]
  },
  {
    areaName: "Rayalaseema",
    districts: ["Kadapa", "Kurnool", "Anantpoor", "Chittoor"]
  }
];
