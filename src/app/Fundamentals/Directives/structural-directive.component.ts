import { Component } from '@angular/core';

@Component({
  selector: 'my-structural-directive',
  template: `
    <p>1) Structural Directives change the DOM layout by adding and removing DOM elements. </p>
    <p>2) Structural Directives change the structure of the view. </p>
    <p>3) The imported Directive symbol provides Angular the @Directive decorator.</p>
    <p>4) It's the asterisk (*) that make it an structural directive name.</p>
    <p>5) Two examples are <b>NgFor</b> and <b>NgIf</b>.</p>
  `,
  styles: []
})
export class StructuralDirectiveComponent {

}
