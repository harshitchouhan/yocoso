import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackingUpdatesRoutingModule } from './tracking-updates-routing.module';
import { TrackingUpdatesComponent } from './tracking-updates.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    TrackingUpdatesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TrackingUpdatesRoutingModule
  ]
})
export class TrackingUpdatesModule { }
