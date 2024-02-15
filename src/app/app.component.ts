import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SlickCarouselModule } from 'ngx-slick-carousel';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgOptimizedImage, SlickCarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'arttteo-test';

  words = [
    'Exceptional SEO?',
    'Your Own AI?',
    'A Developer?',
    'A Tech Team?',
    'Exceptional SEO?',
  ];


  links = [
    'Expertise',
    'Our works',
    'Services',
    'Blog',
    'Contact',
  ];

  logos = [
    { path: '../assets/img/1.png'},
    { path: '../assets/img/2.png'},
    { path: '../assets/img/3.png'},
    { path: '../assets/img/4.png'},
    { path: '../assets/img/5.png'},
    { path: '../assets/img/4.png'},
  ]

  trackWord(index: number, word: string) {
    return word;
  }
  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    infinite: true,
    rows: 1,
    swipeToSlide: true,
    arrows: false,
  };
}

