import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  menuOptions = [
    {
      menuText: 'Home',
      linkId: 'home'
    },
    {
      menuText: 'La Agencia',
      linkId: 'la-agencia'
    },
    {
      menuText: 'Servicios',
      linkId: 'servicios'
    },
    {
      menuText: 'Portafolio',
      linkId: 'portafolio'
    },
    {
      menuText: 'Blog',
      linkId: 'blog'
    }
  ];
  navLinks: HTMLCollectionOf<Element>;
  // If the width of screen is equals or greather than 1024px, the value of the property becomes true.
  isLaptop: boolean;

  // Checks the window width & sets the 'isLaptop' property value
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth < 1024) {
      this.isLaptop = false;
    } else {
      this.isLaptop = true;
    }
  }

  constructor() {}

  ngOnInit() {
    this.onResize();
  }
}
