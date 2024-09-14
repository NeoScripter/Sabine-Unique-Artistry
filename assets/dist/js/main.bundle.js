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

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nclass AnimationHandler {\n    constructor() {\n        // Header popup\n        this.headerPopup = document.querySelector('.header__popup');\n        this.closePopupBtn = document.querySelector('#header-popup-close');\n        this.openPopupBtn = document.querySelector('#header-popup-open');\n        this.popupHiddenClass = 'header__popup--hidden';\n        // Loading images\n        this.imageClassSelector = document.querySelectorAll('.image-loading');\n        this.loadedImageClass = \"image-loaded\";\n    }\n    init() {\n        this.toggleHeaderPopup();\n    }\n    // Header popup main function\n    toggleHeaderPopup() {\n        this.openPopupBtn.addEventListener('click', () => {\n            this.showPopup();\n        });\n        this.closePopupBtn.addEventListener('click', () => {\n            this.hidePopup();\n        });\n    }\n    // Header popup helpers\n    showPopup() {\n        this.headerPopup.classList.remove(this.popupHiddenClass);\n    }\n    hidePopup() {\n        this.headerPopup.classList.add(this.popupHiddenClass);\n    }\n    // Loading images main function\n    imageLoading() {\n        const self = this;\n        (self.imageClassSelector).forEach((imageWrapper) => {\n            const image = imageWrapper.querySelector(\"img\");\n            function loaded() {\n                imageWrapper.classList.add(self.loadedImageClass);\n            }\n            if (image === null || image === void 0 ? void 0 : image.complete) {\n                loaded();\n            }\n            else {\n                image === null || image === void 0 ? void 0 : image.addEventListener(\"load\", loaded);\n            }\n        });\n    }\n}\nexports[\"default\"] = AnimationHandler;\n\n\n//# sourceURL=webpack://uniqueartistry/./assets/src/ts/modules/animation.ts?");

/***/ }),

/***/ "./assets/src/ts/script.ts":
/*!*********************************!*\
  !*** ./assets/src/ts/script.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst animation_1 = __importDefault(__webpack_require__(/*! ./modules/animation */ \"./assets/src/ts/modules/animation.ts\"));\ndocument.addEventListener('DOMContentLoaded', () => {\n    const animationHandler = new animation_1.default;\n    animationHandler.init();\n});\n\n\n//# sourceURL=webpack://uniqueartistry/./assets/src/ts/script.ts?");

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