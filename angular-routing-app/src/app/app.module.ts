import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { RayalaseemaComponent } from "./rayalaseema/rayalaseema.component";
import { TelanganaComponent } from "./telangana/telangana.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AndhraModule } from "./andhra/andhra-module";
import { DistrictDetailsComponent } from './district-details/district-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RayalaseemaComponent,
    TelanganaComponent,
    PageNotFoundComponent,
    DistrictDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, AndhraModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
