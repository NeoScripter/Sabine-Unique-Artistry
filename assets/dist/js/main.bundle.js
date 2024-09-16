/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/ts/modules/animation.ts":
/*!********************************************!*\
  !*** ./assets/src/ts/modules/animation.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass AnimationHandler {\n    constructor() {\n        // Header popup\n        this.headerPopup = document.querySelector(\".header__popup\");\n        this.closePopupBtn = document.querySelector(\"#header-popup-close\");\n        this.openPopupBtn = document.querySelector(\"#header-popup-open\");\n        this.popupHiddenClass = \"header__popup--hidden\";\n        // Loading images\n        this.imageClassSelector = document.querySelectorAll(\".image-loading\");\n        this.loadedImageClass = \"image-loaded\";\n        // Theme setup\n        this.themeLabels = document.querySelectorAll(\".header label\");\n        this.themeCheckboxes = document.querySelectorAll('.header input[type=\"checkbox\"]');\n        // FAQ accordion\n        this.faqItem = document.querySelectorAll(\".faq__item\");\n        this.faqItemOpenClass = \"faq__item--open\";\n    }\n    init() {\n        this.toggleHeaderPopup();\n        this.setupTheme();\n        this.imageLoading();\n        this.setupFAQ();\n    }\n    // Header popup main function\n    toggleHeaderPopup() {\n        this.openPopupBtn.addEventListener(\"click\", () => {\n            this.showPopup();\n        });\n        this.closePopupBtn.addEventListener(\"click\", () => {\n            this.hidePopup();\n        });\n    }\n    // Header popup helpers\n    showPopup() {\n        this.headerPopup.classList.remove(this.popupHiddenClass);\n    }\n    hidePopup() {\n        this.headerPopup.classList.add(this.popupHiddenClass);\n    }\n    // Loading images main function\n    imageLoading() {\n        const self = this;\n        self.imageClassSelector.forEach((imageWrapper) => {\n            const image = imageWrapper.querySelector(\"img\");\n            function loaded() {\n                imageWrapper.classList.add(self.loadedImageClass);\n            }\n            if (image === null || image === void 0 ? void 0 : image.complete) {\n                loaded();\n            }\n            else {\n                image === null || image === void 0 ? void 0 : image.addEventListener(\"load\", loaded);\n            }\n        });\n    }\n    // Theme setup\n    setupTheme() {\n        this.checkThemePreference();\n        this.applySavedTheme();\n        this.themeCheckboxes.forEach((checkbox) => {\n            checkbox.addEventListener(\"change\", () => {\n                const selectedTheme = checkbox.checked ? \"dark\" : \"light\";\n                localStorage.setItem(\"theme\", selectedTheme);\n                this.applyTheme(selectedTheme);\n            });\n        });\n    }\n    // Theme setup helpers\n    changeLabelContent(selectedTheme) {\n        this.themeLabels.forEach((label) => {\n            label.textContent = selectedTheme === \"dark\" ? \"Dark Mode\" : \"Light Mode\";\n        });\n    }\n    applyTheme(selectedTheme) {\n        if (selectedTheme === \"dark\") {\n            document.body.setAttribute(\"data-theme\", \"dark\");\n            this.themeCheckboxes.forEach((checkbox) => {\n                checkbox.checked = true;\n            });\n            this.changeLabelContent(\"dark\");\n        }\n        else {\n            document.body.setAttribute(\"data-theme\", \"light\");\n            this.themeCheckboxes.forEach((checkbox) => {\n                checkbox.checked = false;\n            });\n            this.changeLabelContent(\"light\");\n        }\n    }\n    checkThemePreference() {\n        const prefersDarkScheme = window.matchMedia(\"(prefers-color-scheme: dark)\").matches;\n        if (prefersDarkScheme) {\n            this.themeCheckboxes.forEach((checkbox) => {\n                checkbox.checked = true;\n            });\n            this.changeLabelContent(\"dark\");\n        }\n    }\n    applySavedTheme() {\n        const savedTheme = localStorage.getItem(\"theme\") || \"light\";\n        this.applyTheme(savedTheme);\n        this.changeLabelContent(savedTheme);\n    }\n    // FAQ accordion\n    setupFAQ() {\n        if (!this.faqItem) {\n            console.warn(\"No accordion item found!\");\n            return;\n        }\n        const self = this;\n        this.faqItem.forEach((item) => {\n            item.addEventListener(\"click\", function () {\n                self.resetAccordion(item);\n                this.classList.toggle(self.faqItemOpenClass);\n            });\n        });\n    }\n    // FAQ accordion helpers\n    resetAccordion(currentItem) {\n        if (!this.faqItem) {\n            console.warn(\"No accordion item found!\");\n            return;\n        }\n        this.faqItem.forEach((item) => {\n            if (item !== currentItem) {\n                item.classList.remove(this.faqItemOpenClass);\n            }\n        });\n    }\n}\nexports[\"default\"] = AnimationHandler;\n\n\n//# sourceURL=webpack://uniqueartistry/./assets/src/ts/modules/animation.ts?");

/***/ }),

