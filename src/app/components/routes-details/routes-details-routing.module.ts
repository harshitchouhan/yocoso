import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RoutesDetailsComponent } from "./routes-details.component";

const routes: Routes = [
  {
    path: "",
    component: RoutesDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutesDetailsRoutingModule {}
