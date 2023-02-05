import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersManagementRoutingModule } from './orders-management-routing.module';
import { OrdersManagementComponent } from './orders-management.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    OrdersManagementComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    OrdersManagementRoutingModule
  ]
})
export class OrdersManagementModule { }
