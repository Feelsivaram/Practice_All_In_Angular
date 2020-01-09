import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-routing-details',
  templateUrl: './routing-details.component.html',
  styles: []
})
export class RoutingDetailsComponent {

  ngStyleOptions = {
    'cursor': 'pointer'
  }

  constructor(private route: Router) { }

  navigate(navigation: string) {
    this.route.navigate([navigation]);
  }

}
