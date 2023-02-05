import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-footer",
  templateUrl: "./home-footer.component.html",
  styleUrls: ["./home-footer.component.scss"],
})
export class HomeFooterComponent implements OnInit {
  public today: number = Date.now();

  constructor() {}

  ngOnInit(): void {}
}
