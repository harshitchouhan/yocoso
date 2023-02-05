import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DragulaModule } from "ng2-dragula";

import { SharedModule } from "./../../shared/shared.module";

import { AdvertismentComponent } from "./advertisment/advertisment.component";
import { AdvertismentsRoutingModule } from "./advertisments-routing.module";
import { NgxDropzoneModule } from "ngx-dropzone";

@NgModule({
  declarations: [AdvertismentComponent],
  imports: [CommonModule, SharedModule, DragulaModule.forRoot(), NgxDropzoneModule, AdvertismentsRoutingModule],
  exports: [],
})
export class AdvertismentsModule {}
