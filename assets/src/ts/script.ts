import * as utils from './modules/utils';
import AnimationHandler from './modules/animation';
import CarouselHandler from './modules/carousel';

document.addEventListener('DOMContentLoaded', () => {
    const animationHandler = new AnimationHandler;
    animationHandler.init();
    const carouselGroups: NodeListOf<HTMLElement> = document.querySelectorAll('.gallery__group');
    carouselGroups?.forEach((carouselItem) => {
        const caroselHandler = new CarouselHandler(carouselItem);
        caroselHandler.init();
    })
})