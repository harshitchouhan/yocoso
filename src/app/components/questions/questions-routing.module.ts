import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { QuestionComponent } from "./question/question.component";
import { QuestionsComponent } from "./questions.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: QuestionsComponent,
      },
      {
        path: "add",
        component: QuestionComponent,
      },
      {
        path: ":id/:type",
        component: QuestionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionsRoutingModule {}
