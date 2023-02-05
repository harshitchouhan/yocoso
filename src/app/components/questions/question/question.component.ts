import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.scss"],
})
export class QuestionComponent implements OnInit {
  id: string;
  type: "view" | "edit";

  public defaultBindingsList = [
    { value: "6", label: "Option 1" },
    { value: "6", label: "Option 2" },
    { value: "6", label: "Option 3" },
    { value: "6", label: "Option 4" },
    { value: "6", label: "Option 5" },
    { value: "6", label: "Option 6" },
    { value: "6", label: "Option 7" },
    { value: "6", label: "Option 8" },
  ];

  public multipleSelectedCity: string[];

  public ClassicEditor = ClassicEditor;

  show1 = false;
  show2 = true;
  show3 = true;

  public files: File[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.type = this.route.snapshot.params["type"];
  }

  replaceFile() {
    this.files.splice(0, 1);
  }

  onSelect(event) {
    this.files.push(...event.addedFiles);
    if (this.files.length > 1) {
      this.replaceFile();
    }
  }
}
