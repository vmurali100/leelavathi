import { ElementRef, HostListener } from "@angular/core";
import { Directive } from "@angular/core";

@Directive({
  selector: "[appChangeback]",
})
export class ChangebackDirective {
  constructor(private el: ElementRef) {}
  // @HostListener("focus") onFocus() {
  //   this.el.nativeElement.style.backgroundColor = "grey";
  // }

  // @HostListener("mouseenter") onMouseEnter() {
  //   this.el.nativeElement.style.backgroundColor = "grey";
  // }
  // @HostListener("mouseout") onMouseOut() {
  //   this.el.nativeElement.style.backgroundColor = "";
  // }
  @HostListener("input") onInput() {
    console.log(this.el.nativeElement.value);
    var pattern = /^[a-zA-Z]+$/;
    if (!pattern.test(this.el.nativeElement.value)) {
      alert("Please enter a valid String");
      this.el.nativeElement.value = this.el.nativeElement.value.substr(
        0,
        this.el.nativeElement.value.length - 1
      );
    }
  }
}
