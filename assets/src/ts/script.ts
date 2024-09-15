import * as utils from './modules/utils';
import AnimationHandler from './modules/animation';
import CarouselHandler from './modules/carousel';

document.addEventListener('DOMContentLoaded', () => {
    const animationHandler = new AnimationHandler;
    animationHandler.init();
    const caroselHandler = new CarouselHandler;
    caroselHandler.init();
})