import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: "app-exam",
  templateUrl: "./exam.component.html",
  styleUrls: ["./exam.component.scss"],
})
export class ExamComponent implements OnInit {
  id: string;
  type: "view" | "edit";

  checked = true;
  public multipleSelectedCity: string[];

  editor = ClassicEditor;
  data: any = `<p>Hello, world!</p>`;

  config = {
    toolbar: [
      "undo",
      "redo",
      "|",
      "heading",
      "fontFamily",
      "fontSize",
      "|",
      "bold",
      "italic",
      "underline",
      "fontColor",
      "fontBackgroundColor",
      "highlight",
      "|",
      "link",
      "CKFinder",
      "imageUpload",
      "mediaEmbed",
      "|",
      "alignment",
      "bulletedList",
      "numberedList",
      "|",
      "indent",
      "outdent",
      "|",
      "insertTable",
      "blockQuote",
      "specialCharacters",
    ],
    language: "id",
    image: {
      toolbar: ["imageTextAlternative", "imageStyle:full", "imageStyle:side"],
    },
  };

  public htmlContent = "";

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.id = this.route.snapshot.params["id"];
    this.type = this.route.snapshot.params["type"];

    console.log(this.type);
  }
}
