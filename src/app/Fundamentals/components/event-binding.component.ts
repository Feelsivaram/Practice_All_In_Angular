import { Component } from '@angular/core';

@Component({
  selector: 'my-event-binding',
  template: `
    <pre>When a user interacts with an application in the form of a keyboard movement, a mouse click, or a mouseover, it generates an event.</pre>
    
    <h5><strong>Examples</strong></h5>
    <button class="btn btn-success" (click)="eventBinding()">Click for event binding</button>
    <p></p>
    <div>{{ getResponse }}</div>
  `,
  styles: []
})
export class EventBindingComponent {

  getResponse: string = "";

  eventBinding() {
    this.getResponse = "Button click is an example of EVENT BINDING."
  }

}
