import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { SlickCarouselModule } from "ngx-slick-carousel";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { HomeHeaderComponent } from "./../../components/home-header/home-header.component";
import { HomeFooterComponent } from "./../../components/home-footer/home-footer.component";

import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [HomeComponent, HomeHeaderComponent, HomeFooterComponent],
  imports: [CommonModule, HomeRoutingModule, NgbModule, SlickCarouselModule, SharedModule],
})
export class HomeModule {}
