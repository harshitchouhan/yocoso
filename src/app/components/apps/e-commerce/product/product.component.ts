import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { QuickViewComponent } from "../quick-view/quick-view.component";
import * as feather from 'feather-icons';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input('icon') public icon;

  public openSidebar: boolean = false;
  public listView: boolean = false;
  public col: string = '3';
  public col1: string = '4';
  public col2: string = '6';

  @ViewChild("quickView") QuickView: QuickViewComponent;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      feather.replace();
    });
  }

  sidebarToggle() {
    this.openSidebar = !this.openSidebar;
    this.col = '3';
    this.col1 = '4';
    this.col2 = '6';
  }

  toggleListView(val) {
    this.listView = val;
  }

  gridColumn(val) {
    this.col = val;
    this.col1 = val;
    this.col2 = val;
  }

}
