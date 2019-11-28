import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RayalaseemaComponent } from "./rayalaseema/rayalaseema.component";
import { TelanganaComponent } from "./telangana/telangana.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { DistrictDetailsComponent } from "./district-details/district-details.component";

const myRoutes: Routes = [
  { path: "", redirectTo: "rayalaseema", pathMatch: "full" },
  { path: "rayalaseema", component: RayalaseemaComponent, pathMatch: "full" },
  { path: "rayalaseema/:district", component: DistrictDetailsComponent },
  { path: "telangana", component: TelanganaComponent, pathMatch: "full" },
  { path: "telangana/:district", component: DistrictDetailsComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(myRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
