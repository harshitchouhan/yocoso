import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SectionsListComponent } from "./sections-list/sections-list.component";
import { SectionComponent } from "./section/section.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: SectionsListComponent,
      },
      {
        path: "add",
        component: SectionComponent,
      },
      {
        path: ":id",
        children: [
          {
            path: ":type",
            component: SectionComponent,
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
export class SectionsRoutingModule {}
