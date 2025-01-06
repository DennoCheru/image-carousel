class Carousel {
  constructor(carouselElement) {
    this.carousel = carouselElement;
    this.slides = this.carousel.querySelector('.carousel-slides');
    this.totalSlides = this.slides.children.length || 0;
    this.currentIndex = 0;

    this.dotsContainer = this.carousel.querySelector('.carousel-dots');
    this.dots = [];

    for (let i = 0; i < this.totalSlides; i++) {
      const dot = document.createElement('div');
      dot.classList.add('carousel-dot');
      dot.addEventListener('click', () => this.showSlide(i));
      this.dotsContainer.appendChild(dot);
      this.dots.push(dot);
    }

    this.showSlide = this.showSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);

    this.addEventListeners();
    this.autoSlideInterval = setInterval(this.nextSlide, 5000);
    this.updateDots();
  }

  showSlide(index) {
    if (index < 0) {
      index = this.totalSlides - 1;
    } else if (index >= this.totalSlides) {
      index = 0;
    }

    this.currentIndex = index;

    this.slides.style.transform = `translateX(-${index * 100}%)`;

    this.updateDots();
  }

  nextSlide() {
    this.showSlide(this.currentIndex + 1);
  }

  prevSlide() {
    this.showSlide(this.currentIndex - 1);
  }

  updateDots() {
    this.dots.forEach((dot, index) => {
      dot.classList.remove('active');
      if (index === this.currentIndex) {
        dot.classList.add('active');
      }
    });
  }

  addEventListeners() {
    const nextButton = this.carousel.querySelector('.next-button');
    const prevButton = this.carousel.querySelector('.prev-button');

    if (nextButton) nextButton.addEventListener('click', this.nextSlide);
    if (prevButton) prevButton.addEventListener('click', this.prevSlide);
  }
}

export { Carousel };
