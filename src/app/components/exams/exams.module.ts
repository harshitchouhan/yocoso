import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "./../../shared/shared.module";
import { ExamComponent } from "./exam/exam.component";
import { ExamsListComponent } from "./exams-list/exams-list.component";
import { ExamsRoutingModule } from "./exams-routing.module";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
  declarations: [ExamsListComponent, ExamComponent],
  imports: [CommonModule, CKEditorModule, NgSelectModule, SharedModule, ExamsRoutingModule],
  exports: [],
})
export class ExamsModule {}
