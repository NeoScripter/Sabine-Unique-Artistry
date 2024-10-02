export default class AnimationHandler {
    headerPopup: HTMLElement;
    closePopupBtn: HTMLElement;
    openPopupBtn: HTMLElement;
    popupHiddenClass: string;

    imageClassSelector: NodeListOf<HTMLElement>;
    loadedImageClass: string;

    themeLabels: NodeListOf<HTMLElement>;
    themeCheckboxes: NodeListOf<HTMLInputElement>;

    faqItem: NodeListOf<HTMLElement>;
    faqItemOpenClass: string;

    itemHeroImage: HTMLImageElement | null;
    itemImage: NodeListOf<HTMLElement> | null;

    orderFormOverlay: HTMLElement | null;
    orderFormVisibleClass: string;
    orderFormCloseBtn: HTMLElement | null;
    orderFormOpenBtn: HTMLElement | null;

    constructor() {
        // Header popup
        this.headerPopup = document.querySelector(".header__popup") as HTMLElement;
        this.closePopupBtn = document.querySelector("#header-popup-close") as HTMLElement;
        this.openPopupBtn = document.querySelector("#header-popup-open") as HTMLElement;
        this.popupHiddenClass = "header__popup--hidden";

        // Loading images
        this.imageClassSelector = document.querySelectorAll(".image-loading") as NodeListOf<HTMLElement>;
        this.loadedImageClass = "image-loaded";

        // Theme setup
        this.themeLabels = document.querySelectorAll(".header label") as NodeListOf<HTMLElement>;
        this.themeCheckboxes = document.querySelectorAll('.header input[type="checkbox"]') as NodeListOf<HTMLInputElement>;

        // FAQ accordion
        this.faqItem = document.querySelectorAll(".faq__item");
        this.faqItemOpenClass = "faq__item--open";

        // Item Image Selection
        this.itemHeroImage = document.querySelector('#item-hero');
        this.itemImage = document.querySelectorAll('.item__image');

        // Order Form Popup
        this.orderFormVisibleClass = 'item__popup-overlay--visible';
        this.orderFormOverlay = document.querySelector('.item__popup-overlay');
        this.orderFormCloseBtn = document.querySelector('.webform__close-popup');
        this.orderFormOpenBtn = document.querySelector('.item__btn');
    }

    init() {
        this.toggleHeaderPopup();
        this.setupTheme();
        this.imageLoading();
        this.setupFAQ();
        this.displaySelectedItemImage();
        this.showAndHideFormPopup();
    }

    // Order Form Popup
    showAndHideFormPopup() {
        if (!this.orderFormVisibleClass || !this.orderFormOverlay || !this.orderFormCloseBtn || !this.orderFormOpenBtn) return

        this.orderFormOpenBtn.addEventListener('click', () => {
            if (!this.orderFormOverlay) return

            this.orderFormOverlay.style.display = 'block';
            setTimeout(() => {
                this.orderFormOverlay?.classList.add(this.orderFormVisibleClass);
            }, 100);
        })

        this.orderFormCloseBtn.addEventListener('click', () => {
            if (!this.orderFormOverlay) return

            this.orderFormOverlay.classList.remove(this.orderFormVisibleClass);
            setTimeout(() => {
                if (!this.orderFormOverlay) return
                this.orderFormOverlay.style.display = 'none';
            }, 500);
        })
    }

    // Item Image Selection
    displaySelectedItemImage() {
        if (!this.itemHeroImage || !this.itemImage) return

        this.itemImage.forEach(image => {
            image.addEventListener('click', () => {
                const imageInside = image.querySelector('img');
                if (imageInside) {
                    this.itemHeroImage!.src = imageInside.src;
                }
            })
        })
    }

    // Header popup main function
    toggleHeaderPopup() {
        this.openPopupBtn.addEventListener("click", () => {
            this.showPopup();
        });

        this.closePopupBtn.addEventListener("click", () => {
            this.hidePopup();
        });
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

        self.imageClassSelector.forEach((imageWrapper) => {
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

    // Theme setup

    setupTheme() {
        this.checkThemePreference();
        this.applySavedTheme();
        this.themeCheckboxes.forEach((checkbox) => {
            checkbox.addEventListener("change", () => {
                const selectedTheme = checkbox.checked ? "dark" : "light";
                localStorage.setItem("theme", selectedTheme);
                this.applyTheme(selectedTheme);
            });
        });
    }

    // Theme setup helpers

    changeLabelContent(selectedTheme: string) {
        this.themeLabels.forEach((label) => {
            label.textContent = selectedTheme === "dark" ? "Dark Mode" : "Light Mode";
        });
    }

    applyTheme(selectedTheme: string) {
        if (selectedTheme === "dark") {
            document.body.setAttribute("data-theme", "dark");
            this.themeCheckboxes.forEach((checkbox) => {
                checkbox.checked = true;
            });
            this.changeLabelContent("dark");
        } else {
            document.body.setAttribute("data-theme", "light");
            this.themeCheckboxes.forEach((checkbox) => {
                checkbox.checked = false;
            });
            this.changeLabelContent("light");
        }
    }

    checkThemePreference() {
        const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

        if (prefersDarkScheme) {
            this.themeCheckboxes.forEach((checkbox) => {
                checkbox.checked = true;
            });
            this.changeLabelContent("dark");
        }
    }

    applySavedTheme() {
        const savedTheme = localStorage.getItem("theme") || "light";
        this.applyTheme(savedTheme);
        this.changeLabelContent(savedTheme);
    }

    // FAQ accordion

    setupFAQ() {
        if (!this.faqItem) {
            console.warn("No accordion item found!");
            return;
        }
        const self = this;
        this.faqItem.forEach((item) => {
            item.addEventListener("click", function () {
                self.resetAccordion(item);
                this.classList.toggle(self.faqItemOpenClass);
            });
        });
    }

    // FAQ accordion helpers

    resetAccordion(currentItem: HTMLElement) {
        if (!this.faqItem) {
            console.warn("No accordion item found!");
            return;
        }
        this.faqItem.forEach((item) => {
            if (item !== currentItem) {
                item.classList.remove(this.faqItemOpenClass);
            }
        });
    }
}
