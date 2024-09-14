export default class AnimationHandler {
    headerPopup: HTMLElement;
    closePopupBtn: HTMLElement;
    openPopupBtn: HTMLElement;
    popupHiddenClass: string;

    imageClassSelector: NodeListOf<HTMLElement>;
    loadedImageClass: string;

    constructor() {
        // Header popup
        this.headerPopup = document.querySelector('.header__popup') as HTMLElement;
        this.closePopupBtn = document.querySelector('#header-popup-close') as HTMLElement;
        this.openPopupBtn = document.querySelector('#header-popup-open') as HTMLElement;
        this.popupHiddenClass = 'header__popup--hidden';

        // Loading images
        this.imageClassSelector = document.querySelectorAll('.image-loading') as NodeListOf<HTMLElement>
        this.loadedImageClass = "image-loaded";
        
    }

    init() {
        this.toggleHeaderPopup();
    }

    // Header popup main function
    toggleHeaderPopup() {
        this.openPopupBtn.addEventListener('click', () => {
            this.showPopup();
        })

        this.closePopupBtn.addEventListener('click', () => {
            this.hidePopup();
        })
    }

    // Header popup helpers

    showPopup() {
        this.headerPopup.classList.remove(this.popupHiddenClass);
    }

    hidePopup() {
        this.headerPopup.classList.add(this.popupHiddenClass);
    }

    // Loading images main function

    imageLoading() {
        const self = this;

        (self.imageClassSelector).forEach((imageWrapper) => {
            const image = imageWrapper.querySelector("img");

            function loaded() {
                imageWrapper.classList.add(self.loadedImageClass);
            }

            if (image?.complete) {
                loaded();
            } else {
                image?.addEventListener("load", loaded);
            }
        });
    }

  /*   setupThemePreference() {
        const prefersDarkScheme = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        document.getElementById(
            prefersDarkScheme ? "dark" : "light"
        ).checked = true;

        const savedTheme = localStorage.getItem("theme") || "light";
        this.applyTheme(savedTheme);

        $('input[name="theme"]').on("change", (e) => {
            var selectedTheme = $(e.target).attr("id");
            localStorage.setItem("theme", selectedTheme);
            this.applyTheme(selectedTheme);
        });
    }

    applyTheme(theme) {
        if (theme === "dark") {
            $("body").attr("data-theme", "dark");
            $("#dark").prop("checked", true);
        } else {
            $("body").attr("data-theme", "light");
            $("#light").prop("checked", true);
        }
    } */
}