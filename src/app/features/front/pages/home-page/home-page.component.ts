import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public configComments: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    pagination: true,
    allowTouchMove: true,
    loop: true,
    autoplay: true,
    grabCursor: true,
    speed: 100
  };
  public config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    pagination: false,
    allowTouchMove: false,
    autoplay: true,
    grabCursor: false,
    effect: 'fade',
    speed: 3000
  };

  public comments = [
    {
      user: 'Juliana Matos',
      userType: 'Viajera',
      comment:
        'Gracias gracias gracias... Me gustaría poder encontrarlos por la ahí'
    },
    {
      user: 'Javier Rodriguez',
      userType: 'Emprendedor y Viajero',
      comment: 'Ustedes son todo lo que está bien!. Saludos desde Nueva Zelanda  ',
    },
    {
      user: 'Jimena Ruiz',
      userType: 'Emprendedora',
      comment:
        'Me encantan los viajes q realizaron. Las fotos son increibles!'
    }
  ];

  public images = [
    {
      image: '../../../../../assets/images/viajes5.jpg'
    },
    {
      image: '../../../../../assets/images/viajes.jpg'
    },
    {
      image: '../../../../../assets/images/viajes2.jpg'
    },
    {
      image: '../../../../../assets/images/viajes3.jpg'
    },
    {
      image: '../../../../../assets/images/viajes4.jpg'
    },
    {
      image: '../../../../../assets/images/viajes6.jpg'
    },
  ];


  constructor(
  ) { }

  ngOnInit() {
  }
}
