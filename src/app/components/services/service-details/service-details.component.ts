import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
// @ts-ignore
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: "app-service-details",
  templateUrl: "./service-details.component.html",
  styleUrls: ["./service-details.component.scss"],
})
export class ServiceDetailsComponent implements OnInit {
  id!: string;
  pageType: "Add" | "Edit" | "View" = "Add";

  editor = ClassicEditor;
  data: any = `<p>Hello, world!</p>`;
  
  config = {
    toolbar: [
      'undo',
      'redo',
      '|',
      'heading',
      'fontFamily',
      'fontSize',
      '|',
      'bold',
      'italic',
      'underline',
      'fontColor',
      'fontBackgroundColor',
      'highlight',
      '|',
      'link',
      'CKFinder',
      'imageUpload',
      'mediaEmbed',
      '|',
      'alignment',
      'bulletedList',
      'numberedList',
      '|',
      'indent',
      'outdent',
      '|',
      'insertTable',
      'blockQuote',
      'specialCharacters'
    ],
    language: 'id',
    image: {
      toolbar: [
        'imageTextAlternative',
        'imageStyle:full',
        'imageStyle:side'
      ]
    },
  }
  
  public htmlContent = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];

    if (this.router.url.includes("/services/all/add")) {
      this.pageType = "Add";
    } else if (this.router.url.includes("/services/all/view")) {
      this.pageType = "View";
    } else if (this.router.url.includes("/services/all/edit")) {
      this.pageType = "Edit";
    }
  }
}