/***/ "./assets/src/ts/modules/carousel.ts":
/*!*******************************************!*\
  !*** ./assets/src/ts/modules/carousel.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass CarouselHandler {\n    constructor(item) {\n        this.slides = [];\n        this.currentSlide = 0;\n        // Touch event properties\n        this.touchStartX = 0;\n        this.touchEndX = 0;\n        this.minSwipeDistance = 50;\n        this.viewport = item.querySelector('.gallery__carousel');\n        this.prevButton = item.querySelector('.gallery__control-btn--prev');\n        this.nextButton = item.querySelector('.gallery__control-btn--next');\n        this.btnWrapper = item.querySelector('.gallery__controls');\n        this.numberOfSlides = 0;\n        this.gapWidth = 0;\n        this.offsetToEnd = 0;\n    }\n    init() {\n        this.extractComputedStyles();\n        this.setupSlides();\n        this.manageBtnState();\n        this.adjustOffsetToEnd();\n        this.attachPrevButtonEvent();\n        this.attachNextButtonEvent();\n        this.attachTouchEvents();\n    }\n    adjustOffsetToEnd() {\n        this.offsetToEnd = this.slides.length - 2;\n        if (this.numberOfSlides === 3) {\n            this.offsetToEnd = this.slides.length - 3;\n            return;\n        }\n    }\n    extractComputedStyles() {\n        if (!this.viewport) {\n            console.warn(\"can't find the viewport\");\n            return;\n        }\n        const styles = getComputedStyle(this.viewport);\n        this.numberOfSlides = Number(styles.getPropertyValue('--_slides').trim());\n        const gapWidthRem = styles.getPropertyValue('--_gap').trim();\n        this.gapWidth = Number(gapWidthRem.slice(0, -3)) * 16;\n    }\n    manageBtnState() {\n        if (!this.btnWrapper) {\n            console.warn(\"can't find the carousel controls\");\n            return;\n        }\n        const viewportWidthInSlides = this.numberOfSlides;\n        const currentNumberOfSlides = this.slides.length;\n        if (viewportWidthInSlides >= currentNumberOfSlides) {\n            this.btnWrapper.style.display = 'none';\n        }\n    }\n    setupSlides() {\n        if (!this.viewport) {\n            console.warn('Viewport element not found.');\n            return;\n        }\n        this.slides = Array.from(this.viewport.children);\n    }\n    updateSlidePosition() {\n        if (!this.viewport || this.slides.length === 0)\n            return;\n        const viewportWidth = this.viewport.offsetWidth;\n        const offset = ((viewportWidth / this.numberOfSlides) + (this.gapWidth / this.numberOfSlides)) * this.currentSlide;\n        this.viewport.style.transform = `translateX(${-offset}px)`;\n    }\n    attachPrevButtonEvent() {\n        if (this.prevButton) {\n            this.prevButton.addEventListener('click', () => {\n                this.goToPreviousSlide();\n            });\n        }\n    }\n    attachNextButtonEvent() {\n        if (this.nextButton) {\n            this.nextButton.addEventListener('click', () => {\n                this.goToNextSlide();\n            });\n        }\n    }\n    // Methods to navigate slides\n    goToPreviousSlide() {\n        if (this.currentSlide > 0) {\n            this.currentSlide--;\n            this.updateSlidePosition();\n        }\n    }\n    goToNextSlide() {\n        if (this.currentSlide < this.offsetToEnd) {\n            this.currentSlide++;\n            this.updateSlidePosition();\n        }\n    }\n    // Touch event handlers\n    attachTouchEvents() {\n        if (!this.viewport)\n            return;\n        const viewportWidthInSlides = this.numberOfSlides;\n        const currentNumberOfSlides = this.slides.length;\n        if (viewportWidthInSlides >= currentNumberOfSlides) {\n            return;\n        }\n        this.viewport.addEventListener('touchstart', (e) => this.handleTouchStart(e), false);\n        this.viewport.addEventListener('touchmove', (e) => this.handleTouchMove(e), false);\n        this.viewport.addEventListener('touchend', () => this.handleTouchEnd(), false);\n    }\n    handleTouchStart(e) {\n        this.touchStartX = e.touches[0].clientX;\n    }\n    handleTouchMove(e) {\n        this.touchEndX = e.touches[0].clientX;\n    }\n    handleTouchEnd() {\n        const deltaX = this.touchEndX - this.touchStartX;\n        if (Math.abs(deltaX) > this.minSwipeDistance) {\n            if (deltaX > 0) {\n                // Swipe right\n                this.goToPreviousSlide();\n            }\n            else {\n                // Swipe left\n                this.goToNextSlide();\n            }\n        }\n    }\n}\nexports[\"default\"] = CarouselHandler;\n\n\n//# sourceURL=webpack://uniqueartistry/./assets/src/ts/modules/carousel.ts?");

/***/ }),

/***/ "./assets/src/ts/script.ts":
/*!*********************************!*\
  !*** ./assets/src/ts/script.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst animation_1 = __importDefault(__webpack_require__(/*! ./modules/animation */ \"./assets/src/ts/modules/animation.ts\"));\nconst carousel_1 = __importDefault(__webpack_require__(/*! ./modules/carousel */ \"./assets/src/ts/modules/carousel.ts\"));\ndocument.addEventListener('DOMContentLoaded', () => {\n    const animationHandler = new animation_1.default;\n    animationHandler.init();\n    const carouselGroups = document.querySelectorAll('.gallery__group');\n    carouselGroups === null || carouselGroups === void 0 ? void 0 : carouselGroups.forEach((carouselItem) => {\n        const caroselHandler = new carousel_1.default(carouselItem);\n        caroselHandler.init();\n    });\n});\n\n\n//# sourceURL=webpack://uniqueartistry/./assets/src/ts/script.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./assets/src/ts/script.ts");
/******/ 	
/******/ })()
;