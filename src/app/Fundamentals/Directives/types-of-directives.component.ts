import { Component } from '@angular/core';

@Component({
  selector: 'my-types-of-directives',
  template: `
    <p>1) Components are directives that have a template.</p>
    <p>2) Structural directives change the DOM layout by adding and removing DOM elements. Structural directives have a * sign before the directive. For example, <strong>*ngIf</strong> and <strong>*ngFor</strong>.</p>
    <p>3) Attribute directives change the appearance or behavior of an element. You can create your own directives.</p>
    <h4><strong>Types of Custom Directives</strong> - check the directive selectors</h4>
    <p myCustomDirective id="customAttributeDirective"></p>
    <p class="myClassDirective" id="customClassDirective"></p>
    <myElementNameDirective></myElementNameDirective>
  `,
  styles: []
})
export class TypesOfDirectivesComponent {

}
