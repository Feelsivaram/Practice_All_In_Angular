import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// imports
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// providers
import { CustomServiceService, CustomServiceClass } from './Fundamentals/Services/custom-service.service';
import { HttpServiceService, HttpUrls } from './Fundamentals/Services/http-service.service';
import { DataServiceService } from './Fundamentals/Services/data-service.service';

// declarations
import { AppComponent } from './app.component';
import { RouterHomeComponent } from './router-home.component';

@NgModule({
  declarations: [
    AppComponent,
    RouterHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    CustomServiceService,
    CustomServiceClass,
    HttpServiceService,
    DataServiceService,
    HttpUrls
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
