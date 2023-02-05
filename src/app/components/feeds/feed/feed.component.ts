import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: "app-feed",
  templateUrl: "./feed.component.html",
  styleUrls: ["./feed.component.scss"],
})
export class FeedComponent implements OnInit {
  id: string;
  type: "view" | "edit";

  checked = true;

  public ClassicEditor = ClassicEditor;
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
