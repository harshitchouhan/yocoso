import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import * as chartData from '../../../shared/data/dashboard/ecommerce'
@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.scss']
})
export class EcommerceComponent implements OnInit {

  public todayTotalSale = chartData.todayTotalSale;
  public totalVisit = chartData.totalVisit;
  public profit = chartData.profit;
  public riskFactor = chartData.riskFactor;

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    slideBy:'page',
    pullDrag: false,
    autoWidth: true,
    margin:10,
    items:1,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    nav: true
  }


  public markers: any[];
  public zoom: number;

  constructor() {
    this.markers = [];
    this.zoom = 4;
  }

  ngOnInit(): void {
    this.markers.push({
      position: {
        lat: 20.593683,
        lng: 78.962883
      },
      label: {
        color: "black",
        text: "Madrid"
      },
      Option: {
        draggable: true,
        animation: google.maps.Animation.DROP,
      }
    });

    this.markers.push({
      position: {
        lat: 48.8615515,
        lng: 2.3112233
      },
      label: {
        color: "black",
        text: "Paris"
      }
    });
  }

}
