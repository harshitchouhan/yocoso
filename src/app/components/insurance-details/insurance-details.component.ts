import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-insurance-details",
  templateUrl: "./insurance-details.component.html",
  styleUrls: ["./insurance-details.component.scss"],
})
export class InsuranceDetailsComponent implements OnInit {
  id!: string;

  pageType: "Add" | "Edit" | "View" = "Add";

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];

    if (this.router.url.includes("/insurance/add")) {
      this.pageType = "Add";
    } else if (this.router.url.includes("/insurance-details/view")) {
      this.pageType = "View";
    } else if (this.router.url.includes("/insurance-details/edit")) {
      this.pageType = "Edit";
    }
  }
}
