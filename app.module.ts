import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InterpolationComponent } from './interpolation/interpolation.component';
import { TwoWayDataBinddingComponent } from './two-way-data-bindding/two-way-data-bindding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventBiddingComponent } from './event-bidding/event-bidding.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    TwoWayDataBinddingComponent,
    DirectivesComponent,
    EventBiddingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
