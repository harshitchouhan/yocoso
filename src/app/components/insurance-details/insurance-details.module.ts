import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InsuranceDetailsRoutingModule } from './insurance-details-routing.module';
import { InsuranceDetailsComponent } from './insurance-details.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    InsuranceDetailsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InsuranceDetailsRoutingModule
  ]
})
export class InsuranceDetailsModule { }
