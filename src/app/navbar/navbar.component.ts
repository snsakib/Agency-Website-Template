import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
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

  // Adds 'active' class to the clicked link
  // addActiveClass(event: Event) {
  //   (event.target as HTMLAnchorElement).classList.add('active');
  // }

  // Removes 'active' class from the current active link
  // removeActiveClass() {
  //   for (const navItem of this.navItems) {
  //     if (navItem.classList.contains('active')) {
  //       navItem.classList.remove('active');
  //     }
  //   }
  // }

  // Adds click events to all of the links
  // addClickEvents() {
  //   for (const navLink of this.navLinks) {
  //     navLink.addEventListener('click', event => {
  //       this.removeActiveClass();
  //       this.addActiveClass(event);
  //     });
  //   }
  // }

  constructor() {}

  ngOnInit() {
    this.onResize();
  }

  ngAfterViewInit() {
    // this.navLinks = document.getElementsByClassName('nav-link');
    // this.addClickEvents();
  }
}
