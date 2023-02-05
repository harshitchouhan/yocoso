import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgSelectModule } from "@ng-select/ng-select";

import { SharedModule } from "./../../shared/shared.module";
import { TestsComponent } from "./tests/tests.component";
import { TestComponent } from "./tests/test/test.component";

import { TestsRoutingModule } from "./tests-routing.module";
import { QuestionComponent } from "../questions/question/question.component";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { NgxDropzoneModule } from "ngx-dropzone";

@NgModule({
  declarations: [TestsComponent, TestComponent, QuestionComponent],
  imports: [CommonModule, NgSelectModule, CKEditorModule, NgxDropzoneModule, SharedModule, TestsRoutingModule],
  exports: [],
})
export class TestsModule {}
