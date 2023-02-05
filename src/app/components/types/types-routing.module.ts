import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TypeComponent } from "./type/type.component";
import { TypesComponent } from "./types.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: TypesComponent,
      },
      {
        path: "add",
        component: TypeComponent,
      },
      {
        path: ":id/:type",
        component: TypeComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TypesRoutingModule {}
