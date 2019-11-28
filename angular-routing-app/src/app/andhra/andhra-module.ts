import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AndhraComponent } from "./andhra.component";
import { AndhraRouterModule } from "./andhra-routing.module";

@NgModule({
  declarations: [AndhraComponent],
  imports: [BrowserModule, AndhraRouterModule],
  exports: [AndhraRouterModule]
})
export class AndhraModule {}
