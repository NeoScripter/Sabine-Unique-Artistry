import * as utils from './modules/utils';

document.addEventListener('DOMContentLoaded', () => {
    const openPopupBtn = document.querySelector('#header-popup-open');
    const closePopupBtn = document.querySelector('#header-popup-close');
    const popup = document.querySelector('.header__popup') as HTMLElement;

    openPopupBtn?.addEventListener('click', () => {
        utils.fadeIn?.(popup);
    })

    closePopupBtn?.addEventListener('click', () => {
        utils.fadeOut?.(popup);
    })
})