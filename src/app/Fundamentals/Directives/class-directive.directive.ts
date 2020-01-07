import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '.myClassDirective'
})
export class ClassDirectiveDirective {

  constructor(Elements: ElementRef) {
    Elements.nativeElement.innerText = "2) Class Directive.";
  }

}
