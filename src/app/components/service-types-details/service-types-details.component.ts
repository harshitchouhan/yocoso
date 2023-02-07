import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-service-types-details',
  templateUrl: './service-types-details.component.html',
  styleUrls: ['./service-types-details.component.scss']
})
export class ServiceTypesDetailsComponent implements OnInit {

  id!: string;
  pageType: "Add" | "Edit" | "View" = "Add";

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];

    if (this.router.url.includes("/services/types/add")) {
      this.pageType = "Add";
    } else if (this.router.url.includes("/services/types/view")) {
      this.pageType = "View";
    } else if (this.router.url.includes("/services/types/edit")) {
      this.pageType = "Edit";
    }
  }

}
