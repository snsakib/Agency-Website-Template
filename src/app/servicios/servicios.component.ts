import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  services = [
    {
      imgSrc: 'https://project-agency.netlify.com/assets/images/servicios/service-1.png',
      imgAlt: 'Illustration',
      title: 'Nombre del Servicio',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper diam nisl, eget vulputate sapien scelerisque ut.',
      CTAtext: 'Ver más',
      CTAhref: '#'
    },
    {
      imgSrc: 'https://project-agency.netlify.com/assets/images/servicios/service-2.png',
      imgAlt: 'Illustration',
      title: 'Nombre del Servicio',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper diam nisl, eget vulputate sapien scelerisque ut.',
      CTAtext: 'Ver más',
      CTAhref: '#'
    },
    {
      imgSrc: 'https://project-agency.netlify.com/assets/images/servicios/service-3.png',
      imgAlt: 'Illustration',
      title: 'Nombre del Servicio',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper diam nisl, eget vulputate sapien scelerisque ut.',
      CTAtext: 'Ver más',
      CTAhref: '#'
    },
    {
      imgSrc: 'https://project-agency.netlify.com/assets/images/servicios/service-4.png',
      imgAlt: 'Illustration',
      title: 'Nombre del Servicio',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ullamcorper diam nisl, eget vulputate sapien scelerisque ut.',
      CTAtext: 'Ver más',
      CTAhref: '#'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
