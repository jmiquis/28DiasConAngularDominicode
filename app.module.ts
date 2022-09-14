import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InterpolationComponent } from './interpolation/interpolation.component';
import { TwoWayDataBinddingComponent } from './two-way-data-bindding/two-way-data-bindding.component';
import { DirectivesComponent } from './directives/directives.component';
import { EventBiddingComponent } from './event-bidding/event-bidding.component';
import { ParentComponent } from './input_output_decorator/parent/parent.component';
import { ChildComponent } from './input_output_decorator/child/child.component';
import { OutputParentComponent } from './output_decorator/output-parent/output-parent.component';
import { OutputChildComponent } from './output_decorator/output-child/output-child.component';

@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    TwoWayDataBinddingComponent,
    DirectivesComponent,
    EventBiddingComponent,
    ParentComponent,
    ChildComponent,
    OutputParentComponent,
    OutputChildComponent
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
