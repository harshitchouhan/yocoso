import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AdvertismentComponent } from "./advertisment/advertisment.component";

const routes: Routes = [
  {
    path: "",
    component: AdvertismentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertismentsRoutingModule {}
