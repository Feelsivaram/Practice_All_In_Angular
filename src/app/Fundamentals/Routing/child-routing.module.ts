import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ChildRoutingDetailsComponent } from './child-routing-details.component';

const route: Routes = [
  { path: 'ChildRoute', component: ChildRoutingDetailsComponent }
]

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule, CommonModule, FormsModule],
  declarations: [ChildRoutingDetailsComponent]
})

export class ChildRoutingModule { }