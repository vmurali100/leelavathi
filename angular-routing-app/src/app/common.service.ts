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

  getDestrictDetails(distName) {
    let distInfo = {};
    state.map(dist => {
      // dist.districts.map(obj => {
      //   console.log(obj);
      //   if (obj.districtName == distName) {
      //     distInfo = obj;
      //   }
      // });
    });
    return distInfo;
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
    districts: [
      {
        districtName: "Chittoor",
        image: "https://www.holidify.com/images/bgImages/CHITTOOR.jpg"
      },
      {
        districtName: "Kadapa",
        image: "https://i.ytimg.com/vi/4XfLdgJ_b54/maxresdefault.jpg"
      },
      {
        districtName: "Anantapoor",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/6/67/Anatapur_Railway_station_board.jpg"
      },
      {
        districtName: "Kurnool",
        image:
          "https://cdn.s3waas.gov.in/s37f24d240521d99071c93af3917215ef7/uploads/2018/02/2018022887-1024x924.jpg"
      }
    ]
  }
];
