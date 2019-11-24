import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { RayalaseemaComponent } from "./rayalaseema/rayalaseema.component";
import { AndhraComponent } from "./andhra/andhra.component";
import { TelanganaComponent } from "./telangana/telangana.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RayalaseemaComponent,
    AndhraComponent,
    TelanganaComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
