import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ParentComponent } from "./parent/parent.component";
import { ChildComponent } from "./child/child.component";
import { UserInfoComponent } from "./user-info/user-info.component";
import { UserDetailsComponent } from './user-info/user-details/user-details.component';
import { NewParentComponent } from './childToParent/new-parent/new-parent.component';
import { NewChildComponent } from './childToParent/new-child/new-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    UserInfoComponent,
    UserDetailsComponent,
    NewParentComponent,
    NewChildComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
