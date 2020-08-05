import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PagesComponent } from "./pages.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { HighlightDirective } from "../highlight.directive";
import { ChangebackDirective } from "../changeback.directive";

@NgModule({
  declarations: [PagesComponent, HighlightDirective, ChangebackDirective],
  imports: [CommonModule, PagesRoutingModule],
})
export class PagesModule {}
