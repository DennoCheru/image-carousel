import './style.css';
import { Carousel } from './carousel';

document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');
  carousels.forEach((carouselElement) => {
    const carousel = new Carousel(carouselElement);

    window.nextSlide = carousel.nextSlide;
    window.prevSlide = carousel.prevSlide;
  });
});
