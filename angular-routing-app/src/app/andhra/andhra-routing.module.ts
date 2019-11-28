import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AndhraComponent } from "./andhra.component";
import { DistrictDetailsComponent } from "../district-details/district-details.component";

const routes: Routes = [
  {
    path: "andhra",
    children: [
      {
        path: "",
        component: AndhraComponent
      },
      {
        path: ":dist",
        component: DistrictDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AndhraRouterModule {}
