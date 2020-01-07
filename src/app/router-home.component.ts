import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-router-home',
  template: `
    <div class="panel-group" id="accordion">
      <div class="panel panel-default">
        <div class="panel-heading" (click)="togglePanel(1)">
          <h4 class="panel-title">Two Way Data Binding / Data Binding</h4>
        </div>
        <div id="collapse1" class="panel-collapse collapse">
          <div class="panel-body">
            <my-data-binding></my-data-binding>
          </div>
        </div>
      </div>
      <div class="panel panel-default">
        <div class="panel-heading" routerLink="Components">
          <h4 class="panel-title">Components</h4>
        </div>
        <!-- <div id="collapse2" class="panel-collapse collapse">
          <div class="panel-body">
            <my-components></my-components>
          </div>
        </div> -->
      </div>
      <div class="panel panel-default">
        <div class="panel-heading" routerLink="Event-Binding">
          <h4 class="panel-title">Event Binding</h4>
        </div>
        <!-- <div id="collapse3" class="panel-collapse collapse">
          <div class="panel-body">
            <my-event-binding></my-event-binding>
          </div>
        </div> -->
      </div>
      <div class="panel panel-default">
        <div class="panel-heading" routerLink="Life-Cycle-Hooks">
          <h4 class="panel-title">Life Cycle Hooks</h4>
        </div>
        <!-- <div id="collapse4" class="panel-collapse collapse">
          <div class="panel-body">
            <my-life-cycle-hooks></my-life-cycle-hooks>
          </div>
        </div> -->
      </div>
      <div class="panel panel-default">
        <div class="panel-heading" routerLink="Directives">
          <h4 class="panel-title">Directives</h4>
        </div>
        <!-- <div id="collapse5" class="panel-collapse collapse">
          <div class="panel-body">
            <my-types-of-directives></my-types-of-directives>
          </div>
        </div> -->
      </div>
      <div class="panel panel-default">
        <div class="panel-heading" routerLink="Services">
          <h4 class="panel-title">Services</h4>
        </div>
        <!-- <div id="collapse6" class="panel-collapse collapse">
          <div class="panel-body">
            <my-custom-service></my-custom-service>
          </div>
        </div> -->
      </div>
      <div class="panel panel-default">
        <div class="panel-heading" routerLink="Http-methods">
          <h4 class="panel-title">Http Requests</h4>
        </div>
        <!-- <div id="collapse7" class="panel-collapse collapse">
          <div class="panel-body">
            <my-http-methods></my-http-methods>
          </div>
        </div> -->
      </div>
      <div class="panel panel-default">
        <div class="panel-heading" routerLink="Routing">
          <h4 class="panel-title">Routing</h4>
        </div>
        <!-- <div id="collapse8" class="panel-collapse collapse">
          <div class="panel-body">
            <my-routing-details></my-routing-details>
          </div>
        </div> -->
      </div>
    </div>
  `,
  styles: ['.panel-heading { cursor: pointer; }']
})
export class RouterHomeComponent {

  // togglePanel(collapsePanel) {
  //   var collapseBody = document.getElementsByClassName('collapse');
  //   var i: number = 0;
  //   while (i < collapseBody.length) {
  //     collapseBody[i].classList.remove("in");
  //     i++;
  //   }
  //   document.getElementById('collapse' + collapsePanel).classList.add('in');
  // }

  toggle: boolean = false;

  constructor(private route: Router) { }

  togglePanel(collapsePanel) {
    var collapseBody = document.getElementsByClassName('collapse');
    if (!this.toggle) document.getElementById('collapse' + collapsePanel).classList.add('in');
    else {
      var i = 0;
      while (i < collapseBody.length) {
        collapseBody[i].classList.remove("in");
        i++;
      }
    }
    this.toggle = !this.toggle;

  }

}
