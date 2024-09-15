export default class CarouselHandler {
    private slides: HTMLElement[] = [];
    private currentSlide: number = 0;
    private viewportSelector: string = '.gallery__carousel';
    private prevButtonSelector: string = '.gallery__control-btn--prev';
    private nextButtonSelector: string = '.gallery__control-btn--next';

    // Touch event properties
    private touchStartX: number = 0;
    private touchEndX: number = 0;
    private minSwipeDistance: number = 50; // Adjust as needed

    constructor() {
        // Initialization is handled in property declarations
    }

    public init(): void {
        this.setupSlides();
        this.attachPrevButtonEvent();
        this.attachNextButtonEvent();
        this.attachTouchEvents();
    }

    private setupSlides(): void {
        const viewportElement = document.querySelector(this.viewportSelector) as HTMLElement;
        if (!viewportElement) {
            console.warn('Viewport element not found.');
            return;
        }

        this.slides = Array.from(viewportElement.children) as HTMLElement[];
    }

    private updateSlidePosition(): void {
        const viewportElement = document.querySelector(this.viewportSelector) as HTMLElement;
        if (!viewportElement || this.slides.length === 0) return;

        const styles = getComputedStyle(viewportElement);
        const slideNumber: string = styles.getPropertyValue('--_slides').trim();

        const viewportWidth = viewportElement.offsetWidth;
        const offset = viewportWidth * this.currentSlide / Number(slideNumber);
        viewportElement.style.transform = `translateX(${-offset}px)`;
    }

    private attachPrevButtonEvent(): void {
        const prevButton = document.querySelector(this.prevButtonSelector) as HTMLElement;
        if (prevButton) {
            prevButton.addEventListener('click', () => {
                this.goToPreviousSlide();
            });
        } else {
            console.warn('Previous button not found.');
        }
    }

    private attachNextButtonEvent(): void {
        const nextButton = document.querySelector(this.nextButtonSelector) as HTMLElement;
        if (nextButton) {
            nextButton.addEventListener('click', () => {
                this.goToNextSlide();
            });
        } else {
            console.warn('Next button not found.');
        }
    }

    // Methods to navigate slides
    private goToPreviousSlide(): void {
        if (this.currentSlide > 0) {
            this.currentSlide--;
            this.updateSlidePosition();
        }
    }

    private goToNextSlide(): void {
        if (this.currentSlide < this.slides.length - 1) {
            this.currentSlide++;
            this.updateSlidePosition();
        }
    }

    // Touch event handlers
    private attachTouchEvents(): void {
        const viewportElement = document.querySelector(this.viewportSelector) as HTMLElement;
        if (!viewportElement) return;

        viewportElement.addEventListener('touchstart', (e: TouchEvent) => this.handleTouchStart(e), false);
        viewportElement.addEventListener('touchmove', (e: TouchEvent) => this.handleTouchMove(e), false);
        viewportElement.addEventListener('touchend', () => this.handleTouchEnd(), false);
    }

    private handleTouchStart(e: TouchEvent): void {
        this.touchStartX = e.touches[0].clientX;
    }

    private handleTouchMove(e: TouchEvent): void {
        this.touchEndX = e.touches[0].clientX;
    }

    private handleTouchEnd(): void {
        const deltaX = this.touchEndX - this.touchStartX;
        if (Math.abs(deltaX) > this.minSwipeDistance) {
            if (deltaX > 0) {
                // Swipe right
                this.goToPreviousSlide();
            } else {
                // Swipe left
                this.goToNextSlide();
            }
        }
    }
}
