import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServiceManagementComponent } from './service-management/service-management.component';
import { ServiceTypesComponent } from './service-types/service-types.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ServiceManagementComponent,
    ServiceTypesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
