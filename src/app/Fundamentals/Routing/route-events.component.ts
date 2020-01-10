import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-route-events',
  template: `
    <p>To enable the route events we need to add <b>{{ '{' }}enableTracing: true{{ '}' }}</b> in routing file for debugging purposes only as below example.</p>
    <p><b>Ex : RouterModule.forRoot(route, {{ '{' }}enableTracing: true {{ '}' }})</b></p>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Route Event</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>NavigationStart</td>
          <td>An event triggered when navigation starts.</td>
        </tr>
        <tr>
          <td>RouteConfigLoadStart</td>
          <td>An event triggered before tde Router lazy loads a route configuration.</td>
        </tr>
        <tr>
          <td>RouteConfigLoadEnd</td>
          <td>An event triggered after a route has been lazy loaded.</td>
        </tr>
        <tr>
          <td>RoutesRecognized</td>
          <td>An event triggered when the Router parses the URL and the routes are recognized.</td>
        </tr>
        <tr>
          <td>GuardsCheckStart</td>
          <td>An event triggered when the Router begins the Guards phase of routing.</td>
        </tr>
        <tr>
          <td>ChildActivationStart</td>
          <td>An event triggered when the Router begins activating a route's children.</td>
        </tr>
        <tr>
          <td>ActivationStart</td>
          <td>An event triggered when the Router begins activating a route.</td>
        </tr>
        <tr>
          <td>GuardsCheckEnd</td>
          <td>An event triggered when the Router finishes the Guards phase of routing successfully.</td>
        </tr>
        <tr>
          <td>ResolveStart</td>
          <td>An event triggered when the Router begins the Resolve phase of routing.</td>
        </tr>
        <tr>
          <td>ResolveEnd</td>
          <td>An event triggered when the Router finishes the Resolve phase of routing successfuly.</td>
        </tr>
        <tr>
          <td>ChildActivationEnd</td>
          <td>An event triggered when the Router finishes activating a route's children.</td>
        </tr>
        <tr>
          <td>ActivationEnd</td>
          <td>An event triggered when the Router finishes activating a route.</td>
        </tr>
        <tr>
          <td>NavigationEnd</td>
          <td>An event triggered when navigation ends successfully.</td>
        </tr>
        <tr>
          <td>NavigationCancel</td>
          <td>An event triggered when navigation is canceled. This can happen when a Route Guard returns false during navigation, or redirects by returning a UrlTree.</td>
        </tr>
        <tr>
          <td>NavigationError</td>
          <td>An event triggered when navigation fails due to an unexpected error.</td>
        </tr>
        <tr>
          <td>Scroll</td>
          <td>An event that represents a scrolling event.</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class RouteEventsComponent {

}
