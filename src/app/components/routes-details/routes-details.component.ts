import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-routes-details",
  templateUrl: "./routes-details.component.html",
  styleUrls: ["./routes-details.component.scss"],
})
export class RoutesDetailsComponent implements OnInit {
  id!: string;

  postalCodes!: any[]

  pageType: "Add" | "Edit" | "View" = "Add";

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];

    if (this.router.url.includes("/route/add")) {
      this.pageType = "Add";
    } else if (this.router.url.includes("/route-details/view")) {
      this.pageType = "View";
    } else if (this.router.url.includes("/route-details/edit")) {
      this.pageType = "Edit";
    }
  }
}
