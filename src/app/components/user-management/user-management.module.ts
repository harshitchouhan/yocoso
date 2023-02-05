import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { UserManagementRoutingModule } from "./user-management-routing.module";
import { UserManagementComponent } from "./user-management.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [UserManagementComponent],
  imports: [CommonModule, SharedModule, UserManagementRoutingModule],
})
export class UserManagementModule {}
