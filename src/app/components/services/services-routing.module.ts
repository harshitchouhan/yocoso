import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ServiceTypesDetailsComponent } from "../service-types-details/service-types-details.component";
import { ServiceDetailsComponent } from "./service-details/service-details.component";
import { ServiceManagementComponent } from "./service-management/service-management.component";
import { ServiceTypesComponent } from "./service-types/service-types.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "types",
        children: [
          {
            path: "",
            component: ServiceTypesComponent,
          },
          {
            path: "add",
            component: ServiceTypesDetailsComponent,
          },
          {
            path: "edit/:id",
            component: ServiceTypesDetailsComponent,
          },
          {
            path: "view/:id",
            component: ServiceTypesDetailsComponent,
          },
        ],
      },
      {
        path: "all",
        children: [
          {
            path: "",
            component: ServiceManagementComponent,
          },
          {
            path: "add",
            component: ServiceDetailsComponent,
          },
          {
            path: "edit/:id",
            component: ServiceDetailsComponent,
          },
          {
            path: "view/:id",
            component: ServiceDetailsComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
