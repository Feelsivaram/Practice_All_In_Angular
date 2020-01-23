import { Component } from '@angular/core';

@Component({
  selector: 'my-page-not-found',
  template: `
    <div class="text-center">
      <h1>404</h1>
      <h3>Page not found</h3>
    </div>
  `,
  styles: [`
    .text-center {
      text-align: center;
    }
  `]
})
export class PageNotFoundComponent {

}
