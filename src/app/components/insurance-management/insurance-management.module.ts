import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InsuranceManagementRoutingModule } from "./insurance-management-routing.module";
import { InsuranceManagementComponent } from "./insurance-management.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [InsuranceManagementComponent],
  imports: [CommonModule, SharedModule, InsuranceManagementRoutingModule],
})
export class InsuranceManagementModule {}
