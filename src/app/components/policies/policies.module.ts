import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "./../../shared/shared.module";
import { PoliciesComponent } from "./policies.component";
import { PolicesRoutingModule } from "./policies-routing.module";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";

@NgModule({
  declarations: [PoliciesComponent],
  imports: [CommonModule, CKEditorModule, SharedModule, PolicesRoutingModule],
  exports: [],
})
export class PoliciesModule {}
