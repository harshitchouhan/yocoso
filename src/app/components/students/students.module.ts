import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "src/app/shared/shared.module";
import { NgSelectModule } from "@ng-select/ng-select";

import { StudentListComponent } from "./student-list/student-list.component";
import { StudentComponent } from "./student/student.component";
import { StudentRoutingModule } from "./students-routing.module";

@NgModule({
  declarations: [StudentListComponent, StudentComponent],
  imports: [CommonModule, SharedModule, NgSelectModule, StudentRoutingModule],
  exports: [],
})
export class StudentsModule {}
