import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.scss']
})
export class PortafolioComponent implements OnInit {
  cols: number;

  gridByBreakpoint = {
    lg: 3,
    sm: 2,
    xs: 1,
  };

  portfolios = [
    {
      category: 'Categoría',
      imgSrc: 'https://project-agency.netlify.com/assets/images/portafolio/case-1.png',
      imgAlt: 'Logo of CocaCola',
      title: 'Nombre del caso de éxito 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper libero et tempus bibendum.'
    },
    {
      category: 'Categoría',
      imgSrc: 'https://project-agency.netlify.com/assets/images/portafolio/case-2.png',
      imgAlt: 'Logo of XBox',
      title: 'Nombre del caso de éxito 2',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper libero et tempus bibendum.'
    },
    {
      category: 'Categoría',
      imgSrc: 'https://project-agency.netlify.com/assets/images/portafolio/case-3.png',
      imgAlt: 'Logo of Ford',
      title: 'Nombre del caso de éxito 3',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper libero et tempus bibendum.'
    },
    {
      category: 'Categoría',
      imgSrc: 'https://project-agency.netlify.com/assets/images/portafolio/case-4.png',
      imgAlt: 'Logo of Google',
      title: 'Nombre del caso de éxito 4',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper libero et tempus bibendum.'
    },
    {
      category: 'Categoría',
      imgSrc: 'https://project-agency.netlify.com/assets/images/portafolio/case-5.png',
      imgAlt: 'Logo of Adidas',
      title: 'Nombre del caso de éxito 5',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper libero et tempus bibendum.'
    },
    {
      category: 'Categoría',
      imgSrc: 'https://project-agency.netlify.com/assets/images/portafolio/case-6.png',
      imgAlt: 'Logo of Starbucks',
      title: 'Nombre del caso de éxito 6',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ullamcorper libero et tempus bibendum.'
    }
  ];

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
    .observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Large
    ])
    .subscribe((result) => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.gridByBreakpoint.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.gridByBreakpoint.sm;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.gridByBreakpoint.lg;
        }
      }
    });
  }

  ngOnInit() {}
}
