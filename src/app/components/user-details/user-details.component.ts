import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.scss"],
})
export class UserDetailsComponent implements OnInit {
  id!: string;
  pageType: "Add" | "Edit" | "View" = "Add";

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];

    if (this.router.url.includes("/user/add")) {
      this.pageType = "Add";
    } else if (this.router.url.includes("/user-details/view")) {
      this.pageType = "View";
    } else if (this.router.url.includes("/user-details/edit")) {
      this.pageType = "Edit";
    }
  }
}
