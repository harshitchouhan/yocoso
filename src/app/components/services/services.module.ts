import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServiceManagementComponent } from './service-management/service-management.component';
import { ServiceTypesComponent } from './service-types/service-types.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ServiceTypesDetailsComponent } from '../service-types-details/service-types-details.component';
import { ServiceDetailsComponent } from './service-details/service-details.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
  declarations: [
    ServiceManagementComponent,
    ServiceTypesComponent,
    ServiceTypesDetailsComponent,
    ServiceDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CKEditorModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
