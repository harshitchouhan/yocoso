import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgSelectModule } from "@ng-select/ng-select";

import { SharedModule } from "./../../shared/shared.module";
import { TypesComponent } from "./types.component";
import { TypeComponent } from "./type/type.component";
import { TypesRoutingModule } from "./types-routing.module";

@NgModule({
  declarations: [TypesComponent, TypeComponent],
  imports: [CommonModule, NgSelectModule, SharedModule, TypesRoutingModule],
  exports: [],
})
export class TypesModule {}
