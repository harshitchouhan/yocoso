import { Component, OnInit, Inject } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { NgbCarouselConfig } from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  providers: [NgbCarouselConfig],
})
export class HomeComponent implements OnInit {
  images = ["assets/images/slider/1.jpg", "assets/images/slider/2.jpg", "assets/images/slider/3.jpg"];

  slides = [
    { img: "assets/images/slider/1.jpg", name: "SBI PO" },
    { img: "assets/images/slider/1.jpg", name: "IBPS PO" },
    { img: "assets/images/slider/1.jpg", name: "SBI Clerk" },
    { img: "assets/images/slider/1.jpg", name: "IBPS Clerk" },
    { img: "assets/images/slider/1.jpg", name: "IBPS RRB PO" },
    { img: "assets/images/slider/1.jpg", name: "SSC CGL" },
    { img: "assets/images/slider/1.jpg", name: "SSC CHSL" },
    { img: "assets/images/slider/1.jpg", name: "UPSC CSE" },
    { img: "assets/images/slider/1.jpg", name: "SBI PO" },
    { img: "assets/images/slider/1.jpg", name: "IBPS PO" },
    { img: "assets/images/slider/1.jpg", name: "SBI Clerk" },
    { img: "assets/images/slider/1.jpg", name: "IBPS Clerk" },
    { img: "assets/images/slider/1.jpg", name: "IBPS RRB PO" },
    { img: "assets/images/slider/1.jpg", name: "SSC CGL" },
    { img: "assets/images/slider/1.jpg", name: "SSC CHSL" },
    { img: "assets/images/slider/1.jpg", name: "UPSC CSE" },
  ];

  slideConfig = {
    slidesToShow: 10,
    slidesToScroll: 5,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: `<button type="button" class="slick-prev">Previous</button>`,
    nextArrow: `<button type="button" class="slick-next">Next</button>`,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  categorySlides = [
    {
      content: [
        { name: "SBI PO", icon: "", id: "1" },
        { name: "SBI Apprentice", icon: "", id: "2" },
        { name: "SBI Clerk ", icon: "", id: "3" },
        { name: "RBI Assistant ", icon: "", id: "4" },
        { name: "SBI PO", icon: "", id: "1" },
        { name: "SBI Apprentice", icon: "", id: "2" },
        { name: "SBI Clerk ", icon: "", id: "3" },
        { name: "RBI Assistant ", icon: "", id: "4" },
        { name: "SBI PO", icon: "", id: "1" },
        { name: "SBI Apprentice", icon: "", id: "2" },
        { name: "SBI Clerk ", icon: "", id: "3" },
        { name: "RBI Assistant ", icon: "", id: "4" },
        { name: "SBI PO", icon: "", id: "1" },
        { name: "SBI Apprentice", icon: "", id: "2" },
        { name: "SBI Clerk ", icon: "", id: "3" },
        { name: "RBI Assistant ", icon: "", id: "4" },
        { name: "SBI PO", icon: "", id: "1" },
        { name: "SBI Apprentice", icon: "", id: "2" },
        { name: "SBI Clerk ", icon: "", id: "3" },
        { name: "RBI Assistant ", icon: "", id: "4" },
        { name: "SBI PO", icon: "", id: "1" },
        { name: "SBI Apprentice", icon: "", id: "2" },
        { name: "SBI Clerk ", icon: "", id: "3" },
        { name: "RBI Assistant ", icon: "", id: "4" },
        { name: "SBI PO", icon: "", id: "1" },
        { name: "SBI Apprentice", icon: "", id: "2" },
        { name: "SBI Clerk ", icon: "", id: "3" },
        { name: "RBI Assistant ", icon: "", id: "4" },
      ],
      name: "Banking & Insurance",
      isActive: true,
    },
    {
      content: [
        { name: "SSC CGL", icon: "", id: "5" },
        { name: "SSC CHSL", icon: "", id: "6" },
        { name: "SSC CPO", icon: "", id: "7" },
      ],
      name: "SSC Exams",
      isActive: false,
    },
    { content: [], name: "Regulatory", isActive: false },
    { content: [], name: "UPSC", isActive: false },
    { content: [], name: "MBA Exams", isActive: false },
    { content: [], name: "Railway Exams", isActive: false },
    { content: [], name: "JAIIB-CAIIB Exams", isActive: false },
    { content: [], name: "Karnataka Exams", isActive: false },
    { content: [], name: "Tamil Nadu Exams", isActive: false },
    { content: [], name: "Judiciary Exams", isActive: false },
    { content: [], name: "Law Entrance Exams", isActive: false },
    { content: [], name: "Agriculture Exams", isActive: false },
    { content: [], name: "Engineering Exams", isActive: false },
    { content: [], name: "J&K Exams", isActive: false },
    { content: [], name: "UP Exams", isActive: false },
    { content: [], name: "Rajasthan Exams", isActive: false },
  ];

  categorySlideConfig = {
    slidesToShow: 8,
    slidesToScroll: 5,
    dots: false,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: `<button type="button" class="slick-prev">Previous</button>`,
    nextArrow: `<button type="button" class="slick-next">Next</button>`,
    infinite: false,
    adaptiveHeight: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 786,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  selectedCategoryExams = this.categorySlides[0].content;

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
    // customize default values of carousels used by this component tree
    config.interval = 300000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void {}

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {}

  onCategoryFilterChange(slide: any) {
    this.categorySlides.forEach((element) => {
      element.isActive = false;
    });

    slide.isActive = true;
    this.selectedCategoryExams = slide.content;
  }

  breakpoint(e) {
    console.log("breakpoint");
  }

  afterChange(e) {
    console.log("afterChange");
  }

  beforeChange(e) {
    console.log("beforeChange");
  }
}
