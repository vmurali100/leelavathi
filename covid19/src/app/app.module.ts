import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardWidgetsComponent } from './dashboard-widgets/dashboard-widgets.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ProjectsComponent } from './projects/projects.component';
import { NavComponent } from './nav/nav.component';
import { HeaderNavComponent } from './header-nav/header-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardWidgetsComponent,
    MainContentComponent,
    ProjectsComponent,
    NavComponent,
    HeaderNavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
