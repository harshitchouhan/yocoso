import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ExamComponent } from "./exam/exam.component";
import { ExamsListComponent } from "./exams-list/exams-list.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: ExamsListComponent,
      },
      {
        path: "add",
        component: ExamComponent,
      },
      {
        path: ":id",
        children: [
          {
            path: ":type",
            component: ExamComponent,
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
export class ExamsRoutingModule {}
