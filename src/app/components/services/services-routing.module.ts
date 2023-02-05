import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ServiceManagementComponent } from "./service-management/service-management.component";
import { ServiceTypesComponent } from "./service-types/service-types.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "types",
        component: ServiceTypesComponent,
      },
      {
        path: "all",
        component: ServiceManagementComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
