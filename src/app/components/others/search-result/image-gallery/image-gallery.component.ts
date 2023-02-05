// import { Component, OnInit } from '@angular/core';
// import { ButtonsConfig, ButtonsStrategy,  Image, KS_DEFAULT_BTN_CLOSE, KS_DEFAULT_BTN_DELETE, KS_DEFAULT_BTN_DOWNLOAD, KS_DEFAULT_BTN_EXTURL, KS_DEFAULT_BTN_FULL_SCREEN, PlainGalleryConfig, PlainGalleryStrategy, ButtonEvent, ButtonType } from '@ks89/angular-modal-gallery';


// @Component({
//   selector: 'app-image-gallery',
//   templateUrl: './image-gallery.component.html',
//   styleUrls: ['./image-gallery.component.scss']
// })
// export class ImageGalleryComponent implements OnInit {

//   public imagesRect: Image[] = [
//     new Image(
//       0,
//       { // modal
//         img: 'assets/images/big-lightgallry/013.jpg',
//         extUrl: 'http://www.google.com',
//         title: 'Portfolio Title',
//         description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
//       },
//     ),
//     new Image(
//       1,
//       { // modal
//         img: 'assets/images/big-lightgallry/014.jpg',
//         extUrl: 'http://www.google.com',
//         title: 'Portfolio Title',
//         description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
//       },
//     ),
//     new Image(
//       2,
//       { // modal
//         img: 'assets/images/big-lightgallry/015.jpg',
//         extUrl: 'http://www.google.com',
//         title: 'Portfolio Title',
//         description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
//       },
//     ),
//     new Image(
//       3,
//       { // modal
//         img: 'assets/images/big-lightgallry/016.jpg',
//         extUrl: 'http://www.google.com',
//         title: 'Portfolio Title',
//         description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
//       },
//     ),
//     new Image(
//       4,
//       { // modal
//         img: 'assets/images/big-lightgallry/012.jpg',
//         extUrl: 'http://www.google.com',
//         title: 'Portfolio Title',
//         description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
//       },
//     ),
//     new Image(
//       5,
//       { // modal
//         img: 'assets/images/big-lightgallry/01.jpg',
//         extUrl: 'http://www.google.com',
//         title: 'Portfolio Title',
//         description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
//       },
//     ),
//     new Image(
//       6,
//       { // modal
//         img: 'assets/images/big-lightgallry/02.jpg',
//         extUrl: 'http://www.google.com',
//         title: 'Portfolio Title',
//         description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
//       },
//     ),
//     new Image(
//       7,
//       { // modal
//         img: 'assets/images/big-lightgallry/03.jpg',
//         extUrl: 'http://www.google.com',
//         title: 'Portfolio Title',
//         description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
//       },
//     ),
//     new Image(
//       8,
//       { // modal
//         img: 'assets/images/big-lightgallry/04.jpg',
//         extUrl: 'http://www.google.com',
//         title: 'Portfolio Title',
//         description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
//       },
//     ),
//     new Image(
//       9,
//       { // modal
//         img: 'assets/images/big-lightgallry/05.jpg',
//         extUrl: 'http://www.google.com',
//         title: 'Portfolio Title',
//         description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
//       },
//     ),
//     new Image(
//       10,
//       { // modal
//         img: 'assets/images/big-lightgallry/06.jpg',
//         extUrl: 'http://www.google.com',
//         title: 'Portfolio Title',
//         description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
//       },
//     ),
//     new Image(
//       11,
//       { // modal
//         img: 'assets/images/big-lightgallry/07.jpg',
//         extUrl: 'http://www.google.com',
//         title: 'Portfolio Title',
//         description: '<h4>Portfolio Title</h4><p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy.</p>'
//       },
//     ),
//   ];

//   constructor() {
//   }

//   buttonsConfigDefault: ButtonsConfig = {
//     visible: true,
//     strategy: ButtonsStrategy.DEFAULT
//   };
//   buttonsConfigSimple: ButtonsConfig = {
//     visible: true,
//     strategy: ButtonsStrategy.SIMPLE
//   };
//   buttonsConfigAdvanced: ButtonsConfig = {
//     visible: true,
//     strategy: ButtonsStrategy.ADVANCED
//   };
//   buttonsConfigFull: ButtonsConfig = {
//     visible: true,
//     strategy: ButtonsStrategy.FULL
//   };
//   buttonsConfigCustom: ButtonsConfig = {
//     visible: true,
//     strategy: ButtonsStrategy.CUSTOM,
//     buttons: [
//       KS_DEFAULT_BTN_FULL_SCREEN,
//       KS_DEFAULT_BTN_DELETE,
//       KS_DEFAULT_BTN_EXTURL,
//       KS_DEFAULT_BTN_DOWNLOAD,
//       KS_DEFAULT_BTN_CLOSE
//     ]
//   };

