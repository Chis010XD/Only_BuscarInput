import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EcommerceAppModule } from './ecommerce-app/ecommerce-app.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EcommerceAppModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
