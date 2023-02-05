import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-section",
  templateUrl: "./section.component.html",
  styleUrls: ["./section.component.scss"],
})
export class SectionComponent implements OnInit {
  id: string;
  type: "view" | "edit";
  checked = true;

  public defaultBindingsList = [
    // { value: "1", label: "Alabama", job: "Developer" },
    // { value: "2", label: "Wyoming", job: "Developer" },
    // { value: "3", label: "Coming", job: "Designer", disabled: true },
    // { value: "4", label: "Hanry Die", job: "Designer" },
    // { value: "5", label: "John Doe", job: "Designer" },
  ];

  public multipleSelectedCity: string[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.type = this.route.snapshot.params["type"];
  }
}
