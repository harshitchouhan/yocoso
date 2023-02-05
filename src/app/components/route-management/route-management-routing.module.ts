import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RouteManagementComponent } from "./route-management.component";

const routes: Routes = [
  {
    path: "",
    component: RouteManagementComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RouteManagementRoutingModule {}
