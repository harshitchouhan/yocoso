import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeedComponent } from "./feed/feed.component";
import { FeedsListComponent } from "./feeds-list/feeds-list.component";

const routes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        component: FeedsListComponent,
      },
      {
        path: "add",
        component: FeedComponent,
      },
      {
        path: ":id",
        children: [
          {
            path: ":type",
            component: FeedComponent,
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
export class FeedsRoutingModule {}
