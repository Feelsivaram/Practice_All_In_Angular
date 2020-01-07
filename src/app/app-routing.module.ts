import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

// Child Route modules
import { ChildRoutingModule, childRouteComponents } from './Fundamentals/Routing/child-routing.module';

// declarations
import { AppComponent } from './app.component';
import { ForloopComponent } from './Fundamentals/components/forloop.component';
import { EventBindingComponent } from './Fundamentals/components/event-binding.component';
import { DataBindingComponent } from './Fundamentals/components/data-binding.component';
import { LifeCycleHooksComponent } from './Fundamentals/life-cycle-hooks/life-cycle-hooks.component';
import { TypesOfDirectivesComponent } from './Fundamentals/Directives/types-of-directives.component';
import { CustomDirectiveDirective } from './Fundamentals/Directives/custom-directive.directive';
import { ClassDirectiveDirective } from './Fundamentals/Directives/class-directive.directive';
import { ElementNameDirectiveDirective } from './Fundamentals/Directives/element-name-directive.directive';
import { CustomServiceComponent } from './Fundamentals/Services/custom-service.component';
import { HttpMethodsComponent } from './Fundamentals/http-methods.component';
import { RoutingDetailsComponent } from './Fundamentals/Routing/routing-details.component';
import { HomeRouteComponent } from './Fundamentals/Routing/home-route.component';
import { PageNotFoundComponent } from './Fundamentals/Routing/page-not-found.component';
import { RouterHomeComponent } from './router-home.component';
import { ChildRoutingDetailsComponent } from './Fundamentals/Routing/child-routing-details.component';
import { ComponentsComponent } from './Fundamentals/components/components.component';
import { ClassComponentComponent } from './Fundamentals/Components/class-component.component';
import { TagComponentComponent } from './Fundamentals/components/tag-component.component';
import { AttributeComponentComponent } from './Fundamentals/components/attribute-component.component';
import { BaseRoutingComponent } from './Fundamentals/base-routing.component';

const route: Routes = [
    { path: '', redirectTo: '/Home', pathMatch: 'full' },
    { path: 'Home', component: BaseRoutingComponent },
    { path: 'Components', component: ComponentsComponent },
    { path: 'Event-Binding', component: EventBindingComponent },
    { path: 'Life-Cycle-Hooks', component: LifeCycleHooksComponent },
    { path: 'Directives', component: TypesOfDirectivesComponent },
    { path: 'Services', component: CustomServiceComponent },
    { path: 'Http-methods', component: HttpMethodsComponent },
    {
        path: 'Routing', component: RoutingDetailsComponent,
        children: [
            { path: 'NestedRoute', component: ChildRoutingDetailsComponent }
        ]
    },
    { path: '**', component: PageNotFoundComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(route),
        ChildRoutingModule
    ],
    exports: [RouterModule],
    declarations: []
})

export class AppRoutingModule { }

export const routingComponents = [
    AppComponent,
    ForloopComponent,
    EventBindingComponent,
    DataBindingComponent,
    LifeCycleHooksComponent,
    TypesOfDirectivesComponent,
    CustomDirectiveDirective,
    ClassDirectiveDirective,
    ElementNameDirectiveDirective,
    CustomServiceComponent,
    HttpMethodsComponent,
    RoutingDetailsComponent,
    RouterHomeComponent,
    HomeRouteComponent,
    PageNotFoundComponent,
    ChildRoutingDetailsComponent,
    childRouteComponents,
    ComponentsComponent,
    ClassComponentComponent,
    TagComponentComponent,
    AttributeComponentComponent,
    BaseRoutingComponent
];