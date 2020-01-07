import { Component, OnDestroy } from '@angular/core';
import { HttpServiceService, HttpUrls } from './Services/http-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'my-http-methods',
  template: `
    <h3>
      Http request 
    </h3>
    <p>Below are the user details from http <strong>GET</strong> request</p>
    <p *ngFor="let user of users">Username : {{ user.name }}</p>
    <!-- <pre>{{ users | json}}</pre> -->
  `,
  styles: []
})
export class HttpMethodsComponent implements OnDestroy {

  users: any;
  private httpSubscription: Subscription[] = [];

  constructor(private http: HttpServiceService, private url: HttpUrls) { }

  ngOnInit() {
    this.httpSubscription.push(this.http.getUsers(this.url.getUsers).subscribe(
      data => this.users = data,
      err => console.error('Observer got an error: ' + err),
      () => console.log('Observer got a complete notification')
    ));
  }

  ngOnDestroy() {
    // need to destroy the subscription every time
    this.httpSubscription.forEach(x => x.unsubscribe());
  }

}
