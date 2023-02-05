import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "./../../shared/shared.module";

import { FeedsListComponent } from "../../components/feeds/feeds-list/feeds-list.component";
import { FeedComponent } from "./feed/feed.component";
import { FeedsRoutingModule } from "./feeds-routing.module";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { NgxDropzoneModule } from "ngx-dropzone";
import { NgSelectModule } from "@ng-select/ng-select";

@NgModule({
  declarations: [FeedsListComponent, FeedComponent],
  imports: [CommonModule, CKEditorModule, NgSelectModule, NgxDropzoneModule, SharedModule, FeedsRoutingModule],
  exports: [],
})
export class FeedsModule {}
