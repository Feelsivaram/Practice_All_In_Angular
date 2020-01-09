import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-base-routing',
  template: `
    <h4>
    Angular is a TypeScript-based open-source web application framework led by the Angular Team at Google and by a community of individuals and corporations. Angular is a complete rewrite from the same team that built AngularJS.
    </h4>
  `,
  styles: []
})
export class BaseRoutingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
