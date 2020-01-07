import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildRoutingDetailsComponent } from './child-routing-details.component';

const route: Routes = [
  { path: 'ChildRoute', component: ChildRoutingDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
  declarations: []
})

export class ChildRoutingModule { }

export const childRouteComponents = [
  ChildRoutingDetailsComponent
]
