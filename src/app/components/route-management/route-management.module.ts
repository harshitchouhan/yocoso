import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteManagementRoutingModule } from './route-management-routing.module';
import { RouteManagementComponent } from './route-management.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    RouteManagementComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouteManagementRoutingModule
  ]
})
export class RouteManagementModule { }
