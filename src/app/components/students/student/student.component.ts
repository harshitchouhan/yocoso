import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-student",
  templateUrl: "./student.component.html",
  styleUrls: ["./student.component.scss"],
})
export class StudentComponent implements OnInit {
  id: string;

  checked = true;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
  }
}
