import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ServiceTypesComponent } from "../services/service-types/service-types.component";

const routes: Routes = [
  {
    path: "",
    component: ServiceTypesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceTypesDetailsRoutingModule {}
