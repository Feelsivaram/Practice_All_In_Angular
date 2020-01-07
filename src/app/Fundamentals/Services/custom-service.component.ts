import { Component, OnInit } from '@angular/core';
import { CustomServiceService, CustomServiceClass } from './custom-service.service';

@Component({
  selector: 'my-custom-service',
  template: `
    <h3>
      Custom Service
    </h3>
    <p></p>
    <p>We might come across a situation where we need some code to be used everywhere on the page. It can be for data connection that needs to be shared across components, etc. Services help us achieve that. With services, we can access methods and properties across other components in the entire project.</p>
    <p>Note : Service can re-use the code/logic for entire application.</p>
    <p></p>
    <p><strong>{{ myServiceProperty }}</strong></p>
    <p><strong>{{ myServiceFunction }}</strong></p>
    <p><strong>{{ myServiceClass }}</strong></p>
  `,
  styles: []
})
export class CustomServiceComponent implements OnInit {

  myServiceProperty: string = this.sevice.serviceProperty;
  myServiceFunction: string;
  myServiceClass: string = this.seviceClass.ServiceClass;

  constructor(private sevice: CustomServiceService, private seviceClass: CustomServiceClass) { }

  ngOnInit() {
    this.myServiceFunction = this.sevice.serviceFunction();
  }

}
