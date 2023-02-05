import { Component, OnInit, Renderer2, ElementRef } from "@angular/core";
import { DragulaService } from "ng2-dragula";
import { Subscription } from "rxjs";

@Component({
  selector: "app-advertisment",
  templateUrl: "./advertisment.component.html",
  styleUrls: ["./advertisment.component.scss"],
})
export class AdvertismentComponent implements OnInit {
  checked = true;

  subs = new Subscription();

  files: File[] = [];

  adSequence = "adSequence";
  data = [
    {
      id: 1,
      url: "assets/images/lightgallry/01.jpg",
      active: true,
    },
    {
      id: 2,
      url: "assets/images/lightgallry/01.jpg",
      active: true,
    },
    {
      id: 3,
      url: "assets/images/lightgallry/01.jpg",
      active: true,
    },
    {
      id: 4,
      url: "assets/images/lightgallry/01.jpg",
      active: true,
    },
    {
      id: 5,
      url: "assets/images/lightgallry/01.jpg",
      active: true,
    },
    {
      id: 6,
      url: "assets/images/lightgallry/01.jpg",
      active: true,
    },
  ];

  public removeEventListener: () => void;

  constructor(private dragulaService: DragulaService, private renderer: Renderer2, private elementRef: ElementRef) {
    dragulaService.createGroup("adSequence", {
      moves: (el, container, handle) => {
        return handle.className.includes("handle");
      },
    });
  }

  ngOnInit() {
    this.removeEventListener = this.renderer.listen(this.elementRef.nativeElement, "click", (event) => {
      console.log();
      if (event.target.className.includes("delete")) {
        console.log(event);
      }
    });
  }

  onSelect(event) {
    this.files.push(...event.addedFiles);
    if (this.files.length > 1) {
      this.replaceFile();
    }
  }

  replaceFile() {
    this.files.splice(0, 1);
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  ngOnDestroy() {
    this.dragulaService.destroy("adSequence");
  }
}
