import * as utils from './modules/utils';
import AnimationHandler from './modules/animation';

document.addEventListener('DOMContentLoaded', () => {
    const animationHandler = new AnimationHandler;
    animationHandler.init();
})