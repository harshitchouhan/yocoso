import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PackageComponent } from "./package/package.component";
import { PackagesListComponent } from "./packages-list/packages-list.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: PackagesListComponent,
      },
      {
        path: "add",
        component: PackageComponent,
      },
      {
        path: ":id/:type",
        component: PackageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PackagesRoutingModule {}
