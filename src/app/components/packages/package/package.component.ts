import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: "app-package",
  templateUrl: "./package.component.html",
  styleUrls: ["./package.component.scss"],
})
export class PackageComponent implements OnInit {
  id: string;
  type: "view" | "edit";

  checked = true;

  public files: File[] = [];

  public defaultBindingsList = [
    { value: "6", label: "6 Months" },
    { value: "12", label: "12 Months" },
    { value: "24", label: "24 Months" },
  ];

  public ClassicEditor = ClassicEditor;

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
