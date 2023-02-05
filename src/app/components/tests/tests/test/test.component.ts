import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.scss"],
})
export class TestComponent implements OnInit {
  id: string;
  type: "view" | "edit";

  checked = true;
  showForm = false;

  testType: "Mock" | "Sectional" | "Topic" = "Mock";

  public defaultBindingsList = [
    { value: "10", label: "Option 1" },
    { value: "10", label: "Option 2" },
    { value: "10", label: "Option 3" },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.type = this.route.snapshot.params["type"];
  }
}
