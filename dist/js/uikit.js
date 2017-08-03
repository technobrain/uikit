(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define(["jQuery"], factory);
	else if(typeof exports === 'object')
		exports["UIkit"] = factory(require("jQuery"));
	else
		root["UIkit"] = factory(root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 80);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom__ = __webpack_require__(56);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "win", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "doc", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "docElement", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isRtl", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isReady", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ready", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "on", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "off", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "one", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "trigger", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$trigger", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "transition", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "animate", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isJQuery", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isWithin", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "attrFilter", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "createEvent", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isInView", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "scrolledOver", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "docHeight", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getIndex", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isVoidElement", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Dimensions", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["s"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "query", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "preventClick", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["B"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getData", function() { return __WEBPACK_IMPORTED_MODULE_0__dom__["C"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__env__ = __webpack_require__(57);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return __WEBPACK_IMPORTED_MODULE_1__env__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return __WEBPACK_IMPORTED_MODULE_1__env__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hasPromise", function() { return __WEBPACK_IMPORTED_MODULE_1__env__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hasTouch", function() { return __WEBPACK_IMPORTED_MODULE_1__env__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pointerDown", function() { return __WEBPACK_IMPORTED_MODULE_1__env__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pointerMove", function() { return __WEBPACK_IMPORTED_MODULE_1__env__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pointerUp", function() { return __WEBPACK_IMPORTED_MODULE_1__env__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pointerEnter", function() { return __WEBPACK_IMPORTED_MODULE_1__env__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "pointerLeave", function() { return __WEBPACK_IMPORTED_MODULE_1__env__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "transitionend", function() { return __WEBPACK_IMPORTED_MODULE_1__env__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "animationstart", function() { return __WEBPACK_IMPORTED_MODULE_1__env__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "animationend", function() { return __WEBPACK_IMPORTED_MODULE_1__env__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getStyle", function() { return __WEBPACK_IMPORTED_MODULE_1__env__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getCssVar", function() { return __WEBPACK_IMPORTED_MODULE_1__env__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getImage", function() { return __WEBPACK_IMPORTED_MODULE_1__env__["o"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fastdom__ = __webpack_require__(58);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "fastdom", function() { return __WEBPACK_IMPORTED_MODULE_2__fastdom__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lang__ = __webpack_require__(7);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "$", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["r"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ajax", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["v"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "each", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["j"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Event", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNumeric", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["w"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "bind", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["x"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hasOwn", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["p"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "promise", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "classify", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "hyphenate", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["y"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "camelize", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["z"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["m"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["n"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["A"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isPlainObject", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["B"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["i"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["o"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isContextSelector", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["C"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getContextSelectors", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["k"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toJQuery", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["l"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toNode", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toBoolean", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["D"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["t"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toList", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["E"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toMedia", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["F"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "coerce", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["G"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "toMs", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["q"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "swap", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["u"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "assign", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["g"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "clamp", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["h"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return __WEBPACK_IMPORTED_MODULE_3__lang__["s"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mouse__ = __webpack_require__(59);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MouseTracker", function() { return __WEBPACK_IMPORTED_MODULE_4__mouse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__options__ = __webpack_require__(60);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "mergeOptions", function() { return __WEBPACK_IMPORTED_MODULE_5__options__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__player__ = __webpack_require__(61);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return __WEBPACK_IMPORTED_MODULE_6__player__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__position__ = __webpack_require__(62);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "position", function() { return __WEBPACK_IMPORTED_MODULE_7__position__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "getDimensions", function() { return __WEBPACK_IMPORTED_MODULE_7__position__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "offset", function() { return __WEBPACK_IMPORTED_MODULE_7__position__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "offsetTop", function() { return __WEBPACK_IMPORTED_MODULE_7__position__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "flipPosition", function() { return __WEBPACK_IMPORTED_MODULE_7__position__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__touch__ = __webpack_require__(63);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "isTouch", function() { return __WEBPACK_IMPORTED_MODULE_8__touch__["a"]; });











/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__class__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__position__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__togglable__ = __webpack_require__(6);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__class__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__modal__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__position__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__togglable__["a"]; });







/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.mixin.class = __WEBPACK_IMPORTED_MODULE_0__class__["a" /* default */];
    UIkit.mixin.modal = __WEBPACK_IMPORTED_MODULE_1__modal__["a" /* default */];
    UIkit.mixin.position = __WEBPACK_IMPORTED_MODULE_2__position__["a" /* default */];
    UIkit.mixin.togglable = __WEBPACK_IMPORTED_MODULE_3__togglable__["a" /* default */];

};


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__global__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hooks__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__state__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instance__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__class__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__util_index__ = __webpack_require__(0);








var UIkit = function (options) {
    this._init(options);
};

UIkit.util = __WEBPACK_IMPORTED_MODULE_6__util_index__;
UIkit.data = '__uikit__';
UIkit.prefix = 'uk-';
UIkit.options = {};
UIkit.instances = {};
UIkit.elements = [];

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__global__["a" /* default */])(UIkit);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__hooks__["a" /* default */])(UIkit);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__state__["a" /* default */])(UIkit);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__instance__["a" /* default */])(UIkit);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__component__["a" /* default */])(UIkit);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__class__["a" /* default */])(UIkit);

/* harmony default export */ __webpack_exports__["a"] = UIkit;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    var doc = document.documentElement;
    var connect = UIkit.connect;
    var disconnect = UIkit.disconnect;

    if (__WEBPACK_IMPORTED_MODULE_0__util_index__["Observer"]) {

        if (document.body) {

            init();

        } else {

            (new __WEBPACK_IMPORTED_MODULE_0__util_index__["Observer"](function () {

                if (document.body) {
                    this.disconnect();
                    init();
                }

            })).observe(doc, {childList: true, subtree: true});

        }

    } else {

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["ready"])(function () {
            apply(document.body, connect);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["on"])(doc, 'DOMNodeInserted', function (e) { return apply(e.target, connect); });
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["on"])(doc, 'DOMNodeRemoved', function (e) { return apply(e.target, disconnect); });
        });

    }

    function init() {

        apply(document.body, connect);

        __WEBPACK_IMPORTED_MODULE_0__util_index__["fastdom"].flush();

        (new __WEBPACK_IMPORTED_MODULE_0__util_index__["Observer"](function (mutations) { return mutations.forEach(function (ref) {
                var addedNodes = ref.addedNodes;
                var removedNodes = ref.removedNodes;
                var target = ref.target;


                for (var i = 0; i < addedNodes.length; i++) {
                    apply(addedNodes[i], connect)
                }

                for (i = 0; i < removedNodes.length; i++) {
                    apply(removedNodes[i], disconnect)
                }

                UIkit.update('update', target, true);

            }); }
        )).observe(doc, {childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['href']});

        UIkit._initialized = true;
    }

    function apply(node, fn) {

        if (node.nodeType !== Node.ELEMENT_NODE || node.hasAttribute('uk-no-boot')) {
            return;
        }

        fn(node);
        node = node.firstChild;
        while (node) {
            var next = node.nextSibling;
            apply(node, fn);
            node = next;
        }
    }

};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {

    init: function init() {
        this.$addClass(this.$name);
    }

};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = {

    props: {
        cls: Boolean,
        animation: 'list',
        duration: Number,
        origin: String,
        transition: String,
        queued: Boolean
    },

    defaults: {
        cls: false,
        animation: [false],
        duration: 200,
        origin: false,
        transition: 'linear',
        queued: false,

        initProps: {
            overflow: '',
            height: '',
            paddingTop: '',
            paddingBottom: '',
            marginTop: '',
            marginBottom: ''
        },

        hideProps: {
            overflow: 'hidden',
            height: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginTop: 0,
            marginBottom: 0
        }

    },

    computed: {

        hasAnimation: function hasAnimation() {
            return !!this.animation[0];
        },

        hasTransition: function hasTransition() {
            return this.hasAnimation && this.animation[0] === true;
        }

    },

    methods: {

        toggleElement: function toggleElement(targets, show, animate) {
            var this$1 = this;

            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["promise"])(function (resolve) {

                var toggles, body = document.body, scroll = body.scrollTop,
                    all = function (targets) { return __WEBPACK_IMPORTED_MODULE_1__util_index__["promise"].all(targets.toArray().map(function (el) { return this$1._toggleElement(el, show, animate); })); },
                    delay = function (targets) {
                        var def = all(targets);
                        this$1._queued = null;
                        body.scrollTop = scroll;
                        return def;
                    };

                targets = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(targets);

                if (!this$1.hasAnimation || !this$1.queued || targets.length < 2) {
                    return all(targets).then(resolve, __WEBPACK_IMPORTED_MODULE_1__util_index__["noop"]);
                }

                if (this$1._queued) {
                    return delay(targets.not(this$1._queued)).then(resolve, __WEBPACK_IMPORTED_MODULE_1__util_index__["noop"]);
                }

                this$1._queued = targets.not(toggles = targets.filter(function (_, el) { return this$1.isToggled(el); }));

                return all(toggles).then(function () { return this$1._queued && delay(this$1._queued); }).then(resolve, __WEBPACK_IMPORTED_MODULE_1__util_index__["noop"]);

            });
        },

        toggleNow: function toggleNow(targets, show) {
            var this$1 = this;

            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["promise"])(function (resolve) { return __WEBPACK_IMPORTED_MODULE_1__util_index__["promise"].all(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(targets).toArray().map(function (el) { return this$1._toggleElement(el, show, false); })).then(resolve, __WEBPACK_IMPORTED_MODULE_1__util_index__["noop"]); });
        },

        isToggled: function isToggled(el) {
            el = el && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(el) || this.$el;
            return this.cls ? el.hasClass(this.cls.split(' ')[0]) : !el.attr('hidden');
        },

        updateAria: function updateAria(el) {
            if (this.cls === false) {
                el.attr('aria-hidden', !this.isToggled(el));
            }
        },

        _toggleElement: function _toggleElement(el, show, animate) {
            var this$1 = this;


            el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(el);

            if (__WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].inProgress(el)) {
                return __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].cancel(el).then(function () { return this$1._toggleElement(el, show, animate); });
            }

            show = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["isBoolean"])(show) ? show : !this.isToggled(el);

            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$trigger"])(el, ("before" + (show ? 'show' : 'hide')), [this]).result === false) {
                return __WEBPACK_IMPORTED_MODULE_1__util_index__["promise"].reject();
            }

            var def = (animate === false || !this.hasAnimation
                ? this._toggleImmediate
                : this.hasTransition
                    ? this._toggleHeight
                    : this._toggleAnimation
            )(el, show);

            var e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["Event"])(show ? 'show' : 'hide');
            e.preventDefault(); // workaround for Prototype and MooTools: it keeps jQuery from calling show or hide on the Element itself
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$trigger"])(el, e, [this]);

            return def.then(function () {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$trigger"])(el, show ? 'shown' : 'hidden', [this$1]);
                __WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */].update(null, el);
            });
        },

        _toggle: function _toggle(el, toggled) {

            el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(el);

            if (this.cls) {
                el.toggleClass(this.cls, ~this.cls.indexOf(' ') ? undefined : toggled);
            } else {
                el.attr('hidden', !toggled);
            }

            el.find('[autofocus]:visible').focus();

            this.updateAria(el);
            __WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */].update(null, el);
        },

        _toggleImmediate: function _toggleImmediate(el, show) {
            this._toggle(el, show);
            return __WEBPACK_IMPORTED_MODULE_1__util_index__["promise"].resolve();
        },

        _toggleHeight: function _toggleHeight(el, show) {
            var this$1 = this;


            var inProgress = __WEBPACK_IMPORTED_MODULE_1__util_index__["Transition"].inProgress(el),
                inner = parseFloat(el.children().first().css('margin-top')) + parseFloat(el.children().last().css('margin-bottom')),
                height = el[0].offsetHeight ? el.height() + (inProgress ? 0 : inner) : 0,
                endHeight;

            return __WEBPACK_IMPORTED_MODULE_1__util_index__["Transition"].cancel(el).then(function () {

                if (__WEBPACK_IMPORTED_MODULE_1__util_index__["Transition"].inProgress(el)) {
                    return __WEBPACK_IMPORTED_MODULE_1__util_index__["promise"].resolve().then(function () { return this$1._toggleHeight(el, show); });
                }

                if (!this$1.isToggled(el)) {
                    this$1._toggle(el, true);
                }

                el.height('');

                // Update child components first
                __WEBPACK_IMPORTED_MODULE_1__util_index__["fastdom"].flush();

                endHeight = el.height() + (inProgress ? 0 : inner);
                el.height(height);

                return (show
                    ? __WEBPACK_IMPORTED_MODULE_1__util_index__["Transition"].start(el, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["assign"])(this$1.initProps, {overflow: 'hidden', height: endHeight}), Math.round(this$1.duration * (1 - height / endHeight)), this$1.transition)
                    : __WEBPACK_IMPORTED_MODULE_1__util_index__["Transition"].start(el, this$1.hideProps, Math.round(this$1.duration * (height / endHeight)), this$1.transition).then(function () {
                        this$1._toggle(el, false);
                        el.css(this$1.initProps);
                    }));
            });

        },

        _toggleAnimation: function _toggleAnimation(el, show) {
            var this$1 = this;


            if (show) {
                this._toggle(el, true);
                return __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].in(el, this.animation[0], this.duration, this.origin);
            }

            return __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].out(el, this.animation[1] || this.animation[0], this.duration, this.origin).then(function () { return this$1._toggle(el, false); });
        }

    }

};


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(0);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "r", function() { return __WEBPACK_IMPORTED_MODULE_0_jquery___default.a; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_jquery__, "ajax")) __webpack_require__.d(__webpack_exports__, "v", function() { return __WEBPACK_IMPORTED_MODULE_0_jquery__["ajax"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_jquery__, "each")) __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0_jquery__["each"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_jquery__, "Event")) __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0_jquery__["Event"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0_jquery__, "isNumeric")) __webpack_require__.d(__webpack_exports__, "w", function() { return __WEBPACK_IMPORTED_MODULE_0_jquery__["isNumeric"]; });
/* harmony export (immutable) */ __webpack_exports__["x"] = bind;
/* harmony export (immutable) */ __webpack_exports__["p"] = hasOwn;
/* harmony export (immutable) */ __webpack_exports__["b"] = promise;
/* harmony export (immutable) */ __webpack_exports__["c"] = classify;
/* harmony export (immutable) */ __webpack_exports__["y"] = hyphenate;
/* harmony export (immutable) */ __webpack_exports__["z"] = camelize;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return isArray; });
/* harmony export (immutable) */ __webpack_exports__["n"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["A"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["B"] = isPlainObject;
/* harmony export (immutable) */ __webpack_exports__["d"] = isBoolean;
/* harmony export (immutable) */ __webpack_exports__["f"] = isString;
/* harmony export (immutable) */ __webpack_exports__["i"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["o"] = isUndefined;
/* harmony export (immutable) */ __webpack_exports__["C"] = isContextSelector;
/* harmony export (immutable) */ __webpack_exports__["k"] = getContextSelectors;
/* harmony export (immutable) */ __webpack_exports__["l"] = toJQuery;
/* harmony export (immutable) */ __webpack_exports__["a"] = toNode;
/* harmony export (immutable) */ __webpack_exports__["D"] = toBoolean;
/* harmony export (immutable) */ __webpack_exports__["t"] = toNumber;
/* harmony export (immutable) */ __webpack_exports__["E"] = toList;
/* harmony export (immutable) */ __webpack_exports__["F"] = toMedia;
/* harmony export (immutable) */ __webpack_exports__["G"] = coerce;
/* harmony export (immutable) */ __webpack_exports__["q"] = toMs;
/* harmony export (immutable) */ __webpack_exports__["u"] = swap;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return assign; });
/* harmony export (immutable) */ __webpack_exports__["h"] = clamp;
/* harmony export (immutable) */ __webpack_exports__["s"] = noop;






function bind(fn, context) {
    return function (a) {
        var l = arguments.length;
        return l ? l > 1 ? fn.apply(context, arguments) : fn.call(context, a) : fn.call(context);
    };
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn(obj, key) {
    return hasOwnProperty.call(obj, key);
}

function promise(executor) {

    if (__WEBPACK_IMPORTED_MODULE_1__index__["hasPromise"]) {
        return new Promise(executor);
    }

    var def = __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.Deferred();

    executor(def.resolve, def.reject);

    return def;
}

promise.resolve = function (value) {
    return promise(function (resolve) {
        resolve(value);
    });
};

promise.reject = function (value) {
    return promise(function (_, reject) {
        reject(value);
    });
};

promise.all = function (iterable) {
    return __WEBPACK_IMPORTED_MODULE_1__index__["hasPromise"]
        ? Promise.all(iterable)
        : __WEBPACK_IMPORTED_MODULE_0_jquery___default.a.when.apply(__WEBPACK_IMPORTED_MODULE_0_jquery___default.a, iterable);
};

function classify(str) {
    return str.replace(/(?:^|[-_\/])(\w)/g, function (_, c) { return c ? c.toUpperCase() : ''; });
}

function hyphenate(str) {
    return str
        .replace(/([a-z\d])([A-Z])/g, '$1-$2')
        .toLowerCase()
}

var camelizeRE = /-(\w)/g;
function camelize(str) {
    return str.replace(camelizeRE, toUpper)
}

function toUpper(_, c) {
    return c ? c.toUpperCase() : ''
}

var isArray = Array.isArray;

function isFunction(obj) {
    return typeof obj === 'function';
}

function isObject(obj) {
    return obj !== null && typeof obj === 'object';
}

function isPlainObject(obj) {
    return isObject(obj) && Object.getPrototypeOf(obj) === Object.prototype;
}

function isBoolean(value) {
    return typeof value === 'boolean';
}

function isString(value) {
    return typeof value === 'string';
}

function isNumber(value) {
    return typeof value === 'number';
}

function isUndefined(value) {
    return value === undefined;
}

function isContextSelector(selector) {
    return isString(selector) && selector.match(/^[!>+-]/);
}

function getContextSelectors(selector) {
    return isContextSelector(selector) && selector.split(/(?=\s[!>+-])/g).map(function (value) { return value.trim(); });
}

var contextSelectors = {'!': 'closest', '+': 'nextAll', '-': 'prevAll'};
function toJQuery(element, context) {

    if (element === true) {
        return null;
    }

    try {

        if (context && isContextSelector(element) && element[0] !== '>') {

            var fn = contextSelectors[element[0]], selector = element.substr(1);

            context = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(context);

            if (fn === 'closest') {
                context = context.parent();
                selector = selector || '*';
            }

            element = context[fn](selector);

        } else {
            element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element, context);
        }

    } catch (e) {
        return null;
    }

    return element.length ? element : null;
}

function toNode(element) {
    return element && (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["isJQuery"])(element) ? element[0] : element);
}

function toBoolean(value) {
    return isBoolean(value)
        ? value
        : value === 'true' || value === '1' || value === ''
            ? true
            : value === 'false' || value === '0'
                ? false
                : value;
}

function toNumber(value) {
    var number = Number(value);
    return !isNaN(number) ? number : false;
}

function toList(value) {
    return isArray(value)
        ? value
        : isString(value)
            ? value.split(',').map(function (value) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_jquery__["isNumeric"])(value)
                ? toNumber(value)
                : toBoolean(value.trim()); })
            : [value];
}

var vars = {};
function toMedia(value) {

    if (isString(value)) {
        if (value[0] === '@') {
            var name = "media-" + (value.substr(1));
            value = vars[name] || (vars[name] = parseFloat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["getCssVar"])(name)));
        } else if (value.match(/^\(min-width:/)) {
            return value;
        }
    }

    return value && !isNaN(value) ? ("(min-width: " + value + "px)") : false;
}

function coerce(type, value, context) {

    if (type === Boolean) {
        return toBoolean(value);
    } else if (type === Number) {
        return toNumber(value);
    } else if (type === 'jQuery') {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["query"])(value, context);
    } else if (type === 'list') {
        return toList(value);
    } else if (type === 'media') {
        return toMedia(value);
    }

    return type ? type(value) : value;
}

function toMs(time) {
    return !time
        ? 0
        : time.substr(-2) === 'ms'
            ? parseFloat(time)
            : parseFloat(time) * 1000;
}

function swap(value, a, b) {
    return value.replace(new RegExp((a + "|" + b), 'mg'), function (match) {
        return match === a ? b : a
    });
}

var assign = Object.assign || function (target) {
    var args = [], len = arguments.length - 1;
    while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

    target = Object(target);
    for (var i = 0; i < args.length; i++) {
        var source = args[i];
        if (source !== null) {
            for (var key in source) {
                if (hasOwn(source, key)) {
                    target[key] = source[key];
                }
            }
        }
    }
    return target;
};

function clamp(number, min, max) {
    if ( min === void 0 ) min = 0;
    if ( max === void 0 ) max = 1;

    return Math.min(Math.max(number, min), max);
}

function noop() {}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_boot__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uikit_core__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_countdown__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_lightbox__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_notification__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_sortable__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tooltip__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_upload__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_grid_parallax__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_parallax__ = __webpack_require__(19);











__WEBPACK_IMPORTED_MODULE_1__uikit_core__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_2__components_countdown__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1__uikit_core__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_3__components_lightbox__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1__uikit_core__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_4__components_notification__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1__uikit_core__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_5__components_sortable__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1__uikit_core__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_6__components_tooltip__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1__uikit_core__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_7__components_upload__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1__uikit_core__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_8__components_grid_parallax__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_1__uikit_core__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_9__components_parallax__["a" /* default */]);

if (true) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__api_boot__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__uikit_core__["a" /* default */]);
}

/* harmony default export */ __webpack_exports__["default"] = __WEBPACK_IMPORTED_MODULE_1__uikit_core__["a" /* default */];


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


var supportsMultiple, supportsForce;

/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.prototype.$addClass = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        apply(this.$options.el, args, 'add');
    };

    UIkit.prototype.$removeClass = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        apply(this.$options.el, args, 'remove');
    };

    UIkit.prototype.$hasClass = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return (args = getArgs(args, this.$options.el)) && args[0].contains(args[1]);
    };

    UIkit.prototype.$toggleClass = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = getArgs(args, this.$options.el);

        var force = args && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isString"])(args[args.length - 1]) ? args.pop() : undefined;

        for (var i = 1; i < (args && args.length); i++) {
            args[0] && supportsForce
                ? args[0].toggle(args[i], force)
                : (args[0][(!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isUndefined"])(force) ? force : !args[0].contains(args[i])) ? 'add' : 'remove'](args[i]));
        }
    };

    function apply(el, args, fn) {
        (args = getArgs(args, el)) && (supportsMultiple
            ? args[0][fn].apply(args[0], args.slice(1))
            : args.slice(1).forEach(function (cls) { return args[0][fn](cls); }));
    }

    function getArgs(args, el) {

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isString"])(args[0]) && args.unshift(el);
        args[0] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["toNode"])(args[0]) || {}).classList;

        args.forEach(function (arg, i) { return i > 0 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isString"])(arg) && ~arg.indexOf(' ') && Array.prototype.splice.apply(args, [i, 1].concat(args[i].split(' '))); }
        );

        return args[0] && args[1] && args.length > 1 && args;
    }

};;

(function() {

    var list = document.createElement('_').classList;
    if (list) {
        list.add('a', 'b');
        list.toggle('c', false);
        supportsMultiple = list.contains('b');
        supportsForce = !list.contains('c');
    }
    list = null;

})();


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    var DATA = UIkit.data;

    UIkit.components = {};

    UIkit.component = function (id, options) {

        var name = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["camelize"])(id);

        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isPlainObject"])(options)) {
            options.name = name;
            options = UIkit.extend(options);
        } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isUndefined"])(options)) {
            return UIkit.components[name]
        } else {
            options.options.name = name;
        }

        UIkit.components[name] = options;

        UIkit[name] = function (element, data) {
            var i = arguments.length, argsArray = Array(i);
            while ( i-- ) argsArray[i] = arguments[i];


            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isPlainObject"])(element)) {
                return new UIkit.components[name]({data: element});
            }

            if (UIkit.components[name].options.functional) {
                return new UIkit.components[name]({data: [].concat( argsArray )});
            }

            return element && element.nodeType ? init(element) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(element).toArray().map(init)[0];

            function init(element) {
                return UIkit.getComponent(element, name) || new UIkit.components[name]({el: element, data: data || {}});
            }

        };

        if (UIkit._initialized && !options.options.functional) {
            __WEBPACK_IMPORTED_MODULE_0__util_index__["fastdom"].measure(function () { return UIkit[name](("[uk-" + id + "],[data-uk-" + id + "]")); });
        }

        return UIkit.components[name];
    };

    UIkit.getComponents = function (element) { return element && (element = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isJQuery"])(element) ? element[0] : element) && element[DATA] || {}; };
    UIkit.getComponent = function (element, name) { return UIkit.getComponents(element)[name]; };

    UIkit.connect = function (node) {

        var name;

        if (node[DATA]) {
            for (name in node[DATA]) {
                node[DATA][name]._callConnected();
            }
        }

        for (var i = 0; i < node.attributes.length; i++) {

            name = node.attributes[i].name;

            if (name.lastIndexOf('uk-', 0) === 0 || name.lastIndexOf('data-uk-', 0) === 0) {

                name = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["camelize"])(name.replace('data-uk-', '').replace('uk-', ''));

                if (UIkit[name]) {
                    UIkit[name](node);
                }
            }
        }

    };

    UIkit.disconnect = function (node) {
        for (var name in node[DATA]) {
            node[DATA][name]._callDisconnected();
        }
    }

};


/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    var DATA = UIkit.data;

    UIkit.use = function (plugin) {

        if (plugin.installed) {
            return;
        }

        plugin.call(null, this);
        plugin.installed = true;

        return this;
    };

    UIkit.mixin = function (mixin, component) {
        component = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isString"])(component) ? UIkit.components[component] : component) || this;
        mixin = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["mergeOptions"])({}, mixin);
        mixin.mixins = component.options.mixins;
        delete component.options.mixins;
        component.options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["mergeOptions"])(mixin, component.options);
    };

    UIkit.extend = function (options) {

        options = options || {};

        var Super = this, name = options.name || Super.options.name;
        var Sub = createClass(name || 'UIkitComponent');

        Sub.prototype = Object.create(Super.prototype);
        Sub.prototype.constructor = Sub;
        Sub.options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["mergeOptions"])(Super.options, options);

        Sub['super'] = Super;
        Sub.extend = Super.extend;

        return Sub;
    };

    UIkit.update = function (e, element, parents) {
        if ( parents === void 0 ) parents = false;


        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["createEvent"])(e || 'update');

        if (!element) {

            update(UIkit.instances, e);
            return;

        }

        element = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["toNode"])(element);

        if (parents) {

            do {

                update(element[DATA], e);
                element = element.parentNode;

            } while (element)

        } else {

            apply(element, function (element) { return update(element[DATA], e); });

        }

    };

    var container;
    Object.defineProperty(UIkit, 'container', {

        get: function get() {
            return container || document.body;
        },

        set: function set(element) {
            container = element;
        }

    });

    function createClass(name) {
        return new Function(("return function " + (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["classify"])(name)) + " (options) { this._init(options); }"))();
    }

    function apply(node, fn) {

        if (node.nodeType !== Node.ELEMENT_NODE) {
            return;
        }

        fn(node);
        node = node.firstChild;
        while (node) {
            apply(node, fn);
            node = node.nextSibling;
        }
    }

    function update(data, e) {

        if (!data) {
            return;
        }

        for (var name in data) {
            if (data[name]._isReady) {
                data[name]._callUpdate(e);
            }
        }

    }

};


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.prototype._callHook = function (hook) {
        var this$1 = this;


        var handlers = this.$options[hook];

        if (handlers) {
            handlers.forEach(function (handler) { return handler.call(this$1); });
        }
    };

    UIkit.prototype._callReady = function () {

        if (this._isReady) {
            return;
        }

        this._isReady = true;
        this._callHook('ready');
        this._callUpdate();
    };

    UIkit.prototype._callConnected = function () {
        var this$1 = this;


        if (this._connected) {
            return;
        }

        if (!~UIkit.elements.indexOf(this.$options.el)) {
            UIkit.elements.push(this.$options.el);
        }

        UIkit.instances[this._uid] = this;

        this._initEvents();

        this._callHook('connected');
        this._connected = true;

        this._initObserver();

        if (!this._isReady) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["ready"])(function () { return this$1._callReady(); });
        }

        this._callUpdate();
    };

    UIkit.prototype._callDisconnected = function () {

        if (!this._connected) {
            return;
        }

        if (this._observer) {
            this._observer.disconnect();
            this._observer = null;
        }

        var index = UIkit.elements.indexOf(this.$options.el);

        if (~index) {
            UIkit.elements.splice(index, 1);
        }

        delete UIkit.instances[this._uid];

        this._initEvents(true);
        this._callHook('disconnected');

        this._connected = false;

    };

    UIkit.prototype._callUpdate = function (e) {
        var this$1 = this;


        e = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["createEvent"])(e || 'update');

        if (e.type === 'update') {
            this._computeds = {};
        }

        var updates = this.$options.update;

        if (!updates) {
            return;
        }

        updates.forEach(function (update, i) {

            if (e.type !== 'update' && (!update.events || !~update.events.indexOf(e.type))) {
                return;
            }

            if (update.read && !~__WEBPACK_IMPORTED_MODULE_0__util_index__["fastdom"].reads.indexOf(this$1._frames.reads[i])) {
                this$1._frames.reads[i] = __WEBPACK_IMPORTED_MODULE_0__util_index__["fastdom"].measure(function () {
                    update.read.call(this$1, e);
                    delete this$1._frames.reads[i];
                });
            }

            if (update.write && !~__WEBPACK_IMPORTED_MODULE_0__util_index__["fastdom"].writes.indexOf(this$1._frames.writes[i])) {
                this$1._frames.writes[i] = __WEBPACK_IMPORTED_MODULE_0__util_index__["fastdom"].mutate(function () {
                    update.write.call(this$1, e);
                    delete this$1._frames.writes[i];
                });
            }

        });

    };

};


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    var DATA = UIkit.data;

    UIkit.prototype.$mount = function (el) {

        var name = this.$options.name;

        if (!el[DATA]) {
            el[DATA] = {};
        }

        if (el[DATA][name]) {
            return;
        }

        el[DATA][name] = this;

        this.$options.el = this.$options.el || el;
        this.$el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(el);

        this._initProps();

        this._callHook('init');

        if (document.documentElement.contains(el)) {
            this._callConnected();
        }
    };

    UIkit.prototype.$emit = function (e) {
        this._callUpdate(e);
    };

    UIkit.prototype.$update = function (e, parents) {
        UIkit.update(e, this.$options.el, parents);
    };

    UIkit.prototype.$reset = function (data) {
        this._callDisconnected();
        this._initProps(data);
        this._callConnected();
    };

    UIkit.prototype.$destroy = function (remove) {
        if ( remove === void 0 ) remove = false;


        var ref = this.$options;
        var el = ref.el;
        var name = ref.name;

        if (el) {
            this._callDisconnected();
        }

        this._callHook('destroy');

        if (!el || !el[DATA]) {
            return;
        }

        delete el[DATA][name];

        if (!Object.keys(el[DATA]).length) {
            delete el[DATA];
        }

        if (remove) {
            this.$el.remove();
        }
    };

};


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    var uid = 0;

    UIkit.prototype.props = {};

    UIkit.prototype._init = function (options) {

        options = options || {};
        options = this.$options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["mergeOptions"])(this.constructor.options, options, this);

        this.$el = null;
        this.$name = UIkit.prefix + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["hyphenate"])(this.$options.name);
        this.$props = {};

        this._frames = {reads: {}, writes: {}};

        this._uid = uid++;
        this._initData();
        this._initMethods();
        this._initComputeds();
        this._callHook('created');

        if (options.el) {
            this.$mount(options.el);
        }
    };

    UIkit.prototype._initData = function () {
        var this$1 = this;


        var ref = this.$options;
        var defaults = ref.defaults;
        var data = ref.data; if ( data === void 0 ) data = {};
        var args = ref.args; if ( args === void 0 ) args = [];
        var props = ref.props; if ( props === void 0 ) props = {};
        var el = ref.el;

        if (args.length && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isArray"])(data)) {
            data = data.slice(0, args.length).reduce(function (data, value, index) {
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isPlainObject"])(value)) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["assign"])(data, value);
                } else {
                    data[args[index]] = value;
                }
                return data;
            }, {});
        }

        for (var key in defaults) {
            this$1.$props[key] = this$1[key] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["hasOwn"])(data, key) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isUndefined"])(data[key])
                ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["coerce"])(props[key], data[key], el)
                : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isArray"])(defaults[key])
                    ? defaults[key].concat()
                    : defaults[key];
        }
    };

    UIkit.prototype._initMethods = function () {
        var this$1 = this;


        var methods = this.$options.methods;

        if (methods) {
            for (var key in methods) {
                this$1[key] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["bind"])(methods[key], this$1);
            }
        }
    };

    UIkit.prototype._initComputeds = function () {
        var this$1 = this;


        var computed = this.$options.computed;

        this._computeds = {};

        if (computed) {
            for (var key in computed) {
                registerComputed(this$1, key, computed[key]);
            }
        }
    };

    UIkit.prototype._initProps = function (props) {
        var this$1 = this;


        this._computeds = {};
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["assign"])(this.$props, props || getProps(this.$options, this.$name));

        var exclude = [this.$options.computed, this.$options.methods];
        for (var key in this$1.$props) {
            if (notIn(exclude, key)) {
                this$1[key] = this$1.$props[key];
            }
        }
    };

    UIkit.prototype._initEvents = function (unbind) {
        var this$1 = this;


        var events = this.$options.events;

        if (events) {

            events.forEach(function (event) {

                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["hasOwn"])(event, 'handler')) {
                    for (var key in event) {
                        registerEvent(this$1, unbind, event[key], key);
                    }
                } else {
                    registerEvent(this$1, unbind, event);
                }

            });
        }
    };

    UIkit.prototype._initObserver = function () {
        var this$1 = this;


        var ref = this.$options;
        var attrs = ref.attrs;
        var props = ref.props;
        var el = ref.el;
        if (this._observer || !props || !attrs || !__WEBPACK_IMPORTED_MODULE_0__util_index__["Observer"]) {
            return;
        }

        attrs = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isArray"])(attrs) ? attrs : Object.keys(props).map(function (key) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["hyphenate"])(key); });

        this._observer = new __WEBPACK_IMPORTED_MODULE_0__util_index__["Observer"](function () {

            var data = getProps(this$1.$options, this$1.$name);
            if (attrs.some(function (key) { return !equals(data[key], this$1.$props[key]); })) {
                this$1.$reset(data);
            }

        });

        this._observer.observe(el, {attributes: true, attributeFilter: attrs.concat([this.$name, ("data-" + (this.$name))])});
    };

    function getProps(opts, name) {

        var data = {};
        var args = opts.args; if ( args === void 0 ) args = [];
        var props = opts.props; if ( props === void 0 ) props = {};
        var el = opts.el;
        var key, prop;

        if (!props) {
            return data;
        }

        for (key in props) {
            prop = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["hyphenate"])(key);
            if (el.hasAttribute(prop)) {

                var value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["coerce"])(props[key], el.getAttribute(prop), el);

                if (prop === 'target' && (!value || value.lastIndexOf('_', 0) === 0)) {
                    continue;
                }

                data[key] = value;
            }
        }

        var options = parseOptions(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["getData"])(el, name), args);

        for (key in options) {
            prop = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["camelize"])(key);
            if (props[prop] !== undefined) {
                data[prop] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["coerce"])(props[prop], options[key], el);
            }
        }

        return data;
    }

    function parseOptions(options, args) {
        if ( args === void 0 ) args = [];


        try {

            return !options
                ? {}
                : options[0] === '{'
                    ? JSON.parse(options)
                    : args.length && !~options.indexOf(':')
                        ? (( obj = {}, obj[args[0]] = options, obj ))
                        : options.split(';').reduce(function (options, option) {
                            var ref = option.split(/:(.+)/);
                            var key = ref[0];
                            var value = ref[1];
                            if (key && value) {
                                options[key.trim()] = value.trim();
                            }
                            return options;
                        }, {});
            var obj;

        } catch (e) {
            return {};
        }

    }

    function registerComputed(component, key, cb) {
        Object.defineProperty(component, key, {

            enumerable: true,

            get: function get() {

                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["hasOwn"])(component._computeds, key)) {
                    component._computeds[key] = cb.call(component);
                }

                return component._computeds[key];
            },

            set: function set(value) {
                component._computeds[key] = value;
            }

        });
    }

    function registerEvent(component, unbind, event, key) {

        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isPlainObject"])(event)) {
            event = ({name: key, handler: event});
        }

        var name = event.name;
        var el = event.el;
        var delegate = event.delegate;
        var self = event.self;
        var filter = event.filter;
        var handler = event.handler;
        var namespace = "." + (component.$options.name) + "." + (component._uid);

        el = el && el.call(component) || component.$el;

        name = name.split(' ').map(function (name) { return (name + "." + namespace); }).join(' ');

        if (unbind) {

            el.off(name);

        } else {

            if (filter && !filter.call(component)) {
                return;
            }

            handler = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isString"])(handler) ? component[handler] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["bind"])(handler, component);

            if (self) {
                handler = selfFilter(handler, component);
            }

            if (delegate) {
                el.on(name, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isString"])(delegate) ? delegate : delegate.call(component), handler);
            } else {
                el.on(name, handler);
            }
        }

    }

    function selfFilter(handler, context) {
        return function selfHandler(e) {
            if (e.target === e.currentTarget) {
                return handler.call(context, e)
            }
        }
    }

    function notIn(options, key) {
        return options.every(function (arr) { return !arr || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["hasOwn"])(arr, key); });
    }

    function equals(a, b) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isUndefined"])(a) || a === b || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isJQuery"])(a) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isJQuery"])(b) && a.is(b);
    }

};


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    UIkit.component('countdown', {

        mixins: [UIkit.mixin.class],

        attrs: true,

        props: {
            date: String,
            clsWrapper: String
        },

        defaults: {
            date: '',
            clsWrapper: '.uk-countdown-%unit%'
        },

        computed: {

            date: function date() {
                return Date.parse(this.$props.date);
            },

            days: function days() {
                return this.$el.find(this.clsWrapper.replace('%unit%', 'days'));
            },

            hours: function hours() {
                return this.$el.find(this.clsWrapper.replace('%unit%', 'hours'));
            },

            minutes: function minutes() {
                return this.$el.find(this.clsWrapper.replace('%unit%', 'minutes'));
            },

            seconds: function seconds() {
                return this.$el.find(this.clsWrapper.replace('%unit%', 'seconds'));
            },

            units: function units() {
                var this$1 = this;

                return ['days', 'hours', 'minutes', 'seconds'].filter(function (unit) { return this$1[unit].length; });
            }

        },

        connected: function connected() {
            this.start();
        },

        disconnected: function disconnected() {
            var this$1 = this;

            this.stop();
            this.units.forEach(function (unit) { return this$1[unit].empty(); });
        },

        update: {

            write: function write() {
                var this$1 = this;


                var timespan = getTimeSpan(this.date);

                if (timespan.total <= 0) {

                    this.stop();

                    timespan.days
                        = timespan.hours
                        = timespan.minutes
                        = timespan.seconds
                        = 0;
                }

                this.units.forEach(function (unit) {

                    var digits = String(Math.floor(timespan[unit]));

                    digits = digits.length < 2 ? ("0" + digits) : digits;

                    if (this$1[unit].text() !== digits) {
                        var el = this$1[unit];
                        digits = digits.split('');

                        if (digits.length !== el.children().length) {
                            el.empty().append(digits.map(function () { return '<span></span>'; }).join(''));
                        }

                        digits.forEach(function (digit, i) { return el[0].childNodes[i].innerText = digit; });
                    }

                });

            }

        },

        methods: {

            start: function start() {
                var this$1 = this;


                this.stop();

                if (this.date && this.units.length) {
                    this.$emit();
                    this.timer = setInterval(function () { return this$1.$emit(); }, 1000);
                }

            },

            stop: function stop() {

                if (this.timer) {
                    clearInterval(this.timer);
                    this.timer = null;
                }

            }

        }

    });

    function getTimeSpan(date) {

        var total = date - Date.now();

        return {
            total: total,
            seconds: total / 1000 % 60,
            minutes: total / 1000 / 60 % 60,
            hours: total / 1000 / 60 / 60 % 24,
            days: total / 1000 / 60 / 60 / 24
        };
    }

}

if (false) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = plugin;


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    var ref = UIkit.util;
    var scrolledOver = ref.scrolledOver;

    UIkit.component('grid-parallax', UIkit.components.grid.extend({

        props: {
            target: String,
            translate: Number
        },

        defaults: {
            target: false,
            translate: 150
        },

        init: function init() {
            this.$addClass('uk-grid');
        },

        disconnected: function disconnected() {
            this.reset();
            this.$el.css('margin-bottom', '');
        },

        computed: {

            translate: function translate() {
                return Math.abs(this.$props.translate);
            },

            items: function items() {
                return (this.target ? this.$el.find(this.target) : this.$el.children()).toArray();
            }

        },

        update: [

            {

                read: function read() {
                    this.columns = this.rows && this.rows[0] && this.rows[0].length || 0;
                    this.rows = this.rows && this.rows.map(function (elements) { return sortBy(elements, 'offsetLeft'); });
                },

                write: function write() {
                    this.$el
                        .css('margin-bottom', '')
                        .css('margin-bottom', this.columns > 1 ? this.translate + parseFloat(this.$el.css('margin-bottom')) : '');
                },

                events: ['load', 'resize']
            },

            {

                read: function read() {

                    this.scrolled = scrolledOver(this.$el) * this.translate;

                },

                write: function write() {
                    var this$1 = this;


                    if (!this.rows || this.columns === 1 || !this.scrolled) {
                        return this.reset();
                    }

                    this.rows.forEach(function (row) { return row.forEach(function (el, i) { return el.style.transform = "translateY(" + (i % 2 ? this$1.scrolled : this$1.scrolled / 8) + "px)"; }
                        ); }
                    );

                },

                events: ['scroll', 'load', 'resize']
            }
        ],

        methods: {

            reset: function reset() {
                this.items.forEach(function (item) { return item.style.transform = ''; });
            }

        }

    }));

    UIkit.component('grid-parallax').options.update.unshift({

        read: function read() {
            this.reset();
        },

        events: ['load', 'resize']

    });

    function sortBy(collection, prop) {
        return collection.sort(function (a,b) { return a[prop] > b[prop]
                ? 1
                : b[prop] > a[prop]
                    ? -1
                    : 0; }
        )
    }

}



if (false) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = plugin;


/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_slideshow__ = __webpack_require__(54);


function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    UIkit.use(__WEBPACK_IMPORTED_MODULE_0__mixin_slideshow__["a" /* default */]);

    var mixin = UIkit.mixin;
    var util = UIkit.util;
    var $ = util.$;
    var $trigger = util.$trigger;
    var Animation = util.Animation;
    var ajax = util.ajax;
    var assign = util.assign;
    var doc = util.doc;
    var docElement = util.docElement;
    var getData = util.getData;
    var getImage = util.getImage;
    var pointerDown = util.pointerDown;
    var pointerMove = util.pointerMove;
    var Transition = util.Transition;

    UIkit.component('lightbox', {

        attrs: true,

        props: {
            animation: String,
            toggle: String
        },

        defaults: {
            animation: undefined,
            toggle: 'a'
        },

        computed: {

            toggles: function toggles() {
                var this$1 = this;

                var toggles = $(this.toggle, this.$el);

                this._changed = !this._toggles
                    || toggles.length !== this._toggles.length
                    || toggles.toArray().some(function (el, i) { return el !== this$1._toggles.get(i); });

                return this._toggles = toggles;
            }

        },

        disconnected: function disconnected() {

            if (this.panel) {
                this.panel.$destroy(true);
                this.panel = null;
            }

        },

        events: [

            {

                name: 'click',

                delegate: function delegate() {
                    return ((this.toggle) + ":not(.uk-disabled)");
                },

                handler: function handler(e) {
                    e.preventDefault();
                    this.show(this.toggles.index($(e.currentTarget).blur()));
                }

            }

        ],

        update: function update() {

            if (this.panel && this.animation) {
                this.panel.$props.animation = this.animation;
                this.panel.$emit();
            }

            if (!this.toggles.length || !this._changed || !this.panel) {
                return;
            }

            this.panel.$destroy(true);
            this._init();

        },

        methods: {

            _init: function _init() {
                return this.panel = this.panel || UIkit.lightboxPanel({
                        animation: this.animation,
                        items: this.toggles.toArray().reduce(function (items, el) {
                            items.push(['href', 'caption', 'type'].reduce(function (obj, attr) {
                                obj[attr === 'href' ? 'source' : attr] = getData(el, attr);
                                return obj;
                            }, {}));
                            return items;
                        }, [])
                    });
            },

            show: function show(index) {

                if (!this.panel) {
                    this._init();
                }

                return this.panel.show(index);

            },

            hide: function hide() {

                return this.panel && this.panel.hide();

            }

        }

    });

    UIkit.component('lightbox-panel', {

        mixins: [mixin.togglable, mixin.slideshow],

        functional: true,

        defaults: {
            preload: 1,
            delayControls: 3000,
            items: [],
            cls: 'uk-open',
            clsPage: 'uk-lightbox-page',
            clsItem: 'uk-lightbox-item',
            attrItem: 'uk-lightbox-item',
            template: "\n                <div class=\"uk-lightbox uk-overflow-hidden\">\n                    <ul class=\"uk-lightbox-items\"></ul>\n                    <div class=\"uk-lightbox-toolbar uk-position-top uk-text-right\">\n                        <button class=\"uk-lightbox-toolbar-icon uk-close-large\" type=\"button\" uk-close uk-toggle=\"!.uk-lightbox\"></button>\n                     </div>\n                    <a class=\"uk-lightbox-button uk-position-center-left uk-position-medium\" href=\"#\" uk-slidenav-previous uk-lightbox-item=\"previous\"></a>\n                    <a class=\"uk-lightbox-button uk-position-center-right uk-position-medium\" href=\"#\" uk-slidenav-next uk-lightbox-item=\"next\"></a>\n                    <div class=\"uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center\"></div>\n                </div>"
        },

        computed: {

            container: function container() {
                return $(this.$props.container === true && UIkit.container || this.$props.container || UIkit.container);
            }

        },

        created: function created() {
            var this$1 = this;


            this.$mount($(this.template).appendTo(this.container)[0]);

            this.list = this.$el.find('.uk-lightbox-items');
            this.toolbars = this.$el.find('.uk-lightbox-toolbar');
            this.nav = this.$el.find('a[uk-lightbox-item]');
            this.caption = this.$el.find('.uk-lightbox-caption');

            this.items.forEach(function (el, i) { return this$1.list.append(("<li class=\"" + (this$1.clsItem) + " item-" + i + "\"></li>")); });

        },

        events: [

            {

                name: (pointerMove + " " + pointerDown + " keydown"),

                handler: 'showControls'

            },

            {

                name: 'click',

                self: true,

                handler: function handler(e) {
                    e.preventDefault();
                    this.hide();
                }

            },

            {

                name: 'click',

                self: true,

                delegate: function delegate() {
                    return ("." + (this.clsItem));
                },

                handler: function handler(e) {
                    e.preventDefault();
                    this.hide();
                }

            },

            {

                name: 'show',

                self: true,

                handler: function handler() {

                    this.$addClass(docElement, this.clsPage);

                }
            },

            {

                name: 'shown',

                self: true,

                handler: function handler() {

                    this.$addClass(this.caption, 'uk-animation-slide-bottom');
                    this.toolbars.attr('hidden', true);
                    this.nav.attr('hidden', true);
                    this.showControls();

                }
            },

            {

                name: 'hide',

                self: true,

                handler: function handler() {

                    this.$removeClass(this.caption, 'uk-animation-slide-bottom');
                    this.toolbars.attr('hidden', true);
                    this.nav.attr('hidden', true);

                }
            },

            {

                name: 'hidden',

                self: true,

                handler: function handler() {

                    this.$removeClass(docElement, this.clsPage);

                }
            },

            {

                name: 'keydown',

                el: function el() {
                    return doc;
                },

                handler: function handler(e) {

                    if (!this.isToggled(this.$el)) {
                        return;
                    }

                    switch (e.keyCode) {
                        case 27:
                            this.hide();
                            break;
                        case 37:
                            this.show('previous');
                            break;
                        case 39:
                            this.show('next');
                            break;
                    }
                }
            },

            {

                name: 'toggle',

                handler: function handler(e) {
                    e.preventDefault();
                    this.toggle();
                }

            },

            {

                name: 'beforeitemshow',

                self: true,

                handler: function handler() {
                    if (!this.isToggled()) {
                        this.toggleNow(this.$el, true);
                    }
                }

            },

            {

                name: 'itemshow',

                self: true,

                handler: function handler() {
                    var this$1 = this;


                    var caption = this.getItem().caption;
                    this.caption.toggle(!!caption).html(caption);

                    for (var i = 0; i <= this.preload; i++) {
                        this$1.loadItem(this$1.getIndex(this$1.index + i));
                        this$1.loadItem(this$1.getIndex(this$1.index - i));
                    }

                }

            },

            {

                name: 'itemload',

                handler: function handler(_, item) {
                    var this$1 = this;


                    var source = item.source;
                    var type = item.type;
                    var matches;

                    this.setItem(item, '<span uk-spinner></span>');

                    if (!source) {
                        return;
                    }

                    // Image
                    if (type === 'image' || source.match(/\.(jp(e)?g|png|gif|svg)$/i)) {

                        getImage(source).then(
                            function (img) { return this$1.setItem(item, ("<img width=\"" + (img.width) + "\" height=\"" + (img.height) + "\" src=\"" + source + "\">")); },
                            function () { return this$1.setError(item); }
                        );

                    // Video
                    } else if (type === 'video' || source.match(/\.(mp4|webm|ogv)$/i)) {

                        var video = $('<video controls playsinline uk-video></video>')
                            .on('loadedmetadata', function () { return this$1.setItem(item, video.attr({width: video[0].videoWidth, height: video[0].videoHeight})); })
                            .on('error', function () { return this$1.setError(item); })
                            .attr('src', source);

                    // Iframe
                    } else if (type === 'iframe') {

                        this.setItem(item, ("<iframe class=\"uk-lightbox-iframe\" src=\"" + source + "\" frameborder=\"0\" allowfullscreen></iframe>"));

                    // Youtube
                    } else if (matches = source.match(/\/\/.*?youtube\.[a-z]+\/watch\?v=([^&\s]+)/) || source.match(/youtu\.be\/(.*)/)) {

                        var id = matches[1],
                            setIframe = function (width, height) {
                                if ( width === void 0 ) width = 640;
                                if ( height === void 0 ) height = 450;

                                return this$1.setItem(item, getIframe(("//www.youtube.com/embed/" + id), width, height));
                        };

                        getImage(("//img.youtube.com/vi/" + id + "/maxresdefault.jpg")).then(
                            function (img) {
                                //youtube default 404 thumb, fall back to lowres
                                if (img.width === 120 && img.height === 90) {
                                    getImage(("//img.youtube.com/vi/" + id + "/0.jpg")).then(
                                        function (img) { return setIframe(img.width, img.height); },
                                        setIframe
                                    );
                                } else {
                                    setIframe(img.width, img.height);
                                }
                            },
                            setIframe
                        );

                    // Vimeo
                    } else if (matches = source.match(/(\/\/.*?)vimeo\.[a-z]+\/([0-9]+).*?/)) {

                        ajax({type: 'GET', url: ("//vimeo.com/api/oembed.json?url=" + (encodeURI(source))), jsonp: 'callback', dataType: 'jsonp'})
                            .then(function (ref) {
                                var height = ref.height;
                                var width = ref.width;

                                return this$1.setItem(item, getIframe(("//player.vimeo.com/video/" + (matches[2])), width, height));
                        });

                    } else {

                        return;

                    }

                    return true;

                }

            }

        ],

        methods: {

            toggle: function toggle() {
                return this.isToggled() ? this.hide() : this.show();
            },

            hide: function hide() {

                if (this.isToggled()) {
                    this.toggleNow(this.$el, false);
                }

                this.slides
                    .removeClass(this.clsActive)
                    .each(function (_, el) { return Transition.stop(el); });

                delete this.index;
                delete this.percent;
                delete this._animation;

            },

            loadItem: function loadItem(index) {
                if ( index === void 0 ) index = this.index;


                var item = this.getItem(index);

                if (item.content) {
                    return;
                }

                if (!$trigger(this.$el, 'itemload', [item], true).result) {
                    this.setError(item);
                }
            },

            getItem: function getItem(index) {
                if ( index === void 0 ) index = this.index;

                return this.items[index] || {};
            },

            setItem: function setItem(item, content) {
                assign(item, {content: content});
                var el = this.slides.eq(this.items.indexOf(item)).html(content);
                this.$el.trigger('itemloaded', [this, el]);
                UIkit.update(null, el);
            },

            setError: function setError(item) {
                this.setItem(item, '<span uk-icon="icon: bolt; ratio: 2"></span>');
            },

            showControls: function showControls() {

                clearTimeout(this.controlsTimer);
                this.controlsTimer = setTimeout(this.hideControls, this.delayControls);

                if (!this.toolbars.attr('hidden')) {
                    return;
                }

                animate(this.toolbars.eq(0), 'uk-animation-slide-top');
                animate(this.toolbars.eq(1), 'uk-animation-slide-bottom');

                this.nav.attr('hidden', this.items.length <= 1);

                if (this.items.length > 1) {
                    animate(this.nav, 'uk-animation-fade');
                }

            },

            hideControls: function hideControls() {

                if (this.toolbars.attr('hidden')) {
                    return;
                }

                animate(this.toolbars.eq(0), 'uk-animation-slide-top', 'out');
                animate(this.toolbars.eq(1), 'uk-animation-slide-bottom', 'out');

                if (this.items.length > 1) {
                    animate(this.nav, 'uk-animation-fade', 'out');
                }

            }

        }

    });

    function animate(el, animation, dir) {
        if ( dir === void 0 ) dir = 'in';

        el.each(function (i) { return Animation[dir](el.eq(i).attr('hidden', false), animation).then(function () { dir === 'out' && el.eq(i).attr('hidden', true)}); });
    }

    function getIframe(src, width, height) {
        return ("<iframe src=\"" + src + "\" width=\"" + width + "\" height=\"" + height + "\" style=\"max-width: 100%; box-sizing: border-box;\" uk-video uk-responsive></iframe>");
    }

}

if (false) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = plugin;


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    var ref = UIkit.util;
    var $ = ref.$;
    var each = ref.each;
    var pointerEnter = ref.pointerEnter;
    var pointerLeave = ref.pointerLeave;
    var Transition = ref.Transition;
    var containers = {};

    UIkit.component('notification', {

        functional: true,

        args: ['message', 'status'],

        defaults: {
            message: '',
            status: '',
            timeout: 5000,
            group: null,
            pos: 'top-center',
            onClose: null,
            clsClose: 'uk-notification-close',
            clsMsg: 'uk-notification-message'
        },

        created: function created() {

            if (!containers[this.pos]) {
                containers[this.pos] = $(("<div class=\"uk-notification uk-notification-" + (this.pos) + "\"></div>")).appendTo(UIkit.container);
            }

            this.$mount($(
                ("<div class=\"" + (this.clsMsg) + (this.status ? (" " + (this.clsMsg) + "-" + (this.status)) : '') + "\">\n                    <a href=\"#\" class=\"" + (this.clsClose) + "\" data-uk-close></a>\n                    <div>" + (this.message) + "</div>\n                </div>")
            ).appendTo(containers[this.pos].show())[0]);

        },

        ready: function ready() {
            var this$1 = this;


            var marginBottom = parseInt(this.$el.css('margin-bottom'), 10);

            Transition.start(
                this.$el.css({opacity: 0, marginTop: -1 * this.$el.outerHeight(), marginBottom: 0}),
                {opacity: 1, marginTop: 0, marginBottom: marginBottom}
            ).then(function () {
                if (this$1.timeout) {
                    this$1.timer = setTimeout(this$1.close, this$1.timeout);
                }
            });

        },

        events: ( obj = {

            click: function click(e) {
                if ($(e.target).closest('a[href="#"]').length) {
                    e.preventDefault();
                }
                this.close();
            }

        }, obj[pointerEnter] = function () {
                if (this.timer) {
                    clearTimeout(this.timer);
                }
            }, obj[pointerLeave] = function () {
                if (this.timeout) {
                    this.timer = setTimeout(this.close, this.timeout);
                }
            }, obj ),

        methods: {

            close: function close(immediate) {
                var this$1 = this;


                var remove = function () {

                    this$1.onClose && this$1.onClose();
                    this$1.$el.trigger('close', [this$1]).remove();

                    if (!containers[this$1.pos].children().length) {
                        containers[this$1.pos].hide();
                    }

                };

                if (this.timer) {
                    clearTimeout(this.timer);
                }

                if (immediate) {
                    remove();
                } else {
                    Transition.start(this.$el, {opacity: 0, marginTop: -1 * this.$el.outerHeight(), marginBottom: 0}).then(remove)
                }
            }

        }

    });
    var obj;

    UIkit.notification.closeAll = function (group, immediate) {
        each(UIkit.instances, function (_, component) {
            if (component.$options.name === 'notification' && (!group || group === component.group)) {
                component.close(immediate);
            }
        })
    };

}

if (false) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = plugin;


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    var mixin = UIkit.mixin;
    var util = UIkit.util;
    var assign = util.assign;
    var clamp = util.clamp;
    var Dimensions = util.Dimensions;
    var getImage = util.getImage;
    var isUndefined = util.isUndefined;
    var scrolledOver = util.scrolledOver;
    var query = util.query;

    var props = ['x', 'y', 'bgx', 'bgy', 'rotate', 'scale', 'color', 'backgroundColor', 'borderColor', 'opacity', 'blur', 'hue', 'grayscale', 'invert', 'saturate', 'sepia', 'fopacity'];

    mixin.parallax = {

        props: props.reduce(function (props, prop) {
            props[prop] = 'list';
            return props;
        }, {
            easing: Number,
            media: 'media'
        }),

        defaults: props.reduce(function (defaults, prop) {
            defaults[prop] = undefined;
            return defaults;
        }, {
            easing: 1,
            media: false
        }),

        computed: {

            props: function props$1() {
                var this$1 = this;


                return props.reduce(function (props, prop) {

                    if (isUndefined(this$1.$props[prop])) {
                        return props;
                    }

                    var isColor = prop.match(/color/i),
                        isCssProp = isColor || prop === 'opacity',
                        values = this$1.$props[prop];

                    if (isCssProp) {
                        this$1.$el.css(prop, '');
                    }

                    var start = (!isUndefined(values[1])
                            ? values[0]
                            : prop === 'scale'
                                ? 1
                                : isCssProp
                                    ? this$1.$el.css(prop)
                                    : 0) || 0,
                        end = isUndefined(values[1]) ? values[0] : values[1],
                        unit = ~values.join('').indexOf('%') ? '%' : 'px',
                        diff;

                    if (isColor) {

                        var color = this$1.$el[0].style.color;
                        this$1.$el[0].style.color = start;
                        start = parseColor(this$1.$el.css('color'));
                        this$1.$el[0].style.color = end;
                        end = parseColor(this$1.$el.css('color'));
                        this$1.$el[0].style.color = color;

                    } else {

                        start = parseFloat(start);
                        end = parseFloat(end);
                        diff = Math.abs(start - end);

                    }

                    props[prop] = {start: start, end: end, diff: diff, unit: unit};

                    if (prop.match(/^bg/)) {

                        var attr = "background-position-" + (prop[2]);
                        props[prop].pos = this$1.$el.css(attr, '').css('background-position').split(' ')[prop[2] === 'x' ? 0 : 1]; // IE 11 can't read background-position-[x|y]

                        if (this$1.covers) {
                            assign(props[prop], {start: 0, end: start <= end ? diff : -diff});
                        }
                    }

                    return props;

                }, {});

            },

            bgProps: function bgProps() {
                var this$1 = this;

                return ['bgx', 'bgy'].filter(function (bg) { return bg in this$1.props; });
            },

            covers: function covers() {
                return this.$el.css('backgroundSize', '').css('backgroundSize') === 'cover';
            }

        },

        disconnected: function disconnected() {
            delete this._image;
        },

        update: [

            {

                read: function read() {
                    var this$1 = this;


                    delete this._computeds.props;

                    this._active = !this.media || window.matchMedia(this.media).matches;

                    if (this._image) {
                        this._image.dimEl = {
                            width: this.$el[0].offsetWidth,
                            height: this.$el[0].offsetHeight
                        }
                    }

                    if (!isUndefined(this._image) || !this.covers || !this.bgProps.length) {
                        return;
                    }

                    var src = this.$el.css('backgroundImage').replace(/^none|url\(["']?(.+?)["']?\)$/, '$1');

                    if (!src) {
                        return;
                    }

                    this._image = false;

                    getImage(src).then(function (img) {
                        this$1._image = {
                            width: img.naturalWidth,
                            height: img.naturalHeight
                        };

                        this$1.$emit();
                    });

                },

                write: function write() {
                    var this$1 = this;


                    if (!this._image) {
                        return;
                    }

                    if (!this._active) {
                        this.$el.css({backgroundSize: '', backgroundRepeat: ''});
                        return;
                    }

                    var image = this._image,
                        dimEl = image.dimEl,
                        dim = Dimensions.cover(image, dimEl);

                    this.bgProps.forEach(function (prop) {

                        var ref = this$1.props[prop];
                        var start = ref.start;
                        var end = ref.end;
                        var pos = ref.pos;
                        var diff = ref.diff;
                        var attr = prop === 'bgy' ? 'height' : 'width',
                            span = dim[attr] - dimEl[attr];

                        if (!pos.match(/%$/)) {
                            return;
                        }

                        if (start >= end) {

                            if (span < diff) {
                                dimEl[attr] = dim[attr] + diff - span;
                                this$1.props[prop].pos = '0px';
                            } else {
                                pos = -1 * span / 100 * parseFloat(pos);
                                pos = clamp(pos, diff - span, 0);
                                this$1.props[prop].pos = pos + "px";
                            }

                        } else {

                            if (span < diff) {
                                dimEl[attr] = dim[attr] + diff - span;
                            } else if ((span / 100 * parseFloat(pos)) > diff) {
                                return;
                            }

                            this$1.props[prop].pos = "-" + diff + "px";

                        }

                        dim = Dimensions.cover(image, dimEl);
                    });

                    this.$el.css({
                        backgroundSize: ((dim.width) + "px " + (dim.height) + "px"),
                        backgroundRepeat: 'no-repeat'
                    });

                },

                events: ['load', 'resize']

            }

        ],

        methods: {

            reset: function reset() {
                var this$1 = this;

                Object.keys(this.getCss(0)).forEach(function (prop) { return this$1.$el.css(prop, ''); });
            },

            getCss: function getCss(percent) {

                var translated = false, props = this.props;
                return Object.keys(props).reduce(function (css, prop) {

                    var values = props[prop],
                        value = getValue(values, percent);

                    switch (prop) {

                        // transforms
                        case 'x':
                        case 'y':

                            if (translated) {
                                break;
                            }

                            var ref = ['x', 'y'].map(function (dir) { return prop === dir
                                ? value + values.unit
                                : props[dir]
                                    ? getValue(props[dir], percent) + props[dir].unit
                                    : 0; }
                            );
                    var x = ref[0];
                    var y = ref[1];

                            translated = css.transform += " translate3d(" + x + ", " + y + ", 0)";
                            break;
                        case 'rotate':
                            css.transform += " rotate(" + value + "deg)";
                            break;
                        case 'scale':
                            css.transform += " scale(" + value + ")";
                            break;

                        // bg image
                        case 'bgy':
                        case 'bgx':
                            css[("background-position-" + (prop[2]))] = "calc(" + (values.pos) + " + " + (value + values.unit) + ")";
                            break;

                        // color
                        case 'color':
                        case 'backgroundColor':
                        case 'borderColor':
                            css[prop] = "rgba(" + (values.start.map(function (value, i) {
                                    value = value + percent * (values.end[i] - value);
                                    return i === 3 ? parseFloat(value) : parseInt(value, 10);
                                }).join(',')) + ")";
                            break;

                        // CSS Filter
                        case 'blur':
                            css.filter += " blur(" + value + "px)";
                            break;
                        case 'hue':
                            css.filter += " hue-rotate(" + value + "deg)";
                            break;
                        case 'fopacity':
                            css.filter += " opacity(" + value + "%)";
                            break;
                        case 'grayscale':
                        case 'invert':
                        case 'saturate':
                        case 'sepia':
                            css.filter += " " + prop + "(" + value + "%)";
                            break;

                        default:
                            css[prop] = value;
                    }

                    return css;

                }, {transform: '', filter: ''});

            }

        }

    };

    UIkit.component('parallax', {

        mixins: [mixin.parallax],

        props: {
            target: String,
            viewport: Number
        },

        defaults: {
            target: false,
            viewport: 1
        },

        computed: {

            target: function target() {
                return this.$props.target && query(this.$props.target, this.$el) || this.$el;
            }

        },

        disconnected: function disconnected() {
            delete this._prev;
        },

        update: [

            {

                read: function read() {
                    delete this._prev;
                }

            },

            {

                read: function read() {

                    var percent = scrolledOver(this.target) / (this.viewport || 1);
                    this._percent = clamp(percent * (1 - (this.easing - this.easing * percent)));

                },

                write: function write() {

                    if (!this._active) {
                        this.reset();
                        return;
                    }

                    if (this._prev !== this._percent) {
                        this.$el.css(this.getCss(this._percent));
                        this._prev = this._percent;
                    }

                },

                events: ['scroll', 'load', 'resize']
            }

        ]

    });

    function parseColor(color) {
        return color.split(/[(),]/g).slice(1, -1).concat(1).slice(0, 4).map(function (n) { return parseFloat(n); });
    }

    function getValue(prop, percent) {
        return +(!isUndefined(prop.diff)
            ? prop.start + prop.diff * percent * (prop.start < prop.end ? 1 : -1)
            : +prop.end).toFixed(2);
    }

}

if (false) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = plugin;


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    var mixin = UIkit.mixin;
    var util = UIkit.util;
    var $ = util.$;
    var assign = util.assign;
    var doc = util.docElement;
    var docHeight = util.docHeight;
    var fastdom = util.fastdom;
    var getDimensions = util.getDimensions;
    var isWithin = util.isWithin;
    var offset = util.offset;
    var offsetTop = util.offsetTop;
    var pointerDown = util.pointerDown;
    var pointerMove = util.pointerMove;
    var pointerUp = util.pointerUp;
    var preventClick = util.preventClick;
    var promise = util.promise;
    var win = util.win;

    UIkit.component('sortable', {

        mixins: [mixin.class],

        props: {
            group: String,
            animation: Number,
            threshold: Number,
            clsItem: String,
            clsPlaceholder: String,
            clsDrag: String,
            clsDragState: String,
            clsBase: String,
            clsNoDrag: String,
            clsEmpty: String,
            clsCustom: String,
            handle: String
        },

        defaults: {
            group: false,
            animation: 150,
            threshold: 5,
            clsItem: 'uk-sortable-item',
            clsPlaceholder: 'uk-sortable-placeholder',
            clsDrag: 'uk-sortable-drag',
            clsDragState: 'uk-drag',
            clsBase: 'uk-sortable',
            clsNoDrag: 'uk-sortable-nodrag',
            clsEmpty: 'uk-sortable-empty',
            clsCustom: '',
            handle: false
        },

        init: function init() {
            var this$1 = this;

            ['init', 'start', 'move', 'end'].forEach(function (key) {
                var fn = this$1[key];
                this$1[key] = function (e) {
                    e = e.originalEvent || e;
                    this$1.scrollY = window.scrollY;
                    var ref = e.touches && e.touches[0] || e;
                    var x = ref.pageX;
                    var y = ref.pageY;
                    this$1.pos = {x: x, y: y};

                    fn(e);
                }
            });
        },

        events: ( obj = {}, obj[pointerDown] = 'init', obj ),

        update: {

            write: function write() {
                var this$1 = this;


                if (this.clsEmpty) {
                    this.$toggleClass(this.clsEmpty, !this.$el.children().length);
                }

                if (!this.drag) {
                    return;
                }

                offset(this.drag, {top: this.pos.y + this.origin.top, left: this.pos.x + this.origin.left});

                var top = offsetTop(this.drag), bottom = top + this.drag[0].offsetHeight;

                if (top > 0 && top < this.scrollY) {
                    setTimeout(function () { return win.scrollTop(this$1.scrollY - 5); }, 5);
                } else if (bottom < docHeight() && bottom > window.innerHeight + this.scrollY) {
                    setTimeout(function () { return win.scrollTop(this$1.scrollY + 5); }, 5);
                }

            }

        },

        methods: {

            init: function init(e) {

                var target = $(e.target), placeholder = this.$el.children().filter(function (i, el) { return isWithin(e.target, el); });

                if (!placeholder.length
                    || target.is(':input')
                    || this.handle && !isWithin(target, this.handle)
                    || e.button && e.button !== 0
                    || isWithin(target, ("." + (this.clsNoDrag)))
                    || e.defaultPrevented
                ) {
                    return;
                }

                e.preventDefault();

                this.touched = [this];
                this.placeholder = placeholder;
                this.origin = assign({target: target, index: this.placeholder.index()}, this.pos);

                doc.on(pointerMove, this.move);
                doc.on(pointerUp, this.end);
                win.on('scroll', this.scroll);

                if (!this.threshold) {
                    this.start(e);
                }

            },

            start: function start(e) {

                this.drag = $(this.placeholder[0].outerHTML.replace(/^<li/i, '<div').replace(/li>$/i, 'div>'))
                    .attr('uk-no-boot', '')
                    .addClass(((this.clsDrag) + " " + (this.clsCustom)))
                    .css({
                        boxSizing: 'border-box',
                        width: this.placeholder.outerWidth(),
                        height: this.placeholder.outerHeight()
                    })
                    .css(this.placeholder.css(['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom']))
                    .appendTo(UIkit.container);

                this.drag.children().first().height(this.placeholder.children().height());

                var ref = getDimensions(this.placeholder);
                var left = ref.left;
                var top = ref.top;
                assign(this.origin, {left: left - this.pos.x, top: top - this.pos.y});

                this.placeholder.addClass(this.clsPlaceholder);
                this.$el.children().addClass(this.clsItem);
                doc.addClass(this.clsDragState);

                this.$el.trigger('start', [this, this.placeholder, this.drag]);

                this.move(e);
            },

            move: function move(e) {

                if (!this.drag) {

                    if (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) {
                        this.start(e);
                    }

                    return;
                }

                this.$emit();

                var target = e.type === 'mousemove' ? e.target : document.elementFromPoint(this.pos.x - document.body.scrollLeft, this.pos.y - document.body.scrollTop),
                    sortable = getSortable(target),
                    previous = getSortable(this.placeholder[0]),
                    move = sortable !== previous;

                if (!sortable || isWithin(target, this.placeholder) || move && (!sortable.group || sortable.group !== previous.group)) {
                    return;
                }

                target = sortable.$el.is(target.parentNode) && $(target) || sortable.$el.children().has(target);

                if (move) {
                    previous.remove(this.placeholder);
                } else if (!target.length) {
                    return;
                }

                sortable.insert(this.placeholder, target);

                if (!~this.touched.indexOf(sortable)) {
                    this.touched.push(sortable);
                }

            },

            scroll: function scroll() {
                var scroll = window.scrollY;
                if (scroll !== this.scrollY) {
                    this.pos.y += scroll - this.scrollY;
                    this.scrollY = scroll;
                    this.$emit();
                }
            },

            end: function end(e) {

                doc.off(pointerMove, this.move);
                doc.off(pointerUp, this.end);
                win.off('scroll', this.scroll);

                if (!this.drag) {

                    if (e.type !== 'mouseup' && isWithin(e.target, 'a[href]')) {
                        location.href = $(e.target).closest('a[href]').attr('href');
                    }

                    return;
                }

                preventClick();

                var sortable = getSortable(this.placeholder[0]);

                if (this === sortable) {
                    if (this.origin.index !== this.placeholder.index()) {
                        this.$el.trigger('change', [this, this.placeholder, 'moved']);
                    }
                } else {
                    sortable.$el.trigger('change', [sortable, this.placeholder, 'added']);
                    this.$el.trigger('change', [this, this.placeholder, 'removed']);
                }

                this.$el.trigger('stop', [this]);

                this.drag.remove();
                this.drag = null;

                var classes = this.touched.map(function (sortable) { return ((sortable.clsPlaceholder) + " " + (sortable.clsItem)); }).join(' ');
                this.touched.forEach(function (sortable) { return sortable.$el.children().removeClass(classes); });

                doc.removeClass(this.clsDragState);

            },

            insert: function insert(element, target) {
                var this$1 = this;


                this.$el.children().addClass(this.clsItem);

                var insert = function () {

                    if (target.length) {

                        if (!this$1.$el.has(element).length || element.prevAll().filter(target).length) {
                            element.insertBefore(target);
                        } else {
                            element.insertAfter(target);
                        }

                    } else {
                        this$1.$el.append(element);
                    }

                };

                if (this.animation) {
                    this.animate(insert);
                } else {
                    insert();
                }

            },

            remove: function remove(element) {

                if (!this.$el.has(element).length) {
                    return;
                }

                if (this.animation) {
                    this.animate(function () { return element.detach(); });
                } else {
                    element.detach();
                }

            },

            animate: function animate(action) {
                var this$1 = this;


                var props = [],
                    children = this.$el.children().toArray().map(function (el) {
                        el = $(el);
                        props.push(assign({
                            position: 'absolute',
                            pointerEvents: 'none',
                            width: el.outerWidth(),
                            height: el.outerHeight()
                        }, el.position()));
                        return el;
                    }),
                    reset = {position: '', width: '', height: '', pointerEvents: '', top: '', left: ''};

                action();

                children.forEach(function (el) { return el.stop(); });
                this.$el.children().css(reset);
                this.$update('update', true);
                fastdom.flush();

                this.$el.css('min-height', this.$el.height());

                var positions = children.map(function (el) { return el.position(); });
                promise.all(children.map(function (el, i) { return el.css(props[i]).animate(positions[i], this$1.animation).promise(); }))
                    .then(function () {
                        this$1.$el.css('min-height', '').children().css(reset);
                        this$1.$update('update', true);
                        fastdom.flush();
                    });

            }

        }

    });
    var obj;

    function getSortable(element) {
        return UIkit.getComponent(element, 'sortable') || element.parentNode && getSortable(element.parentNode);
    }

}

if (false) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = plugin;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    var util = UIkit.util;
    var mixin = UIkit.mixin;
    var $ = util.$;
    var doc = util.doc;
    var fastdom = util.fastdom;
    var flipPosition = util.flipPosition;
    var isTouch = util.isTouch;
    var isWithin = util.isWithin;
    var pointerDown = util.pointerDown;
    var pointerEnter = util.pointerEnter;
    var pointerLeave = util.pointerLeave;

    var actives = [];

    UIkit.component('tooltip', {

        attrs: true,

        mixins: [mixin.togglable, mixin.position],

        props: {
            delay: Number,
            container: Boolean,
            title: String
        },

        defaults: {
            pos: 'top',
            title: '',
            delay: 0,
            animation: ['uk-animation-scale-up'],
            duration: 100,
            cls: 'uk-active',
            clsPos: 'uk-tooltip',
            container: true,
        },

        computed: {

            container: function container() {
                return $(this.$props.container === true && UIkit.container || this.$props.container || UIkit.container);
            }

        },

        connected: function connected() {
            var this$1 = this;

            fastdom.mutate(function () { return this$1.$el.removeAttr('title').attr('aria-expanded', false); });
        },

        disconnected: function disconnected() {
            this.hide();
        },

        methods: {

            show: function show() {
                var this$1 = this;


                if (~actives.indexOf(this)) {
                    return;
                }

                actives.forEach(function (active) { return active.hide(); });
                actives.push(this);

                doc.on(("click." + (this.$options.name)), function (e) {
                    if (!isWithin(e.target, this$1.$el)) {
                        this$1.hide();
                    }
                });

                clearTimeout(this.showTimer);

                this.tooltip = $(("<div class=\"" + (this.clsPos) + "\" aria-hidden=\"true\"><div class=\"" + (this.clsPos) + "-inner\">" + (this.title) + "</div></div>")).appendTo(this.container);

                this.$el.attr('aria-expanded', true);

                this.positionAt(this.tooltip, this.$el);
                this.origin = this.getAxis() === 'y' ? ((flipPosition(this.dir)) + "-" + (this.align)) : ((this.align) + "-" + (flipPosition(this.dir)));

                this.showTimer = setTimeout(function () {
                    this$1.toggleElement(this$1.tooltip, true);

                    this$1.hideTimer = setInterval(function () {
                        if (!this$1.$el.is(':visible')) {
                            this$1.hide();
                        }
                    }, 150);

                }, this.delay);
            },

            hide: function hide() {

                var index = actives.indexOf(this);

                if (!~index || this.$el.is('input') && this.$el[0] === document.activeElement) {
                    return;
                }

                actives.splice(index, 1);

                clearTimeout(this.showTimer);
                clearInterval(this.hideTimer);
                this.$el.attr('aria-expanded', false);
                this.toggleElement(this.tooltip, false);
                this.tooltip && this.tooltip.remove();
                this.tooltip = false;
                doc.off(("click." + (this.$options.name)));

            }

        },

        events: ( obj = {

            'blur': 'hide'

        }, obj[("focus " + pointerEnter + " " + pointerDown)] = function (e) {
                if (e.type !== pointerDown || !isTouch(e)) {
                    this.show();
                }
            }, obj[pointerLeave] = function (e) {
                if (!isTouch(e)) {
                    this.hide()
                }
            }, obj )

    });
    var obj;

}

if (false) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = plugin;


/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    var ref = UIkit.util;
    var $ = ref.$;
    var ajax = ref.ajax;
    var on = ref.on;

    UIkit.component('upload', {

        props: {
            allow: String,
            clsDragover: String,
            concurrent: Number,
            dataType: String,
            mime: String,
            msgInvalidMime: String,
            msgInvalidName: String,
            multiple: Boolean,
            name: String,
            params: Object,
            type: String,
            url: String
        },

        defaults: {
            allow: false,
            clsDragover: 'uk-dragover',
            concurrent: 1,
            dataType: undefined,
            mime: false,
            msgInvalidMime: 'Invalid File Type: %s',
            msgInvalidName: 'Invalid File Name: %s',
            multiple: false,
            name: 'files[]',
            params: {},
            type: 'POST',
            url: '',
            abort: null,
            beforeAll: null,
            beforeSend: null,
            complete: null,
            completeAll: null,
            error: null,
            fail: function fail(msg) {
                alert(msg);
            },
            load: null,
            loadEnd: null,
            loadStart: null,
            progress: null
        },

        events: {

            change: function change(e) {

                if (!$(e.target).is('input[type="file"]')) {
                    return;
                }

                e.preventDefault();

                if (e.target.files) {
                    this.upload(e.target.files);
                }

                e.target.value = '';
            },

            drop: function drop(e) {
                e.preventDefault();
                e.stopPropagation();

                var transfer = e.originalEvent.dataTransfer;

                if (!transfer || !transfer.files) {
                    return;
                }

                this.$removeClass(this.clsDragover);

                this.upload(transfer.files);
            },

            dragenter: function dragenter(e) {
                e.preventDefault();
                e.stopPropagation();
            },

            dragover: function dragover(e) {
                e.preventDefault();
                e.stopPropagation();
                this.$addClass(this.clsDragover);
            },

            dragleave: function dragleave(e) {
                e.preventDefault();
                e.stopPropagation();
                this.$removeClass(this.clsDragover);
            }

        },

        methods: {

            upload: function upload(files) {
                var this$1 = this;


                if (!files.length) {
                    return;
                }

                this.$el.trigger('upload', [files]);

                for (var i = 0; i < files.length; i++) {

                    if (this$1.allow) {
                        if (!match(this$1.allow, files[i].name)) {
                            this$1.fail(this$1.msgInvalidName.replace(/%s/, this$1.allow));
                            return;
                        }
                    }

                    if (this$1.mime) {
                        if (!match(this$1.mime, files[i].type)) {
                            this$1.fail(this$1.msgInvalidMime.replace(/%s/, this$1.mime));
                            return;
                        }
                    }

                }

                if (!this.multiple) {
                    files = [files[0]];
                }

                this.beforeAll && this.beforeAll(this, files);

                var chunks = chunk(files, this.concurrent),
                    upload = function (files) {

                        var data = new FormData();

                        files.forEach(function (file) { return data.append(this$1.name, file); });

                        for (var key in this$1.params) {
                            data.append(key, this$1.params[key]);
                        }

                        ajax({
                            data: data,
                            url: this$1.url,
                            type: this$1.type,
                            dataType: this$1.dataType,
                            beforeSend: this$1.beforeSend,
                            complete: [this$1.complete, function (xhr, status) {
                                if (chunks.length) {
                                    upload(chunks.shift());
                                } else {
                                    this$1.completeAll && this$1.completeAll(xhr);
                                }

                                if (status === 'abort') {
                                    this$1.abort && this$1.abort(xhr);
                                }
                            }],
                            cache: false,
                            contentType: false,
                            processData: false,
                            xhr: function () {
                                var xhr = $.ajaxSettings.xhr();
                                xhr.upload && this$1.progress && on(xhr.upload, 'progress', this$1.progress);
                                ['loadStart', 'load', 'loadEnd', 'error', 'abort'].forEach(function (type) { return this$1[type] && on(xhr, type.toLowerCase(), this$1[type]); });
                                return xhr;
                            }
                        })

                    };

                upload(chunks.shift());

            }

        }

    });

    function match(pattern, path) {
        return path.match(new RegExp(("^" + (pattern.replace(/\//g, '\\/').replace(/\*\*/g, '(\\/[^\\/]+)*').replace(/\*/g, '[^\\/]+').replace(/((?!\\))\?/g, '$1.')) + "$"), 'i'));
    }

    function chunk(files, size) {
        var chunks = [];
        for (var i = 0; i < files.length; i += size) {
            var chunk = [];
            for (var j = 0; j < size; j++) {
                chunk.push(files[i+j]);
            }
            chunks.push(chunk);
        }
        return chunks;
    }

}

if (false) {
    window.UIkit.use(plugin);
}

/* harmony default export */ __webpack_exports__["a"] = plugin;


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('accordion', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["b" /* Class */], __WEBPACK_IMPORTED_MODULE_0__mixin_index__["c" /* Togglable */]],

        props: {
            targets: String,
            active: null,
            collapsible: Boolean,
            multiple: Boolean,
            toggle: String,
            content: String,
            transition: String
        },

        defaults: {
            targets: '> *',
            active: false,
            animation: [true],
            collapsible: true,
            multiple: false,
            clsOpen: 'uk-open',
            toggle: '> .uk-accordion-title',
            content: '> .uk-accordion-content',
            transition: 'ease'
        },

        computed: {

            items: function items() {
                var this$1 = this;

                var items = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(this.targets, this.$el);
                this._changed = !this._items
                    || items.length !== this._items.length
                    || items.toArray().some(function (el, i) { return el !== this$1._items.get(i); });
                return this._items = items;
            }

        },

        events: [

            {

                name: 'click',

                delegate: function delegate() {
                    return ((this.targets) + " " + (this.$props.toggle));
                },

                handler: function handler(e) {
                    e.preventDefault();
                    this.toggle(this.items.find(this.$props.toggle).index(e.currentTarget));
                }

            }

        ],

        update: function update() {
            var this$1 = this;


            if (!this.items.length || !this._changed) {
                return;
            }

            this.items.each(function (i, el) {
                el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(el);
                this$1.toggleNow(el.find(this$1.content), el.hasClass(this$1.clsOpen));
            });

            var active = this.active !== false && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["toJQuery"])(this.items.eq(Number(this.active))) || !this.collapsible && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["toJQuery"])(this.items.eq(0));
            if (active && !active.hasClass(this.clsOpen)) {
                this.toggle(active, false);
            }

        },

        methods: {

            toggle: function toggle(item, animate) {
                var this$1 = this;


                var index = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["getIndex"])(item, this.items),
                    active = this.items.filter(("." + (this.clsOpen)));

                item = this.items.eq(index);

                item.add(!this.multiple && active).each(function (i, el) {

                    el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(el);

                    var isItem = el.is(item), state = isItem && !el.hasClass(this$1.clsOpen);

                    if (!state && isItem && !this$1.collapsible && active.length < 2) {
                        return;
                    }

                    el.toggleClass(this$1.clsOpen, state);

                    var content = el[0]._wrapper ? el[0]._wrapper.children().first() : el.find(this$1.content);

                    if (!el[0]._wrapper) {
                        el[0]._wrapper = content.wrap('<div>').parent().attr('hidden', state);
                    }

                    this$1._toggleImmediate(content, true);
                    this$1.toggleElement(el[0]._wrapper, state, animate).then(function () {
                        if (el.hasClass(this$1.clsOpen) === state) {

                            if (!state) {
                                this$1._toggleImmediate(content, false);
                            }

                            el[0]._wrapper = null;
                            content.unwrap();
                        }
                    });

                })
            }

        }

    });

};


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('alert', {

        attrs: true,

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["b" /* Class */], __WEBPACK_IMPORTED_MODULE_0__mixin_index__["c" /* Togglable */]],

        args: 'animation',

        props: {
            close: String
        },

        defaults: {
            animation: [true],
            selClose: '.uk-alert-close',
            duration: 150,
            hideProps: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["assign"])({opacity: 0}, __WEBPACK_IMPORTED_MODULE_0__mixin_index__["c" /* Togglable */].defaults.hideProps)
        },

        events: [

            {

                name: 'click',

                delegate: function delegate() {
                    return this.selClose;
                },

                handler: function handler(e) {
                    e.preventDefault();
                    this.close();
                }

            }

        ],

        methods: {

            close: function close() {
                var this$1 = this;

                this.toggleElement(this.$el).then(function () { return this$1.$destroy(true); });
            }

        }

    });

};


/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('cover', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["b" /* Class */]],

        props: {
            width: Number,
            height: Number
        },

        computed: {

            el: function el() {
                return this.$el[0];
            },

            parent: function parent() {
                return this.el.parentNode;
            }

        },

        ready: function ready() {

            if (this.$el.is('iframe')) {
                this.$el.css('pointerEvents', 'none');
            }

            var player = new __WEBPACK_IMPORTED_MODULE_1__util_index__["Player"](this.$el);

            if (player.isVideo()) {
                player.mute();
            }

        },

        update: {

            write: function write() {

                if (this.el.offsetHeight === 0) {
                    return;
                }

                this.$el
                    .css({width: '', height: ''})
                    .css(__WEBPACK_IMPORTED_MODULE_1__util_index__["Dimensions"].cover(
                        {width: this.width || this.el.clientWidth, height: this.height || this.el.clientHeight},
                        {width: this.parent.offsetWidth, height: this.parent.offsetHeight}
                    ));

            },

            events: ['load', 'resize']

        },

        events: {

            loadedmetadata: function loadedmetadata() {
                this.$emit();
            }

        }

    });

};


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    var active;

    UIkit.component('drop', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["e" /* Position */], __WEBPACK_IMPORTED_MODULE_0__mixin_index__["c" /* Togglable */]],

        args: 'pos',

        props: {
            mode: 'list',
            toggle: Boolean,
            boundary: 'jQuery',
            boundaryAlign: Boolean,
            delayShow: Number,
            delayHide: Number,
            clsDrop: String
        },

        defaults: {
            mode: ['click', 'hover'],
            toggle: '- :first',
            boundary: window,
            boundaryAlign: false,
            delayShow: 0,
            delayHide: 800,
            clsDrop: false,
            hoverIdle: 200,
            animation: ['uk-animation-fade'],
            cls: 'uk-open'
        },

        init: function init() {
            this.tracker = new __WEBPACK_IMPORTED_MODULE_1__util_index__["MouseTracker"]();
            this.clsDrop = this.clsDrop || ("uk-" + (this.$options.name));
            this.clsPos = this.clsDrop;

            this.$addClass(this.clsDrop);
        },

        ready: function ready() {

            this.updateAria(this.$el);

            if (this.toggle) {
                this.toggle = UIkit.toggle(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["query"])(this.toggle, this.$el), {target: this.$el, mode: this.mode});
            }

        },

        events: [

            {

                name: 'click',

                delegate: function delegate() {
                    return ("." + (this.clsDrop) + "-close");
                },

                handler: function handler(e) {
                    e.preventDefault();
                    this.hide(false);
                }

            },

            {

                name: 'click',

                delegate: function delegate() {
                    return 'a[href^="#"]';
                },

                handler: function handler(e) {

                    if (e.isDefaultPrevented()) {
                        return;
                    }

                    var id = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(e.target).attr('href');

                    if (id.length === 1) {
                        e.preventDefault();
                    }

                    if (id.length === 1 || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["isWithin"])(id, this.$el)) {
                        this.hide(false);
                    }
                }

            },

            {

                name: 'toggle',

                handler: function handler(e, toggle) {

                    if (toggle && !this.$el.is(toggle.target)) {
                        return;
                    }

                    e.preventDefault();

                    if (this.isToggled()) {
                        this.hide(false);
                    } else {
                        this.show(toggle, false);
                    }
                }

            },

            {

                name: __WEBPACK_IMPORTED_MODULE_1__util_index__["pointerEnter"],

                filter: function filter() {
                    return ~this.mode.indexOf('hover');
                },

                handler: function handler(e) {

                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["isTouch"])(e)) {
                        return;
                    }

                    if (active
                        && active !== this
                        && active.toggle
                        && ~active.toggle.mode.indexOf('hover')
                        && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["isWithin"])(e.target, active.$el)
                        && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["isWithin"])(e.target, active.toggle.$el)
                    ) {
                        active.hide(false);
                    }

                    e.preventDefault();
                    this.show(this.toggle);
                }

            },

            {

                name: 'toggleshow',

                handler: function handler(e, toggle) {

                    if (toggle && !this.$el.is(toggle.target)) {
                        return;
                    }

                    e.preventDefault();
                    this.show(toggle || this.toggle);
                }

            },

            {

                name: ("togglehide " + __WEBPACK_IMPORTED_MODULE_1__util_index__["pointerLeave"]),

                handler: function handler(e, toggle) {

                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["isTouch"])(e) || toggle && !this.$el.is(toggle.target)) {
                        return;
                    }

                    e.preventDefault();

                    if (this.toggle && ~this.toggle.mode.indexOf('hover')) {
                        this.hide();
                    }
                }

            },

            {

                name: 'beforeshow',

                self: true,

                handler: function handler() {
                    this.clearTimers();
                }

            },

            {

                name: 'show',

                self: true,

                handler: function handler() {
                    this.tracker.init();
                    this.toggle.$el.addClass(this.cls).attr('aria-expanded', 'true');
                    registerEvent();
                }

            },

            {

                name: 'beforehide',

                self: true,

                handler: function handler() {
                    this.clearTimers();
                }

            },

            {

                name: 'hide',

                handler: function handler(ref) {
                    var target = ref.target;


                    if (!this.$el.is(target)) {
                        active = active === null && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["isWithin"])(target, this.$el) && this.isToggled() ? this : active;
                        return;
                    }

                    active = this.isActive() ? null : active;
                    this.toggle.$el.removeClass(this.cls).attr('aria-expanded', 'false').blur().find('a, button').blur();
                    this.tracker.cancel();
                }

            }

        ],

        update: {

            write: function write() {

                if (this.isToggled() && !__WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].inProgress(this.$el)) {
                    this.position();
                }

            },

            events: ['resize']

        },

        methods: {

            show: function show(toggle, delay) {
                var this$1 = this;
                if ( delay === void 0 ) delay = true;


                var show = function () {
                        if (!this$1.isToggled()) {
                            this$1.position();
                            this$1.toggleElement(this$1.$el, true);
                        }
                    },
                    tryShow = function () {

                        this$1.toggle = toggle || this$1.toggle;

                        this$1.clearTimers();

                        if (this$1.isActive()) {
                            return;
                        } else if (delay && active && active !== this$1 && active.isDelaying) {
                            this$1.showTimer = setTimeout(this$1.show, 10);
                            return;
                        } else if (this$1.isParentOf(active)) {

                            if (active.hideTimer) {
                                active.hide(false);
                            } else {
                                return;
                            }

                        } else if (active && !this$1.isChildOf(active) && !this$1.isParentOf(active)) {

                            var prev;
                            while (active && active !== prev && !this$1.isChildOf(active)) {
                                prev = active;
                                active.hide(false);
                            }

                        }

                        if (delay && this$1.delayShow) {
                            this$1.showTimer = setTimeout(show, this$1.delayShow);
                        } else {
                            show();
                        }

                        active = this$1;
                    };

                if (toggle && this.toggle && !this.toggle.$el.is(toggle.$el)) {

                    this.$el.one('hide', tryShow);
                    this.hide(false);

                } else {
                    tryShow();
                }
            },

            hide: function hide(delay) {
                var this$1 = this;
                if ( delay === void 0 ) delay = true;


                var hide = function () { return this$1.toggleNow(this$1.$el, false); };

                this.clearTimers();

                this.isDelaying = this.tracker.movesTo(this.$el);

                if (delay && this.isDelaying) {
                    this.hideTimer = setTimeout(this.hide, this.hoverIdle);
                } else if (delay && this.delayHide) {
                    this.hideTimer = setTimeout(hide, this.delayHide);
                } else {
                    hide();
                }
            },

            clearTimers: function clearTimers() {
                clearTimeout(this.showTimer);
                clearTimeout(this.hideTimer);
                this.showTimer = null;
                this.hideTimer = null;
                this.isDelaying = false;
            },

            isActive: function isActive() {
                return active === this;
            },

            isChildOf: function isChildOf(drop) {
                return drop && drop !== this && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["isWithin"])(this.$el, drop.$el);
            },

            isParentOf: function isParentOf(drop) {
                return drop && drop !== this && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["isWithin"])(drop.$el, this.$el);
            },

            position: function position() {

                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["removeClass"])(this.$el, ((this.clsDrop) + "-(stack|boundary)")).css({top: '', left: ''});

                this.$el.show().toggleClass(((this.clsDrop) + "-boundary"), this.boundaryAlign);

                var boundary = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["getDimensions"])(this.boundary), alignTo = this.boundaryAlign ? boundary : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["getDimensions"])(this.toggle.$el);

                if (this.align === 'justify') {
                    var prop = this.getAxis() === 'y' ? 'width' : 'height';
                    this.$el.css(prop, alignTo[prop]);
                } else if (this.$el.outerWidth() > Math.max(boundary.right - alignTo.left, alignTo.right - boundary.left)) {
                    this.$addClass(((this.clsDrop) + "-stack"));
                    this.$el.trigger('stack', [this]);
                }

                this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary);

                this.$el[0].style.display = '';

            }

        }

    });

    UIkit.drop.getActive = function () { return active; };

    var registered;
    function registerEvent() {

        if (registered) {
            return;
        }

        registered = true;
        __WEBPACK_IMPORTED_MODULE_1__util_index__["doc"].on('click', function (e) {
            var prev;
            while (active && active !== prev && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["isWithin"])(e.target, active.$el) && !(active.toggle && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["isWithin"])(e.target, active.toggle.$el))) {
                prev = active;
                active.hide(false);
            }
        });
    }

};


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('dropdown', UIkit.components.drop.extend({name: 'dropdown'}));

};


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('form-custom', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["b" /* Class */]],

        args: 'target',

        props: {
            target: Boolean
        },

        defaults: {
            target: false
        },

        computed: {

            input: function input() {
                return this.$el.find(':input:first');
            },

            state: function state() {
                return this.input.next();
            },

            target: function target() {
                return this.$props.target && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["query"])(this.$props.target === true ? '> :input:first + :first' : this.$props.target, this.$el)
            }

        },

        connected: function connected() {
            this.input.trigger('change');
        },

        events: [

            {

                name: 'focusin focusout mouseenter mouseleave',

                delegate: ':input:first',

                handler: function handler(ref) {
                    var type = ref.type;

                    this.state.toggleClass(("uk-" + (~type.indexOf('focus') ? 'focus' : 'hover')), ~['focusin', 'mouseenter'].indexOf(type));
                }

            },

            {

                name: 'change',

                handler: function handler() {
                    this.target && this.target[this.target.is(':input') ? 'val' : 'text'](
                        this.input[0].files && this.input[0].files[0]
                            ? this.input[0].files[0].name
                            : this.input.is('select')
                                ? this.input.find('option:selected').text()
                                : this.input.val()
                    );
                }

            }

        ]

    });

};


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('gif', {

        update: {

            read: function read() {

                var inview = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isInView"])(this.$el);

                if (!this.isInView && inview) {
                    this.$el[0].src = this.$el[0].src;
                }

                this.isInView = inview;
            },

            events: ['scroll', 'load', 'resize']
        }

    });

};


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('grid', UIkit.components.margin.extend({

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["b" /* Class */]],

        name: 'grid',

        defaults: {
            margin: 'uk-grid-margin',
            clsStack: 'uk-grid-stack'
        },

        update: {

            write: function write() {

                this.$toggleClass(this.clsStack, this.stacks);

            },

            events: ['load', 'resize']

        }

    }));

};


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('height-match', {

        args: 'target',

        props: {
            target: String,
            row: Boolean
        },

        defaults: {
            target: '> *',
            row: true
        },

        computed: {

            elements: function elements() {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(this.target, this.$el);
            }

        },

        update: {

            read: function read() {
                var this$1 = this;


                var lastOffset = false;

                this.elements.css('minHeight', '');

                this.rows = !this.row
                    ? [this.match(this.elements)]
                    : this.elements.toArray().reduce(function (rows, el) {

                        if (lastOffset !== el.offsetTop) {
                            rows.push([el]);
                        } else {
                            rows[rows.length - 1].push(el);
                        }

                        lastOffset = el.offsetTop;

                        return rows;

                    }, []).map(function (elements) { return this$1.match(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(elements)); });
            },

            write: function write() {

                this.rows.forEach(function (ref) {
                        var height = ref.height;
                        var elements = ref.elements;

                        return elements && elements.each(function (_, el) { return el.style.minHeight = height + "px"; }
                    );
                }
                );

            },

            events: ['load', 'resize']

        },

        methods: {

            match: function match(elements) {

                if (elements.length < 2) {
                    return {};
                }

                var max = 0, heights = [];

                elements = elements
                    .each(function (_, el) {

                        var $el, style, hidden;

                        if (el.offsetHeight === 0) {
                            $el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(el);
                            style = $el.attr('style') || null;
                            hidden = $el.attr('hidden') || null;

                            $el.attr({
                                style: (style + ";display:block !important;"),
                                hidden: null
                            });
                        }

                        max = Math.max(max, el.offsetHeight);
                        heights.push(el.offsetHeight);

                        if ($el) {
                            $el.attr({style: style, hidden: hidden});
                        }

                    })
                    .filter(function (i) { return heights[i] < max; });

                return {height: max, elements: elements};
            }
        }

    });

};


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('height-viewport', {

        props: {
            expand: Boolean,
            offsetTop: Boolean,
            offsetBottom: Boolean
        },

        defaults: {
            expand: false,
            offsetTop: false,
            offsetBottom: false
        },

        update: {

            write: function write() {

                this.$el.css('boxSizing', 'border-box');

                var viewport = window.innerHeight, height, offset = 0;

                if (this.expand) {

                    this.$el.css({height: '', minHeight: ''});

                    var diff = viewport - document.documentElement.offsetHeight;

                    if (diff > 0) {
                        this.$el.css('min-height', height = this.$el.outerHeight() + diff)
                    }

                } else {

                    var top = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["offsetTop"])(this.$el);

                    if (top < viewport / 2 && this.offsetTop) {
                        offset += top;
                    }

                    if (this.offsetBottom === true) {

                        offset += this.$el.next().outerHeight() || 0;

                    } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isNumeric"])(this.offsetBottom)) {

                        offset += (viewport / 100) * this.offsetBottom;

                    } else if (this.offsetBottom && this.offsetBottom.substr(-2) === 'px') {

                        offset += parseFloat(this.offsetBottom);

                    } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isString"])(this.offsetBottom)) {

                        var el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["query"])(this.offsetBottom, this.$el);
                        offset += el && el.outerHeight() || 0;

                    }

                    this.$el.css('min-height', height = offset ? ("calc(100vh - " + offset + "px)") : '100vh');

                }

                // IE 10-11 fix (min-height on a flex container won't apply to its flex items)
                this.$el.height('');
                if (height && viewport - offset >= this.$el.outerHeight()) {
                    this.$el.css('height', height);
                }

            },

            events: ['load', 'resize']

        }

    });

};


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["ready"])(function () {

        if (!__WEBPACK_IMPORTED_MODULE_0__util_index__["hasTouch"]) {
            return;
        }

        var cls = 'uk-hover';

        __WEBPACK_IMPORTED_MODULE_0__util_index__["docElement"].on('tap', function (ref) {
            var target = ref.target;

            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(("." + cls)).filter(function (_, el) { return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isWithin"])(target, el); }).removeClass(cls);
        });

        Object.defineProperty(UIkit, 'hoverSelector', {

            set: function set(selector) {
                __WEBPACK_IMPORTED_MODULE_0__util_index__["docElement"].on('tap', selector, function (ref) {
                    var currentTarget = ref.currentTarget;

                    return currentTarget.classList.add(cls);
                });
            }

        });

        UIkit.hoverSelector = '.uk-animation-toggle, .uk-transition-toggle, [uk-hover]';

    });

};


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images_components_close_icon_svg__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__images_components_close_icon_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__images_components_close_icon_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_components_close_large_svg__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__images_components_close_large_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__images_components_close_large_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__images_components_marker_svg__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__images_components_marker_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__images_components_marker_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__images_components_navbar_toggle_icon_svg__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__images_components_navbar_toggle_icon_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__images_components_navbar_toggle_icon_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__images_components_overlay_icon_svg__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__images_components_overlay_icon_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__images_components_overlay_icon_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__images_components_pagination_next_svg__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__images_components_pagination_next_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__images_components_pagination_next_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__images_components_pagination_previous_svg__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__images_components_pagination_previous_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__images_components_pagination_previous_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__images_components_search_icon_svg__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__images_components_search_icon_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__images_components_search_icon_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__images_components_search_large_svg__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__images_components_search_large_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__images_components_search_large_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__images_components_search_navbar_svg__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__images_components_search_navbar_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__images_components_search_navbar_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__images_components_slidenav_next_svg__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__images_components_slidenav_next_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__images_components_slidenav_next_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__images_components_slidenav_next_large_svg__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__images_components_slidenav_next_large_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__images_components_slidenav_next_large_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__images_components_slidenav_previous_svg__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__images_components_slidenav_previous_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__images_components_slidenav_previous_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__images_components_slidenav_previous_large_svg__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__images_components_slidenav_previous_large_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__images_components_slidenav_previous_large_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__images_components_spinner_svg__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__images_components_spinner_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__images_components_spinner_svg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__images_components_totop_svg__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__images_components_totop_svg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17__images_components_totop_svg__);



















/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    var parsed = {},
        icons = {
            spinner: __WEBPACK_IMPORTED_MODULE_16__images_components_spinner_svg___default.a,
            totop: __WEBPACK_IMPORTED_MODULE_17__images_components_totop_svg___default.a,
            marker: __WEBPACK_IMPORTED_MODULE_4__images_components_marker_svg___default.a,
            'close-icon': __WEBPACK_IMPORTED_MODULE_2__images_components_close_icon_svg___default.a,
            'close-large': __WEBPACK_IMPORTED_MODULE_3__images_components_close_large_svg___default.a,
            'navbar-toggle-icon': __WEBPACK_IMPORTED_MODULE_5__images_components_navbar_toggle_icon_svg___default.a,
            'overlay-icon': __WEBPACK_IMPORTED_MODULE_6__images_components_overlay_icon_svg___default.a,
            'pagination-next': __WEBPACK_IMPORTED_MODULE_7__images_components_pagination_next_svg___default.a,
            'pagination-previous': __WEBPACK_IMPORTED_MODULE_8__images_components_pagination_previous_svg___default.a,
            'search-icon': __WEBPACK_IMPORTED_MODULE_9__images_components_search_icon_svg___default.a,
            'search-large': __WEBPACK_IMPORTED_MODULE_10__images_components_search_large_svg___default.a,
            'search-navbar': __WEBPACK_IMPORTED_MODULE_11__images_components_search_navbar_svg___default.a,
            'slidenav-next': __WEBPACK_IMPORTED_MODULE_12__images_components_slidenav_next_svg___default.a,
            'slidenav-next-large': __WEBPACK_IMPORTED_MODULE_13__images_components_slidenav_next_large_svg___default.a,
            'slidenav-previous': __WEBPACK_IMPORTED_MODULE_14__images_components_slidenav_previous_svg___default.a,
            'slidenav-previous-large': __WEBPACK_IMPORTED_MODULE_15__images_components_slidenav_previous_large_svg___default.a
        };

    UIkit.component('icon', UIkit.components.svg.extend({

        attrs: ['icon', 'ratio'],

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["b" /* Class */]],

        name: 'icon',

        args: 'icon',

        props: ['icon'],

        defaults: {exclude: ['id', 'style', 'class', 'src', 'icon']},

        init: function init() {
            this.$addClass('uk-icon');

            if (__WEBPACK_IMPORTED_MODULE_1__util_index__["isRtl"]) {
                this.icon = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["swap"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["swap"])(this.icon, 'left', 'right'), 'previous', 'next');
            }
        },

        update: {

            read: function read() {

                if (this.delay) {
                    var icon = this.getIcon();

                    if (icon) {
                        this.delay(icon);
                    }
                }
            },

            events: ['load']

        },

        methods: {

            getSvg: function getSvg() {
                var this$1 = this;


                var icon = this.getIcon();

                if (!icon) {

                    if (document.readyState !== 'complete') {
                        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["promise"])(function (resolve) {
                            this$1.delay = resolve;
                        });
                    }

                    return __WEBPACK_IMPORTED_MODULE_1__util_index__["promise"].reject('Icon not found.');

                }

                return __WEBPACK_IMPORTED_MODULE_1__util_index__["promise"].resolve(icon);
            },

            getIcon: function getIcon() {

                if (!icons[this.icon]) {
                    return null;
                }

                if (!parsed[this.icon]) {
                    parsed[this.icon] = this.parse(icons[this.icon]);
                }

                return parsed[this.icon];
            }

        }

    }));

    [
        'marker',
        'navbar-toggle-icon',
        'overlay-icon',
        'pagination-previous',
        'pagination-next',
        'totop'
    ].forEach(function (name) { return registerComponent(name); });

    [
        'slidenav-previous',
        'slidenav-next'
    ].forEach(function (name) { return registerComponent(name, {

        init: function init() {
            this.$addClass('uk-slidenav');

            if (this.$hasClass('uk-slidenav-large')) {
                this.icon += '-large';
            }
        }

    }); });

    registerComponent('search-icon', {

        init: function init() {
            if (this.$hasClass('uk-search-icon') && this.$el.parents('.uk-search-large').length) {
                this.icon = 'search-large';
            } else if (this.$el.parents('.uk-search-navbar').length) {
                this.icon = 'search-navbar';
            }
        }

    });

    registerComponent('close', {

        init: function init() {
            this.icon = "close-" + (this.$hasClass('uk-close-large') ? 'large' : 'icon');
        }

    });

    registerComponent('spinner', {

        connected: function connected() {
            var this$1 = this;

            this.svg.then(function (svg) { return this$1.ratio !== 1 && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(svg).find('circle').css('stroke-width', 1 / this$1.ratio); });
        }

    });

    UIkit.icon.add = function (added) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["assign"])(icons, added); };

    function registerComponent(name, mixin) {

        UIkit.component(name, UIkit.components.icon.extend({

            name: name,

            mixins: mixin ? [mixin] : [],

            defaults: {
                icon: name
            }

        }));
    }

};


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cover__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__drop__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dropdown__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__form_custom__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__gif__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__grid__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__height_match__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__height_viewport__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__hover__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__icon__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__margin__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__modal__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__nav__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__navbar__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__offcanvas__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__responsive__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__scroll__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__scrollspy__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__scrollspy_nav__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__sticky__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__svg__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__switcher__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__tab__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__toggle__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__leader__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__video__ = __webpack_require__(51);































/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    var scroll = 0, started = 0;

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["on"])(window, 'load resize', UIkit.update);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["on"])(window, 'scroll', function (e) {
        e.dir = scroll < window.pageYOffset ? 'down' : 'up';
        scroll = window.pageYOffset;
        UIkit.update(e);
        __WEBPACK_IMPORTED_MODULE_0__util_index__["fastdom"].flush();
    });

    __WEBPACK_IMPORTED_MODULE_0__util_index__["animationstart"] && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["on"])(document, __WEBPACK_IMPORTED_MODULE_0__util_index__["animationstart"], function (ref) {
        var target = ref.target;

        if ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["getStyle"])(target, 'animationName') || '').match(/^uk-.*(left|right)/)) {
            started++;
            document.body.style.overflowX = 'hidden';
            setTimeout(function () {
                if (!--started) {
                    document.body.style.overflowX = '';
                }
            }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["toMs"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["getStyle"])(target, 'animationDuration')) + 100);
        }
    }, true);

    // core components
    UIkit.use(__WEBPACK_IMPORTED_MODULE_26__toggle__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_1__accordion__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_2__alert__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_28__video__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_3__cover__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_4__drop__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_5__dropdown__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_6__form_custom__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_9__height_match__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_10__height_viewport__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_11__hover__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_13__margin__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_7__gif__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_8__grid__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_27__leader__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_14__modal__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_15__nav__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_16__navbar__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_17__offcanvas__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_18__responsive__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_19__scroll__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_20__scrollspy__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_21__scrollspy_nav__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_22__sticky__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_23__svg__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_12__icon__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_24__switcher__["a" /* default */]);
    UIkit.use(__WEBPACK_IMPORTED_MODULE_25__tab__["a" /* default */]);

};


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('leader', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["b" /* Class */]],

        props: {
            fill: String,
            media: 'media'
        },

        defaults: {
            fill: '',
            media: false,
            clsWrapper: 'uk-leader-fill',
            clsHide: 'uk-leader-hide',
            attrFill: 'data-fill'
        },

        computed: {

            fill: function fill() {
                return this.$props.fill || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["getCssVar"])('leader-fill');
            }

        },

        connected: function connected() {
            this.wrapper = this.$el.wrapInner(("<span class=\"" + (this.clsWrapper) + "\">")).children().first();
        },

        disconnected: function disconnected() {
            this.wrapper.contents().unwrap();
        },

        update: [

            {

                read: function read() {
                    var prev = this._width;
                    this._width = Math.floor(this.$el[0].offsetWidth / 2);
                    this._changed = prev !== this._width;
                    this._hide = this.media && !window.matchMedia(this.media).matches;
                },

                write: function write() {

                    this.wrapper.toggleClass(this.clsHide, this._hide);

                    if (this._changed) {
                        this.wrapper.attr(this.attrFill, new Array(this._width).join(this.fill));
                    }

               },

                events: ['load', 'resize']

            }
        ]
    });

};


/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('margin', {

        props: {
            margin: String,
            firstColumn: Boolean
        },

        defaults: {
            margin: 'uk-margin-small-top',
            firstColumn: 'uk-first-column'
        },

        computed: {

            items: function items() {
                return this.$el[0].children;
            }

        },

        update: {

            read: function read() {
                var this$1 = this;


                if (!this.items.length || this.$el[0].offsetHeight === 0) {
                    this.rows = false;
                    return;
                }

                this.stacks = true;

                var rows = [[]];

                for (var i = 0; i < this.items.length; i++) {

                    var el = this$1.items[i],
                        dim = el.getBoundingClientRect();

                    if (!dim.height) {
                        continue;
                    }

                    for (var j = rows.length - 1; j >= 0; j--) {

                        var row = rows[j];

                        if (!row[0]) {
                            row.push(el);
                            break;
                        }

                        var leftDim = row[0].getBoundingClientRect();

                        if (dim.top >= Math.floor(leftDim.bottom)) {
                            rows.push([el]);
                            break;
                        }

                        if (Math.floor(dim.bottom) > leftDim.top) {

                            this$1.stacks = false;

                            if (dim.left < leftDim.left && !__WEBPACK_IMPORTED_MODULE_0__util_index__["isRtl"]) {
                                row.unshift(el);
                                break;
                            }

                            row.push(el);
                            break;
                        }

                        if (j === 0) {
                            rows.unshift([el]);
                            break;
                        }

                    }

                }

                this.rows = rows;

            },

            write: function write() {
                var this$1 = this;


                this.rows && this.rows.forEach(function (row, i) { return row.forEach(function (el, j) {
                        this$1.$toggleClass(el, this$1.margin, i !== 0);
                        this$1.$toggleClass(el, this$1.firstColumn, j === 0);
                    }); }
                )

            },

            events: ['load', 'resize']

        }

    });

};


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('modal', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["d" /* Modal */]],

        defaults: {
            clsPage: 'uk-modal-page',
            clsPanel: 'uk-modal-dialog',
            selClose: '.uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full'
        },

        events: [

            {
                name: 'beforeshow',

                self: true,

                handler: function handler() {

                    if (this.panel.hasClass('uk-margin-auto-vertical')) {
                        this.$el.addClass('uk-flex').height();
                    } else {
                        this.$el.css('display', 'block').height();
                    }

                }
            },

            {
                name: 'hidden',

                self: true,

                handler: function handler() {

                    this.$el.css('display', '').removeClass('uk-flex');

                }
            }

        ]

    });

    UIkit.component('overflow-auto', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["b" /* Class */]],

        computed: {

            modal: function modal() {
                return this.$el.closest('.uk-modal');
            },

            panel: function panel() {
                return this.$el.closest('.uk-modal-dialog');
            }

        },

        connected: function connected() {
            this.$el.css('min-height', 150);
        },

        update: {

            write: function write() {
                var current = this.$el.css('max-height');

                this.$el.css('max-height', 150).css('max-height', Math.max(150, 150 + this.modal.height() - this.panel.outerHeight(true)));
                if (current !== this.$el.css('max-height')) {
                    this.$el.trigger('resize');
                }
            },

            events: ['load', 'resize']

        }

    });

    UIkit.modal.dialog = function (content, options) {

        var dialog = UIkit.modal(("\n            <div class=\"uk-modal\">\n                <div class=\"uk-modal-dialog\">" + content + "</div>\n             </div>\n        "), options);

        dialog.$el.on('hidden', function (e) {
            if (e.target === e.currentTarget) {
                dialog.$destroy(true);
            }
        });
        dialog.show();

        return dialog;
    };

    UIkit.modal.alert = function (message, options) {

        options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["assign"])({bgClose: false, escClose: false, labels: UIkit.modal.labels}, options);

        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["promise"])(
            function (resolve) { return UIkit.modal.dialog(("\n                <div class=\"uk-modal-body\">" + (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["isString"])(message) ? message : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(message).html()) + "</div>\n                <div class=\"uk-modal-footer uk-text-right\">\n                    <button class=\"uk-button uk-button-primary uk-modal-close\" autofocus>" + (options.labels.ok) + "</button>\n                </div>\n            "), options).$el.on('hide', resolve); }
        );
    };

    UIkit.modal.confirm = function (message, options) {

        options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["assign"])({bgClose: false, escClose: false, labels: UIkit.modal.labels}, options);

        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["promise"])(
            function (resolve, reject) { return UIkit.modal.dialog(("\n                <div class=\"uk-modal-body\">" + (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["isString"])(message) ? message : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(message).html()) + "</div>\n                <div class=\"uk-modal-footer uk-text-right\">\n                    <button class=\"uk-button uk-button-default uk-modal-close\">" + (options.labels.cancel) + "</button>\n                    <button class=\"uk-button uk-button-primary uk-modal-close\" autofocus>" + (options.labels.ok) + "</button>\n                </div>\n            "), options).$el.on('click', '.uk-modal-footer button', function (e) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(e.target).index() === 0 ? reject() : resolve(); }); }
        );
    };

    UIkit.modal.prompt = function (message, value, options) {

        options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["assign"])({bgClose: false, escClose: false, labels: UIkit.modal.labels}, options);

        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["promise"])(function (resolve) {

            var resolved = false,
                prompt = UIkit.modal.dialog(("\n                    <form class=\"uk-form-stacked\">\n                        <div class=\"uk-modal-body\">\n                            <label>" + (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["isString"])(message) ? message : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(message).html()) + "</label>\n                            <input class=\"uk-input\" type=\"text\" autofocus>\n                        </div>\n                        <div class=\"uk-modal-footer uk-text-right\">\n                            <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" + (options.labels.cancel) + "</button>\n                            <button class=\"uk-button uk-button-primary\" type=\"submit\">" + (options.labels.ok) + "</button>\n                        </div>\n                    </form>\n                "), options),
                input = prompt.$el.find('input').val(value);

            prompt.$el
                .on('submit', 'form', function (e) {
                    e.preventDefault();
                    resolve(input.val());
                    resolved = true;
                    prompt.hide()
                })
                .on('hide', function () {
                    if (!resolved) {
                        resolve(null);
                    }
                });

        });
    };

    UIkit.modal.labels = {
        ok: 'Ok',
        cancel: 'Cancel'
    }

};


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('nav', UIkit.components.accordion.extend({

        name: 'nav',

        defaults: {
            targets: '> .uk-parent',
            toggle: '> a',
            content: 'ul:first'
        }

    }));

};


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('navbar', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["b" /* Class */]],

        props: {
            dropdown: String,
            mode: 'list',
            align: String,
            offset: Number,
            boundary: Boolean,
            boundaryAlign: Boolean,
            clsDrop: String,
            delayShow: Number,
            delayHide: Number,
            dropbar: Boolean,
            dropbarMode: String,
            dropbarAnchor: 'jQuery',
            duration: Number
        },

        defaults: {
            dropdown: '.uk-navbar-nav > li',
            align: !__WEBPACK_IMPORTED_MODULE_1__util_index__["isRtl"] ? 'left' : 'right',
            clsDrop: 'uk-navbar-dropdown',
            mode: undefined,
            offset: undefined,
            delayShow: undefined,
            delayHide: undefined,
            boundaryAlign: undefined,
            flip: 'x',
            boundary: true,
            dropbar: false,
            dropbarMode: 'slide',
            dropbarAnchor: false,
            duration: 200,
        },

        computed: {

            boundary: function boundary() {
                return (this.$props.boundary === true || this.boundaryAlign) ? this.$el : this.$props.boundary
            },

            pos: function pos() {
                return ("bottom-" + (this.align));
            }

        },

        ready: function ready() {

            if (this.dropbar) {
                UIkit.navbarDropbar(
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["query"])(this.dropbar, this.$el) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])('<div></div>').insertAfter(this.dropbarAnchor || this.$el),
                    {clsDrop: this.clsDrop, mode: this.dropbarMode, duration: this.duration, navbar: this}
                );
            }

        },

        update: function update() {

            UIkit.drop(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(((this.dropdown) + " ." + (this.clsDrop)), this.$el), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["assign"])({}, this.$props, {boundary: this.boundary, pos: this.pos}));

        },

        events: [

            {
                name: __WEBPACK_IMPORTED_MODULE_1__util_index__["pointerEnter"],

                delegate: function delegate() {
                    return this.dropdown;
                },

                handler: function handler(ref) {
                    var currentTarget = ref.currentTarget;

                    var active = this.getActive();
                    if (active && active.toggle && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["isWithin"])(active.toggle.$el, currentTarget) && !active.tracker.movesTo(active.$el)) {
                        active.hide(false);
                    }
                }

            }

        ],

        methods: {

            getActive: function getActive() {
                var active = UIkit.drop.getActive();
                return active && active.mode !== 'click' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["isWithin"])(active.toggle.$el, this.$el) && active;
            }

        }

    });

    UIkit.component('navbar-dropbar', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["b" /* Class */]],

        defaults: {
            clsDrop: '',
            mode: 'slide',
            navbar: null,
            duration: 200
        },

        init: function init() {

            if (this.mode === 'slide') {
                this.$addClass('uk-navbar-dropbar-slide');
            }

        },

        events: [

            {
                name: 'beforeshow',

                el: function el() {
                    return this.navbar.$el;
                },

                handler: function handler(_, drop) {
                    var $el = drop.$el;
                    var dir = drop.dir;
                    if (dir === 'bottom' && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["isWithin"])($el, this.$el)) {
                        $el.appendTo(this.$el);
                        drop.show();
                        return false;
                    }
                }
            },

            {
                name: 'mouseleave',

                handler: function handler() {
                    var active = this.navbar.getActive();

                    if (active && !this.$el.is(':hover')) {
                        active.hide();
                    }
                }
            },

            {
                name: 'beforeshow',

                handler: function handler(e, ref) {
                    var $el = ref.$el;

                    this.clsDrop && $el.addClass(((this.clsDrop) + "-dropbar"));
                    this.transitionTo($el.outerHeight(true));
                }
            },

            {
                name: 'beforehide',

                handler: function handler(e, ref) {
                    var $el = ref.$el;


                    var active = this.navbar.getActive();

                    if (this.$el.is(':hover') && active && active.$el.is($el)) {
                        return false;
                    }
                }
            },

            {
                name: 'hide',

                handler: function handler(e, ref) {
                    var $el = ref.$el;


                    var active = this.navbar.getActive();

                    if (!active || active && active.$el.is($el)) {
                        this.transitionTo(0);
                    }
                }
            }

        ],

        methods: {

            transitionTo: function transitionTo(height) {
                var this$1 = this;

                this.$el.height(this.$el[0].offsetHeight ? this.$el.height() : 0);
                return __WEBPACK_IMPORTED_MODULE_1__util_index__["Transition"].cancel(this.$el).then(function () { return __WEBPACK_IMPORTED_MODULE_1__util_index__["Transition"].start(this$1.$el, {height: height}, this$1.duration).then(null, __WEBPACK_IMPORTED_MODULE_1__util_index__["noop"]); });
            }

        }

    });

};


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



var scroll;

/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('offcanvas', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["d" /* Modal */]],

        args: 'mode',

        props: {
            content: String,
            mode: String,
            flip: Boolean,
            overlay: Boolean
        },

        defaults: {
            content: '.uk-offcanvas-content:first',
            mode: 'slide',
            flip: false,
            overlay: false,
            clsPage: 'uk-offcanvas-page',
            clsContainer: 'uk-offcanvas-container',
            clsPanel: 'uk-offcanvas-bar',
            clsFlip: 'uk-offcanvas-flip',
            clsContent: 'uk-offcanvas-content',
            clsContentAnimation: 'uk-offcanvas-content-animation',
            clsSidebarAnimation: 'uk-offcanvas-bar-animation',
            clsMode: 'uk-offcanvas',
            clsOverlay: 'uk-offcanvas-overlay',
            selClose: '.uk-offcanvas-close'
        },

        computed: {

            content: function content() {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["query"])(this.$props.content, this.$el));
            },

            clsFlip: function clsFlip() {
                return this.flip ? this.$props.clsFlip : '';
            },

            clsOverlay: function clsOverlay() {
                return this.overlay ? this.$props.clsOverlay : '';
            },

            clsMode: function clsMode() {
                return ((this.$props.clsMode) + "-" + (this.mode));
            },

            clsSidebarAnimation: function clsSidebarAnimation() {
                return this.mode === 'none' || this.mode === 'reveal' ? '' : this.$props.clsSidebarAnimation;
            },

            clsContentAnimation: function clsContentAnimation() {
                return this.mode !== 'push' && this.mode !== 'reveal' ? '' : this.$props.clsContentAnimation
            },

            transitionElement: function transitionElement() {
                return this.mode === 'reveal' ? this.panel.parent() : this.panel;
            }

        },

        update: {

            write: function write() {

                if (this.isToggled()) {

                    if (this.overlay || this.clsContentAnimation) {
                        this.content.width(window.innerWidth - this.scrollbarWidth);
                    }

                    if (this.overlay) {
                        this.content.height(window.innerHeight);
                        scroll && this.content.scrollTop(scroll.y);
                    }


                }

            },

            events: ['resize']

        },

        events: [

            {

                name: 'click',

                delegate: function delegate() {
                    return 'a[href^="#"]';
                },

                handler: function handler(ref) {
                    var currentTarget = ref.currentTarget;

                    if (currentTarget.hash && this.content.find(currentTarget.hash).length) {
                        scroll = null;
                        this.hide();
                    }
                }

            },

            {
                name: 'beforeshow',

                self: true,

                handler: function handler() {

                    scroll = scroll || {x: window.pageXOffset, y: window.pageYOffset};

                    if (this.mode === 'reveal' && !this.panel.parent().hasClass(this.clsMode)) {
                        this.panel.wrap('<div>').parent().addClass(this.clsMode);
                    }

                    __WEBPACK_IMPORTED_MODULE_1__util_index__["docElement"].css('overflow-y', (!this.clsContentAnimation || this.flip) && this.scrollbarWidth && this.overlay ? 'scroll' : '');

                    this.body.addClass(((this.clsContainer) + " " + (this.clsFlip) + " " + (this.clsOverlay))).height();
                    this.content.addClass(this.clsContentAnimation);
                    this.panel.addClass(((this.clsSidebarAnimation) + " " + (this.mode !== 'reveal' ? this.clsMode : '')));
                    this.$el.addClass(this.clsOverlay).css('display', 'block').height();

                }
            },

            {
                name: 'beforehide',

                self: true,

                handler: function handler() {
                    this.content.removeClass(this.clsContentAnimation);

                    if (this.mode === 'none' || this.getActive() && this.getActive() !== this) {
                        this.panel.trigger(__WEBPACK_IMPORTED_MODULE_1__util_index__["transitionend"]);
                    }
                }
            },

            {
                name: 'hidden',

                self: true,

                handler: function handler() {

                    if (this.mode === 'reveal') {
                        this.panel.unwrap();
                    }

                    if (!this.overlay) {
                        scroll = {x: window.pageXOffset, y: window.pageYOffset}
                    } else if (!scroll) {
                        var ref = this.content[0];
                        var x = ref.scrollLeft;
                        var y = ref.scrollTop;
                        scroll = {x: x, y: y};
                    }

                    this.panel.removeClass(((this.clsSidebarAnimation) + " " + (this.clsMode)));
                    this.$el.removeClass(this.clsOverlay).css('display', '');
                    this.body.removeClass(((this.clsContainer) + " " + (this.clsFlip) + " " + (this.clsOverlay))).scrollTop(scroll.y);

                    __WEBPACK_IMPORTED_MODULE_1__util_index__["docElement"].css('overflow-y', '');
                    this.content.width('').height('');

                    window.scrollTo(scroll.x, scroll.y);

                    scroll = null;

                }
            },

            {
                name: 'swipeLeft swipeRight',

                handler: function handler(e) {

                    if (this.isToggled() && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["isTouch"])(e) && (e.type === 'swipeLeft' && !this.flip || e.type === 'swipeRight' && this.flip)) {
                        this.hide();
                    }

                }
            }

        ]

    });

};


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('responsive', {

        props: ['width', 'height'],

        init: function init() {
            this.$addClass('uk-responsive-width');
        },

        update: {

            read: function read() {

                this.dim = this.$el.is(':visible') && this.width && this.height
                    ? {width: this.$el.parent().width(), height: this.height}
                    : false;

            },

            write: function write() {

                if (this.dim) {
                    this.$el.height(__WEBPACK_IMPORTED_MODULE_0__util_index__["Dimensions"].contain({height: this.height, width: this.width}, this.dim).height);
                }

            },

            events: ['load', 'resize']

        }

    });

};


/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('scroll', {

        props: {
            duration: Number,
            easing: String,
            offset: Number
        },

        defaults: {
            duration: 1000,
            easing: 'easeOutExpo',
            offset: 0
        },

        methods: {

            scrollTo: function scrollTo(el) {
                var this$1 = this;


                // get / set parameters
                var target = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["offsetTop"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(el)) - this.offset,
                    document = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["docHeight"])(),
                    viewport = window.innerHeight;

                if (target + viewport > document) {
                    target = document - viewport;
                }

                // animate to target, fire callback when done
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])('html,body')
                    .stop()
                    .animate({scrollTop: Math.round(target)}, this.duration, this.easing)
                    .promise()
                    .then(function () { return this$1.$el.trigger('scrolled', [this$1]); });

            }

        },

        events: {

            click: function click(e) {

                if (e.isDefaultPrevented()) {
                    return;
                }

                e.preventDefault();
                this.scrollTo(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(this.$el[0].hash).length ? this.$el[0].hash : 'body');
            }

        }

    });

    __WEBPACK_IMPORTED_MODULE_0__util_index__["$"].easing.easeOutExpo = __WEBPACK_IMPORTED_MODULE_0__util_index__["$"].easing.easeOutExpo || function (x, t, b, c, d) {
        return (t === d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    };

};


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('scrollspy-nav', {

        props: {
            cls: String,
            closest: String,
            scroll: Boolean,
            overflow: Boolean,
            offset: Number
        },

        defaults: {
            cls: 'uk-active',
            closest: false,
            scroll: false,
            overflow: true,
            offset: 0
        },

        computed: {

            links: function links() {
                return this.$el.find('a[href^="#"]').filter(function (i, el) { return el.hash; });
            },

            elements: function elements() {
                return this.closest ? this.links.closest(this.closest) : this.links;
            },

            targets: function targets() {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(this.links.toArray().map(function (el) { return el.hash; }).join(','));
            }

        },

        update: [

            {

                read: function read() {
                    if (this.scroll) {
                        UIkit.scroll(this.links, {offset: this.offset || 0});
                    }
                }

            },

            {

                read: function read() {
                    var this$1 = this;


                    var scroll = window.pageYOffset + this.offset, max = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["docHeight"])() - window.innerHeight + this.offset;

                    this.active = false;

                    this.targets.each(function (i, el) {

                        el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(el);

                        var top = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["offsetTop"])(el), last = i + 1 === this$1.targets.length;
                        if (!this$1.overflow && (i === 0 && top > scroll || last && top + el[0].offsetTop < scroll)) {
                            return false;
                        }

                        if (!last && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["offsetTop"])(this$1.targets.eq(i + 1)) <= scroll) {
                            return;
                        }

                        if (scroll >= max) {
                            for (var j = this$1.targets.length - 1; j > i; j--) {
                                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isInView"])(this$1.targets.eq(j))) {
                                    el = this$1.targets.eq(j);
                                    break;
                                }
                            }
                        }

                        return !(this$1.active = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["toJQuery"])(this$1.links.filter(("[href=\"#" + (el.attr('id')) + "\"]"))));

                    });

                },

                write: function write() {

                    this.links.blur();
                    this.elements.removeClass(this.cls);

                    if (this.active) {
                        this.$el.trigger('active', [
                            this.active,
                            (this.closest ? this.active.closest(this.closest) : this.active).addClass(this.cls)
                        ]);
                    }

                },

                events: ['scroll', 'load', 'resize']

            }

        ]

    });

};


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('scrollspy', {

        args: 'cls',

        props: {
            cls: 'list',
            target: String,
            hidden: Boolean,
            offsetTop: Number,
            offsetLeft: Number,
            repeat: Boolean,
            delay: Number
        },

        defaults: {
            cls: ['uk-scrollspy-inview'],
            target: false,
            hidden: true,
            offsetTop: 0,
            offsetLeft: 0,
            repeat: false,
            delay: 0,
            inViewClass: 'uk-scrollspy-inview'
        },

        computed: {

            elements: function elements() {
                return this.target && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(this.target, this.$el) || this.$el;
            }

        },

        update: [

            {

                write: function write() {
                    if (this.hidden) {
                        this.elements.filter((":not(." + (this.inViewClass) + ")")).css('visibility', 'hidden');
                    }
                }

            },

            {

                read: function read() {
                    var this$1 = this;

                    this.elements.each(function (_, el) {

                        if (!el._scrollspy) {
                            var cls = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(el).attr('uk-scrollspy-class');
                            el._scrollspy = {toggles: cls && cls.split(',') || this$1.cls};
                        }

                        el._scrollspy.show = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isInView"])(el, this$1.offsetTop, this$1.offsetLeft);

                    });
                },

                write: function write() {
                    var this$1 = this;


                    var index = this.elements.length === 1 ? 1 : 0;

                    this.elements.each(function (i, el) {

                        var $el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(el), data = el._scrollspy, cls = data.toggles[i] || data.toggles[0];

                        if (data.show) {

                            if (!data.inview && !data.timer) {

                                var show = function () {
                                    $el.css('visibility', '')
                                        .addClass(this$1.inViewClass)
                                        .toggleClass(cls)
                                        .trigger('inview');

                                    this$1.$update();

                                    data.inview = true;
                                    delete data.timer;
                                };

                                if (this$1.delay && index) {
                                    data.timer = setTimeout(show, this$1.delay * index);
                                } else {
                                    show();
                                }

                                index++;

                            }

                        } else {

                            if (data.inview && this$1.repeat) {

                                if (data.timer) {
                                    clearTimeout(data.timer);
                                    delete data.timer;
                                }

                                $el.removeClass(this$1.inViewClass)
                                    .toggleClass(cls)
                                    .css('visibility', this$1.hidden ? 'hidden' : '')
                                    .trigger('outview');

                                this$1.$update();

                                data.inview = false;

                            }

                        }

                    });

                },

                events: ['scroll', 'load', 'resize']

            }

        ]

    });

};


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('sticky', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["b" /* Class */]],

        attrs: true,

        props: {
            top: null,
            bottom: Boolean,
            offset: Number,
            animation: String,
            clsActive: String,
            clsInactive: String,
            clsFixed: String,
            clsBelow: String,
            selTarget: String,
            widthElement: 'jQuery',
            showOnUp: Boolean,
            media: 'media',
            target: Number
        },

        defaults: {
            top: 0,
            bottom: false,
            offset: 0,
            animation: '',
            clsActive: 'uk-active',
            clsInactive: '',
            clsFixed: 'uk-sticky-fixed',
            clsBelow: 'uk-sticky-below',
            selTarget: '',
            widthElement: false,
            showOnUp: false,
            media: false,
            target: false
        },

        computed: {

            selTarget: function selTarget() {
                return this.$props.selTarget && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["toJQuery"])(this.$props.selTarget, this.$el) || this.$el;
            }

        },

        connected: function connected() {

            this.placeholder = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])('<div class="uk-sticky-placeholder"></div>');
            this.widthElement = this.$props.widthElement || this.placeholder;

            if (!this.isActive) {
                this.hide();
            }
        },

        disconnected: function disconnected() {

            if (this.isActive) {
                this.isActive = false;
                this.hide();
                this.$removeClass(this.clsInactive);
            }

            this.placeholder.remove();
            this.placeholder = null;
            this.widthElement = null;
        },

        ready: function ready() {
            var this$1 = this;


            if (!(this.target && location.hash && window.pageYOffset > 0)) {
                return;
            }

            var target = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["query"])(location.hash);

            if (target) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["requestAnimationFrame"])(function () {

                    var top = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["offsetTop"])(target),
                        elTop = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["offsetTop"])(this$1.$el),
                        elHeight = this$1.$el[0].offsetHeight;

                    if (elTop + elHeight >= top && elTop <= top + target[0].offsetHeight) {
                        window.scrollTo(0, top - elHeight - this$1.target - this$1.offset);
                    }

                });
            }

        },

        events: [

            {
                name: 'active',

                handler: function handler() {
                    this.$addClass(this.selTarget, this.clsActive);
                    this.$removeClass(this.selTarget, this.clsInactive);
                }

            },

            {
                name: 'inactive',

                handler: function handler() {
                    this.$addClass(this.selTarget, this.clsInactive);
                    this.$removeClass(this.selTarget, this.clsActive);
                }

            }

        ],

        update: [

            {

                write: function write() {
                    var this$1 = this;


                    var outerHeight = (this.isActive ? this.placeholder : this.$el)[0].offsetHeight, el;

                    this.placeholder
                        .css('height', this.$el.css('position') !== 'absolute' ? outerHeight : '')
                        .css(this.$el.css(['marginTop', 'marginBottom', 'marginLeft', 'marginRight']));

                    if (!document.documentElement.contains(this.placeholder[0])) {
                        this.placeholder.insertAfter(this.$el).attr('hidden', true);
                    }

                    this.width = this.widthElement.attr('hidden', null)[0].offsetWidth;
                    this.widthElement.attr('hidden', !this.isActive);

                    this.topOffset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["offsetTop"])(this.isActive ? this.placeholder : this.$el);
                    this.bottomOffset = this.topOffset + outerHeight;

                    ['top', 'bottom'].forEach(function (prop) {

                        this$1[prop] = this$1.$props[prop];

                        if (!this$1[prop]) {
                            return;
                        }

                        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["isNumeric"])(this$1[prop])) {

                            this$1[prop] = this$1[(prop + "Offset")] + parseFloat(this$1[prop]);

                        } else {

                            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["isString"])(this$1[prop]) && this$1[prop].match(/^-?\d+vh$/)) {
                                this$1[prop] = window.innerHeight * parseFloat(this$1[prop]) / 100;
                            } else {

                                el = this$1[prop] === true ? this$1.$el.parent() : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["query"])(this$1[prop], this$1.$el);

                                if (el) {
                                    this$1[prop] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["offsetTop"])(el) + el[0].offsetHeight;
                                }

                            }

                        }

                    });

                    this.top = Math.max(parseFloat(this.top), this.topOffset) - this.offset;
                    this.bottom = this.bottom && this.bottom - outerHeight;
                    this.inactive = this.media && !window.matchMedia(this.media).matches;

                    if (this.isActive) {
                        this.update();
                    }
                },

                events: ['load', 'resize']

            },

            {

                read: function read() {
                    this.offsetTop = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["offsetTop"])(this.$el);
                    this.scroll = window.pageYOffset;
                    this.visible = this.$el.is(':visible');
                },

                write: function write(ref) {
                    var this$1 = this;
                    if ( ref === void 0 ) ref = {};
                    var dir = ref.dir;


                    var scroll = this.scroll;

                    if (scroll < 0 || !this.visible || this.disabled || this.showOnUp && !dir) {
                        return;
                    }

                    if (this.inactive
                        || scroll < this.top
                        || this.showOnUp && (scroll <= this.top || dir ==='down' || dir === 'up' && !this.isActive && scroll <= this.bottomOffset)
                    ) {

                        if (!this.isActive) {
                            return;
                        }

                        this.isActive = false;

                        if (this.animation && scroll > this.topOffset) {
                            __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].cancel(this.$el).then(function () { return __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].out(this$1.$el, this$1.animation); }).then(function () { return this$1.hide(); });
                        } else {
                            this.hide();
                        }

                    } else if (this.isActive) {

                        this.update();

                    } else if (this.animation) {

                        __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].cancel(this.$el).then(function () {
                            this$1.show();
                            __WEBPACK_IMPORTED_MODULE_1__util_index__["Animation"].in(this$1.$el, this$1.animation);
                        });

                    } else {
                        this.show();
                    }

                },

                events: ['scroll']

            } ],

        methods: {

            show: function show() {

                this.isActive = true;
                this.update();
                this.placeholder.attr('hidden', null);

            },

            hide: function hide() {

                if (!this.isActive || this.$hasClass(this.clsActive)) {
                    this.$el.trigger('inactive');
                }

                this.$removeClass(this.clsFixed, this.clsBelow);
                this.$el.css({position: '', top: '', width: ''});
                this.placeholder.attr('hidden', true);

            },

            update: function update() {
                var this$1 = this;


                var top = Math.max(0, this.offset), active = this.scroll > this.top;

                if (this.bottom && this.scroll > this.bottom - this.offset) {
                    top = this.bottom - this.scroll;
                }

                this.$el.css({
                    position: 'fixed',
                    top: (top + "px"),
                    width: this.width
                });

                if (this.$hasClass(this.clsActive)) {

                    if (!active) {
                        this.$el.trigger('inactive');
                    }

                } else {

                    if (active) {
                        this.$el.trigger('active');
                    }
                }

                this.$toggleClass(this.clsBelow, this.scroll > this.bottomOffset);

                if (this.showOnUp) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["requestAnimationFrame"])(function () { return this$1.$addClass(this$1.clsFixed); });
                } else {
                    this.$addClass(this.clsFixed);
                }
            }

        }

    });

};


/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


var svgs = {}, parser = new DOMParser();

/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('svg', {

        attrs: true,

        props: {
            id: String,
            icon: String,
            src: String,
            style: String,
            width: Number,
            height: Number,
            ratio: Number,
            'class': String
        },

        defaults: {
            ratio: 1,
            id: false,
            exclude: ['src'],
            'class': ''
        },

        init: function init() {
            this.class += ' uk-svg';
        },

        connected: function connected() {
            var this$1 = this;


            if (!this.icon && this.src && ~this.src.indexOf('#')) {

                var parts = this.src.split('#');

                if (parts.length > 1) {
                    this.src = parts[0];
                    this.icon = parts[1];
                }
            }

            this.width = this.$props.width;
            this.height = this.$props.height;

            this.svg = this.getSvg().then(function (doc) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["promise"])(function (resolve, reject) { return __WEBPACK_IMPORTED_MODULE_0__util_index__["fastdom"].mutate(function () {

                var svg, el;

                if (!doc) {
                    reject('SVG not found.');
                    return;
                }

                if (!this$1.icon) {
                    el = doc.documentElement.cloneNode(true);
                } else {
                    svg = doc.getElementById(this$1.icon);

                    if (!svg) {

                        // fallback if SVG has no symbols
                        if (!doc.querySelector('symbol')) {
                            el = doc.documentElement.cloneNode(true);
                        }

                    } else {

                        var html = svg.outerHTML;

                        // IE workaround
                        if (!html) {
                            var div = document.createElement('div');
                            div.appendChild(svg.cloneNode(true));
                            html = div.innerHTML;
                        }

                        html = html
                            .replace(/<symbol/g, ("<svg" + (!~html.indexOf('xmlns') ? ' xmlns="http://www.w3.org/2000/svg"' : '')))
                            .replace(/symbol>/g, 'svg>');

                        el = parser.parseFromString(html, 'image/svg+xml').documentElement;
                    }

                }

                if (!el) {
                    reject('SVG not found.');
                    return;
                }

                var dimensions = el.getAttribute('viewBox'); // jQuery workaround, el.attr('viewBox')

                if (dimensions) {
                    dimensions = dimensions.split(' ');
                    this$1.width = this$1.width || dimensions[2];
                    this$1.height = this$1.height || dimensions[3];
                }

                this$1.width *= this$1.ratio;
                this$1.height *= this$1.ratio;

                for (var prop in this$1.$options.props) {
                    if (this$1[prop] && !~this$1.exclude.indexOf(prop)) {
                        el.setAttribute(prop, this$1[prop]);
                    }
                }

                if (!this$1.id) {
                    el.removeAttribute('id');
                }

                if (this$1.width && !this$1.height) {
                    el.removeAttribute('height');
                }

                if (this$1.height && !this$1.width) {
                    el.removeAttribute('width');
                }

                var root = this$1.$el[0];
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isVoidElement"])(root) || root.tagName === 'CANVAS') {

                    this$1.$el.attr({hidden: true, id: null});

                    if (root.nextSibling) {

                        if (el.isEqualNode(root.nextSibling)) {
                            el = root.nextSibling;
                        } else {
                            root.parentNode.insertBefore(el, root.nextSibling);
                        }

                    } else {
                        root.parentNode.appendChild(el);
                    }
                } else {

                    if (root.lastChild && el.isEqualNode(root.lastChild)) {
                        el = root.lastChild;
                    } else {
                        root.appendChild(el);
                    }

                }

                resolve(el);

            }); }); }).then(null, __WEBPACK_IMPORTED_MODULE_0__util_index__["noop"]);

        },

        disconnected: function disconnected() {

            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isVoidElement"])(this.$el)) {
                this.$el.attr({hidden: null, id: this.id || null});
            }

            if (this.svg) {
                this.svg.then(function (svg) { return svg && svg.parentNode && svg.parentNode.removeChild(svg); });
                this.svg = null;
            }
        },

        methods: {

            getSvg: function getSvg() {
                var this$1 = this;


                if (!this.src) {
                    return __WEBPACK_IMPORTED_MODULE_0__util_index__["promise"].reject();
                }

                if (svgs[this.src]) {
                    return svgs[this.src];
                }

                svgs[this.src] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["promise"])(function (resolve, reject) {

                    if (this$1.src.lastIndexOf('data:', 0) === 0) {
                        resolve(this$1.parse(decodeURIComponent(this$1.src.split(',')[1])));
                    } else {

                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["ajax"])(this$1.src, {dataType: 'html'}).then(function (doc) {
                            resolve(this$1.parse(doc));
                        }, function () {
                            reject('SVG not found.');
                        });

                    }

                });

                return svgs[this.src];

            },

            parse: function parse(doc) {
                var parsed = parser.parseFromString(doc, 'image/svg+xml');
                return parsed.documentElement && parsed.documentElement.nodeName === 'svg' ? parsed : null;
            }

        }

    });

};


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('switcher', {

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["c" /* Togglable */]],

        args: 'connect',

        props: {
            connect: String,
            toggle: String,
            active: Number,
            swiping: Boolean
        },

        defaults: {
            connect: false,
            toggle: ' > *',
            active: 0,
            swiping: true,
            cls: 'uk-active',
            clsContainer: 'uk-switcher',
            attrItem: 'uk-switcher-item',
            queued: true
        },

        computed: {

            connects: function connects() {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["query"])(this.connect, this.$el) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(this.$el.next(("." + (this.clsContainer))));
            },

            toggles: function toggles() {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(this.toggle, this.$el);
            }

        },

        events: [

            {

                name: 'click',

                delegate: function delegate() {
                    return ((this.toggle) + ":not(.uk-disabled)");
                },

                handler: function handler(e) {
                    e.preventDefault();
                    this.show(e.currentTarget);
                }

            },

            {
                name: 'click',

                el: function el() {
                    return this.connects;
                },

                delegate: function delegate() {
                    return ("[" + (this.attrItem) + "],[data-" + (this.attrItem) + "]");
                },

                handler: function handler(e) {
                    e.preventDefault();
                    this.show(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(e.currentTarget)[e.currentTarget.hasAttribute(this.attrItem) ? 'attr' : 'data'](this.attrItem));
                }
            },

            {
                name: 'swipeRight swipeLeft',

                filter: function filter() {
                    return this.swiping;
                },

                el: function el() {
                    return this.connects;
                },

                handler: function handler(e) {
                    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["isTouch"])(e)) {
                        return;
                    }

                    e.preventDefault();
                    if (!window.getSelection().toString()) {
                        this.show(e.type === 'swipeLeft' ? 'next' : 'previous');
                    }
                }
            }

        ],

        update: function update() {

            this.updateAria(this.connects.children());
            this.show(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["toJQuery"])(this.toggles.filter(("." + (this.cls) + ":first"))) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["toJQuery"])(this.toggles.eq(this.active)) || this.toggles.first());

        },

        methods: {

            show: function show(item) {
                var this$1 = this;


                var length = this.toggles.length,
                    prev = this.connects.children(("." + (this.cls))).index(),
                    hasPrev = prev >= 0,
                    index = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["getIndex"])(item, this.toggles, prev),
                    dir = item === 'previous' ? -1 : 1,
                    toggle;

                for (var i = 0; i < length; i++, index = (index + dir + length) % length) {
                    if (!this$1.toggles.eq(index).is('.uk-disabled, [disabled]')) {
                        toggle = this$1.toggles.eq(index);
                        break;
                    }
                }

                if (!toggle || prev >= 0 && toggle.hasClass(this.cls) || prev === index) {
                    return;
                }

                this.toggles.removeClass(this.cls).attr('aria-expanded', false);
                toggle.addClass(this.cls).attr('aria-expanded', true);

                if (!hasPrev) {
                    this.toggleNow(this.connects.children((":nth-child(" + (index + 1) + ")")));
                } else {
                    this.toggleElement(this.connects.children((":nth-child(" + (prev + 1) + "),:nth-child(" + (index + 1) + ")")));
                }
            }

        }

    });

};


/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mixin_index__ = __webpack_require__(1);


/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('tab', UIkit.components.switcher.extend({

        mixins: [__WEBPACK_IMPORTED_MODULE_0__mixin_index__["b" /* Class */]],

        name: 'tab',

        props: {
            media: 'media'
        },

        defaults: {
            media: 960,
            attrItem: 'uk-tab-item'
        },

        init: function init() {

            var cls = this.$hasClass('uk-tab-left') && 'uk-tab-left' || this.$hasClass('uk-tab-right') && 'uk-tab-right';

            if (cls) {
                UIkit.toggle(this.$el, {cls: cls, mode: 'media', media: this.media});
            }
        }

    }));

};


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('toggle', {

        mixins: [UIkit.mixin.togglable],

        args: 'target',

        props: {
            href: String,
            target: null,
            mode: 'list',
            media: 'media'
        },

        defaults: {
            href: false,
            target: false,
            mode: 'click',
            queued: true,
            media: false
        },

        computed: {

            target: function target() {
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["query"])(this.$props.target || this.href, this.$el) || this.$el;
            }

        },

        events: [

            {

                name: (__WEBPACK_IMPORTED_MODULE_0__util_index__["pointerEnter"] + " " + __WEBPACK_IMPORTED_MODULE_0__util_index__["pointerLeave"]),

                filter: function filter() {
                    return ~this.mode.indexOf('hover');
                },

                handler: function handler(e) {
                    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isTouch"])(e)) {
                        this.toggle(("toggle" + (e.type === __WEBPACK_IMPORTED_MODULE_0__util_index__["pointerEnter"] ? 'show' : 'hide')));
                    }
                }

            },

            {

                name: 'click',

                filter: function filter() {
                    return ~this.mode.indexOf('click') || __WEBPACK_IMPORTED_MODULE_0__util_index__["hasTouch"];
                },

                handler: function handler(e) {

                    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["isTouch"])(e) && !~this.mode.indexOf('click')) {
                        return;
                    }

                    // TODO better isToggled handling
                    var link = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(e.target).closest('a[href]')[0];
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["$"])(e.target).closest('a[href="#"], button').length
                        || link && (
                            this.cls
                            || !this.target.is(':visible')
                            || link.hash && this.target.is(link.hash)
                        )
                    ) {
                        e.preventDefault();
                    }

                    this.toggle();
                }

            }
        ],

        update: {

            write: function write() {

                if (!~this.mode.indexOf('media') || !this.media) {
                    return;
                }

                var toggled = this.isToggled(this.target);
                if (window.matchMedia(this.media).matches ? !toggled : toggled) {
                    this.toggle();
                }

            },

            events: ['load', 'resize']

        },

        methods: {

            toggle: function toggle(type) {
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["$trigger"])(this.target, type || 'toggle', [this], true).isDefaultPrevented()) {
                    this.toggleElement(this.target);
                }
            }

        }

    });

};


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = function (UIkit) {

    UIkit.component('video', {

        props: {
            automute: Boolean,
            autoplay: Boolean,
        },

        defaults: {automute: false, autoplay: true},

        computed: {

            el: function el() {
                return this.$el[0];
            }

        },

        ready: function ready() {
            this.player = new __WEBPACK_IMPORTED_MODULE_0__util_index__["Player"](this.el);

            if (this.automute) {
                this.player.mute();
            }

        },

        update: {

            write: function write() {

                if (!this.player || !this.autoplay) {
                    return;
                }

                if (this.el.offsetHeight === 0 || this.$el.css('visibility') === 'hidden') {
                    this.player.pause();
                } else {
                    this.player.play();
                }

            },

            events: ['load']

        },

    });

};


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util_index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__class__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__togglable__ = __webpack_require__(6);





var active;

/* harmony default export */ __webpack_exports__["a"] = {

    mixins: [__WEBPACK_IMPORTED_MODULE_2__class__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__togglable__["a" /* default */]],

    props: {
        clsPanel: String,
        selClose: String,
        escClose: Boolean,
        bgClose: Boolean,
        stack: Boolean,
        container: Boolean
    },

    defaults: {
        cls: 'uk-open',
        escClose: true,
        bgClose: true,
        overlay: true,
        stack: false,
        container: true
    },

    computed: {

        body: function body() {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["$"])(document.body);
        },

        panel: function panel() {
            return this.$el.find(("." + (this.clsPanel)));
        },

        container: function container() {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["toNode"])(this.$props.container === true && __WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */].container || this.$props.container && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["toJQuery"])(this.$props.container));
        },

        transitionElement: function transitionElement() {
            return this.panel;
        },

        transitionDuration: function transitionDuration() {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["toMs"])(this.transitionElement.css('transition-duration'));
        },

        component: function component() {
            return __WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */][this.$options.name];
        }

    },

    events: [

        {

            name: 'click',

            delegate: function delegate() {
                return this.selClose;
            },

            handler: function handler(e) {
                e.preventDefault();
                this.hide();
            }

        },

        {

            name: 'toggle',

            handler: function handler(e) {
                e.preventDefault();
                this.toggle();
            }

        },

        {

            name: 'beforeshow',

            self: true,

            handler: function handler() {
                var this$1 = this;


                if (this.isToggled()) {
                    return false;
                }

                var prev = active && active !== this && active;

                active = this;
                this.component.active = this;

                if (prev) {
                    if (this.stack) {
                        this.prev = prev;
                    } else {
                        prev.hide().then(this.show);
                        return false;
                    }
                } else {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["requestAnimationFrame"])(function () { return register(this$1.$options.name); });
                }

                if (!prev) {
                    this.scrollbarWidth = window.innerWidth - __WEBPACK_IMPORTED_MODULE_1__util_index__["docElement"][0].offsetWidth;
                    this.body.css('overflow-y', this.scrollbarWidth && this.overlay ? 'scroll' : '');
                }

                __WEBPACK_IMPORTED_MODULE_1__util_index__["docElement"].addClass(this.clsPage);

            }

        },

        {

            name: 'beforehide',

            self: true,

            handler: function handler() {

                if (!this.isToggled()) {
                    return false;
                }

                active = active && active !== this && active || this.prev;

                if (!active) {
                    deregister(this.$options.name);
                }

            }

        },

        {

            name: 'hidden',

            self: true,

            handler: function handler() {
                if (this.component.active === this) {
                    __WEBPACK_IMPORTED_MODULE_1__util_index__["docElement"].removeClass(this.clsPage);
                    this.body.css('overflow-y', '');
                    this.component.active = null;
                }
            }

        }

    ],

    methods: {

        toggle: function toggle() {
            return this.isToggled() ? this.hide() : this.show();
        },

        show: function show() {
            var this$1 = this;

            if (this.container && !this.$el.parent().is(this.container)) {
                this.container.appendChild(this.$el[0]);
                return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["promise"])(function (resolve) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["requestAnimationFrame"])(function () { return resolve(this$1.show()); }
                    ); }
                )
            }

            return this.toggleNow(this.$el, true);
        },

        hide: function hide() {
            return this.toggleNow(this.$el, false);
        },

        getActive: function getActive() {
            return active;
        },

        _toggleImmediate: function _toggleImmediate(el, show) {
            var this$1 = this;

            this._toggle(el, show);

            return this.transitionDuration ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["promise"])(function (resolve, reject) {

                if (this$1._transition) {
                    this$1.transitionElement.off(__WEBPACK_IMPORTED_MODULE_1__util_index__["transitionend"], this$1._transition.handler);
                    this$1._transition.reject();
                }

                this$1._transition = {
                    reject: reject,
                    handler: function () {
                        resolve();
                        this$1._transition = null;
                    }
                };

                this$1.transitionElement.one(__WEBPACK_IMPORTED_MODULE_1__util_index__["transitionend"], this$1._transition.handler);

            }) : __WEBPACK_IMPORTED_MODULE_1__util_index__["promise"].resolve();
        },
    }

};

