import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesDetailsRoutingModule } from './routes-details-routing.module';
import { RoutesDetailsComponent } from './routes-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RoutesDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RoutesDetailsRoutingModule
  ]
})
export class RoutesDetailsModule { }
