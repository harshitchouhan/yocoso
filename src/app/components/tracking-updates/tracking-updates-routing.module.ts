import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TrackingUpdatesComponent } from "./tracking-updates.component";

const routes: Routes = [
  {
    path: "",
    component: TrackingUpdatesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrackingUpdatesRoutingModule {}
