/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_paralax_js__ = __webpack_require__(1);




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rallax_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rallax_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rallax_js__);

const options = { speed: 0.4 };


//developer way

// const elements = Array.from(document.querySelectorAll('.image-wrapper'))

// elements.map(el => rallax(el, options));

// console.log(elements);


//my way
// const targets = document.querySelectorAll('.section-images .image-wrapper');

// // console.log(target);

// const alltargets = {};

// targets.forEach(function(cv,i){
//     alltargets[i] = rallax(cv, options);
// })


// console.log(alltargets);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define(e):t.rallax=e()}(this,function(){"use strict";var t=function(){function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}(),n=!1,o=[],r=.3,s=!1,a=function(){function o(t,e){var i=e.speed,n=e.mobilePx;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),this.speed=i||r,this.mobilePx=n||s,this.mobileDisable=!1,this.conditions=[],this.active=!0,"string"==typeof(this.target=t)&&(this.target=document.querySelector(""+t)),this.winHeight=window.innerHeight,this.accumulated=0,this.getRect(),this.startScroll=0<this.targetR.top-this.winHeight?this.targetR.top-this.winHeight:0}return t(o,[{key:"stop",value:function(){this.active=!1}},{key:"start",value:function(){this.active=!0}},{key:"getSpeed",value:function(){return this.speed}},{key:"changeSpeed",value:function(t){this.inWindow()&&t!==this.speed&&(this.accumulated=this.getTranslation(),this.startScroll=this.scrollY()),this.speed=t}},{key:"when",value:function(t,e){return this.conditions.push({condition:t,action:e}),this}},{key:"scrollY",value:function(){return window.scrollY||window.pageYOffset}},{key:"getTranslation",value:function(){var t=(this.scrollY()-this.startScroll)*this.speed+this.accumulated;return 0<=t?t:0}},{key:"getRect",value:function(){return this.targetR=this.target.getBoundingClientRect(),this.targetR}},{key:"inWindow",value:function(){this.getRect();var t=this.targetR.top,e=this.targetR.bottom;return t<this.winHeight&&0<e}},{key:"move",value:function(){this.target.style.transform="translateY("+this.getTranslation()+"px)"}}]),o}(),c=function(t){requestAnimationFrame(function(){t.forEach(function(t){t.mobileDisable||(t.conditions.forEach(function(t){var e=t.condition,i=t.action;e()&&i()}),t.active&&t.move())})})},u=function(){var e=window.innerWidth;o.forEach(function(t){t.mobilePx>=e&&(t.mobileDisable=!0)})};return function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=new a(t,e);return o.push(i),u(),n||(window.addEventListener("scroll",function(t){c(o)}),window.addEventListener("resize",function(t){u()}),n=!0),i}});


/***/ })
/******/ ]);