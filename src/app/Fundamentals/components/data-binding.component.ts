import { Component } from '@angular/core';

@Component({
  selector: 'my-data-binding',
  template: `
    <pre>Note: If you want to use <strong>"ngModel"</strong> in the forms you need to declare <strong>"FormsModule"</strong> in <strong>"app.module.ts"</strong> file as <strong>"imports"</strong> <br>
      Binding Effect Here : {{ binding }}
    </pre>
    <div class="form-group">
      <input type="text" class="form-control" name="bind" [(ngModel)]="binding">
    </div>
    
    <h5><strong>Examples</strong></h5>
    <div class="panel-group" id="accordion">
      <div class="panel panel-primary">
        <div class="panel-heading" (click)="togglePanel(1)">
          <h4 class="panel-title">For Loop</h4>
        </div>
        <div id="collapseDataBinding1" class="panel-collapse collapse collapseDataBinding">
          <div class="panel-body">
            <my-forloop></my-forloop>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: ['.panel-heading {cursor: pointer;}']
})
export class DataBindingComponent {

  binding: string = "Data binding from Component with the help of curlyBrackets \"{{ }}\"."


  // Accordian code
  togglePanel(collapsePanel) {
    var collapseBody = document.getElementsByClassName('collapseDataBinding');
    var i: number = 0;
    while (i < collapseBody.length) {
      collapseBody[i].classList.remove("in");
      i++;
    }
    document.getElementById('collapseDataBinding' + collapsePanel).classList.add('in');
  }

}
