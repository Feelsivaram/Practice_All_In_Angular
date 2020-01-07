import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'myElementNameDirective'
})
export class ElementNameDirectiveDirective {

  constructor(Elements: ElementRef) {
    Elements.nativeElement.innerText = "3) Element name directive."
  }

}
