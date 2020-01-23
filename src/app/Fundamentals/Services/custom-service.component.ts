import { Component, OnInit } from '@angular/core';
import { CustomServiceService, CustomServiceClass } from './custom-service.service';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'my-custom-service',
  template: `
    <h3>
      Custom Service
    </h3>
    <p></p>
    <p>We might come across a situation where we need some code to be used everywhere on the page. It can be for data connection that needs to be shared across components, etc. Services help us achieve that. With services, we can access methods and properties across other components in the entire project.</p>
    <p><b>Note : </b>Service can re-use the code/logic/data for entire application.</p>
    <p></p>
    <p>Data bind by - <strong>{{ myServiceProperty }}</strong></p>
    <p>Data bind by - <strong>{{ myServiceFunction }}</strong></p>
    <p>Data bind by - <strong>{{ myServiceClass }}</strong></p>
    <br>
    <h3>Store Data in service (Setter and Getter methods) and use it as a global data.</h3>
    <p>1) To avoid some multiple http requests in entire application/project for same data.</p>
    <br>
    <p>To see the example of <b>DATA STORE IN SERVICE</b> please click on <b>Http Requests</b> tab and come back</p><br>
    <div *ngIf="UserData" >
      <p>Below data has been bound from service which has stored from the HTTP response data.</p>
      <b><p>Username - {{UserData[0].name}}</p></b>
    </div>
  `,
  styles: []
})
export class CustomServiceComponent implements OnInit {

  myServiceProperty: string = this.sevice.serviceProperty;
  myServiceFunction: string;
  myServiceClass: string = this.seviceClass.ServiceClass;
  UserData: any;

  constructor(private sevice: CustomServiceService, private seviceClass: CustomServiceClass, private userDetailsService: DataServiceService) { }

  ngOnInit() {
    this.myServiceFunction = this.sevice.serviceFunction();
    this.UserData = this.userDetailsService.getUserDetails();
  }

}
