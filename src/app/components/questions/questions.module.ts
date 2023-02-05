import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgSelectModule } from "@ng-select/ng-select";

import { SharedModule } from "./../../shared/shared.module";
import { QuestionsRoutingModule } from "./questions-routing.module";
import { QuestionsComponent } from "./questions.component";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";

@NgModule({
  declarations: [QuestionsComponent],
  imports: [CommonModule, NgSelectModule, CKEditorModule, SharedModule, QuestionsRoutingModule],
  exports: [],
})
export class QuestionsModule {}
