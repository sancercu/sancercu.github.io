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
      user: 'Loana Martínez',
      userType: 'Emprendedora',
      comment:
        'Anulación automáticas de comprobantes en un sólo botón! eso si es la gloriaaa.'
    },
    {
      user: 'Julian Mateos',
      userType: 'Emprendedor',
      comment:
        'Gracias gracias gracias... definitivamente le ponen onda y simpleza a un garronazo'
    },
    {
      user: 'PY Consultores',
      userType: 'Estudio contable',
      comment:
        'Revisar la cartera de monotrinutistas con tfd nos ahorró horas de trabajo. Evitamos errores y nos agiliza las tareas cotidianas.'
    },
    {
      user: 'Javier Rodriguez',
      userType: 'Emprendedor',
      comment: [
        'Con tfd puedo emitir facturas con el logo de mi empresa y enviársela a mis clientes por email.',
        'Hace poco comencé mi emprendimiento, y mis facturas están a la altura de una gran empresa.'
      ].join(' ')
    },
    {
      user: 'Jimena Ruiz',
      userType: 'Emprendedora',
      comment:
        'Me encantan los diseños de las facturas!!! mi logo se aprecia en cada comprobante.'
    }
  ];

  public images = [
    {
      image: '../../../../../assets/images/nosotros.jpg'
    },
    {
      image: '../../../../../assets/images/nosotros.jpg'
    },
    {
      image: '../../../../../assets/images/nosotros.jpg'
    },
    {
      image: '../../../../../assets/images/nosotros.jpg'
    },
    {
      image: '../../../../../assets/images/nosotros.jpg'
    },
    {
      image: '../../../../../assets/images/nosotros.jpg'
    },
    {
      image: '../../../../../assets/images/nosotros.jpg'
    },
    {
      image: '../../../../../assets/images/nosotros.jpg'
    },
    {
      image: '../../../../../assets/images/nosotros.jpg'
    },
    {
      image: '../../../../../assets/images/nosotros..jpg'
    },
    {
      image: '../../../../../assets/images/nosotros..jpg'
    },
    {
      image: '../../../../../assets/images/nosotros..jpg'
    }
  ];


  constructor(
  ) { }

  ngOnInit() {
  }
}
