import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { NgSelectModule } from "@ng-select/ng-select";

import { SharedModule } from "./../../shared/shared.module";
import { PackagesListComponent } from "./packages-list/packages-list.component";
import { PackageComponent } from "./package/package.component";
import { PackagesRoutingModule } from "./packages-routing.module";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { NgxDropzoneModule } from "ngx-dropzone";

@NgModule({
  declarations: [PackagesListComponent, PackageComponent],
  imports: [CommonModule, NgSelectModule, CKEditorModule, NgxDropzoneModule, SharedModule, PackagesRoutingModule],
  exports: [],
})
export class PackagesModule {}
