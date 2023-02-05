import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TestsComponent } from "./tests/tests.component";
import { TestComponent } from "./tests/test/test.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: TestsComponent,
      },
      {
        path: "add",
        component: TestComponent,
      },
      {
        path: ":id/:type",
        component: TestComponent,
      },
    ],
  },
  // {
  //   path: "types",
  //   children: [
  //     {
  //       path: "",
  //       component: TypesComponent,
  //     },
  //     {
  //       path: "add",
  //       component: TypeComponent,
  //     },
  //     {
  //       path: ":id/:type",
  //       component: TypeComponent,
  //     },
  //   ],
  // },
  // {
  //   path: "questions",
  //   component: QuestionsComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestsRoutingModule {}
