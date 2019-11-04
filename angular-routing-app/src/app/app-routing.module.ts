import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RayalaseemaComponent } from "./rayalaseema/rayalaseema.component";
import { AndhraComponent } from "./andhra/andhra.component";
import { TelanganaComponent } from "./telangana/telangana.component";

const myRoutes: Routes = [
  { path: "", component: RayalaseemaComponent, pathMatch: "full" },
  { path: "andhra", component: AndhraComponent, pathMatch: "full" },
  { path: "telangana", component: TelanganaComponent, pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(myRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
