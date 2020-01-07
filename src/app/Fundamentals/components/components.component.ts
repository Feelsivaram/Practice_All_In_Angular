import { Component } from '@angular/core';

@Component({
  selector: 'my-components',
  template: `
    <p>Components are like the basic building block in an Angular application. Components are defined using the @component decorator. A component has a selector , template , style and other properties, using which it specifies the metadata required to process the component.</p>
    <h4><b>Type of Components</b> - check the component selectors</h4>
    <p class="my-class-component"></p>
    <p my-attribute-component></p>
    <my-tag-component></my-tag-component>
  `,
  styles: []
})
export class ComponentsComponent {

}
