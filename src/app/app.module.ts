import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// imports
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// providers
import { CustomServiceService, CustomServiceClass } from './Fundamentals/Services/custom-service.service';
import { HttpServiceService, HttpUrls } from './Fundamentals/Services/http-service.service';

// declarations
import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';

@NgModule({
  declarations: [
    routingComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CustomServiceService,
    CustomServiceClass,
    HttpServiceService,
    HttpUrls
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
