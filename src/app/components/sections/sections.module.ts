import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgSelectModule } from "@ng-select/ng-select";

import { SharedModule } from "./../../shared/shared.module";

import { SectionsListComponent } from "../../components/sections/sections-list/sections-list.component";
import { SectionsRoutingModule } from "../../components/sections/sections-routing.module";
import { SectionComponent } from "./section/section.component";

@NgModule({
  declarations: [SectionsListComponent, SectionComponent],
  imports: [CommonModule, NgSelectModule, SharedModule, SectionsRoutingModule],
  exports: [],
})
export class SectionsModule {}