function register(name) {
    __WEBPACK_IMPORTED_MODULE_1__util_index__["doc"].on(( obj = {}, obj[("click." + name)] = function (e) {
            if (active && active.bgClose && !e.isDefaultPrevented() && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__util_index__["isWithin"])(e.target, active.panel)) {
                active.hide();
            }
        }, obj[("keydown." + name)] = function (e) {
            if (e.keyCode === 27 && active && active.escClose) {
                e.preventDefault();
                active.hide();
            }
        }, obj ));
    var obj;
}

function deregister(name) {
    __WEBPACK_IMPORTED_MODULE_1__util_index__["doc"].off(("click." + name)).off(("keydown." + name));
}


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__util_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = {

    props: {
        pos: String,
        offset: null,
        flip: Boolean,
        clsPos: String
    },

    defaults: {
        pos: !__WEBPACK_IMPORTED_MODULE_0__util_index__["isRtl"] ? 'bottom-left' : 'bottom-right',
        flip: true,
        offset: false,
        clsPos: ''
    },

    computed: {

        pos: function pos() {
            return (this.$props.pos + (!~this.$props.pos.indexOf('-') ? '-center' : '')).split('-');
        },

        dir: function dir() {
            return this.pos[0];
        },

        align: function align() {
            return this.pos[1];
        }

    },

    methods: {

        positionAt: function positionAt(element, target, boundary) {

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["removeClass"])(element, ((this.clsPos) + "-(top|bottom|left|right)(-[a-z]+)?")).css({top: '', left: ''});

            var offset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["toNumber"])(this.offset) || 0,
                axis = this.getAxis(),
                flipped = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["position"])(
                    element,
                    target,
                    axis === 'x' ? ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["flipPosition"])(this.dir)) + " " + (this.align)) : ((this.align) + " " + (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__util_index__["flipPosition"])(this.dir))),
                    axis === 'x' ? ((this.dir) + " " + (this.align)) : ((this.align) + " " + (this.dir)),
                    axis === 'x' ? ("" + (this.dir === 'left' ? -1 * offset : offset)) : (" " + (this.dir === 'top' ? -1 * offset : offset)),
                    null,
                    this.flip,
                    boundary
                );

            this.dir = axis === 'x' ? flipped.target.x : flipped.target.y;
            this.align = axis === 'x' ? flipped.target.y : flipped.target.x;

            element.toggleClass(((this.clsPos) + "-" + (this.dir) + "-" + (this.align)), this.offset === false);

        },

        getAxis: function getAxis() {
            return this.dir === 'top' || this.dir === 'bottom' ? 'y' : 'x';
        }

    }

};


/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function plugin(UIkit) {

    if (plugin.installed) {
        return;
    }

    var ref = UIkit.util;
    var $ = ref.$;
    var doc = ref.doc;
    var fastdom = ref.fastdom;
    var getIndex = ref.getIndex;
    var noop = ref.noop;
    var on = ref.on;
    var off = ref.off;
    var pointerDown = ref.pointerDown;
    var pointerMove = ref.pointerMove;
    var pointerUp = ref.pointerUp;
    var preventClick = ref.preventClick;
    var promise = ref.promise;
    var requestAnimationFrame = ref.requestAnimationFrame;
    var Transition = ref.Transition;

    UIkit.mixin.slideshow = {

        attrs: true,

        props: {
            autoplay: Number,
            animation: String,
            transition: String,
            duration: Number
        },

        defaults: {
            autoplay: 0,
            animation: 'slide',
            transition: 'linear',
            duration: 400,
            index: 0,
            stack: [],
            threshold: 10,
            percent: 0,
            clsActive: 'uk-active'
        },

        computed: {

            slides: function slides() {
                return this.list.children(("." + (this.clsItem)));
            },

            forwardDuration: function forwardDuration() {
                return this.duration / 4;
            }

        },

        init: function init() {
            var this$1 = this;

            ['start', 'move', 'end'].forEach(function (key) {
                var fn = this$1[key];
                this$1[key] = function (e) {

                    e = e.originalEvent || e;

                    this$1.prevPos = this$1.pos;
                    this$1.pos = (e.touches && e.touches[0] || e).pageX;

                    fn(e);
                }
            });
        },

        connected: function connected() {
            this.startAutoplay();
        },

        events: [

            {

                name: 'click',

                delegate: function delegate() {
                    return ("[" + (this.attrItem) + "]");
                },

                handler: function handler(e) {
                    e.preventDefault();
                    this.show($(e.currentTarget).blur().attr(this.attrItem));
                }

            },

            {

                name: pointerDown,

                delegate: function delegate() {
                    return ("." + (this.clsItem));
                },

                handler: 'start'
            },

            {

                name: pointerDown,
                handler: 'stopAutoplay'
            },

            {
                name: 'mouseenter',

                filter: function filter() {
                    return this.autoplay;
                },

                handler: function handler() {
                    this.isHovering = true;
                }
            },

            {
                name: 'mouseleave',

                filter: function filter() {
                    return this.autoplay;
                },

                handler: function handler() {
                    this.isHovering = false;
                }
            } ],

        methods: {

            start: function start(e) {

                if (e.button && e.button !== 0 || this.slides.length < 2) {
                    return;
                }

                e.preventDefault();

                var percent = 0;
                if (this.stack.length) {

                    this.percent = this._animation.percent();

                    var dir = this._animation.dir;
                    percent = this.percent * dir;

                    this.stack.splice(0, this.stack.length);

                    this._animation.cancel();
                    this._animation.translate(Math.abs(percent));

                    this.index = this.getIndex(this.index - dir);
                    this.touching = true;
                }

                on(doc, pointerMove, this.move, true);
                on(doc, pointerUp, this.end, true);

                var el = this.slides.eq(this.index);

                this.touch = {
                    el: el,
                    start: this.pos + (percent ? el.outerWidth() * percent : 0)
                }

            },

            move: function move(e) {
                var this$1 = this;


                e.preventDefault();

                var ref = this.touch;
                var start = ref.start;
                var el = ref.el;

                if (this.pos === this.prevPos || (!this.touching && Math.abs(start - this.pos) < this.threshold)) {
                    return;
                }

                this.touching = true;

                var percent = (this.pos - start) / el.outerWidth();

                if (this.percent === percent) {
                    return;
                }

                var changed = trunc(this.percent) !== trunc(percent),
                    index = this.getIndex(this.index - trunc(percent)),
                    current = this.slides.eq(index),
                    dir = percent < 0 ? 1 : -1,
                    nextIndex = getIndex(percent < 0 ? 'next' : 'previous', this.slides, index),
                    next = this.slides.eq(nextIndex);

                this.slides.each(function (i, el) { return this$1.$toggleClass(el, this$1.clsActive, i === index || i === nextIndex); });

                if (changed && this._animation) {
                    this._animation.reset();
                }

                this._animation = new Transitioner(this.animation, this.transition, current, next, dir, noop);
                this._animation.translate(Math.abs(percent % 1));

                this.percent = percent;

                UIkit.update(null, current);
                UIkit.update(null, next);
            },

            end: function end(e) {

                e.preventDefault();

                off(doc, pointerMove, this.move, true);
                off(doc, pointerUp, this.end, true);

                if (this.touching) {

                    var percent = this.percent;

                    this.percent = Math.abs(this.percent) % 1;
                    this.index = this.getIndex(this.index - trunc(percent));

                    if (this.percent < 0.2) {
                        this.index = this.getIndex(percent > 0 ? 'previous' : 'next');
                        this.percent = 1 - this.percent;
                        percent *= -1;
                    }

                    this.show(percent > 0 ? 'previous': 'next', true);

                    preventClick();

                }

                this.pos
                    = this.prevPos
                    = this.touch
                    = this.touching
                    = this.percent
                    = null;

            },

            show: function show(index, force) {
                var this$1 = this;
                if ( force === void 0 ) force = false;


                if (!force && this.touch) {
                    return;
                }

                this.stack[force ? 'unshift' : 'push'](index);

                if (!force && this.stack.length > 1) {

                    if (this.stack.length === 2) {
                        this._animation.forward(this.forwardDuration);
                    }

                    return;
                }

                var hasPrev = this.slides.hasClass('uk-active'),
                    dir = index === 'next'
                            ? 1
                            : index === 'previous'
                                ? -1
                                : index < this.index
                                    ? -1
                                    : 1;

                index = this.getIndex(index);

                if (hasPrev && index === this.index) {
                    this.stack[force ? 'shift' : 'pop']();
                    return;
                }

                var prev = hasPrev && this.slides.eq(this.index),
                    next = this.slides.eq(index);

                this.$el.trigger('beforeitemshow', [this, next]);
                prev && this.$el.trigger('beforeitemhide', [this, prev]);

                this.index = index;

                this.$addClass(next, this.clsActive);

                this._animation = new Transitioner(!prev ? 'scale' : this.animation, this.transition, prev || next, next, dir, function () {

                    prev && this$1.$removeClass(prev, this$1.clsActive);

                    this$1.stack.shift();
                    if (this$1.stack.length) {
                        requestAnimationFrame(function () { return this$1.show(this$1.stack.shift(), true); });
                    } else {
                        this$1._animation = null;
                    }

                    this$1.$el.trigger('itemshown', [this$1, next]);
                    UIkit.update(null, next);

                    if (prev) {
                        this$1.$el.trigger('itemhidden', [this$1, prev]);
                        UIkit.update(null, prev);
                    }

                });

                this._animation.show(this.stack.length > 1 ? this.forwardDuration : this.duration, this.percent);

                this.$el.trigger('itemshow', [this, next]);

                if (prev) {
                    this.$el.trigger('itemhide', [this, prev]);
                    UIkit.update(null, prev);
                }

                UIkit.update(null, next);
                fastdom.flush(); // iOS 10+ will honor the video.play only if called from a gesture handler
            },

            getIndex: function getIndex$1(index) {
                if ( index === void 0 ) index = this.index;

                return getIndex(index, this.slides, this.index);
            },

            startAutoplay: function startAutoplay() {
                var this$1 = this;


                this.stopAutoplay();

                if (this.autoplay) {
                    this.interval = setInterval(function () {!this$1.isHovering && this$1.show('next')}, this.autoplay);
                }

            },

            stopAutoplay: function stopAutoplay() {
                if (this.interval) {
                    clearInterval(this.interval);
                }
            }

        }

    };

    var diff = 0.2;
    var Animations = {

        fade: {

            show: function show() {
                return [
                    {opacity: 0},
                    {opacity: 1}
                ];
            },

            percent: function percent(current) {
                return 1 - current.css('opacity');
            },

            translate: function translate(percent) {
                return [
                    {opacity: 1 - percent},
                    {opacity: percent}
                ];
            }

        },

        slide: {

            show: function show(dir) {
                return [
                    {transform: ("translate3d(" + (dir * -100) + "%, 0, 0)")},
                    {transform: 'translate3d(0, 0, 0)'}
                ];
            },

            percent: function percent(current) {
                return Math.abs(current.css('transform').split(',')[4] / current.outerWidth());
            },

            translate: function translate(percent, dir) {
                return [
                    {transform: ("translate3d(" + (dir * -100 * percent) + "%, 0, 0)")},
                    {transform: ("translate3d(" + (dir * 100 * (1 - percent)) + "%, 0, 0)")}
                ];
            }

        },

        scale: {

            show: function show() {
                return [
                    {opacity: 0, transform: ("scale3d(" + (1 - diff) + ", " + (1 - diff) + ", 1)")},
                    {opacity: 1, transform: 'scale3d(1, 1, 1)'}
                ];
            },

            percent: function percent(current) {
                return 1 - current.css('opacity');
            },

            translate: function translate(percent) {
                var scale1 = 1 - diff * percent,
                    scale2 = 1 - diff + diff * percent;

                return [
                    {opacity: 1 - percent, transform: ("scale3d(" + scale1 + ", " + scale1 + ", 1)")},
                    {opacity: percent, transform: ("scale3d(" + scale2 + ", " + scale2 + ", 1)")}
                ];
            }

        },

        swipe: {

            show: function show(dir) {

                if (dir < 0) {
                    return [
                        {opacity: 1, transform: "translate3d(100%, 0, 0)", zIndex: 0},
                        {opacity: 1, transform: "scale3d(1, 1, 1) translate3d(0, 0, 0)", zIndex: -1} ];
                } else {
                    return [
                        {opacity: 0.3, transform: ("scale3d(" + (1 - diff) + ", " + (1 - diff) + ", 1) translate3d(-20%, 0, 0)"), zIndex: -1},
                        {opacity: 1, transform: 'translate3d(0, 0, 0)', zIndex: 0}
                    ];
                }


            },

            percent: function percent(current, next, dir) {

                var el = dir < 0 ? current : next,
                    percent = Math.abs(el.css('transform').split(',')[4] / el.outerWidth());

                return dir < 0 ? percent : 1 - percent;
            },

            translate: function translate(percent, dir) {
                var scale;

                if (dir < 0) {
                    scale = 1 - diff * (1 - percent);
                    return [
                        {opacity: 1, transform: ("translate3d(" + (100 * percent) + "%, 0, 0)"), zIndex: 0},
                        {opacity: 0.3 + 0.7 * percent, transform: ("scale3d(" + scale + ", " + scale + ", 1) translate3d(" + (-20 * (1 - percent)) + "%, 0, 0)"), zIndex: -1} ];
                } else {
                    scale = 1 - diff * percent;
                    return [
                        {opacity: 1 - 0.7 * percent, transform: ("scale3d(" + scale + ", " + scale + ", 1) translate3d(" + (-20 * percent) + "%, 0, 0)"), zIndex: -1},
                        {opacity: 1, transform: ("translate3d(" + (100 * (1 - percent)) + "%, 0, 0)"), zIndex: 0}
                    ];
                }

            }

        },

    };

    function Transitioner (animation, transition, current, next, dir, cb) {

        animation = animation in Animations ? Animations[animation] : Animations.slide;

        var props = animation.show(dir);

        return {

            dir: dir,
            current: current,
            next: next,

            show: function show(duration, percent) {
                var this$1 = this;
                if ( percent === void 0 ) percent = 0;


                duration -= Math.round(duration * percent);

                this.translate(percent);

                return promise.all([
                    Transition.start(current, props[0], duration, transition),
                    Transition.start(next, props[1], duration, transition)
                ]).then(function () {
                    this$1.reset();
                    cb();
                }, noop);
            },

            stop: function stop() {
                return promise.all([
                    Transition.stop(next),
                    Transition.stop(current)
                ]);
            },

            cancel: function cancel() {
                return promise.all([
                    Transition.cancel(next),
                    Transition.cancel(current)
                ]);
            },

            reset: function reset() {
                for (var prop in props[0]) {
                    $([next[0], current[0]]).css(prop, '');
                }
            },

            forward: function forward(duration) {
                var this$1 = this;


                var percent = this.percent();

                return promise.all([
                    Transition.cancel(next),
                    Transition.cancel(current)
                ]).then(function () { return this$1.show(duration, percent); });

            },

            translate: function translate(percent) {

                var props = animation.translate(percent, dir);
                current.css(props[0]);
                next.css(props[1]);

            },

            percent: function percent() {
                return animation.percent(current, next, dir);
            }

        }

    }

    // polyfill for Math.trunc (IE)
    function trunc(x) {
        return ~~x;
    }

}

/* harmony default export */ __webpack_exports__["a"] = plugin;


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__api_index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mixin_index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_index__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_boot__ = __webpack_require__(4);





__WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */].version = '3.0.0-beta.28';

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__mixin_index__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */]);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_index__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */]);

if (false) {
    boot(UIkit);
}

/* harmony default export */ __webpack_exports__["a"] = __WEBPACK_IMPORTED_MODULE_0__api_index__["a" /* default */];


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return doc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return docElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return isRtl; });
/* harmony export (immutable) */ __webpack_exports__["u"] = isReady;
/* harmony export (immutable) */ __webpack_exports__["a"] = ready;
/* harmony export (immutable) */ __webpack_exports__["b"] = on;
/* harmony export (immutable) */ __webpack_exports__["v"] = off;
/* harmony export (immutable) */ __webpack_exports__["g"] = one;
/* harmony export (immutable) */ __webpack_exports__["c"] = trigger;
/* harmony export (immutable) */ __webpack_exports__["j"] = $trigger;
/* harmony export (immutable) */ __webpack_exports__["w"] = transition;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return Transition; });
/* harmony export (immutable) */ __webpack_exports__["x"] = animate;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return Animation; });
/* harmony export (immutable) */ __webpack_exports__["e"] = isJQuery;
/* harmony export (immutable) */ __webpack_exports__["d"] = isWithin;
/* harmony export (immutable) */ __webpack_exports__["y"] = attrFilter;
/* harmony export (immutable) */ __webpack_exports__["m"] = removeClass;
/* harmony export (immutable) */ __webpack_exports__["z"] = createEvent;
/* harmony export (immutable) */ __webpack_exports__["r"] = isInView;
/* harmony export (immutable) */ __webpack_exports__["A"] = scrolledOver;
/* harmony export (immutable) */ __webpack_exports__["q"] = docHeight;
/* harmony export (immutable) */ __webpack_exports__["o"] = getIndex;
/* harmony export (immutable) */ __webpack_exports__["p"] = isVoidElement;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return Dimensions; });
/* harmony export (immutable) */ __webpack_exports__["f"] = query;
/* harmony export (immutable) */ __webpack_exports__["B"] = preventClick;
/* harmony export (immutable) */ __webpack_exports__["C"] = getData;



var docEl = document.documentElement;
var win = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(window);
var doc = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(document);
var docElement = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(docEl);

var isRtl = docEl.getAttribute('dir') === 'rtl';

function isReady() {
    return document.readyState === 'complete' || document.readyState !== 'loading' && !docEl.doScroll;
}

function ready(fn) {

    var handle = function () {
        off(document, 'DOMContentLoaded', handle);
        off(window, 'load', handle);
        fn();
    };

    if (isReady()) {
        fn();
    } else {
        on(document, 'DOMContentLoaded', handle);
        on(window, 'load', handle);
    }

}

function on(el, type, listener, useCapture) {
    if ( useCapture === void 0 ) useCapture = false;

    type.split(' ').forEach(function (type) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["toNode"])(el).addEventListener(type, listener, useCapture); });
}

function off(el, type, listener, useCapture) {
    if ( useCapture === void 0 ) useCapture = false;

    type.split(' ').forEach(function (type) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["toNode"])(el).removeEventListener(type, listener, useCapture); });
}

function one(el, type, listener, useCapture, condition) {
    type.split(' ').forEach(function (type) {
        var handler = function (e) {
            var result = !condition || condition(e);
            if (result) {
                off(el, type, handler, useCapture);
                listener(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["isBoolean"])(result) ? e : result);
            }
        };

        on(el, type, handler, useCapture);
    });
}

function trigger(element, event) {
    var e = createEvent(event);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["toNode"])(element).dispatchEvent(e);
    return e;
}

function $trigger(element, event, data, local) {
    if ( local === void 0 ) local = false;

    var e = event instanceof __WEBPACK_IMPORTED_MODULE_1__index__["Event"] ? event : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["Event"])(event);
    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element)[local ? 'triggerHandler' : 'trigger'](e, data);
    return e;
}

function transition(element, props, duration, transition) {
    if ( duration === void 0 ) duration = 400;
    if ( transition === void 0 ) transition = 'linear';


    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["promise"])(function (resolve, reject) {

        element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element);

        for (var name in props) {
            element.css(name, element.css(name));
        }

        var timer = setTimeout(function () { return element.trigger(__WEBPACK_IMPORTED_MODULE_1__index__["transitionend"]); }, duration);

        element
            .one(__WEBPACK_IMPORTED_MODULE_1__index__["transitionend"], function (e, cancel) {

                clearTimeout(timer);
                element.removeClass('uk-transition').css('transition', '');
                if (!cancel) {
                    resolve();
                } else {
                    reject();
                }

            })
            .addClass('uk-transition')
            .css('transition', ("all " + duration + "ms " + transition))
            .css(props);

    });

}

var Transition = {

    start: transition,

    stop: function stop(element, cancel) {
        $trigger(element, __WEBPACK_IMPORTED_MODULE_1__index__["transitionend"], [cancel], true);
        return __WEBPACK_IMPORTED_MODULE_1__index__["promise"].resolve();
    },

    cancel: function cancel(element) {
        return this.stop(element, true);
    },

    inProgress: function inProgress(element) {
        return __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).hasClass('uk-transition');
    }

};

function animate(element, animation, duration, origin, out) {
    if ( duration === void 0 ) duration = 200;


    var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["promise"])(function (resolve) {

        var cls = "" + animation + (out ? ' uk-animation-leave' : ' uk-animation-enter');

        element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element);

        if (animation.lastIndexOf('uk-animation-', 0) === 0) {

            if (origin) {
                cls += " uk-animation-" + origin;
            }

            if (out) {
                cls += ' uk-animation-reverse';
            }

        }

        reset();

        element
            .one(__WEBPACK_IMPORTED_MODULE_1__index__["animationend"] || 'animationend', function () {
                p.then(reset);
                resolve();
            })
            .css('animation-duration', (duration + "ms"))
            .addClass(cls);

        if (!__WEBPACK_IMPORTED_MODULE_1__index__["animationend"]) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["requestAnimationFrame"])(function () { return Animation.cancel(element); });
        }

        function reset() {
            element.css('animation-duration', '').removeClass(cls);
        }

    });

    return p;
}

var Animation = {

    in: function in$1(element, animation, duration, origin) {
        return animate(element, animation, duration, origin, false);
    },

    out: function out(element, animation, duration, origin) {
        return animate(element, animation, duration, origin, true);
    },

    inProgress: function inProgress(element) {
        return __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).hasClass('uk-animation-enter') || __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).hasClass('uk-animation-leave');
    },

    cancel: function cancel(element) {
        $trigger(element, __WEBPACK_IMPORTED_MODULE_1__index__["animationend"] || 'animationend', null, true);
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["promise"])(function (resolve) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["requestAnimationFrame"])(resolve); });
    }

};

function isJQuery(obj) {
    return obj instanceof __WEBPACK_IMPORTED_MODULE_0_jquery___default.a;
}

function isWithin(element, selector) {
    element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element);
    return element.is(selector)
        ? true
        : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["isString"])(selector)
            ? element.parents(selector).length
            : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["toNode"])(selector).contains(element[0]);
}

function attrFilter(element, attr, pattern, replacement) {
    element = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element);
    return element.attr(attr, function (i, value) { return value ? value.replace(pattern, replacement) : value; });
}

function removeClass(element, cls) {
    return attrFilter(element, 'class', new RegExp(("(^|\\s)" + cls + "(?!\\S)"), 'g'), '');
}

function createEvent(e, bubbles, cancelable, data) {
    if ( bubbles === void 0 ) bubbles = true;
    if ( cancelable === void 0 ) cancelable = false;
    if ( data === void 0 ) data = false;

    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["isString"])(e)) {
        var event = document.createEvent('Event');
        event.initEvent(e, bubbles, cancelable);
        e = event;
    }

    if (data) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["assign"])(e, data);
    }

    return e;
}

function isInView(element, offsetTop, offsetLeft) {
    if ( offsetTop === void 0 ) offsetTop = 0;
    if ( offsetLeft === void 0 ) offsetLeft = 0;


    var rect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["toNode"])(element).getBoundingClientRect();

    return rect.bottom >= -1 * offsetTop
        && rect.right >= -1 * offsetLeft
        && rect.top <= window.innerHeight + offsetTop
        && rect.left <= window.innerWidth + offsetLeft;
}

function scrolledOver(element) {

    element = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["toNode"])(element);

    var height = element.offsetHeight,
        top = positionTop(element),
        vp = window.innerHeight,
        vh = vp + Math.min(0, top - vp),
        diff = Math.max(0, vp - (docHeight() - (top + height)));

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["clamp"])(((vh + window.pageYOffset - top) / ((vh + (height - (diff < vp ? diff : 0)) ) / 100)) / 100);
}

