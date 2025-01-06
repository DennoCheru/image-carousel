class Carousel {
  constructor(carouselElement) {
    this.carousel = carouselElement;
    this.slides = this.carousel.querySelector('.carousel-slides');
    this.totalSlides = this.slides.children.length;
    this.currentIndex = 0;

    this.showSlide = this.showSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  showSlide(index) {
    if (index < 0) {
      index = this.totalSlides - 1;
    } else if (index >= this.totalSlides) {
      index = 0;
    }
    this.totalSlides.style.transform = `translateX(-${index * 100}%)`;
    this.currentIndex = index;
  }

  nextSlide() {
    this.showSlide(this.currentIndex + 1);
  }

  prevSlide() {
    this.showSlide(this.currentIndex - 1);
  }
}

export { Carousel };
