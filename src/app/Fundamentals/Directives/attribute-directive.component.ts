import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-attribute-directive',
  template: `
    <p>1) Attribute Directive change the appearance or behavior of an element, component, or another directive.</p>
    <p>2) Attribute Directives are used as attributes of elements. </p>
    <p>3) The imported Directive symbol provides Angular the @Directive decorator.</p>
    <p>4) It's the brackets ( [ ] ) that make it an attribute selector.</p>
    <p>5) Example are <b>NgStyle</b></p>
  `,
  styles: []
})
export class AttributeDirectiveComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