function positionTop(element) {
    var top = 0;

    do {

        top += element.offsetTop;

    } while (element = element.offsetParent);

    return top;
}

function docHeight() {
    return Math.max(docEl.offsetHeight, docEl.scrollHeight);
}

function getIndex(index, elements, current) {
    if ( current === void 0 ) current = 0;


    elements = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(elements);

    var length = __WEBPACK_IMPORTED_MODULE_0_jquery___default()(elements).length;

    index = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["isNumber"])(index)
        ? index
        : index === 'next'
            ? current + 1
            : index === 'previous'
                ? current - 1
                : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["isString"])(index)
                    ? parseInt(index, 10)
                    : elements.index(index)
    ) % length;

    return index < 0 ? index + length : index;
}

var voidElements = {
    area: true,
    base: true,
    br: true,
    col: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    menuitem: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
};
function isVoidElement(element) {
    return voidElements[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["toNode"])(element).tagName.toLowerCase()];
}

var Dimensions = {

    ratio: function ratio(dimensions, prop, value) {

        var aProp = prop === 'width' ? 'height' : 'width';

        return ( obj = {}, obj[aProp] = Math.round(value * dimensions[aProp] / dimensions[prop]), obj[prop] = value, obj );
        var obj;
    },

    contain: function contain(dimensions, maxDimensions) {
        var this$1 = this;

        dimensions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["assign"])({}, dimensions);

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["each"])(dimensions, function (prop) { return dimensions = dimensions[prop] > maxDimensions[prop] ? this$1.ratio(dimensions, prop, maxDimensions[prop]) : dimensions; });

        return dimensions;
    },

    cover: function cover(dimensions, maxDimensions) {
        var this$1 = this;

        dimensions = this.contain(dimensions, maxDimensions);

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["each"])(dimensions, function (prop) { return dimensions = dimensions[prop] < maxDimensions[prop] ? this$1.ratio(dimensions, prop, maxDimensions[prop]) : dimensions; });

        return dimensions;
    }

};

function query(selector, context) {
    var selectors = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["getContextSelectors"])(selector);
    return selectors ? selectors.reduce(function (context, selector) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["toJQuery"])(selector, context); }, context) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["toJQuery"])(selector);
}

function preventClick() {

    var timer = setTimeout(function () { return trigger(doc, 'click'); }, 0);

    one(doc, 'click', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();

        clearTimeout(timer);
    }, true);

}

function getData(el, attribute) {
    el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["toNode"])(el);
    for (var i = 0, attrs = [attribute, ("data-" + attribute)]; i < attrs.length; i++) {
        if (el.hasAttribute(attrs[i])) {
            return el.getAttribute(attrs[i]);
        }
    }
}


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lang__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Observer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return requestAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return hasPromise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return hasTouch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return pointerDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return pointerMove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return pointerUp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return pointerEnter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return pointerLeave; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return transitionend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return animationstart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return animationend; });
/* harmony export (immutable) */ __webpack_exports__["k"] = getStyle;
/* harmony export (immutable) */ __webpack_exports__["f"] = getCssVar;
/* harmony export (immutable) */ __webpack_exports__["o"] = getImage;


var Observer = window.MutationObserver || window.WebKitMutationObserver;
var requestAnimationFrame = window.requestAnimationFrame || function (fn) { return setTimeout(fn, 1000 / 60); };

var hasTouchEvents = 'ontouchstart' in window;
var hasPointerEvents = window.PointerEvent;
var hasPromise = 'Promise' in window;
var hasTouch = 'ontouchstart' in window
    || window.DocumentTouch && document instanceof DocumentTouch
    || navigator.msPointerEnabled && navigator.msMaxTouchPoints // IE 10
    || navigator.pointerEnabled && navigator.maxTouchPoints; // IE >=11

var pointerDown = !hasTouch ? 'mousedown' : ("mousedown " + (hasTouchEvents ? 'touchstart' : 'pointerdown'));
var pointerMove = !hasTouch ? 'mousemove' : ("mousemove " + (hasTouchEvents ? 'touchmove' : 'pointermove'));
var pointerUp = !hasTouch ? 'mouseup' :  ("mouseup " + (hasTouchEvents ? 'touchend' : 'pointerup'));
var pointerEnter = hasTouch && hasPointerEvents ? 'pointerenter' : 'mouseenter';
var pointerLeave = hasTouch && hasPointerEvents ? 'pointerleave' : 'mouseleave';

var transitionend = prefix('transition', 'transition-end');
var animationstart = prefix('animation', 'animation-start');
var animationend = prefix('animation', 'animation-end');

function getStyle(element, property, pseudoElt) {
    return (window.getComputedStyle(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["a" /* toNode */])(element), pseudoElt) || {})[property];
}

function getCssVar(name) {

    /* usage in css:  .var-name:before { content:"xyz" } */

    var val, doc = document.documentElement,
        element = doc.appendChild(document.createElement('div'));

    element.classList.add(("var-" + name));

    try {

        val = getStyle(element, 'content', ':before').replace(/^["'](.*)["']$/, '$1');
        val = JSON.parse(val);

    } catch (e) {}

    doc.removeChild(element);

    return val || undefined;
}

function getImage(src) {

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["b" /* promise */])(function (resolve, reject) {
        var img = new Image();

        img.onerror = reject;
        img.onload = function () { return resolve(img); };

        img.src = src;
    });

}

function prefix(name, event) {

    var ucase = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["c" /* classify */])(name),
        lowered = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["c" /* classify */])(event).toLowerCase(),
        classified = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__lang__["c" /* classify */])(event),
        element = document.body || document.documentElement,
        names = ( obj = {}, obj[name] = lowered, obj[("Webkit" + ucase)] = ("webkit" + classified), obj[("Moz" + ucase)] = lowered, obj[("o" + ucase)] = ("o" + classified + " o" + lowered), obj );
    var obj;

    for (name in names) {
        if (element.style[name] !== undefined) {
            return names[name];
        }
    }
}


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fastdom; });
/*
    Based on:
    Copyright (c) 2016 Wilson Page wilsonpage@me.com
    https://github.com/wilsonpage/fastdom
*/



var fastdom = {

    reads: [],
    writes: [],

    measure: function measure(task) {
        this.reads.push(task);
        scheduleFlush();
        return task;
    },

    mutate: function mutate(task) {
        this.writes.push(task);
        scheduleFlush();
        return task;
    },

    clear: function clear(task) {
        return remove(this.reads, task) || remove(this.writes, task);
    },

    flush: function flush() {

        runTasks(this.reads);
        runTasks(this.writes.splice(0, this.writes.length));

        this.scheduled = false;

        if (this.reads.length || this.writes.length) {
            scheduleFlush();
        }

    }

};

function scheduleFlush() {
    if (!fastdom.scheduled) {
        fastdom.scheduled = true;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["requestAnimationFrame"])(fastdom.flush.bind(fastdom));
    }
}

function runTasks(tasks) {
    var task;
    while (task = tasks.shift()) {
        task();
    }
}

function remove(array, item) {
    var index = array.indexOf(item);
    return !!~index && !!array.splice(index, 1);
}


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = MouseTracker;


function MouseTracker() {}

MouseTracker.prototype = {

    positions: [],
    position: null,

    init: function init() {
        var this$1 = this;


        this.positions = [];
        this.position = null;

        var ticking = false;
        this.handler = function (e) {

            if (!ticking) {
                setTimeout(function () {

                    var time = Date.now(), length = this$1.positions.length;
                    if (length && (time - this$1.positions[length - 1].time > 100)) {
                        this$1.positions.splice(0, length);
                    }

                    this$1.positions.push({time: time, x: e.pageX, y: e.pageY});

                    if (this$1.positions.length > 5) {
                        this$1.positions.shift();
                    }

                    ticking = false;
                }, 5);
            }

            ticking = true;
        };

        __WEBPACK_IMPORTED_MODULE_0__index__["doc"].on('mousemove', this.handler);

    },

    cancel: function cancel() {
        if (this.handler) {
            __WEBPACK_IMPORTED_MODULE_0__index__["doc"].off('mousemove', this.handler);
        }
    },

    movesTo: function movesTo(target) {

        if (this.positions.length < 2) {
            return false;
        }

        var p = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["getDimensions"])(target),
            position = this.positions[this.positions.length - 1],
            prevPos = this.positions[0];

        if (p.left <= position.x && position.x <= p.right && p.top <= position.y && position.y <= p.bottom) {
            return false;
        }

        var points = [
            [{x: p.left, y: p.top}, {x: p.right, y: p.bottom}],
            [{x: p.right, y: p.top}, {x: p.left, y: p.bottom}]
        ];

        if (p.right <= position.x) {

        } else if (p.left >= position.x) {
            points[0].reverse();
            points[1].reverse();
        } else if (p.bottom <= position.y) {
            points[0].reverse();
        } else if (p.top >= position.y) {
            points[1].reverse();
        }

        return !!points.reduce(function (result, point) {
            return result + (slope(prevPos, point[0]) < slope(position, point[0]) && slope(prevPos, point[1]) > slope(position, point[1]));
        }, 0);
    }

};

function slope(a, b) {
    return (b.y - a.y) / (b.x - a.x);
}


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeOptions;


var strats = {};

// concat strategy
strats.args =
strats.created =
strats.events =
strats.init =
strats.ready =
strats.connected =
strats.disconnected =
strats.destroy = function (parentVal, childVal) {

    parentVal = parentVal && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isArray"])(parentVal) ? [parentVal] : parentVal;

    return childVal
        ? parentVal
            ? parentVal.concat(childVal)
            : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isArray"])(childVal)
                ? childVal
                : [childVal]
        : parentVal;
};

// update strategy
strats.update = function (parentVal, childVal) {
    return strats.args(parentVal, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isFunction"])(childVal) ? {read: childVal} : childVal);
};

// property strategy
strats.props = function (parentVal, childVal) {

    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isArray"])(childVal)) {
        childVal = childVal.reduce(function (value, key) {
            value[key] = String;
            return value;
        }, {});
    }

    return strats.methods(parentVal, childVal);
};

// extend strategy
strats.computed =
strats.defaults =
strats.methods = function (parentVal, childVal) {
    return childVal
        ? parentVal
            ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["assign"])({}, parentVal, childVal)
            : childVal
        : parentVal;
};

// default strategy
var defaultStrat = function (parentVal, childVal) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isUndefined"])(childVal) ? parentVal : childVal;
};

function mergeOptions(parent, child) {

    var options = {}, key;

    if (child.mixins) {
        for (var i = 0, l = child.mixins.length; i < l; i++) {
            parent = mergeOptions(parent, child.mixins[i]);
        }
    }

    for (key in parent) {
        mergeKey(key);
    }

    for (key in child) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["hasOwn"])(parent, key)) {
            mergeKey(key);
        }
    }

    function mergeKey(key) {
        options[key] = (strats[key] || defaultStrat)(parent[key], child[key]);
    }

    return options;
}


/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });


var id = 0;

var Player = function Player(el) {
    this.id = ++id;
    this.el = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["toNode"])(el);
};

Player.prototype.isVideo = function isVideo () {
    return this.isYoutube() || this.isVimeo() || this.isHTML5();
};

Player.prototype.isHTML5 = function isHTML5 () {
    return this.el.tagName === 'VIDEO';
};

Player.prototype.isIFrame = function isIFrame () {
    return this.el.tagName === 'IFRAME';
};

Player.prototype.isYoutube = function isYoutube () {
    return this.isIFrame() && !!this.el.src.match(/\/\/.*?youtube\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
};

Player.prototype.isVimeo = function isVimeo () {
    return this.isIFrame() && !!this.el.src.match(/vimeo\.com\/video\/.*/);
};

Player.prototype.enableApi = function enableApi () {
        var this$1 = this;


    if (this.ready) {
        return this.ready;
    }

    var youtube = this.isYoutube(), vimeo = this.isVimeo(), poller;

    if (youtube || vimeo) {

        return this.ready = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["promise"])(function (resolve) {

            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["one"])(this$1.el, 'load', function () {
                if (youtube) {
                    var listener = function () { return post(this$1.el, {event: 'listening', id: this$1.id}); };
                    poller = setInterval(listener, 100);
                    listener();
                }
            });

            listen(function (data) { return youtube && data.id === this$1.id && data.event === 'onReady' || vimeo && Number(data.player_id) === this$1.id; })
                .then(function () {
                    resolve();
                    poller && clearInterval(poller);
                });

            this$1.el.setAttribute('src', ("" + (this$1.el.src) + (~this$1.el.src.indexOf('?') ? '&' : '?') + (youtube ? 'enablejsapi=1' : ("api=1&player_id=" + id))));

        });

    }

    return __WEBPACK_IMPORTED_MODULE_0__index__["promise"].resolve();

};

Player.prototype.play = function play () {
        var this$1 = this;


    if (!this.isVideo()) {
        return;
    }

    if (this.isIFrame()) {
        this.enableApi().then(function () { return post(this$1.el, {func: 'playVideo', method: 'play'}); })
    } else if (this.isHTML5()) {
        this.el.play();
    }
};

Player.prototype.pause = function pause () {
        var this$1 = this;


    if (!this.isVideo()) {
        return;
    }

    if (this.isIFrame()) {
        this.enableApi().then(function () { return post(this$1.el, {func: 'pauseVideo', method: 'pause'}); })
    } else if (this.isHTML5()) {
        this.el.pause();
    }
};

Player.prototype.mute = function mute () {
        var this$1 = this;


    if (!this.isVideo()) {
        return;
    }

    if (this.isIFrame()) {
        this.enableApi().then(function () { return post(this$1.el, {func: 'mute', method: 'setVolume', value: 0}); })
    } else if (this.isHTML5()) {
        this.el.muted = true;
        this.el.setAttribute('muted', '');
    }

};

function post(el, cmd) {
    try {
        el.contentWindow.postMessage(JSON.stringify(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["assign"])({event: 'command'}, cmd)), '*');
    } catch (e) {}
}

function listen(cb) {

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["promise"])(function (resolve) {

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["one"])(window, 'message', function (data) { return resolve(data); }, false, function (ref) {
            var data = ref.data;


            if (!data || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isString"])(data)) {
                return;
            }

            try {
                data = JSON.parse(data);
            } catch(err) {
                return;
            }

            return data && cb(data);

        });

    });

}


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["b"] = position;
/* harmony export (immutable) */ __webpack_exports__["a"] = getDimensions;
/* harmony export (immutable) */ __webpack_exports__["e"] = offset;
/* harmony export (immutable) */ __webpack_exports__["d"] = offsetTop;
/* harmony export (immutable) */ __webpack_exports__["c"] = flipPosition;



var dirs = {
        x: ['width', 'left', 'right'],
        y: ['height', 'top', 'bottom']
    },
    docEl = document.documentElement;

function position(element, target, elAttach, targetAttach, elOffset, targetOffset, flip, boundary) {

    elAttach = getPos(elAttach);
    targetAttach = getPos(targetAttach);

    var flipped = {element: elAttach, target: targetAttach};

    if (!element) {
        return flipped;
    }

    var dim = getDimensions(element),
        targetDim = getDimensions(target),
        position = targetDim;

    moveTo(position, elAttach, dim, -1);
    moveTo(position, targetAttach, targetDim, 1);

    elOffset = getOffsets(elOffset, dim.width, dim.height);
    targetOffset = getOffsets(targetOffset, targetDim.width, targetDim.height);

    elOffset['x'] += targetOffset['x'];
    elOffset['y'] += targetOffset['y'];

    position.left += elOffset['x'];
    position.top += elOffset['y'];

    boundary = getDimensions(boundary || window);

    if (flip) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["each"])(dirs, function (dir, ref) {
            var prop = ref[0];
            var align = ref[1];
            var alignFlip = ref[2];


            if (!(flip === true || ~flip.indexOf(dir))) {
                return;
            }

            var elemOffset = elAttach[dir] === align
                    ? -dim[prop]
                    : elAttach[dir] === alignFlip
                        ? dim[prop]
                        : 0,
                targetOffset = targetAttach[dir] === align
                    ? targetDim[prop]
                    : targetAttach[dir] === alignFlip
                        ? -targetDim[prop]
                        : 0;

            if (position[align] < boundary[align] || position[align] + dim[prop] > boundary[alignFlip]) {

                var centerOffset = dim[prop] / 2,
                    centerTargetOffset = targetAttach[dir] === 'center' ? -targetDim[prop] / 2 : 0;

                elAttach[dir] === 'center' && (
                    apply(centerOffset, centerTargetOffset)
                    || apply(-centerOffset, -centerTargetOffset)
                ) || apply(elemOffset, targetOffset);

            }

            function apply(elemOffset, targetOffset) {

                var newVal = position[align] + elemOffset + targetOffset - elOffset[dir] * 2;

                if (newVal >= boundary[align] && newVal + dim[prop] <= boundary[alignFlip]) {
                    position[align] = newVal;

                    ['element', 'target'].forEach(function (el) {
                        flipped[el][dir] = !elemOffset
                            ? flipped[el][dir]
                            : flipped[el][dir] === dirs[dir][1]
                                ? dirs[dir][2]
                                : dirs[dir][1];
                    });

                    return true;
                }

            }

        });
    }

    offset(element, position);

    return flipped;
}

function getDimensions(element) {

    element = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["toNode"])(element);

    var window = getWindow(element), top = window.pageYOffset, left = window.pageXOffset;

    if (!element.ownerDocument) {
        return {
            top: top,
            left: left,
            height: window.innerHeight,
            width: window.innerWidth,
            bottom: top + window.innerHeight,
            right: left + window.innerWidth,
        }
    }

    var display = false;
    if (!element.offsetHeight) {
        display = element.style.display;
        element.style.display = 'block';
    }

    var rect = element.getBoundingClientRect();

    if (display !== false) {
        element.style.display = display;
    }

    return {
        height: rect.height,
        width: rect.width,
        top: rect.top + top,
        left: rect.left + left,
        bottom: rect.bottom + top,
        right: rect.right + left,
    }
}

function offset(element, ref) {
    var left = ref.left;
    var top = ref.top;

    __WEBPACK_IMPORTED_MODULE_0_jquery___default()(element).offset({left: left - docEl.clientLeft, top: top - docEl.clientTop});
}

function offsetTop(element) {
    element = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["toNode"])(element);
    return element.getBoundingClientRect().top + getWindow(element).pageYOffset;
}

function getWindow(element) {
    return element && element.ownerDocument ? element.ownerDocument.defaultView : window;
}

function moveTo(position, attach, dim, factor) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__index__["each"])(dirs, function (dir, ref) {
        var prop = ref[0];
        var align = ref[1];
        var alignFlip = ref[2];

        if (attach[dir] === alignFlip) {
            position[align] += dim[prop] * factor;
        } else if (attach[dir] === 'center') {
            position[align] += dim[prop] * factor / 2;
        }
    });
}

function getPos(pos) {

    var x = /left|center|right/, y = /top|center|bottom/;

    pos = (pos || '').split(' ');

    if (pos.length === 1) {
        pos = x.test(pos[0])
            ? pos.concat(['center'])
            : y.test(pos[0])
                ? ['center'].concat(pos)
                : ['center', 'center'];
    }

    return {
        x: x.test(pos[0]) ? pos[0] : 'center',
        y: y.test(pos[1]) ? pos[1] : 'center'
    };
}

function getOffsets(offsets, width, height) {

    offsets = (offsets || '').split(' ');

    return {
        x: offsets[0] ? parseFloat(offsets[0]) * (offsets[0][offsets[0].length - 1] === '%' ? width / 100 : 1) : 0,
        y: offsets[1] ? parseFloat(offsets[1]) * (offsets[1][offsets[1].length - 1] === '%' ? height / 100 : 1) : 0
    };
}

function flipPosition(pos) {
    switch (pos) {
        case 'left':
            return 'right';
        case 'right':
            return 'left';
        case 'top':
            return 'bottom';
        case 'bottom':
            return 'top';
        default:
            return pos;
    }
}


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = isTouch;
/*
    Based on:
    Copyright (c) 2010-2016 Thomas Fuchs
    http://zeptojs.com/
*/



var touch = {}, clickTimeout, swipeTimeout, tapTimeout, clicked;

function swipeDirection(ref) {
    var x1 = ref.x1;
    var x2 = ref.x2;
    var y1 = ref.y1;
    var y2 = ref.y2;

    return Math.abs(x1 - x2) >= Math.abs(y1 - y2) ? (x1 - x2 > 0 ? 'Left' : 'Right') : (y1 - y2 > 0 ? 'Up' : 'Down');
}

function cancelAll() {
    clickTimeout && clearTimeout(clickTimeout);
    swipeTimeout && clearTimeout(swipeTimeout);
    tapTimeout && clearTimeout(tapTimeout);
    clickTimeout = swipeTimeout = tapTimeout = null;
    touch = {};
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["ready"])(function () {

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["on"])(document, 'click', function () { return clicked = true; }, true);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["on"])(document, __WEBPACK_IMPORTED_MODULE_0__index__["pointerDown"], function (e) {

        var ref = e.touches ? e.touches[0] : e;
        var target = ref.target;
        var pageX = ref.pageX;
        var pageY = ref.pageY;
        var now = Date.now();

        touch.el = 'tagName' in target ? target : target.parentNode;

        clickTimeout && clearTimeout(clickTimeout);

        touch.x1 = pageX;
        touch.y1 = pageY;

        if (touch.last && now - touch.last <= 250) {
            touch = {};
        }

        touch.last = now;

        clicked = e.button > 0;

    });

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["on"])(document, __WEBPACK_IMPORTED_MODULE_0__index__["pointerMove"], function (e) {

        var ref = e.touches ? e.touches[0] : e;
        var pageX = ref.pageX;
        var pageY = ref.pageY;

        touch.x2 = pageX;
        touch.y2 = pageY;
    });

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["on"])(document, __WEBPACK_IMPORTED_MODULE_0__index__["pointerUp"], function (ref) {
        var target = ref.target;


        // swipe
        if (touch.x2 && Math.abs(touch.x1 - touch.x2) > 30 || touch.y2 && Math.abs(touch.y1 - touch.y2) > 30) {

            swipeTimeout = setTimeout(function () {
                if (touch.el) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["trigger"])(touch.el, 'swipe');
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["trigger"])(touch.el, ("swipe" + (swipeDirection(touch))));
                }
                touch = {};
            });

        // normal tap
        } else if ('last' in touch) {

            tapTimeout = setTimeout(function () { return touch.el && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["trigger"])(touch.el, 'tap'); });

            // trigger single click after 350ms of inactivity
            if (touch.el && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["isWithin"])(target, touch.el)) {
                clickTimeout = setTimeout(function () {
                    clickTimeout = null;
                    if (touch.el && !clicked) {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["trigger"])(touch.el, 'click');
                    }
                    touch = {};
                }, 350);
            }

        } else {
            touch = {};
        }
    });

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["on"])(document, 'touchcancel', cancelAll);
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["on"])(window, 'scroll', cancelAll);
});

var touching = false;
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["on"])(document, 'touchstart', function () { return touching = true; }, true);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["on"])(document, 'click', function () {touching = false});
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__index__["on"])(document, 'touchcancel', function () { return touching = false; }, true);

function isTouch(e) {
    return touching || (e.originalEvent || e).pointerType === 'touch';
}


/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" xmlns=\"http://www.w3.org/2000/svg\">\n    <line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"1\" y1=\"1\" x2=\"13\" y2=\"13\"></line>\n    <line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13\" y1=\"1\" x2=\"1\" y2=\"13\"></line>\n</svg>\n";

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n    <line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"1\" y1=\"1\" x2=\"19\" y2=\"19\"></line>\n    <line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"19\" y1=\"1\" x2=\"1\" y2=\"19\"></line>\n</svg>\n";

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n\t<rect x=\"9\" y=\"4\" width=\"1\" height=\"11\"></rect>\n\t<rect x=\"4\" y=\"9\" width=\"11\" height=\"1\"></rect>\n</svg>\n";

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect y=\"9\" width=\"20\" height=\"2\"></rect>\n    <rect y=\"3\" width=\"20\" height=\"2\"></rect>\n    <rect y=\"15\" width=\"20\" height=\"2\"></rect>\n</svg>\n";

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\">\n    <rect x=\"19\" y=\"0\" width=\"1\" height=\"40\"></rect>\n    <rect x=\"0\" y=\"19\" width=\"40\" height=\"1\"></rect>\n</svg>\n";

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 1 6 6 1 11\"></polyline>\n</svg>\n";

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"6 1 1 6 6 11\"></polyline>\n</svg>\n";

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\"></circle>\n    <path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\"></path>\n</svg>\n";

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" cx=\"17.5\" cy=\"17.5\" r=\"16.5\"></circle>\n    <line fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" x1=\"38\" y1=\"39\" x2=\"29\" y2=\"30\"></line>\n</svg>\n";

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10.5\" cy=\"10.5\" r=\"9.5\"/>\n    <line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"23\" y1=\"23\" x2=\"17\" y2=\"17\"/>\n</svg>\n";

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"18\" height=\"34\" viewBox=\"0 0 18 34\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"1 1 17 17 1 33\"></polyline>\n</svg>\n";

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"11\" height=\"20\" viewBox=\"0 0 11 20\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 1 10 10 1 19\"></polyline>\n</svg>\n";

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"18\" height=\"34\" viewBox=\"0 0 18 34\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"17 1 1 17 17 33\"></polyline>\n</svg>\n";

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"11\" height=\"20\" viewBox=\"0 0 11 20\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"10 1 1 10 10 19\"></polyline>\n</svg>\n";

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\">\n    <circle fill=\"none\" stroke=\"#000\" cx=\"15\" cy=\"15\" r=\"14\"></circle>\n</svg>\n";

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = "<svg width=\"18\" height=\"10\" viewBox=\"0 0 18 10\" xmlns=\"http://www.w3.org/2000/svg\">\n    <polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 9 9 1 17 9 \"></polyline>\n</svg>\n";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8).default;


/***/ })
/******/ ]);
});