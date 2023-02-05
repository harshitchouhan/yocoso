import { Component, OnInit } from "@angular/core";

import * as ClassicEditor from "@ckeditor/ckeditor5-build-classic";

@Component({
  selector: "app-policies",
  templateUrl: "./policies.component.html",
  styleUrls: ["./policies.component.scss"],
})
export class PoliciesComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {}
}
