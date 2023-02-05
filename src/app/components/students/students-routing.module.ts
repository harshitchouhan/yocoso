import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { StudentListComponent } from "./student-list/student-list.component";
import { StudentComponent } from "./student/student.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: StudentListComponent,
      },
      {
        path: ":id",
        component: StudentComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
