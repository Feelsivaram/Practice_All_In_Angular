import { Component } from '@angular/core';

@Component({
  selector: 'my-types-of-directives',
  template: `
    <p>1) Components are directives that have a template.</p>
    <p>2) Structural directives change the DOM layout by adding and removing DOM elements. Structural directives have a * sign before the directive. For example, <strong>*ngIf</strong> and <strong>*ngFor</strong>.</p>
    <p>3) Attribute directives change the appearance or behavior of an element. You can create your own directives.</p>
    <h4><strong>Types of Custom Directives we can create</strong> - check the directive selectors</h4>
    <p myCustomDirective id="customAttributeDirective"></p>
    <p class="myClassDirective" id="customClassDirective"></p>
    <myElementNameDirective></myElementNameDirective>
    <p></p>
    <br>
    <div class="panel panel-default col-md-6">
      <div class="panel-heading">
        <h4 class="panel-title text-center">Attribute Directive</h4>
      </div>
      <div class="panel-collapse collapse in">
        <div class="panel-body">
          <my-attribute-directive></my-attribute-directive>
        </div>
      </div>
    </div> 
    
    <div class="panel panel-default col-md-6">
      <div class="panel-heading">
        <h4 class="panel-title text-center">Stuctural Directive</h4>
      </div>
      <div class="panel-collapse collapse in">
        <div class="panel-body">
          <my-structural-directive></my-structural-directive>
        </div>
      </div>
    </div> 
  `,
  styles: []
})
export class TypesOfDirectivesComponent {
  togglePanel(collapsePanel) {
    var collapseBody = document.getElementsByClassName('collapse');
    var i: number = 0;
    while (i < collapseBody.length) {
      collapseBody[i].classList.remove("in");
      i++;
    }
    document.getElementById('collapse' + collapsePanel).classList.add('in');
  }
}
