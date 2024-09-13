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

/***/ "./assets/src/ts/modules/utils.ts":
/*!****************************************!*\
  !*** ./assets/src/ts/modules/utils.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.setupSlidingElement = setupSlidingElement;\nexports.slideUp = slideUp;\nexports.slideDown = slideDown;\nexports.fadeOut = fadeOut;\nexports.fadeIn = fadeIn;\nexports.setTransition = setTransition;\nfunction setupSlidingElement(element, milliseconds = 400) {\n    if (!element.parentElement || !element.parentElement.classList.contains('slideUpParent')) {\n        const parent = document.createElement('div');\n        parent.classList.add('slideUpParent');\n        parent.style.display = 'grid';\n        parent.style.transition = `grid-template-rows ${milliseconds}ms ease-in-out`;\n        element.insertAdjacentElement('afterend', parent);\n        parent.appendChild(element);\n        parent.querySelector('p').style.overflowY = 'hidden';\n        parent.style.gridTemplateRows = '1fr';\n    }\n}\nfunction slideUp(element) {\n    setupSlidingElement(element);\n    const parent = element.parentElement;\n    if (parent && parent.classList.contains('slideUpParent')) {\n        parent.style.gridTemplateRows = '0fr';\n    }\n}\nfunction slideDown(element) {\n    const parent = element.parentElement;\n    if (parent && parent.classList.contains('slideUpParent')) {\n        parent.style.gridTemplateRows = '1fr';\n    }\n}\nfunction fadeOut(element, milliseconds = 400) {\n    setTransition(element, milliseconds, 'opacity', () => {\n        element.style.opacity = '0';\n        element.style.pointerEvents = 'none';\n    });\n}\nfunction fadeIn(element, milliseconds = 400) {\n    setTransition(element, milliseconds, 'opacity', () => {\n        element.style.opacity = '1';\n        element.style.pointerEvents = 'auto';\n    });\n}\nfunction setTransition(element, milliseconds, property, callback) {\n    element.style.transition = `${property} ${milliseconds}ms ease-in-out`;\n    callback(element);\n}\n\n\n//# sourceURL=webpack://uniqueartistry/./assets/src/ts/modules/utils.ts?");

/***/ }),

/***/ "./assets/src/ts/script.ts":
/*!*********************************!*\
  !*** ./assets/src/ts/script.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    var desc = Object.getOwnPropertyDescriptor(m, k);\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\n      desc = { enumerable: true, get: function() { return m[k]; } };\n    }\n    Object.defineProperty(o, k2, desc);\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nconst utils = __importStar(__webpack_require__(/*! ./modules/utils */ \"./assets/src/ts/modules/utils.ts\"));\ndocument.addEventListener('DOMContentLoaded', () => {\n    const openPopupBtn = document.querySelector('#header-popup-open');\n    const closePopupBtn = document.querySelector('#header-popup-close');\n    const popup = document.querySelector('.header__popup');\n    openPopupBtn === null || openPopupBtn === void 0 ? void 0 : openPopupBtn.addEventListener('click', () => {\n        var _a;\n        (_a = utils.fadeIn) === null || _a === void 0 ? void 0 : _a.call(utils, popup);\n    });\n    closePopupBtn === null || closePopupBtn === void 0 ? void 0 : closePopupBtn.addEventListener('click', () => {\n        var _a;\n        (_a = utils.fadeOut) === null || _a === void 0 ? void 0 : _a.call(utils, popup);\n    });\n});\n\n\n//# sourceURL=webpack://uniqueartistry/./assets/src/ts/script.ts?");

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