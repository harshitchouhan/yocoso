import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerManagementRoutingModule } from './customer-management-routing.module';
import { CustomerManagementComponent } from './customer-management.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    CustomerManagementComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CustomerManagementRoutingModule
  ]
})
export class CustomerManagementModule { }
