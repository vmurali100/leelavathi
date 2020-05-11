import { Component } from "@angular/core";
import { NgForm, FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "app2-forms";
  userForm = new FormGroup({
    fName: new FormControl(),
    lName: new FormControl(),
  });
  user = {
    fName: "",
    lName: "",
  };
  getUser() {
    console.log(this.userForm.value);
    this.user = this.userForm.value;
  }
}
