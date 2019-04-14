import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  slideIndex = 1;
  slides = document.getElementsByClassName('mySlides');

  showSlides(n) {
    if (n > this.slides.length) {
      this.slideIndex = 1;
    }
    if (n < 1) {
      this.slideIndex = this.slides.length;
    }
    for (let i = 0; i < this.slides.length; i++) {
      (this.slides[i] as HTMLElement).style.display = 'none';
    }
    (this.slides[this.slideIndex - 1] as HTMLElement).style.display = 'block';
  }

  plusSlides(n) {
    this.showSlides((this.slideIndex += n));
  }

  currentSlide(n) {
    this.showSlides((this.slideIndex = n));
  }

  ngAfterViewInit() {
    this.showSlides(this.slideIndex);
  }
}