//   // customPlainGalleryRowDescConfig: PlainGalleryConfig = {
//   //   strategy: PlainGalleryStrategy.CUSTOM,
//   //   layout: new AdvancedLayout(-1, true)
//   // };

//   // openImageModalRowDescription(image: Image) {
//   //   const index: number = this.getCurrentIndexCustomLayout(image, this.imagesRect);
//   //   this.customPlainGalleryRowDescConfig = Object.assign({}, this.customPlainGalleryRowDescConfig, { layout: new AdvancedLayout(index, true) });
//   // }

//   private getCurrentIndexCustomLayout(image: Image, images: Image[]): number {
//     return image ? images.indexOf(image) : -1;
//   };

//   onButtonBeforeHook(event: ButtonEvent) {
//     if (!event || !event.button) {
//       return;
//     }

//     if (event.button.type === ButtonType.DELETE) {
//       this.imagesRect = this.imagesRect.filter((val: Image) => event.image && val.id !== event.image.id);
//     }
//   }

//   onButtonAfterHook(event: ButtonEvent) {
//     if (!event || !event.button) {
//       return;
//     }
//   }

//   onCustomButtonBeforeHook(event: ButtonEvent, galleryId: number | undefined) {
//     if (!event || !event.button) {
//       return;
//     }

//     if (event.button.type === ButtonType.CUSTOM) {
//       this.addRandomImage();
//       setTimeout(() => {
//         // this.galleryService.openGallery(galleryId, this.imagesRect.length - 1);
//       }, 0);
//     }
//   }

//   onCustomButtonAfterHook(event: ButtonEvent, galleryId: number | undefined) {
//     if (!event || !event.button) {
//       return;
//     }
//   }

//   addRandomImage() {
//     const imageToCopy: Image = this.imagesRect[Math.floor(Math.random() * this.imagesRect.length)];
//     const newImage: Image = new Image(this.imagesRect.length - 1 + 1, imageToCopy.modal, imageToCopy.plain);
//     this.imagesRect = [...this.imagesRect, newImage];
//   }

//   ngOnInit() {  }

// }

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Gallery, GalleryItem, ImageItem, ThumbnailsPosition, ImageSize } from 'ng-gallery';
import { Lightbox } from 'ng-gallery/lightbox';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ImageGalleryComponent implements OnInit {

  items: GalleryItem[];

  imageData = data;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {
  }

  ngOnInit() {

    /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.imageData.map(item => new ImageItem({ src: item.srcUrl, thumb: item.previewUrl }));


    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref('lightbox');

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }
}

const data = [
  {
    srcUrl: 'assets/images/lightgallry/01.jpg',
    previewUrl: 'assets/images/lightgallry/01.jpg'
  },
  {
    srcUrl: 'assets/images/lightgallry/02.jpg',
    previewUrl: 'assets/images/lightgallry/02.jpg'
  },
  {
    srcUrl: 'assets/images/lightgallry/03.jpg',
    previewUrl: 'assets/images/lightgallry/03.jpg'
  },
  {
    srcUrl: 'assets/images/lightgallry/04.jpg',
    previewUrl: 'assets/images/lightgallry/04.jpg'
  },
  {
    srcUrl: 'assets/images/lightgallry/05.jpg',
    previewUrl: 'assets/images/lightgallry/05.jpg'
  },
  {
    srcUrl: 'assets/images/lightgallry/06.jpg',
    previewUrl: 'assets/images/lightgallry/06.jpg'
  },
  {
    srcUrl: 'assets/images/lightgallry/07.jpg',
    previewUrl: 'assets/images/lightgallry/07.jpg'
  },
  {
    srcUrl: 'assets/images/lightgallry/08.jpg',
    previewUrl: 'assets/images/lightgallry/08.jpg'
  },
  {
    srcUrl: 'assets/images/lightgallry/09.jpg',
    previewUrl: 'assets/images/lightgallry/09.jpg'
  },
  {
    srcUrl: 'assets/images/lightgallry/010.jpg',
    previewUrl: 'assets/images/lightgallry/010.jpg'
  },
  {
    srcUrl: 'assets/images/lightgallry/011.jpg',
    previewUrl: 'assets/images/lightgallry/011.jpg'
  },
  {
    srcUrl: 'assets/images/lightgallry/012.jpg',
    previewUrl: 'assets/images/lightgallry/012.jpg'
  }
]






