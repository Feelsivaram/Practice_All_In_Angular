import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[myCustomDirective]'
})
export class CustomDirectiveDirective {

  constructor(Element: ElementRef) {
    Element.nativeElement.innerText = "1) Attribute directive. -- ( By default )"
  }

}
