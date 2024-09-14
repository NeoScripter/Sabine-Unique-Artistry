export default class AnimationHandler {
    headerPopup: HTMLElement;
    closePopupBtn: HTMLElement;
    openPopupBtn: HTMLElement;
    popupHiddenClass: string;

    constructor() {
        // Header popup
        this.headerPopup = document.querySelector('.header__popup') as HTMLElement;
        this.closePopupBtn = document.querySelector('#header-popup-close') as HTMLElement;
        this.openPopupBtn = document.querySelector('#header-popup-open') as HTMLElement;
        this.popupHiddenClass = 'header__popup--hidden';
    }

    init() {
        this.toggleHeaderPopup();
    }

    // Header popup
    toggleHeaderPopup() {
        this.openPopupBtn.addEventListener('click', () => {
            this.showPopup();
        })

        this.closePopupBtn.addEventListener('click', () => {
            this.hidePopup();
        })
    }

    showPopup() {
        this.headerPopup.classList.remove(this.popupHiddenClass);
    }

    hidePopup() {
        this.headerPopup.classList.add(this.popupHiddenClass);
    }
}