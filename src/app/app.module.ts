import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkoutMainComponent } from '../modules/workout-main-module'

@NgModule({
  declarations: [
    AppComponent,
    WorkoutMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,WorkoutMainComponent]
})
export class AppModule { }
