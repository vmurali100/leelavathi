import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  message: String = "Hello World ";
  person: Person = {
    fname: "Murali",
    lname: "krishna",
    age: 33
  };
  title = "app1";
}

//Set of rules  for An Object
export interface Person {
  fname: String;
  lname: String;
  age: Number;
}
