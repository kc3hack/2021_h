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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var uikit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uikit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var uikit_dist_js_uikit_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var uikit_dist_js_uikit_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(uikit_dist_js_uikit_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var two_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());





 // loads the Icon plugin

uikit__WEBPACK_IMPORTED_MODULE_0___default.a.use(uikit_dist_js_uikit_icons__WEBPACK_IMPORTED_MODULE_1___default.a); // components can be called from the imported UIkit reference
// UIkit.notification('Hello world.');

!(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(function () {
  var two = new two_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
    autostart: true
  }).appendTo(document.getElementById('chat'));
  var rect = two.makeRectangle(two.width / 2, two.height / 2, 250, 250);
  rect.noStroke().fill = getRandomColor(); // Update the renderer in order to generate corresponding DOM Elements.

  two.update();
  !(function webpackMissingModule() { var e = new Error("Cannot find module 'jquery'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(rect._renderer.elem).css('cursor', 'pointer').click(function (e) {
    rect.fill = getRandomColor();
  });
  two.bind('update', function (frameCount, timeDelta) {
    rect.rotation = frameCount / 60;
  });

  function getRandomColor() {
    return 'rgb(' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ',' + Math.floor(Math.random() * 255) + ')';
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/*! UIkit 3.6.18 | https://www.getuikit.com | (c) 2014 - 2021 YOOtheme | MIT License */

(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, (function () { 'use strict';

    var objPrototype = Object.prototype;
    var hasOwnProperty = objPrototype.hasOwnProperty;

    function hasOwn(obj, key) {
        return hasOwnProperty.call(obj, key);
    }

    var hyphenateRe = /\B([A-Z])/g;

    var hyphenate = memoize(function (str) { return str
        .replace(hyphenateRe, '-$1')
        .toLowerCase(); }
    );

    var camelizeRe = /-(\w)/g;

    var camelize = memoize(function (str) { return str.replace(camelizeRe, toUpper); }
    );

    var ucfirst = memoize(function (str) { return str.length ? toUpper(null, str.charAt(0)) + str.slice(1) : ''; }
    );

    function toUpper(_, c) {
        return c ? c.toUpperCase() : '';
    }

    var strPrototype = String.prototype;
    var startsWithFn = strPrototype.startsWith || function (search) { return this.lastIndexOf(search, 0) === 0; };

    function startsWith(str, search) {
        return startsWithFn.call(str, search);
    }

    var endsWithFn = strPrototype.endsWith || function (search) { return this.substr(-search.length) === search; };

    function endsWith(str, search) {
        return endsWithFn.call(str, search);
    }

    var arrPrototype = Array.prototype;

    var includesFn = function (search, i) { return !!~this.indexOf(search, i); };
    var includesStr = strPrototype.includes || includesFn;
    var includesArray = arrPrototype.includes || includesFn;

    function includes(obj, search) {
        return obj && (isString(obj) ? includesStr : includesArray).call(obj, search);
    }

    var findIndexFn = arrPrototype.findIndex || function (predicate) {
        var arguments$1 = arguments;

        for (var i = 0; i < this.length; i++) {
            if (predicate.call(arguments$1[1], this[i], i, this)) {
                return i;
            }
        }
        return -1;
    };

    function findIndex(array, predicate) {
        return findIndexFn.call(array, predicate);
    }

    var isArray = Array.isArray;

    function isFunction(obj) {
        return typeof obj === 'function';
    }

    function isObject(obj) {
        return obj !== null && typeof obj === 'object';
    }

    var toString = objPrototype.toString;
    function isPlainObject(obj) {
        return toString.call(obj) === '[object Object]';
    }

    function isWindow(obj) {
        return isObject(obj) && obj === obj.window;
    }

    function isDocument(obj) {
        return nodeType(obj) === 9;
    }

    function isNode(obj) {
        return nodeType(obj) >= 1;
    }

    function isElement(obj) {
        return nodeType(obj) === 1;
    }

    function nodeType(obj) {
        return !isWindow(obj) && isObject(obj) && obj.nodeType;
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

    function isNumeric(value) {
        return isNumber(value) || isString(value) && !isNaN(value - parseFloat(value));
    }

    function isEmpty(obj) {
        return !(isArray(obj)
            ? obj.length
            : isObject(obj)
                ? Object.keys(obj).length
                : false
        );
    }

    function isUndefined(value) {
        return value === void 0;
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

    function toFloat(value) {
        return parseFloat(value) || 0;
    }

    var toArray = Array.from || (function (value) { return arrPrototype.slice.call(value); });

    function toNode(element) {
        return toNodes(element)[0];
    }

    function toNodes(element) {
        return element && (isNode(element) ? [element] : toArray(element).filter(isNode)) || [];
    }

    function toWindow(element) {
        if (isWindow(element)) {
            return element;
        }

        element = toNode(element);

        return element
            ? (isDocument(element)
                ? element
                : element.ownerDocument
            ).defaultView
            : window;
    }

    function toMs(time) {
        return !time
            ? 0
            : endsWith(time, 'ms')
                ? toFloat(time)
                : toFloat(time) * 1000;
    }

    function isEqual(value, other) {
        return value === other
            || isObject(value)
            && isObject(other)
            && Object.keys(value).length === Object.keys(other).length
            && each(value, function (val, key) { return val === other[key]; });
    }

    function swap(value, a, b) {
        return value.replace(
            new RegExp((a + "|" + b), 'g'),
            function (match) { return match === a ? b : a; }
        );
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

    function last(array) {
        return array[array.length - 1];
    }

    function each(obj, cb) {
        for (var key in obj) {
            if (false === cb(obj[key], key)) {
                return false;
            }
        }
        return true;
    }

    function sortBy(array, prop) {
        return array.slice().sort(function (ref, ref$1) {
                var propA = ref[prop]; if ( propA === void 0 ) propA = 0;
                var propB = ref$1[prop]; if ( propB === void 0 ) propB = 0;

                return propA > propB
                ? 1
                : propB > propA
                    ? -1
                    : 0;
        }
        );
    }

    function uniqueBy(array, prop) {
        var seen = new Set();
        return array.filter(function (ref) {
            var check = ref[prop];

            return seen.has(check)
            ? false
            : seen.add(check) || true;
        } // IE 11 does not return the Set object
        );
    }

    function clamp(number, min, max) {
        if ( min === void 0 ) min = 0;
        if ( max === void 0 ) max = 1;

        return Math.min(Math.max(toNumber(number) || 0, min), max);
    }

    function noop() {}

    function intersectRect() {
        var rects = [], len = arguments.length;
        while ( len-- ) rects[ len ] = arguments[ len ];

        return [['bottom', 'top'], ['right', 'left']].every(function (ref) {
                var minProp = ref[0];
                var maxProp = ref[1];

                return Math.min.apply(Math, rects.map(function (ref) {
                var min = ref[minProp];

                return min;
                })) - Math.max.apply(Math, rects.map(function (ref) {
                var max = ref[maxProp];

                return max;
                })) > 0;
        }
        );
    }

    function pointInRect(point, rect) {
        return point.x <= rect.right &&
            point.x >= rect.left &&
            point.y <= rect.bottom &&
            point.y >= rect.top;
    }

    var Dimensions = {

        ratio: function(dimensions, prop, value) {
            var obj;


            var aProp = prop === 'width' ? 'height' : 'width';

            return ( obj = {}, obj[aProp] = dimensions[prop] ? Math.round(value * dimensions[aProp] / dimensions[prop]) : dimensions[aProp], obj[prop] = value, obj );
        },

        contain: function(dimensions, maxDimensions) {
            var this$1 = this;

            dimensions = assign({}, dimensions);

            each(dimensions, function (_, prop) { return dimensions = dimensions[prop] > maxDimensions[prop]
                ? this$1.ratio(dimensions, prop, maxDimensions[prop])
                : dimensions; }
            );

            return dimensions;
        },

        cover: function(dimensions, maxDimensions) {
            var this$1 = this;

            dimensions = this.contain(dimensions, maxDimensions);

            each(dimensions, function (_, prop) { return dimensions = dimensions[prop] < maxDimensions[prop]
                ? this$1.ratio(dimensions, prop, maxDimensions[prop])
                : dimensions; }
            );

            return dimensions;
        }

    };

    function getIndex(i, elements, current, finite) {
        if ( current === void 0 ) current = 0;
        if ( finite === void 0 ) finite = false;


        elements = toNodes(elements);

        var length = elements.length;

        i = isNumeric(i)
            ? toNumber(i)
            : i === 'next'
                ? current + 1
                : i === 'previous'
                    ? current - 1
                    : elements.indexOf(toNode(i));

        if (finite) {
            return clamp(i, 0, length - 1);
        }

        i %= length;

        return i < 0 ? i + length : i;
    }

    function memoize(fn) {
        var cache = Object.create(null);
        return function (key) { return cache[key] || (cache[key] = fn(key)); };
    }

    function attr(element, name, value) {

        if (isObject(name)) {
            for (var key in name) {
                attr(element, key, name[key]);
            }
            return;
        }

        if (isUndefined(value)) {
            element = toNode(element);
            return element && element.getAttribute(name);
        } else {
            toNodes(element).forEach(function (element) {

                if (isFunction(value)) {
                    value = value.call(element, attr(element, name));
                }

                if (value === null) {
                    removeAttr(element, name);
                } else {
                    element.setAttribute(name, value);
                }
            });
        }

    }

    function hasAttr(element, name) {
        return toNodes(element).some(function (element) { return element.hasAttribute(name); });
    }

    function removeAttr(element, name) {
        element = toNodes(element);
        name.split(' ').forEach(function (name) { return element.forEach(function (element) { return element.hasAttribute(name) && element.removeAttribute(name); }
            ); }
        );
    }

    function data(element, attribute) {
        for (var i = 0, attrs = [attribute, ("data-" + attribute)]; i < attrs.length; i++) {
            if (hasAttr(element, attrs[i])) {
                return attr(element, attrs[i]);
            }
        }
    }

    /* global DocumentTouch */

    var inBrowser = typeof window !== 'undefined';
    var isIE = inBrowser && /msie|trident/i.test(window.navigator.userAgent);
    var isRtl = inBrowser && attr(document.documentElement, 'dir') === 'rtl';

    var hasTouchEvents = inBrowser && 'ontouchstart' in window;
    var hasPointerEvents = inBrowser && window.PointerEvent;
    var hasTouch = inBrowser && (hasTouchEvents
        || window.DocumentTouch && document instanceof DocumentTouch
        || navigator.maxTouchPoints); // IE >=11

    var pointerDown = hasPointerEvents ? 'pointerdown' : hasTouchEvents ? 'touchstart' : 'mousedown';
    var pointerMove = hasPointerEvents ? 'pointermove' : hasTouchEvents ? 'touchmove' : 'mousemove';
    var pointerUp = hasPointerEvents ? 'pointerup' : hasTouchEvents ? 'touchend' : 'mouseup';
    var pointerEnter = hasPointerEvents ? 'pointerenter' : hasTouchEvents ? '' : 'mouseenter';
    var pointerLeave = hasPointerEvents ? 'pointerleave' : hasTouchEvents ? '' : 'mouseleave';
    var pointerCancel = hasPointerEvents ? 'pointercancel' : 'touchcancel';

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
        return toNodes(element).some(function (element) { return voidElements[element.tagName.toLowerCase()]; });
    }

    function isVisible(element) {
        return toNodes(element).some(function (element) { return element.offsetWidth || element.offsetHeight || element.getClientRects().length; });
    }

    var selInput = 'input,select,textarea,button';
    function isInput(element) {
        return toNodes(element).some(function (element) { return matches(element, selInput); });
    }

    function parent(element) {
        element = toNode(element);
        return element && isElement(element.parentNode) && element.parentNode;
    }

    function filter(element, selector) {
        return toNodes(element).filter(function (element) { return matches(element, selector); });
    }

    var elProto = inBrowser ? Element.prototype : {};
    var matchesFn = elProto.matches || elProto.webkitMatchesSelector || elProto.msMatchesSelector || noop;

    function matches(element, selector) {
        return toNodes(element).some(function (element) { return matchesFn.call(element, selector); });
    }

    var closestFn = elProto.closest || function (selector) {
        var ancestor = this;

        do {

            if (matches(ancestor, selector)) {
                return ancestor;
            }

        } while ((ancestor = parent(ancestor)));
    };

    function closest(element, selector) {

        if (startsWith(selector, '>')) {
            selector = selector.slice(1);
        }

        return isElement(element)
            ? closestFn.call(element, selector)
            : toNodes(element).map(function (element) { return closest(element, selector); }).filter(Boolean);
    }

    function within(element, selector) {
        return !isString(selector)
            ? element === selector || (isDocument(selector)
                ? selector.documentElement
                : toNode(selector)).contains(toNode(element)) // IE 11 document does not implement contains
            : matches(element, selector) || !!closest(element, selector);
    }

    function parents(element, selector) {
        var elements = [];

        while ((element = parent(element))) {
            if (!selector || matches(element, selector)) {
                elements.push(element);
            }
        }

        return elements;
    }

    function children(element, selector) {
        element = toNode(element);
        var children = element ? toNodes(element.children) : [];
        return selector ? filter(children, selector) : children;
    }

    function index(element, ref) {
        return ref
            ? toNodes(element).indexOf(toNode(ref))
            : children(parent(element)).indexOf(element);
    }

    function query(selector, context) {
        return toNode(selector) || find(selector, getContext(selector, context));
    }

    function queryAll(selector, context) {
        var nodes = toNodes(selector);
        return nodes.length && nodes || findAll(selector, getContext(selector, context));
    }

    function getContext(selector, context) {
        if ( context === void 0 ) context = document;

        return isString(selector) && isContextSelector(selector) || isDocument(context)
            ? context
            : context.ownerDocument;
    }

    function find(selector, context) {
        return toNode(_query(selector, context, 'querySelector'));
    }

    function findAll(selector, context) {
        return toNodes(_query(selector, context, 'querySelectorAll'));
    }

    function _query(selector, context, queryFn) {
        if ( context === void 0 ) context = document;


        if (!selector || !isString(selector)) {
            return null;
        }

        selector = selector.replace(contextSanitizeRe, '$1 *');

        if (isContextSelector(selector)) {

            selector = splitSelector(selector).map(function (selector, i) {

                var ctx = context;

                if (selector[0] === '!') {

                    var selectors = selector.substr(1).trim().split(' ');
                    ctx = closest(parent(context), selectors[0]);
                    selector = selectors.slice(1).join(' ').trim();

                }

                if (selector[0] === '-') {

                    var selectors$1 = selector.substr(1).trim().split(' ');
                    var prev = (ctx || context).previousElementSibling;
                    ctx = matches(prev, selector.substr(1)) ? prev : null;
                    selector = selectors$1.slice(1).join(' ');

                }

                if (!ctx) {
                    return null;
                }

                return ((domPath(ctx)) + " " + selector);

            }).filter(Boolean).join(',');

            context = document;

        }

        try {

            return context[queryFn](selector);

        } catch (e) {

            return null;

        }

    }

    var contextSelectorRe = /(^|[^\\],)\s*[!>+~-]/;
    var contextSanitizeRe = /([!>+~-])(?=\s+[!>+~-]|\s*$)/g;

    var isContextSelector = memoize(function (selector) { return selector.match(contextSelectorRe); });

    var selectorRe = /.*?[^\\](?:,|$)/g;

    var splitSelector = memoize(function (selector) { return selector.match(selectorRe).map(function (selector) { return selector.replace(/,$/, '').trim(); }
        ); }
    );

    function domPath(element) {
        var names = [];
        while (element.parentNode) {
            if (element.id) {
                names.unshift(("#" + (escape(element.id))));
                break;
            } else {
                var tagName = element.tagName;
                if (tagName !== 'HTML') {
                    tagName += ":nth-child(" + (index(element) + 1) + ")";
                }
                names.unshift(tagName);
                element = element.parentNode;
            }
        }
        return names.join(' > ');
    }

    var escapeFn = inBrowser && window.CSS && CSS.escape || function (css) { return css.replace(/([^\x7f-\uFFFF\w-])/g, function (match) { return ("\\" + match); }); };
    function escape(css) {
        return isString(css) ? escapeFn.call(null, css) : '';
    }

    function on() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];


        var ref = getArgs(args);
        var targets = ref[0];
        var type = ref[1];
        var selector = ref[2];
        var listener = ref[3];
        var useCapture = ref[4];

        targets = toEventTargets(targets);

        if (listener.length > 1) {
            listener = detail(listener);
        }

        if (useCapture && useCapture.self) {
            listener = selfFilter(listener);
        }

        if (selector) {
            listener = delegate(selector, listener);
        }

        useCapture = useCaptureFilter(useCapture);

        type.split(' ').forEach(function (type) { return targets.forEach(function (target) { return target.addEventListener(type, listener, useCapture); }
            ); }
        );
        return function () { return off(targets, type, listener, useCapture); };
    }

    function off(targets, type, listener, useCapture) {
        if ( useCapture === void 0 ) useCapture = false;

        useCapture = useCaptureFilter(useCapture);
        targets = toEventTargets(targets);
        type.split(' ').forEach(function (type) { return targets.forEach(function (target) { return target.removeEventListener(type, listener, useCapture); }
            ); }
        );
    }

    function once() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];


        var ref = getArgs(args);
        var element = ref[0];
        var type = ref[1];
        var selector = ref[2];
        var listener = ref[3];
        var useCapture = ref[4];
        var condition = ref[5];
        var off = on(element, type, selector, function (e) {
            var result = !condition || condition(e);
            if (result) {
                off();
                listener(e, result);
            }
        }, useCapture);

        return off;
    }

    function trigger(targets, event, detail) {
        return toEventTargets(targets).reduce(function (notCanceled, target) { return notCanceled && target.dispatchEvent(createEvent(event, true, true, detail)); }
            , true);
    }

    function createEvent(e, bubbles, cancelable, detail) {
        if ( bubbles === void 0 ) bubbles = true;
        if ( cancelable === void 0 ) cancelable = false;

        if (isString(e)) {
            var event = document.createEvent('CustomEvent'); // IE 11
            event.initCustomEvent(e, bubbles, cancelable, detail);
            e = event;
        }

        return e;
    }

    function getArgs(args) {
        if (isFunction(args[2])) {
            args.splice(2, 0, false);
        }
        return args;
    }

    function delegate(selector, listener) {
        var this$1 = this;

        return function (e) {

            var current = selector[0] === '>'
                ? findAll(selector, e.currentTarget).reverse().filter(function (element) { return within(e.target, element); })[0]
                : closest(e.target, selector);

            if (current) {
                e.current = current;
                listener.call(this$1, e);
            }

        };
    }

    function detail(listener) {
        return function (e) { return isArray(e.detail) ? listener.apply(void 0, [ e ].concat( e.detail )) : listener(e); };
    }

    function selfFilter(listener) {
        return function (e) {
            if (e.target === e.currentTarget || e.target === e.current) {
                return listener.call(null, e);
            }
        };
    }

    function useCaptureFilter(options) {
        return options && isIE && !isBoolean(options)
            ? !!options.capture
            : options;
    }

    function isEventTarget(target) {
        return target && 'addEventListener' in target;
    }

    function toEventTarget(target) {
        return isEventTarget(target) ? target : toNode(target);
    }

    function toEventTargets(target) {
        return isArray(target)
                ? target.map(toEventTarget).filter(Boolean)
                : isString(target)
                    ? findAll(target)
                    : isEventTarget(target)
                        ? [target]
                        : toNodes(target);
    }

    function isTouch(e) {
        return e.pointerType === 'touch' || !!e.touches;
    }

    function getEventPos(e) {
        var touches = e.touches;
        var changedTouches = e.changedTouches;
        var ref = touches && touches[0] || changedTouches && changedTouches[0] || e;
        var x = ref.clientX;
        var y = ref.clientY;

        return {x: x, y: y};
    }

    /* global setImmediate */

    var Promise = inBrowser && window.Promise || PromiseFn;

    var Deferred = function() {
        var this$1 = this;

        this.promise = new Promise(function (resolve, reject) {
            this$1.reject = reject;
            this$1.resolve = resolve;
        });
    };

    /**
     * Promises/A+ polyfill v1.1.4 (https://github.com/bramstein/promis)
     */

    var RESOLVED = 0;
    var REJECTED = 1;
    var PENDING = 2;

    var async = inBrowser && window.setImmediate || setTimeout;

    function PromiseFn(executor) {

        this.state = PENDING;
        this.value = undefined;
        this.deferred = [];

        var promise = this;

        try {
            executor(
                function (x) {
                    promise.resolve(x);
                },
                function (r) {
                    promise.reject(r);
                }
            );
        } catch (e) {
            promise.reject(e);
        }
    }

    PromiseFn.reject = function (r) {
        return new PromiseFn(function (resolve, reject) {
            reject(r);
        });
    };

    PromiseFn.resolve = function (x) {
        return new PromiseFn(function (resolve, reject) {
            resolve(x);
        });
    };

    PromiseFn.all = function all(iterable) {
        return new PromiseFn(function (resolve, reject) {
            var result = [];
            var count = 0;

            if (iterable.length === 0) {
                resolve(result);
            }

            function resolver(i) {
                return function (x) {
                    result[i] = x;
                    count += 1;

                    if (count === iterable.length) {
                        resolve(result);
                    }
                };
            }

            for (var i = 0; i < iterable.length; i += 1) {
                PromiseFn.resolve(iterable[i]).then(resolver(i), reject);
            }
        });
    };

    PromiseFn.race = function race(iterable) {
        return new PromiseFn(function (resolve, reject) {
            for (var i = 0; i < iterable.length; i += 1) {
                PromiseFn.resolve(iterable[i]).then(resolve, reject);
            }
        });
    };

    var p = PromiseFn.prototype;

    p.resolve = function resolve(x) {
        var promise = this;

        if (promise.state === PENDING) {
            if (x === promise) {
                throw new TypeError('Promise settled with itself.');
            }

            var called = false;

            try {
                var then = x && x.then;

                if (x !== null && isObject(x) && isFunction(then)) {
                    then.call(
                        x,
                        function (x) {
                            if (!called) {
                                promise.resolve(x);
                            }
                            called = true;
                        },
                        function (r) {
                            if (!called) {
                                promise.reject(r);
                            }
                            called = true;
                        }
                    );
                    return;
                }
            } catch (e) {
                if (!called) {
                    promise.reject(e);
                }
                return;
            }

            promise.state = RESOLVED;
            promise.value = x;
            promise.notify();
        }
    };

    p.reject = function reject(reason) {
        var promise = this;

        if (promise.state === PENDING) {
            if (reason === promise) {
                throw new TypeError('Promise settled with itself.');
            }

            promise.state = REJECTED;
            promise.value = reason;
            promise.notify();
        }
    };

    p.notify = function notify() {
        var this$1 = this;

        async(function () {
            if (this$1.state !== PENDING) {
                while (this$1.deferred.length) {
                    var ref = this$1.deferred.shift();
                    var onResolved = ref[0];
                    var onRejected = ref[1];
                    var resolve = ref[2];
                    var reject = ref[3];

                    try {
                        if (this$1.state === RESOLVED) {
                            if (isFunction(onResolved)) {
                                resolve(onResolved.call(undefined, this$1.value));
                            } else {
                                resolve(this$1.value);
                            }
                        } else if (this$1.state === REJECTED) {
                            if (isFunction(onRejected)) {
                                resolve(onRejected.call(undefined, this$1.value));
                            } else {
                                reject(this$1.value);
                            }
                        }
                    } catch (e) {
                        reject(e);
                    }
                }
            }
        });
    };

    p.then = function then(onResolved, onRejected) {
        var this$1 = this;

        return new PromiseFn(function (resolve, reject) {
            this$1.deferred.push([onResolved, onRejected, resolve, reject]);
            this$1.notify();
        });
    };

    p.catch = function (onRejected) {
        return this.then(undefined, onRejected);
    };

    function ajax(url, options) {

        var env = assign({
            data: null,
            method: 'GET',
            headers: {},
            xhr: new XMLHttpRequest(),
            beforeSend: noop,
            responseType: ''
        }, options);

        return Promise.resolve()
            .then(function () { return env.beforeSend(env); })
            .then(function () { return send(url, env); });
    }

    function send(url, env) {
        return new Promise(function (resolve, reject) {
            var xhr = env.xhr;

            for (var prop in env) {
                if (prop in xhr) {
                    try {

                        xhr[prop] = env[prop];

                    } catch (e) {}
                }
            }

            xhr.open(env.method.toUpperCase(), url);

            for (var header in env.headers) {
                xhr.setRequestHeader(header, env.headers[header]);
            }

            on(xhr, 'load', function () {

                if (xhr.status === 0 || xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {

                    // IE 11 does not support responseType 'json'
                    if (env.responseType === 'json' && isString(xhr.response)) {
                        xhr = assign(copyXhr(xhr), {response: JSON.parse(xhr.response)});
                    }

                    resolve(xhr);

                } else {
                    reject(assign(Error(xhr.statusText), {
                        xhr: xhr,
                        status: xhr.status
                    }));
                }

            });

            on(xhr, 'error', function () { return reject(assign(Error('Network Error'), {xhr: xhr})); });
            on(xhr, 'timeout', function () { return reject(assign(Error('Network Timeout'), {xhr: xhr})); });

            xhr.send(env.data);
        });
    }

    function getImage(src, srcset, sizes) {

        return new Promise(function (resolve, reject) {
            var img = new Image();

            img.onerror = function (e) { return reject(e); };
            img.onload = function () { return resolve(img); };

            sizes && (img.sizes = sizes);
            srcset && (img.srcset = srcset);
            img.src = src;
        });

    }

    function copyXhr(source) {
        var target = {};
        for (var key in source) {
            target[key] = source[key];
        }
        return target;
    }

    function ready(fn) {

        if (document.readyState !== 'loading') {
            fn();
            return;
        }

        var unbind = on(document, 'DOMContentLoaded', function () {
            unbind();
            fn();
        });
    }

    function empty(element) {
        element = $(element);
        element.innerHTML = '';
        return element;
    }

    function html(parent, html) {
        parent = $(parent);
        return isUndefined(html)
            ? parent.innerHTML
            : append(parent.hasChildNodes() ? empty(parent) : parent, html);
    }

    function prepend(parent, element) {

        parent = $(parent);

        if (!parent.hasChildNodes()) {
            return append(parent, element);
        } else {
            return insertNodes(element, function (element) { return parent.insertBefore(element, parent.firstChild); });
        }
    }

    function append(parent, element) {
        parent = $(parent);
        return insertNodes(element, function (element) { return parent.appendChild(element); });
    }

    function before(ref, element) {
        ref = $(ref);
        return insertNodes(element, function (element) { return ref.parentNode.insertBefore(element, ref); });
    }

    function after(ref, element) {
        ref = $(ref);
        return insertNodes(element, function (element) { return ref.nextSibling
            ? before(ref.nextSibling, element)
            : append(ref.parentNode, element); }
        );
    }

    function insertNodes(element, fn) {
        element = isString(element) ? fragment(element) : element;
        return element
            ? 'length' in element
                ? toNodes(element).map(fn)
                : fn(element)
            : null;
    }

    function remove(element) {
        toNodes(element).forEach(function (element) { return element.parentNode && element.parentNode.removeChild(element); });
    }

    function wrapAll(element, structure) {

        structure = toNode(before(element, structure));

        while (structure.firstChild) {
            structure = structure.firstChild;
        }

        append(structure, element);

        return structure;
    }

    function wrapInner(element, structure) {
        return toNodes(toNodes(element).map(function (element) { return element.hasChildNodes ? wrapAll(toNodes(element.childNodes), structure) : append(element, structure); }
        ));
    }

    function unwrap(element) {
        toNodes(element)
            .map(parent)
            .filter(function (value, index, self) { return self.indexOf(value) === index; })
            .forEach(function (parent) {
                before(parent, parent.childNodes);
                remove(parent);
            });
    }

    var fragmentRe = /^\s*<(\w+|!)[^>]*>/;
    var singleTagRe = /^<(\w+)\s*\/?>(?:<\/\1>)?$/;

    function fragment(html) {

        var matches = singleTagRe.exec(html);
        if (matches) {
            return document.createElement(matches[1]);
        }

        var container = document.createElement('div');
        if (fragmentRe.test(html)) {
            container.insertAdjacentHTML('beforeend', html.trim());
        } else {
            container.textContent = html;
        }

        return container.childNodes.length > 1 ? toNodes(container.childNodes) : container.firstChild;

    }

    function apply(node, fn) {

        if (!isElement(node)) {
            return;
        }

        fn(node);
        node = node.firstElementChild;
        while (node) {
            var next = node.nextElementSibling;
            apply(node, fn);
            node = next;
        }
    }

    function $(selector, context) {
        return !isString(selector)
            ? toNode(selector)
            : isHtml(selector)
                ? toNode(fragment(selector))
                : find(selector, context);
    }

    function $$(selector, context) {
        return !isString(selector)
            ? toNodes(selector)
            : isHtml(selector)
                ? toNodes(fragment(selector))
                : findAll(selector, context);
    }

    function isHtml(str) {
        return str[0] === '<' || str.match(/^\s*</);
    }

    function addClass(element) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        apply$1(element, args, 'add');
    }

    function removeClass(element) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        apply$1(element, args, 'remove');
    }

    function removeClasses(element, cls) {
        attr(element, 'class', function (value) { return (value || '').replace(new RegExp(("\\b" + cls + "\\b"), 'g'), ''); });
    }

    function replaceClass(element) {
        var args = [], len = arguments.length - 1;
        while ( len-- > 0 ) args[ len ] = arguments[ len + 1 ];

        args[0] && removeClass(element, args[0]);
        args[1] && addClass(element, args[1]);
    }

    function hasClass(element, cls) {
        var assign;

        (assign = getClasses(cls), cls = assign[0]);
        var nodes = toNodes(element);
        for (var n = 0; n < nodes.length; n++) {
            if (cls && nodes[n].classList.contains(cls)) {
                return true;
            }
        }
        return false;
    }

    function toggleClass(element, cls, force) {

        cls = getClasses(cls);

        var nodes = toNodes(element);
        for (var n = 0; n < nodes.length; n++) {
            var list = nodes[n].classList;
            for (var i = 0; i < cls.length; i++) {
                if (isUndefined(force)) {
                    list.toggle(cls[i]);
                } else if (supports.Force) {
                    list.toggle(cls[i], !!force);
                } else {
                    list[force ? 'add' : 'remove'](cls[i]);
                }
            }
        }
    }

    function apply$1(element, args, fn) {
        var ref;


        args = args.reduce(function (args, arg) { return args.concat(getClasses(arg)); }, []);

        var nodes = toNodes(element);
        var loop = function ( n ) {
            if (supports.Multiple) {
                (ref = nodes[n].classList)[fn].apply(ref, args);
            } else {
                args.forEach(function (cls) { return nodes[n].classList[fn](cls); });
            }
        };

        for (var n = 0; n < nodes.length; n++) loop( n );
    }

    function getClasses(str) {
        str = String(str);
        return (~str.indexOf(' ') ? str.split(' ') : [str]).filter(Boolean);
    }

    // IE 11
    var supports = {

        get Multiple() {
            return this.get('Multiple');
        },

        get Force() {
            return this.get('Force');
        },

        get: function(key) {

            var ref = document.createElement('_');
            var classList = ref.classList;
            classList.add('a', 'b');
            classList.toggle('c', false);
            supports = {
                Multiple: classList.contains('b'),
                Force: !classList.contains('c')
            };

            return supports[key];
        }

    };

    var cssNumber = {
        'animation-iteration-count': true,
        'column-count': true,
        'fill-opacity': true,
        'flex-grow': true,
        'flex-shrink': true,
        'font-weight': true,
        'line-height': true,
        'opacity': true,
        'order': true,
        'orphans': true,
        'stroke-dasharray': true,
        'stroke-dashoffset': true,
        'widows': true,
        'z-index': true,
        'zoom': true
    };

    function css(element, property, value, priority) {
        if ( priority === void 0 ) priority = '';


        return toNodes(element).map(function (element) {

            if (isString(property)) {

                property = propName(property);

                if (isUndefined(value)) {
                    return getStyle(element, property);
                } else if (!value && !isNumber(value)) {
                    element.style.removeProperty(property);
                } else {
                    element.style.setProperty(property, isNumeric(value) && !cssNumber[property] ? (value + "px") : value, priority);
                }

            } else if (isArray(property)) {

                var styles = getStyles(element);

                return property.reduce(function (props, property) {
                    props[property] = styles[propName(property)];
                    return props;
                }, {});

            } else if (isObject(property)) {
                priority = value;
                each(property, function (value, property) { return css(element, property, value, priority); });
            }

            return element;

        })[0];

    }

    function getStyles(element, pseudoElt) {
        return toWindow(element).getComputedStyle(element, pseudoElt);
    }

    function getStyle(element, property, pseudoElt) {
        return getStyles(element, pseudoElt)[property];
    }

    var parseCssVar = memoize(function (name) {
        /* usage in css: .uk-name:before { content:"xyz" } */

        var element = append(document.documentElement, document.createElement('div'));

        addClass(element, ("uk-" + name));

        name = getStyle(element, 'content', ':before').replace(/^["'](.*)["']$/, '$1');

        remove(element);

        return name;
    });

    function getCssVar(name) {
        return !isIE
            ? getStyles(document.documentElement).getPropertyValue(("--uk-" + name))
            : parseCssVar(name);
    }

    // https://drafts.csswg.org/cssom/#dom-cssstyledeclaration-setproperty
    var propName = memoize(function (name) { return vendorPropName(name); });

    var cssPrefixes = ['webkit', 'moz', 'ms'];

    function vendorPropName(name) {

        name = hyphenate(name);

        var ref = document.documentElement;
        var style = ref.style;

        if (name in style) {
            return name;
        }

        var i = cssPrefixes.length, prefixedName;

        while (i--) {
            prefixedName = "-" + (cssPrefixes[i]) + "-" + name;
            if (prefixedName in style) {
                return prefixedName;
            }
        }
    }

    function transition(element, props, duration, timing) {
        if ( duration === void 0 ) duration = 400;
        if ( timing === void 0 ) timing = 'linear';


        return Promise.all(toNodes(element).map(function (element) { return new Promise(function (resolve, reject) {

                for (var name in props) {
                    var value = css(element, name);
                    if (value === '') {
                        css(element, name, value);
                    }
                }

                var timer = setTimeout(function () { return trigger(element, 'transitionend'); }, duration);

                once(element, 'transitionend transitioncanceled', function (ref) {
                    var type = ref.type;

                    clearTimeout(timer);
                    removeClass(element, 'uk-transition');
                    css(element, {
                        transitionProperty: '',
                        transitionDuration: '',
                        transitionTimingFunction: ''
                    });
                    type === 'transitioncanceled' ? reject() : resolve(element);
                }, {self: true});

                addClass(element, 'uk-transition');
                css(element, assign({
                    transitionProperty: Object.keys(props).map(propName).join(','),
                    transitionDuration: (duration + "ms"),
                    transitionTimingFunction: timing
                }, props));

            }); }
        ));

    }

    var Transition = {

        start: transition,

        stop: function(element) {
            trigger(element, 'transitionend');
            return Promise.resolve();
        },

        cancel: function(element) {
            trigger(element, 'transitioncanceled');
        },

        inProgress: function(element) {
            return hasClass(element, 'uk-transition');
        }

    };

    var animationPrefix = 'uk-animation-';

    function animate(element, animation, duration, origin, out) {
        if ( duration === void 0 ) duration = 200;


        return Promise.all(toNodes(element).map(function (element) { return new Promise(function (resolve, reject) {

                trigger(element, 'animationcanceled');
                var timer = setTimeout(function () { return trigger(element, 'animationend'); }, duration);

                once(element, 'animationend animationcanceled', function (ref) {
                    var type = ref.type;


                    clearTimeout(timer);

                    type === 'animationcanceled' ? reject() : resolve(element);

                    css(element, 'animationDuration', '');
                    removeClasses(element, (animationPrefix + "\\S*"));

                }, {self: true});

                css(element, 'animationDuration', (duration + "ms"));
                addClass(element, animation, animationPrefix + (out ? 'leave' : 'enter'));

                if (startsWith(animation, animationPrefix)) {
                    origin && addClass(element, ("uk-transform-origin-" + origin));
                    out && addClass(element, (animationPrefix + "reverse"));
                }

            }); }
        ));

    }

    var inProgress = new RegExp((animationPrefix + "(enter|leave)"));
    var Animation = {

        in: animate,

        out: function(element, animation, duration, origin) {
            return animate(element, animation, duration, origin, true);
        },

        inProgress: function(element) {
            return inProgress.test(attr(element, 'class'));
        },

        cancel: function(element) {
            trigger(element, 'animationcanceled');
        }

    };

    var dirs = {
        width: ['left', 'right'],
        height: ['top', 'bottom']
    };

    function dimensions(element) {

        var rect = isElement(element)
            ? toNode(element).getBoundingClientRect()
            : {height: height(element), width: width(element), top: 0, left: 0};

        return {
            height: rect.height,
            width: rect.width,
            top: rect.top,
            left: rect.left,
            bottom: rect.top + rect.height,
            right: rect.left + rect.width
        };
    }

    function offset(element, coordinates) {

        var currentOffset = dimensions(element);
        var ref = toWindow(element);
        var pageYOffset = ref.pageYOffset;
        var pageXOffset = ref.pageXOffset;
        var offsetBy = {height: pageYOffset, width: pageXOffset};

        for (var dir in dirs) {
            for (var i in dirs[dir]) {
                currentOffset[dirs[dir][i]] += offsetBy[dir];
            }
        }

        if (!coordinates) {
            return currentOffset;
        }

        var pos = css(element, 'position');

        each(css(element, ['left', 'top']), function (value, prop) { return css(element, prop, coordinates[prop]
                - currentOffset[prop]
                + toFloat(pos === 'absolute' && value === 'auto'
                    ? position(element)[prop]
                    : value)
            ); }
        );
    }

    function position(element) {

        var ref = offset(element);
        var top = ref.top;
        var left = ref.left;

        var ref$1 = toNode(element);
        var ref$1_ownerDocument = ref$1.ownerDocument;
        var body = ref$1_ownerDocument.body;
        var documentElement = ref$1_ownerDocument.documentElement;
        var offsetParent = ref$1.offsetParent;
        var parent = offsetParent || documentElement;

        while (parent && (parent === body || parent === documentElement) && css(parent, 'position') === 'static') {
            parent = parent.parentNode;
        }

        if (isElement(parent)) {
            var parentOffset = offset(parent);
            top -= parentOffset.top + toFloat(css(parent, 'borderTopWidth'));
            left -= parentOffset.left + toFloat(css(parent, 'borderLeftWidth'));
        }

        return {
            top: top - toFloat(css(element, 'marginTop')),
            left: left - toFloat(css(element, 'marginLeft'))
        };
    }

    function offsetPosition(element) {
        var offset = [0, 0];

        element = toNode(element);

        do {

            offset[0] += element.offsetTop;
            offset[1] += element.offsetLeft;

            if (css(element, 'position') === 'fixed') {
                var win = toWindow(element);
                offset[0] += win.pageYOffset;
                offset[1] += win.pageXOffset;
                return offset;
            }

        } while ((element = element.offsetParent));

        return offset;
    }

    var height = dimension('height');
    var width = dimension('width');

    function dimension(prop) {
        var propName = ucfirst(prop);
        return function (element, value) {

            if (isUndefined(value)) {

                if (isWindow(element)) {
                    return element[("inner" + propName)];
                }

                if (isDocument(element)) {
                    var doc = element.documentElement;
                    return Math.max(doc[("offset" + propName)], doc[("scroll" + propName)]);
                }

                element = toNode(element);

                value = css(element, prop);
                value = value === 'auto' ? element[("offset" + propName)] : toFloat(value) || 0;

                return value - boxModelAdjust(element, prop);

            } else {

                return css(element, prop, !value && value !== 0
                    ? ''
                    : +value + boxModelAdjust(element, prop) + 'px'
                );

            }

        };
    }

    function boxModelAdjust(element, prop, sizing) {
        if ( sizing === void 0 ) sizing = 'border-box';

        return css(element, 'boxSizing') === sizing
            ? dirs[prop].map(ucfirst).reduce(function (value, prop) { return value
                + toFloat(css(element, ("padding" + prop)))
                + toFloat(css(element, ("border" + prop + "Width"))); }
                , 0)
            : 0;
    }

    function flipPosition(pos) {
        for (var dir in dirs) {
            for (var i in dirs[dir]) {
                if (dirs[dir][i] === pos) {
                    return dirs[dir][1 - i];
                }
            }
        }
        return pos;
    }

    function toPx(value, property, element) {
        if ( property === void 0 ) property = 'width';
        if ( element === void 0 ) element = window;

        return isNumeric(value)
            ? +value
            : endsWith(value, 'vh')
                ? percent(height(toWindow(element)), value)
                : endsWith(value, 'vw')
                    ? percent(width(toWindow(element)), value)
                    : endsWith(value, '%')
                        ? percent(dimensions(element)[property], value)
                        : toFloat(value);
    }

    function percent(base, value) {
        return base * toFloat(value) / 100;
    }

    /*
        Based on:
        Copyright (c) 2016 Wilson Page wilsonpage@me.com
        https://github.com/wilsonpage/fastdom
    */

    var fastdom = {

        reads: [],
        writes: [],

        read: function(task) {
            this.reads.push(task);
            scheduleFlush();
            return task;
        },

        write: function(task) {
            this.writes.push(task);
            scheduleFlush();
            return task;
        },

        clear: function(task) {
            remove$1(this.reads, task);
            remove$1(this.writes, task);
        },

        flush: flush

    };

    function flush(recursion) {
        if ( recursion === void 0 ) recursion = 1;

        runTasks(fastdom.reads);
        runTasks(fastdom.writes.splice(0));

        fastdom.scheduled = false;

        if (fastdom.reads.length || fastdom.writes.length) {
            scheduleFlush(recursion + 1);
        }
    }

    var RECURSION_LIMIT = 4;
    function scheduleFlush(recursion) {

        if (fastdom.scheduled) {
            return;
        }

        fastdom.scheduled = true;
        if (recursion && recursion < RECURSION_LIMIT) {
            Promise.resolve().then(function () { return flush(recursion); });
        } else {
            requestAnimationFrame(function () { return flush(); });
        }

    }

    function runTasks(tasks) {
        var task;
        while ((task = tasks.shift())) {
            try {
                task();
            } catch (e) {
                console.error(e);
            }
        }
    }

    function remove$1(array, item) {
        var index = array.indexOf(item);
        return ~index && array.splice(index, 1);
    }

    function MouseTracker() {}

    MouseTracker.prototype = {

        positions: [],

        init: function() {
            var this$1 = this;


            this.positions = [];

            var position;
            this.unbind = on(document, 'mousemove', function (e) { return position = getEventPos(e); });
            this.interval = setInterval(function () {

                if (!position) {
                    return;
                }

                this$1.positions.push(position);

                if (this$1.positions.length > 5) {
                    this$1.positions.shift();
                }
            }, 50);

        },

        cancel: function() {
            this.unbind && this.unbind();
            this.interval && clearInterval(this.interval);
        },

        movesTo: function(target) {

            if (this.positions.length < 2) {
                return false;
            }

            var p = target.getBoundingClientRect();
            var left = p.left;
            var right = p.right;
            var top = p.top;
            var bottom = p.bottom;

            var ref = this.positions;
            var prevPosition = ref[0];
            var position = last(this.positions);
            var path = [prevPosition, position];

            if (pointInRect(position, p)) {
                return false;
            }

            var diagonals = [[{x: left, y: top}, {x: right, y: bottom}], [{x: left, y: bottom}, {x: right, y: top}]];

            return diagonals.some(function (diagonal) {
                var intersection = intersect(path, diagonal);
                return intersection && pointInRect(intersection, p);
            });
        }

    };

    // Inspired by http://paulbourke.net/geometry/pointlineplane/
    function intersect(ref, ref$1) {
        var ref_0 = ref[0];
        var x1 = ref_0.x;
        var y1 = ref_0.y;
        var ref_1 = ref[1];
        var x2 = ref_1.x;
        var y2 = ref_1.y;
        var ref$1_0 = ref$1[0];
        var x3 = ref$1_0.x;
        var y3 = ref$1_0.y;
        var ref$1_1 = ref$1[1];
        var x4 = ref$1_1.x;
        var y4 = ref$1_1.y;


        var denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);

        // Lines are parallel
        if (denominator === 0) {
            return false;
        }

        var ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;

        if (ua < 0) {
            return false;
        }

        // Return an object with the x and y coordinates of the intersection
        return {x: x1 + ua * (x2 - x1), y: y1 + ua * (y2 - y1)};
    }

    var strats = {};

    strats.events =
    strats.created =
    strats.beforeConnect =
    strats.connected =
    strats.beforeDisconnect =
    strats.disconnected =
    strats.destroy = concatStrat;

    // args strategy
    strats.args = function (parentVal, childVal) {
        return childVal !== false && concatStrat(childVal || parentVal);
    };

    // update strategy
    strats.update = function (parentVal, childVal) {
        return sortBy(concatStrat(parentVal, isFunction(childVal) ? {read: childVal} : childVal), 'order');
    };

    // property strategy
    strats.props = function (parentVal, childVal) {

        if (isArray(childVal)) {
            childVal = childVal.reduce(function (value, key) {
                value[key] = String;
                return value;
            }, {});
        }

        return strats.methods(parentVal, childVal);
    };

    // extend strategy
    strats.computed =
    strats.methods = function (parentVal, childVal) {
        return childVal
            ? parentVal
                ? assign({}, parentVal, childVal)
                : childVal
            : parentVal;
    };

    // data strategy
    strats.data = function (parentVal, childVal, vm) {

        if (!vm) {

            if (!childVal) {
                return parentVal;
            }

            if (!parentVal) {
                return childVal;
            }

            return function (vm) {
                return mergeFnData(parentVal, childVal, vm);
            };

        }

        return mergeFnData(parentVal, childVal, vm);
    };

    function mergeFnData(parentVal, childVal, vm) {
        return strats.computed(
            isFunction(parentVal)
                ? parentVal.call(vm, vm)
                : parentVal,
            isFunction(childVal)
                ? childVal.call(vm, vm)
                : childVal
        );
    }

    // concat strategy
    function concatStrat(parentVal, childVal) {

        parentVal = parentVal && !isArray(parentVal) ? [parentVal] : parentVal;

        return childVal
            ? parentVal
                ? parentVal.concat(childVal)
                : isArray(childVal)
                    ? childVal
                    : [childVal]
            : parentVal;
    }

    // default strategy
    function defaultStrat(parentVal, childVal) {
        return isUndefined(childVal) ? parentVal : childVal;
    }

    function mergeOptions(parent, child, vm) {

        var options = {};

        if (isFunction(child)) {
            child = child.options;
        }

        if (child.extends) {
            parent = mergeOptions(parent, child.extends, vm);
        }

        if (child.mixins) {
            for (var i = 0, l = child.mixins.length; i < l; i++) {
                parent = mergeOptions(parent, child.mixins[i], vm);
            }
        }

        for (var key in parent) {
            mergeKey(key);
        }

        for (var key$1 in child) {
            if (!hasOwn(parent, key$1)) {
                mergeKey(key$1);
            }
        }

        function mergeKey(key) {
            options[key] = (strats[key] || defaultStrat)(parent[key], child[key], vm);
        }

        return options;
    }

    function parseOptions(options, args) {
        var obj;

        if ( args === void 0 ) args = [];

        try {

            return !options
                ? {}
                : startsWith(options, '{')
                    ? JSON.parse(options)
                    : args.length && !includes(options, ':')
                        ? (( obj = {}, obj[args[0]] = options, obj ))
                        : options.split(';').reduce(function (options, option) {
                            var ref = option.split(/:(.*)/);
                            var key = ref[0];
                            var value = ref[1];
                            if (key && !isUndefined(value)) {
                                options[key.trim()] = value.trim();
                            }
                            return options;
                        }, {});

        } catch (e) {
            return {};
        }

    }

    function play(el) {

        if (isIFrame(el)) {
            call(el, {func: 'playVideo', method: 'play'});
        }

        if (isHTML5(el)) {
            try {
                el.play().catch(noop);
            } catch (e) {}
        }

    }

    function pause(el) {

        if (isIFrame(el)) {
            call(el, {func: 'pauseVideo', method: 'pause'});
        }

        if (isHTML5(el)) {
            el.pause();
        }

    }

    function mute(el) {

        if (isIFrame(el)) {
            call(el, {func: 'mute', method: 'setVolume', value: 0});
        }

        if (isHTML5(el)) {
            el.muted = true;
        }

    }

    function isHTML5(el) {
        return el && el.tagName === 'VIDEO';
    }

    function isIFrame(el) {
        return el && el.tagName === 'IFRAME' && (isYoutube(el) || isVimeo(el));
    }

    function isYoutube(el) {
        return !!el.src.match(/\/\/.*?youtube(-nocookie)?\.[a-z]+\/(watch\?v=[^&\s]+|embed)|youtu\.be\/.*/);
    }

    function isVimeo(el) {
        return !!el.src.match(/vimeo\.com\/video\/.*/);
    }

    function call(el, cmd) {
        enableApi(el).then(function () { return post(el, cmd); });
    }

    function post(el, cmd) {
        try {
            el.contentWindow.postMessage(JSON.stringify(assign({event: 'command'}, cmd)), '*');
        } catch (e) {}
    }

    var stateKey = '_ukPlayer';
    var counter = 0;
    function enableApi(el) {

        if (el[stateKey]) {
            return el[stateKey];
        }

        var youtube = isYoutube(el);
        var vimeo = isVimeo(el);

        var id = ++counter;
        var poller;

        return el[stateKey] = new Promise(function (resolve) {

            youtube && once(el, 'load', function () {
                var listener = function () { return post(el, {event: 'listening', id: id}); };
                poller = setInterval(listener, 100);
                listener();
            });

            once(window, 'message', resolve, false, function (ref) {
                var data = ref.data;


                try {
                    data = JSON.parse(data);
                    return data && (youtube && data.id === id && data.event === 'onReady' || vimeo && Number(data.player_id) === id);
                } catch (e) {}

            });

            el.src = "" + (el.src) + (includes(el.src, '?') ? '&' : '?') + (youtube ? 'enablejsapi=1' : ("api=1&player_id=" + id));

        }).then(function () { return clearInterval(poller); });
    }

    function isInView(element, offsetTop, offsetLeft) {
        if ( offsetTop === void 0 ) offsetTop = 0;
        if ( offsetLeft === void 0 ) offsetLeft = 0;


        if (!isVisible(element)) {
            return false;
        }

        return intersectRect.apply(void 0, scrollParents(element).map(function (parent) {

            var ref = offset(getViewport(parent));
            var top = ref.top;
            var left = ref.left;
            var bottom = ref.bottom;
            var right = ref.right;

            return {
                top: top - offsetTop,
                left: left - offsetLeft,
                bottom: bottom + offsetTop,
                right: right + offsetLeft
            };
        }).concat(offset(element)));
    }

    function scrollTop(element, top) {

        if (isWindow(element) || isDocument(element)) {
            element = getScrollingElement(element);
        } else {
            element = toNode(element);
        }

        element.scrollTop = top;
    }

    function scrollIntoView(element, ref) {
        if ( ref === void 0 ) ref = {};
        var offsetBy = ref.offset; if ( offsetBy === void 0 ) offsetBy = 0;


        if (!isVisible(element)) {
            return;
        }

        var parents = scrollParents(element);
        var diff = 0;
        return parents.reduce(function (fn, scrollElement, i) {

            var scrollTop = scrollElement.scrollTop;
            var scrollHeight = scrollElement.scrollHeight;
            var maxScroll = scrollHeight - getViewportClientHeight(scrollElement);

            var top = Math.ceil(
                offset(parents[i - 1] || element).top
                - offset(getViewport(scrollElement)).top
                - offsetBy
                + diff
                + scrollTop
            );

            if (top > maxScroll) {
                diff = top - maxScroll;
                top = maxScroll;
            } else {
                diff = 0;
            }

            return function () { return scrollTo(scrollElement, top - scrollTop).then(fn); };

        }, function () { return Promise.resolve(); })();

        function scrollTo(element, top) {
            return new Promise(function (resolve) {

                var scroll = element.scrollTop;
                var duration = getDuration(Math.abs(top));
                var start = Date.now();

                (function step() {

                    var percent = ease(clamp((Date.now() - start) / duration));

                    scrollTop(element, scroll + top * percent);

                    // scroll more if we have not reached our destination
                    if (percent !== 1) {
                        requestAnimationFrame(step);
                    } else {
                        resolve();
                    }

                })();
            });
        }

        function getDuration(dist) {
            return 40 * Math.pow(dist, .375);
        }

        function ease(k) {
            return 0.5 * (1 - Math.cos(Math.PI * k));
        }

    }

    function scrolledOver(element, heightOffset) {
        if ( heightOffset === void 0 ) heightOffset = 0;


        if (!isVisible(element)) {
            return 0;
        }

        var ref = scrollParents(element, /auto|scroll/, true);
        var scrollElement = ref[0];
        var scrollHeight = scrollElement.scrollHeight;
        var scrollTop = scrollElement.scrollTop;
        var clientHeight = getViewportClientHeight(scrollElement);
        var viewportTop = offsetPosition(element)[0] - scrollTop - offsetPosition(scrollElement)[0];
        var viewportDist = Math.min(clientHeight, viewportTop + scrollTop);

        var top = viewportTop - viewportDist;
        var dist = Math.min(
            element.offsetHeight + heightOffset + viewportDist,
            scrollHeight - (viewportTop + scrollTop),
            scrollHeight - clientHeight
        );

        return clamp(-1 * top / dist);
    }

    function scrollParents(element, overflowRe, scrollable) {
        if ( overflowRe === void 0 ) overflowRe = /auto|scroll|hidden/;
        if ( scrollable === void 0 ) scrollable = false;

        var scrollEl = getScrollingElement(element);

        var ancestors = parents(element).reverse();
        ancestors = ancestors.slice(ancestors.indexOf(scrollEl) + 1);

        var fixedIndex = findIndex(ancestors, function (el) { return css(el, 'position') === 'fixed'; });
        if (~fixedIndex) {
            ancestors = ancestors.slice(fixedIndex);
        }

        return [scrollEl].concat(ancestors.filter(function (parent) { return overflowRe.test(css(parent, 'overflow')) && (!scrollable || parent.scrollHeight > getViewportClientHeight(parent)); })
        ).reverse();
    }

    function getViewport(scrollElement) {
        return scrollElement === getScrollingElement(scrollElement) ? window : scrollElement;
    }

    // iOS 12 returns <body> as scrollingElement
    function getViewportClientHeight(scrollElement) {
        return (scrollElement === getScrollingElement(scrollElement) ? document.documentElement : scrollElement).clientHeight;
    }

    function getScrollingElement(element) {
        var ref = toWindow(element);
        var document = ref.document;
        return document.scrollingElement || document.documentElement;
    }

    var dirs$1 = {
        width: ['x', 'left', 'right'],
        height: ['y', 'top', 'bottom']
    };

    function positionAt(element, target, elAttach, targetAttach, elOffset, targetOffset, flip, boundary) {

        elAttach = getPos(elAttach);
        targetAttach = getPos(targetAttach);

        var flipped = {element: elAttach, target: targetAttach};

        if (!element || !target) {
            return flipped;
        }

        var dim = offset(element);
        var targetDim = offset(target);
        var position = targetDim;

        moveTo(position, elAttach, dim, -1);
        moveTo(position, targetAttach, targetDim, 1);

        elOffset = getOffsets(elOffset, dim.width, dim.height);
        targetOffset = getOffsets(targetOffset, targetDim.width, targetDim.height);

        elOffset['x'] += targetOffset['x'];
        elOffset['y'] += targetOffset['y'];

        position.left += elOffset['x'];
        position.top += elOffset['y'];

        if (flip) {

            var boundaries = scrollParents(element).map(getViewport);

            if (boundary && includes(boundaries, boundary)) {
                boundaries.unshift(boundary);
            }

            boundaries = boundaries.map(function (el) { return offset(el); });

            each(dirs$1, function (ref, prop) {
                var dir = ref[0];
                var align = ref[1];
                var alignFlip = ref[2];


                if (!(flip === true || includes(flip, dir))) {
                    return;
                }

                boundaries.some(function (boundary) {

                    var elemOffset = elAttach[dir] === align
                        ? -dim[prop]
                        : elAttach[dir] === alignFlip
                            ? dim[prop]
                            : 0;

                    var targetOffset = targetAttach[dir] === align
                        ? targetDim[prop]
                        : targetAttach[dir] === alignFlip
                            ? -targetDim[prop]
                            : 0;

                    if (position[align] < boundary[align] || position[align] + dim[prop] > boundary[alignFlip]) {

                        var centerOffset = dim[prop] / 2;
                        var centerTargetOffset = targetAttach[dir] === 'center' ? -targetDim[prop] / 2 : 0;

                        return elAttach[dir] === 'center' && (
                            apply(centerOffset, centerTargetOffset)
                            || apply(-centerOffset, -centerTargetOffset)
                        ) || apply(elemOffset, targetOffset);

                    }

                    function apply(elemOffset, targetOffset) {

                        var newVal = toFloat((position[align] + elemOffset + targetOffset - elOffset[dir] * 2).toFixed(4));

                        if (newVal >= boundary[align] && newVal + dim[prop] <= boundary[alignFlip]) {
                            position[align] = newVal;

                            ['element', 'target'].forEach(function (el) {
                                flipped[el][dir] = !elemOffset
                                    ? flipped[el][dir]
                                    : flipped[el][dir] === dirs$1[prop][1]
                                        ? dirs$1[prop][2]
                                        : dirs$1[prop][1];
                            });

                            return true;
                        }

                    }

                });

            });
        }

        offset(element, position);

        return flipped;
    }

    function moveTo(position, attach, dim, factor) {
        each(dirs$1, function (ref, prop) {
            var dir = ref[0];
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

        var x = /left|center|right/;
        var y = /top|center|bottom/;

        pos = (pos || '').split(' ');

        if (pos.length === 1) {
            pos = x.test(pos[0])
                ? pos.concat('center')
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

        var ref = (offsets || '').split(' ');
        var x = ref[0];
        var y = ref[1];

        return {
            x: x ? toFloat(x) * (endsWith(x, '%') ? width / 100 : 1) : 0,
            y: y ? toFloat(y) * (endsWith(y, '%') ? height / 100 : 1) : 0
        };
    }

    var util = /*#__PURE__*/Object.freeze({
        __proto__: null,
        ajax: ajax,
        getImage: getImage,
        transition: transition,
        Transition: Transition,
        animate: animate,
        Animation: Animation,
        attr: attr,
        hasAttr: hasAttr,
        removeAttr: removeAttr,
        data: data,
        addClass: addClass,
        removeClass: removeClass,
        removeClasses: removeClasses,
        replaceClass: replaceClass,
        hasClass: hasClass,
        toggleClass: toggleClass,
        dimensions: dimensions,
        offset: offset,
        position: position,
        offsetPosition: offsetPosition,
        height: height,
        width: width,
        boxModelAdjust: boxModelAdjust,
        flipPosition: flipPosition,
        toPx: toPx,
        ready: ready,
        empty: empty,
        html: html,
        prepend: prepend,
        append: append,
        before: before,
        after: after,
        remove: remove,
        wrapAll: wrapAll,
        wrapInner: wrapInner,
        unwrap: unwrap,
        fragment: fragment,
        apply: apply,
        $: $,
        $$: $$,
        inBrowser: inBrowser,
        isIE: isIE,
        isRtl: isRtl,
        hasTouch: hasTouch,
        pointerDown: pointerDown,
        pointerMove: pointerMove,
        pointerUp: pointerUp,
        pointerEnter: pointerEnter,
        pointerLeave: pointerLeave,
        pointerCancel: pointerCancel,
        on: on,
        off: off,
        once: once,
        trigger: trigger,
        createEvent: createEvent,
        toEventTargets: toEventTargets,
        isTouch: isTouch,
        getEventPos: getEventPos,
        fastdom: fastdom,
        isVoidElement: isVoidElement,
        isVisible: isVisible,
        selInput: selInput,
        isInput: isInput,
        parent: parent,
        filter: filter,
        matches: matches,
        closest: closest,
        within: within,
        parents: parents,
        children: children,
        index: index,
        hasOwn: hasOwn,
        hyphenate: hyphenate,
        camelize: camelize,
        ucfirst: ucfirst,
        startsWith: startsWith,
        endsWith: endsWith,
        includes: includes,
        findIndex: findIndex,
        isArray: isArray,
        isFunction: isFunction,
        isObject: isObject,
        isPlainObject: isPlainObject,
        isWindow: isWindow,
        isDocument: isDocument,
        isNode: isNode,
        isElement: isElement,
        isBoolean: isBoolean,
        isString: isString,
        isNumber: isNumber,
        isNumeric: isNumeric,
        isEmpty: isEmpty,
        isUndefined: isUndefined,
        toBoolean: toBoolean,
        toNumber: toNumber,
        toFloat: toFloat,
        toArray: toArray,
        toNode: toNode,
        toNodes: toNodes,
        toWindow: toWindow,
        toMs: toMs,
        isEqual: isEqual,
        swap: swap,
        assign: assign,
        last: last,
        each: each,
        sortBy: sortBy,
        uniqueBy: uniqueBy,
        clamp: clamp,
        noop: noop,
        intersectRect: intersectRect,
        pointInRect: pointInRect,
        Dimensions: Dimensions,
        getIndex: getIndex,
        memoize: memoize,
        MouseTracker: MouseTracker,
        mergeOptions: mergeOptions,
        parseOptions: parseOptions,
        play: play,
        pause: pause,
        mute: mute,
        positionAt: positionAt,
        Promise: Promise,
        Deferred: Deferred,
        query: query,
        queryAll: queryAll,
        find: find,
        findAll: findAll,
        escape: escape,
        css: css,
        getCssVar: getCssVar,
        propName: propName,
        isInView: isInView,
        scrollTop: scrollTop,
        scrollIntoView: scrollIntoView,
        scrolledOver: scrolledOver,
        scrollParents: scrollParents,
        getViewport: getViewport,
        getViewportClientHeight: getViewportClientHeight
    });

    function globalAPI (UIkit) {

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
            component = (isString(component) ? UIkit.component(component) : component) || this;
            component.options = mergeOptions(component.options, mixin);
        };

        UIkit.extend = function (options) {

            options = options || {};

            var Super = this;
            var Sub = function UIkitComponent(options) {
                this._init(options);
            };

            Sub.prototype = Object.create(Super.prototype);
            Sub.prototype.constructor = Sub;
            Sub.options = mergeOptions(Super.options, options);

            Sub.super = Super;
            Sub.extend = Super.extend;

            return Sub;
        };

        UIkit.update = function (element, e) {

            element = element ? toNode(element) : document.body;

            parents(element).reverse().forEach(function (element) { return update(element[DATA], e); });
            apply(element, function (element) { return update(element[DATA], e); });

        };

        var container;
        Object.defineProperty(UIkit, 'container', {

            get: function() {
                return container || document.body;
            },

            set: function(element) {
                container = $(element);
            }

        });

        function update(data, e) {

            if (!data) {
                return;
            }

            for (var name in data) {
                if (data[name]._connected) {
                    data[name]._callUpdate(e);
                }
            }

        }
    }

    function hooksAPI (UIkit) {

        UIkit.prototype._callHook = function (hook) {
            var this$1 = this;


            var handlers = this.$options[hook];

            if (handlers) {
                handlers.forEach(function (handler) { return handler.call(this$1); });
            }
        };

        UIkit.prototype._callConnected = function () {

            if (this._connected) {
                return;
            }

            this._data = {};
            this._computeds = {};

            this._initProps();

            this._callHook('beforeConnect');
            this._connected = true;

            this._initEvents();
            this._initObservers();

            this._callHook('connected');
            this._callUpdate();
        };

        UIkit.prototype._callDisconnected = function () {

            if (!this._connected) {
                return;
            }

            this._callHook('beforeDisconnect');
            this._disconnectObservers();
            this._unbindEvents();
            this._callHook('disconnected');

            this._connected = false;
            delete this._watch;

        };

        UIkit.prototype._callUpdate = function (e) {
            var this$1 = this;
            if ( e === void 0 ) e = 'update';


            if (!this._connected) {
                return;
            }

            if (e === 'update' || e === 'resize') {
                this._callWatches();
            }

            if (!this.$options.update) {
                return;
            }

            if (!this._updates) {
                this._updates = new Set();
                fastdom.read(function () {
                    runUpdates.call(this$1, this$1._updates);
                    delete this$1._updates;
                });
            }

            this._updates.add(e.type || e);
        };

        UIkit.prototype._callWatches = function () {
            var this$1 = this;


            if (this._watch) {
                return;
            }

            var initital = !hasOwn(this, '_watch');

            this._watch = fastdom.read(function () {

                var ref = this$1;
                var computed = ref.$options.computed;
                var _computeds = ref._computeds;

                for (var key in computed) {

                    var hasPrev = hasOwn(_computeds, key);
                    var prev = _computeds[key];

                    delete _computeds[key];

                    var ref$1 = computed[key];
                    var watch = ref$1.watch;
                    var immediate = ref$1.immediate;
                    if (watch && (
                        initital && immediate
                        || hasPrev && !isEqual(prev, this$1[key])
                    )) {
                        watch.call(this$1, this$1[key], prev);
                    }

                }

                this$1._watch = null;

            });

        };

        function runUpdates(types) {
            var this$1 = this;


            var updates = this.$options.update;

            var loop = function ( i ) {
                var ref = updates[i];
                var read = ref.read;
                var write = ref.write;
                var events = ref.events;

                if (!types.has('update') && (!events || !events.some(function (type) { return types.has(type); }))) {
                    return;
                }

                var result = (void 0);
                if (read) {

                    result = read.call(this$1, this$1._data, types);

                    if (result && isPlainObject(result)) {
                        assign(this$1._data, result);
                    }
                }

                if (write && result !== false) {
                    fastdom.write(function () { return write.call(this$1, this$1._data, types); });
                }

            };

            for (var i = 0; i < updates.length; i++) loop( i );
        }
    }

    function stateAPI (UIkit) {

        var uid = 0;

        UIkit.prototype._init = function (options) {

            options = options || {};
            options.data = normalizeData(options, this.constructor.options);

            this.$options = mergeOptions(this.constructor.options, options, this);
            this.$el = null;
            this.$props = {};

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

            var ref = this.$options;
            var data = ref.data; if ( data === void 0 ) data = {};

            for (var key in data) {
                this.$props[key] = this[key] = data[key];
            }
        };

        UIkit.prototype._initMethods = function () {

            var ref = this.$options;
            var methods = ref.methods;

            if (methods) {
                for (var key in methods) {
                    this[key] = methods[key].bind(this);
                }
            }
        };

        UIkit.prototype._initComputeds = function () {

            var ref = this.$options;
            var computed = ref.computed;

            this._computeds = {};

            if (computed) {
                for (var key in computed) {
                    registerComputed(this, key, computed[key]);
                }
            }
        };

        UIkit.prototype._initProps = function (props) {

            var key;

            props = props || getProps(this.$options, this.$name);

            for (key in props) {
                if (!isUndefined(props[key])) {
                    this.$props[key] = props[key];
                }
            }

            var exclude = [this.$options.computed, this.$options.methods];
            for (key in this.$props) {
                if (key in props && notIn(exclude, key)) {
                    this[key] = this.$props[key];
                }
            }
        };

        UIkit.prototype._initEvents = function () {
            var this$1 = this;


            this._events = [];

            var ref = this.$options;
            var events = ref.events;

            if (events) {

                events.forEach(function (event) {

                    if (!hasOwn(event, 'handler')) {
                        for (var key in event) {
                            registerEvent(this$1, event[key], key);
                        }
                    } else {
                        registerEvent(this$1, event);
                    }

                });
            }
        };

        UIkit.prototype._unbindEvents = function () {
            this._events.forEach(function (unbind) { return unbind(); });
            delete this._events;
        };

        UIkit.prototype._initObservers = function () {
            this._observers = [
                initChildListObserver(this),
                initPropsObserver(this)
            ];
        };

        UIkit.prototype._disconnectObservers = function () {
            this._observers.forEach(function (observer) { return observer && observer.disconnect(); }
            );
        };

        function getProps(opts, name) {

            var data$1 = {};
            var args = opts.args; if ( args === void 0 ) args = [];
            var props = opts.props; if ( props === void 0 ) props = {};
            var el = opts.el;

            if (!props) {
                return data$1;
            }

            for (var key in props) {
                var prop = hyphenate(key);
                var value = data(el, prop);

                if (isUndefined(value)) {
                    continue;
                }

                value = props[key] === Boolean && value === ''
                    ? true
                    : coerce(props[key], value);

                if (prop === 'target' && (!value || startsWith(value, '_'))) {
                    continue;
                }

                data$1[key] = value;
            }

            var options = parseOptions(data(el, name), args);

            for (var key$1 in options) {
                var prop$1 = camelize(key$1);
                if (props[prop$1] !== undefined) {
                    data$1[prop$1] = coerce(props[prop$1], options[key$1]);
                }
            }

            return data$1;
        }

        function registerComputed(component, key, cb) {
            Object.defineProperty(component, key, {

                enumerable: true,

                get: function() {

                    var _computeds = component._computeds;
                    var $props = component.$props;
                    var $el = component.$el;

                    if (!hasOwn(_computeds, key)) {
                        _computeds[key] = (cb.get || cb).call(component, $props, $el);
                    }

                    return _computeds[key];
                },

                set: function(value) {

                    var _computeds = component._computeds;

                    _computeds[key] = cb.set ? cb.set.call(component, value) : value;

                    if (isUndefined(_computeds[key])) {
                        delete _computeds[key];
                    }
                }

            });
        }

        function registerEvent(component, event, key) {

            if (!isPlainObject(event)) {
                event = ({name: key, handler: event});
            }

            var name = event.name;
            var el = event.el;
            var handler = event.handler;
            var capture = event.capture;
            var passive = event.passive;
            var delegate = event.delegate;
            var filter = event.filter;
            var self = event.self;
            el = isFunction(el)
                ? el.call(component)
                : el || component.$el;

            if (isArray(el)) {
                el.forEach(function (el) { return registerEvent(component, assign({}, event, {el: el}), key); });
                return;
            }

            if (!el || filter && !filter.call(component)) {
                return;
            }

            component._events.push(
                on(
                    el,
                    name,
                    !delegate
                        ? null
                        : isString(delegate)
                            ? delegate
                            : delegate.call(component),
                    isString(handler) ? component[handler] : handler.bind(component),
                    {passive: passive, capture: capture, self: self}
                )
            );

        }

        function notIn(options, key) {
            return options.every(function (arr) { return !arr || !hasOwn(arr, key); });
        }

        function coerce(type, value) {

            if (type === Boolean) {
                return toBoolean(value);
            } else if (type === Number) {
                return toNumber(value);
            } else if (type === 'list') {
                return toList(value);
            }

            return type ? type(value) : value;
        }

        function toList(value) {
            return isArray(value)
                ? value
                : isString(value)
                    ? value.split(/,(?![^(]*\))/).map(function (value) { return isNumeric(value)
                        ? toNumber(value)
                        : toBoolean(value.trim()); })
                    : [value];
        }

        function normalizeData(ref, ref$1) {
            var data = ref.data;
            var args = ref$1.args;
            var props = ref$1.props; if ( props === void 0 ) props = {};

            data = isArray(data)
                ? !isEmpty(args)
                    ? data.slice(0, args.length).reduce(function (data, value, index) {
                        if (isPlainObject(value)) {
                            assign(data, value);
                        } else {
                            data[args[index]] = value;
                        }
                        return data;
                    }, {})
                    : undefined
                : data;

            if (data) {
                for (var key in data) {
                    if (isUndefined(data[key])) {
                        delete data[key];
                    } else {
                        data[key] = props[key] ? coerce(props[key], data[key]) : data[key];
                    }
                }
            }

            return data;
        }

        function initChildListObserver(component) {
            var ref = component.$options;
            var el = ref.el;

            var observer = new MutationObserver(function () { return component.$emit(); });
            observer.observe(el, {
                childList: true,
                subtree: true
            });

            return observer;
        }

        function initPropsObserver(component) {

            var $name = component.$name;
            var $options = component.$options;
            var $props = component.$props;
            var attrs = $options.attrs;
            var props = $options.props;
            var el = $options.el;

            if (!props || attrs === false) {
                return;
            }

            var attributes = isArray(attrs) ? attrs : Object.keys(props);
            var filter = attributes.map(function (key) { return hyphenate(key); }).concat($name);

            var observer = new MutationObserver(function (records) {
                var data = getProps($options, $name);
                if (records.some(function (ref) {
                    var attributeName = ref.attributeName;

                    var prop = attributeName.replace('data-', '');
                    return (prop === $name ? attributes : [camelize(prop), camelize(attributeName)]).some(function (prop) { return !isUndefined(data[prop]) && data[prop] !== $props[prop]; }
                    );
                })) {
                    component.$reset();
                }
            });

            observer.observe(el, {
                attributes: true,
                attributeFilter: filter.concat(filter.map(function (key) { return ("data-" + key); }))
            });

            return observer;
        }
    }

    function instanceAPI (UIkit) {

        var DATA = UIkit.data;

        UIkit.prototype.$create = function (component, element, data) {
            return UIkit[component](element, data);
        };

        UIkit.prototype.$mount = function (el) {

            var ref = this.$options;
            var name = ref.name;

            if (!el[DATA]) {
                el[DATA] = {};
            }

            if (el[DATA][name]) {
                return;
            }

            el[DATA][name] = this;

            this.$el = this.$options.el = this.$options.el || el;

            if (within(el, document)) {
                this._callConnected();
            }
        };

        UIkit.prototype.$reset = function () {
            this._callDisconnected();
            this._callConnected();
        };

        UIkit.prototype.$destroy = function (removeEl) {
            if ( removeEl === void 0 ) removeEl = false;


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

            if (!isEmpty(el[DATA])) {
                delete el[DATA];
            }

            if (removeEl) {
                remove(this.$el);
            }
        };

        UIkit.prototype.$emit = function (e) {
            this._callUpdate(e);
        };

        UIkit.prototype.$update = function (element, e) {
            if ( element === void 0 ) element = this.$el;

            UIkit.update(element, e);
        };

        UIkit.prototype.$getComponent = UIkit.getComponent;

        var componentName = memoize(function (name) { return UIkit.prefix + hyphenate(name); });
        Object.defineProperties(UIkit.prototype, {

            $container: Object.getOwnPropertyDescriptor(UIkit, 'container'),

            $name: {

                get: function() {
                    return componentName(this.$options.name);
                }

            }

        });

    }

    function componentAPI (UIkit) {

        var DATA = UIkit.data;

        var components = {};

        UIkit.component = function (name, options) {

            var id = hyphenate(name);

            name = camelize(id);

            if (!options) {

                if (isPlainObject(components[name])) {
                    components[name] = UIkit.extend(components[name]);
                }

                return components[name];

            }

            UIkit[name] = function (element, data) {
                var i = arguments.length, argsArray = Array(i);
                while ( i-- ) argsArray[i] = arguments[i];


                var component = UIkit.component(name);

                return component.options.functional
                    ? new component({data: isPlainObject(element) ? element : [].concat( argsArray )})
                    : !element ? init(element) : $$(element).map(init)[0];

                function init(element) {

                    var instance = UIkit.getComponent(element, name);

                    if (instance) {
                        if (!data) {
                            return instance;
                        } else {
                            instance.$destroy();
                        }
                    }

                    return new component({el: element, data: data});

                }

            };

            var opt = isPlainObject(options) ? assign({}, options) : options.options;

            opt.name = name;

            if (opt.install) {
                opt.install(UIkit, opt, name);
            }

            if (UIkit._initialized && !opt.functional) {
                fastdom.read(function () { return UIkit[name](("[uk-" + id + "],[data-uk-" + id + "]")); });
            }

            return components[name] = isPlainObject(options) ? opt : options;
        };

        UIkit.getComponents = function (element) { return element && element[DATA] || {}; };
        UIkit.getComponent = function (element, name) { return UIkit.getComponents(element)[name]; };

        UIkit.connect = function (node) {

            if (node[DATA]) {
                for (var name in node[DATA]) {
                    node[DATA][name]._callConnected();
                }
            }

            for (var i = 0; i < node.attributes.length; i++) {

                var name$1 = getComponentName(node.attributes[i].name);

                if (name$1 && name$1 in components) {
                    UIkit[name$1](node);
                }

            }

        };

        UIkit.disconnect = function (node) {
            for (var name in node[DATA]) {
                node[DATA][name]._callDisconnected();
            }
        };

    }

    var getComponentName = memoize(function (attribute) {
        return startsWith(attribute, 'uk-') || startsWith(attribute, 'data-uk-')
            ? camelize(attribute.replace('data-uk-', '').replace('uk-', ''))
            : false;
    });

    var UIkit = function (options) {
        this._init(options);
    };

    UIkit.util = util;
    UIkit.data = '__uikit__';
    UIkit.prefix = 'uk-';
    UIkit.options = {};
    UIkit.version = '3.6.18';

    globalAPI(UIkit);
    hooksAPI(UIkit);
    stateAPI(UIkit);
    componentAPI(UIkit);
    instanceAPI(UIkit);

    function Core (UIkit) {

        if (!inBrowser) {
            return;
        }

        // throttle 'resize'
        var pendingResize;
        var handleResize = function () {
            if (pendingResize) {
                return;
            }
            pendingResize = true;
            fastdom.write(function () { return pendingResize = false; });
            UIkit.update(null, 'resize');
        };

        on(window, 'load resize', handleResize);
        on(document, 'loadedmetadata load', handleResize, true);

        if ('ResizeObserver' in window) {
            (new ResizeObserver(handleResize)).observe(document.documentElement);
        }

        // throttle `scroll` event (Safari triggers multiple `scroll` events per frame)
        var pending;
        on(window, 'scroll', function (e) {

            if (pending) {
                return;
            }
            pending = true;
            fastdom.write(function () { return pending = false; });

            UIkit.update(null, e.type);

        }, {passive: true, capture: true});

        var started = 0;
        on(document, 'animationstart', function (ref) {
            var target = ref.target;

            if ((css(target, 'animationName') || '').match(/^uk-.*(left|right)/)) {

                started++;
                css(document.documentElement, 'overflowX', 'hidden');
                setTimeout(function () {
                    if (!--started) {
                        css(document.documentElement, 'overflowX', '');
                    }
                }, toMs(css(target, 'animationDuration')) + 100);
            }
        }, true);

        on(document, pointerDown, function (e) {

            if (!isTouch(e)) {
                return;
            }

            // Handle Swipe Gesture
            var pos = getEventPos(e);
            var target = 'tagName' in e.target ? e.target : parent(e.target);
            once(document, (pointerUp + " " + pointerCancel + " scroll"), function (e) {

                var ref = getEventPos(e);
                var x = ref.x;
                var y = ref.y;

                // swipe
                if (e.type !== 'scroll' && target && x && Math.abs(pos.x - x) > 100 || y && Math.abs(pos.y - y) > 100) {

                    setTimeout(function () {
                        trigger(target, 'swipe');
                        trigger(target, ("swipe" + (swipeDirection(pos.x, pos.y, x, y))));
                    });

                }

            });

        }, {passive: true});

    }

    function swipeDirection(x1, y1, x2, y2) {
        return Math.abs(x1 - x2) >= Math.abs(y1 - y2)
            ? x1 - x2 > 0
                ? 'Left'
                : 'Right'
            : y1 - y2 > 0
                ? 'Up'
                : 'Down';
    }

    function boot (UIkit) {

        var connect = UIkit.connect;
        var disconnect = UIkit.disconnect;

        if (!inBrowser || !window.MutationObserver) {
            return;
        }

        fastdom.read(function () {

            if (document.body) {
                apply(document.body, connect);
            }

            new MutationObserver(function (records) { return records.forEach(applyChildListMutation); }
            ).observe(document, {
                childList: true,
                subtree: true
            });

            new MutationObserver(function (records) { return records.forEach(applyAttributeMutation); }
            ).observe(document, {
                attributes: true,
                subtree: true
            });

            UIkit._initialized = true;
        });

        function applyChildListMutation(ref) {
            var addedNodes = ref.addedNodes;
            var removedNodes = ref.removedNodes;

            for (var i = 0; i < addedNodes.length; i++) {
                apply(addedNodes[i], connect);
            }

            for (var i$1 = 0; i$1 < removedNodes.length; i$1++) {
                apply(removedNodes[i$1], disconnect);
            }
        }

        function applyAttributeMutation(ref) {
            var target = ref.target;
            var attributeName = ref.attributeName;


            var name = getComponentName(attributeName);

            if (!name || !(name in UIkit)) {
                return;
            }

            if (hasAttr(target, attributeName)) {
                UIkit[name](target);
                return;
            }

            var component = UIkit.getComponent(target, name);

            if (component) {
                component.$destroy();
            }

        }

    }

    var Class = {

        connected: function() {
            !hasClass(this.$el, this.$name) && addClass(this.$el, this.$name);
        }

    };

    var Togglable = {

        props: {
            cls: Boolean,
            animation: 'list',
            duration: Number,
            origin: String,
            transition: String
        },

        data: {
            cls: false,
            animation: [false],
            duration: 200,
            origin: false,
            transition: 'linear',
            clsEnter: 'uk-togglabe-enter',
            clsLeave: 'uk-togglabe-leave',

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

            hasAnimation: function(ref) {
                var animation = ref.animation;

                return !!animation[0];
            },

            hasTransition: function(ref) {
                var animation = ref.animation;

                return this.hasAnimation && animation[0] === true;
            }

        },

        methods: {

            toggleElement: function(targets, toggle, animate) {
                var this$1 = this;

                return new Promise(function (resolve) { return Promise.all(toNodes(targets).map(function (el) {

                        var show = isBoolean(toggle) ? toggle : !this$1.isToggled(el);

                        if (!trigger(el, ("before" + (show ? 'show' : 'hide')), [this$1])) {
                            return Promise.reject();
                        }

                        var promise = (
                            isFunction(animate)
                                ? animate
                                : animate === false || !this$1.hasAnimation
                                ? this$1._toggle
                                : this$1.hasTransition
                                    ? toggleHeight(this$1)
                                    : toggleAnimation(this$1)
                        )(el, show);

                        var cls = show ? this$1.clsEnter : this$1.clsLeave;

                        addClass(el, cls);

                        trigger(el, show ? 'show' : 'hide', [this$1]);

                        var done = function () {
                            removeClass(el, cls);
                            trigger(el, show ? 'shown' : 'hidden', [this$1]);
                            this$1.$update(el);
                        };

                        return promise ? promise.then(done, function () {
                            removeClass(el, cls);
                            return Promise.reject();
                        }) : done();

                    })).then(resolve, noop); }
                );
            },

            isToggled: function(el) {
                if ( el === void 0 ) el = this.$el;

                return hasClass(el, this.clsEnter)
                    ? true
                    : hasClass(el, this.clsLeave)
                        ? false
                        : this.cls
                            ? hasClass(el, this.cls.split(' ')[0])
                            : !hasAttr(el, 'hidden');
            },

            _toggle: function(el, toggled) {

                if (!el) {
                    return;
                }

                toggled = Boolean(toggled);

                var changed;
                if (this.cls) {
                    changed = includes(this.cls, ' ') || toggled !== hasClass(el, this.cls);
                    changed && toggleClass(el, this.cls, includes(this.cls, ' ') ? undefined : toggled);
                } else {
                    changed = toggled === el.hidden;
                    changed && (el.hidden = !toggled);
                }

                $$('[autofocus]', el).some(function (el) { return isVisible(el) ? el.focus() || true : el.blur(); });

                if (changed) {
                    trigger(el, 'toggled', [toggled, this]);
                    this.$update(el);
                }
            }

        }

    };

    function toggleHeight(ref) {
        var isToggled = ref.isToggled;
        var duration = ref.duration;
        var initProps = ref.initProps;
        var hideProps = ref.hideProps;
        var transition = ref.transition;
        var _toggle = ref._toggle;

        return function (el, show) {

            var inProgress = Transition.inProgress(el);
            var inner = el.hasChildNodes ? toFloat(css(el.firstElementChild, 'marginTop')) + toFloat(css(el.lastElementChild, 'marginBottom')) : 0;
            var currentHeight = isVisible(el) ? height(el) + (inProgress ? 0 : inner) : 0;

            Transition.cancel(el);

            if (!isToggled(el)) {
                _toggle(el, true);
            }

            height(el, '');

            // Update child components first
            fastdom.flush();

            var endHeight = height(el) + (inProgress ? 0 : inner);
            height(el, currentHeight);

            return (show
                ? Transition.start(el, assign({}, initProps, {overflow: 'hidden', height: endHeight}), Math.round(duration * (1 - currentHeight / endHeight)), transition)
                : Transition.start(el, hideProps, Math.round(duration * (currentHeight / endHeight)), transition).then(function () { return _toggle(el, false); })
            ).then(function () { return css(el, initProps); });

        };
    }

    function toggleAnimation(cmp) {
        return function (el, show) {

            Animation.cancel(el);

            var animation = cmp.animation;
            var duration = cmp.duration;
            var _toggle = cmp._toggle;

            if (show) {
                _toggle(el, true);
                return Animation.in(el, animation[0], duration, cmp.origin);
            }

            return Animation.out(el, animation[1] || animation[0], duration, cmp.origin).then(function () { return _toggle(el, false); });
        };
    }

    var Accordion = {

        mixins: [Class, Togglable],

        props: {
            targets: String,
            active: null,
            collapsible: Boolean,
            multiple: Boolean,
            toggle: String,
            content: String,
            transition: String,
            offset: Number
        },

        data: {
            targets: '> *',
            active: false,
            animation: [true],
            collapsible: true,
            multiple: false,
            clsOpen: 'uk-open',
            toggle: '> .uk-accordion-title',
            content: '> .uk-accordion-content',
            transition: 'ease',
            offset: 0
        },

        computed: {

            items: {

                get: function(ref, $el) {
                    var targets = ref.targets;

                    return $$(targets, $el);
                },

                watch: function(items, prev) {
                    var this$1 = this;


                    items.forEach(function (el) { return hide($(this$1.content, el), !hasClass(el, this$1.clsOpen)); });

                    if (prev || hasClass(items, this.clsOpen)) {
                        return;
                    }

                    var active = this.active !== false && items[Number(this.active)]
                        || !this.collapsible && items[0];

                    if (active) {
                        this.toggle(active, false);
                    }

                },

                immediate: true

            },

            toggles: function(ref) {
                var toggle = ref.toggle;

                return this.items.map(function (item) { return $(toggle, item); });
            }

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return ((this.targets) + " " + (this.$props.toggle));
                },

                handler: function(e) {
                    e.preventDefault();
                    this.toggle(index(this.toggles, e.current));
                }

            }

        ],

        methods: {

            toggle: function(item, animate) {
                var this$1 = this;


                var items = [this.items[getIndex(item, this.items)]];
                var activeItems = filter(this.items, ("." + (this.clsOpen)));

                if (!this.multiple && !includes(activeItems, items[0])) {
                    items = items.concat(activeItems);
                }

                if (!this.collapsible && activeItems.length < 2 && !filter(items, (":not(." + (this.clsOpen) + ")")).length) {
                    return;
                }

                items.forEach(function (el) { return this$1.toggleElement(el, !hasClass(el, this$1.clsOpen), function (el, show) {

                    toggleClass(el, this$1.clsOpen, show);
                    attr($(this$1.$props.toggle, el), 'aria-expanded', show);

                    var content = $(("" + (el._wrapper ? '> * ' : '') + (this$1.content)), el);

                    if (animate === false || !this$1.hasTransition) {
                        hide(content, !show);
                        return;
                    }

                    if (!el._wrapper) {
                        el._wrapper = wrapAll(content, ("<div" + (show ? ' hidden' : '') + ">"));
                    }

                    hide(content, false);
                    return toggleHeight(this$1)(el._wrapper, show).then(function () {
                        hide(content, !show);
                        delete el._wrapper;
                        unwrap(content);

                        if (show) {
                            var toggle = $(this$1.$props.toggle, el);
                            if (!isInView(toggle)) {
                                scrollIntoView(toggle, {offset: this$1.offset});
                            }
                        }
                    });
                }); });
            }

        }

    };

    function hide(el, hide) {
        el && (el.hidden = hide);
    }

    var alert = {

        mixins: [Class, Togglable],

        args: 'animation',

        props: {
            close: String
        },

        data: {
            animation: [true],
            selClose: '.uk-alert-close',
            duration: 150,
            hideProps: assign({opacity: 0}, Togglable.data.hideProps)
        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return this.selClose;
                },

                handler: function(e) {
                    e.preventDefault();
                    this.close();
                }

            }

        ],

        methods: {

            close: function() {
                var this$1 = this;

                this.toggleElement(this.$el).then(function () { return this$1.$destroy(true); });
            }

        }

    };

    var Video = {

        args: 'autoplay',

        props: {
            automute: Boolean,
            autoplay: Boolean
        },

        data: {
            automute: false,
            autoplay: true
        },

        computed: {

            inView: function(ref) {
                var autoplay = ref.autoplay;

                return autoplay === 'inview';
            }

        },

        connected: function() {

            if (this.inView && !hasAttr(this.$el, 'preload')) {
                this.$el.preload = 'none';
            }

            if (this.automute) {
                mute(this.$el);
            }

        },

        update: {

            read: function() {
                return {
                    visible: isVisible(this.$el) && css(this.$el, 'visibility') !== 'hidden',
                    inView: this.inView && isInView(this.$el)
                };
            },

            write: function(ref) {
                var visible = ref.visible;
                var inView = ref.inView;


                if (!visible || this.inView && !inView) {
                    pause(this.$el);
                } else if (this.autoplay === true || this.inView && inView) {
                    play(this.$el);
                }

            },

            events: ['resize', 'scroll']

        }

    };

    var cover = {

        mixins: [Class, Video],

        props: {
            width: Number,
            height: Number
        },

        data: {
            automute: true
        },

        update: {

            read: function() {

                var el = this.$el;
                var ref = getPositionedParent(el) || parent(el);
                var height = ref.offsetHeight;
                var width = ref.offsetWidth;
                var dim = Dimensions.cover(
                    {
                        width: this.width || el.naturalWidth || el.videoWidth || el.clientWidth,
                        height: this.height || el.naturalHeight || el.videoHeight || el.clientHeight
                    },
                    {
                        width: width + (width % 2 ? 1 : 0),
                        height: height + (height % 2 ? 1 : 0)
                    }
                );

                if (!dim.width || !dim.height) {
                    return false;
                }

                return dim;
            },

            write: function(ref) {
                var height = ref.height;
                var width = ref.width;

                css(this.$el, {height: height, width: width});
            },

            events: ['resize']

        }

    };

    function getPositionedParent(el) {
        while ((el = parent(el))) {
            if (css(el, 'position') !== 'static') {
                return el;
            }
        }
    }

    var Position = {

        props: {
            pos: String,
            offset: null,
            flip: Boolean,
            clsPos: String
        },

        data: {
            pos: ("bottom-" + (!isRtl ? 'left' : 'right')),
            flip: true,
            offset: false,
            clsPos: ''
        },

        computed: {

            pos: function(ref) {
                var pos = ref.pos;

                return (pos + (!includes(pos, '-') ? '-center' : '')).split('-');
            },

            dir: function() {
                return this.pos[0];
            },

            align: function() {
                return this.pos[1];
            }

        },

        methods: {

            positionAt: function(element, target, boundary) {

                removeClasses(element, ((this.clsPos) + "-(top|bottom|left|right)(-[a-z]+)?"));

                var ref = this;
                var offset$1 = ref.offset;
                var axis = this.getAxis();

                if (!isNumeric(offset$1)) {
                    var node = $(offset$1);
                    offset$1 = node
                        ? offset(node)[axis === 'x' ? 'left' : 'top'] - offset(target)[axis === 'x' ? 'right' : 'bottom']
                        : 0;
                }

                var ref$1 = positionAt(
                    element,
                    target,
                    axis === 'x' ? ((flipPosition(this.dir)) + " " + (this.align)) : ((this.align) + " " + (flipPosition(this.dir))),
                    axis === 'x' ? ((this.dir) + " " + (this.align)) : ((this.align) + " " + (this.dir)),
                    axis === 'x' ? ("" + (this.dir === 'left' ? -offset$1 : offset$1)) : (" " + (this.dir === 'top' ? -offset$1 : offset$1)),
                    null,
                    this.flip,
                    boundary
                ).target;
                var x = ref$1.x;
                var y = ref$1.y;

                this.dir = axis === 'x' ? x : y;
                this.align = axis === 'x' ? y : x;

                toggleClass(element, ((this.clsPos) + "-" + (this.dir) + "-" + (this.align)), this.offset === false);

            },

            getAxis: function() {
                return this.dir === 'top' || this.dir === 'bottom' ? 'y' : 'x';
            }

        }

    };

    var active;

    var drop = {

        mixins: [Position, Togglable],

        args: 'pos',

        props: {
            mode: 'list',
            toggle: Boolean,
            boundary: Boolean,
            boundaryAlign: Boolean,
            delayShow: Number,
            delayHide: Number,
            clsDrop: String
        },

        data: {
            mode: ['click', 'hover'],
            toggle: '- *',
            boundary: true,
            boundaryAlign: false,
            delayShow: 0,
            delayHide: 800,
            clsDrop: false,
            animation: ['uk-animation-fade'],
            cls: 'uk-open'
        },

        computed: {

            boundary: function(ref, $el) {
                var boundary = ref.boundary;

                return boundary === true ? window : query(boundary, $el);
            },

            clsDrop: function(ref) {
                var clsDrop = ref.clsDrop;

                return clsDrop || ("uk-" + (this.$options.name));
            },

            clsPos: function() {
                return this.clsDrop;
            }

        },

        created: function() {
            this.tracker = new MouseTracker();
        },

        connected: function() {

            addClass(this.$el, this.clsDrop);

            var ref = this.$props;
            var toggle = ref.toggle;
            this.toggle = toggle && this.$create('toggle', query(toggle, this.$el), {
                target: this.$el,
                mode: this.mode
            });

        },

        disconnected: function() {
            if (this.isActive()) {
                active = null;
            }
        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return ("." + (this.clsDrop) + "-close");
                },

                handler: function(e) {
                    e.preventDefault();
                    this.hide(false);
                }

            },

            {

                name: 'click',

                delegate: function() {
                    return 'a[href^="#"]';
                },

                handler: function(ref) {
                    var defaultPrevented = ref.defaultPrevented;
                    var hash = ref.current.hash;

                    if (!defaultPrevented && hash && !within(hash, this.$el)) {
                        this.hide(false);
                    }
                }

            },

            {

                name: 'beforescroll',

                handler: function() {
                    this.hide(false);
                }

            },

            {

                name: 'toggle',

                self: true,

                handler: function(e, toggle) {

                    e.preventDefault();

                    if (this.isToggled()) {
                        this.hide(false);
                    } else {
                        this.show(toggle, false);
                    }
                }

            },

            {

                name: 'toggleshow',

                self: true,

                handler: function(e, toggle) {
                    e.preventDefault();
                    this.show(toggle);
                }

            },

            {

                name: 'togglehide',

                self: true,

                handler: function(e) {
                    e.preventDefault();
                    this.hide();
                }

            },

            {

                name: pointerEnter,

                filter: function() {
                    return includes(this.mode, 'hover');
                },

                handler: function(e) {
                    if (!isTouch(e)) {
                        this.clearTimers();
                    }
                }

            },

            {

                name: pointerLeave,

                filter: function() {
                    return includes(this.mode, 'hover');
                },

                handler: function(e) {
                    if (!isTouch(e) && e.relatedTarget) {
                        this.hide();
                    }
                }

            },

            {

                name: 'toggled',

                self: true,

                handler: function(e, toggled) {

                    if (!toggled) {
                        return;
                    }

                    this.clearTimers();
                    this.position();
                }

            },

            {

                name: 'show',

                self: true,

                handler: function() {
                    var this$1 = this;


                    active = this;

                    this.tracker.init();

                    once(this.$el, 'hide', on(document, pointerDown, function (ref) {
                            var target = ref.target;

                            return !within(target, this$1.$el) && once(document, (pointerUp + " " + pointerCancel + " scroll"), function (ref) {
                            var defaultPrevented = ref.defaultPrevented;
                            var type = ref.type;
                            var newTarget = ref.target;

                            if (!defaultPrevented && type === pointerUp && target === newTarget && !(this$1.toggle && within(target, this$1.toggle.$el))) {
                                this$1.hide(false);
                            }
                        }, true);
                    }
                    ), {self: true});

                    once(this.$el, 'hide', on(document, 'keydown', function (e) {
                        if (e.keyCode === 27) {
                            this$1.hide(false);
                        }
                    }), {self: true});

                }

            },

            {

                name: 'beforehide',

                self: true,

                handler: function() {
                    this.clearTimers();
                }

            },

            {

                name: 'hide',

                handler: function(ref) {
                    var target = ref.target;


                    if (this.$el !== target) {
                        active = active === null && within(target, this.$el) && this.isToggled() ? this : active;
                        return;
                    }

                    active = this.isActive() ? null : active;
                    this.tracker.cancel();
                }

            }

        ],

        update: {

            write: function() {

                if (this.isToggled() && !hasClass(this.$el, this.clsEnter)) {
                    this.position();
                }

            },

            events: ['resize']

        },

        methods: {

            show: function(toggle, delay) {
                var this$1 = this;
                if ( toggle === void 0 ) toggle = this.toggle;
                if ( delay === void 0 ) delay = true;


                if (this.isToggled() && toggle && this.toggle && toggle.$el !== this.toggle.$el) {
                    this.hide(false);
                }

                this.toggle = toggle;

                this.clearTimers();

                if (this.isActive()) {
                    return;
                }

                if (active) {

                    if (delay && active.isDelaying) {
                        this.showTimer = setTimeout(this.show, 10);
                        return;
                    }

                    var prev;
                    while (active && prev !== active && !within(this.$el, active.$el)) {
                        prev = active;
                        active.hide(false);
                    }

                }

                this.showTimer = setTimeout(function () { return !this$1.isToggled() && this$1.toggleElement(this$1.$el, true); }, delay && this.delayShow || 0);

            },

            hide: function(delay) {
                var this$1 = this;
                if ( delay === void 0 ) delay = true;


                var hide = function () { return this$1.toggleElement(this$1.$el, false, false); };

                this.clearTimers();

                this.isDelaying = getPositionedElements(this.$el).some(function (el) { return this$1.tracker.movesTo(el); });

                if (delay && this.isDelaying) {
                    this.hideTimer = setTimeout(this.hide, 50);
                } else if (delay && this.delayHide) {
                    this.hideTimer = setTimeout(hide, this.delayHide);
                } else {
                    hide();
                }
            },

            clearTimers: function() {
                clearTimeout(this.showTimer);
                clearTimeout(this.hideTimer);
                this.showTimer = null;
                this.hideTimer = null;
                this.isDelaying = false;
            },

            isActive: function() {
                return active === this;
            },

            position: function() {

                removeClass(this.$el, ((this.clsDrop) + "-stack"));
                toggleClass(this.$el, ((this.clsDrop) + "-boundary"), this.boundaryAlign);

                var boundary = offset(this.boundary);
                var alignTo = this.boundaryAlign ? boundary : offset(this.toggle.$el);

                if (this.align === 'justify') {
                    var prop = this.getAxis() === 'y' ? 'width' : 'height';
                    css(this.$el, prop, alignTo[prop]);
                } else if (this.boundary && this.$el.offsetWidth > Math.max(boundary.right - alignTo.left, alignTo.right - boundary.left)) {
                    addClass(this.$el, ((this.clsDrop) + "-stack"));
                }

                this.positionAt(this.$el, this.boundaryAlign ? this.boundary : this.toggle.$el, this.boundary);

            }

        }

    };

    function getPositionedElements(el) {
        var result = [];
        apply(el, function (el) { return css(el, 'position') !== 'static' && result.push(el); });
        return result;
    }

    var formCustom = {

        mixins: [Class],

        args: 'target',

        props: {
            target: Boolean
        },

        data: {
            target: false
        },

        computed: {

            input: function(_, $el) {
                return $(selInput, $el);
            },

            state: function() {
                return this.input.nextElementSibling;
            },

            target: function(ref, $el) {
                var target = ref.target;

                return target && (target === true
                    && parent(this.input) === $el
                    && this.input.nextElementSibling
                    || query(target, $el));
            }

        },

        update: function() {

            var ref = this;
            var target = ref.target;
            var input = ref.input;

            if (!target) {
                return;
            }

            var option;
            var prop = isInput(target) ? 'value' : 'textContent';
            var prev = target[prop];
            var value = input.files && input.files[0]
                ? input.files[0].name
                : matches(input, 'select') && (option = $$('option', input).filter(function (el) { return el.selected; })[0]) // eslint-disable-line prefer-destructuring
                    ? option.textContent
                    : input.value;

            if (prev !== value) {
                target[prop] = value;
            }

        },

        events: [

            {
                name: 'change',

                handler: function() {
                    this.$update();
                }
            },

            {
                name: 'reset',

                el: function() {
                    return closest(this.$el, 'form');
                },

                handler: function() {
                    this.$update();
                }
            }

        ]

    };

    // Deprecated
    var gif = {

        update: {

            read: function(data) {

                var inview = isInView(this.$el);

                if (!inview || data.isInView === inview) {
                    return false;
                }

                data.isInView = inview;
            },

            write: function() {
                this.$el.src = '' + this.$el.src; // force self-assign
            },

            events: ['scroll', 'resize']
        }

    };

    var Margin = {

        props: {
            margin: String,
            firstColumn: Boolean
        },

        data: {
            margin: 'uk-margin-small-top',
            firstColumn: 'uk-first-column'
        },

        update: {

            read: function() {

                var rows = getRows(this.$el.children);

                return {
                    rows: rows,
                    columns: getColumns(rows)
                };
            },

            write: function(ref) {
                var columns = ref.columns;
                var rows = ref.rows;

                for (var i = 0; i < rows.length; i++) {
                    for (var j = 0; j < rows[i].length; j++) {
                        toggleClass(rows[i][j], this.margin, i !== 0);
                        toggleClass(rows[i][j], this.firstColumn, !!~columns[0].indexOf(rows[i][j]));
                    }
                }
            },

            events: ['resize']

        }

    };

    function getRows(items) {
        return sortBy$1(items, 'top', 'bottom');
    }

    function getColumns(rows) {

        var columns = [];

        for (var i = 0; i < rows.length; i++) {
            var sorted = sortBy$1(rows[i], 'left', 'right');
            for (var j = 0; j < sorted.length; j++) {
                columns[j] = !columns[j] ? sorted[j] : columns[j].concat(sorted[j]);
            }
        }

        return isRtl
            ? columns.reverse()
            : columns;
    }

    function sortBy$1(items, startProp, endProp) {

        var sorted = [[]];

        for (var i = 0; i < items.length; i++) {

            var el = items[i];

            if (!isVisible(el)) {
                continue;
            }

            var dim = getOffset(el);

            for (var j = sorted.length - 1; j >= 0; j--) {

                var current = sorted[j];

                if (!current[0]) {
                    current.push(el);
                    break;
                }

                var startDim = (void 0);
                if (current[0].offsetParent === el.offsetParent) {
                    startDim = getOffset(current[0]);
                } else {
                    dim = getOffset(el, true);
                    startDim = getOffset(current[0], true);
                }

                if (dim[startProp] >= startDim[endProp] - 1 && dim[startProp] !== startDim[startProp]) {
                    sorted.push([el]);
                    break;
                }

                if (dim[endProp] - 1 > startDim[startProp] || dim[startProp] === startDim[startProp]) {
                    current.push(el);
                    break;
                }

                if (j === 0) {
                    sorted.unshift([el]);
                    break;
                }

            }

        }

        return sorted;
    }

    function getOffset(element, offset) {
        var assign;

        if ( offset === void 0 ) offset = false;

        var offsetTop = element.offsetTop;
        var offsetLeft = element.offsetLeft;
        var offsetHeight = element.offsetHeight;
        var offsetWidth = element.offsetWidth;

        if (offset) {
            (assign = offsetPosition(element), offsetTop = assign[0], offsetLeft = assign[1]);
        }

        return {
            top: offsetTop,
            left: offsetLeft,
            bottom: offsetTop + offsetHeight,
            right: offsetLeft + offsetWidth
        };
    }

    var grid = {

        extends: Margin,

        mixins: [Class],

        name: 'grid',

        props: {
            masonry: Boolean,
            parallax: Number
        },

        data: {
            margin: 'uk-grid-margin',
            clsStack: 'uk-grid-stack',
            masonry: false,
            parallax: 0
        },

        connected: function() {
            this.masonry && addClass(this.$el, 'uk-flex-top uk-flex-wrap-top');
        },

        update: [

            {

                write: function(ref) {
                    var columns = ref.columns;

                    toggleClass(this.$el, this.clsStack, columns.length < 2);
                },

                events: ['resize']

            },

            {

                read: function(data) {

                    var columns = data.columns;
                    var rows = data.rows;

                    // Filter component makes elements positioned absolute
                    if (!columns.length || !this.masonry && !this.parallax || positionedAbsolute(this.$el)) {
                        data.translates = false;
                        return false;
                    }

                    var translates = false;

                    var nodes = children(this.$el);
                    var columnHeights = getColumnHeights(columns);
                    var margin = getMarginTop(nodes, this.margin) * (rows.length - 1);
                    var elHeight = Math.max.apply(Math, columnHeights) + margin;

                    if (this.masonry) {
                        columns = columns.map(function (column) { return sortBy(column, 'offsetTop'); });
                        translates = getTranslates(rows, columns);
                    }

                    var padding = Math.abs(this.parallax);
                    if (padding) {
                        padding = columnHeights.reduce(function (newPadding, hgt, i) { return Math.max(newPadding, hgt + margin + (i % 2 ? padding : padding / 8) - elHeight); }
                            , 0);
                    }

                    return {padding: padding, columns: columns, translates: translates, height: translates ? elHeight : ''};

                },

                write: function(ref) {
                    var height = ref.height;
                    var padding = ref.padding;


                    css(this.$el, 'paddingBottom', padding || '');
                    height !== false && css(this.$el, 'height', height);

                },

                events: ['resize']

            },

            {

                read: function(ref) {
                    var height$1 = ref.height;


                    if (positionedAbsolute(this.$el)) {
                        return false;
                    }

                    return {
                        scrolled: this.parallax
                            ? scrolledOver(this.$el, height$1 ? height$1 - height(this.$el) : 0) * Math.abs(this.parallax)
                            : false
                    };
                },

                write: function(ref) {
                    var columns = ref.columns;
                    var scrolled = ref.scrolled;
                    var translates = ref.translates;


                    if (scrolled === false && !translates) {
                        return;
                    }

                    columns.forEach(function (column, i) { return column.forEach(function (el, j) { return css(el, 'transform', !scrolled && !translates ? '' : ("translateY(" + ((translates && -translates[i][j]) + (scrolled ? i % 2 ? scrolled : scrolled / 8 : 0)) + "px)")); }
                        ); }
                    );

                },

                events: ['scroll', 'resize']

            }

        ]

    };

    function positionedAbsolute(el) {
        return children(el).some(function (el) { return css(el, 'position') === 'absolute'; });
    }

    function getTranslates(rows, columns) {

        var rowHeights = rows.map(function (row) { return Math.max.apply(Math, row.map(function (el) { return el.offsetHeight; })); }
        );

        return columns.map(function (elements) {
            var prev = 0;
            return elements.map(function (element, row) { return prev += row
                    ? rowHeights[row - 1] - elements[row - 1].offsetHeight
                    : 0; }
            );
        });
    }

    function getMarginTop(nodes, cls) {

        var ref = nodes.filter(function (el) { return hasClass(el, cls); });
        var node = ref[0];

        return toFloat(node
            ? css(node, 'marginTop')
            : css(nodes[0], 'paddingLeft'));
    }

    function getColumnHeights(columns) {
        return columns.map(function (column) { return column.reduce(function (sum, el) { return sum + el.offsetHeight; }, 0); }
        );
    }

    // IE 11 fix (min-height on a flex container won't apply to its flex items)
    var FlexBug = isIE ? {

        props: {
            selMinHeight: String
        },

        data: {
            selMinHeight: false,
            forceHeight: false
        },

        computed: {

            elements: function(ref, $el) {
                var selMinHeight = ref.selMinHeight;

                return selMinHeight ? $$(selMinHeight, $el) : [$el];
            }

        },

        update: [

            {

                read: function() {
                    css(this.elements, 'height', '');
                },

                order: -5,

                events: ['resize']

            },

            {

                write: function() {
                    var this$1 = this;

                    this.elements.forEach(function (el) {
                        var height = toFloat(css(el, 'minHeight'));
                        if (height && (this$1.forceHeight || Math.round(height + boxModelAdjust(el, 'height', 'content-box')) >= el.offsetHeight)) {
                            css(el, 'height', height);
                        }
                    });
                },

                order: 5,

                events: ['resize']

            }

        ]

    } : {};

    var heightMatch = {

        mixins: [FlexBug],

        args: 'target',

        props: {
            target: String,
            row: Boolean
        },

        data: {
            target: '> *',
            row: true,
            forceHeight: true
        },

        computed: {

            elements: function(ref, $el) {
                var target = ref.target;

                return $$(target, $el);
            }

        },

        update: {

            read: function() {
                return {
                    rows: (this.row ? getRows(this.elements) : [this.elements]).map(match)
                };
            },

            write: function(ref) {
                var rows = ref.rows;

                rows.forEach(function (ref) {
                        var heights = ref.heights;
                        var elements = ref.elements;

                        return elements.forEach(function (el, i) { return css(el, 'minHeight', heights[i]); }
                    );
                }
                );
            },

            events: ['resize']

        }

    };

    function match(elements) {

        if (elements.length < 2) {
            return {heights: [''], elements: elements};
        }

        var heights = elements.map(getHeight);
        var max = Math.max.apply(Math, heights);
        var hasMinHeight = elements.some(function (el) { return el.style.minHeight; });
        var hasShrunk = elements.some(function (el, i) { return !el.style.minHeight && heights[i] < max; });

        if (hasMinHeight && hasShrunk) {
            css(elements, 'minHeight', '');
            heights = elements.map(getHeight);
            max = Math.max.apply(Math, heights);
        }

        heights = elements.map(function (el, i) { return heights[i] === max && toFloat(el.style.minHeight).toFixed(2) !== max.toFixed(2) ? '' : max; }
        );

        return {heights: heights, elements: elements};
    }

    function getHeight(element) {

        var style = false;
        if (!isVisible(element)) {
            style = element.style.display;
            css(element, 'display', 'block', 'important');
        }

        var height = dimensions(element).height - boxModelAdjust(element, 'height', 'content-box');

        if (style !== false) {
            css(element, 'display', style);
        }

        return height;
    }

    var heightViewport = {

        mixins: [FlexBug],

        props: {
            expand: Boolean,
            offsetTop: Boolean,
            offsetBottom: Boolean,
            minHeight: Number
        },

        data: {
            expand: false,
            offsetTop: false,
            offsetBottom: false,
            minHeight: 0
        },

        update: {

            read: function(ref) {
                var prev = ref.minHeight;


                if (!isVisible(this.$el)) {
                    return false;
                }

                var minHeight = '';
                var box = boxModelAdjust(this.$el, 'height', 'content-box');

                if (this.expand) {

                    minHeight = height(window) - (dimensions(document.documentElement).height - dimensions(this.$el).height) - box || '';

                } else {

                    // on mobile devices (iOS and Android) window.innerHeight !== 100vh
                    minHeight = 'calc(100vh';

                    if (this.offsetTop) {

                        var ref$1 = offset(this.$el);
                        var top = ref$1.top;
                        minHeight += top > 0 && top < height(window) / 2 ? (" - " + top + "px") : '';

                    }

                    if (this.offsetBottom === true) {

                        minHeight += " - " + (dimensions(this.$el.nextElementSibling).height) + "px";

                    } else if (isNumeric(this.offsetBottom)) {

                        minHeight += " - " + (this.offsetBottom) + "vh";

                    } else if (this.offsetBottom && endsWith(this.offsetBottom, 'px')) {

                        minHeight += " - " + (toFloat(this.offsetBottom)) + "px";

                    } else if (isString(this.offsetBottom)) {

                        minHeight += " - " + (dimensions(query(this.offsetBottom, this.$el)).height) + "px";

                    }

                    minHeight += (box ? (" - " + box + "px") : '') + ")";

                }

                return {minHeight: minHeight, prev: prev};
            },

            write: function(ref) {
                var minHeight = ref.minHeight;
                var prev = ref.prev;


                css(this.$el, {minHeight: minHeight});

                if (minHeight !== prev) {
                    this.$update(this.$el, 'resize');
                }

                if (this.minHeight && toFloat(css(this.$el, 'minHeight')) < this.minHeight) {
                    css(this.$el, 'minHeight', this.minHeight);
                }

            },

            events: ['resize']

        }

    };

    var SVG = {

        args: 'src',

        props: {
            id: Boolean,
            icon: String,
            src: String,
            style: String,
            width: Number,
            height: Number,
            ratio: Number,
            class: String,
            strokeAnimation: Boolean,
            focusable: Boolean, // IE 11
            attributes: 'list'
        },

        data: {
            ratio: 1,
            include: ['style', 'class', 'focusable'],
            class: '',
            strokeAnimation: false
        },

        beforeConnect: function() {
            this.class += ' uk-svg';
        },

        connected: function() {
            var this$1 = this;
            var assign;


            if (!this.icon && includes(this.src, '#')) {
                (assign = this.src.split('#'), this.src = assign[0], this.icon = assign[1]);
            }

            this.svg = this.getSvg().then(function (el) {

                if (this$1._connected) {

                    var svg = insertSVG(el, this$1.$el);

                    if (this$1.svgEl && svg !== this$1.svgEl) {
                        remove(this$1.svgEl);
                    }

                    this$1.applyAttributes(svg, el);
                    this$1.$emit();
                    return this$1.svgEl = svg;
                }

            }, noop);

        },

        disconnected: function() {
            var this$1 = this;


            this.svg.then(function (svg) {
                if (!this$1._connected) {

                    if (isVoidElement(this$1.$el)) {
                        this$1.$el.hidden = false;
                    }

                    remove(svg);
                    this$1.svgEl = null;
                }
            });

            this.svg = null;

        },

        update: {

            read: function() {
                return !!(this.strokeAnimation && this.svgEl && isVisible(this.svgEl));
            },

            write: function() {
                applyAnimation(this.svgEl);
            },

            type: ['resize']

        },

        methods: {

            getSvg: function() {
                var this$1 = this;

                return loadSVG(this.src).then(function (svg) { return parseSVG(svg, this$1.icon) || Promise.reject('SVG not found.'); }
                );
            },

            applyAttributes: function(el, ref) {
                var this$1 = this;


                for (var prop in this.$options.props) {
                    if (includes(this.include, prop) && (prop in this)) {
                        attr(el, prop, this[prop]);
                    }
                }

                for (var attribute in this.attributes) {
                    var ref$1 = this.attributes[attribute].split(':', 2);
                    var prop$1 = ref$1[0];
                    var value = ref$1[1];
                    attr(el, prop$1, value);
                }

                if (!this.id) {
                    removeAttr(el, 'id');
                }

                var props = ['width', 'height'];
                var dimensions = props.map(function (prop) { return this$1[prop]; });

                if (!dimensions.some(function (val) { return val; })) {
                    dimensions = props.map(function (prop) { return attr(ref, prop); });
                }

                var viewBox = attr(ref, 'viewBox');
                if (viewBox && !dimensions.some(function (val) { return val; })) {
                    dimensions = viewBox.split(' ').slice(2);
                }

                dimensions.forEach(function (val, i) { return attr(el, props[i], toFloat(val) * this$1.ratio || null); }
                );

            }

        }

    };

    var loadSVG = memoize(function (src) { return new Promise(function (resolve, reject) {

            if (!src) {
                reject();
                return;
            }

            if (startsWith(src, 'data:')) {
                resolve(decodeURIComponent(src.split(',')[1]));
            } else {

                ajax(src).then(
                    function (xhr) { return resolve(xhr.response); },
                    function () { return reject('SVG not found.'); }
                );

            }
        }); }
    );

    function parseSVG(svg, icon) {

        if (icon && includes(svg, '<symbol')) {
            svg = parseSymbols(svg, icon) || svg;
        }

        svg = $(svg.substr(svg.indexOf('<svg')));
        return svg && svg.hasChildNodes() && svg;
    }

    var symbolRe = /<symbol([^]*?id=(['"])(.+?)\2[^]*?<\/)symbol>/g;
    var symbols = {};

    function parseSymbols(svg, icon) {

        if (!symbols[svg]) {

            symbols[svg] = {};

            symbolRe.lastIndex = 0;

            var match;
            while ((match = symbolRe.exec(svg))) {
                symbols[svg][match[3]] = "<svg xmlns=\"http://www.w3.org/2000/svg\"" + (match[1]) + "svg>";
            }

        }

        return symbols[svg][icon];
    }

    function applyAnimation(el) {

        var length = getMaxPathLength(el);

        if (length) {
            el.style.setProperty('--uk-animation-stroke', length);
        }

    }

    function getMaxPathLength(el) {
        return Math.ceil(Math.max.apply(Math, [ 0 ].concat( $$('[stroke]', el).map(function (stroke) {
            try {
                return stroke.getTotalLength();
            } catch (e) {
                return 0;
            }
        }) )));
    }

    function insertSVG(el, root) {

        if (isVoidElement(root) || root.tagName === 'CANVAS') {

            root.hidden = true;

            var next = root.nextElementSibling;
            return equals(el, next)
                ? next
                : after(root, el);

        }

        var last = root.lastElementChild;
        return equals(el, last)
            ? last
            : append(root, el);
    }

    function equals(el, other) {
        return isSVG(el) && isSVG(other) && innerHTML(el) === innerHTML(other);
    }

    function isSVG(el) {
        return el && el.tagName === 'svg';
    }

    function innerHTML(el) {
        return (el.innerHTML || (new XMLSerializer()).serializeToString(el).replace(/<svg.*?>(.*?)<\/svg>/g, '$1')).replace(/\s/g, '');
    }

    var closeIcon = "<svg width=\"14\" height=\"14\" viewBox=\"0 0 14 14\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"1\" y1=\"1\" x2=\"13\" y2=\"13\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13\" y1=\"1\" x2=\"1\" y2=\"13\"/></svg>";

    var closeLarge = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"1\" y1=\"1\" x2=\"19\" y2=\"19\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" x1=\"19\" y1=\"1\" x2=\"1\" y2=\"19\"/></svg>";

    var marker = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"9\" y=\"4\" width=\"1\" height=\"11\"/><rect x=\"4\" y=\"9\" width=\"11\" height=\"1\"/></svg>";

    var navbarToggleIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"9\" width=\"20\" height=\"2\"/><rect y=\"3\" width=\"20\" height=\"2\"/><rect y=\"15\" width=\"20\" height=\"2\"/></svg>";

    var overlayIcon = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"19\" y=\"0\" width=\"1\" height=\"40\"/><rect x=\"0\" y=\"19\" width=\"40\" height=\"1\"/></svg>";

    var paginationNext = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 1 6 6 1 11\"/></svg>";

    var paginationPrevious = "<svg width=\"7\" height=\"12\" viewBox=\"0 0 7 12\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"6 1 1 6 6 11\"/></svg>";

    var searchIcon = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\"/></svg>";

    var searchLarge = "<svg width=\"40\" height=\"40\" viewBox=\"0 0 40 40\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" cx=\"17.5\" cy=\"17.5\" r=\"16.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.8\" x1=\"38\" y1=\"39\" x2=\"29\" y2=\"30\"/></svg>";

    var searchNavbar = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10.5\" cy=\"10.5\" r=\"9.5\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"23\" y1=\"23\" x2=\"17\" y2=\"17\"/></svg>";

    var slidenavNext = "<svg width=\"14\" height=\"24\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"1.225,23 12.775,12 1.225,1 \"/></svg>";

    var slidenavNextLarge = "<svg width=\"25\" height=\"40\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"4.002,38.547 22.527,20.024 4,1.5 \"/></svg>";

    var slidenavPrevious = "<svg width=\"14\" height=\"24\" viewBox=\"0 0 14 24\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" points=\"12.775,1 1.225,12 12.775,23 \"/></svg>";

    var slidenavPreviousLarge = "<svg width=\"25\" height=\"40\" viewBox=\"0 0 25 40\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"2\" points=\"20.527,1.5 2,20.024 20.525,38.547 \"/></svg>";

    var spinner = "<svg width=\"30\" height=\"30\" viewBox=\"0 0 30 30\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" cx=\"15\" cy=\"15\" r=\"14\"/></svg>";

    var totop = "<svg width=\"18\" height=\"10\" viewBox=\"0 0 18 10\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" points=\"1 9 9 1 17 9 \"/></svg>";

    var icons = {
        spinner: spinner,
        totop: totop,
        marker: marker,
        'close-icon': closeIcon,
        'close-large': closeLarge,
        'navbar-toggle-icon': navbarToggleIcon,
        'overlay-icon': overlayIcon,
        'pagination-next': paginationNext,
        'pagination-previous': paginationPrevious,
        'search-icon': searchIcon,
        'search-large': searchLarge,
        'search-navbar': searchNavbar,
        'slidenav-next': slidenavNext,
        'slidenav-next-large': slidenavNextLarge,
        'slidenav-previous': slidenavPrevious,
        'slidenav-previous-large': slidenavPreviousLarge
    };

    var Icon = {

        install: install,

        extends: SVG,

        args: 'icon',

        props: ['icon'],

        data: {
            include: ['focusable']
        },

        isIcon: true,

        beforeConnect: function() {
            addClass(this.$el, 'uk-icon');
        },

        methods: {

            getSvg: function() {

                var icon = getIcon(this.icon);

                if (!icon) {
                    return Promise.reject('Icon not found.');
                }

                return Promise.resolve(icon);
            }

        }

    };

    var IconComponent = {

        args: false,

        extends: Icon,

        data: function (vm) { return ({
            icon: hyphenate(vm.constructor.options.name)
        }); },

        beforeConnect: function() {
            addClass(this.$el, this.$name);
        }

    };

    var Slidenav = {

        extends: IconComponent,

        beforeConnect: function() {
            addClass(this.$el, 'uk-slidenav');
        },

        computed: {

            icon: function(ref, $el) {
                var icon = ref.icon;

                return hasClass($el, 'uk-slidenav-large')
                    ? (icon + "-large")
                    : icon;
            }

        }

    };

    var Search = {

        extends: IconComponent,

        computed: {

            icon: function(ref, $el) {
                var icon = ref.icon;

                return hasClass($el, 'uk-search-icon') && parents($el, '.uk-search-large').length
                    ? 'search-large'
                    : parents($el, '.uk-search-navbar').length
                        ? 'search-navbar'
                        : icon;
            }

        }

    };

    var Close = {

        extends: IconComponent,

        computed: {

            icon: function() {
                return ("close-" + (hasClass(this.$el, 'uk-close-large') ? 'large' : 'icon'));
            }

        }

    };

    var Spinner = {

        extends: IconComponent,

        connected: function() {
            var this$1 = this;

            this.svg.then(function (svg) { return svg && this$1.ratio !== 1 && css($('circle', svg), 'strokeWidth', 1 / this$1.ratio); });
        }

    };

    var parsed = {};
    function install(UIkit) {
        UIkit.icon.add = function (name, svg) {
            var obj;


            var added = isString(name) ? (( obj = {}, obj[name] = svg, obj )) : name;
            each(added, function (svg, name) {
                icons[name] = svg;
                delete parsed[name];
            });

            if (UIkit._initialized) {
                apply(document.body, function (el) { return each(UIkit.getComponents(el), function (cmp) {
                        cmp.$options.isIcon && cmp.icon in added && cmp.$reset();
                    }); }
                );
            }
        };
    }

    function getIcon(icon) {

        if (!icons[icon]) {
            return null;
        }

        if (!parsed[icon]) {
            parsed[icon] = $((icons[applyRtl(icon)] || icons[icon]).trim());
        }

        return parsed[icon].cloneNode(true);
    }

    function applyRtl(icon) {
        return isRtl ? swap(swap(icon, 'left', 'right'), 'previous', 'next') : icon;
    }

    var img = {

        args: 'dataSrc',

        props: {
            dataSrc: String,
            dataSrcset: Boolean,
            sizes: String,
            width: Number,
            height: Number,
            offsetTop: String,
            offsetLeft: String,
            target: String
        },

        data: {
            dataSrc: '',
            dataSrcset: false,
            sizes: false,
            width: false,
            height: false,
            offsetTop: '50vh',
            offsetLeft: '50vw',
            target: false
        },

        computed: {

            cacheKey: function(ref) {
                var dataSrc = ref.dataSrc;

                return ((this.$name) + "." + dataSrc);
            },

            width: function(ref) {
                var width = ref.width;
                var dataWidth = ref.dataWidth;

                return width || dataWidth;
            },

            height: function(ref) {
                var height = ref.height;
                var dataHeight = ref.dataHeight;

                return height || dataHeight;
            },

            sizes: function(ref) {
                var sizes = ref.sizes;
                var dataSizes = ref.dataSizes;

                return sizes || dataSizes;
            },

            isImg: function(_, $el) {
                return isImg($el);
            },

            target: {

                get: function(ref) {
                    var target = ref.target;

                    return [this.$el ].concat( queryAll(target, this.$el));
                },

                watch: function() {
                    this.observe();
                }

            },

            offsetTop: function(ref) {
                var offsetTop = ref.offsetTop;

                return toPx(offsetTop, 'height');
            },

            offsetLeft: function(ref) {
                var offsetLeft = ref.offsetLeft;

                return toPx(offsetLeft, 'width');
            }

        },

        connected: function() {

            if (!window.IntersectionObserver) {
                setSrcAttrs(this.$el, this.dataSrc, this.dataSrcset, this.sizes);
                return;
            }

            if (storage[this.cacheKey]) {
                setSrcAttrs(this.$el, storage[this.cacheKey], this.dataSrcset, this.sizes);
            } else if (this.isImg && this.width && this.height) {
                setSrcAttrs(this.$el, getPlaceholderImage(this.width, this.height, this.sizes));
            }

            this.observer = new IntersectionObserver(this.load, {
                rootMargin: ((this.offsetTop) + "px " + (this.offsetLeft) + "px")
            });

            requestAnimationFrame(this.observe);

        },

        disconnected: function() {
            this.observer && this.observer.disconnect();
        },

        update: {

            read: function(ref) {
                var this$1 = this;
                var image = ref.image;


                if (!this.observer) {
                    return false;
                }

                if (!image && document.readyState === 'complete') {
                    this.load(this.observer.takeRecords());
                }

                if (this.isImg) {
                    return false;
                }

                image && image.then(function (img) { return img && img.currentSrc !== '' && setSrcAttrs(this$1.$el, currentSrc(img)); });

            },

            write: function(data) {

                if (this.dataSrcset && window.devicePixelRatio !== 1) {

                    var bgSize = css(this.$el, 'backgroundSize');
                    if (bgSize.match(/^(auto\s?)+$/) || toFloat(bgSize) === data.bgSize) {
                        data.bgSize = getSourceSize(this.dataSrcset, this.sizes);
                        css(this.$el, 'backgroundSize', ((data.bgSize) + "px"));
                    }

                }

            },

            events: ['resize']

        },

        methods: {

            load: function(entries) {
                var this$1 = this;


                // Old chromium based browsers (UC Browser) did not implement `isIntersecting`
                if (!entries.some(function (entry) { return isUndefined(entry.isIntersecting) || entry.isIntersecting; })) {
                    return;
                }

                this._data.image = getImage(this.dataSrc, this.dataSrcset, this.sizes).then(function (img) {

                    setSrcAttrs(this$1.$el, currentSrc(img), img.srcset, img.sizes);
                    storage[this$1.cacheKey] = currentSrc(img);
                    return img;

                }, function (e) { return trigger(this$1.$el, new e.constructor(e.type, e)); });

                this.observer.disconnect();
            },

            observe: function() {
                var this$1 = this;

                if (this._connected && !this._data.image) {
                    this.target.forEach(function (el) { return this$1.observer.observe(el); });
                }
            }

        }

    };

    function setSrcAttrs(el, src, srcset, sizes) {

        if (isImg(el)) {
            sizes && (el.sizes = sizes);
            srcset && (el.srcset = srcset);
            src && (el.src = src);
        } else if (src) {

            var change = !includes(el.style.backgroundImage, src);
            if (change) {
                css(el, 'backgroundImage', ("url(" + (escape(src)) + ")"));
                trigger(el, createEvent('load', false));
            }

        }

    }

    function getPlaceholderImage(width, height, sizes) {
        var assign;


        if (sizes) {
            ((assign = Dimensions.ratio({width: width, height: height}, 'width', toPx(sizesToPixel(sizes))), width = assign.width, height = assign.height));
        }

        return ("data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"" + width + "\" height=\"" + height + "\"></svg>");
    }

    var sizesRe = /\s*(.*?)\s*(\w+|calc\(.*?\))\s*(?:,|$)/g;
    function sizesToPixel(sizes) {
        var matches;

        sizesRe.lastIndex = 0;

        while ((matches = sizesRe.exec(sizes))) {
            if (!matches[1] || window.matchMedia(matches[1]).matches) {
                matches = evaluateSize(matches[2]);
                break;
            }
        }

        return matches || '100vw';
    }

    var sizeRe = /\d+(?:\w+|%)/g;
    var additionRe = /[+-]?(\d+)/g;
    function evaluateSize(size) {
        return startsWith(size, 'calc')
            ? size
                .slice(5, -1)
                .replace(sizeRe, function (size) { return toPx(size); })
                .replace(/ /g, '')
                .match(additionRe)
                .reduce(function (a, b) { return a + +b; }, 0)
            : size;
    }

    var srcSetRe = /\s+\d+w\s*(?:,|$)/g;
    function getSourceSize(srcset, sizes) {
        var srcSize = toPx(sizesToPixel(sizes));
        var descriptors = (srcset.match(srcSetRe) || []).map(toFloat).sort(function (a, b) { return a - b; });

        return descriptors.filter(function (size) { return size >= srcSize; })[0] || descriptors.pop() || '';
    }

    function isImg(el) {
        return el.tagName === 'IMG';
    }

    function currentSrc(el) {
        return el.currentSrc || el.src;
    }

    var key = '__test__';
    var storage;

    // workaround for Safari's private browsing mode and accessing sessionStorage in Blink
    try {
        storage = window.sessionStorage || {};
        storage[key] = 1;
        delete storage[key];
    } catch (e) {
        storage = {};
    }

    var Media = {

        props: {
            media: Boolean
        },

        data: {
            media: false
        },

        computed: {

            matchMedia: function() {
                var media = toMedia(this.media);
                return !media || window.matchMedia(media).matches;
            }

        }

    };

    function toMedia(value) {

        if (isString(value)) {
            if (value[0] === '@') {
                var name = "breakpoint-" + (value.substr(1));
                value = toFloat(getCssVar(name));
            } else if (isNaN(value)) {
                return value;
            }
        }

        return value && !isNaN(value) ? ("(min-width: " + value + "px)") : false;
    }

    var leader = {

        mixins: [Class, Media],

        props: {
            fill: String
        },

        data: {
            fill: '',
            clsWrapper: 'uk-leader-fill',
            clsHide: 'uk-leader-hide',
            attrFill: 'data-fill'
        },

        computed: {

            fill: function(ref) {
                var fill = ref.fill;

                return fill || getCssVar('leader-fill-content');
            }

        },

        connected: function() {
            var assign;

            (assign = wrapInner(this.$el, ("<span class=\"" + (this.clsWrapper) + "\">")), this.wrapper = assign[0]);
        },

        disconnected: function() {
            unwrap(this.wrapper.childNodes);
        },

        update: {

            read: function(ref) {
                var changed = ref.changed;
                var width = ref.width;


                var prev = width;

                width = Math.floor(this.$el.offsetWidth / 2);

                return {
                    width: width,
                    fill: this.fill,
                    changed: changed || prev !== width,
                    hide: !this.matchMedia
                };
            },

            write: function(data) {

                toggleClass(this.wrapper, this.clsHide, data.hide);

                if (data.changed) {
                    data.changed = false;
                    attr(this.wrapper, this.attrFill, new Array(data.width).join(data.fill));
                }

            },

            events: ['resize']

        }

    };

    var Container = {

        props: {
            container: Boolean
        },

        data: {
            container: true
        },

        computed: {

            container: function(ref) {
                var container = ref.container;

                return container === true && this.$container || container && $(container);
            }

        }

    };

    var active$1 = [];

    var Modal = {

        mixins: [Class, Container, Togglable],

        props: {
            selPanel: String,
            selClose: String,
            escClose: Boolean,
            bgClose: Boolean,
            stack: Boolean
        },

        data: {
            cls: 'uk-open',
            escClose: true,
            bgClose: true,
            overlay: true,
            stack: false
        },

        computed: {

            panel: function(ref, $el) {
                var selPanel = ref.selPanel;

                return $(selPanel, $el);
            },

            transitionElement: function() {
                return this.panel;
            },

            bgClose: function(ref) {
                var bgClose = ref.bgClose;

                return bgClose && this.panel;
            }

        },

        beforeDisconnect: function() {
            if (this.isToggled()) {
                this.toggleElement(this.$el, false, false);
            }
        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return this.selClose;
                },

                handler: function(e) {
                    e.preventDefault();
                    this.hide();
                }

            },

            {

                name: 'toggle',

                self: true,

                handler: function(e) {

                    if (e.defaultPrevented) {
                        return;
                    }

                    e.preventDefault();

                    if (this.isToggled() === includes(active$1, this)) {
                        this.toggle();
                    }
                }

            },

            {
                name: 'beforeshow',

                self: true,

                handler: function(e) {

                    if (includes(active$1, this)) {
                        return false;
                    }

                    if (!this.stack && active$1.length) {
                        Promise.all(active$1.map(function (modal) { return modal.hide(); })).then(this.show);
                        e.preventDefault();
                    } else {
                        active$1.push(this);
                    }
                }

            },

            {

                name: 'show',

                self: true,

                handler: function() {
                    var this$1 = this;


                    var docEl = document.documentElement;

                    if (width(window) > docEl.clientWidth && this.overlay) {
                        css(document.body, 'overflowY', 'scroll');
                    }

                    if (this.stack) {
                        css(this.$el, 'zIndex', toFloat(css(this.$el, 'zIndex')) + active$1.length);
                    }

                    addClass(docEl, this.clsPage);

                    if (this.bgClose) {
                        once(this.$el, 'hide', on(document, pointerDown, function (ref) {
                            var target = ref.target;


                            if (last(active$1) !== this$1 || this$1.overlay && !within(target, this$1.$el) || within(target, this$1.panel)) {
                                return;
                            }

                            once(document, (pointerUp + " " + pointerCancel + " scroll"), function (ref) {
                                var defaultPrevented = ref.defaultPrevented;
                                var type = ref.type;
                                var newTarget = ref.target;

                                if (!defaultPrevented && type === pointerUp && target === newTarget) {
                                    this$1.hide();
                                }
                            }, true);

                        }), {self: true});
                    }

                    if (this.escClose) {
                        once(this.$el, 'hide', on(document, 'keydown', function (e) {
                            if (e.keyCode === 27 && last(active$1) === this$1) {
                                this$1.hide();
                            }
                        }), {self: true});
                    }
                }

            },

            {

                name: 'hidden',

                self: true,

                handler: function() {
                    var this$1 = this;


                    if (includes(active$1, this)) {
                        active$1.splice(active$1.indexOf(this), 1);
                    }

                    if (!active$1.length) {
                        css(document.body, 'overflowY', '');
                    }

                    css(this.$el, 'zIndex', '');

                    if (!active$1.some(function (modal) { return modal.clsPage === this$1.clsPage; })) {
                        removeClass(document.documentElement, this.clsPage);
                    }

                }

            }

        ],

        methods: {

            toggle: function() {
                return this.isToggled() ? this.hide() : this.show();
            },

            show: function() {
                var this$1 = this;

                if (this.container && parent(this.$el) !== this.container) {
                    append(this.container, this.$el);
                    return new Promise(function (resolve) { return requestAnimationFrame(function () { return this$1.show().then(resolve); }
                        ); }
                    );
                }

                return this.toggleElement(this.$el, true, animate$1(this));
            },

            hide: function() {
                return this.toggleElement(this.$el, false, animate$1(this));
            }

        }

    };

    function animate$1(ref) {
        var transitionElement = ref.transitionElement;
        var _toggle = ref._toggle;

        return function (el, show) { return new Promise(function (resolve, reject) { return once(el, 'show hide', function () {
                    el._reject && el._reject();
                    el._reject = reject;

                    _toggle(el, show);

                    var off = once(transitionElement, 'transitionstart', function () {
                        once(transitionElement, 'transitionend transitioncancel', resolve, {self: true});
                        clearTimeout(timer);
                    }, {self: true});

                    var timer = setTimeout(function () {
                        off();
                        resolve();
                    }, toMs(css(transitionElement, 'transitionDuration')));

                }); }
            ).then(function () { return delete el._reject; }); };
    }

    var modal = {

        install: install$1,

        mixins: [Modal],

        data: {
            clsPage: 'uk-modal-page',
            selPanel: '.uk-modal-dialog',
            selClose: '.uk-modal-close, .uk-modal-close-default, .uk-modal-close-outside, .uk-modal-close-full'
        },

        events: [

            {
                name: 'show',

                self: true,

                handler: function() {

                    if (hasClass(this.panel, 'uk-margin-auto-vertical')) {
                        addClass(this.$el, 'uk-flex');
                    } else {
                        css(this.$el, 'display', 'block');
                    }

                    height(this.$el); // force reflow
                }
            },

            {
                name: 'hidden',

                self: true,

                handler: function() {

                    css(this.$el, 'display', '');
                    removeClass(this.$el, 'uk-flex');

                }
            }

        ]

    };

    function install$1(ref) {
        var modal = ref.modal;


        modal.dialog = function (content, options) {

            var dialog = modal(
                ("<div class=\"uk-modal\"> <div class=\"uk-modal-dialog\">" + content + "</div> </div>"),
                options
            );

            dialog.show();

            on(dialog.$el, 'hidden', function () { return Promise.resolve().then(function () { return dialog.$destroy(true); }
                ); }, {self: true}
            );

            return dialog;
        };

        modal.alert = function (message, options) {
            return openDialog(
                function (ref) {
                    var labels = ref.labels;

                    return ("<div class=\"uk-modal-body\">" + (isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-primary uk-modal-close\" autofocus>" + (labels.ok) + "</button> </div>");
            },
                options,
                function (deferred) { return deferred.resolve(); }
            );
        };

        modal.confirm = function (message, options) {
            return openDialog(
                function (ref) {
                    var labels = ref.labels;

                    return ("<form> <div class=\"uk-modal-body\">" + (isString(message) ? message : html(message)) + "</div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" + (labels.cancel) + "</button> <button class=\"uk-button uk-button-primary\" autofocus>" + (labels.ok) + "</button> </div> </form>");
            },
                options,
                function (deferred) { return deferred.reject(); }
            );
        };

        modal.prompt = function (message, value, options) {
            return openDialog(
                function (ref) {
                    var labels = ref.labels;

                    return ("<form class=\"uk-form-stacked\"> <div class=\"uk-modal-body\"> <label>" + (isString(message) ? message : html(message)) + "</label> <input class=\"uk-input\" value=\"" + (value || '') + "\" autofocus> </div> <div class=\"uk-modal-footer uk-text-right\"> <button class=\"uk-button uk-button-default uk-modal-close\" type=\"button\">" + (labels.cancel) + "</button> <button class=\"uk-button uk-button-primary\">" + (labels.ok) + "</button> </div> </form>");
            },
                options,
                function (deferred) { return deferred.resolve(null); },
                function (dialog) { return $('input', dialog.$el).value; }
            );
        };

        modal.labels = {
            ok: 'Ok',
            cancel: 'Cancel'
        };

        function openDialog(tmpl, options, hideFn, submitFn) {

            options = assign({bgClose: false, escClose: true, labels: modal.labels}, options);

            var dialog = modal.dialog(tmpl(options), options);
            var deferred = new Deferred();

            var resolved = false;

            on(dialog.$el, 'submit', 'form', function (e) {
                e.preventDefault();
                deferred.resolve(submitFn && submitFn(dialog));
                resolved = true;
                dialog.hide();
            });

            on(dialog.$el, 'hide', function () { return !resolved && hideFn(deferred); });

            deferred.promise.dialog = dialog;

            return deferred.promise;
        }

    }

    var nav = {

        extends: Accordion,

        data: {
            targets: '> .uk-parent',
            toggle: '> a',
            content: '> ul'
        }

    };

    var navbar = {

        mixins: [Class, FlexBug],

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
            dropbarAnchor: Boolean,
            duration: Number
        },

        data: {
            dropdown: '.uk-navbar-nav > li',
            align: !isRtl ? 'left' : 'right',
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
            forceHeight: true,
            selMinHeight: '.uk-navbar-nav > li > a, .uk-navbar-item, .uk-navbar-toggle'
        },

        computed: {

            boundary: function(ref, $el) {
                var boundary = ref.boundary;
                var boundaryAlign = ref.boundaryAlign;

                return (boundary === true || boundaryAlign) ? $el : boundary;
            },

            dropbarAnchor: function(ref, $el) {
                var dropbarAnchor = ref.dropbarAnchor;

                return query(dropbarAnchor, $el);
            },

            pos: function(ref) {
                var align = ref.align;

                return ("bottom-" + align);
            },

            dropbar: {

                get: function(ref) {
                    var dropbar = ref.dropbar;


                    if (!dropbar) {
                        return null;
                    }

                    dropbar = this._dropbar || query(dropbar, this.$el) || $('+ .uk-navbar-dropbar', this.$el);

                    return dropbar ? dropbar : (this._dropbar = $('<div></div>'));

                },

                watch: function(dropbar) {
                    addClass(dropbar, 'uk-navbar-dropbar');
                },

                immediate: true

            },

            dropdowns: {

                get: function(ref, $el) {
                    var dropdown = ref.dropdown;
                    var clsDrop = ref.clsDrop;

                    return $$((dropdown + " ." + clsDrop), $el);
                },

                watch: function(dropdowns) {
                    var this$1 = this;

                    this.$create(
                        'drop',
                        dropdowns.filter(function (el) { return !this$1.getDropdown(el); }),
                        assign({}, this.$props, {boundary: this.boundary, pos: this.pos, offset: this.dropbar || this.offset})
                    );
                },

                immediate: true

            }

        },

        disconnected: function() {
            this.dropbar && remove(this.dropbar);
            delete this._dropbar;
        },

        events: [

            {
                name: 'mouseover',

                delegate: function() {
                    return this.dropdown;
                },

                handler: function(ref) {
                    var current = ref.current;

                    var active = this.getActive();
                    if (active && active.toggle && !within(active.toggle.$el, current) && !active.tracker.movesTo(active.$el)) {
                        active.hide(false);
                    }
                }

            },

            {
                name: 'mouseleave',

                el: function() {
                    return this.dropbar;
                },

                handler: function() {
                    var active = this.getActive();

                    if (active && !this.dropdowns.some(function (el) { return matches(el, ':hover'); })) {
                        active.hide();
                    }
                }
            },

            {
                name: 'beforeshow',

                capture: true,

                filter: function() {
                    return this.dropbar;
                },

                handler: function() {

                    if (!parent(this.dropbar)) {
                        after(this.dropbarAnchor || this.$el, this.dropbar);
                    }

                }
            },

            {
                name: 'show',

                filter: function() {
                    return this.dropbar;
                },

                handler: function(_, ref) {
                    var $el = ref.$el;
                    var dir = ref.dir;

                    if (!hasClass($el, this.clsDrop)) {
                        return;
                    }

                    if (this.dropbarMode === 'slide') {
                        addClass(this.dropbar, 'uk-navbar-dropbar-slide');
                    }

                    this.clsDrop && addClass($el, ((this.clsDrop) + "-dropbar"));

                    if (dir === 'bottom') {
                        this.transitionTo($el.offsetHeight + toFloat(css($el, 'marginTop')) + toFloat(css($el, 'marginBottom')), $el);
                    }
                }
            },

            {
                name: 'beforehide',

                filter: function() {
                    return this.dropbar;
                },

                handler: function(e, ref) {
                    var $el = ref.$el;


                    var active = this.getActive();

                    if (matches(this.dropbar, ':hover') && active && active.$el === $el) {
                        e.preventDefault();
                    }
                }
            },

            {
                name: 'hide',

                filter: function() {
                    return this.dropbar;
                },

                handler: function(_, ref) {
                    var $el = ref.$el;

                    if (!hasClass($el, this.clsDrop)) {
                        return;
                    }

                    var active = this.getActive();

                    if (!active || active && active.$el === $el) {
                        this.transitionTo(0);
                    }
                }
            }

        ],

        methods: {

            getActive: function() {
                var ref = this.dropdowns.map(this.getDropdown).filter(function (drop) { return drop && drop.isActive(); });
                var active = ref[0];
                return active && includes(active.mode, 'hover') && within(active.toggle.$el, this.$el) && active;
            },

            transitionTo: function(newHeight, el) {
                var this$1 = this;


                var ref = this;
                var dropbar = ref.dropbar;
                var oldHeight = isVisible(dropbar) ? height(dropbar) : 0;

                el = oldHeight < newHeight && el;

                css(el, 'clip', ("rect(0," + (el.offsetWidth) + "px," + oldHeight + "px,0)"));

                height(dropbar, oldHeight);

                Transition.cancel([el, dropbar]);
                return Promise.all([
                    Transition.start(dropbar, {height: newHeight}, this.duration),
                    Transition.start(el, {clip: ("rect(0," + (el.offsetWidth) + "px," + newHeight + "px,0)")}, this.duration)
                ])
                    .catch(noop)
                    .then(function () {
                        css(el, {clip: ''});
                        this$1.$update(dropbar);
                    });
            },

            getDropdown: function(el) {
                return this.$getComponent(el, 'drop') || this.$getComponent(el, 'dropdown');
            }

        }

    };

    var offcanvas = {

        mixins: [Modal],

        args: 'mode',

        props: {
            mode: String,
            flip: Boolean,
            overlay: Boolean
        },

        data: {
            mode: 'slide',
            flip: false,
            overlay: false,
            clsPage: 'uk-offcanvas-page',
            clsContainer: 'uk-offcanvas-container',
            selPanel: '.uk-offcanvas-bar',
            clsFlip: 'uk-offcanvas-flip',
            clsContainerAnimation: 'uk-offcanvas-container-animation',
            clsSidebarAnimation: 'uk-offcanvas-bar-animation',
            clsMode: 'uk-offcanvas',
            clsOverlay: 'uk-offcanvas-overlay',
            selClose: '.uk-offcanvas-close',
            container: false
        },

        computed: {

            clsFlip: function(ref) {
                var flip = ref.flip;
                var clsFlip = ref.clsFlip;

                return flip ? clsFlip : '';
            },

            clsOverlay: function(ref) {
                var overlay = ref.overlay;
                var clsOverlay = ref.clsOverlay;

                return overlay ? clsOverlay : '';
            },

            clsMode: function(ref) {
                var mode = ref.mode;
                var clsMode = ref.clsMode;

                return (clsMode + "-" + mode);
            },

            clsSidebarAnimation: function(ref) {
                var mode = ref.mode;
                var clsSidebarAnimation = ref.clsSidebarAnimation;

                return mode === 'none' || mode === 'reveal' ? '' : clsSidebarAnimation;
            },

            clsContainerAnimation: function(ref) {
                var mode = ref.mode;
                var clsContainerAnimation = ref.clsContainerAnimation;

                return mode !== 'push' && mode !== 'reveal' ? '' : clsContainerAnimation;
            },

            transitionElement: function(ref) {
                var mode = ref.mode;

                return mode === 'reveal' ? parent(this.panel) : this.panel;
            }

        },

        update: {

            read: function() {
                if (this.isToggled() && !isVisible(this.$el)) {
                    this.hide();
                }
            },

            events: ['resize']

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return 'a[href^="#"]';
                },

                handler: function(ref) {
                    var hash = ref.current.hash;
                    var defaultPrevented = ref.defaultPrevented;

                    if (!defaultPrevented && hash && $(hash, document.body)) {
                        this.hide();
                    }
                }

            },

            {
                name: 'touchstart',

                passive: true,

                el: function() {
                    return this.panel;
                },

                handler: function(ref) {
                    var targetTouches = ref.targetTouches;


                    if (targetTouches.length === 1) {
                        this.clientY = targetTouches[0].clientY;
                    }

                }

            },

            {
                name: 'touchmove',

                self: true,
                passive: false,

                filter: function() {
                    return this.overlay;
                },

                handler: function(e) {
                    e.cancelable && e.preventDefault();
                }

            },

            {
                name: 'touchmove',

                passive: false,

                el: function() {
                    return this.panel;
                },

                handler: function(e) {

                    if (e.targetTouches.length !== 1) {
                        return;
                    }

                    var clientY = event.targetTouches[0].clientY - this.clientY;
                    var ref = this.panel;
                    var scrollTop = ref.scrollTop;
                    var scrollHeight = ref.scrollHeight;
                    var clientHeight = ref.clientHeight;

                    if (clientHeight >= scrollHeight
                        || scrollTop === 0 && clientY > 0
                        || scrollHeight - scrollTop <= clientHeight && clientY < 0
                    ) {
                        e.cancelable && e.preventDefault();
                    }

                }

            },

            {
                name: 'show',

                self: true,

                handler: function() {

                    if (this.mode === 'reveal' && !hasClass(parent(this.panel), this.clsMode)) {
                        wrapAll(this.panel, '<div>');
                        addClass(parent(this.panel), this.clsMode);
                    }

                    css(document.documentElement, 'overflowY', this.overlay ? 'hidden' : '');
                    addClass(document.body, this.clsContainer, this.clsFlip);
                    css(document.body, 'touch-action', 'pan-y pinch-zoom');
                    css(this.$el, 'display', 'block');
                    addClass(this.$el, this.clsOverlay);
                    addClass(this.panel, this.clsSidebarAnimation, this.mode !== 'reveal' ? this.clsMode : '');

                    height(document.body); // force reflow
                    addClass(document.body, this.clsContainerAnimation);

                    this.clsContainerAnimation && suppressUserScale();


                }
            },

            {
                name: 'hide',

                self: true,

                handler: function() {
                    removeClass(document.body, this.clsContainerAnimation);
                    css(document.body, 'touch-action', '');
                }
            },

            {
                name: 'hidden',

                self: true,

                handler: function() {

                    this.clsContainerAnimation && resumeUserScale();

                    if (this.mode === 'reveal') {
                        unwrap(this.panel);
                    }

                    removeClass(this.panel, this.clsSidebarAnimation, this.clsMode);
                    removeClass(this.$el, this.clsOverlay);
                    css(this.$el, 'display', '');
                    removeClass(document.body, this.clsContainer, this.clsFlip);

                    css(document.documentElement, 'overflowY', '');

                }
            },

            {
                name: 'swipeLeft swipeRight',

                handler: function(e) {

                    if (this.isToggled() && endsWith(e.type, 'Left') ^ this.flip) {
                        this.hide();
                    }

                }
            }

        ]

    };

    // Chrome in responsive mode zooms page upon opening offcanvas
    function suppressUserScale() {
        getViewport$1().content += ',user-scalable=0';
    }

    function resumeUserScale() {
        var viewport = getViewport$1();
        viewport.content = viewport.content.replace(/,user-scalable=0$/, '');
    }

    function getViewport$1() {
        return $('meta[name="viewport"]', document.head) || append(document.head, '<meta name="viewport">');
    }

    var overflowAuto = {

        mixins: [Class],

        props: {
            selContainer: String,
            selContent: String
        },

        data: {
            selContainer: '.uk-modal',
            selContent: '.uk-modal-dialog'
        },

        computed: {

            container: function(ref, $el) {
                var selContainer = ref.selContainer;

                return closest($el, selContainer);
            },

            content: function(ref, $el) {
                var selContent = ref.selContent;

                return closest($el, selContent);
            }

        },

        connected: function() {
            css(this.$el, 'minHeight', 150);
        },

        update: {

            read: function() {

                if (!this.content || !this.container || !isVisible(this.$el)) {
                    return false;
                }

                return {
                    current: toFloat(css(this.$el, 'maxHeight')),
                    max: Math.max(150, height(this.container) - (dimensions(this.content).height - height(this.$el)))
                };
            },

            write: function(ref) {
                var current = ref.current;
                var max = ref.max;

                css(this.$el, 'maxHeight', max);
                if (Math.round(current) !== Math.round(max)) {
                    trigger(this.$el, 'resize');
                }
            },

            events: ['resize']

        }

    };

    var responsive = {

        props: ['width', 'height'],

        connected: function() {
            addClass(this.$el, 'uk-responsive-width');
        },

        update: {

            read: function() {
                return isVisible(this.$el) && this.width && this.height
                    ? {width: width(parent(this.$el)), height: this.height}
                    : false;
            },

            write: function(dim) {
                height(this.$el, Dimensions.contain({
                    height: this.height,
                    width: this.width
                }, dim).height);
            },

            events: ['resize']

        }

    };

    var scroll = {

        props: {
            offset: Number
        },

        data: {
            offset: 0
        },

        methods: {

            scrollTo: function(el) {
                var this$1 = this;


                el = el && $(el) || document.body;

                if (trigger(this.$el, 'beforescroll', [this, el])) {
                    scrollIntoView(el, {offset: this.offset}).then(function () { return trigger(this$1.$el, 'scrolled', [this$1, el]); }
                    );
                }

            }

        },

        events: {

            click: function(e) {

                if (e.defaultPrevented) {
                    return;
                }

                e.preventDefault();
                this.scrollTo(("#" + (escape(decodeURIComponent((this.$el.hash || '').substr(1))))));
            }

        }

    };

    var stateKey$1 = '_ukScrollspy';
    var scrollspy = {

        args: 'cls',

        props: {
            cls: String,
            target: String,
            hidden: Boolean,
            offsetTop: Number,
            offsetLeft: Number,
            repeat: Boolean,
            delay: Number
        },

        data: function () { return ({
            cls: false,
            target: false,
            hidden: true,
            offsetTop: 0,
            offsetLeft: 0,
            repeat: false,
            delay: 0,
            inViewClass: 'uk-scrollspy-inview'
        }); },

        computed: {

            elements: {

                get: function(ref, $el) {
                    var target = ref.target;

                    return target ? $$(target, $el) : [$el];
                },

                watch: function(elements) {
                    if (this.hidden) {
                        css(filter(elements, (":not(." + (this.inViewClass) + ")")), 'visibility', 'hidden');
                    }
                },

                immediate: true

            }

        },

        disconnected: function() {
            var this$1 = this;

            this.elements.forEach(function (el) {
                removeClass(el, this$1.inViewClass, el[stateKey$1] ? el[stateKey$1].cls : '');
                delete el[stateKey$1];
            });
        },

        update: [

            {

                read: function(ref) {
                    var this$1 = this;
                    var update = ref.update;


                    if (!update) {
                        return;
                    }

                    this.elements.forEach(function (el) {

                        if (!el[stateKey$1]) {
                            el[stateKey$1] = {cls: data(el, 'uk-scrollspy-class') || this$1.cls};
                        }

                        el[stateKey$1].show = isInView(el, this$1.offsetTop, this$1.offsetLeft);

                    });

                },

                write: function(data) {
                    var this$1 = this;


                    // Let child components be applied at least once first
                    if (!data.update) {
                        this.$emit();
                        return data.update = true;
                    }

                    this.elements.forEach(function (el) {

                        var state = el[stateKey$1];
                        var toggle = function (inview) {

                            css(el, 'visibility', !inview && this$1.hidden ? 'hidden' : '');

                            toggleClass(el, this$1.inViewClass, inview);
                            toggleClass(el, state.cls);

                            trigger(el, inview ? 'inview' : 'outview');

                            state.inview = inview;

                            this$1.$update(el);

                        };

                        if (state.show && !state.inview && !state.queued) {

                            state.queued = true;

                            data.promise = (data.promise || Promise.resolve()).then(function () { return new Promise(function (resolve) { return setTimeout(resolve, this$1.delay); }
                                ); }
                            ).then(function () {
                                toggle(true);
                                setTimeout(function () {
                                    state.queued = false;
                                    this$1.$emit();
                                }, 300);
                            });

                        } else if (!state.show && state.inview && !state.queued && this$1.repeat) {

                            toggle(false);

                        }

                    });

                },

                events: ['scroll', 'resize']

            }

        ]

    };

    var scrollspyNav = {

        props: {
            cls: String,
            closest: String,
            scroll: Boolean,
            overflow: Boolean,
            offset: Number
        },

        data: {
            cls: 'uk-active',
            closest: false,
            scroll: false,
            overflow: true,
            offset: 0
        },

        computed: {

            links: {

                get: function(_, $el) {
                    return $$('a[href^="#"]', $el).filter(function (el) { return el.hash; });
                },

                watch: function(links) {
                    if (this.scroll) {
                        this.$create('scroll', links, {offset: this.offset || 0});
                    }
                },

                immediate: true

            },

            targets: function() {
                return $$(this.links.map(function (el) { return escape(el.hash).substr(1); }).join(','));
            },

            elements: function(ref) {
                var selector = ref.closest;

                return closest(this.links, selector || '*');
            }

        },

        update: [

            {

                read: function() {
                    var this$1 = this;


                    var ref = this.targets;
                    var length = ref.length;

                    if (!length || !isVisible(this.$el)) {
                        return false;
                    }

                    var ref$1 = scrollParents(this.targets, /auto|scroll/, true);
                    var scrollElement = ref$1[0];
                    var scrollTop = scrollElement.scrollTop;
                    var scrollHeight = scrollElement.scrollHeight;
                    var max = scrollHeight - getViewportClientHeight(scrollElement);
                    var active = false;

                    if (scrollTop === max) {
                        active = length - 1;
                    } else {

                        this.targets.every(function (el, i) {
                            if (offset(el).top - offset(getViewport(scrollElement)).top - this$1.offset <= 0) {
                                active = i;
                                return true;
                            }
                        });

                        if (active === false && this.overflow) {
                            active = 0;
                        }
                    }

                    return {active: active};
                },

                write: function(ref) {
                    var active = ref.active;


                    this.links.forEach(function (el) { return el.blur(); });
                    removeClass(this.elements, this.cls);

                    if (active !== false) {
                        trigger(this.$el, 'active', [active, addClass(this.elements[active], this.cls)]);
                    }

                },

                events: ['scroll', 'resize']

            }

        ]

    };

    var sticky = {

        mixins: [Class, Media],

        props: {
            top: null,
            bottom: Boolean,
            offset: String,
            animation: String,
            clsActive: String,
            clsInactive: String,
            clsFixed: String,
            clsBelow: String,
            selTarget: String,
            widthElement: Boolean,
            showOnUp: Boolean,
            targetOffset: Number
        },

        data: {
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
            targetOffset: false
        },

        computed: {

            offset: function(ref) {
                var offset = ref.offset;

                return toPx(offset);
            },

            selTarget: function(ref, $el) {
                var selTarget = ref.selTarget;

                return selTarget && $(selTarget, $el) || $el;
            },

            widthElement: function(ref, $el) {
                var widthElement = ref.widthElement;

                return query(widthElement, $el) || this.placeholder;
            },

            isActive: {

                get: function() {
                    return hasClass(this.selTarget, this.clsActive);
                },

                set: function(value) {
                    if (value && !this.isActive) {
                        replaceClass(this.selTarget, this.clsInactive, this.clsActive);
                        trigger(this.$el, 'active');
                    } else if (!value && !hasClass(this.selTarget, this.clsInactive)) {
                        replaceClass(this.selTarget, this.clsActive, this.clsInactive);
                        trigger(this.$el, 'inactive');
                    }
                }

            }

        },

        connected: function() {
            this.placeholder = $('+ .uk-sticky-placeholder', this.$el) || $('<div class="uk-sticky-placeholder"></div>');
            this.isFixed = false;
            this.isActive = false;
        },

        disconnected: function() {

            if (this.isFixed) {
                this.hide();
                removeClass(this.selTarget, this.clsInactive);
            }

            remove(this.placeholder);
            this.placeholder = null;
            this.widthElement = null;
        },

        events: [

            {

                name: 'load hashchange popstate',

                el: function() {
                    return window;
                },

                handler: function() {
                    var this$1 = this;


                    if (!(this.targetOffset !== false && location.hash && window.pageYOffset > 0)) {
                        return;
                    }

                    var target = $(location.hash);

                    if (target) {
                        fastdom.read(function () {

                            var ref = offset(target);
                            var top = ref.top;
                            var elTop = offset(this$1.$el).top;
                            var elHeight = this$1.$el.offsetHeight;

                            if (this$1.isFixed && elTop + elHeight >= top && elTop <= top + target.offsetHeight) {
                                scrollTop(window, top - elHeight - (isNumeric(this$1.targetOffset) ? this$1.targetOffset : 0) - this$1.offset);
                            }

                        });
                    }

                }

            }

        ],

        update: [

            {

                read: function(ref, types) {
                    var height = ref.height;


                    this.inactive = !this.matchMedia || !isVisible(this.$el);

                    if (this.inactive) {
                        return false;
                    }

                    if (this.isActive && types.has('resize')) {
                        this.hide();
                        height = this.$el.offsetHeight;
                        this.show();
                    }

                    height = !this.isActive ? this.$el.offsetHeight : height;

                    this.topOffset = offset(this.isFixed ? this.placeholder : this.$el).top;
                    this.bottomOffset = this.topOffset + height;

                    var bottom = parseProp('bottom', this);

                    this.top = Math.max(toFloat(parseProp('top', this)), this.topOffset) - this.offset;
                    this.bottom = bottom && bottom - this.$el.offsetHeight;
                    this.width = dimensions(isVisible(this.widthElement) ? this.widthElement : this.$el).width;

                    return {
                        height: height,
                        top: offsetPosition(this.placeholder)[0],
                        margins: css(this.$el, ['marginTop', 'marginBottom', 'marginLeft', 'marginRight'])
                    };
                },

                write: function(ref) {
                    var height = ref.height;
                    var margins = ref.margins;


                    var ref$1 = this;
                    var placeholder = ref$1.placeholder;

                    css(placeholder, assign({height: height}, margins));

                    if (!within(placeholder, document)) {
                        after(this.$el, placeholder);
                        placeholder.hidden = true;
                    }

                    this.isActive = !!this.isActive; // force self-assign

                },

                events: ['resize']

            },

            {

                read: function(ref) {
                    var scroll = ref.scroll; if ( scroll === void 0 ) scroll = 0;


                    this.scroll = window.pageYOffset;

                    return {
                        dir: scroll <= this.scroll ? 'down' : 'up',
                        scroll: this.scroll
                    };
                },

                write: function(data, types) {
                    var this$1 = this;


                    var now = Date.now();
                    var isScrollUpdate = types.has('scroll');
                    var initTimestamp = data.initTimestamp; if ( initTimestamp === void 0 ) initTimestamp = 0;
                    var dir = data.dir;
                    var lastDir = data.lastDir;
                    var lastScroll = data.lastScroll;
                    var scroll = data.scroll;
                    var top = data.top;

                    data.lastScroll = scroll;

                    if (scroll < 0 || scroll === lastScroll && isScrollUpdate || this.showOnUp && !isScrollUpdate && !this.isFixed) {
                        return;
                    }

                    if (now - initTimestamp > 300 || dir !== lastDir) {
                        data.initScroll = scroll;
                        data.initTimestamp = now;
                    }

                    data.lastDir = dir;

                    if (this.showOnUp && !this.isFixed && Math.abs(data.initScroll - scroll) <= 30 && Math.abs(lastScroll - scroll) <= 10) {
                        return;
                    }

                    if (this.inactive
                        || scroll < this.top
                        || this.showOnUp && (scroll <= this.top || dir === 'down' && isScrollUpdate || dir === 'up' && !this.isFixed && scroll <= this.bottomOffset)
                    ) {

                        if (!this.isFixed) {

                            if (Animation.inProgress(this.$el) && top > scroll) {
                                Animation.cancel(this.$el);
                                this.hide();
                            }

                            return;
                        }

                        this.isFixed = false;

                        if (this.animation && scroll > this.topOffset) {
                            Animation.cancel(this.$el);
                            Animation.out(this.$el, this.animation).then(function () { return this$1.hide(); }, noop);
                        } else {
                            this.hide();
                        }

                    } else if (this.isFixed) {

                        this.update();

                    } else if (this.animation) {

                        Animation.cancel(this.$el);
                        this.show();
                        Animation.in(this.$el, this.animation).catch(noop);

                    } else {
                        this.show();
                    }

                },

                events: ['resize', 'scroll']

            }

        ],

        methods: {

            show: function() {

                this.isFixed = true;
                this.update();
                this.placeholder.hidden = false;

            },

            hide: function() {

                this.isActive = false;
                removeClass(this.$el, this.clsFixed, this.clsBelow);
                css(this.$el, {position: '', top: '', width: ''});
                this.placeholder.hidden = true;

            },

            update: function() {

                var active = this.top !== 0 || this.scroll > this.top;
                var top = Math.max(0, this.offset);

                if (isNumeric(this.bottom) && this.scroll > this.bottom - this.offset) {
                    top = this.bottom - this.scroll;
                }

                css(this.$el, {
                    position: 'fixed',
                    top: (top + "px"),
                    width: this.width
                });

                this.isActive = active;
                toggleClass(this.$el, this.clsBelow, this.scroll > this.bottomOffset);
                addClass(this.$el, this.clsFixed);

            }

        }

    };

    function parseProp(prop, ref) {
        var $props = ref.$props;
        var $el = ref.$el;
        var propOffset = ref[(prop + "Offset")];


        var value = $props[prop];

        if (!value) {
            return;
        }

        if (isString(value) && value.match(/^-?\d/)) {

            return propOffset + toPx(value);

        } else {

            return offset(value === true ? parent($el) : query(value, $el)).bottom;

        }
    }

    var Switcher = {

        mixins: [Togglable],

        args: 'connect',

        props: {
            connect: String,
            toggle: String,
            active: Number,
            swiping: Boolean
        },

        data: {
            connect: '~.uk-switcher',
            toggle: '> * > :first-child',
            active: 0,
            swiping: true,
            cls: 'uk-active',
            attrItem: 'uk-switcher-item'
        },

        computed: {

            connects: {

                get: function(ref, $el) {
                    var connect = ref.connect;

                    return queryAll(connect, $el);
                },

                watch: function(connects) {
                    var this$1 = this;


                    if (this.swiping) {
                        css(connects, 'touch-action', 'pan-y pinch-zoom');
                    }

                    var index = this.index();
                    this.connects.forEach(function (el) { return children(el).forEach(function (child, i) { return toggleClass(child, this$1.cls, i === index); }
                        ); }
                    );

                },

                immediate: true

            },

            toggles: {

                get: function(ref, $el) {
                    var toggle = ref.toggle;

                    return $$(toggle, $el).filter(function (el) { return !matches(el, '.uk-disabled *, .uk-disabled, [disabled]'); });
                },

                watch: function(toggles) {
                    var active = this.index();
                    this.show(~active ? active : toggles[this.active] || toggles[0]);
                },

                immediate: true

            },

            children: function() {
                var this$1 = this;

                return children(this.$el).filter(function (child) { return this$1.toggles.some(function (toggle) { return within(toggle, child); }); });
            }

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return this.toggle;
                },

                handler: function(e) {
                    e.preventDefault();
                    this.show(e.current);
                }

            },

            {
                name: 'click',

                el: function() {
                    return this.connects;
                },

                delegate: function() {
                    return ("[" + (this.attrItem) + "],[data-" + (this.attrItem) + "]");
                },

                handler: function(e) {
                    e.preventDefault();
                    this.show(data(e.current, this.attrItem));
                }
            },

            {
                name: 'swipeRight swipeLeft',

                filter: function() {
                    return this.swiping;
                },

                el: function() {
                    return this.connects;
                },

                handler: function(ref) {
                    var type = ref.type;

                    this.show(endsWith(type, 'Left') ? 'next' : 'previous');
                }
            }

        ],

        methods: {

            index: function() {
                var this$1 = this;

                return findIndex(this.children, function (el) { return hasClass(el, this$1.cls); });
            },

            show: function(item) {
                var this$1 = this;


                var prev = this.index();
                var next = getIndex(
                    this.children[getIndex(item, this.toggles, prev)],
                    children(this.$el)
                );

                if (prev === next) {
                    return;
                }

                this.children.forEach(function (child, i) {
                    toggleClass(child, this$1.cls, next === i);
                    attr(this$1.toggles[i], 'aria-expanded', next === i);
                });

                this.connects.forEach(function (ref) {
                        var children = ref.children;

                        return this$1.toggleElement(toNodes(children).filter(function (child) { return hasClass(child, this$1.cls); }
                    ), false, prev >= 0).then(function () { return this$1.toggleElement(children[next], true, prev >= 0); }
                    );
                }
                );
            }

        }

    };

    var tab = {

        mixins: [Class],

        extends: Switcher,

        props: {
            media: Boolean
        },

        data: {
            media: 960,
            attrItem: 'uk-tab-item'
        },

        connected: function() {

            var cls = hasClass(this.$el, 'uk-tab-left')
                ? 'uk-tab-left'
                : hasClass(this.$el, 'uk-tab-right')
                    ? 'uk-tab-right'
                    : false;

            if (cls) {
                this.$create('toggle', this.$el, {cls: cls, mode: 'media', media: this.media});
            }
        }

    };

    var toggle = {

        mixins: [Media, Togglable],

        args: 'target',

        props: {
            href: String,
            target: null,
            mode: 'list',
            queued: Boolean
        },

        data: {
            href: false,
            target: false,
            mode: 'click',
            queued: true
        },

        computed: {

            target: {

                get: function(ref, $el) {
                    var href = ref.href;
                    var target = ref.target;

                    target = queryAll(target || href, $el);
                    return target.length && target || [$el];
                },

                watch: function() {
                    this.updateAria();
                },

                immediate: true

            }

        },

        events: [

            {

                name: (pointerEnter + " " + pointerLeave),

                filter: function() {
                    return includes(this.mode, 'hover');
                },

                handler: function(e) {
                    if (!isTouch(e)) {
                        this.toggle(("toggle" + (e.type === pointerEnter ? 'show' : 'hide')));
                    }
                }

            },

            {

                name: 'click',

                filter: function() {
                    return includes(this.mode, 'click') || hasTouch && includes(this.mode, 'hover');
                },

                handler: function(e) {

                    var link;
                    if (closest(e.target, 'a[href="#"], a[href=""]')
                        || (link = closest(e.target, 'a[href]')) && (
                            !isToggled(this.target, this.cls)
                            || link.hash && matches(this.target, link.hash)
                        )
                    ) {
                        e.preventDefault();
                    }

                    this.toggle();
                }

            },

            {

                name: 'toggled',

                self: true,

                el: function() {
                    return this.target;
                },

                handler: function(e, toggled) {
                    this.updateAria(toggled);
                }
            }

        ],

        update: {

            read: function() {
                return includes(this.mode, 'media') && this.media
                    ? {match: this.matchMedia}
                    : false;
            },

            write: function(ref) {
                var match = ref.match;


                var toggled = this.isToggled(this.target);
                if (match ? !toggled : toggled) {
                    this.toggle();
                }

            },

            events: ['resize']

        },

        methods: {

            toggle: function(type) {
                var this$1 = this;


                if (!trigger(this.target, type || 'toggle', [this])) {
                    return;
                }

                if (!this.queued) {
                    return this.toggleElement(this.target);
                }

                var leaving = this.target.filter(function (el) { return hasClass(el, this$1.clsLeave); });

                if (leaving.length) {
                    this.target.forEach(function (el) {
                        var isLeaving = includes(leaving, el);
                        this$1.toggleElement(el, isLeaving, isLeaving);
                    });
                    return;
                }

                var toggled = this.target.filter(this.isToggled);
                this.toggleElement(toggled, false).then(function () { return this$1.toggleElement(this$1.target.filter(function (el) { return !includes(toggled, el); }
                    ), true); }
                );

            },

            updateAria: function(toggled) {
                attr(this.$el, 'aria-expanded', isBoolean(toggled)
                    ? toggled
                    : isToggled(this.target, this.cls)
                );
            }

        }

    };

    // TODO improve isToggled handling
    function isToggled(target, cls) {
        return cls
            ? hasClass(target, cls.split(' ')[0])
            : isVisible(target);
    }

    var components = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Accordion: Accordion,
        Alert: alert,
        Cover: cover,
        Drop: drop,
        Dropdown: drop,
        FormCustom: formCustom,
        Gif: gif,
        Grid: grid,
        HeightMatch: heightMatch,
        HeightViewport: heightViewport,
        Icon: Icon,
        Img: img,
        Leader: leader,
        Margin: Margin,
        Modal: modal,
        Nav: nav,
        Navbar: navbar,
        Offcanvas: offcanvas,
        OverflowAuto: overflowAuto,
        Responsive: responsive,
        Scroll: scroll,
        Scrollspy: scrollspy,
        ScrollspyNav: scrollspyNav,
        Sticky: sticky,
        Svg: SVG,
        Switcher: Switcher,
        Tab: tab,
        Toggle: toggle,
        Video: Video,
        Close: Close,
        Spinner: Spinner,
        SlidenavNext: Slidenav,
        SlidenavPrevious: Slidenav,
        SearchIcon: Search,
        Marker: IconComponent,
        NavbarToggleIcon: IconComponent,
        OverlayIcon: IconComponent,
        PaginationNext: IconComponent,
        PaginationPrevious: IconComponent,
        Totop: IconComponent
    });

    // register components
    each(components, function (component, name) { return UIkit.component(name, component); }
    );

    // core functionality
    UIkit.use(Core);

    boot(UIkit);

    var countdown = {

        mixins: [Class],

        props: {
            date: String,
            clsWrapper: String
        },

        data: {
            date: '',
            clsWrapper: '.uk-countdown-%unit%'
        },

        computed: {

            date: function(ref) {
                var date = ref.date;

                return Date.parse(date);
            },

            days: function(ref, $el) {
                var clsWrapper = ref.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'days'), $el);
            },

            hours: function(ref, $el) {
                var clsWrapper = ref.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'hours'), $el);
            },

            minutes: function(ref, $el) {
                var clsWrapper = ref.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'minutes'), $el);
            },

            seconds: function(ref, $el) {
                var clsWrapper = ref.clsWrapper;

                return $(clsWrapper.replace('%unit%', 'seconds'), $el);
            },

            units: function() {
                var this$1 = this;

                return ['days', 'hours', 'minutes', 'seconds'].filter(function (unit) { return this$1[unit]; });
            }

        },

        connected: function() {
            this.start();
        },

        disconnected: function() {
            var this$1 = this;

            this.stop();
            this.units.forEach(function (unit) { return empty(this$1[unit]); });
        },

        events: [

            {

                name: 'visibilitychange',

                el: function() {
                    return document;
                },

                handler: function() {
                    if (document.hidden) {
                        this.stop();
                    } else {
                        this.start();
                    }
                }

            }

        ],

        update: {

            write: function() {
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

                    var el = this$1[unit];
                    if (el.textContent !== digits) {
                        digits = digits.split('');

                        if (digits.length !== el.children.length) {
                            html(el, digits.map(function () { return '<span></span>'; }).join(''));
                        }

                        digits.forEach(function (digit, i) { return el.children[i].textContent = digit; });
                    }

                });

            }

        },

        methods: {

            start: function() {

                this.stop();

                if (this.date && this.units.length) {
                    this.$update();
                    this.timer = setInterval(this.$update, 1000);
                }

            },

            stop: function() {

                if (this.timer) {
                    clearInterval(this.timer);
                    this.timer = null;
                }

            }

        }

    };

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

    var clsLeave = 'uk-transition-leave';
    var clsEnter = 'uk-transition-enter';

    function fade(action, target, duration, stagger) {
        if ( stagger === void 0 ) stagger = 0;


        var index = transitionIndex(target, true);
        var propsIn = {opacity: 1};
        var propsOut = {opacity: 0};

        var wrapIndexFn = function (fn) { return function () { return index === transitionIndex(target) ? fn() : Promise.reject(); }; };

        var leaveFn = wrapIndexFn(function () {

            addClass(target, clsLeave);

            return Promise.all(getTransitionNodes(target).map(function (child, i) { return new Promise(function (resolve) { return setTimeout(function () { return Transition.start(child, propsOut, duration / 2, 'ease').then(resolve); }, i * stagger); }
                ); }
            )).then(function () { return removeClass(target, clsLeave); });

        });

        var enterFn = wrapIndexFn(function () {

            var oldHeight = height(target);

            addClass(target, clsEnter);
            action();

            css(children(target), {opacity: 0});

            // Ensure UIkit updates have propagated
            return new Promise(function (resolve) { return requestAnimationFrame(function () {

                    var nodes = children(target);
                    var newHeight = height(target);

                    // Ensure Grid cells do not stretch when height is applied
                    css(target, 'alignContent', 'flex-start');
                    height(target, oldHeight);

                    var transitionNodes = getTransitionNodes(target);
                    css(nodes, propsOut);

                    var transitions = transitionNodes.map(function (child, i) { return new Promise(function (resolve) { return setTimeout(function () { return Transition.start(child, propsIn, duration / 2, 'ease').then(resolve); }, i * stagger); }
                        ); }
                    );

                    if (oldHeight !== newHeight) {
                        transitions.push(Transition.start(target, {height: newHeight}, duration / 2 + transitionNodes.length * stagger, 'ease'));
                    }

                    Promise.all(transitions).then(function () {
                        removeClass(target, clsEnter);
                        if (index === transitionIndex(target)) {
                            css(target, {height: '', alignContent: ''});
                            css(nodes, {opacity: ''});
                            delete target.dataset.transition;
                        }
                        resolve();
                    });
                }); }
            );
        });

        return hasClass(target, clsLeave)
            ? waitTransitionend(target).then(enterFn)
            : hasClass(target, clsEnter)
                ? waitTransitionend(target).then(leaveFn).then(enterFn)
                : leaveFn().then(enterFn);
    }

    function transitionIndex(target, next) {
        if (next) {
            target.dataset.transition = 1 + transitionIndex(target);
        }

        return toNumber(target.dataset.transition) || 0;
    }

    function waitTransitionend(target) {
        return Promise.all(children(target).filter(Transition.inProgress).map(function (el) { return new Promise(function (resolve) { return once(el, 'transitionend transitioncanceled', resolve); }); }
        ));
    }

    function getTransitionNodes(target) {
        return getRows(children(target)).reduce(function (nodes, row) { return nodes.concat(sortBy(row.filter(function (el) { return isInView(el); }), 'offsetLeft')); }, []);
    }

    function slide (action, target, duration) {

        return new Promise(function (resolve) { return requestAnimationFrame(function () {

                var nodes = children(target);

                // Get current state
                var currentProps = nodes.map(function (el) { return getProps(el, true); });
                var targetProps = css(target, ['height', 'padding']);

                // Cancel previous animations
                Transition.cancel(target);
                nodes.forEach(Transition.cancel);
                reset(target);

                // Adding, sorting, removing nodes
                action();

                // Find new nodes
                nodes = nodes.concat(children(target).filter(function (el) { return !includes(nodes, el); }));

                // Wait for update to propagate
                Promise.resolve().then(function () {

                    // Force update
                    fastdom.flush();

                    // Get new state
                    var targetPropsTo = css(target, ['height', 'padding']);
                    var ref = getTransitionProps(target, nodes, currentProps);
                    var propsTo = ref[0];
                    var propsFrom = ref[1];

                    // Reset to previous state
                    nodes.forEach(function (el, i) { return propsFrom[i] && css(el, propsFrom[i]); });
                    css(target, assign({display: 'block'}, targetProps));

                    // Start transitions on next frame
                    requestAnimationFrame(function () {

                        var transitions = nodes.map(function (el, i) { return parent(el) === target && Transition.start(el, propsTo[i], duration, 'ease'); }
                            ).concat(Transition.start(target, targetPropsTo, duration, 'ease'));

                        Promise.all(transitions).then(function () {
                            nodes.forEach(function (el, i) { return parent(el) === target && css(el, 'display', propsTo[i].opacity === 0 ? 'none' : ''); });
                            reset(target);
                        }, noop).then(resolve);

                    });
                });
            }); });
    }

    function getProps(el, opacity) {

        var zIndex = css(el, 'zIndex');

        return isVisible(el)
            ? assign({
                display: '',
                opacity: opacity ? css(el, 'opacity') : '0',
                pointerEvents: 'none',
                position: 'absolute',
                zIndex: zIndex === 'auto' ? index(el) : zIndex
            }, getPositionWithMargin(el))
            : false;
    }

    function getTransitionProps(target, nodes, currentProps) {

        var propsTo = nodes.map(function (el, i) { return parent(el) && i in currentProps
                ? currentProps[i]
                ? isVisible(el)
                    ? getPositionWithMargin(el)
                    : {opacity: 0}
                : {opacity: isVisible(el) ? 1 : 0}
                : false; });

        var propsFrom = propsTo.map(function (props, i) {

            var from = parent(nodes[i]) === target && (currentProps[i] || getProps(nodes[i]));

            if (!from) {
                return false;
            }

            if (!props) {
                delete from.opacity;
            } else if (!('opacity' in props)) {
                var opacity = from.opacity;

                if (opacity % 1) {
                    props.opacity = 1;
                } else {
                    delete from.opacity;
                }
            }

            return from;
        });

        return [propsTo, propsFrom];
    }

    function reset(el) {
        css(el.children, {
            height: '',
            left: '',
            opacity: '',
            pointerEvents: '',
            position: '',
            top: '',
            marginTop: '',
            marginLeft: '',
            transform: '',
            width: '',
            zIndex: ''
        });
        css(el, {height: '', display: '', padding: ''});
    }

    function getPositionWithMargin(el) {
        var ref = offset(el);
        var height = ref.height;
        var width = ref.width;
        var ref$1 = position(el);
        var top = ref$1.top;
        var left = ref$1.left;
        var ref$2 = css(el, ['marginTop', 'marginLeft']);
        var marginLeft = ref$2.marginLeft;
        var marginTop = ref$2.marginTop;

        return {top: top, left: left, height: height, width: width, marginLeft: marginLeft, marginTop: marginTop, transform: ''};
    }

    var Animate = {

        props: {
            duration: Number,
            animation: String
        },

        data: {
            duration: 150,
            animation: 'slide'
        },

        methods: {

            animate: function(action, target) {
                var this$1 = this;
                if ( target === void 0 ) target = this.$el;


                var name = this.animation;
                var animationFn = name === 'fade'
                    ? fade
                    : name === 'delayed-fade'
                        ? function () {
                            var args = [], len = arguments.length;
                            while ( len-- ) args[ len ] = arguments[ len ];

                            return fade.apply(void 0, args.concat( [40] ));
                }
                        : slide;

                return animationFn(action, target, this.duration)
                    .then(function () { return this$1.$update(target, 'resize'); }, noop);
            }

        }
    };

    var filter$1 = {

        mixins: [Animate],

        args: 'target',

        props: {
            target: Boolean,
            selActive: Boolean
        },

        data: {
            target: null,
            selActive: false,
            attrItem: 'uk-filter-control',
            cls: 'uk-active',
            duration: 250
        },

        computed: {

            toggles: {

                get: function(ref, $el) {
                    var attrItem = ref.attrItem;

                    return $$(("[" + attrItem + "],[data-" + attrItem + "]"), $el);
                },

                watch: function() {
                    var this$1 = this;


                    this.updateState();

                    if (this.selActive !== false) {
                        var actives = $$(this.selActive, this.$el);
                        this.toggles.forEach(function (el) { return toggleClass(el, this$1.cls, includes(actives, el)); });
                    }

                },

                immediate: true

            },

            children: {

                get: function(ref, $el) {
                    var target = ref.target;

                    return $$((target + " > *"), $el);
                },

                watch: function(list, old) {
                    if (old && !isEqualList(list, old)) {
                        this.updateState();
                    }
                },

                immediate: true

            }

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return ("[" + (this.attrItem) + "],[data-" + (this.attrItem) + "]");
                },

                handler: function(e) {

                    e.preventDefault();
                    this.apply(e.current);

                }

            }

        ],

        methods: {

            apply: function(el) {
                var prevState = this.getState();
                var newState = mergeState(el, this.attrItem, this.getState());

                if (!isEqualState(prevState, newState)) {
                    this.setState(newState);
                }
            },

            getState: function() {
                var this$1 = this;

                return this.toggles
                    .filter(function (item) { return hasClass(item, this$1.cls); })
                    .reduce(function (state, el) { return mergeState(el, this$1.attrItem, state); }, {filter: {'': ''}, sort: []});
            },

            setState: function(state, animate) {
                var this$1 = this;
                if ( animate === void 0 ) animate = true;


                state = assign({filter: {'': ''}, sort: []}, state);

                trigger(this.$el, 'beforeFilter', [this, state]);

                this.toggles.forEach(function (el) { return toggleClass(el, this$1.cls, !!matchFilter(el, this$1.attrItem, state)); });

                Promise.all($$(this.target, this.$el).map(function (target) {
                    var filterFn = function () {
                        applyState(state, target, children(target));
                        this$1.$update(this$1.$el);
                    };
                    return animate ? this$1.animate(filterFn, target) : filterFn();
                })).then(function () { return trigger(this$1.$el, 'afterFilter', [this$1]); });

            },

            updateState: function() {
                var this$1 = this;

                fastdom.write(function () { return this$1.setState(this$1.getState(), false); });
            }

        }

    };

    function getFilter(el, attr) {
        return parseOptions(data(el, attr), ['filter']);
    }

    function isEqualState(stateA, stateB) {
        return ['filter', 'sort'].every(function (prop) { return isEqual(stateA[prop], stateB[prop]); });
    }

    function applyState(state, target, children) {
        var selector = getSelector(state);

        children.forEach(function (el) { return css(el, 'display', selector && !matches(el, selector) ? 'none' : ''); });

        var ref = state.sort;
        var sort = ref[0];
        var order = ref[1];

        if (sort) {
            var sorted = sortItems(children, sort, order);
            if (!isEqual(sorted, children)) {
                append(target, sorted);
            }
        }
    }

    function mergeState(el, attr, state) {

        var filterBy = getFilter(el, attr);
        var filter = filterBy.filter;
        var group = filterBy.group;
        var sort = filterBy.sort;
        var order = filterBy.order; if ( order === void 0 ) order = 'asc';

        if (filter || isUndefined(sort)) {

            if (group) {

                if (filter) {
                    delete state.filter[''];
                    state.filter[group] = filter;
                } else {
                    delete state.filter[group];

                    if (isEmpty(state.filter) || '' in state.filter) {
                        state.filter = {'': filter || ''};
                    }

                }

            } else {
                state.filter = {'': filter || ''};
            }

        }

        if (!isUndefined(sort)) {
            state.sort = [sort, order];
        }

        return state;
    }

    function matchFilter(el, attr, ref) {
        var stateFilter = ref.filter; if ( stateFilter === void 0 ) stateFilter = {'': ''};
        var ref_sort = ref.sort;
        var stateSort = ref_sort[0];
        var stateOrder = ref_sort[1];


        var ref$1 = getFilter(el, attr);
        var filter = ref$1.filter; if ( filter === void 0 ) filter = '';
        var group = ref$1.group; if ( group === void 0 ) group = '';
        var sort = ref$1.sort;
        var order = ref$1.order; if ( order === void 0 ) order = 'asc';

        return isUndefined(sort)
            ? group in stateFilter && filter === stateFilter[group]
                || !filter && group && !(group in stateFilter) && !stateFilter['']
            : stateSort === sort && stateOrder === order;
    }

    function isEqualList(listA, listB) {
        return listA.length === listB.length
            && listA.every(function (el) { return ~listB.indexOf(el); });
    }

    function getSelector(ref) {
        var filter = ref.filter;

        var selector = '';
        each(filter, function (value) { return selector += value || ''; });
        return selector;
    }

    function sortItems(nodes, sort, order) {
        return assign([], nodes).sort(function (a, b) { return data(a, sort).localeCompare(data(b, sort), undefined, {numeric: true}) * (order === 'asc' || -1); });
    }

    var Animations = {

        slide: {

            show: function(dir) {
                return [
                    {transform: translate(dir * -100)},
                    {transform: translate()}
                ];
            },

            percent: function(current) {
                return translated(current);
            },

            translate: function(percent, dir) {
                return [
                    {transform: translate(dir * -100 * percent)},
                    {transform: translate(dir * 100 * (1 - percent))}
                ];
            }

        }

    };

    function translated(el) {
        return Math.abs(css(el, 'transform').split(',')[4] / el.offsetWidth) || 0;
    }

    function translate(value, unit) {
        if ( value === void 0 ) value = 0;
        if ( unit === void 0 ) unit = '%';

        value += value ? unit : '';
        return isIE ? ("translateX(" + value + ")") : ("translate3d(" + value + ", 0, 0)"); // currently not translate3d in IE, translate3d within translate3d does not work while transitioning
    }

    function scale3d(value) {
        return ("scale3d(" + value + ", " + value + ", 1)");
    }

    var Animations$1 = assign({}, Animations, {

        fade: {

            show: function() {
                return [
                    {opacity: 0},
                    {opacity: 1}
                ];
            },

            percent: function(current) {
                return 1 - css(current, 'opacity');
            },

            translate: function(percent) {
                return [
                    {opacity: 1 - percent},
                    {opacity: percent}
                ];
            }

        },

        scale: {

            show: function() {
                return [
                    {opacity: 0, transform: scale3d(1 - .2)},
                    {opacity: 1, transform: scale3d(1)}
                ];
            },

            percent: function(current) {
                return 1 - css(current, 'opacity');
            },

            translate: function(percent) {
                return [
                    {opacity: 1 - percent, transform: scale3d(1 - .2 * percent)},
                    {opacity: percent, transform: scale3d(1 - .2 + .2 * percent)}
                ];
            }

        }

    });

    function Transitioner(prev, next, dir, ref) {
        var animation = ref.animation;
        var easing = ref.easing;


        var percent = animation.percent;
        var translate = animation.translate;
        var show = animation.show; if ( show === void 0 ) show = noop;
        var props = show(dir);
        var deferred = new Deferred();

        return {

            dir: dir,

            show: function(duration, percent, linear) {
                var this$1 = this;
                if ( percent === void 0 ) percent = 0;


                var timing = linear ? 'linear' : easing;
                duration -= Math.round(duration * clamp(percent, -1, 1));

                this.translate(percent);

                triggerUpdate(next, 'itemin', {percent: percent, duration: duration, timing: timing, dir: dir});
                triggerUpdate(prev, 'itemout', {percent: 1 - percent, duration: duration, timing: timing, dir: dir});

                Promise.all([
                    Transition.start(next, props[1], duration, timing),
                    Transition.start(prev, props[0], duration, timing)
                ]).then(function () {
                    this$1.reset();
                    deferred.resolve();
                }, noop);

                return deferred.promise;
            },

            cancel: function() {
                Transition.cancel([next, prev]);
            },

            reset: function() {
                for (var prop in props[0]) {
                    css([next, prev], prop, '');
                }
            },

            forward: function(duration, percent) {
                if ( percent === void 0 ) percent = this.percent();

                Transition.cancel([next, prev]);
                return this.show(duration, percent, true);
            },

            translate: function(percent) {

                this.reset();

                var props = translate(percent, dir);
                css(next, props[1]);
                css(prev, props[0]);
                triggerUpdate(next, 'itemtranslatein', {percent: percent, dir: dir});
                triggerUpdate(prev, 'itemtranslateout', {percent: 1 - percent, dir: dir});

            },

            percent: function() {
                return percent(prev || next, next, dir);
            },

            getDistance: function() {
                return prev && prev.offsetWidth;
            }

        };

    }

    function triggerUpdate(el, type, data) {
        trigger(el, createEvent(type, false, false, data));
    }

    var SliderAutoplay = {

        props: {
            autoplay: Boolean,
            autoplayInterval: Number,
            pauseOnHover: Boolean
        },

        data: {
            autoplay: false,
            autoplayInterval: 7000,
            pauseOnHover: true
        },

        connected: function() {
            this.autoplay && this.startAutoplay();
        },

        disconnected: function() {
            this.stopAutoplay();
        },

        update: function() {
            attr(this.slides, 'tabindex', '-1');
        },

        events: [

            {

                name: 'visibilitychange',

                el: function() {
                    return document;
                },

                filter: function() {
                    return this.autoplay;
                },

                handler: function() {
                    if (document.hidden) {
                        this.stopAutoplay();
                    } else {
                        this.startAutoplay();
                    }
                }

            }

        ],

        methods: {

            startAutoplay: function() {
                var this$1 = this;


                this.stopAutoplay();

                this.interval = setInterval(
                    function () { return (!this$1.draggable || !$(':focus', this$1.$el))
                        && (!this$1.pauseOnHover || !matches(this$1.$el, ':hover'))
                        && !this$1.stack.length
                        && this$1.show('next'); },
                    this.autoplayInterval
                );

            },

            stopAutoplay: function() {
                this.interval && clearInterval(this.interval);
            }

        }

    };

    var SliderDrag = {

        props: {
            draggable: Boolean
        },

        data: {
            draggable: true,
            threshold: 10
        },

        created: function() {
            var this$1 = this;


            ['start', 'move', 'end'].forEach(function (key) {

                var fn = this$1[key];
                this$1[key] = function (e) {

                    var pos = getEventPos(e).x * (isRtl ? -1 : 1);

                    this$1.prevPos = pos !== this$1.pos ? this$1.pos : this$1.prevPos;
                    this$1.pos = pos;

                    fn(e);
                };

            });

        },

        events: [

            {

                name: pointerDown,

                delegate: function() {
                    return this.selSlides;
                },

                handler: function(e) {

                    if (!this.draggable
                        || !isTouch(e) && hasTextNodesOnly(e.target)
                        || closest(e.target, selInput)
                        || e.button > 0
                        || this.length < 2
                    ) {
                        return;
                    }

                    this.start(e);
                }

            },

            {
                name: 'dragstart',

                handler: function(e) {
                    e.preventDefault();
                }
            }

        ],

        methods: {

            start: function() {

                this.drag = this.pos;

                if (this._transitioner) {

                    this.percent = this._transitioner.percent();
                    this.drag += this._transitioner.getDistance() * this.percent * this.dir;

                    this._transitioner.cancel();
                    this._transitioner.translate(this.percent);

                    this.dragging = true;

                    this.stack = [];

                } else {
                    this.prevIndex = this.index;
                }

                on(document, pointerMove, this.move, {passive: false});

                // 'input' event is triggered by video controls
                on(document, (pointerUp + " " + pointerCancel + " input"), this.end, true);

                css(this.list, 'userSelect', 'none');

            },

            move: function(e) {
                var this$1 = this;


                var distance = this.pos - this.drag;

                if (distance === 0 || this.prevPos === this.pos || !this.dragging && Math.abs(distance) < this.threshold) {
                    return;
                }

                // prevent click event
                css(this.list, 'pointerEvents', 'none');

                e.cancelable && e.preventDefault();

                this.dragging = true;
                this.dir = (distance < 0 ? 1 : -1);

                var ref = this;
                var slides = ref.slides;
                var ref$1 = this;
                var prevIndex = ref$1.prevIndex;
                var dis = Math.abs(distance);
                var nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
                var width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;

                while (nextIndex !== prevIndex && dis > width) {

                    this.drag -= width * this.dir;

                    prevIndex = nextIndex;
                    dis -= width;
                    nextIndex = this.getIndex(prevIndex + this.dir, prevIndex);
                    width = this._getDistance(prevIndex, nextIndex) || slides[prevIndex].offsetWidth;

                }

                this.percent = dis / width;

                var prev = slides[prevIndex];
                var next = slides[nextIndex];
                var changed = this.index !== nextIndex;
                var edge = prevIndex === nextIndex;

                var itemShown;

                [this.index, this.prevIndex].filter(function (i) { return !includes([nextIndex, prevIndex], i); }).forEach(function (i) {
                    trigger(slides[i], 'itemhidden', [this$1]);

                    if (edge) {
                        itemShown = true;
                        this$1.prevIndex = prevIndex;
                    }

                });

                if (this.index === prevIndex && this.prevIndex !== prevIndex || itemShown) {
                    trigger(slides[this.index], 'itemshown', [this]);
                }

                if (changed) {
                    this.prevIndex = prevIndex;
                    this.index = nextIndex;

                    !edge && trigger(prev, 'beforeitemhide', [this]);
                    trigger(next, 'beforeitemshow', [this]);
                }

                this._transitioner = this._translate(Math.abs(this.percent), prev, !edge && next);

                if (changed) {
                    !edge && trigger(prev, 'itemhide', [this]);
                    trigger(next, 'itemshow', [this]);
                }

            },

            end: function() {

                off(document, pointerMove, this.move, {passive: false});
                off(document, (pointerUp + " " + pointerCancel + " input"), this.end, true);

                if (this.dragging) {

                    this.dragging = null;

                    if (this.index === this.prevIndex) {
                        this.percent = 1 - this.percent;
                        this.dir *= -1;
                        this._show(false, this.index, true);
                        this._transitioner = null;
                    } else {

                        var dirChange = (isRtl ? this.dir * (isRtl ? 1 : -1) : this.dir) < 0 === this.prevPos > this.pos;
                        this.index = dirChange ? this.index : this.prevIndex;

                        if (dirChange) {
                            this.percent = 1 - this.percent;
                        }

                        this.show(this.dir > 0 && !dirChange || this.dir < 0 && dirChange ? 'next' : 'previous', true);
                    }

                }

                css(this.list, {userSelect: '', pointerEvents: ''});

                this.drag
                    = this.percent
                    = null;

            }

        }

    };

    function hasTextNodesOnly(el) {
        return !el.children.length && el.childNodes.length;
    }

    var SliderNav = {

        data: {
            selNav: false
        },

        computed: {

            nav: function(ref, $el) {
                var selNav = ref.selNav;

                return $(selNav, $el);
            },

            selNavItem: function(ref) {
                var attrItem = ref.attrItem;

                return ("[" + attrItem + "],[data-" + attrItem + "]");
            },

            navItems: function(_, $el) {
                return $$(this.selNavItem, $el);
            }

        },

        update: {

            write: function() {
                var this$1 = this;


                if (this.nav && this.length !== this.nav.children.length) {
                    html(this.nav, this.slides.map(function (_, i) { return ("<li " + (this$1.attrItem) + "=\"" + i + "\"><a href></a></li>"); }).join(''));
                }

                this.navItems.concat(this.nav).forEach(function (el) { return el && (el.hidden = !this$1.maxIndex); });

                this.updateNav();

            },

            events: ['resize']

        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return this.selNavItem;
                },

                handler: function(e) {
                    e.preventDefault();
                    this.show(data(e.current, this.attrItem));
                }

            },

            {

                name: 'itemshow',
                handler: 'updateNav'

            }

        ],

        methods: {

            updateNav: function() {
                var this$1 = this;


                var i = this.getValidIndex();
                this.navItems.forEach(function (el) {

                    var cmd = data(el, this$1.attrItem);

                    toggleClass(el, this$1.clsActive, toNumber(cmd) === i);
                    toggleClass(el, 'uk-invisible', this$1.finite && (cmd === 'previous' && i === 0 || cmd === 'next' && i >= this$1.maxIndex));
                });

            }

        }

    };

    var Slider = {

        mixins: [SliderAutoplay, SliderDrag, SliderNav],

        props: {
            clsActivated: Boolean,
            easing: String,
            index: Number,
            finite: Boolean,
            velocity: Number,
            selSlides: String
        },

        data: function () { return ({
            easing: 'ease',
            finite: false,
            velocity: 1,
            index: 0,
            prevIndex: -1,
            stack: [],
            percent: 0,
            clsActive: 'uk-active',
            clsActivated: false,
            Transitioner: false,
            transitionOptions: {}
        }); },

        connected: function() {
            this.prevIndex = -1;
            this.index = this.getValidIndex(this.$props.index);
            this.stack = [];
        },

        disconnected: function() {
            removeClass(this.slides, this.clsActive);
        },

        computed: {

            duration: function(ref, $el) {
                var velocity = ref.velocity;

                return speedUp($el.offsetWidth / velocity);
            },

            list: function(ref, $el) {
                var selList = ref.selList;

                return $(selList, $el);
            },

            maxIndex: function() {
                return this.length - 1;
            },

            selSlides: function(ref) {
                var selList = ref.selList;
                var selSlides = ref.selSlides;

                return (selList + " " + (selSlides || '> *'));
            },

            slides: {

                get: function() {
                    return $$(this.selSlides, this.$el);
                },

                watch: function() {
                    this.$reset();
                }

            },

            length: function() {
                return this.slides.length;
            }

        },

        events: {

            itemshown: function() {
                this.$update(this.list);
            }

        },

        methods: {

            show: function(index, force) {
                var this$1 = this;
                if ( force === void 0 ) force = false;


                if (this.dragging || !this.length) {
                    return;
                }

                var ref = this;
                var stack = ref.stack;
                var queueIndex = force ? 0 : stack.length;
                var reset = function () {
                    stack.splice(queueIndex, 1);

                    if (stack.length) {
                        this$1.show(stack.shift(), true);
                    }
                };

                stack[force ? 'unshift' : 'push'](index);

                if (!force && stack.length > 1) {

                    if (stack.length === 2) {
                        this._transitioner.forward(Math.min(this.duration, 200));
                    }

                    return;
                }

                var prevIndex = this.getIndex(this.index);
                var prev = hasClass(this.slides, this.clsActive) && this.slides[prevIndex];
                var nextIndex = this.getIndex(index, this.index);
                var next = this.slides[nextIndex];

                if (prev === next) {
                    reset();
                    return;
                }

                this.dir = getDirection(index, prevIndex);
                this.prevIndex = prevIndex;
                this.index = nextIndex;

                if (prev && !trigger(prev, 'beforeitemhide', [this])
                    || !trigger(next, 'beforeitemshow', [this, prev])
                ) {
                    this.index = this.prevIndex;
                    reset();
                    return;
                }

                var promise = this._show(prev, next, force).then(function () {

                    prev && trigger(prev, 'itemhidden', [this$1]);
                    trigger(next, 'itemshown', [this$1]);

                    return new Promise(function (resolve) {
                        fastdom.write(function () {
                            stack.shift();
                            if (stack.length) {
                                this$1.show(stack.shift(), true);
                            } else {
                                this$1._transitioner = null;
                            }
                            resolve();
                        });
                    });

                });

                prev && trigger(prev, 'itemhide', [this]);
                trigger(next, 'itemshow', [this]);

                return promise;

            },

            getIndex: function(index, prev) {
                if ( index === void 0 ) index = this.index;
                if ( prev === void 0 ) prev = this.index;

                return clamp(getIndex(index, this.slides, prev, this.finite), 0, this.maxIndex);
            },

            getValidIndex: function(index, prevIndex) {
                if ( index === void 0 ) index = this.index;
                if ( prevIndex === void 0 ) prevIndex = this.prevIndex;

                return this.getIndex(index, prevIndex);
            },

            _show: function(prev, next, force) {

                this._transitioner = this._getTransitioner(
                    prev,
                    next,
                    this.dir,
                    assign({
                        easing: force
                            ? next.offsetWidth < 600
                                ? 'cubic-bezier(0.25, 0.46, 0.45, 0.94)' /* easeOutQuad */
                                : 'cubic-bezier(0.165, 0.84, 0.44, 1)' /* easeOutQuart */
                            : this.easing
                    }, this.transitionOptions)
                );

                if (!force && !prev) {
                    this._translate(1);
                    return Promise.resolve();
                }

                var ref = this.stack;
                var length = ref.length;
                return this._transitioner[length > 1 ? 'forward' : 'show'](length > 1 ? Math.min(this.duration, 75 + 75 / (length - 1)) : this.duration, this.percent);

            },

            _getDistance: function(prev, next) {
                return this._getTransitioner(prev, prev !== next && next).getDistance();
            },

            _translate: function(percent, prev, next) {
                if ( prev === void 0 ) prev = this.prevIndex;
                if ( next === void 0 ) next = this.index;

                var transitioner = this._getTransitioner(prev !== next ? prev : false, next);
                transitioner.translate(percent);
                return transitioner;
            },

            _getTransitioner: function(prev, next, dir, options) {
                if ( prev === void 0 ) prev = this.prevIndex;
                if ( next === void 0 ) next = this.index;
                if ( dir === void 0 ) dir = this.dir || 1;
                if ( options === void 0 ) options = this.transitionOptions;

                return new this.Transitioner(
                    isNumber(prev) ? this.slides[prev] : prev,
                    isNumber(next) ? this.slides[next] : next,
                    dir * (isRtl ? -1 : 1),
                    options
                );
            }

        }

    };

    function getDirection(index, prevIndex) {
        return index === 'next'
            ? 1
            : index === 'previous'
                ? -1
                : index < prevIndex
                    ? -1
                    : 1;
    }

    function speedUp(x) {
        return .5 * x + 300; // parabola through (400,500; 600,600; 1800,1200)
    }

    var Slideshow = {

        mixins: [Slider],

        props: {
            animation: String
        },

        data: {
            animation: 'slide',
            clsActivated: 'uk-transition-active',
            Animations: Animations,
            Transitioner: Transitioner
        },

        computed: {

            animation: function(ref) {
                var animation = ref.animation;
                var Animations = ref.Animations;

                return assign(Animations[animation] || Animations.slide, {name: animation});
            },

            transitionOptions: function() {
                return {animation: this.animation};
            }

        },

        events: {

            'itemshow itemhide itemshown itemhidden': function(ref) {
                var target = ref.target;

                this.$update(target);
            },

            beforeitemshow: function(ref) {
                var target = ref.target;

                addClass(target, this.clsActive);
            },

            itemshown: function(ref) {
                var target = ref.target;

                addClass(target, this.clsActivated);
            },

            itemhidden: function(ref) {
                var target = ref.target;

                removeClass(target, this.clsActive, this.clsActivated);
            }

        }

    };

    var LightboxPanel = {

        mixins: [Container, Modal, Togglable, Slideshow],

        functional: true,

        props: {
            delayControls: Number,
            preload: Number,
            videoAutoplay: Boolean,
            template: String
        },

        data: function () { return ({
            preload: 1,
            videoAutoplay: false,
            delayControls: 3000,
            items: [],
            cls: 'uk-open',
            clsPage: 'uk-lightbox-page',
            selList: '.uk-lightbox-items',
            attrItem: 'uk-lightbox-item',
            selClose: '.uk-close-large',
            selCaption: '.uk-lightbox-caption',
            pauseOnHover: false,
            velocity: 2,
            Animations: Animations$1,
            template: "<div class=\"uk-lightbox uk-overflow-hidden\"> <ul class=\"uk-lightbox-items\"></ul> <div class=\"uk-lightbox-toolbar uk-position-top uk-text-right uk-transition-slide-top uk-transition-opaque\"> <button class=\"uk-lightbox-toolbar-icon uk-close-large\" type=\"button\" uk-close></button> </div> <a class=\"uk-lightbox-button uk-position-center-left uk-position-medium uk-transition-fade\" href uk-slidenav-previous uk-lightbox-item=\"previous\"></a> <a class=\"uk-lightbox-button uk-position-center-right uk-position-medium uk-transition-fade\" href uk-slidenav-next uk-lightbox-item=\"next\"></a> <div class=\"uk-lightbox-toolbar uk-lightbox-caption uk-position-bottom uk-text-center uk-transition-slide-bottom uk-transition-opaque\"></div> </div>"
        }); },

        created: function() {

            var $el = $(this.template);
            var list = $(this.selList, $el);
            this.items.forEach(function () { return append(list, '<li>'); });

            this.$mount(append(this.container, $el));

        },

        computed: {

            caption: function(ref, $el) {
                var selCaption = ref.selCaption;

                return $(selCaption, $el);
            }

        },

        events: [

            {

                name: (pointerMove + " " + pointerDown + " keydown"),

                handler: 'showControls'

            },

            {

                name: 'click',

                self: true,

                delegate: function() {
                    return this.selSlides;
                },

                handler: function(e) {

                    if (e.defaultPrevented) {
                        return;
                    }

                    this.hide();
                }

            },

            {

                name: 'shown',

                self: true,

                handler: function() {
                    this.showControls();
                }

            },

            {

                name: 'hide',

                self: true,

                handler: function() {

                    this.hideControls();

                    removeClass(this.slides, this.clsActive);
                    Transition.stop(this.slides);

                }
            },

            {

                name: 'hidden',

                self: true,

                handler: function() {
                    this.$destroy(true);
                }

            },

            {

                name: 'keyup',

                el: function() {
                    return document;
                },

                handler: function(e) {

                    if (!this.isToggled(this.$el) || !this.draggable) {
                        return;
                    }

                    switch (e.keyCode) {
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

                name: 'beforeitemshow',

                handler: function(e) {

                    if (this.isToggled()) {
                        return;
                    }

                    this.draggable = false;

                    e.preventDefault();

                    this.toggleElement(this.$el, true, false);

                    this.animation = Animations$1['scale'];
                    removeClass(e.target, this.clsActive);
                    this.stack.splice(1, 0, this.index);

                }

            },

            {

                name: 'itemshow',

                handler: function() {

                    html(this.caption, this.getItem().caption || '');

                    for (var j = -this.preload; j <= this.preload; j++) {
                        this.loadItem(this.index + j);
                    }

                }

            },

            {

                name: 'itemshown',

                handler: function() {
                    this.draggable = this.$props.draggable;
                }

            },

            {

                name: 'itemload',

                handler: function(_, item) {
                    var this$1 = this;


                    var src = item.source;
                    var type = item.type;
                    var alt = item.alt; if ( alt === void 0 ) alt = '';
                    var poster = item.poster;
                    var attrs = item.attrs; if ( attrs === void 0 ) attrs = {};

                    this.setItem(item, '<span uk-spinner></span>');

                    if (!src) {
                        return;
                    }

                    var matches;
                    var iframeAttrs = {
                        frameborder: '0',
                        allow: 'autoplay',
                        allowfullscreen: '',
                        style: 'max-width: 100%; box-sizing: border-box;',
                        'uk-responsive': '',
                        'uk-video': ("" + (this.videoAutoplay))
                    };

                    // Image
                    if (type === 'image' || src.match(/\.(avif|jpe?g|a?png|gif|svg|webp)($|\?)/i)) {

                        getImage(src, attrs.srcset, attrs.size).then(
                            function (ref) {
                                var width = ref.width;
                                var height = ref.height;

                                return this$1.setItem(item, createEl('img', assign({src: src, width: width, height: height, alt: alt}, attrs)));
                        },
                            function () { return this$1.setError(item); }
                        );

                    // Video
                    } else if (type === 'video' || src.match(/\.(mp4|webm|ogv)($|\?)/i)) {

                        var video = createEl('video', assign({
                            src: src,
                            poster: poster,
                            controls: '',
                            playsinline: '',
                            'uk-video': ("" + (this.videoAutoplay))
                        }, attrs));

                        on(video, 'loadedmetadata', function () {
                            attr(video, {width: video.videoWidth, height: video.videoHeight});
                            this$1.setItem(item, video);
                        });
                        on(video, 'error', function () { return this$1.setError(item); });

                    // Iframe
                    } else if (type === 'iframe' || src.match(/\.(html|php)($|\?)/i)) {

                        this.setItem(item, createEl('iframe', assign({
                            src: src,
                            frameborder: '0',
                            allowfullscreen: '',
                            class: 'uk-lightbox-iframe'
                        }, attrs)));

                    // YouTube
                    } else if ((matches = src.match(/\/\/(?:.*?youtube(-nocookie)?\..*?[?&]v=|youtu\.be\/)([\w-]{11})[&?]?(.*)?/))) {

                        this.setItem(item, createEl('iframe', assign({
                            src: ("https://www.youtube" + (matches[1] || '') + ".com/embed/" + (matches[2]) + (matches[3] ? ("?" + (matches[3])) : '')),
                            width: 1920,
                            height: 1080
                        }, iframeAttrs, attrs)));

                    // Vimeo
                    } else if ((matches = src.match(/\/\/.*?vimeo\.[a-z]+\/(\d+)[&?]?(.*)?/))) {

                        ajax(("https://vimeo.com/api/oembed.json?maxwidth=1920&url=" + (encodeURI(src))), {
                            responseType: 'json',
                            withCredentials: false
                        }).then(
                            function (ref) {
                                var ref_response = ref.response;
                                var height = ref_response.height;
                                var width = ref_response.width;

                                return this$1.setItem(item, createEl('iframe', assign({
                                src: ("https://player.vimeo.com/video/" + (matches[1]) + (matches[2] ? ("?" + (matches[2])) : '')),
                                width: width,
                                height: height
                            }, iframeAttrs, attrs)));
                        },
                            function () { return this$1.setError(item); }
                        );

                    }

                }

            }

        ],

        methods: {

            loadItem: function(index) {
                if ( index === void 0 ) index = this.index;


                var item = this.getItem(index);

                if (!this.getSlide(item).childElementCount) {
                    trigger(this.$el, 'itemload', [item]);
                }
            },

            getItem: function(index) {
                if ( index === void 0 ) index = this.index;

                return this.items[getIndex(index, this.slides)];
            },

            setItem: function(item, content) {
                trigger(this.$el, 'itemloaded', [this, html(this.getSlide(item), content) ]);
            },

            getSlide: function(item) {
                return this.slides[this.items.indexOf(item)];
            },

            setError: function(item) {
                this.setItem(item, '<span uk-icon="icon: bolt; ratio: 2"></span>');
            },

            showControls: function() {

                clearTimeout(this.controlsTimer);
                this.controlsTimer = setTimeout(this.hideControls, this.delayControls);

                addClass(this.$el, 'uk-active', 'uk-transition-active');

            },

            hideControls: function() {
                removeClass(this.$el, 'uk-active', 'uk-transition-active');
            }

        }

    };

    function createEl(tag, attrs) {
        var el = fragment(("<" + tag + ">"));
        attr(el, attrs);
        return el;
    }

    var lightbox = {

        install: install$2,

        props: {toggle: String},

        data: {toggle: 'a'},

        computed: {

            toggles: {

                get: function(ref, $el) {
                    var toggle = ref.toggle;

                    return $$(toggle, $el);
                },

                watch: function() {
                    this.hide();
                }

            }

        },

        disconnected: function() {
            this.hide();
        },

        events: [

            {

                name: 'click',

                delegate: function() {
                    return ((this.toggle) + ":not(.uk-disabled)");
                },

                handler: function(e) {
                    e.preventDefault();
                    this.show(e.current);
                }

            }

        ],

        methods: {

            show: function(index) {
                var this$1 = this;


                var items = uniqueBy(this.toggles.map(toItem), 'source');

                if (isElement(index)) {
                    var ref = toItem(index);
                    var source = ref.source;
                    index = findIndex(items, function (ref) {
                        var src = ref.source;

                        return source === src;
                    });
                }

                this.panel = this.panel || this.$create('lightboxPanel', assign({}, this.$props, {items: items}));

                on(this.panel.$el, 'hidden', function () { return this$1.panel = false; });

                return this.panel.show(index);

            },

            hide: function() {

                return this.panel && this.panel.hide();

            }

        }

    };

    function install$2(UIkit, Lightbox) {

        if (!UIkit.lightboxPanel) {
            UIkit.component('lightboxPanel', LightboxPanel);
        }

        assign(
            Lightbox.props,
            UIkit.component('lightboxPanel').options.props
        );

    }

    function toItem(el) {

        var item = {};

        ['href', 'caption', 'type', 'poster', 'alt', 'attrs'].forEach(function (attr) {
            item[attr === 'href' ? 'source' : attr] = data(el, attr);
        });

        item.attrs = parseOptions(item.attrs);

        return item;
    }

    var obj;

    var notification = {

        mixins: [Container],

        functional: true,

        args: ['message', 'status'],

        data: {
            message: '',
            status: '',
            timeout: 5000,
            group: null,
            pos: 'top-center',
            clsContainer: 'uk-notification',
            clsClose: 'uk-notification-close',
            clsMsg: 'uk-notification-message'
        },

        install: install$3,

        computed: {

            marginProp: function(ref) {
                var pos = ref.pos;

                return ("margin" + (startsWith(pos, 'top') ? 'Top' : 'Bottom'));
            },

            startProps: function() {
                var obj;

                return ( obj = {opacity: 0}, obj[this.marginProp] = -this.$el.offsetHeight, obj );
            }

        },

        created: function() {

            var container = $(("." + (this.clsContainer) + "-" + (this.pos)), this.container)
                || append(this.container, ("<div class=\"" + (this.clsContainer) + " " + (this.clsContainer) + "-" + (this.pos) + "\" style=\"display: block\"></div>"));

            this.$mount(append(container,
                ("<div class=\"" + (this.clsMsg) + (this.status ? (" " + (this.clsMsg) + "-" + (this.status)) : '') + "\"> <a href class=\"" + (this.clsClose) + "\" data-uk-close></a> <div>" + (this.message) + "</div> </div>")
            ));

        },

        connected: function() {
            var this$1 = this;
            var obj;


            var margin = toFloat(css(this.$el, this.marginProp));
            Transition.start(
                css(this.$el, this.startProps),
                ( obj = {opacity: 1}, obj[this.marginProp] = margin, obj )
            ).then(function () {
                if (this$1.timeout) {
                    this$1.timer = setTimeout(this$1.close, this$1.timeout);
                }
            });

        },

        events: ( obj = {

            click: function(e) {
                if (closest(e.target, 'a[href="#"],a[href=""]')) {
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

            close: function(immediate) {
                var this$1 = this;


                var removeFn = function (el) {

                    var container = parent(el);

                    trigger(el, 'close', [this$1]);
                    remove(el);

                    if (container && !container.hasChildNodes()) {
                        remove(container);
                    }

                };

                if (this.timer) {
                    clearTimeout(this.timer);
                }

                if (immediate) {
                    removeFn(this.$el);
                } else {
                    Transition.start(this.$el, this.startProps).then(removeFn);
                }
            }

        }

    };

    function install$3(UIkit) {
        UIkit.notification.closeAll = function (group, immediate) {
            apply(document.body, function (el) {
                var notification = UIkit.getComponent(el, 'notification');
                if (notification && (!group || group === notification.group)) {
                    notification.close(immediate);
                }
            });
        };
    }

    var props = ['x', 'y', 'bgx', 'bgy', 'rotate', 'scale', 'color', 'backgroundColor', 'borderColor', 'opacity', 'blur', 'hue', 'grayscale', 'invert', 'saturate', 'sepia', 'fopacity', 'stroke'];

    var Parallax = {

        mixins: [Media],

        props: props.reduce(function (props, prop) {
            props[prop] = 'list';
            return props;
        }, {}),

        data: props.reduce(function (data, prop) {
            data[prop] = undefined;
            return data;
        }, {}),

        computed: {

            props: function(properties, $el) {
                var this$1 = this;


                return props.reduce(function (props, prop) {

                    if (isUndefined(properties[prop])) {
                        return props;
                    }

                    var isColor = prop.match(/color/i);
                    var isCssProp = isColor || prop === 'opacity';

                    var pos, bgPos, diff;
                    var steps = properties[prop].slice();

                    if (isCssProp) {
                        css($el, prop, '');
                    }

                    if (steps.length < 2) {
                        steps.unshift((prop === 'scale'
                            ? 1
                            : isCssProp
                                ? css($el, prop)
                                : 0) || 0);
                    }

                    var unit = getUnit(steps);

                    if (isColor) {

                        var ref = $el.style;
                        var color = ref.color;
                        steps = steps.map(function (step) { return parseColor($el, step); });
                        $el.style.color = color;

                    } else if (startsWith(prop, 'bg')) {

                        var attr = prop === 'bgy' ? 'height' : 'width';
                        steps = steps.map(function (step) { return toPx(step, attr, this$1.$el); });

                        css($el, ("background-position-" + (prop[2])), '');
                        bgPos = css($el, 'backgroundPosition').split(' ')[prop[2] === 'x' ? 0 : 1]; // IE 11 can't read background-position-[x|y]

                        if (this$1.covers) {

                            var min = Math.min.apply(Math, steps);
                            var max = Math.max.apply(Math, steps);
                            var down = steps.indexOf(min) < steps.indexOf(max);

                            diff = max - min;

                            steps = steps.map(function (step) { return step - (down ? min : max); });
                            pos = (down ? -diff : 0) + "px";

                        } else {

                            pos = bgPos;

                        }

                    } else {

                        steps = steps.map(toFloat);

                    }

                    if (prop === 'stroke') {

                        if (!steps.some(function (step) { return step; })) {
                            return props;
                        }

                        var length = getMaxPathLength(this$1.$el);
                        css($el, 'strokeDasharray', length);

                        if (unit === '%') {
                            steps = steps.map(function (step) { return step * length / 100; });
                        }

                        steps = steps.reverse();

                        prop = 'strokeDashoffset';
                    }

                    props[prop] = {steps: steps, unit: unit, pos: pos, bgPos: bgPos, diff: diff};

                    return props;

                }, {});

            },

            bgProps: function() {
                var this$1 = this;

                return ['bgx', 'bgy'].filter(function (bg) { return bg in this$1.props; });
            },

            covers: function(_, $el) {
                return covers($el);
            }

        },

        disconnected: function() {
            delete this._image;
        },

        update: {

            read: function(data) {
                var this$1 = this;


                if (!this.matchMedia) {
                    return;
                }

                if (!data.image && this.covers && this.bgProps.length) {
                    var src = css(this.$el, 'backgroundImage').replace(/^none|url\(["']?(.+?)["']?\)$/, '$1');

                    if (src) {
                        var img = new Image();
                        img.src = src;
                        data.image = img;

                        if (!img.naturalWidth) {
                            img.onload = function () { return this$1.$update(); };
                        }
                    }

                }

                var image = data.image;

                if (!image || !image.naturalWidth) {
                    return;
                }

                var dimEl = {
                    width: this.$el.offsetWidth,
                    height: this.$el.offsetHeight
                };
                var dimImage = {
                    width: image.naturalWidth,
                    height: image.naturalHeight
                };

                var dim = Dimensions.cover(dimImage, dimEl);

                this.bgProps.forEach(function (prop) {

                    var ref = this$1.props[prop];
                    var diff = ref.diff;
                    var bgPos = ref.bgPos;
                    var steps = ref.steps;
                    var attr = prop === 'bgy' ? 'height' : 'width';
                    var span = dim[attr] - dimEl[attr];

                    if (span < diff) {
                        dimEl[attr] = dim[attr] + diff - span;
                    } else if (span > diff) {

                        var posPercentage = dimEl[attr] / toPx(bgPos, attr, this$1.$el);

                        if (posPercentage) {
                            this$1.props[prop].steps = steps.map(function (step) { return step - (span - diff) / posPercentage; });
                        }
                    }

                    dim = Dimensions.cover(dimImage, dimEl);
                });

                data.dim = dim;
            },

            write: function(ref) {
                var dim = ref.dim;


                if (!this.matchMedia) {
                    css(this.$el, {backgroundSize: '', backgroundRepeat: ''});
                    return;
                }

                dim && css(this.$el, {
                    backgroundSize: ((dim.width) + "px " + (dim.height) + "px"),
                    backgroundRepeat: 'no-repeat'
                });

            },

            events: ['resize']

        },

        methods: {

            reset: function() {
                var this$1 = this;

                each(this.getCss(0), function (_, prop) { return css(this$1.$el, prop, ''); });
            },

            getCss: function(percent) {

                var ref = this;
                var props = ref.props;
                return Object.keys(props).reduce(function (css, prop) {

                    var ref = props[prop];
                    var steps = ref.steps;
                    var unit = ref.unit;
                    var pos = ref.pos;
                    var value = getValue(steps, percent);

                    switch (prop) {

                        // transforms
                        case 'x':
                        case 'y': {
                            unit = unit || 'px';
                            css.transform += " translate" + (ucfirst(prop)) + "(" + (toFloat(value).toFixed(unit === 'px' ? 0 : 2)) + unit + ")";
                            break;
                        }
                        case 'rotate':
                            unit = unit || 'deg';
                            css.transform += " rotate(" + (value + unit) + ")";
                            break;
                        case 'scale':
                            css.transform += " scale(" + value + ")";
                            break;

                        // bg image
                        case 'bgy':
                        case 'bgx':
                            css[("background-position-" + (prop[2]))] = "calc(" + pos + " + " + value + "px)";
                            break;

                        // color
                        case 'color':
                        case 'backgroundColor':
                        case 'borderColor': {

                            var ref$1 = getStep(steps, percent);
                            var start = ref$1[0];
                            var end = ref$1[1];
                            var p = ref$1[2];

                            css[prop] = "rgba(" + (start.map(function (value, i) {
                                    value = value + p * (end[i] - value);
                                    return i === 3 ? toFloat(value) : parseInt(value, 10);
                                }).join(',')) + ")";
                            break;
                        }
                        // CSS Filter
                        case 'blur':
                            unit = unit || 'px';
                            css.filter += " blur(" + (value + unit) + ")";
                            break;
                        case 'hue':
                            unit = unit || 'deg';
                            css.filter += " hue-rotate(" + (value + unit) + ")";
                            break;
                        case 'fopacity':
                            unit = unit || '%';
                            css.filter += " opacity(" + (value + unit) + ")";
                            break;
                        case 'grayscale':
                        case 'invert':
                        case 'saturate':
                        case 'sepia':
                            unit = unit || '%';
                            css.filter += " " + prop + "(" + (value + unit) + ")";
                            break;
                        default:
                            css[prop] = value;
                    }

                    return css;

                }, {transform: '', filter: ''});

            }

        }

    };

    function parseColor(el, color) {
        return css(css(el, 'color', color), 'color')
            .split(/[(),]/g)
            .slice(1, -1)
            .concat(1)
            .slice(0, 4)
            .map(toFloat);
    }

    function getStep(steps, percent) {
        var count = steps.length - 1;
        var index = Math.min(Math.floor(count * percent), count - 1);
        var step = steps.slice(index, index + 2);

        step.push(percent === 1 ? 1 : percent % (1 / count) * count);

        return step;
    }

    function getValue(steps, percent, digits) {
        if ( digits === void 0 ) digits = 2;

        var ref = getStep(steps, percent);
        var start = ref[0];
        var end = ref[1];
        var p = ref[2];
        return (isNumber(start)
            ? start + Math.abs(start - end) * p * (start < end ? 1 : -1)
            : +end
        ).toFixed(digits);
    }

    function getUnit(steps) {
        return steps.reduce(function (unit, step) { return isString(step) && step.replace(/-|\d/g, '').trim() || unit; }, '');
    }

    function covers(el) {
        var ref = el.style;
        var backgroundSize = ref.backgroundSize;
        var covers = css(css(el, 'backgroundSize', ''), 'backgroundSize') === 'cover';
        el.style.backgroundSize = backgroundSize;
        return covers;
    }

    var parallax = {

        mixins: [Parallax],

        props: {
            target: String,
            viewport: Number,
            easing: Number
        },

        data: {
            target: false,
            viewport: 1,
            easing: 1
        },

        computed: {

            target: function(ref, $el) {
                var target = ref.target;

                return getOffsetElement(target && query(target, $el) || $el);
            }

        },

        update: {

            read: function(ref, types) {
                var percent = ref.percent;


                if (!types.has('scroll')) {
                    percent = false;
                }

                if (!this.matchMedia) {
                    return;
                }

                var prev = percent;
                percent = ease(scrolledOver(this.target) / (this.viewport || 1), this.easing);

                return {
                    percent: percent,
                    style: prev !== percent ? this.getCss(percent) : false
                };
            },

            write: function(ref) {
                var style = ref.style;


                if (!this.matchMedia) {
                    this.reset();
                    return;
                }

                style && css(this.$el, style);

            },

            events: ['scroll', 'resize']
        }

    };

    function ease(percent, easing) {
        return clamp(percent * (1 - (easing - easing * percent)));
    }

    // SVG elements do not inherit from HTMLElement
    function getOffsetElement(el) {
        return el
            ? 'offsetTop' in el
                ? el
                : getOffsetElement(parent(el))
            : document.body;
    }

    var SliderReactive = {

        update: {

            write: function() {

                if (this.stack.length || this.dragging) {
                    return;
                }

                var index = this.getValidIndex(this.index);

                if (!~this.prevIndex || this.index !== index) {
                    this.show(index);
                }

            },

            events: ['resize']

        }

    };

    function Transitioner$1 (prev, next, dir, ref) {
        var center = ref.center;
        var easing = ref.easing;
        var list = ref.list;


        var deferred = new Deferred();

        var from = prev
            ? getLeft(prev, list, center)
            : getLeft(next, list, center) + dimensions(next).width * dir;
        var to = next
            ? getLeft(next, list, center)
            : from + dimensions(prev).width * dir * (isRtl ? -1 : 1);

        return {

            dir: dir,

            show: function(duration, percent, linear) {
                if ( percent === void 0 ) percent = 0;


                var timing = linear ? 'linear' : easing;
                duration -= Math.round(duration * clamp(percent, -1, 1));

                this.translate(percent);

                prev && this.updateTranslates();
                percent = prev ? percent : clamp(percent, 0, 1);
                triggerUpdate$1(this.getItemIn(), 'itemin', {percent: percent, duration: duration, timing: timing, dir: dir});
                prev && triggerUpdate$1(this.getItemIn(true), 'itemout', {percent: 1 - percent, duration: duration, timing: timing, dir: dir});

                Transition
                    .start(list, {transform: translate(-to * (isRtl ? -1 : 1), 'px')}, duration, timing)
                    .then(deferred.resolve, noop);

                return deferred.promise;

            },

            cancel: function() {
                Transition.cancel(list);
            },

            reset: function() {
                css(list, 'transform', '');
            },

            forward: function(duration, percent) {
                if ( percent === void 0 ) percent = this.percent();

                Transition.cancel(list);
                return this.show(duration, percent, true);
            },

            translate: function(percent) {

                var distance = this.getDistance() * dir * (isRtl ? -1 : 1);

                css(list, 'transform', translate(clamp(
                    -to + (distance - distance * percent),
                    -getWidth(list),
                    dimensions(list).width
                ) * (isRtl ? -1 : 1), 'px'));

                this.updateTranslates();

                if (prev) {
                    percent = clamp(percent, -1, 1);
                    triggerUpdate$1(this.getItemIn(), 'itemtranslatein', {percent: percent, dir: dir});
                    triggerUpdate$1(this.getItemIn(true), 'itemtranslateout', {percent: 1 - percent, dir: dir});
                }

            },

            percent: function() {
                return Math.abs((css(list, 'transform').split(',')[4] * (isRtl ? -1 : 1) + from) / (to - from));
            },

            getDistance: function() {
                return Math.abs(to - from);
            },

            getItemIn: function(out) {
                if ( out === void 0 ) out = false;


                var actives = sortBy(this.getActives(), 'offsetLeft');
                var all = sortBy(children(list), 'offsetLeft');
                var i = index(all, actives[dir * (out ? -1 : 1) > 0 ? actives.length - 1 : 0]);

                return ~i && all[i + (prev && !out ? dir : 0)];

            },

            getActives: function() {
                return [prev || next].concat(children(list).filter(function (slide) {
                    var slideLeft = getElLeft(slide, list);
                    return slideLeft > from && slideLeft + dimensions(slide).width <= dimensions(list).width + from;
                }));
            },

            updateTranslates: function() {

                var actives = this.getActives();

                children(list).forEach(function (slide) {
                    var isActive = includes(actives, slide);

                    triggerUpdate$1(slide, ("itemtranslate" + (isActive ? 'in' : 'out')), {
                        percent: isActive ? 1 : 0,
                        dir: slide.offsetLeft <= next.offsetLeft ? 1 : -1
                    });
                });
            }

        };

    }

    function getLeft(el, list, center) {

        var left = getElLeft(el, list);

        return center
            ? left - centerEl(el, list)
            : Math.min(left, getMax(list));

    }

    function getMax(list) {
        return Math.max(0, getWidth(list) - dimensions(list).width);
    }

    function getWidth(list) {
        return children(list).reduce(function (right, el) { return dimensions(el).width + right; }, 0);
    }

    function centerEl(el, list) {
        return dimensions(list).width / 2 - dimensions(el).width / 2;
    }

    function getElLeft(el, list) {
        return el && (position(el).left + (isRtl ? dimensions(el).width - dimensions(list).width : 0)) * (isRtl ? -1 : 1) || 0;
    }

    function triggerUpdate$1(el, type, data) {
        trigger(el, createEvent(type, false, false, data));
    }

    var slider = {

        mixins: [Class, Slider, SliderReactive],

        props: {
            center: Boolean,
            sets: Boolean
        },

        data: {
            center: false,
            sets: false,
            attrItem: 'uk-slider-item',
            selList: '.uk-slider-items',
            selNav: '.uk-slider-nav',
            clsContainer: 'uk-slider-container',
            Transitioner: Transitioner$1
        },

        computed: {

            avgWidth: function() {
                return getWidth(this.list) / this.length;
            },

            finite: function(ref) {
                var finite = ref.finite;

                return finite || Math.ceil(getWidth(this.list)) < dimensions(this.list).width + getMaxElWidth(this.list) + this.center;
            },

            maxIndex: function() {

                if (!this.finite || this.center && !this.sets) {
                    return this.length - 1;
                }

                if (this.center) {
                    return last(this.sets);
                }

                var lft = 0;
                var max = getMax(this.list);
                var index = findIndex(this.slides, function (el) {

                    if (lft >= max) {
                        return true;
                    }

                    lft += dimensions(el).width;

                });

                return ~index ? index : this.length - 1;
            },

            sets: function(ref) {
                var this$1 = this;
                var sets = ref.sets;


                if (!sets) {
                    return;
                }

                var width = dimensions(this.list).width / (this.center ? 2 : 1);

                var left = 0;
                var leftCenter = width;
                var slideLeft = 0;

                sets = sortBy(this.slides, 'offsetLeft').reduce(function (sets, slide, i) {

                    var slideWidth = dimensions(slide).width;
                    var slideRight = slideLeft + slideWidth;

                    if (slideRight > left) {

                        if (!this$1.center && i > this$1.maxIndex) {
                            i = this$1.maxIndex;
                        }

                        if (!includes(sets, i)) {

                            var cmp = this$1.slides[i + 1];
                            if (this$1.center && cmp && slideWidth < leftCenter - dimensions(cmp).width / 2) {
                                leftCenter -= slideWidth;
                            } else {
                                leftCenter = width;
                                sets.push(i);
                                left = slideLeft + width + (this$1.center ? slideWidth / 2 : 0);
                            }

                        }
                    }

                    slideLeft += slideWidth;

                    return sets;

                }, []);

                return !isEmpty(sets) && sets;

            },

            transitionOptions: function() {
                return {
                    center: this.center,
                    list: this.list
                };
            }

        },

        connected: function() {
            toggleClass(this.$el, this.clsContainer, !$(("." + (this.clsContainer)), this.$el));
        },

        update: {

            write: function() {
                var this$1 = this;

                this.navItems.forEach(function (el) {
                    var index = toNumber(data(el, this$1.attrItem));
                    if (index !== false) {
                        el.hidden = !this$1.maxIndex || index > this$1.maxIndex || this$1.sets && !includes(this$1.sets, index);
                    }
                });

                if (this.length && !this.dragging && !this.stack.length) {
                    this.reorder();
                    this._translate(1);
                }

                var actives = this._getTransitioner(this.index).getActives();
                this.slides.forEach(function (slide) { return toggleClass(slide, this$1.clsActive, includes(actives, slide)); });

                if (this.clsActivated && (!this.sets || includes(this.sets, toFloat(this.index)))) {
                    this.slides.forEach(function (slide) { return toggleClass(slide, this$1.clsActivated || '', includes(actives, slide)); });
                }
            },

            events: ['resize']

        },

        events: {

            beforeitemshow: function(e) {

                if (!this.dragging && this.sets && this.stack.length < 2 && !includes(this.sets, this.index)) {
                    this.index = this.getValidIndex();
                }

                var diff = Math.abs(
                    this.index
                    - this.prevIndex
                    + (this.dir > 0 && this.index < this.prevIndex || this.dir < 0 && this.index > this.prevIndex ? (this.maxIndex + 1) * this.dir : 0)
                );

                if (!this.dragging && diff > 1) {

                    for (var i = 0; i < diff; i++) {
                        this.stack.splice(1, 0, this.dir > 0 ? 'next' : 'previous');
                    }

                    e.preventDefault();
                    return;
                }

                var index = this.dir < 0 || !this.slides[this.prevIndex] ? this.index : this.prevIndex;
                this.duration = speedUp(this.avgWidth / this.velocity) * (dimensions(this.slides[index]).width / this.avgWidth);

                this.reorder();

            },

            itemshow: function() {
                ~this.prevIndex && addClass(this._getTransitioner().getItemIn(), this.clsActive);
            }

        },

        methods: {

            reorder: function() {
                var this$1 = this;


                if (this.finite) {
                    css(this.slides, 'order', '');
                    return;
                }

                var index = this.dir > 0 && this.slides[this.prevIndex] ? this.prevIndex : this.index;

                this.slides.forEach(function (slide, i) { return css(slide, 'order', this$1.dir > 0 && i < index
                        ? 1
                        : this$1.dir < 0 && i >= this$1.index
                            ? -1
                            : ''
                    ); }
                );

                if (!this.center) {
                    return;
                }

                var next = this.slides[index];
                var width = dimensions(this.list).width / 2 - dimensions(next).width / 2;
                var j = 0;

                while (width > 0) {
                    var slideIndex = this.getIndex(--j + index, index);
                    var slide = this.slides[slideIndex];

                    css(slide, 'order', slideIndex > index ? -2 : -1);
                    width -= dimensions(slide).width;
                }

            },

            getValidIndex: function(index, prevIndex) {
                if ( index === void 0 ) index = this.index;
                if ( prevIndex === void 0 ) prevIndex = this.prevIndex;


                index = this.getIndex(index, prevIndex);

                if (!this.sets) {
                    return index;
                }

                var prev;

                do {

                    if (includes(this.sets, index)) {
                        return index;
                    }

                    prev = index;
                    index = this.getIndex(index + this.dir, prevIndex);

                } while (index !== prev);

                return index;
            }

        }

    };

    function getMaxElWidth(list) {
        return Math.max.apply(Math, [ 0 ].concat( children(list).map(function (el) { return dimensions(el).width; }) ));
    }

    var sliderParallax = {

        mixins: [Parallax],

        data: {
            selItem: '!li'
        },

        computed: {

            item: function(ref, $el) {
                var selItem = ref.selItem;

                return query(selItem, $el);
            }

        },

        events: [

            {
                name: 'itemin itemout',

                self: true,

                el: function() {
                    return this.item;
                },

                handler: function(ref) {
                    var this$1 = this;
                    var type = ref.type;
                    var ref_detail = ref.detail;
                    var percent = ref_detail.percent;
                    var duration = ref_detail.duration;
                    var timing = ref_detail.timing;
                    var dir = ref_detail.dir;


                    fastdom.read(function () {
                        var propsFrom = this$1.getCss(getCurrentPercent(type, dir, percent));
                        var propsTo = this$1.getCss(isIn(type) ? .5 : dir > 0 ? 1 : 0);
                        fastdom.write(function () {
                            css(this$1.$el, propsFrom);
                            Transition.start(this$1.$el, propsTo, duration, timing).catch(noop);
                        });
                    });

                }
            },

            {
                name: 'transitioncanceled transitionend',

                self: true,

                el: function() {
                    return this.item;
                },

                handler: function() {
                    Transition.cancel(this.$el);
                }

            },

            {
                name: 'itemtranslatein itemtranslateout',

                self: true,

                el: function() {
                    return this.item;
                },

                handler: function(ref) {
                    var this$1 = this;
                    var type = ref.type;
                    var ref_detail = ref.detail;
                    var percent = ref_detail.percent;
                    var dir = ref_detail.dir;

                    fastdom.read(function () {
                        var props = this$1.getCss(getCurrentPercent(type, dir, percent));
                        fastdom.write(function () { return css(this$1.$el, props); });
                    });
                }
            }

        ]

    };

    function isIn(type) {
        return endsWith(type, 'in');
    }

    function getCurrentPercent(type, dir, percent) {

        percent /= 2;

        return !isIn(type)
            ? dir < 0
                ? percent
                : 1 - percent
            : dir < 0
                ? 1 - percent
                : percent;
    }

    var Animations$2 = assign({}, Animations, {

        fade: {

            show: function() {
                return [
                    {opacity: 0, zIndex: 0},
                    {zIndex: -1}
                ];
            },

            percent: function(current) {
                return 1 - css(current, 'opacity');
            },

            translate: function(percent) {
                return [
                    {opacity: 1 - percent, zIndex: 0},
                    {zIndex: -1}
                ];
            }

        },

        scale: {

            show: function() {
                return [
                    {opacity: 0, transform: scale3d(1 + .5), zIndex: 0},
                    {zIndex: -1}
                ];
            },

            percent: function(current) {
                return 1 - css(current, 'opacity');
            },

            translate: function(percent) {
                return [
                    {opacity: 1 - percent, transform: scale3d(1 + .5 * percent), zIndex: 0},
                    {zIndex: -1}
                ];
            }

        },

        pull: {

            show: function(dir) {
                return dir < 0
                    ? [
                        {transform: translate(30), zIndex: -1},
                        {transform: translate(), zIndex: 0}
                    ]
                    : [
                        {transform: translate(-100), zIndex: 0},
                        {transform: translate(), zIndex: -1}
                    ];
            },

            percent: function(current, next, dir) {
                return dir < 0
                    ? 1 - translated(next)
                    : translated(current);
            },

            translate: function(percent, dir) {
                return dir < 0
                    ? [
                        {transform: translate(30 * percent), zIndex: -1},
                        {transform: translate(-100 * (1 - percent)), zIndex: 0}
                    ]
                    : [
                        {transform: translate(-percent * 100), zIndex: 0},
                        {transform: translate(30 * (1 - percent)), zIndex: -1}
                    ];
            }

        },

        push: {

            show: function(dir) {
                return dir < 0
                    ? [
                        {transform: translate(100), zIndex: 0},
                        {transform: translate(), zIndex: -1}
                    ]
                    : [
                        {transform: translate(-30), zIndex: -1},
                        {transform: translate(), zIndex: 0}
                    ];
            },

            percent: function(current, next, dir) {
                return dir > 0
                    ? 1 - translated(next)
                    : translated(current);
            },

            translate: function(percent, dir) {
                return dir < 0
                    ? [
                        {transform: translate(percent * 100), zIndex: 0},
                        {transform: translate(-30 * (1 - percent)), zIndex: -1}
                    ]
                    : [
                        {transform: translate(-30 * percent), zIndex: -1},
                        {transform: translate(100 * (1 - percent)), zIndex: 0}
                    ];
            }

        }

    });

    var slideshow = {

        mixins: [Class, Slideshow, SliderReactive],

        props: {
            ratio: String,
            minHeight: Number,
            maxHeight: Number
        },

        data: {
            ratio: '16:9',
            minHeight: false,
            maxHeight: false,
            selList: '.uk-slideshow-items',
            attrItem: 'uk-slideshow-item',
            selNav: '.uk-slideshow-nav',
            Animations: Animations$2
        },

        update: {

            read: function() {

                var ref = this.ratio.split(':').map(Number);
                var width = ref[0];
                var height = ref[1];

                height = height * this.list.offsetWidth / width || 0;

                if (this.minHeight) {
                    height = Math.max(this.minHeight, height);
                }

                if (this.maxHeight) {
                    height = Math.min(this.maxHeight, height);
                }

                return {height: height - boxModelAdjust(this.list, 'height', 'content-box')};
            },

            write: function(ref) {
                var height = ref.height;

                height > 0 && css(this.list, 'minHeight', height);
            },

            events: ['resize']

        }

    };

    var sortable = {

        mixins: [Class, Animate],

        props: {
            group: String,
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

        data: {
            group: false,
            threshold: 5,
            clsItem: 'uk-sortable-item',
            clsPlaceholder: 'uk-sortable-placeholder',
            clsDrag: 'uk-sortable-drag',
            clsDragState: 'uk-drag',
            clsBase: 'uk-sortable',
            clsNoDrag: 'uk-sortable-nodrag',
            clsEmpty: 'uk-sortable-empty',
            clsCustom: '',
            handle: false,
            pos: {}
        },

        created: function() {
            var this$1 = this;

            ['init', 'start', 'move', 'end'].forEach(function (key) {
                var fn = this$1[key];
                this$1[key] = function (e) {
                    assign(this$1.pos, getEventPos(e));
                    fn(e);
                };
            });
        },

        events: {

            name: pointerDown,
            passive: false,
            handler: 'init'

        },

        computed: {

            target: function() {
                return (this.$el.tBodies || [this.$el])[0];
            },

            items: function() {
                return children(this.target);
            },

            isEmpty: {

                get: function() {
                    return isEmpty(this.items);
                },

                watch: function(empty) {
                    toggleClass(this.target, this.clsEmpty, empty);
                },

                immediate: true

            },

            handles: {

                get: function(ref, el) {
                    var handle = ref.handle;

                    return handle ? $$(handle, el) : this.items;
                },

                watch: function(handles, prev) {
                    css(prev, {touchAction: '', userSelect: ''});
                    css(handles, {touchAction: hasTouch ? 'none' : '', userSelect: 'none'}); // touchAction set to 'none' causes a performance drop in Chrome 80
                },

                immediate: true

            }

        },

        update: {

            write: function(data) {

                if (!this.drag || !parent(this.placeholder)) {
                    return;
                }

                var ref = this;
                var ref_pos = ref.pos;
                var x = ref_pos.x;
                var y = ref_pos.y;
                var ref_origin = ref.origin;
                var offsetTop = ref_origin.offsetTop;
                var offsetLeft = ref_origin.offsetLeft;
                var placeholder = ref.placeholder;

                css(this.drag, {
                    top: y - offsetTop,
                    left: x - offsetLeft
                });

                var sortable = this.getSortable(document.elementFromPoint(x, y));

                if (!sortable) {
                    return;
                }

                var items = sortable.items;

                if (items.some(Transition.inProgress)) {
                    return;
                }

                var target = findTarget(items, {x: x, y: y});

                if (items.length && (!target || target === placeholder)) {
                    return;
                }

                var previous = this.getSortable(placeholder);
                var insertTarget = findInsertTarget(sortable.target, target, placeholder, x, y, sortable === previous && data.moved !== target);

                if (insertTarget === false) {
                    return;
                }

                if (insertTarget && placeholder === insertTarget) {
                    return;
                }

                if (sortable !== previous) {
                    previous.remove(placeholder);
                    data.moved = target;
                } else {
                    delete data.moved;
                }

                sortable.insert(placeholder, insertTarget);

                this.touched.add(sortable);
            },

            events: ['move']

        },

        methods: {

            init: function(e) {

                var target = e.target;
                var button = e.button;
                var defaultPrevented = e.defaultPrevented;
                var ref = this.items.filter(function (el) { return within(target, el); });
                var placeholder = ref[0];

                if (!placeholder
                    || defaultPrevented
                    || button > 0
                    || isInput(target)
                    || within(target, ("." + (this.clsNoDrag)))
                    || this.handle && !within(target, this.handle)
                ) {
                    return;
                }

                e.preventDefault();

                this.touched = new Set([this]);
                this.placeholder = placeholder;
                this.origin = assign({target: target, index: index(placeholder)}, this.pos);

                on(document, pointerMove, this.move);
                on(document, pointerUp, this.end);

                if (!this.threshold) {
                    this.start(e);
                }

            },

            start: function(e) {

                this.drag = appendDrag(this.$container, this.placeholder);
                var ref = this.placeholder.getBoundingClientRect();
                var left = ref.left;
                var top = ref.top;
                assign(this.origin, {offsetLeft: this.pos.x - left, offsetTop: this.pos.y - top});

                addClass(this.drag, this.clsDrag, this.clsCustom);
                addClass(this.placeholder, this.clsPlaceholder);
                addClass(this.items, this.clsItem);
                addClass(document.documentElement, this.clsDragState);

                trigger(this.$el, 'start', [this, this.placeholder]);

                trackScroll(this.pos);

                this.move(e);
            },

            move: function(e) {

                if (this.drag) {
                    this.$emit('move');
                } else if (Math.abs(this.pos.x - this.origin.x) > this.threshold || Math.abs(this.pos.y - this.origin.y) > this.threshold) {
                    this.start(e);
                }

            },

            end: function() {
                var this$1 = this;


                off(document, pointerMove, this.move);
                off(document, pointerUp, this.end);
                off(window, 'scroll', this.scroll);

                if (!this.drag) {
                    return;
                }

                untrackScroll();

                var sortable = this.getSortable(this.placeholder);

                if (this === sortable) {
                    if (this.origin.index !== index(this.placeholder)) {
                        trigger(this.$el, 'moved', [this, this.placeholder]);
                    }
                } else {
                    trigger(sortable.$el, 'added', [sortable, this.placeholder]);
                    trigger(this.$el, 'removed', [this, this.placeholder]);
                }

                trigger(this.$el, 'stop', [this, this.placeholder]);

                remove(this.drag);
                this.drag = null;

                this.touched.forEach(function (ref) {
                        var clsPlaceholder = ref.clsPlaceholder;
                        var clsItem = ref.clsItem;

                        return this$1.touched.forEach(function (sortable) { return removeClass(sortable.items, clsPlaceholder, clsItem); }
                    );
                }
                );
                this.touched = null;
                removeClass(document.documentElement, this.clsDragState);

            },

            insert: function(element, target) {
                var this$1 = this;


                addClass(this.items, this.clsItem);

                var insert = function () { return target
                    ? before(target, element)
                    : append(this$1.target, element); };

                if (this.animation) {
                    this.animate(insert);
                } else {
                    insert();
                }

            },

            remove: function(element) {

                if (!within(element, this.target)) {
                    return;
                }

                if (this.animation) {
                    this.animate(function () { return remove(element); });
                } else {
                    remove(element);
                }

            },

            getSortable: function(element) {
                do {
                    var sortable = this.$getComponent(element, 'sortable');

                    if (sortable && (sortable === this || this.group !== false && sortable.group === this.group)) {
                        return sortable;
                    }
                } while ((element = parent(element)));
            }

        }

    };

    var trackTimer;
    function trackScroll(pos) {

        var last = Date.now();
        trackTimer = setInterval(function () {

            var x = pos.x;
            var y = pos.y;
            y += window.pageYOffset;

            var dist = (Date.now() - last) * .3;
            last = Date.now();

            scrollParents(document.elementFromPoint(x, pos.y)).reverse().some(function (scrollEl) {

                var scroll = scrollEl.scrollTop;
                var scrollHeight = scrollEl.scrollHeight;

                var ref = offset(getViewport(scrollEl));
                var top = ref.top;
                var bottom = ref.bottom;
                var height = ref.height;

                if (top < y && top + 35 > y) {
                    scroll -= dist;
                } else if (bottom > y && bottom - 35 < y) {
                    scroll += dist;
                } else {
                    return;
                }

                if (scroll > 0 && scroll < scrollHeight - height) {
                    scrollTop(scrollEl, scroll);
                    return true;
                }

            });

        }, 15);

    }

    function untrackScroll() {
        clearInterval(trackTimer);
    }

    function appendDrag(container, element) {
        var clone = append(container, element.outerHTML.replace(/(^<)(?:li|tr)|(?:li|tr)(\/>$)/g, '$1div$2'));

        css(clone, 'margin', '0', 'important');
        css(clone, assign({
            boxSizing: 'border-box',
            width: element.offsetWidth,
            height: element.offsetHeight
        }, css(element, ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom'])));

        height(clone.firstElementChild, height(element.firstElementChild));

        return clone;
    }

    function findTarget(items, point) {
        return items[findIndex(items, function (item) { return pointInRect(point, item.getBoundingClientRect()); })];
    }

    function findInsertTarget(list, target, placeholder, x, y, sameList) {

        if (!children(list).length) {
            return;
        }

        var rect = target.getBoundingClientRect();
        if (!sameList) {

            if (!isHorizontal(list, placeholder)) {
                return y < rect.top + rect.height / 2
                    ? target
                    : target.nextElementSibling;
            }

            return target;
        }

        var placeholderRect = placeholder.getBoundingClientRect();
        var sameRow = linesIntersect(
            [rect.top, rect.bottom],
            [placeholderRect.top, placeholderRect.bottom]
        );

        var pointerPos = sameRow ? x : y;
        var lengthProp = sameRow ? 'width' : 'height';
        var startProp = sameRow ? 'left' : 'top';
        var endProp = sameRow ? 'right' : 'bottom';

        var diff = placeholderRect[lengthProp] < rect[lengthProp] ? rect[lengthProp] - placeholderRect[lengthProp] : 0;

        if (placeholderRect[startProp] < rect[startProp]) {

            if (diff && pointerPos < rect[startProp] + diff) {
                return false;
            }

            return target.nextElementSibling;
        }

        if (diff && pointerPos > rect[endProp] - diff) {
            return false;
        }

        return target;
    }

    function isHorizontal(list, placeholder) {

        var single = children(list).length === 1;

        if (single) {
            append(list, placeholder);
        }

        var items = children(list);
        var isHorizontal = items.some(function (el, i) {
            var rectA = el.getBoundingClientRect();
            return items.slice(i + 1).some(function (el) {
                var rectB = el.getBoundingClientRect();
                return !linesIntersect([rectA.left, rectA.right], [rectB.left, rectB.right]);
            });
        });

        if (single) {
            remove(placeholder);
        }

        return isHorizontal;
    }

    function linesIntersect(lineA, lineB) {
        return lineA[1] > lineB[0] && lineB[1] > lineA[0];
    }

    var obj$1;

    var tooltip = {

        mixins: [Container, Togglable, Position],

        args: 'title',

        props: {
            delay: Number,
            title: String
        },

        data: {
            pos: 'top',
            title: '',
            delay: 0,
            animation: ['uk-animation-scale-up'],
            duration: 100,
            cls: 'uk-active',
            clsPos: 'uk-tooltip'
        },

        beforeConnect: function() {
            this._hasTitle = hasAttr(this.$el, 'title');
            attr(this.$el, 'title', '');
            this.updateAria(false);
            makeFocusable(this.$el);
        },

        disconnected: function() {
            this.hide();
            attr(this.$el, 'title', this._hasTitle ? this.title : null);
        },

        methods: {

            show: function() {
                var this$1 = this;


                if (this.isToggled(this.tooltip) || !this.title) {
                    return;
                }

                this._unbind = once(document, ("show keydown " + pointerDown), this.hide, false, function (e) { return e.type === pointerDown && !within(e.target, this$1.$el)
                    || e.type === 'keydown' && e.keyCode === 27
                    || e.type === 'show' && e.detail[0] !== this$1 && e.detail[0].$name === this$1.$name; }
                );

                clearTimeout(this.showTimer);
                this.showTimer = setTimeout(this._show, this.delay);
            },

            hide: function() {
                var this$1 = this;


                if (matches(this.$el, 'input:focus')) {
                    return;
                }

                clearTimeout(this.showTimer);

                if (!this.isToggled(this.tooltip)) {
                    return;
                }

                this.toggleElement(this.tooltip, false, false).then(function () {
                    this$1.tooltip = remove(this$1.tooltip);
                    this$1._unbind();
                });
            },

            _show: function() {
                var this$1 = this;


                this.tooltip = append(this.container,
                    ("<div class=\"" + (this.clsPos) + "\"> <div class=\"" + (this.clsPos) + "-inner\">" + (this.title) + "</div> </div>")
                );

                on(this.tooltip, 'toggled', function (e, toggled) {

                    this$1.updateAria(toggled);

                    if (!toggled) {
                        return;
                    }

                    this$1.positionAt(this$1.tooltip, this$1.$el);

                    this$1.origin = this$1.getAxis() === 'y'
                        ? ((flipPosition(this$1.dir)) + "-" + (this$1.align))
                        : ((this$1.align) + "-" + (flipPosition(this$1.dir)));
                });

                this.toggleElement(this.tooltip, true);

            },

            updateAria: function(toggled) {
                attr(this.$el, 'aria-expanded', toggled);
            }

        },

        events: ( obj$1 = {

            focus: 'show',
            blur: 'hide'

        }, obj$1[(pointerEnter + " " + pointerLeave)] = function (e) {
                if (!isTouch(e)) {
                    this[e.type === pointerEnter ? 'show' : 'hide']();
                }
            }, obj$1[pointerDown] = function (e) {
                if (isTouch(e)) {
                    this.show();
                }
            }, obj$1 )

    };

    function makeFocusable(el) {
        if (!isFocusable(el)) {
            attr(el, 'tabindex', '0');
        }
    }

    function isFocusable(el) {
        return isInput(el) || matches(el, 'a,button') || hasAttr(el, 'tabindex');
    }

    var upload = {

        props: {
            allow: String,
            clsDragover: String,
            concurrent: Number,
            maxSize: Number,
            method: String,
            mime: String,
            msgInvalidMime: String,
            msgInvalidName: String,
            msgInvalidSize: String,
            multiple: Boolean,
            name: String,
            params: Object,
            type: String,
            url: String
        },

        data: {
            allow: false,
            clsDragover: 'uk-dragover',
            concurrent: 1,
            maxSize: 0,
            method: 'POST',
            mime: false,
            msgInvalidMime: 'Invalid File Type: %s',
            msgInvalidName: 'Invalid File Name: %s',
            msgInvalidSize: 'Invalid File Size: %s Kilobytes Max',
            multiple: false,
            name: 'files[]',
            params: {},
            type: '',
            url: '',
            abort: noop,
            beforeAll: noop,
            beforeSend: noop,
            complete: noop,
            completeAll: noop,
            error: noop,
            fail: noop,
            load: noop,
            loadEnd: noop,
            loadStart: noop,
            progress: noop
        },

        events: {

            change: function(e) {

                if (!matches(e.target, 'input[type="file"]')) {
                    return;
                }

                e.preventDefault();

                if (e.target.files) {
                    this.upload(e.target.files);
                }

                e.target.value = '';
            },

            drop: function(e) {
                stop(e);

                var transfer = e.dataTransfer;

                if (!transfer || !transfer.files) {
                    return;
                }

                removeClass(this.$el, this.clsDragover);

                this.upload(transfer.files);
            },

            dragenter: function(e) {
                stop(e);
            },

            dragover: function(e) {
                stop(e);
                addClass(this.$el, this.clsDragover);
            },

            dragleave: function(e) {
                stop(e);
                removeClass(this.$el, this.clsDragover);
            }

        },

        methods: {

            upload: function(files) {
                var this$1 = this;


                if (!files.length) {
                    return;
                }

                trigger(this.$el, 'upload', [files]);

                for (var i = 0; i < files.length; i++) {

                    if (this.maxSize && this.maxSize * 1000 < files[i].size) {
                        this.fail(this.msgInvalidSize.replace('%s', this.maxSize));
                        return;
                    }

                    if (this.allow && !match$1(this.allow, files[i].name)) {
                        this.fail(this.msgInvalidName.replace('%s', this.allow));
                        return;
                    }

                    if (this.mime && !match$1(this.mime, files[i].type)) {
                        this.fail(this.msgInvalidMime.replace('%s', this.mime));
                        return;
                    }

                }

                if (!this.multiple) {
                    files = [files[0]];
                }

                this.beforeAll(this, files);

                var chunks = chunk(files, this.concurrent);
                var upload = function (files) {

                    var data = new FormData();

                    files.forEach(function (file) { return data.append(this$1.name, file); });

                    for (var key in this$1.params) {
                        data.append(key, this$1.params[key]);
                    }

                    ajax(this$1.url, {
                        data: data,
                        method: this$1.method,
                        responseType: this$1.type,
                        beforeSend: function (env) {

                            var xhr = env.xhr;
                            xhr.upload && on(xhr.upload, 'progress', this$1.progress);
                            ['loadStart', 'load', 'loadEnd', 'abort'].forEach(function (type) { return on(xhr, type.toLowerCase(), this$1[type]); }
                            );

                            return this$1.beforeSend(env);

                        }
                    }).then(
                        function (xhr) {

                            this$1.complete(xhr);

                            if (chunks.length) {
                                upload(chunks.shift());
                            } else {
                                this$1.completeAll(xhr);
                            }

                        },
                        function (e) { return this$1.error(e); }
                    );

                };

                upload(chunks.shift());

            }

        }

    };

    function match$1(pattern, path) {
        return path.match(new RegExp(("^" + (pattern.replace(/\//g, '\\/').replace(/\*\*/g, '(\\/[^\\/]+)*').replace(/\*/g, '[^\\/]+').replace(/((?!\\))\?/g, '$1.')) + "$"), 'i'));
    }

    function chunk(files, size) {
        var chunks = [];
        for (var i = 0; i < files.length; i += size) {
            var chunk = [];
            for (var j = 0; j < size; j++) {
                chunk.push(files[i + j]);
            }
            chunks.push(chunk);
        }
        return chunks;
    }

    function stop(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    var components$1 = /*#__PURE__*/Object.freeze({
        __proto__: null,
        Countdown: countdown,
        Filter: filter$1,
        Lightbox: lightbox,
        LightboxPanel: LightboxPanel,
        Notification: notification,
        Parallax: parallax,
        Slider: slider,
        SliderParallax: sliderParallax,
        Slideshow: slideshow,
        SlideshowParallax: sliderParallax,
        Sortable: sortable,
        Tooltip: tooltip,
        Upload: upload
    });

    each(components$1, function (component, name) { return UIkit.component(name, component); }
    );

    return UIkit;

})));


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/*! UIkit 3.6.18 | https://www.getuikit.com | (c) 2014 - 2021 YOOtheme | MIT License */

(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, (function () { 'use strict';

    function plugin(UIkit) {

        if (plugin.installed) {
            return;
        }

        UIkit.icon.add({
        "500px": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.624,11.866c-0.141,0.132,0.479,0.658,0.662,0.418c0.051-0.046,0.607-0.61,0.662-0.664c0,0,0.738,0.719,0.814,0.719 c0.1,0,0.207-0.055,0.322-0.17c0.27-0.269,0.135-0.416,0.066-0.495l-0.631-0.616l0.658-0.668c0.146-0.156,0.021-0.314-0.1-0.449 c-0.182-0.18-0.359-0.226-0.471-0.125l-0.656,0.654l-0.654-0.654c-0.033-0.034-0.08-0.045-0.124-0.045 c-0.079,0-0.191,0.068-0.307,0.181c-0.202,0.202-0.247,0.351-0.133,0.462l0.665,0.665L9.624,11.866z\"/><path d=\"M11.066,2.884c-1.061,0-2.185,0.248-3.011,0.604c-0.087,0.034-0.141,0.106-0.15,0.205C7.893,3.784,7.919,3.909,7.982,4.066 c0.05,0.136,0.187,0.474,0.452,0.372c0.844-0.326,1.779-0.507,2.633-0.507c0.963,0,1.9,0.191,2.781,0.564 c0.695,0.292,1.357,0.719,2.078,1.34c0.051,0.044,0.105,0.068,0.164,0.068c0.143,0,0.273-0.137,0.389-0.271 c0.191-0.214,0.324-0.395,0.135-0.575c-0.686-0.654-1.436-1.138-2.363-1.533C13.24,3.097,12.168,2.884,11.066,2.884z\"/><path d=\"M16.43,15.747c-0.092-0.028-0.242,0.05-0.309,0.119l0,0c-0.652,0.652-1.42,1.169-2.268,1.521 c-0.877,0.371-1.814,0.551-2.779,0.551c-0.961,0-1.896-0.189-2.775-0.564c-0.848-0.36-1.612-0.879-2.268-1.53 c-0.682-0.688-1.196-1.455-1.529-2.268c-0.325-0.799-0.471-1.643-0.471-1.643c-0.045-0.24-0.258-0.249-0.567-0.203 c-0.128,0.021-0.519,0.079-0.483,0.36v0.01c0.105,0.644,0.289,1.284,0.545,1.895c0.417,0.969,1.002,1.849,1.756,2.604 c0.757,0.754,1.636,1.34,2.604,1.757C8.901,18.785,9.97,19,11.088,19c1.104,0,2.186-0.215,3.188-0.645 c1.838-0.896,2.604-1.757,2.604-1.757c0.182-0.204,0.227-0.317-0.1-0.643C16.779,15.956,16.525,15.774,16.43,15.747z\"/><path d=\"M5.633,13.287c0.293,0.71,0.723,1.341,1.262,1.882c0.54,0.54,1.172,0.971,1.882,1.264c0.731,0.303,1.509,0.461,2.298,0.461 c0.801,0,1.578-0.158,2.297-0.461c0.711-0.293,1.344-0.724,1.883-1.264c0.543-0.541,0.971-1.172,1.264-1.882 c0.314-0.721,0.463-1.5,0.463-2.298c0-0.79-0.148-1.569-0.463-2.289c-0.293-0.699-0.721-1.329-1.264-1.881 c-0.539-0.541-1.172-0.959-1.867-1.263c-0.721-0.303-1.5-0.461-2.299-0.461c-0.802,0-1.613,0.159-2.322,0.461 c-0.577,0.25-1.544,0.867-2.119,1.454v0.012V2.108h8.16C15.1,2.104,15.1,1.69,15.1,1.552C15.1,1.417,15.1,1,14.809,1H5.915 C5.676,1,5.527,1.192,5.527,1.384v6.84c0,0.214,0.273,0.372,0.529,0.428c0.5,0.105,0.614-0.056,0.737-0.224l0,0 c0.18-0.273,0.776-0.884,0.787-0.894c0.901-0.905,2.117-1.408,3.416-1.408c1.285,0,2.5,0.501,3.412,1.408 c0.914,0.914,1.408,2.122,1.408,3.405c0,1.288-0.508,2.496-1.408,3.405c-0.9,0.896-2.152,1.406-3.438,1.406 c-0.877,0-1.711-0.229-2.433-0.671v-4.158c0-0.553,0.237-1.151,0.643-1.614c0.462-0.519,1.094-0.799,1.782-0.799 c0.664,0,1.293,0.253,1.758,0.715c0.459,0.459,0.709,1.071,0.709,1.723c0,1.385-1.094,2.468-2.488,2.468 c-0.273,0-0.769-0.121-0.781-0.125c-0.281-0.087-0.405,0.306-0.438,0.436c-0.159,0.496,0.079,0.585,0.123,0.607 c0.452,0.137,0.743,0.157,1.129,0.157c1.973,0,3.572-1.6,3.572-3.57c0-1.964-1.6-3.552-3.572-3.552c-0.97,0-1.872,0.36-2.546,1.038 c-0.656,0.631-1.027,1.487-1.027,2.322v3.438v-0.011c-0.372-0.42-0.732-1.041-0.981-1.682c-0.102-0.248-0.315-0.202-0.607-0.113 c-0.135,0.035-0.519,0.157-0.44,0.439C5.372,12.799,5.577,13.164,5.633,13.287z\"/></svg>",
        "album": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"5\" y=\"2\" width=\"10\" height=\"1\"/><rect x=\"3\" y=\"4\" width=\"14\" height=\"1\"/><rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"6.5\" width=\"17\" height=\"11\"/></svg>",
        "arrow-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"10.5,16.08 5.63,10.66 6.37,10 10.5,14.58 14.63,10 15.37,10.66\"/><line fill=\"none\" stroke=\"#000\" x1=\"10.5\" y1=\"4\" x2=\"10.5\" y2=\"15\"/></svg>",
        "arrow-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"10 14 5 9.5 10 5\"/><line fill=\"none\" stroke=\"#000\" x1=\"16\" y1=\"9.5\" x2=\"5\" y2=\"9.52\"/></svg>",
        "arrow-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"10 5 15 9.5 10 14\"/><line fill=\"none\" stroke=\"#000\" x1=\"4\" y1=\"9.5\" x2=\"15\" y2=\"9.5\"/></svg>",
        "arrow-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"10.5,4 15.37,9.4 14.63,10.08 10.5,5.49 6.37,10.08 5.63,9.4\"/><line fill=\"none\" stroke=\"#000\" x1=\"10.5\" y1=\"16\" x2=\"10.5\" y2=\"5\"/></svg>",
        "ban": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"4\" y1=\"3.5\" x2=\"16\" y2=\"16.5\"/></svg>",
        "behance": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M9.5,10.6c-0.4-0.5-0.9-0.9-1.6-1.1c1.7-1,2.2-3.2,0.7-4.7C7.8,4,6.3,4,5.2,4C3.5,4,1.7,4,0,4v12c1.7,0,3.4,0,5.2,0 c1,0,2.1,0,3.1-0.5C10.2,14.6,10.5,12.3,9.5,10.6L9.5,10.6z M5.6,6.1c1.8,0,1.8,2.7-0.1,2.7c-1,0-2,0-2.9,0V6.1H5.6z M2.6,13.8v-3.1 c1.1,0,2.1,0,3.2,0c2.1,0,2.1,3.2,0.1,3.2L2.6,13.8z\"/><path d=\"M19.9,10.9C19.7,9.2,18.7,7.6,17,7c-4.2-1.3-7.3,3.4-5.3,7.1c0.9,1.7,2.8,2.3,4.7,2.1c1.7-0.2,2.9-1.3,3.4-2.9h-2.2 c-0.4,1.3-2.4,1.5-3.5,0.6c-0.4-0.4-0.6-1.1-0.6-1.7H20C20,11.7,19.9,10.9,19.9,10.9z M13.5,10.6c0-1.6,2.3-2.7,3.5-1.4 c0.4,0.4,0.5,0.9,0.6,1.4H13.5L13.5,10.6z\"/><rect x=\"13\" y=\"4\" width=\"5\" height=\"1.4\"/></svg>",
        "bell": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17,15.5 L3,15.5 C2.99,14.61 3.79,13.34 4.1,12.51 C4.58,11.3 4.72,10.35 5.19,7.01 C5.54,4.53 5.89,3.2 7.28,2.16 C8.13,1.56 9.37,1.5 9.81,1.5 L9.96,1.5 C9.96,1.5 11.62,1.41 12.67,2.17 C14.08,3.2 14.42,4.54 14.77,7.02 C15.26,10.35 15.4,11.31 15.87,12.52 C16.2,13.34 17.01,14.61 17,15.5 L17,15.5 Z\"/><path fill=\"none\" stroke=\"#000\" d=\"M12.39,16 C12.39,17.37 11.35,18.43 9.91,18.43 C8.48,18.43 7.42,17.37 7.42,16\"/></svg>",
        "bold": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5,15.3 C5.66,15.3 5.9,15 5.9,14.53 L5.9,5.5 C5.9,4.92 5.56,4.7 5,4.7 L5,4 L8.95,4 C12.6,4 13.7,5.37 13.7,6.9 C13.7,7.87 13.14,9.17 10.86,9.59 L10.86,9.7 C13.25,9.86 14.29,11.28 14.3,12.54 C14.3,14.47 12.94,16 9,16 L5,16 L5,15.3 Z M9,9.3 C11.19,9.3 11.8,8.5 11.85,7 C11.85,5.65 11.3,4.8 9,4.8 L7.67,4.8 L7.67,9.3 L9,9.3 Z M9.185,15.22 C11.97,15 12.39,14 12.4,12.58 C12.4,11.15 11.39,10 9,10 L7.67,10 L7.67,15 L9.18,15 Z\"/></svg>",
        "bolt": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.74,20 L7.73,12 L3,12 L15.43,1 L12.32,9 L17.02,9 L4.74,20 L4.74,20 L4.74,20 Z M9.18,11 L7.1,16.39 L14.47,10 L10.86,10 L12.99,4.67 L5.61,11 L9.18,11 L9.18,11 L9.18,11 Z\"/></svg>",
        "bookmark": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"5.5 1.5 15.5 1.5 15.5 17.5 10.5 12.5 5.5 17.5\"/></svg>",
        "calendar": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z\"/><rect width=\"1\" height=\"3\" x=\"6\" y=\"2\"/><rect width=\"1\" height=\"3\" x=\"13\" y=\"2\"/></svg>",
        "camera": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10.8\" r=\"3.8\"/><path fill=\"none\" stroke=\"#000\" d=\"M1,4.5 C0.7,4.5 0.5,4.7 0.5,5 L0.5,17 C0.5,17.3 0.7,17.5 1,17.5 L19,17.5 C19.3,17.5 19.5,17.3 19.5,17 L19.5,5 C19.5,4.7 19.3,4.5 19,4.5 L13.5,4.5 L13.5,2.9 C13.5,2.6 13.3,2.5 13,2.5 L7,2.5 C6.7,2.5 6.5,2.6 6.5,2.9 L6.5,4.5 L1,4.5 L1,4.5 Z\"/></svg>",
        "cart": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"7.3\" cy=\"17.3\" r=\"1.4\"/><circle cx=\"13.3\" cy=\"17.3\" r=\"1.4\"/><polyline fill=\"none\" stroke=\"#000\" points=\"0 2 3.2 4 5.3 12.5 16 12.5 18 6.5 8 6.5\"/></svg>",
        "check": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" points=\"4,10 8,15 17,4\"/></svg>",
        "chevron-double-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"10 14 6 10 10 6\"/><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"14 14 10 10 14 6\"/></svg>",
        "chevron-double-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"10 6 14 10 10 14\"/><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"6 6 10 10 6 14\"/></svg>",
        "chevron-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"16 7 10 13 4 7\"/></svg>",
        "chevron-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"13 16 7 10 13 4\"/></svg>",
        "chevron-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"7 4 13 10 7 16\"/></svg>",
        "chevron-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" points=\"4 13 10 7 16 13\"/></svg>",
        "clock": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/><rect x=\"9\" y=\"4\" width=\"1\" height=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M13.018,14.197 L9.445,10.625\"/></svg>",
        "close": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.06\" d=\"M16,16 L4,4\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.06\" d=\"M16,4 L4,16\"/></svg>",
        "cloud-download": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.3,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6\"/><polyline fill=\"none\" stroke=\"#000\" points=\"11.75 16 9.5 18.25 7.25 16\"/><path fill=\"none\" stroke=\"#000\" d=\"M9.5,18 L9.5,9.5\"/></svg>",
        "cloud-upload": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.5,14.61 L3.75,14.61 C1.96,14.61 0.5,13.17 0.5,11.39 C0.5,9.76 1.72,8.41 3.31,8.2 C3.38,5.31 5.75,3 8.68,3 C11.19,3 13.31,4.71 13.89,7.02 C14.39,6.8 14.93,6.68 15.5,6.68 C17.71,6.68 19.5,8.45 19.5,10.64 C19.5,12.83 17.71,14.6 15.5,14.6 L12.5,14.6\"/><polyline fill=\"none\" stroke=\"#000\" points=\"7.25 11.75 9.5 9.5 11.75 11.75\"/><path fill=\"none\" stroke=\"#000\" d=\"M9.5,18 L9.5,9.5\"/></svg>",
        "code": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"13,4 19,10 13,16\"/><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"7,4 1,10 7,16\"/></svg>",
        "cog": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" cx=\"9.997\" cy=\"10\" r=\"3.31\"/><path fill=\"none\" stroke=\"#000\" d=\"M18.488,12.285 L16.205,16.237 C15.322,15.496 14.185,15.281 13.303,15.791 C12.428,16.289 12.047,17.373 12.246,18.5 L7.735,18.5 C7.938,17.374 7.553,16.299 6.684,15.791 C5.801,15.27 4.655,15.492 3.773,16.237 L1.5,12.285 C2.573,11.871 3.317,10.999 3.317,9.991 C3.305,8.98 2.573,8.121 1.5,7.716 L3.765,3.784 C4.645,4.516 5.794,4.738 6.687,4.232 C7.555,3.722 7.939,2.637 7.735,1.5 L12.263,1.5 C12.072,2.637 12.441,3.71 13.314,4.22 C14.206,4.73 15.343,4.516 16.225,3.794 L18.487,7.714 C17.404,8.117 16.661,8.988 16.67,10.009 C16.672,11.018 17.415,11.88 18.488,12.285 L18.488,12.285 Z\"/></svg>",
        "comment": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6,18.71 L6,14 L1,14 L1,1 L19,1 L19,14 L10.71,14 L6,18.71 L6,18.71 Z M2,13 L7,13 L7,16.29 L10.29,13 L18,13 L18,2 L2,2 L2,13 L2,13 Z\"/></svg>",
        "commenting": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"1.5,1.5 18.5,1.5 18.5,13.5 10.5,13.5 6.5,17.5 6.5,13.5 1.5,13.5\"/><circle cx=\"10\" cy=\"8\" r=\"1\"/><circle cx=\"6\" cy=\"8\" r=\"1\"/><circle cx=\"14\" cy=\"8\" r=\"1\"/></svg>",
        "comments": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"2 0.5 19.5 0.5 19.5 13\"/><path d=\"M5,19.71 L5,15 L0,15 L0,2 L18,2 L18,15 L9.71,15 L5,19.71 L5,19.71 L5,19.71 Z M1,14 L6,14 L6,17.29 L9.29,14 L17,14 L17,3 L1,3 L1,14 L1,14 L1,14 Z\"/></svg>",
        "copy": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"2.5\" width=\"12\" height=\"16\"/><polyline fill=\"none\" stroke=\"#000\" points=\"5 0.5 17.5 0.5 17.5 17\"/></svg>",
        "credit-card": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"4.5\" width=\"17\" height=\"12\"/><rect x=\"1\" y=\"7\" width=\"18\" height=\"3\"/></svg>",
        "database": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"4.64\" rx=\"7.5\" ry=\"3.14\"/><path fill=\"none\" stroke=\"#000\" d=\"M17.5,8.11 C17.5,9.85 14.14,11.25 10,11.25 C5.86,11.25 2.5,9.84 2.5,8.11\"/><path fill=\"none\" stroke=\"#000\" d=\"M17.5,11.25 C17.5,12.99 14.14,14.39 10,14.39 C5.86,14.39 2.5,12.98 2.5,11.25\"/><path fill=\"none\" stroke=\"#000\" d=\"M17.49,4.64 L17.5,14.36 C17.5,16.1 14.14,17.5 10,17.5 C5.86,17.5 2.5,16.09 2.5,14.36 L2.5,4.64\"/></svg>",
        "desktop": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"8\" y=\"15\" width=\"1\" height=\"2\"/><rect x=\"11\" y=\"15\" width=\"1\" height=\"2\"/><rect x=\"5\" y=\"16\" width=\"10\" height=\"1\"/><rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"3.5\" width=\"17\" height=\"11\"/></svg>",
        "discord": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.68,1H3.81A1.81,1.81,0,0,0,2,2.81V14.68a1.81,1.81,0,0,0,1.81,1.81h10l-.47-1.62,1.14,1.05,1.07,1,1.91,1.65V2.81A1.82,1.82,0,0,0,15.68,1ZM12.26,12.46l-.58-.7a2.85,2.85,0,0,0,1.6-1,4.92,4.92,0,0,1-1,.52,6.23,6.23,0,0,1-3.58.37,6.5,6.5,0,0,1-1.3-.38,4.53,4.53,0,0,1-.64-.3l-.08,0,0,0-.25-.15a2.84,2.84,0,0,0,1.55,1c-.26.33-.59.72-.59.72a3.21,3.21,0,0,1-2.7-1.33A11.71,11.71,0,0,1,5.9,6,4.37,4.37,0,0,1,8.38,5.1l.09.1A5.91,5.91,0,0,0,6.15,6.36s.2-.11.52-.25a7,7,0,0,1,2-.56l.15,0a7.58,7.58,0,0,1,1.79,0,7.38,7.38,0,0,1,2.67.85,5.76,5.76,0,0,0-2.21-1.12l.13-.14A4.31,4.31,0,0,1,13.68,6,11.64,11.64,0,0,1,15,11.14,3.25,3.25,0,0,1,12.26,12.46Z\"/><path d=\"M8.14,8.36a1,1,0,1,0,.91,1A.94.94,0,0,0,8.14,8.36Zm3.23,0a1,1,0,1,0,.91,1A.94.94,0,0,0,11.37,8.36Z\"/></svg>",
        "download": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"14,10 9.5,14.5 5,10\"/><rect x=\"3\" y=\"17\" width=\"13\" height=\"1\"/><line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"13.91\" x2=\"9.5\" y2=\"3\"/></svg>",
        "dribbble": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M1.3,8.9c0,0,5,0.1,8.6-1c1.4-0.4,2.6-0.9,4-1.9 c1.4-1.1,2.5-2.5,2.5-2.5\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M3.9,16.6c0,0,1.7-2.8,3.5-4.2 c1.8-1.3,4-2,5.7-2.2C16,10,19,10.6,19,10.6\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" d=\"M6.9,1.6c0,0,3.3,4.6,4.2,6.8 c0.4,0.9,1.3,3.1,1.9,5.2c0.6,2,0.9,4.4,0.9,4.4\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.4\" cx=\"10\" cy=\"10\" r=\"9\"/></svg>",
        "etsy": "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"20\" height=\"20\" viewBox=\"0 0 20 20\"><path d=\"M8,4.26C8,4.07,8,4,8.31,4h4.46c.79,0,1.22.67,1.53,1.91l.25,1h.76c.14-2.82.26-4,.26-4S13.65,3,12.52,3H6.81L3.75,2.92v.84l1,.2c.73.11.9.27,1,1,0,0,.06,2,.06,5.17s-.06,5.14-.06,5.14c0,.59-.23.81-1,.94l-1,.2v.84l3.06-.1h5.11c1.15,0,3.82.1,3.82.1,0-.7.45-3.88.51-4.22h-.73l-.76,1.69a2.25,2.25,0,0,1-2.45,1.47H9.4c-1,0-1.44-.4-1.44-1.24V10.44s2.16,0,2.86.06c.55,0,.85.19,1.06,1l.23,1H13L12.9,9.94,13,7.41h-.85l-.28,1.13c-.16.74-.28.84-1,1-1,.1-2.89.09-2.89.09Z\"/></svg>",
        "expand": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"13 2 18 2 18 7 17 7 17 3 13 3\"/><polygon points=\"2 13 3 13 3 17 7 17 7 18 2 18\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M11,9 L17,3\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M3,17 L9,11\"/></svg>",
        "facebook": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M11,10h2.6l0.4-3H11V5.3c0-0.9,0.2-1.5,1.5-1.5H14V1.1c-0.3,0-1-0.1-2.1-0.1C9.6,1,8,2.4,8,5v2H5.5v3H8v8h3V10z\"/></svg>",
        "file-edit": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M18.65,1.68 C18.41,1.45 18.109,1.33 17.81,1.33 C17.499,1.33 17.209,1.45 16.98,1.68 L8.92,9.76 L8,12.33 L10.55,11.41 L18.651,3.34 C19.12,2.87 19.12,2.15 18.65,1.68 L18.65,1.68 L18.65,1.68 Z\"/><polyline fill=\"none\" stroke=\"#000\" points=\"16.5 8.482 16.5 18.5 3.5 18.5 3.5 1.5 14.211 1.5\"/></svg>",
        "file-pdf": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" width=\"13\" height=\"17\" x=\"3.5\" y=\"1.5\"/><path d=\"M14.65 11.67c-.48.3-1.37-.19-1.79-.37a4.65 4.65 0 0 1 1.49.06c.35.1.36.28.3.31zm-6.3.06l.43-.79a14.7 14.7 0 0 0 .75-1.64 5.48 5.48 0 0 0 1.25 1.55l.2.15a16.36 16.36 0 0 0-2.63.73zM9.5 5.32c.2 0 .32.5.32.97a1.99 1.99 0 0 1-.23 1.04 5.05 5.05 0 0 1-.17-1.3s0-.71.08-.71zm-3.9 9a4.35 4.35 0 0 1 1.21-1.46l.24-.22a4.35 4.35 0 0 1-1.46 1.68zm9.23-3.3a2.05 2.05 0 0 0-1.32-.3 11.07 11.07 0 0 0-1.58.11 4.09 4.09 0 0 1-.74-.5 5.39 5.39 0 0 1-1.32-2.06 10.37 10.37 0 0 0 .28-2.62 1.83 1.83 0 0 0-.07-.25.57.57 0 0 0-.52-.4H9.4a.59.59 0 0 0-.6.38 6.95 6.95 0 0 0 .37 3.14c-.26.63-1 2.12-1 2.12-.3.58-.57 1.08-.82 1.5l-.8.44A3.11 3.11 0 0 0 5 14.16a.39.39 0 0 0 .15.42l.24.13c1.15.56 2.28-1.74 2.66-2.42a23.1 23.1 0 0 1 3.59-.85 4.56 4.56 0 0 0 2.91.8.5.5 0 0 0 .3-.21 1.1 1.1 0 0 0 .12-.75.84.84 0 0 0-.14-.25z\"/></svg>",
        "file-text": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" width=\"13\" height=\"17\" x=\"3.5\" y=\"1.5\"/><line fill=\"none\" stroke=\"#000\" x1=\"6\" x2=\"12\" y1=\"12.5\" y2=\"12.5\"/><line fill=\"none\" stroke=\"#000\" x1=\"6\" x2=\"14\" y1=\"8.5\" y2=\"8.5\"/><line fill=\"none\" stroke=\"#000\" x1=\"6\" x2=\"14\" y1=\"6.5\" y2=\"6.5\"/><line fill=\"none\" stroke=\"#000\" x1=\"6\" x2=\"14\" y1=\"10.5\" y2=\"10.5\"/></svg>",
        "file": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"1.5\" width=\"13\" height=\"17\"/></svg>",
        "flickr": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"5.5\" cy=\"9.5\" r=\"3.5\"/><circle cx=\"14.5\" cy=\"9.5\" r=\"3.5\"/></svg>",
        "folder": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"9.5 5.5 8.5 3.5 1.5 3.5 1.5 16.5 18.5 16.5 18.5 5.5\"/></svg>",
        "forward": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.47,13.11 C4.02,10.02 6.27,7.85 9.04,6.61 C9.48,6.41 10.27,6.13 11,5.91 L11,2 L18.89,9 L11,16 L11,12.13 C9.25,12.47 7.58,13.19 6.02,14.25 C3.03,16.28 1.63,18.54 1.63,18.54 C1.63,18.54 1.38,15.28 2.47,13.11 L2.47,13.11 Z M5.3,13.53 C6.92,12.4 9.04,11.4 12,10.92 L12,13.63 L17.36,9 L12,4.25 L12,6.8 C11.71,6.86 10.86,7.02 9.67,7.49 C6.79,8.65 4.58,10.96 3.49,13.08 C3.18,13.7 2.68,14.87 2.49,16 C3.28,15.05 4.4,14.15 5.3,13.53 L5.3,13.53 Z\"/></svg>",
        "foursquare": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.23,2 C15.96,2 16.4,2.41 16.5,2.86 C16.57,3.15 16.56,3.44 16.51,3.73 C16.46,4.04 14.86,11.72 14.75,12.03 C14.56,12.56 14.16,12.82 13.61,12.83 C13.03,12.84 11.09,12.51 10.69,13 C10.38,13.38 7.79,16.39 6.81,17.53 C6.61,17.76 6.4,17.96 6.08,17.99 C5.68,18.04 5.29,17.87 5.17,17.45 C5.12,17.28 5.1,17.09 5.1,16.91 C5.1,12.4 4.86,7.81 5.11,3.31 C5.17,2.5 5.81,2.12 6.53,2 L15.23,2 L15.23,2 Z M9.76,11.42 C9.94,11.19 10.17,11.1 10.45,11.1 L12.86,11.1 C13.12,11.1 13.31,10.94 13.36,10.69 C13.37,10.64 13.62,9.41 13.74,8.83 C13.81,8.52 13.53,8.28 13.27,8.28 C12.35,8.29 11.42,8.28 10.5,8.28 C9.84,8.28 9.83,7.69 9.82,7.21 C9.8,6.85 10.13,6.55 10.5,6.55 C11.59,6.56 12.67,6.55 13.76,6.55 C14.03,6.55 14.23,6.4 14.28,6.14 C14.34,5.87 14.67,4.29 14.67,4.29 C14.67,4.29 14.82,3.74 14.19,3.74 L7.34,3.74 C7,3.75 6.84,4.02 6.84,4.33 C6.84,7.58 6.85,14.95 6.85,14.99 C6.87,15 8.89,12.51 9.76,11.42 L9.76,11.42 Z\"/></svg>",
        "future": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline points=\"19 2 18 2 18 6 14 6 14 7 19 7 19 2\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M18,6.548 C16.709,3.29 13.354,1 9.6,1 C4.6,1 0.6,5 0.6,10 C0.6,15 4.6,19 9.6,19 C14.6,19 18.6,15 18.6,10\"/><rect x=\"9\" y=\"4\" width=\"1\" height=\"7\"/><path d=\"M13.018,14.197 L9.445,10.625\" fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\"/></svg>",
        "git-branch": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"7\" cy=\"3\" r=\"2\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"14\" cy=\"6\" r=\"2\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"7\" cy=\"17\" r=\"2\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"2\" d=\"M14,8 C14,10.41 12.43,10.87 10.56,11.25 C9.09,11.54 7,12.06 7,15 L7,5\"/></svg>",
        "git-fork": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"5.79\" cy=\"2.79\" r=\"1.79\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"14.19\" cy=\"2.79\" r=\"1.79\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" cx=\"10.03\" cy=\"16.79\" r=\"1.79\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"2\" d=\"M5.79,4.57 L5.79,6.56 C5.79,9.19 10.03,10.22 10.03,13.31 C10.03,14.86 10.04,14.55 10.04,14.55 C10.04,14.37 10.04,14.86 10.04,13.31 C10.04,10.22 14.2,9.19 14.2,6.56 L14.2,4.57\"/></svg>",
        "github-alt": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10,0.5 C4.75,0.5 0.5,4.76 0.5,10.01 C0.5,15.26 4.75,19.51 10,19.51 C15.24,19.51 19.5,15.26 19.5,10.01 C19.5,4.76 15.25,0.5 10,0.5 L10,0.5 Z M12.81,17.69 C12.81,17.69 12.81,17.7 12.79,17.69 C12.47,17.75 12.35,17.59 12.35,17.36 L12.35,16.17 C12.35,15.45 12.09,14.92 11.58,14.56 C12.2,14.51 12.77,14.39 13.26,14.21 C13.87,13.98 14.36,13.69 14.74,13.29 C15.42,12.59 15.76,11.55 15.76,10.17 C15.76,9.25 15.45,8.46 14.83,7.8 C15.1,7.08 15.07,6.29 14.75,5.44 L14.51,5.42 C14.34,5.4 14.06,5.46 13.67,5.61 C13.25,5.78 12.79,6.03 12.31,6.35 C11.55,6.16 10.81,6.05 10.09,6.05 C9.36,6.05 8.61,6.15 7.88,6.35 C7.28,5.96 6.75,5.68 6.26,5.54 C6.07,5.47 5.9,5.44 5.78,5.44 L5.42,5.44 C5.06,6.29 5.04,7.08 5.32,7.8 C4.7,8.46 4.4,9.25 4.4,10.17 C4.4,11.94 4.96,13.16 6.08,13.84 C6.53,14.13 7.05,14.32 7.69,14.43 C8.03,14.5 8.32,14.54 8.55,14.55 C8.07,14.89 7.82,15.42 7.82,16.16 L7.82,17.51 C7.8,17.69 7.7,17.8 7.51,17.8 C4.21,16.74 1.82,13.65 1.82,10.01 C1.82,5.5 5.49,1.83 10,1.83 C14.5,1.83 18.17,5.5 18.17,10.01 C18.18,13.53 15.94,16.54 12.81,17.69 L12.81,17.69 Z\"/></svg>",
        "github": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10,1 C5.03,1 1,5.03 1,10 C1,13.98 3.58,17.35 7.16,18.54 C7.61,18.62 7.77,18.34 7.77,18.11 C7.77,17.9 7.76,17.33 7.76,16.58 C5.26,17.12 4.73,15.37 4.73,15.37 C4.32,14.33 3.73,14.05 3.73,14.05 C2.91,13.5 3.79,13.5 3.79,13.5 C4.69,13.56 5.17,14.43 5.17,14.43 C5.97,15.8 7.28,15.41 7.79,15.18 C7.87,14.6 8.1,14.2 8.36,13.98 C6.36,13.75 4.26,12.98 4.26,9.53 C4.26,8.55 4.61,7.74 5.19,7.11 C5.1,6.88 4.79,5.97 5.28,4.73 C5.28,4.73 6.04,4.49 7.75,5.65 C8.47,5.45 9.24,5.35 10,5.35 C10.76,5.35 11.53,5.45 12.25,5.65 C13.97,4.48 14.72,4.73 14.72,4.73 C15.21,5.97 14.9,6.88 14.81,7.11 C15.39,7.74 15.73,8.54 15.73,9.53 C15.73,12.99 13.63,13.75 11.62,13.97 C11.94,14.25 12.23,14.8 12.23,15.64 C12.23,16.84 12.22,17.81 12.22,18.11 C12.22,18.35 12.38,18.63 12.84,18.54 C16.42,17.35 19,13.98 19,10 C19,5.03 14.97,1 10,1 L10,1 Z\"/></svg>",
        "gitter": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"3.5\" y=\"1\" width=\"1.531\" height=\"11.471\"/><rect x=\"7.324\" y=\"4.059\" width=\"1.529\" height=\"15.294\"/><rect x=\"11.148\" y=\"4.059\" width=\"1.527\" height=\"15.294\"/><rect x=\"14.971\" y=\"4.059\" width=\"1.529\" height=\"8.412\"/></svg>",
        "google": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z\"/></svg>",
        "grid": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"2\" width=\"3\" height=\"3\"/><rect x=\"8\" y=\"2\" width=\"3\" height=\"3\"/><rect x=\"14\" y=\"2\" width=\"3\" height=\"3\"/><rect x=\"2\" y=\"8\" width=\"3\" height=\"3\"/><rect x=\"8\" y=\"8\" width=\"3\" height=\"3\"/><rect x=\"14\" y=\"8\" width=\"3\" height=\"3\"/><rect x=\"2\" y=\"14\" width=\"3\" height=\"3\"/><rect x=\"8\" y=\"14\" width=\"3\" height=\"3\"/><rect x=\"14\" y=\"14\" width=\"3\" height=\"3\"/></svg>",
        "happy": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"13\" cy=\"7\" r=\"1\"/><circle cx=\"7\" cy=\"7\" r=\"1\"/><circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10\" r=\"8.5\"/><path fill=\"none\" stroke=\"#000\" d=\"M14.6,11.4 C13.9,13.3 12.1,14.5 10,14.5 C7.9,14.5 6.1,13.3 5.4,11.4\"/></svg>",
        "hashtag": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15.431,8 L15.661,7 L12.911,7 L13.831,3 L12.901,3 L11.98,7 L9.29,7 L10.21,3 L9.281,3 L8.361,7 L5.23,7 L5,8 L8.13,8 L7.21,12 L4.23,12 L4,13 L6.98,13 L6.061,17 L6.991,17 L7.911,13 L10.601,13 L9.681,17 L10.611,17 L11.531,13 L14.431,13 L14.661,12 L11.76,12 L12.681,8 L15.431,8 Z M10.831,12 L8.141,12 L9.061,8 L11.75,8 L10.831,12 Z\"/></svg>",
        "heart": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.03\" d=\"M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z\"/></svg>",
        "history": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"#000\" points=\"1 2 2 2 2 6 6 6 6 7 1 7 1 2\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M2.1,6.548 C3.391,3.29 6.746,1 10.5,1 C15.5,1 19.5,5 19.5,10 C19.5,15 15.5,19 10.5,19 C5.5,19 1.5,15 1.5,10\"/><rect x=\"9\" y=\"4\" width=\"1\" height=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M13.018,14.197 L9.445,10.625\"/></svg>",
        "home": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"18.65 11.35 10 2.71 1.35 11.35 0.65 10.65 10 1.29 19.35 10.65\"/><polygon points=\"15 4 18 4 18 7 17 7 17 5 15 5\"/><polygon points=\"3 11 4 11 4 18 7 18 7 12 12 12 12 18 16 18 16 11 17 11 17 19 11 19 11 13 8 13 8 19 3 19\"/></svg>",
        "image": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"16.1\" cy=\"6.1\" r=\"1.1\"/><rect fill=\"none\" stroke=\"#000\" x=\".5\" y=\"2.5\" width=\"19\" height=\"15\"/><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"4,13 8,9 13,14\"/><polyline fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"11,12 12.5,10.5 16,14\"/></svg>",
        "info": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.13,11.59 C11.97,12.84 10.35,14.12 9.1,14.16 C6.17,14.2 9.89,9.46 8.74,8.37 C9.3,8.16 10.62,7.83 10.62,8.81 C10.62,9.63 10.12,10.55 9.88,11.32 C8.66,15.16 12.13,11.15 12.14,11.18 C12.16,11.21 12.16,11.35 12.13,11.59 C12.08,11.95 12.16,11.35 12.13,11.59 L12.13,11.59 Z M11.56,5.67 C11.56,6.67 9.36,7.15 9.36,6.03 C9.36,5 11.56,4.54 11.56,5.67 L11.56,5.67 Z\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/></svg>",
        "instagram": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z\"/><circle cx=\"14.87\" cy=\"5.26\" r=\"1.09\"/><path d=\"M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z\"/></svg>",
        "italic": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M12.63,5.48 L10.15,14.52 C10,15.08 10.37,15.25 11.92,15.3 L11.72,16 L6,16 L6.2,15.31 C7.78,15.26 8.19,15.09 8.34,14.53 L10.82,5.49 C10.97,4.92 10.63,4.76 9.09,4.71 L9.28,4 L15,4 L14.81,4.69 C13.23,4.75 12.78,4.91 12.63,5.48 L12.63,5.48 Z\"/></svg>",
        "joomla": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M7.8,13.4l1.7-1.7L5.9,8c-0.6-0.5-0.6-1.5,0-2c0.6-0.6,1.4-0.6,2,0l1.7-1.7c-1-1-2.3-1.3-3.6-1C5.8,2.2,4.8,1.4,3.7,1.4 c-1.3,0-2.3,1-2.3,2.3c0,1.1,0.8,2,1.8,2.3c-0.4,1.3-0.1,2.8,1,3.8L7.8,13.4L7.8,13.4z\"/><path d=\"M10.2,4.3c1-1,2.5-1.4,3.8-1c0.2-1.1,1.1-2,2.3-2c1.3,0,2.3,1,2.3,2.3c0,1.2-0.9,2.2-2,2.3c0.4,1.3,0,2.8-1,3.8L13.9,8 c0.6-0.5,0.6-1.5,0-2c-0.5-0.6-1.5-0.6-2,0L8.2,9.7L6.5,8\"/><path d=\"M14.1,16.8c-1.3,0.4-2.8,0.1-3.8-1l1.7-1.7c0.6,0.6,1.5,0.6,2,0c0.5-0.6,0.6-1.5,0-2l-3.7-3.7L12,6.7l3.7,3.7 c1,1,1.3,2.4,1,3.6c1.1,0.2,2,1.1,2,2.3c0,1.3-1,2.3-2.3,2.3C15.2,18.6,14.3,17.8,14.1,16.8\"/><path d=\"M13.2,12.2l-3.7,3.7c-1,1-2.4,1.3-3.6,1c-0.2,1-1.2,1.8-2.2,1.8c-1.3,0-2.3-1-2.3-2.3c0-1.1,0.8-2,1.8-2.3 c-0.3-1.3,0-2.7,1-3.7l1.7,1.7c-0.6,0.6-0.6,1.5,0,2c0.6,0.6,1.4,0.6,2,0l3.7-3.7\"/></svg>",
        "laptop": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect y=\"16\" width=\"20\" height=\"1\"/><rect fill=\"none\" stroke=\"#000\" x=\"2.5\" y=\"4.5\" width=\"15\" height=\"10\"/></svg>",
        "lifesaver": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10,0.5 C4.76,0.5 0.5,4.76 0.5,10 C0.5,15.24 4.76,19.5 10,19.5 C15.24,19.5 19.5,15.24 19.5,10 C19.5,4.76 15.24,0.5 10,0.5 L10,0.5 Z M10,1.5 C11.49,1.5 12.89,1.88 14.11,2.56 L11.85,4.82 C11.27,4.61 10.65,4.5 10,4.5 C9.21,4.5 8.47,4.67 7.79,4.96 L5.58,2.75 C6.87,1.95 8.38,1.5 10,1.5 L10,1.5 Z M4.96,7.8 C4.67,8.48 4.5,9.21 4.5,10 C4.5,10.65 4.61,11.27 4.83,11.85 L2.56,14.11 C1.88,12.89 1.5,11.49 1.5,10 C1.5,8.38 1.95,6.87 2.75,5.58 L4.96,7.79 L4.96,7.8 L4.96,7.8 Z M10,18.5 C8.25,18.5 6.62,17.97 5.27,17.06 L7.46,14.87 C8.22,15.27 9.08,15.5 10,15.5 C10.79,15.5 11.53,15.33 12.21,15.04 L14.42,17.25 C13.13,18.05 11.62,18.5 10,18.5 L10,18.5 Z M10,14.5 C7.52,14.5 5.5,12.48 5.5,10 C5.5,7.52 7.52,5.5 10,5.5 C12.48,5.5 14.5,7.52 14.5,10 C14.5,12.48 12.48,14.5 10,14.5 L10,14.5 Z M15.04,12.21 C15.33,11.53 15.5,10.79 15.5,10 C15.5,9.08 15.27,8.22 14.87,7.46 L17.06,5.27 C17.97,6.62 18.5,8.25 18.5,10 C18.5,11.62 18.05,13.13 17.25,14.42 L15.04,12.21 L15.04,12.21 Z\"/></svg>",
        "link": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M10.625,12.375 L7.525,15.475 C6.825,16.175 5.925,16.175 5.225,15.475 L4.525,14.775 C3.825,14.074 3.825,13.175 4.525,12.475 L7.625,9.375\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M9.325,7.375 L12.425,4.275 C13.125,3.575 14.025,3.575 14.724,4.275 L15.425,4.975 C16.125,5.675 16.125,6.575 15.425,7.275 L12.325,10.375\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M7.925,11.875 L11.925,7.975\"/></svg>",
        "linkedin": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z\"/><path d=\"M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z\"/></svg>",
        "list": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"6\" y=\"4\" width=\"12\" height=\"1\"/><rect x=\"6\" y=\"9\" width=\"12\" height=\"1\"/><rect x=\"6\" y=\"14\" width=\"12\" height=\"1\"/><rect x=\"2\" y=\"4\" width=\"2\" height=\"1\"/><rect x=\"2\" y=\"9\" width=\"2\" height=\"1\"/><rect x=\"2\" y=\"14\" width=\"2\" height=\"1\"/></svg>",
        "location": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" d=\"M10,0.5 C6.41,0.5 3.5,3.39 3.5,6.98 C3.5,11.83 10,19 10,19 C10,19 16.5,11.83 16.5,6.98 C16.5,3.39 13.59,0.5 10,0.5 L10,0.5 Z\"/><circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"6.8\" r=\"2.3\"/></svg>",
        "lock": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" height=\"10\" width=\"13\" y=\"8.5\" x=\"3.5\"/><path fill=\"none\" stroke=\"#000\" d=\"M6.5,8 L6.5,4.88 C6.5,3.01 8.07,1.5 10,1.5 C11.93,1.5 13.5,3.01 13.5,4.88 L13.5,8\"/></svg>",
        "mail": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"1.4,6.5 10,11 18.6,6.5\"/><path d=\"M 1,4 1,16 19,16 19,4 1,4 Z M 18,15 2,15 2,5 18,5 18,15 Z\"/></svg>",
        "menu": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"2\" y=\"4\" width=\"16\" height=\"1\"/><rect x=\"2\" y=\"9\" width=\"16\" height=\"1\"/><rect x=\"2\" y=\"14\" width=\"16\" height=\"1\"/></svg>",
        "microphone": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" x1=\"10\" x2=\"10\" y1=\"16.44\" y2=\"18.5\"/><line fill=\"none\" stroke=\"#000\" x1=\"7\" x2=\"13\" y1=\"18.5\" y2=\"18.5\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M13.5 4.89v5.87a3.5 3.5 0 0 1-7 0V4.89a3.5 3.5 0 0 1 7 0z\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M15.5 10.36V11a5.5 5.5 0 0 1-11 0v-.6\"/></svg>",
        "minus-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.5\" cy=\"9.5\" r=\"9\"/><line fill=\"none\" stroke=\"#000\" x1=\"5\" y1=\"9.5\" x2=\"14\" y2=\"9.5\"/></svg>",
        "minus": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect height=\"1\" width=\"18\" y=\"9\" x=\"1\"/></svg>",
        "more-vertical": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"10\" cy=\"3\" r=\"2\"/><circle cx=\"10\" cy=\"10\" r=\"2\"/><circle cx=\"10\" cy=\"17\" r=\"2\"/></svg>",
        "more": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"3\" cy=\"10\" r=\"2\"/><circle cx=\"10\" cy=\"10\" r=\"2\"/><circle cx=\"17\" cy=\"10\" r=\"2\"/></svg>",
        "move": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"4,5 1,5 1,9 2,9 2,6 4,6\"/><polygon points=\"1,16 2,16 2,18 4,18 4,19 1,19\"/><polygon points=\"14,16 14,19 11,19 11,18 13,18 13,16\"/><rect fill=\"none\" stroke=\"#000\" x=\"5.5\" y=\"1.5\" width=\"13\" height=\"13\"/><rect x=\"1\" y=\"11\" width=\"1\" height=\"3\"/><rect x=\"6\" y=\"18\" width=\"3\" height=\"1\"/></svg>",
        "nut": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"2.5,5.7 10,1.3 17.5,5.7 17.5,14.3 10,18.7 2.5,14.3\"/><circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10\" r=\"3.5\"/></svg>",
        "pagekit": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"3,1 17,1 17,16 10,16 10,13 14,13 14,4 6,4 6,16 10,16 10,19 3,19\"/></svg>",
        "paint-bucket": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.21,1 L0,11.21 L8.1,19.31 L18.31,9.1 L10.21,1 L10.21,1 Z M16.89,9.1 L15,11 L1.7,11 L10.21,2.42 L16.89,9.1 Z\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M6.42,2.33 L11.7,7.61\"/><path d=\"M18.49,12 C18.49,12 20,14.06 20,15.36 C20,16.28 19.24,17 18.49,17 L18.49,17 C17.74,17 17,16.28 17,15.36 C17,14.06 18.49,12 18.49,12 L18.49,12 Z\"/></svg>",
        "pencil": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M17.25,6.01 L7.12,16.1 L3.82,17.2 L5.02,13.9 L15.12,3.88 C15.71,3.29 16.66,3.29 17.25,3.88 C17.83,4.47 17.83,5.42 17.25,6.01 L17.25,6.01 Z\"/><path fill=\"none\" stroke=\"#000\" d=\"M15.98,7.268 L13.851,5.148\"/></svg>",
        "phone-landscape": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M17,5.5 C17.8,5.5 18.5,6.2 18.5,7 L18.5,14 C18.5,14.8 17.8,15.5 17,15.5 L3,15.5 C2.2,15.5 1.5,14.8 1.5,14 L1.5,7 C1.5,6.2 2.2,5.5 3,5.5 L17,5.5 L17,5.5 L17,5.5 Z\"/><circle cx=\"3.8\" cy=\"10.5\" r=\".8\"/></svg>",
        "phone": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M15.5,17 C15.5,17.8 14.8,18.5 14,18.5 L7,18.5 C6.2,18.5 5.5,17.8 5.5,17 L5.5,3 C5.5,2.2 6.2,1.5 7,1.5 L14,1.5 C14.8,1.5 15.5,2.2 15.5,3 L15.5,17 L15.5,17 L15.5,17 Z\"/><circle cx=\"10.5\" cy=\"16.5\" r=\".8\"/></svg>",
        "pinterest": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10.21,1 C5.5,1 3,4.16 3,7.61 C3,9.21 3.85,11.2 5.22,11.84 C5.43,11.94 5.54,11.89 5.58,11.69 C5.62,11.54 5.8,10.8 5.88,10.45 C5.91,10.34 5.89,10.24 5.8,10.14 C5.36,9.59 5,8.58 5,7.65 C5,5.24 6.82,2.91 9.93,2.91 C12.61,2.91 14.49,4.74 14.49,7.35 C14.49,10.3 13,12.35 11.06,12.35 C9.99,12.35 9.19,11.47 9.44,10.38 C9.75,9.08 10.35,7.68 10.35,6.75 C10.35,5.91 9.9,5.21 8.97,5.21 C7.87,5.21 6.99,6.34 6.99,7.86 C6.99,8.83 7.32,9.48 7.32,9.48 C7.32,9.48 6.24,14.06 6.04,14.91 C5.7,16.35 6.08,18.7 6.12,18.9 C6.14,19.01 6.26,19.05 6.33,18.95 C6.44,18.81 7.74,16.85 8.11,15.44 C8.24,14.93 8.79,12.84 8.79,12.84 C9.15,13.52 10.19,14.09 11.29,14.09 C14.58,14.09 16.96,11.06 16.96,7.3 C16.94,3.7 14,1 10.21,1\"/></svg>",
        "play-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" points=\"8.5 7 13.5 10 8.5 13\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/></svg>",
        "play": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"6.5,5 14.5,10 6.5,15\"/></svg>",
        "plus-circle": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.5\" cy=\"9.5\" r=\"9\"/><line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"5\" x2=\"9.5\" y2=\"14\"/><line fill=\"none\" stroke=\"#000\" x1=\"5\" y1=\"9.5\" x2=\"14\" y2=\"9.5\"/></svg>",
        "plus": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"9\" y=\"1\" width=\"1\" height=\"17\"/><rect x=\"1\" y=\"9\" width=\"17\" height=\"1\"/></svg>",
        "print": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"4.5 13.5 1.5 13.5 1.5 6.5 18.5 6.5 18.5 13.5 15.5 13.5\"/><polyline fill=\"none\" stroke=\"#000\" points=\"15.5 6.5 15.5 2.5 4.5 2.5 4.5 6.5\"/><rect fill=\"none\" stroke=\"#000\" width=\"11\" height=\"6\" x=\"4.5\" y=\"11.5\"/><rect width=\"8\" height=\"1\" x=\"6\" y=\"13\"/><rect width=\"8\" height=\"1\" x=\"6\" y=\"15\"/></svg>",
        "pull": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"6.85,8 9.5,10.6 12.15,8 12.85,8.7 9.5,12 6.15,8.7\"/><line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"11\" x2=\"9.5\" y2=\"2\"/><polyline fill=\"none\" stroke=\"#000\" points=\"6,5.5 3.5,5.5 3.5,18.5 15.5,18.5 15.5,5.5 13,5.5\"/></svg>",
        "push": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"12.15,4 9.5,1.4 6.85,4 6.15,3.3 9.5,0 12.85,3.3\"/><line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"10\" x2=\"9.5\" y2=\"1\"/><polyline fill=\"none\" stroke=\"#000\" points=\"6 5.5 3.5 5.5 3.5 18.5 15.5 18.5 15.5 5.5 13 5.5\"/></svg>",
        "question": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/><circle cx=\"10.44\" cy=\"14.42\" r=\"1.05\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.2\" d=\"M8.17,7.79 C8.17,4.75 12.72,4.73 12.72,7.72 C12.72,8.67 11.81,9.15 11.23,9.75 C10.75,10.24 10.51,10.73 10.45,11.4 C10.44,11.53 10.43,11.64 10.43,11.75\"/></svg>",
        "quote-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.27,7.79 C17.27,9.45 16.97,10.43 15.99,12.02 C14.98,13.64 13,15.23 11.56,15.97 L11.1,15.08 C12.34,14.2 13.14,13.51 14.02,11.82 C14.27,11.34 14.41,10.92 14.49,10.54 C14.3,10.58 14.09,10.6 13.88,10.6 C12.06,10.6 10.59,9.12 10.59,7.3 C10.59,5.48 12.06,4 13.88,4 C15.39,4 16.67,5.02 17.05,6.42 C17.19,6.82 17.27,7.27 17.27,7.79 L17.27,7.79 Z\"/><path d=\"M8.68,7.79 C8.68,9.45 8.38,10.43 7.4,12.02 C6.39,13.64 4.41,15.23 2.97,15.97 L2.51,15.08 C3.75,14.2 4.55,13.51 5.43,11.82 C5.68,11.34 5.82,10.92 5.9,10.54 C5.71,10.58 5.5,10.6 5.29,10.6 C3.47,10.6 2,9.12 2,7.3 C2,5.48 3.47,4 5.29,4 C6.8,4 8.08,5.02 8.46,6.42 C8.6,6.82 8.68,7.27 8.68,7.79 L8.68,7.79 Z\"/></svg>",
        "receiver": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" d=\"M6.189,13.611C8.134,15.525 11.097,18.239 13.867,18.257C16.47,18.275 18.2,16.241 18.2,16.241L14.509,12.551L11.539,13.639L6.189,8.29L7.313,5.355L3.76,1.8C3.76,1.8 1.732,3.537 1.7,6.092C1.667,8.809 4.347,11.738 6.189,13.611\"/></svg>",
        "reddit": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19 9.05a2.56 2.56 0 0 0-2.56-2.56 2.59 2.59 0 0 0-1.88.82 10.63 10.63 0 0 0-4.14-1v-.08c.58-1.62 1.58-3.89 2.7-4.1.38-.08.77.12 1.19.57a1.15 1.15 0 0 0-.06.37 1.48 1.48 0 1 0 1.51-1.45 1.43 1.43 0 0 0-.76.19A2.29 2.29 0 0 0 12.91 1c-2.11.43-3.39 4.38-3.63 5.19 0 0 0 .11-.06.11a10.65 10.65 0 0 0-3.75 1A2.56 2.56 0 0 0 1 9.05a2.42 2.42 0 0 0 .72 1.76A5.18 5.18 0 0 0 1.24 13c0 3.66 3.92 6.64 8.73 6.64s8.74-3 8.74-6.64a5.23 5.23 0 0 0-.46-2.13A2.58 2.58 0 0 0 19 9.05zm-16.88 0a1.44 1.44 0 0 1 2.27-1.19 7.68 7.68 0 0 0-2.07 1.91 1.33 1.33 0 0 1-.2-.72zM10 18.4c-4.17 0-7.55-2.4-7.55-5.4S5.83 7.53 10 7.53 17.5 10 17.5 13s-3.38 5.4-7.5 5.4zm7.69-8.61a7.62 7.62 0 0 0-2.09-1.91 1.41 1.41 0 0 1 .84-.28 1.47 1.47 0 0 1 1.44 1.45 1.34 1.34 0 0 1-.21.72z\"/><path d=\"M6.69 12.58a1.39 1.39 0 1 1 1.39-1.39 1.38 1.38 0 0 1-1.38 1.39z\"/><path d=\"M14.26 11.2a1.39 1.39 0 1 1-1.39-1.39 1.39 1.39 0 0 1 1.39 1.39z\"/><path d=\"M13.09 14.88a.54.54 0 0 1-.09.77 5.3 5.3 0 0 1-3.26 1.19 5.61 5.61 0 0 1-3.4-1.22.55.55 0 1 1 .73-.83 4.09 4.09 0 0 0 5.25 0 .56.56 0 0 1 .77.09z\"/></svg>",
        "refresh": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17.08,11.15 C17.09,11.31 17.1,11.47 17.1,11.64 C17.1,15.53 13.94,18.69 10.05,18.69 C6.16,18.68 3,15.53 3,11.63 C3,7.74 6.16,4.58 10.05,4.58 C10.9,4.58 11.71,4.73 12.46,5\"/><polyline fill=\"none\" stroke=\"#000\" points=\"9.9 2 12.79 4.89 9.79 7.9\"/></svg>",
        "reply": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.7,13.11 C16.12,10.02 13.84,7.85 11.02,6.61 C10.57,6.41 9.75,6.13 9,5.91 L9,2 L1,9 L9,16 L9,12.13 C10.78,12.47 12.5,13.19 14.09,14.25 C17.13,16.28 18.56,18.54 18.56,18.54 C18.56,18.54 18.81,15.28 17.7,13.11 L17.7,13.11 Z M14.82,13.53 C13.17,12.4 11.01,11.4 8,10.92 L8,13.63 L2.55,9 L8,4.25 L8,6.8 C8.3,6.86 9.16,7.02 10.37,7.49 C13.3,8.65 15.54,10.96 16.65,13.08 C16.97,13.7 17.48,14.86 17.68,16 C16.87,15.05 15.73,14.15 14.82,13.53 L14.82,13.53 Z\"/></svg>",
        "rss": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"3.12\" cy=\"16.8\" r=\"1.85\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,8.2 C1.78,8.18 2.06,8.16 2.35,8.16 C7.57,8.16 11.81,12.37 11.81,17.57 C11.81,17.89 11.79,18.19 11.76,18.5\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,2.52 C1.78,2.51 2.06,2.5 2.35,2.5 C10.72,2.5 17.5,9.24 17.5,17.57 C17.5,17.89 17.49,18.19 17.47,18.5\"/></svg>",
        "search": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9\" cy=\"9\" r=\"7\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M14,14 L18,18 L14,14 Z\"/></svg>",
        "server": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"3\" y=\"3\" width=\"1\" height=\"2\"/><rect x=\"5\" y=\"3\" width=\"1\" height=\"2\"/><rect x=\"7\" y=\"3\" width=\"1\" height=\"2\"/><rect x=\"16\" y=\"3\" width=\"1\" height=\"1\"/><rect x=\"16\" y=\"10\" width=\"1\" height=\"1\"/><circle fill=\"none\" stroke=\"#000\" cx=\"9.9\" cy=\"17.4\" r=\"1.4\"/><rect x=\"3\" y=\"10\" width=\"1\" height=\"2\"/><rect x=\"5\" y=\"10\" width=\"1\" height=\"2\"/><rect x=\"9.5\" y=\"14\" width=\"1\" height=\"2\"/><rect x=\"3\" y=\"17\" width=\"6\" height=\"1\"/><rect x=\"11\" y=\"17\" width=\"6\" height=\"1\"/><rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"1.5\" width=\"17\" height=\"5\"/><rect fill=\"none\" stroke=\"#000\" x=\"1.5\" y=\"8.5\" width=\"17\" height=\"5\"/></svg>",
        "settings": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><ellipse fill=\"none\" stroke=\"#000\" cx=\"6.11\" cy=\"3.55\" rx=\"2.11\" ry=\"2.15\"/><ellipse fill=\"none\" stroke=\"#000\" cx=\"6.11\" cy=\"15.55\" rx=\"2.11\" ry=\"2.15\"/><circle fill=\"none\" stroke=\"#000\" cx=\"13.15\" cy=\"9.55\" r=\"2.15\"/><rect x=\"1\" y=\"3\" width=\"3\" height=\"1\"/><rect x=\"10\" y=\"3\" width=\"8\" height=\"1\"/><rect x=\"1\" y=\"9\" width=\"8\" height=\"1\"/><rect x=\"15\" y=\"9\" width=\"3\" height=\"1\"/><rect x=\"1\" y=\"15\" width=\"3\" height=\"1\"/><rect x=\"10\" y=\"15\" width=\"8\" height=\"1\"/></svg>",
        "shrink": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"11 4 12 4 12 8 16 8 16 9 11 9\"/><polygon points=\"4 11 9 11 9 16 8 16 8 12 4 12\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M12,8 L18,2\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M2,18 L8,12\"/></svg>",
        "sign-in": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"7 2 17 2 17 17 7 17 7 16 16 16 16 3 7 3\"/><polygon points=\"9.1 13.4 8.5 12.8 11.28 10 4 10 4 9 11.28 9 8.5 6.2 9.1 5.62 13 9.5\"/></svg>",
        "sign-out": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"13.1 13.4 12.5 12.8 15.28 10 8 10 8 9 15.28 9 12.5 6.2 13.1 5.62 17 9.5\"/><polygon points=\"13 2 3 2 3 17 13 17 13 16 4 16 4 3 13 3\"/></svg>",
        "social": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13.4\" y1=\"14\" x2=\"6.3\" y2=\"10.7\"/><line fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" x1=\"13.5\" y1=\"5.5\" x2=\"6.5\" y2=\"8.8\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"15.5\" cy=\"4.6\" r=\"2.3\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"15.5\" cy=\"14.8\" r=\"2.3\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"4.5\" cy=\"9.8\" r=\"2.3\"/></svg>",
        "soundcloud": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.2,9.4c-0.4,0-0.8,0.1-1.101,0.2c-0.199-2.5-2.399-4.5-5-4.5c-0.6,0-1.2,0.1-1.7,0.3C9.2,5.5,9.1,5.6,9.1,5.6V15h8 c1.601,0,2.801-1.2,2.801-2.8C20,10.7,18.7,9.4,17.2,9.4L17.2,9.4z\"/><rect x=\"6\" y=\"6.5\" width=\"1.5\" height=\"8.5\"/><rect x=\"3\" y=\"8\" width=\"1.5\" height=\"7\"/><rect y=\"10\" width=\"1.5\" height=\"5\"/></svg>",
        "star": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" stroke-width=\"1.01\" points=\"10 2 12.63 7.27 18.5 8.12 14.25 12.22 15.25 18 10 15.27 4.75 18 5.75 12.22 1.5 8.12 7.37 7.27\"/></svg>",
        "strikethrough": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6,13.02 L6.65,13.02 C7.64,15.16 8.86,16.12 10.41,16.12 C12.22,16.12 12.92,14.93 12.92,13.89 C12.92,12.55 11.99,12.03 9.74,11.23 C8.05,10.64 6.23,10.11 6.23,7.83 C6.23,5.5 8.09,4.09 10.4,4.09 C11.44,4.09 12.13,4.31 12.72,4.54 L13.33,4 L13.81,4 L13.81,7.59 L13.16,7.59 C12.55,5.88 11.52,4.89 10.07,4.89 C8.84,4.89 7.89,5.69 7.89,7.03 C7.89,8.29 8.89,8.78 10.88,9.45 C12.57,10.03 14.38,10.6 14.38,12.91 C14.38,14.75 13.27,16.93 10.18,16.93 C9.18,16.93 8.17,16.69 7.46,16.39 L6.52,17 L6,17 L6,13.02 L6,13.02 Z\"/><rect x=\"3\" y=\"10\" width=\"15\" height=\"1\"/></svg>",
        "table": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"1\" y=\"3\" width=\"18\" height=\"1\"/><rect x=\"1\" y=\"7\" width=\"18\" height=\"1\"/><rect x=\"1\" y=\"11\" width=\"18\" height=\"1\"/><rect x=\"1\" y=\"15\" width=\"18\" height=\"1\"/></svg>",
        "tablet-landscape": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M1.5,5 C1.5,4.2 2.2,3.5 3,3.5 L17,3.5 C17.8,3.5 18.5,4.2 18.5,5 L18.5,16 C18.5,16.8 17.8,17.5 17,17.5 L3,17.5 C2.2,17.5 1.5,16.8 1.5,16 L1.5,5 L1.5,5 L1.5,5 Z\"/><circle cx=\"3.7\" cy=\"10.5\" r=\".8\"/></svg>",
        "tablet": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M5,18.5 C4.2,18.5 3.5,17.8 3.5,17 L3.5,3 C3.5,2.2 4.2,1.5 5,1.5 L16,1.5 C16.8,1.5 17.5,2.2 17.5,3 L17.5,17 C17.5,17.8 16.8,18.5 16,18.5 L5,18.5 L5,18.5 L5,18.5 Z\"/><circle cx=\"10.5\" cy=\"16.3\" r=\".8\"/></svg>",
        "tag": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M17.5,3.71 L17.5,7.72 C17.5,7.96 17.4,8.2 17.21,8.39 L8.39,17.2 C7.99,17.6 7.33,17.6 6.93,17.2 L2.8,13.07 C2.4,12.67 2.4,12.01 2.8,11.61 L11.61,2.8 C11.81,2.6 12.08,2.5 12.34,2.5 L16.19,2.5 C16.52,2.5 16.86,2.63 17.11,2.88 C17.35,3.11 17.48,3.4 17.5,3.71 L17.5,3.71 Z\"/><circle cx=\"14\" cy=\"6\" r=\"1\"/></svg>",
        "thumbnails": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"3.5\" width=\"5\" height=\"5\"/><rect fill=\"none\" stroke=\"#000\" x=\"11.5\" y=\"3.5\" width=\"5\" height=\"5\"/><rect fill=\"none\" stroke=\"#000\" x=\"11.5\" y=\"11.5\" width=\"5\" height=\"5\"/><rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"11.5\" width=\"5\" height=\"5\"/></svg>",
        "tiktok": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.24,6V8.82a6.79,6.79,0,0,1-4-1.28v5.81A5.26,5.26,0,1,1,8,8.1a4.36,4.36,0,0,1,.72.05v2.9A2.57,2.57,0,0,0,7.64,11a2.4,2.4,0,1,0,2.77,2.38V2h2.86a4,4,0,0,0,1.84,3.38A4,4,0,0,0,17.24,6Z\"/></svg>",
        "trash": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"6.5 3 6.5 1.5 13.5 1.5 13.5 3\"/><polyline fill=\"none\" stroke=\"#000\" points=\"4.5 4 4.5 18.5 15.5 18.5 15.5 4\"/><rect x=\"8\" y=\"7\" width=\"1\" height=\"9\"/><rect x=\"11\" y=\"7\" width=\"1\" height=\"9\"/><rect x=\"2\" y=\"3\" width=\"16\" height=\"1\"/></svg>",
        "triangle-down": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"5 7 15 7 10 12\"/></svg>",
        "triangle-left": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"12 5 7 10 12 15\"/></svg>",
        "triangle-right": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"8 5 13 10 8 15\"/></svg>",
        "triangle-up": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"5 13 10 8 15 13\"/></svg>",
        "tripadvisor": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19.021,7.866C19.256,6.862,20,5.854,20,5.854h-3.346C14.781,4.641,12.504,4,9.98,4C7.363,4,4.999,4.651,3.135,5.876H0\tc0,0,0.738,0.987,0.976,1.988c-0.611,0.837-0.973,1.852-0.973,2.964c0,2.763,2.249,5.009,5.011,5.009\tc1.576,0,2.976-0.737,3.901-1.879l1.063,1.599l1.075-1.615c0.475,0.611,1.1,1.111,1.838,1.451c1.213,0.547,2.574,0.612,3.825,0.15\tc2.589-0.963,3.913-3.852,2.964-6.439c-0.175-0.463-0.4-0.876-0.675-1.238H19.021z M16.38,14.594\tc-1.002,0.371-2.088,0.328-3.06-0.119c-0.688-0.317-1.252-0.817-1.657-1.438c-0.164-0.25-0.313-0.52-0.417-0.811\tc-0.124-0.328-0.186-0.668-0.217-1.014c-0.063-0.689,0.037-1.396,0.339-2.043c0.448-0.971,1.251-1.71,2.25-2.079\tc2.075-0.765,4.375,0.3,5.14,2.366c0.762,2.066-0.301,4.37-2.363,5.134L16.38,14.594L16.38,14.594z M8.322,13.066\tc-0.72,1.059-1.935,1.76-3.309,1.76c-2.207,0-4.001-1.797-4.001-3.996c0-2.203,1.795-4.002,4.001-4.002\tc2.204,0,3.999,1.8,3.999,4.002c0,0.137-0.024,0.261-0.04,0.396c-0.067,0.678-0.284,1.313-0.648,1.853v-0.013H8.322z M2.472,10.775\tc0,1.367,1.112,2.479,2.476,2.479c1.363,0,2.472-1.11,2.472-2.479c0-1.359-1.11-2.468-2.472-2.468\tC3.584,8.306,2.473,9.416,2.472,10.775L2.472,10.775z M12.514,10.775c0,1.367,1.104,2.479,2.471,2.479\tc1.363,0,2.474-1.108,2.474-2.479c0-1.359-1.11-2.468-2.474-2.468c-1.364,0-2.477,1.109-2.477,2.468H12.514z M3.324,10.775\tc0-0.893,0.726-1.618,1.614-1.618c0.889,0,1.625,0.727,1.625,1.618c0,0.898-0.725,1.627-1.625,1.627\tc-0.901,0-1.625-0.729-1.625-1.627H3.324z M13.354,10.775c0-0.893,0.726-1.618,1.627-1.618c0.886,0,1.61,0.727,1.61,1.618\tc0,0.898-0.726,1.627-1.626,1.627s-1.625-0.729-1.625-1.627H13.354z M9.977,4.875c1.798,0,3.425,0.324,4.849,0.968\tc-0.535,0.015-1.061,0.108-1.586,0.3c-1.264,0.463-2.264,1.388-2.815,2.604c-0.262,0.551-0.398,1.133-0.448,1.72\tC9.79,7.905,7.677,5.873,5.076,5.82C6.501,5.208,8.153,4.875,9.94,4.875H9.977z\"/></svg>",
        "tumblr": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M6.885,8.598c0,0,0,3.393,0,4.996c0,0.282,0,0.66,0.094,0.942c0.377,1.509,1.131,2.545,2.545,3.11 c1.319,0.472,2.356,0.472,3.676,0c0.565-0.188,1.132-0.659,1.132-0.659l-0.849-2.263c0,0-1.036,0.378-1.603,0.283 c-0.565-0.094-1.226-0.66-1.226-1.508c0-1.603,0-4.902,0-4.902h2.828V5.771h-2.828V2H8.205c0,0-0.094,0.66-0.188,0.942 C7.828,3.791,7.262,4.733,6.603,5.394C5.848,6.147,5,6.43,5,6.43v2.168H6.885z\"/></svg>",
        "tv": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect x=\"7\" y=\"16\" width=\"6\" height=\"1\"/><rect fill=\"none\" stroke=\"#000\" x=\".5\" y=\"3.5\" width=\"19\" height=\"11\"/></svg>",
        "twitch": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M5.23,1,2,4.23V15.85H5.88v3.23L9.1,15.85h2.59L17.5,10V1Zm11,8.4L13.62,12H11L8.78,14.24V12H5.88V2.29H16.21Z\"/><rect x=\"12.98\" y=\"4.55\" width=\"1.29\" height=\"3.88\"/><rect x=\"9.43\" y=\"4.55\" width=\"1.29\" height=\"3.88\"/></svg>",
        "twitter": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74\"/></svg>",
        "uikit": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon points=\"14.4,3.1 11.3,5.1 15,7.3 15,12.9 10,15.7 5,12.9 5,8.5 2,6.8 2,14.8 9.9,19.5 18,14.8 18,5.3\"/><polygon points=\"9.8,4.2 6.7,2.4 9.8,0.4 12.9,2.3\"/></svg>",
        "unlock": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><rect fill=\"none\" stroke=\"#000\" x=\"3.5\" y=\"8.5\" width=\"13\" height=\"10\"/><path fill=\"none\" stroke=\"#000\" d=\"M6.5,8.5 L6.5,4.9 C6.5,3 8.1,1.5 10,1.5 C11.9,1.5 13.5,3 13.5,4.9\"/></svg>",
        "upload": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polyline fill=\"none\" stroke=\"#000\" points=\"5 8 9.5 3.5 14 8\"/><rect x=\"3\" y=\"17\" width=\"13\" height=\"1\"/><line fill=\"none\" stroke=\"#000\" x1=\"9.5\" y1=\"15\" x2=\"9.5\" y2=\"4\"/></svg>",
        "user": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"9.9\" cy=\"6.4\" r=\"4.4\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1.5,19 C2.3,14.5 5.8,11.2 10,11.2 C14.2,11.2 17.7,14.6 18.5,19.2\"/></svg>",
        "users": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"7.7\" cy=\"8.6\" r=\"3.5\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M1,18.1 C1.7,14.6 4.4,12.1 7.6,12.1 C10.9,12.1 13.7,14.8 14.3,18.3\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" d=\"M11.4,4 C12.8,2.4 15.4,2.8 16.3,4.7 C17.2,6.6 15.7,8.9 13.6,8.9 C16.5,8.9 18.8,11.3 19.2,14.1\"/></svg>",
        "video-camera": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><polygon fill=\"none\" stroke=\"#000\" points=\"17.5 6.9 17.5 13.1 13.5 10.4 13.5 14.5 2.5 14.5 2.5 5.5 13.5 5.5 13.5 9.6 17.5 6.9\"/></svg>",
        "vimeo": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M2.065,7.59C1.84,7.367,1.654,7.082,1.468,6.838c-0.332-0.42-0.137-0.411,0.274-0.772c1.026-0.91,2.004-1.896,3.127-2.688 c1.017-0.713,2.365-1.173,3.286-0.039c0.849,1.045,0.869,2.629,1.084,3.891c0.215,1.309,0.421,2.648,0.88,3.901 c0.127,0.352,0.37,1.018,0.81,1.074c0.567,0.078,1.145-0.917,1.408-1.289c0.684-0.987,1.611-2.317,1.494-3.587 c-0.115-1.349-1.572-1.095-2.482-0.773c0.146-1.514,1.555-3.216,2.912-3.792c1.439-0.597,3.579-0.587,4.302,1.036 c0.772,1.759,0.078,3.802-0.763,5.396c-0.918,1.731-2.1,3.333-3.363,4.829c-1.114,1.329-2.432,2.787-4.093,3.422 c-1.897,0.723-3.021-0.686-3.667-2.318c-0.705-1.777-1.056-3.771-1.565-5.621C4.898,8.726,4.644,7.836,4.136,7.191 C3.473,6.358,2.72,7.141,2.065,7.59C1.977,7.502,2.115,7.551,2.065,7.59L2.065,7.59z\"/></svg>",
        "warning": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"10\" cy=\"14\" r=\"1\"/><circle fill=\"none\" stroke=\"#000\" stroke-width=\"1.1\" cx=\"10\" cy=\"10\" r=\"9\"/><path d=\"M10.97,7.72 C10.85,9.54 10.56,11.29 10.56,11.29 C10.51,11.87 10.27,12 9.99,12 C9.69,12 9.49,11.87 9.43,11.29 C9.43,11.29 9.16,9.54 9.03,7.72 C8.96,6.54 9.03,6 9.03,6 C9.03,5.45 9.46,5.02 9.99,5 C10.53,5.01 10.97,5.44 10.97,6 C10.97,6 11.04,6.54 10.97,7.72 L10.97,7.72 Z\"/></svg>",
        "whatsapp": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16.7,3.3c-1.8-1.8-4.1-2.8-6.7-2.8c-5.2,0-9.4,4.2-9.4,9.4c0,1.7,0.4,3.3,1.3,4.7l-1.3,4.9l5-1.3c1.4,0.8,2.9,1.2,4.5,1.2 l0,0l0,0c5.2,0,9.4-4.2,9.4-9.4C19.5,7.4,18.5,5,16.7,3.3 M10.1,17.7L10.1,17.7c-1.4,0-2.8-0.4-4-1.1l-0.3-0.2l-3,0.8l0.8-2.9 l-0.2-0.3c-0.8-1.2-1.2-2.7-1.2-4.2c0-4.3,3.5-7.8,7.8-7.8c2.1,0,4.1,0.8,5.5,2.3c1.5,1.5,2.3,3.4,2.3,5.5 C17.9,14.2,14.4,17.7,10.1,17.7 M14.4,11.9c-0.2-0.1-1.4-0.7-1.6-0.8c-0.2-0.1-0.4-0.1-0.5,0.1c-0.2,0.2-0.6,0.8-0.8,0.9 c-0.1,0.2-0.3,0.2-0.5,0.1c-0.2-0.1-1-0.4-1.9-1.2c-0.7-0.6-1.2-1.4-1.3-1.6c-0.1-0.2,0-0.4,0.1-0.5C8,8.8,8.1,8.7,8.2,8.5 c0.1-0.1,0.2-0.2,0.2-0.4c0.1-0.2,0-0.3,0-0.4C8.4,7.6,7.9,6.5,7.7,6C7.5,5.5,7.3,5.6,7.2,5.6c-0.1,0-0.3,0-0.4,0 c-0.2,0-0.4,0.1-0.6,0.3c-0.2,0.2-0.8,0.8-0.8,2c0,1.2,0.8,2.3,1,2.4c0.1,0.2,1.7,2.5,4,3.5c0.6,0.2,1,0.4,1.3,0.5 c0.6,0.2,1.1,0.2,1.5,0.1c0.5-0.1,1.4-0.6,1.6-1.1c0.2-0.5,0.2-1,0.1-1.1C14.8,12.1,14.6,12,14.4,11.9\"/></svg>",
        "wordpress": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M10,0.5c-5.2,0-9.5,4.3-9.5,9.5s4.3,9.5,9.5,9.5c5.2,0,9.5-4.3,9.5-9.5S15.2,0.5,10,0.5L10,0.5L10,0.5z M15.6,3.9h-0.1 c-0.8,0-1.4,0.7-1.4,1.5c0,0.7,0.4,1.3,0.8,1.9c0.3,0.6,0.7,1.3,0.7,2.3c0,0.7-0.3,1.5-0.6,2.7L14.1,15l-3-8.9 c0.5,0,0.9-0.1,0.9-0.1C12.5,6,12.5,5.3,12,5.4c0,0-1.3,0.1-2.2,0.1C9,5.5,7.7,5.4,7.7,5.4C7.2,5.3,7.2,6,7.6,6c0,0,0.4,0.1,0.9,0.1 l1.3,3.5L8,15L5,6.1C5.5,6.1,5.9,6,5.9,6C6.4,6,6.3,5.3,5.9,5.4c0,0-1.3,0.1-2.2,0.1c-0.2,0-0.3,0-0.5,0c1.5-2.2,4-3.7,6.9-3.7 C12.2,1.7,14.1,2.6,15.6,3.9L15.6,3.9L15.6,3.9z M2.5,6.6l3.9,10.8c-2.7-1.3-4.6-4.2-4.6-7.4C1.8,8.8,2,7.6,2.5,6.6L2.5,6.6L2.5,6.6 z M10.2,10.7l2.5,6.9c0,0,0,0.1,0.1,0.1C11.9,18,11,18.2,10,18.2c-0.8,0-1.6-0.1-2.3-0.3L10.2,10.7L10.2,10.7L10.2,10.7z M14.2,17.1 l2.5-7.3c0.5-1.2,0.6-2.1,0.6-2.9c0-0.3,0-0.6-0.1-0.8c0.6,1.2,1,2.5,1,4C18.3,13,16.6,15.7,14.2,17.1L14.2,17.1L14.2,17.1z\"/></svg>",
        "world": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path fill=\"none\" stroke=\"#000\" d=\"M1,10.5 L19,10.5\"/><path fill=\"none\" stroke=\"#000\" d=\"M2.35,15.5 L17.65,15.5\"/><path fill=\"none\" stroke=\"#000\" d=\"M2.35,5.5 L17.523,5.5\"/><path fill=\"none\" stroke=\"#000\" d=\"M10,19.46 L9.98,19.46 C7.31,17.33 5.61,14.141 5.61,10.58 C5.61,7.02 7.33,3.83 10,1.7 C10.01,1.7 9.99,1.7 10,1.7 L10,1.7 C12.67,3.83 14.4,7.02 14.4,10.58 C14.4,14.141 12.67,17.33 10,19.46 L10,19.46 L10,19.46 L10,19.46 Z\"/><circle fill=\"none\" stroke=\"#000\" cx=\"10\" cy=\"10.5\" r=\"9\"/></svg>",
        "xing": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M4.4,4.56 C4.24,4.56 4.11,4.61 4.05,4.72 C3.98,4.83 3.99,4.97 4.07,5.12 L5.82,8.16 L5.82,8.17 L3.06,13.04 C2.99,13.18 2.99,13.33 3.06,13.44 C3.12,13.55 3.24,13.62 3.4,13.62 L6,13.62 C6.39,13.62 6.57,13.36 6.71,13.12 C6.71,13.12 9.41,8.35 9.51,8.16 C9.49,8.14 7.72,5.04 7.72,5.04 C7.58,4.81 7.39,4.56 6.99,4.56 L4.4,4.56 L4.4,4.56 Z\"/><path d=\"M15.3,1 C14.91,1 14.74,1.25 14.6,1.5 C14.6,1.5 9.01,11.42 8.82,11.74 C8.83,11.76 12.51,18.51 12.51,18.51 C12.64,18.74 12.84,19 13.23,19 L15.82,19 C15.98,19 16.1,18.94 16.16,18.83 C16.23,18.72 16.23,18.57 16.16,18.43 L12.5,11.74 L12.5,11.72 L18.25,1.56 C18.32,1.42 18.32,1.27 18.25,1.16 C18.21,1.06 18.08,1 17.93,1 L15.3,1 L15.3,1 Z\"/></svg>",
        "yelp": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M17.175,14.971c-0.112,0.77-1.686,2.767-2.406,3.054c-0.246,0.1-0.487,0.076-0.675-0.069\tc-0.122-0.096-2.446-3.859-2.446-3.859c-0.194-0.293-0.157-0.682,0.083-0.978c0.234-0.284,0.581-0.393,0.881-0.276\tc0.016,0.01,4.21,1.394,4.332,1.482c0.178,0.148,0.263,0.379,0.225,0.646L17.175,14.971L17.175,14.971z M11.464,10.789\tc-0.203-0.307-0.199-0.666,0.009-0.916c0,0,2.625-3.574,2.745-3.657c0.203-0.135,0.452-0.141,0.69-0.025\tc0.691,0.335,2.085,2.405,2.167,3.199v0.027c0.024,0.271-0.082,0.491-0.273,0.623c-0.132,0.083-4.43,1.155-4.43,1.155\tc-0.322,0.096-0.68-0.06-0.882-0.381L11.464,10.789z M9.475,9.563C9.32,9.609,8.848,9.757,8.269,8.817c0,0-3.916-6.16-4.007-6.351\tc-0.057-0.212,0.011-0.455,0.202-0.65C5.047,1.211,8.21,0.327,9.037,0.529c0.27,0.069,0.457,0.238,0.522,0.479\tc0.047,0.266,0.433,5.982,0.488,7.264C10.098,9.368,9.629,9.517,9.475,9.563z M9.927,19.066c-0.083,0.225-0.273,0.373-0.54,0.421\tc-0.762,0.13-3.15-0.751-3.647-1.342c-0.096-0.131-0.155-0.262-0.167-0.394c-0.011-0.095,0-0.189,0.036-0.272\tc0.061-0.155,2.917-3.538,2.917-3.538c0.214-0.272,0.595-0.355,0.952-0.213c0.345,0.13,0.56,0.428,0.536,0.749\tC10.014,14.479,9.977,18.923,9.927,19.066z M3.495,13.912c-0.235-0.009-0.444-0.148-0.568-0.382c-0.089-0.17-0.151-0.453-0.19-0.794\tC2.63,11.701,2.761,10.144,3.07,9.648c0.145-0.226,0.357-0.345,0.592-0.336c0.154,0,4.255,1.667,4.255,1.667\tc0.321,0.118,0.521,0.453,0.5,0.833c-0.023,0.37-0.236,0.655-0.551,0.738L3.495,13.912z\"/></svg>",
        "youtube": "<svg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z\"/></svg>"
    });

    }

    if (typeof window !== 'undefined' && window.UIkit) {
        window.UIkit.use(plugin);
    }

    return plugin;

})));


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*
MIT License

Copyright (c) 2012 - 2020 jonobr1 / http://jonobr1.com

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/
/**
 * @name Two.Commands
 * @property {Object} - Map of possible path commands. Taken from the SVG specification.
 */
var Commands = {
  move: 'M',
  line: 'L',
  curve: 'C',
  arc: 'A',
  close: 'Z'
};

var root;
if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (typeof self !== 'undefined') {
  root = self;
}

var root$1 = root;

var Matrix;

/**
 * @name Utils.decomposeMatrix
 * @function
 * @param {Two.Matrix} matrix - The matrix to decompose.
 * @returns {Object} An object containing relevant skew values.
 * @description Decompose a 2D 3x3 Matrix to find the skew.
 */
var decomposeMatrix = function(matrix) {

  // TODO: Include skewX, skewY
  // https://math.stackexchange.com/questions/237369/given-this-transformation-matrix-how-do-i-decompose-it-into-translation-rotati/417813
  // https://stackoverflow.com/questions/45159314/decompose-2d-transformation-matrix

  return {
      translateX: matrix.e,
      translateY: matrix.f,
      scaleX: Math.sqrt(matrix.a * matrix.a + matrix.b * matrix.b),
      scaleY: Math.sqrt(matrix.c * matrix.c + matrix.d * matrix.d),
      rotation: 180 * Math.atan2(matrix.b, matrix.a) / Math.PI
  };

};

var setMatrix = function(M) {
  Matrix = M;
};

/**
 * @name Utils.getComputedMatrix
 * @function
 * @param {Two.Shape} object - The Two.js object that has a matrix property to calculate from.
 * @param {Two.Matrix} [matrix] - The matrix to apply calculated transformations to if available.
 * @returns {Two.Matrix} The computed matrix of a nested object. If no `matrix` was passed in arguments then a `new Two.Matrix` is returned.
 * @description Method to get the world space transformation of a given object in a Two.js scene.
 */
var getComputedMatrix = function(object, matrix) {

  matrix = (matrix && matrix.identity()) || new Matrix();
  var parent = object, matrices = [];

  while (parent && parent._matrix) {
    matrices.push(parent._matrix);
    parent = parent.parent;
  }

  matrices.reverse();

  for (var i = 0; i < matrices.length; i++) {

    var m = matrices[i];
    var e = m.elements;
    matrix.multiply(
      e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8], e[9]);

  }

  return matrix;

};

/**
 * @name Utils.lerp
 * @function
 * @param {Number} a - Start value.
 * @param {Number} b - End value.
 * @param {Number} t - Zero-to-one value describing percentage between a and b.
 * @returns {Number}
 * @description Linear interpolation between two values `a` and `b` by an amount `t`.
 */
var lerp = function(a, b, t) {
  return t * (b - a) + a;
};

/**
 * @name Utils.mod
 * @param {Number} v - The value to modulo
 * @param {Number} l - The value to modulo by
 * @returns {Number}
 * @description Modulo with added functionality to handle negative values in a positive manner.
 */
var mod = function(v, l) {

  while (v < 0) {
    v += l;
  }

  return v % l;

};

var NumArray = root$1.Float32Array || Array;

/**
* @name Utils.toFixed
* @function
* @param {Number} v - Any float
* @returns {Number} That float trimmed to the third decimal place.
* @description A pretty fast toFixed(3) alternative.
* @see {@link http://jsperf.com/parsefloat-tofixed-vs-math-round/18}
*/
var toFixed = function(v) {
  return Math.floor(v * 1000000) / 1000000;
};

var math = /*#__PURE__*/Object.freeze({
  __proto__: null,
  decomposeMatrix: decomposeMatrix,
  getComputedMatrix: getComputedMatrix,
  setMatrix: setMatrix,
  lerp: lerp,
  mod: mod,
  NumArray: NumArray,
  toFixed: toFixed
});

var slice = Array.prototype.slice;

var isArrayLike = function(collection) {
  if (collection === null || collection === undefined) return false;
  var length = collection.length;
  // Arrays cannot hold more than 2^32 - 1 items
  return (typeof length == 'number' && length >= 0 && length < 4294967296);
};

var _ = {
  isNaN: function(obj) {
    return typeof obj === 'number' && obj !== +obj;
  },
  isElement: function(obj) {
    return !!(obj && obj.nodeType === 1);
  },
  isObject: function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  },
  extend: function(base) {
    var sources = slice.call(arguments, 1);
    for (var i = 0; i < sources.length; i++) {
      var obj = sources[i];
      for (var k in obj) {
        base[k] = obj[k];
      }
    }
    return base;
  },
  defaults: function(base) {
    var sources = slice.call(arguments, 1);
    for (var i = 0; i < sources.length; i++) {
      var obj = sources[i];
      for (var k in obj) {
        if (base[k] === void 0) {
        base[k] = obj[k];
        }
      }
    }
    return base;
  },
  each: function(obj, iteratee, context) {
    var ctx = context || this;
    var keys = !isArrayLike(obj) && Object.keys(obj);
    var length = (keys || obj).length;
    for (var i = 0; i < length; i++) {
      var k = keys ? keys[i] : i;
      iteratee.call(ctx, obj[k], k, obj);
    }
    return obj;
  },
  /**
   * @name Utils.performance
   * @property {Date} - A special `Date` like object to get the current millis of the session. Used internally to calculate time between frames.
   * e.g: `Utils.performance.now() // milliseconds since epoch`
   */
  performance: ((root$1.performance && root$1.performance.now) ? root$1.performance : Date),
};

var trigger = function(obj, events, args) {
  var method;
  switch (args.length) {
  case 0:
    method = function(i) {
      events[i].call(obj, args[0]);
    };
    break;
  case 1:
    method = function(i) {
      events[i].call(obj, args[0], args[1]);
    };
    break;
  case 2:
    method = function(i) {
      events[i].call(obj, args[0], args[1], args[2]);
    };
    break;
  case 3:
    method = function(i) {
      events[i].call(obj, args[0], args[1], args[2], args[3]);
    };
    break;
  default:
    method = function(i) {
      events[i].apply(obj, args);
    };
  }
  for (var i = 0; i < events.length; i++) {
    method(i);
  }
};

/**
 * @name Utils.Events
 * @interface
 * @description Object inherited by many Two.js objects in order to facilitate custom events.
 */
var Events = {

  /**
   * @name Utils.Events.on
   * @function
   * @param {String} name - The name of the event to bind a function to.
   * @param {Function} handler - The function to be invoked when the event is dispatched.
   * @description Call to add a listener to a specific event name.
   */
  on: function(name, handler) {

    this._events || (this._events = {});
    var list = this._events[name] || (this._events[name] = []);

    list.push(handler);

    return this;

  },

  /**
   * @name Utils.Events.off
   * @function
   * @param {String} [name] - The name of the event intended to be removed.
   * @param {Function} [handler] - The handler intended to be reomved.
   * @description Call to remove listeners from a specific event. If only `name` is passed then all the handlers attached to that `name` will be removed. If no arguments are passed then all handlers for every event on the obejct are removed.
   */
  off: function(name, handler) {

    if (!this._events) {
      return this;
    }
    if (!name && !handler) {
      this._events = {};
      return this;
    }

    var names = name ? [name] : Object.keys(this._events);
    for (var i = 0, l = names.length; i < l; i++) {

      name = names[i];
      var list = this._events[name];

      if (list) {
        var events = [];
        if (handler) {
          for (var j = 0, k = list.length; j < k; j++) {
            var ev = list[j];
            ev = ev.handler ? ev.handler : ev;
            if (handler && handler !== ev) {
              events.push(ev);
            }
          }
        }
        this._events[name] = events;
      }
    }

    return this;
  },

  /**
   * @name Utils.Events.trigger
   * @function
   * @param {String} name - The name of the event to dispatch.
   * @param arguments - Anything can be passed after the name and those will be passed on to handlers attached to the event in the order they are passed.
   * @description Call to trigger a custom event. Any additional arguments passed after the name will be passed along to the attached handlers.
   */
  trigger: function(name) {
    if (!this._events) return this;
    var args = Array.prototype.slice.call(arguments, 1);
    var events = this._events[name];
    if (events) trigger(this, events, args);
    return this;
  },

  listen: function(obj, name, handler) {

    var bound = this;

    if (obj) {

      var event = function () {
        handler.apply(bound, arguments);
      };

      // Add references about the object that assigned this listener
      event.obj = obj;
      event.name = name;
      event.handler = handler;

      obj.on(name, event);

    }

    return this;

  },

  ignore: function(obj, name, handler) {

    obj.off(name, handler);
    return this;

  },

  Types: {
    play: 'play',
    pause: 'pause',
    update: 'update',
    render: 'render',
    resize: 'resize',
    change: 'change',
    remove: 'remove',
    insert: 'insert',
    order: 'order',
    load: 'load'
  }

};


/**
 * @name Two.Events.bind
 * @function
 * @description Alias for {@link Two.Events.on}.
 */
Events.bind = Events.on;

/**
 * @name Two.Events.unbind
 * @function
 * @description Alias for {@link Two.Events.off}.
 */
Events.unbind = Events.off;

/**
 * @name Two.Vector
 * @class
 * @param {Number} [x=0] - Any number to represent the horizontal x-component of the vector.
 * @param {Number} [y=0] - Any number to represent the vertical y-component of the vector.
 * @description A class to store x / y component vector data. In addition to storing data `Two.Vector` has suped up methods for commonplace mathematical operations.
 */
var Vector = function(x, y) {

  /**
   * @name Two.Vector#x
   * @property {Number} - The horizontal x-component of the vector.
   */
  this.x = x || 0;

  /**
   * @name Two.Vector#y
   * @property {Number} - The vertical y-component of the vector.
   */
  this.y = y || 0;

};

_.extend(Vector, {

  /**
   * @name Two.Vector.zero
   * @readonly
   * @property {Two.Vector} - Handy reference to a vector with component values 0, 0 at all times.
   */
  zero: new Vector(),

  /**
   * @name Two.Vector.add
   * @function
   * @param {Two.Vector} v1
   * @param {Two.Vector} v2
   * @returns {Two.Vector}
   * @description Add two vectors together.
   */
  add: function(v1, v2) {
    return new Vector(v1.x + v2.x, v1.y + v2.y);
  },

  /**
   * @name Two.Vector.sub
   * @function
   * @param {Two.Vector} v1
   * @param {Two.Vector} v2
   * @returns {Two.Vector}
   * @description Subtract two vectors: `v2` from `v1`.
   */
  sub: function(v1, v2) {
    return new Vector(v1.x - v2.x, v1.y - v2.y);
  },

  /**
   * @name Two.Vector.subtract
   * @function
   * @description Alias for {@link Two.Vector.sub}.
   */
  subtract: function(v1, v2) {
    return Vector.sub(v1, v2);
  },

  /**
   * @name Two.Vector.ratioBetween
   * @function
   * @param {Two.Vector} A
   * @param {Two.Vector} B
   * @returns {Number} The ratio betwen two points `v1` and `v2`.
   */
  ratioBetween: function(v1, v2) {

    return (v1.x * v2.x + v1.y * v2.y) / (v1.length() * v2.length());

  },

  /**
   * @name Two.Vector.angleBetween
   * @function
   * @param {Two.Vector} v1
   * @param {Two.Vector} v2
   * @returns {Radians} The angle between points `v1` and `v2`.
   */
  angleBetween: function(v1, v2) {

    var dx, dy;

    if (arguments.length >= 4) {

      dx = arguments[0] - arguments[2];
      dy = arguments[1] - arguments[3];

      return Math.atan2(dy, dx);

    }

    dx = v1.x - v2.x;
    dy = v1.y - v2.y;

    return Math.atan2(dy, dx);

  },

  /**
   * @name Two.Vector.distanceBetween
   * @function
   * @param {Two.Vector} v1
   * @param {Two.Vector} v2
   * @returns {Number} The distance between points `v1` and `v2`. Distance is always positive.
   */
  distanceBetween: function(v1, v2) {

    return Math.sqrt(Vector.distanceBetweenSquared(v1, v2));

  },

  /**
   * @name Two.Vector.distanceBetweenSquared
   * @function
   * @param {Two.Vector} v1
   * @param {Two.Vector} v2
   * @returns {Number} The squared distance between points `v1` and `v2`.
   */
  distanceBetweenSquared: function(v1, v2) {

    var dx = v1.x - v2.x;
    var dy = v1.y - v2.y;

    return dx * dx + dy * dy;

  },

  /**
   * @name Two.Vector.MakeObservable
   * @function
   * @param {Object} object - The object to make observable.
   * @description Convenience function to apply observable qualities of a {@link Two.Vector} to any object. Handy if you'd like to extend the {@link Two.Vector} class on a custom class.
   */
  MakeObservable: function(object) {

    // /**
    //  * Override Backbone bind / on in order to add properly broadcasting.
    //  * This allows Two.Vector to not broadcast events unless event listeners
    //  * are explicity bound to it.
    //  */

    object.bind = object.on = function() {

      if (!this._bound) {
        this._x = this.x;
        this._y = this.y;
        Object.defineProperty(this, 'x', xgs);
        Object.defineProperty(this, 'y', ygs);
        _.extend(this, BoundProto);
        this._bound = true; // Reserved for event initialization check
      }

      Events.bind.apply(this, arguments);

      return this;

    };

  }

});

_.extend(Vector.prototype, Events, {

  constructor: Vector,

  /**
   * @name Two.Vector#set
   * @function
   * @param {Number} x
   * @param {Number} y
   * @returns {Two.Vector} - An instance of itself for the purpose of chaining.
   * @description Set the x / y components of a vector to specific number values.
   */
  set: function(x, y) {
    this.x = x;
    this.y = y;
    return this;
  },

  /**
   * @name Two.Vector#copy
   * @function
   * @param {Two.Vector} v
   * @returns {Two.Vector} - An instance of itself for the purpose of chaining.
   * @description Copy the x / y components of another object `v`.
   */
  copy: function(v) {
    this.x = v.x;
    this.y = v.y;
    return this;
  },

  /**
   * @name Two.Vector#clear
   * @function
   * @returns {Two.Vector} - An instance of itself for the purpose of chaining.
   * @description Set the x / y component values of the vector to zero.
   */
  clear: function() {
    this.x = 0;
    this.y = 0;
    return this;
  },

  /**
   * @name Two.Vector#clone
   * @function
   * @returns {Two.Vector} - A new instance of {@link Two.Vector}.
   * @description Create a new vector and copy the existing values onto the newly created instance.
   */
  clone: function() {
    return new Vector(this.x, this.y);
  },

  /**
   * @name Two.Vector#add
   * @function
   * @param {Two.Vector} v
   * @returns {Two.Vector} - An instance of itself for the purpose of chaining.
   * @description Add an object with x / y component values to the instance.
   * @overloaded
   */

  /**
   * @name Two.Vector#add
   * @function
   * @param {Number} v
   * @returns {Two.Vector} - An instance of itself for the purpose of chaining.
   * @description Add the **same** number to both x / y component values of the instance.
   * @overloaded
   */

  /**
   * @name Two.Vector#add
   * @function
   * @param {Number} x
   * @param {Number} y
   * @returns {Two.Vector} - An instance of itself for the purpose of chaining.
   * @description Add `x` / `y` values to their respective component value on the instance.
   * @overloaded
   */
  add: function(x, y) {
    if (arguments.length <= 0) {
      return this;
    } else if (arguments.length <= 1) {
      if (typeof x === 'number') {
        this.x += x;
        this.y += x;
      } else if (x && typeof x.x === 'number' && typeof x.y === 'number') {
        this.x += x.x;
        this.y += x.y;
      }
    } else {
      this.x += x;
      this.y += y;
    }
    return this;
  },

  /**
   * @name Two.Vector#addSelf
   * @function
   * @description Alias for {@link Two.Vector.add}.
   */
  addSelf: function(v) {
    return this.add.apply(this, arguments);
  },

  /**
   * @name Two.Vector#sub
   * @function
   * @param {Two.Vector} v
   * @returns {Two.Vector} - An instance of itself for the purpose of chaining.
   * @description Subtract an object with x / y component values to the instance.
   * @overloaded
   */

  /**
   * @name Two.Vector#sub
   * @function
   * @param {Number} v
   * @returns {Two.Vector} - An instance of itself for the purpose of chaining.
   * @description Subtract the **same** number to both x / y component values of the instance.
   * @overloaded
   */

  /**
   * @name Two.Vector#sub
   * @function
   * @param {Number} x
   * @param {Number} y
   * @returns {Two.Vector} - An instance of itself for the purpose of chaining.
   * @description Subtract `x` / `y` values to their respective component value on the instance.
   * @overloaded
   */
  sub: function(x, y) {
    if (arguments.length <= 0) {
      return this;
    } else if (arguments.length <= 1) {
      if (typeof x === 'number') {
        this.x -= x;
        this.y -= x;
      } else if (x && typeof x.x === 'number' && typeof x.y === 'number') {
        this.x -= x.x;
        this.y -= x.y;
      }
    } else {
      this.x -= x;
      this.y -= y;
    }
    return this;
  },

  /**
   * @name Two.Vector#subtract
   * @function
   * @description Alias for {@link Two.Vector.sub}.
   */
  subtract: function() {
    return this.sub.apply(this, arguments);
  },

  /**
   * @name Two.Vector#subSelf
   * @function
   * @description Alias for {@link Two.Vector.sub}.
   */
  subSelf: function(v) {
    return this.sub.apply(this, arguments);
  },

  /**
   * @name Two.Vector#subtractSelf
   * @function
   * @description Alias for {@link Two.Vector.sub}.
   */
  subtractSelf: function(v) {
    return this.sub.apply(this, arguments);
  },

  /**
   * @name Two.Vector#multiply
   * @function
   * @param {Two.Vector} v
   * @returns {Two.Vector} - An instance of itself for the purpose of chaining.
   * @description Multiply an object with x / y component values to the instance.
   * @overloaded
   */

  /**
   * @name Two.Vector#multiply
   * @function
   * @param {Number} v
   * @returns {Two.Vector} - An instance of itself for the purpose of chaining.
   * @description Multiply the **same** number to both x / y component values of the instance.
   * @overloaded
   */

  /**
   * @name Two.Vector#multiply
   * @function
   * @param {Number} x
   * @param {Number} y
   * @returns {Two.Vector} - An instance of itself for the purpose of chaining.
   * @description Multiply `x` / `y` values to their respective component value on the instance.
   * @overloaded
   */
  multiply: function(x, y) {
    if (arguments.length <= 0) {
      return this;
    } else if (arguments.length <= 1) {
      if (typeof x === 'number') {
        this.x *= x;
        this.y *= x;
      } else if (x && typeof x.x === 'number' && typeof x.y === 'number') {
        this.x *= x.x;
        this.y *= x.y;
      }
    } else {
      this.x *= x;
      this.y *= y;
    }
    return this;
  },

  /**
   * @name Two.Vector#multiplySelf
   * @function
   * @description Alias for {@link Two.Vector.multiply}.
   */
  multiplySelf: function(v) {
    return this.multiply.apply(this, arguments);
  },

  /**
   * @name Two.Vector#multiplyScalar
   * @function
   * @param {Number} s - The scalar to multiply by.
   * @description Mulitiply the vector by a single number. Shorthand to call {@link Two.Vector#multiply} directly.
   */
  multiplyScalar: function(s) {
    return this.multiply(s);
  },

  /**
   * @name Two.Vector#divide
   * @function
   * @param {Two.Vector} v
   * @returns {Two.Vector} - An instance of itself for the purpose of chaining.
   * @description Divide an object with x / y component values to the instance.
   * @overloaded
   */

  /**
   * @name Two.Vector#divide
   * @function
   * @param {Number} v
   * @returns {Two.Vector} - An instance of itself for the purpose of chaining.
   * @description Divide the **same** number to both x / y component values of the instance.
   * @overloaded
   */

  /**
   * @name Two.Vector#divide
   * @function
   * @param {Number} x
   * @param {Number} y
   * @returns {Two.Vector} - An instance of itself for the purpose of chaining.
   * @description Divide `x` / `y` values to their respective component value on the instance.
   * @overloaded
   */
  divide: function(x, y) {
    if (arguments.length <= 0) {
      return this;
    } else if (arguments.length <= 1) {
      if (typeof x === 'number') {
        this.x /= x;
        this.y /= x;
      } else if (x && typeof x.x === 'number' && typeof x.y === 'number') {
        this.x /= x.x;
        this.y /= x.y;
      }
    } else {
      this.x /= x;
      this.y /= y;
    }
    if (_.isNaN(this.x)) {
      this.x = 0;
    }
    if (_.isNaN(this.y)) {
      this.y = 0;
    }
    return this;
  },

  /**
   * @name Two.Vector#divideSelf
   * @function
   * @description Alias for {@link Two.Vector.divide}.
   */
  divideSelf: function(v) {
    return this.divide.apply(this, arguments);
  },

  /**
   * @name Two.Vector#divideScalar
   * @function
   * @param {Number} s - The scalar to divide by.
   * @description Divide the vector by a single number. Shorthand to call {@link Two.Vector#divide} directly.
   */
  divideScalar: function(s) {
    return this.divide(s);
  },

  /**
   * @name Two.Vector#negate
   * @function
   * @description Invert each component's sign value.
   */
  negate: function() {
    return this.multiply(-1);
  },

  /**
   * @name Two.Vector#negate
   * @function
   * @returns {Number}
   * @description Get the [dot product](https://en.wikipedia.org/wiki/Dot_product) of the vector.
   */
  dot: function(v) {
    return this.x * v.x + this.y * v.y;
  },

  /**
   * @name Two.Vector#length
   * @function
   * @returns {Number}
   * @description Get the length of a vector.
   */
  length: function() {
    return Math.sqrt(this.lengthSquared());
  },

  /**
   * @name Two.Vector#lengthSquared
   * @function
   * @returns {Number}
   * @description Get the length of the vector to the power of two. Widely used as less expensive than {@link Two.Vector#length}, because it isn't square-rooting any numbers.
   */
  lengthSquared: function() {
    return this.x * this.x + this.y * this.y;
  },

  /**
   * @name Two.Vector#normalize
   * @function
   * @description Normalize the vector from negative one to one.
   */
  normalize: function() {
    return this.divideScalar(this.length());
  },

  /**
   * @name Two.Vector#distanceTo
   * @function
   * @returns {Number}
   * @description Get the distance between two vectors.
   */
  distanceTo: function(v) {
    return Math.sqrt(this.distanceToSquared(v));
  },

  /**
   * @name Two.Vector#distanceToSquared
   * @function
   * @returns {Number}
   * @description Get the distance between two vectors to the power of two. Widely used as less expensive than {@link Two.Vector#distanceTo}, because it isn't square-rooting any numbers.
   */
  distanceToSquared: function(v) {
    var dx = this.x - v.x,
        dy = this.y - v.y;
    return dx * dx + dy * dy;
  },

  /**
   * @name Two.Vector#setLength
   * @function
   * @param {Number} l - length to set vector to.
   * @description Set the length of a vector.
   */
  setLength: function(l) {
    return this.normalize().multiplyScalar(l);
  },

  /**
   * @name Two.Vector#equals
   * @function
   * @param {Two.Vector} v - The vector to compare against.
   * @param {Number} [eps=0.0001] - An options epsilon for precision.
   * @returns {Boolean}
   * @description Qualify if one vector roughly equal another. With a margin of error defined by epsilon.
   */
  equals: function(v, eps) {
    eps = (typeof eps === 'undefined') ?  0.0001 : eps;
    return (this.distanceTo(v) < eps);
  },

  /**
   * @name Two.Vector#lerp
   * @function
   * @param {Two.Vector} v - The destination vector to step towards.
   * @param {Number} t - The zero to one value of how close the current vector gets to the destination vector.
   * @description Linear interpolate one vector to another by an amount `t` defined as a zero to one number.
   * @see [Matt DesLauriers](https://twitter.com/mattdesl/status/1031305279227478016) has a good thread about this.
   */
  lerp: function(v, t) {
    var x = (v.x - this.x) * t + this.x;
    var y = (v.y - this.y) * t + this.y;
    return this.set(x, y);
  },

  /**
   * @name Two.Vector#isZero
   * @function
   * @param {Number} [eps=0.0001] - Optional precision amount to check against.
   * @returns {Boolean}
   * @description Check to see if vector is roughly zero, based on the `epsilon` precision value.
   */
  isZero: function(eps) {
    eps = (typeof eps === 'undefined') ?  0.0001 : eps;
    return (this.length() < eps);
  },

  /**
   * @name Two.Vector#toString
   * @function
   * @returns {String}
   * @description Return a comma-separated string of x, y value. Great for storing in a database.
   */
  toString: function() {
    return this.x + ', ' + this.y;
  },

  /**
   * @name Two.Vector#toObject
   * @function
   * @returns {Object}
   * @description Return a JSON compatible plain object that represents the vector.
   */
  toObject: function() {
    return { x: this.x, y: this.y };
  },

  /**
   * @name Two.Vector#rotate
   * @function
   * @param {Radians} radians - The amoun to rotate the vector by.
   * @description Rotate a vector.
   */
  rotate: function(radians) {
    var cos = Math.cos(radians);
    var sin = Math.sin(radians);
    this.x = this.x * cos - this.y * sin;
    this.y = this.x * sin + this.y * cos;
    return this;
  }

});

// The same set of prototypical functions, but using the underlying
// getter or setter for `x` and `y` values. This set of functions
// is used instead of the previously documented ones above when
// Two.Vector#bind is invoked and there is event dispatching processed
// on x / y property changes.
var BoundProto = {

  constructor: Vector,

  set: function(x, y) {
    this._x = x;
    this._y = y;
    return this.trigger(Events.Types.change);
  },

  copy: function(v) {
    this._x = v.x;
    this._y = v.y;
    return this.trigger(Events.Types.change);
  },

  clear: function() {
    this._x = 0;
    this._y = 0;
    return this.trigger(Events.Types.change);
  },

  clone: function() {
    return new Vector(this._x, this._y);
  },

  add: function(x, y) {
    if (arguments.length <= 0) {
      return this;
    } else if (arguments.length <= 1) {
      if (typeof x === 'number') {
        this._x += x;
        this._y += x;
      }  else if (x && typeof x.x === 'number' && typeof x.y === 'number') {
        this._x += x.x;
        this._y += x.y;
      }
    } else {
      this._x += x;
      this._y += y;
    }
    return this.trigger(Events.Types.change);
  },

  sub: function(x, y) {
    if (arguments.length <= 0) {
      return this;
    } else if (arguments.length <= 1) {
      if (typeof x === 'number') {
        this._x -= x;
        this._y -= x;
      } else if (x && typeof x.x === 'number' && typeof x.y === 'number') {
        this._x -= x.x;
        this._y -= x.y;
      }
    } else {
      this._x -= x;
      this._y -= y;
    }
    return this.trigger(Events.Types.change);
  },

  multiply: function(x, y) {
    if (arguments.length <= 0) {
      return this;
    } else if (arguments.length <= 1) {
      if (typeof x === 'number') {
        this._x *= x;
        this._y *= x;
      } else if (x && typeof x.x === 'number' && typeof x.y === 'number') {
        this._x *= x.x;
        this._y *= x.y;
      }
    } else {
      this._x *= x;
      this._y *= y;
    }
    return this.trigger(Events.Types.change);
  },

  divide: function(x, y) {
    if (arguments.length <= 0) {
      return this;
    } else if (arguments.length <= 1) {
      if (typeof x === 'number') {
        this._x /= x;
        this._y /= x;
      } else if (x && typeof x.x === 'number' && typeof x.y === 'number') {
        this._x /= x.x;
        this._y /= x.y;
      }
    } else {
      this._x /= x;
      this._y /= y;
    }
    if (_.isNaN(this._x)) {
      this._x = 0;
    }
    if (_.isNaN(this._y)) {
      this._y = 0;
    }
    return this.trigger(Events.Types.change);
  },

  dot: function(v) {
    return this._x * v.x + this._y * v.y;
  },

  lengthSquared: function() {
    return this._x * this._x + this._y * this._y;
  },

  distanceToSquared: function(v) {
    var dx = this._x - v.x,
        dy = this._y - v.y;
    return dx * dx + dy * dy;
  },

  lerp: function(v, t) {
    var x = (v.x - this._x) * t + this._x;
    var y = (v.y - this._y) * t + this._y;
    return this.set(x, y);
  },

  toString: function() {
    return this._x + ', ' + this._y;
  },

  toObject: function() {
    return { x: this._x, y: this._y };
  },

  rotate: function (radians) {
    var cos = Math.cos(radians);
    var sin = Math.sin(radians);
    this._x = this._x * cos - this._y * sin;
    this._y = this._x * sin + this._y * cos;
    return this;
  }

};

var xgs = {
  enumerable: true,
  get: function() {
    return this._x;
  },
  set: function(v) {
    this._x = v;
    this.trigger(Events.Types.change, 'x');
  }
};

var ygs = {
  enumerable: true,
  get: function() {
    return this._y;
  },
  set: function(v) {
    this._y = v;
    this.trigger(Events.Types.change, 'y');
  }
};

Vector.MakeObservable(Vector.prototype);

/**
 * @class
 * @name Two.Anchor
 * @param {Number} [x=0] - The x position of the root anchor point.
 * @param {Number} [y=0] - The y position of the root anchor point.
 * @param {Number} [lx=0] - The x position of the left handle point.
 * @param {Number} [ly=0] - The y position of the left handle point.
 * @param {Number} [rx=0] - The x position of the right handle point.
 * @param {Number} [ry=0] - The y position of the right handle point.
 * @param {String} [command=Two.Commands.move] - The command to describe how to render. Applicable commands are {@link Two.Commands}
 * @extends Two.Vector
 * @description An object that holds 3 {@link Two.Vector}s, the anchor point and its corresponding handles: `left` and `right`. In order to properly describe the bezier curve about the point there is also a command property to describe what type of drawing should occur when Two.js renders the anchors.
 */
var Anchor = function(x, y, lx, ly, rx, ry, command) {

  Vector.call(this, x, y);

  this._broadcast = (function() {
    this.trigger(Events.Types.change);
  }).bind(this);

  this._command = command || Commands.move;
  this._relative = true;

  var ilx = typeof lx === 'number';
  var ily = typeof ly === 'number';
  var irx = typeof rx === 'number';
  var iry = typeof ry === 'number';

  // Append the `controls` object only if control points are specified,
  // keeping the Two.Anchor inline with a Two.Vector until it needs to
  // evolve beyond those functions - e.g: a simple 2 component vector.
  if (ilx || ily || irx || iry) {
    Anchor.AppendCurveProperties(this);
  }

  if (ilx) {
    this.controls.left.x = lx;
  }
  if (ily) {
    this.controls.left.y = ly;
  }
  if (irx) {
    this.controls.right.x = rx;
  }
  if (iry) {
    this.controls.right.y = ry;
  }

};

_.extend(Anchor, {

  /**
   * @name Two.Anchor.AppendCurveProperties
   * @function
   * @param {Two.Anchor} anchor - The instance to append the `control`object to.
   * @description Adds the `controls` property as an object with `left` and `right` properties to access the bezier control handles that define how the curve is drawn. It also sets the `relative` property to `true` making vectors in the `controls` object relative to their corresponding root anchor point.
   */
  AppendCurveProperties: function(anchor) {

    anchor.relative = true;

    /**
     * @name Two.Anchor#controls
     * @property {Object} controls
     * @description An plain object that holds the controls handles for a {@link Two.Anchor}.
     */
    anchor.controls = {};

    /**
     * @name Two.Anchor#controls#left
     * @property {Two.Vector} left
     * @description The "left" control point to define handles on a bezier curve.
     */
    anchor.controls.left = new Vector(0, 0);

    /**
     * @name Two.Anchor#controls#right
     * @property {Two.Vector} right
     * @description The "left" control point to define handles on a bezier curve.
     */
    anchor.controls.right = new Vector(0, 0);

  },

  /**
   * @name Two.Anchor.MakeObservable
   * @function
   * @param {Object} object - The object to make observable.
   * @description Convenience function to apply observable qualities of a {@link Two.Anchor} to any object. Handy if you'd like to extend the {@link Two.Anchor} class on a custom class.
   */
  MakeObservable: function(object) {

    /**
     * @name Two.Anchor#command
     * @property {Two.Commands}
     * @description A draw command associated with the anchor point.
     */
    Object.defineProperty(object, 'command', {

      enumerable: true,

      get: function() {
        return this._command;
      },

      set: function(c) {
        this._command = c;
        if (this._command === Commands.curve && !_.isObject(this.controls)) {
          Anchor.AppendCurveProperties(this);
        }
        this.trigger(Events.Types.change);
      }

    });

    /**
     * @name Two.Anchor#relative
     * @property {Boolean}
     * @description A boolean to render control points relative to the root anchor point or in global coordinate-space to the rest of the scene.
     */
    Object.defineProperty(object, 'relative', {

      enumerable: true,

      get: function() {
        return this._relative;
      },

      set: function(b) {
        if (this._relative != b) {
          this._relative = !!b;
          this.trigger(Events.Types.change);
        }
      }

    });

    _.extend(object, Vector.prototype, AnchorProto);

    // Make it possible to bind and still have the Anchor specific
    // inheritance from Two.Vector. In this case relying on `Two.Vector`
    // to do much of the heavy event-listener binding / unbinding.
    object.bind = object.on = function() {
      var bound = this._bound;
      Vector.prototype.bind.apply(this, arguments);
      if (!bound) {
        _.extend(this, AnchorProto);
      }
    };

  }

});

var AnchorProto = {

  constructor: Anchor,

  /**
   * @name Two.Anchor#listen
   * @function
   * @description Convenience method used mainly by {@link Two.Path#vertices} to listen and propagate changes from control points up to their respective anchors and further if necessary.
   */
  listen: function() {

    if (!_.isObject(this.controls)) {
      Anchor.AppendCurveProperties(this);
    }

    this.controls.left.bind(Events.Types.change, this._broadcast);
    this.controls.right.bind(Events.Types.change, this._broadcast);

    return this;

  },

  /**
   * @name Two.Anchor#ignore
   * @function
   * @description Convenience method used mainly by {@link Two.Path#vertices} to ignore changes from a specific anchor's control points.
   */
  ignore: function() {

    this.controls.left.unbind(Events.Types.change, this._broadcast);
    this.controls.right.unbind(Events.Types.change, this._broadcast);

    return this;

  },

  /**
   * @name Two.Anchor#copy
   * @function
   * @param {Two.Anchor} v - The anchor to apply values to.
   * @description Copy the properties of one {@link Two.Anchor} onto another.
   */
  copy: function(v) {

    this.x = v.x;
    this.y = v.y;

    if (typeof v.command === 'string') {
      this.command = v.command;
    }
    if (_.isObject(v.controls)) {
      if (!_.isObject(this.controls)) {
        Anchor.AppendCurveProperties(this);
      }
      // TODO: Do we need to listen here?
      this.controls.left.copy(v.controls.left);
      this.controls.right.copy(v.controls.right);
    }
    if (typeof v.relative === 'boolean') {
      this.relative = v.relative;
    }

    // TODO: Hack for `Two.Commands.arc`
    if (this.command === Commands.arc) {
      this.rx = v.rx;
      this.ry = v.ry;
      this.xAxisRotation = v.xAxisRotation;
      this.largeArcFlag = v.largeArcFlag;
      this.sweepFlag = v.sweepFlag;
    }

    return this;

  },

  /**
   * @name Two.Anchor#clone
   * @function
   * @returns {Two.Anchor}
   * @description Create a new {@link Two.Anchor}, set all its values to the current instance and return it for use.
   */
  clone: function() {

    var controls = this.controls;

    var clone = new Anchor(
      this.x,
      this.y,
      controls && controls.left.x,
      controls && controls.left.y,
      controls && controls.right.x,
      controls && controls.right.y,
      this.command
    );
    clone.relative = this._relative;
    return clone;

  },

  /**
   * @name Two.Anchor#toObject
   * @function
   * @returns {Object} - An object with properties filled out to mirror {@link Two.Anchor}.
   * @description Create a JSON compatible plain object of the current instance. Intended for use with storing values in a database.
   */
  toObject: function() {
    var o = {
      x: this.x,
      y: this.y
    };
    if (this._command) {
      o.command = this._command;
    }
    if (this._relative) {
      o.relative = this._relative;
    }
    if (this.controls) {
      o.controls = {
        left: this.controls.left.toObject(),
        right: this.controls.right.toObject()
      };
    }
    return o;
  },

  /**
   * @name Two.Anchor#toString
   * @function
   * @returns {String} - A String with comma-separated values reflecting the various values on the current instance.
   * @description Create a string form of the current instance. Intended for use with storing values in a database. This is lighter to store than the JSON compatible {@link Two.Anchor#toObject}.
   */
  toString: function() {
    if (!this.controls) {
      return [this._x, this._y].join(', ');
    }
    return [this._x, this._y, this.controls.left.x, this.controls.left.y,
      this.controls.right.x, this.controls.right.y, this._command,
      this._relative ? 1 : 0].join(', ');
  }

};

Anchor.MakeObservable(Anchor.prototype);

// Constants

var cos = Math.cos, sin = Math.sin, tan = Math.tan;
var array = [];

/**
 * @name Two.Matrix
 * @class
 * @param {Number} [a=1] - The value for element at the first column and first row.
 * @param {Number} [b=0] - The value for element at the second column and first row.
 * @param {Number} [c=0] - The value for element at the third column and first row.
 * @param {Number} [d=0] - The value for element at the first column and second row.
 * @param {Number} [e=1] - The value for element at the second column and second row.
 * @param {Number} [f=0] - The value for element at the third column and second row.
 * @param {Number} [g=0] - The value for element at the first column and third row.
 * @param {Number} [h=0] - The value for element at the second column and third row.
 * @param {Number} [i=1] - The value for element at the third column and third row.
 * @description A class to store 3 x 3 transformation matrix information. In addition to storing data `Two.Matrix` has suped up methods for commonplace mathematical operations.
 * @nota-bene Order is based on how to construct transformation strings for the browser.
 */
var Matrix$1 = function(a, b, c, d, e, f) {

  /**
   * @name Two.Matrix#elements
   * @property {Number[]} - The underlying data stored as an array.
   */
  this.elements = new NumArray(9);

  var elements = a;
  if (!Array.isArray(elements)) {
    elements = Array.prototype.slice.call(arguments);
  }

  // initialize the elements with default values.
  this.identity();

  if (elements.length > 0) {
    this.set(elements);
  }

};

setMatrix(Matrix$1);

_.extend(Matrix$1, {

  /**
   * @name Two.Matrix.Identity
   * @property {Number[]} - A stored reference to the default value of a 3 x 3 matrix.
   */
  Identity: [
    1, 0, 0,
    0, 1, 0,
    0, 0, 1
  ],

  /**
   * @name Two.Matrix.Multiply
   * @function
   * @param {Two.Matrix} A
   * @param {Two.Matrix} B
   * @param {Two.Matrix} [C] - An optional matrix to apply the multiplication to.
   * @returns {Two.Matrix} - If an optional `C` matrix isn't passed then a new one is created and returned.
   * @description Multiply two matrices together and return the result.
   */
  Multiply: function(A, B, C) {

    if (B.length <= 3) { // Multiply Vector

      var x, y, z, e = A;

      var a = B[0] || 0,
          b = B[1] || 0,
          c = B[2] || 0;

      // Go down rows first
      // a, d, g, b, e, h, c, f, i

      x = e[0] * a + e[1] * b + e[2] * c;
      y = e[3] * a + e[4] * b + e[5] * c;
      z = e[6] * a + e[7] * b + e[8] * c;

      return { x: x, y: y, z: z };

    }

    var A0 = A[0], A1 = A[1], A2 = A[2];
    var A3 = A[3], A4 = A[4], A5 = A[5];
    var A6 = A[6], A7 = A[7], A8 = A[8];

    var B0 = B[0], B1 = B[1], B2 = B[2];
    var B3 = B[3], B4 = B[4], B5 = B[5];
    var B6 = B[6], B7 = B[7], B8 = B[8];

    C = C || new NumArray(9);

    C[0] = A0 * B0 + A1 * B3 + A2 * B6;
    C[1] = A0 * B1 + A1 * B4 + A2 * B7;
    C[2] = A0 * B2 + A1 * B5 + A2 * B8;
    C[3] = A3 * B0 + A4 * B3 + A5 * B6;
    C[4] = A3 * B1 + A4 * B4 + A5 * B7;
    C[5] = A3 * B2 + A4 * B5 + A5 * B8;
    C[6] = A6 * B0 + A7 * B3 + A8 * B6;
    C[7] = A6 * B1 + A7 * B4 + A8 * B7;
    C[8] = A6 * B2 + A7 * B5 + A8 * B8;

    return C;

  }

});

_.extend(Matrix$1.prototype, Events, {

  constructor: Matrix$1,

  /**
   * @name Two.Matrix#manual
   * @property {Boolean} - Determines whether Two.js automatically calculates the values for the matrix or if the developer intends to manage the matrix.
   * @nota-bene - Setting to `true` nullifies {@link Two.Shape#translation}, {@link Two.Shape#rotation}, and {@link Two.Shape#scale}.
   */
  manual: false,

  /**
   * @name Two.Matrix#set
   * @function
   * @param {Number} a - The value for element at the first column and first row.
   * @param {Number} b - The value for element at the second column and first row.
   * @param {Number} c - The value for element at the third column and first row.
   * @param {Number} d - The value for element at the first column and second row.
   * @param {Number} e - The value for element at the second column and second row.
   * @param {Number} f - The value for element at the third column and second row.
   * @param {Number} g - The value for element at the first column and third row.
   * @param {Number} h - The value for element at the second column and third row.
   * @param {Number} i - The value for element at the third column and third row.
   * @description Set an array of values onto the matrix. Order described in {@link Two.Matrix}.
   */

    /**
    * @name Two.Matrix#set
    * @function
    * @param {Number[]} a - The array of elements to apply.
    * @description Set an array of values onto the matrix. Order described in {@link Two.Matrix}.
    */
  set: function(a, b, c, d, e, f, g, h, i) {

    var elements;

    if (typeof b === 'undefined') {
      elements = a;
      a = elements[0];
      b = elements[1];
      c = elements[2];
      d = elements[3];
      e = elements[4];
      f = elements[5];
      g = elements[6];
      h = elements[7];
      i = elements[8];
    }

    this.elements[0] = a;
    this.elements[1] = b;
    this.elements[2] = c;
    this.elements[3] = d;
    this.elements[4] = e;
    this.elements[5] = f;
    this.elements[6] = g;
    this.elements[7] = h;
    this.elements[8] = i;

    return this.trigger(Events.Types.change);

  },

  /**
   * @name Two.Matrix#copy
   * @function
   * @description Copy the matrix of one to the current instance.
   */
  copy: function(m) {

    this.elements[0] = m.elements[0];
    this.elements[1] = m.elements[1];
    this.elements[2] = m.elements[2];
    this.elements[3] = m.elements[3];
    this.elements[4] = m.elements[4];
    this.elements[5] = m.elements[5];
    this.elements[6] = m.elements[6];
    this.elements[7] = m.elements[7];
    this.elements[8] = m.elements[8];

    this.manual = m.manual;

    return this.trigger(Events.Types.change);

  },

  /**
   * @name Two.Matrix#identity
   * @function
   * @description Turn matrix to the identity, like resetting.
   */
  identity: function() {

    this.elements[0] = Matrix$1.Identity[0];
    this.elements[1] = Matrix$1.Identity[1];
    this.elements[2] = Matrix$1.Identity[2];
    this.elements[3] = Matrix$1.Identity[3];
    this.elements[4] = Matrix$1.Identity[4];
    this.elements[5] = Matrix$1.Identity[5];
    this.elements[6] = Matrix$1.Identity[6];
    this.elements[7] = Matrix$1.Identity[7];
    this.elements[8] = Matrix$1.Identity[8];

    return this.trigger(Events.Types.change);

  },

  /**
   * @name Two.Matrix#multiply
   * @function
   * @param {Number} a - The scalar to be multiplied.
   * @description Multiply all components of the matrix against a single scalar value.
   * @overloaded
   */

  /**
   * @name Two.Matrix#multiply
   * @function
   * @param {Number} a - The x component to be multiplied.
   * @param {Number} b - The y component to be multiplied.
   * @param {Number} c - The z component to be multiplied.
   * @description Multiply all components of a matrix against a 3 component vector.
   * @overloaded
   */

  /**
   * @name Two.Matrix#multiply
   * @function
   * @param {Number} a - The value at the first column and first row of the matrix to be multiplied.
   * @param {Number} b - The value at the second column and first row of the matrix to be multiplied.
   * @param {Number} c - The value at the third column and first row of the matrix to be multiplied.
   * @param {Number} d - The value at the first column and second row of the matrix to be multiplied.
   * @param {Number} e - The value at the second column and second row of the matrix to be multiplied.
   * @param {Number} f - The value at the third column and second row of the matrix to be multiplied.
   * @param {Number} g - The value at the first column and third row of the matrix to be multiplied.
   * @param {Number} h - The value at the second column and third row of the matrix to be multiplied.
   * @param {Number} i - The value at the third column and third row of the matrix to be multiplied.
   * @description Multiply all components of a matrix against another matrix.
   * @overloaded
   */
  multiply: function(a, b, c, d, e, f, g, h, i) {

    // Multiply scalar

    if (typeof b === 'undefined') {

      this.elements[0] *= a;
      this.elements[1] *= a;
      this.elements[2] *= a;
      this.elements[3] *= a;
      this.elements[4] *= a;
      this.elements[5] *= a;
      this.elements[6] *= a;
      this.elements[7] *= a;
      this.elements[8] *= a;

      return this.trigger(Events.Types.change);

    }

    if (typeof d === 'undefined') { // Multiply Vector

      var x, y, z;
      a = a || 0;
      b = b || 0;
      c = c || 0;
      e = this.elements;

      // Go down rows first
      // a, d, g, b, e, h, c, f, i

      x = e[0] * a + e[1] * b + e[2] * c;
      y = e[3] * a + e[4] * b + e[5] * c;
      z = e[6] * a + e[7] * b + e[8] * c;

      return { x: x, y: y, z: z };

    }

    // Multiple matrix

    var A = this.elements;
    var B = [a, b, c, d, e, f, g, h, i];

    var A0 = A[0], A1 = A[1], A2 = A[2];
    var A3 = A[3], A4 = A[4], A5 = A[5];
    var A6 = A[6], A7 = A[7], A8 = A[8];

    var B0 = B[0], B1 = B[1], B2 = B[2];
    var B3 = B[3], B4 = B[4], B5 = B[5];
    var B6 = B[6], B7 = B[7], B8 = B[8];

    this.elements[0] = A0 * B0 + A1 * B3 + A2 * B6;
    this.elements[1] = A0 * B1 + A1 * B4 + A2 * B7;
    this.elements[2] = A0 * B2 + A1 * B5 + A2 * B8;

    this.elements[3] = A3 * B0 + A4 * B3 + A5 * B6;
    this.elements[4] = A3 * B1 + A4 * B4 + A5 * B7;
    this.elements[5] = A3 * B2 + A4 * B5 + A5 * B8;

    this.elements[6] = A6 * B0 + A7 * B3 + A8 * B6;
    this.elements[7] = A6 * B1 + A7 * B4 + A8 * B7;
    this.elements[8] = A6 * B2 + A7 * B5 + A8 * B8;

    return this.trigger(Events.Types.change);

  },

  /**
   * @name Two.Matrix#inverse
   * @function
   * @param {Two.Matrix} [out] - The optional matrix to apply the inversion to.
   * @description Return an inverted version of the matrix. If no optional one is passed a new matrix is created and returned.
   */
  inverse: function(out) {

    var a = this.elements;
    out = out || new Matrix$1();

    var a00 = a[0], a01 = a[1], a02 = a[2];
    var a10 = a[3], a11 = a[4], a12 = a[5];
    var a20 = a[6], a21 = a[7], a22 = a[8];

    var b01 = a22 * a11 - a12 * a21;
    var b11 = -a22 * a10 + a12 * a20;
    var b21 = a21 * a10 - a11 * a20;

    // Calculate the determinant
    var det = a00 * b01 + a01 * b11 + a02 * b21;

    if (!det) {
      return null;
    }

    det = 1.0 / det;

    out.elements[0] = b01 * det;
    out.elements[1] = (-a22 * a01 + a02 * a21) * det;
    out.elements[2] = (a12 * a01 - a02 * a11) * det;
    out.elements[3] = b11 * det;
    out.elements[4] = (a22 * a00 - a02 * a20) * det;
    out.elements[5] = (-a12 * a00 + a02 * a10) * det;
    out.elements[6] = b21 * det;
    out.elements[7] = (-a21 * a00 + a01 * a20) * det;
    out.elements[8] = (a11 * a00 - a01 * a10) * det;

    return out;

  },

  /**
   * @name Two.Matrix#scale
   * @function
   * @param {Number} scale - The one dimensional scale to apply to the matrix.
   * @description Uniformly scale the transformation matrix.
   */

  /**
   * @name Two.Matrix#scale
   * @function
   * @param {Number} sx - The horizontal scale factor.
   * @param {Number} sy - The vertical scale factor
   * @description Scale the transformation matrix in two dimensions.
   */
  scale: function(sx, sy) {

    var l = arguments.length;
    if (l <= 1) {
      sy = sx;
    }

    return this.multiply(sx, 0, 0, 0, sy, 0, 0, 0, 1);

  },

  /**
   * @name Two.Matrix#rotate
   * @function
   * @param {Radians} radians - The amount to rotate in radians.
   * @description Rotate the matrix.
   */
  rotate: function(radians) {

    var c = cos(radians);
    var s = sin(radians);

    return this.multiply(c, -s, 0, s, c, 0, 0, 0, 1);

  },

  /**
   * @name Two.Matrix#translate
   * @function
   * @param {Number} x - The horizontal translation value to apply.
   * @param {Number} y - The vertical translation value to apply.
   * @description Translate the matrix.
   */
  translate: function(x, y) {

    return this.multiply(1, 0, x, 0, 1, y, 0, 0, 1);

  },

  /**
   * @name Two.Matrix#skewX
   * @function
   * @param {Radians} radians - The amount to skew in radians.
   * @description Skew the matrix by an angle in the x axis direction.
   */
  skewX: function(radians) {

    var a = tan(radians);

    return this.multiply(1, a, 0, 0, 1, 0, 0, 0, 1);

  },

  /**
   * @name Two.Matrix#skewY
   * @function
   * @param {Radians} radians - The amount to skew in radians.
   * @description Skew the matrix by an angle in the y axis direction.
   */
  skewY: function(radians) {

    var a = tan(radians);

    return this.multiply(1, 0, 0, a, 1, 0, 0, 0, 1);

  },

  /**
   * @name Two.Matrix#toString
   * @function
   * @param {Boolean} [fullMatrix=false] - Return the full 9 elements of the matrix or just 6 for 2D transformations.
   * @returns {String} - The transformation matrix as a 6 component string separated by spaces.
   * @description Create a transform string. Used for the Two.js rendering APIs.
   */
  toString: function(fullMatrix) {

    array.length = 0;
    this.toTransformArray(fullMatrix, array);

    return array.map(toFixed).join(' ');

  },

  /**
   * @name Two.Matrix#toTransformArray
   * @function
   * @param {Boolean} [fullMatrix=false] - Return the full 9 elements of the matrix or just 6 in the format for 2D transformations.
   * @param {Number[]} [output] - An array empty or otherwise to apply the values to.
   * @description Create a transform array. Used for the Two.js rendering APIs.
   */
  toTransformArray: function(fullMatrix, output) {

    var elements = this.elements;
    var hasOutput = !!output;

    var a = elements[0];
    var b = elements[1];
    var c = elements[2];
    var d = elements[3];
    var e = elements[4];
    var f = elements[5];

    if (fullMatrix) {

      var g = elements[6];
      var h = elements[7];
      var i = elements[8];

      if (hasOutput) {
        output[0] = a;
        output[1] = d;
        output[2] = g;
        output[3] = b;
        output[4] = e;
        output[5] = h;
        output[6] = c;
        output[7] = f;
        output[8] = i;
        return;
      }

      return [
        a, d, g, b, e, h, c, f, i
      ];
    }

    if (hasOutput) {
      output[0] = a;
      output[1] = d;
      output[2] = b;
      output[3] = e;
      output[4] = c;
      output[5] = f;
      return;
    }

    return [
      a, d, b, e, c, f  // Specific format see LN:19
    ];

  },

  /**
   * @name Two.Matrix#toArray
   * @function
   * @param {Boolean} [fullMatrix=false] - Return the full 9 elements of the matrix or just 6 for 2D transformations.
   * @param {Number[]} [output] - An array empty or otherwise to apply the values to.
   * @description Create a transform array. Used for the Two.js rendering APIs.
   */
  toArray: function(fullMatrix, output) {

    var elements = this.elements;
    var hasOutput = !!output;

    var a = elements[0];
    var b = elements[1];
    var c = elements[2];
    var d = elements[3];
    var e = elements[4];
    var f = elements[5];

    if (fullMatrix) {

      var g = elements[6];
      var h = elements[7];
      var i = elements[8];

      if (hasOutput) {
        output[0] = a;
        output[1] = b;
        output[2] = c;
        output[3] = d;
        output[4] = e;
        output[5] = f;
        output[6] = g;
        output[7] = h;
        output[8] = i;
        return;
      }

      return [
        a, b, c, d, e, f, g, h, i
      ];
    }

    if (hasOutput) {
      output[0] = a;
      output[1] = b;
      output[2] = c;
      output[3] = d;
      output[4] = e;
      output[5] = f;
      return;
    }

    return [
      a, b, c, d, e, f
    ];

  },

  /**
   * @name Two.Matrix#toObject
   * @function
   * @description Create a JSON compatible object that represents information of the matrix.
   */
  toObject: function() {
    return {
      elements: this.toArray(true),
      manual: !!this.manual
    };
  },

  /**
   * @name Two.Matrix#clone
   * @function
   * @description Clone the current matrix.
   */
  clone: function() {

    return new Matrix$1().copy(this);

  }

});

var count = 0;

var Constants = {

  /**
   * @name Two.nextFrameID
   * @property {Integer}
   * @description The id of the next requestAnimationFrame function.
   */
  nextFrameID: null,

  // Primitive

  /**
   * @name Two.Types
   * @property {Object} - The different rendering types available in the library.
   */
  Types: {
    webgl: 'WebGLRenderer',
    svg: 'SVGRenderer',
    canvas: 'CanvasRenderer'
  },

  /**
   * @name Two.Version
   * @property {String} - The current working version of the library.
   */
  Version: 'v0.7.1',

  /**
   * @name Two.PublishDate
   * @property {String} - The automatically generated publish date in the build process to verify version release candidates.
   */
  PublishDate: '2021-01-13T01:57:28.198Z',

  /**
   * @name Two.Identifier
   * @property {String} - String prefix for all Two.js object's ids. This trickles down to SVG ids.
   */
  Identifier: 'two-',

  /**
   * @name Two.Resolution
   * @property {Number} - Default amount of vertices to be used for interpreting Arcs and ArcSegments.
   */
  Resolution: 12,

  /**
   * @name Two.AutoCalculateImportedMatrices
   * @property {Boolean} - When importing SVGs through the {@link two#interpret} and {@link two#load}, this boolean determines whether Two.js infers and then overrides the exact transformation matrix of the reference SVG.
   * @nota-bene `false` copies the exact transformation matrix values, but also sets the path's `matrix.manual = true`.
   */
  AutoCalculateImportedMatrices: true,

  /**
   * @name Two.Instances
   * @property {Two[]} - Registered list of all Two.js instances in the current session.
   */
  Instances: [],

  /**
   * @function Two.uniqueId
   * @description Simple method to access an incrementing value. Used for `id` allocation on all Two.js objects.
   * @returns {Number} Ever increasing integer.
   */
  uniqueId: function() {
    return count++;
  }

};

var HALF_PI = Math.PI / 2;

/**
 * @name Utils.Curve
 * @property {Object} - Additional utility constant variables related to curve math and calculations.
 */
var Curve = {

  CollinearityEpsilon: Math.pow(10, -30),

  RecursionLimit: 16,

  CuspLimit: 0,

  Tolerance: {
    distance: 0.25,
    angle: 0,
    epsilon: Number.EPSILON
  },

  // Lookup tables for abscissas and weights with values for n = 2 .. 16.
  // As values are symmetric, only store half of them and adapt algorithm
  // to factor in symmetry.
  abscissas: [
    [  0.5773502691896257645091488],
    [0,0.7745966692414833770358531],
    [  0.3399810435848562648026658,0.8611363115940525752239465],
    [0,0.5384693101056830910363144,0.9061798459386639927976269],
    [  0.2386191860831969086305017,0.6612093864662645136613996,0.9324695142031520278123016],
    [0,0.4058451513773971669066064,0.7415311855993944398638648,0.9491079123427585245261897],
    [  0.1834346424956498049394761,0.5255324099163289858177390,0.7966664774136267395915539,0.9602898564975362316835609],
    [0,0.3242534234038089290385380,0.6133714327005903973087020,0.8360311073266357942994298,0.9681602395076260898355762],
    [  0.1488743389816312108848260,0.4333953941292471907992659,0.6794095682990244062343274,0.8650633666889845107320967,0.9739065285171717200779640],
    [0,0.2695431559523449723315320,0.5190961292068118159257257,0.7301520055740493240934163,0.8870625997680952990751578,0.9782286581460569928039380],
    [  0.1252334085114689154724414,0.3678314989981801937526915,0.5873179542866174472967024,0.7699026741943046870368938,0.9041172563704748566784659,0.9815606342467192506905491],
    [0,0.2304583159551347940655281,0.4484927510364468528779129,0.6423493394403402206439846,0.8015780907333099127942065,0.9175983992229779652065478,0.9841830547185881494728294],
    [  0.1080549487073436620662447,0.3191123689278897604356718,0.5152486363581540919652907,0.6872929048116854701480198,0.8272013150697649931897947,0.9284348836635735173363911,0.9862838086968123388415973],
    [0,0.2011940939974345223006283,0.3941513470775633698972074,0.5709721726085388475372267,0.7244177313601700474161861,0.8482065834104272162006483,0.9372733924007059043077589,0.9879925180204854284895657],
    [  0.0950125098376374401853193,0.2816035507792589132304605,0.4580167776572273863424194,0.6178762444026437484466718,0.7554044083550030338951012,0.8656312023878317438804679,0.9445750230732325760779884,0.9894009349916499325961542]
  ],

  weights: [
    [1],
    [0.8888888888888888888888889,0.5555555555555555555555556],
    [0.6521451548625461426269361,0.3478548451374538573730639],
    [0.5688888888888888888888889,0.4786286704993664680412915,0.2369268850561890875142640],
    [0.4679139345726910473898703,0.3607615730481386075698335,0.1713244923791703450402961],
    [0.4179591836734693877551020,0.3818300505051189449503698,0.2797053914892766679014678,0.1294849661688696932706114],
    [0.3626837833783619829651504,0.3137066458778872873379622,0.2223810344533744705443560,0.1012285362903762591525314],
    [0.3302393550012597631645251,0.3123470770400028400686304,0.2606106964029354623187429,0.1806481606948574040584720,0.0812743883615744119718922],
    [0.2955242247147528701738930,0.2692667193099963550912269,0.2190863625159820439955349,0.1494513491505805931457763,0.0666713443086881375935688],
    [0.2729250867779006307144835,0.2628045445102466621806889,0.2331937645919904799185237,0.1862902109277342514260976,0.1255803694649046246346943,0.0556685671161736664827537],
    [0.2491470458134027850005624,0.2334925365383548087608499,0.2031674267230659217490645,0.1600783285433462263346525,0.1069393259953184309602547,0.0471753363865118271946160],
    [0.2325515532308739101945895,0.2262831802628972384120902,0.2078160475368885023125232,0.1781459807619457382800467,0.1388735102197872384636018,0.0921214998377284479144218,0.0404840047653158795200216],
    [0.2152638534631577901958764,0.2051984637212956039659241,0.1855383974779378137417166,0.1572031671581935345696019,0.1215185706879031846894148,0.0801580871597602098056333,0.0351194603317518630318329],
    [0.2025782419255612728806202,0.1984314853271115764561183,0.1861610000155622110268006,0.1662692058169939335532009,0.1395706779261543144478048,0.1071592204671719350118695,0.0703660474881081247092674,0.0307532419961172683546284],
    [0.1894506104550684962853967,0.1826034150449235888667637,0.1691565193950025381893121,0.1495959888165767320815017,0.1246289712555338720524763,0.0951585116824927848099251,0.0622535239386478928628438,0.0271524594117540948517806]
  ]

};

/**
 * @name Utils.getComponentOnCubicBezier
 * @function
 * @param {Number} t - Zero-to-one value describing what percentage to calculate.
 * @param {Number} a - The firt point's component value.
 * @param {Number} b - The first point's bezier component value.
 * @param {Number} c - The second point's bezier component value.
 * @param {Number} d - The second point's component value.
 * @returns {Number} The coordinate value for a specific component along a cubic bezier curve by `t`.
 */
var getComponentOnCubicBezier = function(t, a, b, c, d) {
  var k = 1 - t;
  return (k * k * k * a) + (3 * k * k * t * b) + (3 * k * t * t * c) +
      (t * t * t * d);
};

/**
 * @name Utils.subdivide
 * @function
 * @param {Number} x1 - x position of first anchor point.
 * @param {Number} y1 - y position of first anchor point.
 * @param {Number} x2 - x position of first anchor point's "right" bezier handle.
 * @param {Number} y2 - y position of first anchor point's "right" bezier handle.
 * @param {Number} x3 - x position of second anchor point's "left" bezier handle.
 * @param {Number} y3 - y position of second anchor point's "left" bezier handle.
 * @param {Number} x4 - x position of second anchor point.
 * @param {Number} y4 - y position of second anchor point.
 * @param {Number} [limit=Utils.Curve.RecursionLimit] - The amount of vertices to create by subdividing.
 * @returns {Anchor[]} A list of anchor points ordered in between `x1`, `y1` and `x4`, `y4`
 * @description Given 2 points (a, b) and corresponding control point for each return an array of points that represent points plotted along the curve. The number of returned points is determined by `limit`.
 */
var subdivide = function(x1, y1, x2, y2, x3, y3, x4, y4, limit) {

  limit = limit || Curve.RecursionLimit;
  var amount = limit + 1;

  // TODO: Abstract 0.001 to a limiting variable
  // Don't recurse if the end points are identical
  if (Math.abs(x1 - x4) < 0.001 && Math.abs(y1 - y4) < 0.001) {
    return [new Anchor(x4, y4)];
  }

  var result = [];

  for (var i = 0; i < amount; i++) {
    var t = i / amount;
    var x = getComponentOnCubicBezier(t, x1, x2, x3, x4);
    var y = getComponentOnCubicBezier(t, y1, y2, y3, y4);
    result.push(new Anchor(x, y));
  }

  return result;

};

/**
 * @name Utils.getCurveLength
 * @function
 * @param {Number} x1 - x position of first anchor point.
 * @param {Number} y1 - y position of first anchor point.
 * @param {Number} x2 - x position of first anchor point's "right" bezier handle.
 * @param {Number} y2 - y position of first anchor point's "right" bezier handle.
 * @param {Number} x3 - x position of second anchor point's "left" bezier handle.
 * @param {Number} y3 - y position of second anchor point's "left" bezier handle.
 * @param {Number} x4 - x position of second anchor point.
 * @param {Number} y4 - y position of second anchor point.
 * @param {Number} [limit=Utils.Curve.RecursionLimit] - The amount of vertices to create by subdividing.
 * @returns {Number} The length of a curve.
 * @description Given 2 points (a, b) and corresponding control point for each, return a float that represents the length of the curve using Gauss-Legendre algorithm. Limit iterations of calculation by `limit`.
 */
var getCurveLength = function(x1, y1, x2, y2, x3, y3, x4, y4, limit) {

  // TODO: Better / fuzzier equality check
  // Linear calculation
  if (x1 === x2 && y1 === y2 && x3 === x4 && y3 === y4) {
    var dx = x4 - x1;
    var dy = y4 - y1;
    return Math.sqrt(dx * dx + dy * dy);
  }

  // Calculate the coefficients of a Bezier derivative.
  var ax = 9 * (x2 - x3) + 3 * (x4 - x1),
    bx = 6 * (x1 + x3) - 12 * x2,
    cx = 3 * (x2 - x1),

    ay = 9 * (y2 - y3) + 3 * (y4 - y1),
    by = 6 * (y1 + y3) - 12 * y2,
    cy = 3 * (y2 - y1);

  var integrand = function(t) {
    // Calculate quadratic equations of derivatives for x and y
    var dx = (ax * t + bx) * t + cx,
      dy = (ay * t + by) * t + cy;
    return Math.sqrt(dx * dx + dy * dy);
  };

  return integrate(
    integrand, 0, 1, limit || Curve.RecursionLimit
  );

};

/**
 * @name Utils.getCurveBoundingBox
 * @function
 * @param {Number} x1 - x position of first anchor point.
 * @param {Number} y1 - y position of first anchor point.
 * @param {Number} x2 - x position of first anchor point's "right" bezier handle.
 * @param {Number} y2 - y position of first anchor point's "right" bezier handle.
 * @param {Number} x3 - x position of second anchor point's "left" bezier handle.
 * @param {Number} y3 - y position of second anchor point's "left" bezier handle.
 * @param {Number} x4 - x position of second anchor point.
 * @param {Number} y4 - y position of second anchor point.
 * @returns {Object} Object contains min and max `x` / `y` bounds.
 * @see {@link https://github.com/adobe-webplatform/Snap.svg/blob/master/src/path.js#L856}
 */
var getCurveBoundingBox = function(x1, y1, x2, y2, x3, y3, x4, y4) {

  var tvalues = [];
  var bounds = [[], []];
  var a, b, c, t, t1, t2, b2ac, sqrtb2ac;

  for (var i = 0; i < 2; ++i) {
      if (i == 0) {
        b = 6 * x1 - 12 * x2 + 6 * x3;
        a = -3 * x1 + 9 * x2 - 9 * x3 + 3 * x4;
        c = 3 * x2 - 3 * x1;
      } else {
        b = 6 * y1 - 12 * y2 + 6 * y3;
        a = -3 * y1 + 9 * y2 - 9 * y3 + 3 * y4;
        c = 3 * y2 - 3 * y1;
      }
      if (Math.abs(a) < 1e-12) {
        if (Math.abs(b) < 1e-12) {
          continue;
        }
        t = -c / b;
        if (0 < t && t < 1) {
          tvalues.push(t);
        }
        continue;
      }
      b2ac = b * b - 4 * c * a;
      sqrtb2ac = Math.sqrt(b2ac);
      if (b2ac < 0) {
        continue;
      }
      t1 = (-b + sqrtb2ac) / (2 * a);
      if (0 < t1 && t1 < 1) {
        tvalues.push(t1);
      }
      t2 = (-b - sqrtb2ac) / (2 * a);
      if (0 < t2 && t2 < 1) {
        tvalues.push(t2);
      }
  }

  var j = tvalues.length;
  var jlen = j;
  var mt;

  while (j--) {
    t = tvalues[j];
    mt = 1 - t;
    bounds[0][j] = mt * mt * mt * x1 + 3 * mt * mt * t * x2 + 3 * mt * t * t * x3 + t * t * t * x4;
    bounds[1][j] = mt * mt * mt * y1 + 3 * mt * mt * t * y2 + 3 * mt * t * t * y3 + t * t * t * y4;
  }

  bounds[0][jlen] = x1;
  bounds[1][jlen] = y1;
  bounds[0][jlen + 1] = x4;
  bounds[1][jlen + 1] = y4;
  bounds[0].length = bounds[1].length = jlen + 2;

  return {
    min: { x: Math.min.apply(0, bounds[0]), y: Math.min.apply(0, bounds[1]) },
    max: { x: Math.max.apply(0, bounds[0]), y: Math.max.apply(0, bounds[1]) }
  };

};

/**
 * @name Utils.integrate
 * @function
 * @param {Function} f
 * @param {Number} a
 * @param {Number} b
 * @param {Integer} n
 * @description Integration for `getCurveLength` calculations.
 * @see [Paper.js](@link https://github.com/paperjs/paper.js/blob/master/src/util/Numerical.js#L101)
 */
var integrate = function(f, a, b, n) {
  var x = Curve.abscissas[n - 2],
    w = Curve.weights[n - 2],
    A = 0.5 * (b - a),
    B = A + a,
    i = 0,
    m = (n + 1) >> 1,
    sum = n & 1 ? w[i++] * f(B) : 0; // Handle odd n
  while (i < m) {
    var Ax = A * x[i];
    sum += w[i++] * (f(B + Ax) + f(B - Ax));
  }
  return A * sum;
};

/**
 * @name Utils.getCurveFromPoints
 * @function
 * @param {Anchor[]} points
 * @param {Boolean} closed
 * @description Sets the bezier handles on {@link Anchor}s in the `points` list with estimated values to create a catmull-rom like curve. Used by {@link Two.Path#plot}.
 */
var getCurveFromPoints = function(points, closed) {

  var l = points.length, last = l - 1;

  for (var i = 0; i < l; i++) {

    var point = points[i];

    if (!_.isObject(point.controls)) {
      Anchor.AppendCurveProperties(point);
    }

    var prev = closed ? mod(i - 1, l) : Math.max(i - 1, 0);
    var next = closed ? mod(i + 1, l) : Math.min(i + 1, last);

    var a = points[prev];
    var b = point;
    var c = points[next];
    getControlPoints(a, b, c);

    b.command = i === 0 ? Commands.move : Commands.curve;

  }

};

/**
 * @name Utils.getControlPoints
 * @function
 * @param {Anchor} a
 * @param {Anchor} b
 * @param {Anchor} c
 * @returns {Anchor} Returns the passed middle point `b`.
 * @description Given three coordinates set the control points for the middle, b, vertex based on its position with the adjacent points.
 */
var getControlPoints = function(a, b, c) {

  var a1 = Vector.angleBetween(a, b);
  var a2 = Vector.angleBetween(c, b);

  var d1 = Vector.distanceBetween(a, b);
  var d2 = Vector.distanceBetween(c, b);

  var mid = (a1 + a2) / 2;

  // TODO: Issue 73
  if (d1 < 0.0001 || d2 < 0.0001) {
    if (typeof b.relative === 'boolean' && !b.relative) {
      b.controls.left.copy(b);
      b.controls.right.copy(b);
    }
    return b;
  }

  d1 *= 0.33; // Why 0.33?
  d2 *= 0.33;

  if (a2 < a1) {
    mid += HALF_PI;
  } else {
    mid -= HALF_PI;
  }

  b.controls.left.x = Math.cos(mid) * d1;
  b.controls.left.y = Math.sin(mid) * d1;

  mid -= Math.PI;

  b.controls.right.x = Math.cos(mid) * d2;
  b.controls.right.y = Math.sin(mid) * d2;

  if (typeof b.relative === 'boolean' && !b.relative) {
    b.controls.left.x += b.x;
    b.controls.left.y += b.y;
    b.controls.right.x += b.x;
    b.controls.right.y += b.y;
  }

  return b;

};

/**
 * @name Utils.getReflection
 * @function
 * @param {Vector} a
 * @param {Vector} b
 * @param {Boolean} [relative=false]
 * @returns {Vector} New {@link Vector} that represents the reflection point.
 * @description Get the reflection of a point `b` about point `a`. Where `a` is in absolute space and `b` is relative to `a`.
 * @see {@link http://www.w3.org/TR/SVG11/implnote.html#PathElementImplementationNotes}
 */
var getReflection = function(a, b, relative) {

  return new Vector(
    2 * a.x - (b.x + a.x) - (relative ? a.x : 0),
    2 * a.y - (b.y + a.y) - (relative ? a.y : 0)
  );

};

/**
 * @name Utils.getAnchorsFromArcData
 * @function
 * @param {Vector} center
 * @param {Radians} xAxisRotation
 * @param {Number} rx - x radius
 * @param {Number} ry - y radius
 * @param {Radians} ts
 * @param {Radians} td
 * @param {Boolean} [ccw=false] - Set path traversal to counter-clockwise
 */
var getAnchorsFromArcData = function(center, xAxisRotation, rx, ry, ts, td, ccw) {

  var matrix = new Matrix$1()
    .translate(center.x, center.y)
    .rotate(xAxisRotation);

  var resolution = Constants.Resolution;

  for (var i = 0; i < resolution; i++) {
    var pct = (i + 1) / resolution;
    if (ccw) {
      pct = 1 - pct;
    }

    var theta = pct * td + ts;
    var x = rx * Math.cos(theta);
    var y = ry * Math.sin(theta);

    // x += center.x;
    // y += center.y;

    var anchor = new Anchor(x, y);
    Anchor.AppendCurveProperties(anchor);
    anchor.command = Commands.line;
  }

};

var Curves = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Curve: Curve,
  getComponentOnCubicBezier: getComponentOnCubicBezier,
  subdivide: subdivide,
  getCurveLength: getCurveLength,
  getCurveBoundingBox: getCurveBoundingBox,
  integrate: integrate,
  getCurveFromPoints: getCurveFromPoints,
  getControlPoints: getControlPoints,
  getReflection: getReflection,
  getAnchorsFromArcData: getAnchorsFromArcData
});

var devicePixelRatio = root$1.devicePixelRatio || 1;

var getBackingStoreRatio = function(ctx) {
  return ctx.webkitBackingStorePixelRatio ||
  ctx.mozBackingStorePixelRatio ||
  ctx.msBackingStorePixelRatio ||
  ctx.oBackingStorePixelRatio ||
  ctx.backingStorePixelRatio || 1;
};

/**
 * @name Utils.getRatio
 * @function
 * @param {CanvasRenderingContext2D} ctx
 * @returns {Number} The ratio of a unit in Two.js to the pixel density of a session's screen.
 * @see [High DPI Rendering](http://www.html5rocks.com/en/tutorials/canvas/hidpi/)
 */
var getRatio = function(ctx) {
  return devicePixelRatio / getBackingStoreRatio(ctx);
};

/**
 * @name Utils.Collection
 * @class
 * @extends Utils.Events
 * @description An `Array` like object with additional event propagation on actions. `pop`, `shift`, and `splice` trigger `removed` events. `push`, `unshift`, and `splice` with more than 2 arguments trigger 'inserted'. Finally, `sort` and `reverse` trigger `order` events.
 */
var Collection = function() {

  Array.call(this);

  if (arguments.length > 1) {
    Array.prototype.push.apply(this, arguments);
  } else if (arguments[0] && Array.isArray(arguments[0])) {
    Array.prototype.push.apply(this, arguments[0]);
  }

};

Collection.prototype = new Array();
Collection.prototype.constructor = Collection;

_.extend(Collection.prototype, Events, {

  pop: function() {
    var popped = Array.prototype.pop.apply(this, arguments);
    this.trigger(Events.Types.remove, [popped]);
    return popped;
  },

  shift: function() {
    var shifted = Array.prototype.shift.apply(this, arguments);
    this.trigger(Events.Types.remove, [shifted]);
    return shifted;
  },

  push: function() {
    var pushed = Array.prototype.push.apply(this, arguments);
    this.trigger(Events.Types.insert, arguments);
    return pushed;
  },

  unshift: function() {
    var unshifted = Array.prototype.unshift.apply(this, arguments);
    this.trigger(Events.Types.insert, arguments);
    return unshifted;
  },

  splice: function() {
    var spliced = Array.prototype.splice.apply(this, arguments);
    var inserted;

    this.trigger(Events.Types.remove, spliced);

    if (arguments.length > 2) {
      inserted = this.slice(arguments[0], arguments[0] + arguments.length - 2);
      this.trigger(Events.Types.insert, inserted);
      this.trigger(Events.Types.order);
    }
    return spliced;
  },

  sort: function() {
    Array.prototype.sort.apply(this, arguments);
    this.trigger(Events.Types.order);
    return this;
  },

  reverse: function() {
    Array.prototype.reverse.apply(this, arguments);
    this.trigger(Events.Types.order);
    return this;
  }

});

/**
 * @name Two.Shape
 * @class
 * @extends Events
 * @description The foundational transformation object for the Two.js scenegraph.
 */
var Shape = function() {

  /**
   * @name Two.Shape#_renderer
   * @property {Object}
   * @private
   * @description A private object to store relevant renderer specific variables.
   * @nota-bene With the {@link Two.SvgRenderer} you can access the underlying SVG element created via `shape._renderer.elem`.
   */
  this._renderer = {};
  this._renderer.flagMatrix = Shape.FlagMatrix.bind(this);
  this.isShape = true;

  /**
   * @name Two.Shape#id
   * @property {String} - Session specific unique identifier.
   * @nota-bene In the {@link Two.SvgRenderer} change this to change the underlying SVG element's id too.
   */
  this.id = Constants.Identifier + Constants.uniqueId();

  /**
   * @name Two.Shape#classList
   * @property {String[]}
   * @description A list of class strings stored if imported / interpreted  from an SVG element.
   */
  this.classList = [];

  /**
   * @name Two.Shape#matrix
   * @property {Two.Matrix}
   * @description The transformation matrix of the shape.
   * @nota-bene {@link Two.Shape#translation}, {@link Two.Shape#rotation}, and {@link Two.Shape#scale} apply their values to the matrix when changed. The matrix is what is sent to the renderer to be drawn.
   */
  this.matrix = new Matrix$1();

  /**
   * @name Two.Shape#translation
   * @property {Two.Vector} - The x and y value for where the shape is placed relative to its parent.
   */
  this.translation = new Vector();

  /**
   * @name Two.Shape#rotation
   * @property {Radians} - The value in radians for how much the shape is rotated relative to its parent.
   */
  this.rotation = 0;

  /**
   * @name Two.Shape#scale
   * @property {Number} - The value for how much the shape is scaled relative to its parent.
   * @nota-bene This value can be replaced with a {@link Two.Vector} to do non-uniform scaling. e.g: `shape.scale = new Two.Vector(2, 1);`
   */
  this.scale = 1;

};

_.extend(Shape, {

  /**
   * @name Two.Shape.FlagMatrix
   * @function
   * @description Utility function used in conjunction with event handlers to update the flagMatrix of a shape.
   */
  FlagMatrix: function() {
    this._flagMatrix = true;
  },

  /**
   * @name Two.Shape.MakeObservable
   * @function
   * @param {Object} object - The object to make observable.
   * @description Convenience function to apply observable qualities of a {@link Two.Shape} to any object. Handy if you'd like to extend the {@link Two.Shape} class on a custom class.
   */
  MakeObservable: function(object) {

    var translation = {
      enumerable: false,
      get: function() {
        return this._translation;
      },
      set: function(v) {
        if (this._translation) {
          this._translation.unbind(Events.Types.change, this._renderer.flagMatrix);
        }
        this._translation = v;
        this._translation.bind(Events.Types.change, this._renderer.flagMatrix);
        Shape.FlagMatrix.call(this);
      }
    };

    Object.defineProperty(object, 'translation', translation);
    Object.defineProperty(object, 'position', translation);

    Object.defineProperty(object, 'rotation', {
      enumerable: true,
      get: function() {
        return this._rotation;
      },
      set: function(v) {
        this._rotation = v;
        this._flagMatrix = true;
      }
    });

    Object.defineProperty(object, 'scale', {
      enumerable: true,
      get: function() {
        return this._scale;
      },
      set: function(v) {

        if (this._scale instanceof Vector) {
          this._scale.unbind(Events.Types.change, this._renderer.flagMatrix);
        }

        this._scale = v;

        if (this._scale instanceof Vector) {
          this._scale.bind(Events.Types.change, this._renderer.flagMatrix);
        }

        this._flagMatrix = true;
        this._flagScale = true;

      }
    });

    Object.defineProperty(object, 'matrix', {
      enumerable: true,
      get: function() {
        return this._matrix;
      },
      set: function(v) {
        this._matrix = v;
        this._flagMatrix = true;
      }
    });

    Object.defineProperty(object, 'className', {

      enumerable: true,

      get: function() {
        return this._className;
      },

      set: function(v) {

        this._flagClassName = this._className !== v;

        if (this._flagClassName) {

          var prev = this._className.split(/\s+?/);
          var dest = v.split(/\s+?/);

          for (var i = 0; i < prev.length; i++) {
            var className = prev[i];
            var index = Array.prototype.indexOf.call(this.classList, className);
            if (index >= 0) {
              this.classList.splice(index, 1);
            }
          }

          this.classList = this.classList.concat(dest);

        }

        this._className = v;

      }

    });

  }

});

_.extend(Shape.prototype, Events, {

  // Flags

  /**
   * @name Two.Shape#_flagMatrix
   * @private
   * @property {Boolean} - Determines whether the matrix needs updating.
   */
  _flagMatrix: true,

  /**
   * @name Two.Shape#_flagScale
   * @private
   * @property {Boolean} - Determines whether the scale needs updating.
   */
  _flagScale: false,

  // _flagMask: false,
  // _flagClip: false,

  /**
   * @name Two.Shape#_flagClassName
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Group#className} need updating.
   */
  _flagClassName: false,

  // Underlying Properties

  /**
   * @name Two.Shape#_translation
   * @private
   * @property {Two.Vector} - The translation values as a {@link Two.Vector}.
   */
  _translation: null,

  /**
   * @name Two.Shape#_rotation
   * @private
   * @property {Radians} - The rotation value in radians.
   */
  _rotation: 0,

  /**
   * @name Two.Shape#_translation
   * @private
   * @property {Two.Vector} - The translation values as a {@link Two.Vector}.
   */
  _scale: 1,

  // _mask: null,
  // _clip: false,

  /**
   * @name Two.Shape#className
   * @property {String} - A class to be applied to the element to be compatible with CSS styling.
   * @nota-bene Only available for the SVG renderer.
   */
  _className: '',

  constructor: Shape,

  /**
   * @name Two.Shape#addTo
   * @function
   * @param {Two.Group} group - The parent the shape adds itself to.
   * @description Convenience method to add itself to the scenegraph.
   */
  addTo: function(group) {
    group.add(this);
    return this;
  },

  /**
   * @name Two.Shape#clone
   * @function
   * @param {Two.Group} [parent] - Optional argument to automatically add the shape to a scenegraph.
   * @returns {Two.Shape}
   * @description Create a new {@link Two.Shape} with the same values as the current shape.
   */
  clone: function(parent) {

    var clone = new Shape();

    clone.translation.copy(this.translation);
    clone.rotation = this.rotation;
    clone.scale = this.scale;

    if (this.matrix.manual) {
      clone.matrix.copy(this.matrix);
    }

    if (parent) {
      parent.add(clone);
    }

    return clone._update();

  },

  /**
   * @name Two.Shape#_update
   * @function
   * @private
   * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
   * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
   * @nota-bene Try not to call this method more than once a frame.
   */
  _update: function(bubbles) {

    if (!this._matrix.manual && this._flagMatrix) {

      this._matrix
        .identity()
        .translate(this.translation.x, this.translation.y);

        if (this._scale instanceof Vector) {
          this._matrix.scale(this._scale.x, this._scale.y);
        } else {
          this._matrix.scale(this._scale);
        }

        this._matrix.rotate(this.rotation);

    }

    if (bubbles) {
      if (this.parent && this.parent._update) {
        this.parent._update();
      }
    }

    return this;

  },

  /**
   * @name Two.Shape#flagReset
   * @function
   * @private
   * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
   */
  flagReset: function() {

    this._flagMatrix = this._flagScale = this._flagClassName = false;

    return this;

  }

});

Shape.MakeObservable(Shape.prototype);

/**
 * @class
 * @name Two.Group.Children
 * @extends Two.Utils.Collection
 * @description A children collection which is accesible both by index and by object `id`.
 */
var Children = function() {

  Collection.apply(this, arguments);

  Object.defineProperty(this, '_events', {
    value : {},
    enumerable: false
  });

  /**
   * @name Two.Group.Children#ids
   * @property {Object} - Map of all elements in the list keyed by `id`s.
   */
  this.ids = {};

  this.on(Events.Types.insert, this.attach);
  this.on(Events.Types.remove, this.detach);
  Children.prototype.attach.apply(this, arguments);

};

Children.prototype = new Collection();

_.extend(Children.prototype, {

  constructor: Children,

  /**
   * @function
   * @name Two.Group.Children#attach
   * @param {Two.Shape[]} children - The objects which extend {@link Two.Shape} to be added.
   * @description Adds elements to the `ids` map.
   */
  attach: function(children) {
    for (var i = 0; i < children.length; i++) {
      this.ids[children[i].id] = children[i];
    }
    return this;
  },

  /**
   * @function
   * @name Two.Group.Children#detach
   * @param {Two.Shape[]} children - The objects which extend {@link Two.Shape} to be removed.
   * @description Removes elements to the `ids` map.
   */
  detach: function(children) {
    for (var i = 0; i < children.length; i++) {
      delete this.ids[children[i].id];
    }
    return this;
  }

});

// Constants

var min = Math.min, max = Math.max;

/**
 * @name Two.Group
 * @class
 * @extends Two.Shape
 * @param {Two.Shape[]} [children] - A list of objects that inherit {@link Two.Shape}. For instance, the array could be a {@link Two.Path}, {@link Two.Text}, and {@link Two.RoundedRectangle}.
 * @description This is the primary class for grouping objects that are then drawn in Two.js. In Illustrator this is a group, in After Effects it would be a Null Object. Whichever the case, the `Two.Group` contains a transformation matrix and commands to style its children, but it by itself doesn't render to the screen.
 * @nota-bene The {@link Two#scene} is an instance of `Two.Group`.
 */
var Group = function(children) {

  Shape.call(this, true);

  this._renderer.type = 'group';

  /**
   * @name Two.Group#additions
   * @property {Two.Shape[]}
   * @description An automatically updated list of children that need to be appended to the renderer's scenegraph.
   */
  this.additions = [];

  /**
   * @name Two.Group#subtractions
   * @property {Two.Shape[]}
   * @description An automatically updated list of children that need to be removed from the renderer's scenegraph.
   */
  this.subtractions = [];

  /**
   * @name Two.Group#additions
   * @property {Two.Group.Children}
   * @description A list of all the children in the scenegraph.
   * @nota-bene Ther order of this list indicates the order each element is rendered to the screen.
   */
  this.children = Array.isArray(children) ? children : Array.prototype.slice.call(arguments);

};

_.extend(Group, {

  Children: Children,

  /**
   * @name Two.Group.InsertChildren
   * @function
   * @param {Two.Shape[]} children - The objects to be inserted.
   * @description Cached method to let renderers know children have been added to a {@link Two.Group}.
   */
  InsertChildren: function(children) {
    for (var i = 0; i < children.length; i++) {
      replaceParent.call(this, children[i], this);
    }
  },

  /**
   * @name Two.Group.RemoveChildren
   * @function
   * @param {Two.Shape[]} children - The objects to be removed.
   * @description Cached method to let renderers know children have been removed from a {@link Two.Group}.
   */
  RemoveChildren: function(children) {
    for (var i = 0; i < children.length; i++) {
      replaceParent.call(this, children[i]);
    }
  },

  /**
   * @name Two.Group.OrderChildren
   * @function
   * @description Cached method to let renderers know order has been updated on a {@link Two.Group}.
   */
  OrderChildren: function(children) {
    this._flagOrder = true;
  },

  /**
   * @name Two.Group.Properties
   * @property {String[]} - A list of properties that are on every {@link Two.Group}.
   */
  Properties: [
    'fill',
    'stroke',
    'linewidth',
    'visible',
    'cap',
    'join',
    'miter',

    'closed',
    'curved',
    'automatic'
  ],

  /**
   * @name Two.Group.MakeObservable
   * @function
   * @param {Object} object - The object to make observable.
   * @description Convenience function to apply observable qualities of a {@link Two.Group} to any object. Handy if you'd like to extend the {@link Two.Group} class on a custom class.
   */
  MakeObservable: function(object) {

    var properties = Group.Properties;

    Object.defineProperty(object, 'opacity', {

      enumerable: true,

      get: function() {
        return this._opacity;
      },

      set: function(v) {
        this._flagOpacity = this._opacity !== v;
        this._opacity = v;
      }

    });

    Object.defineProperty(object, 'beginning', {

      enumerable: true,

      get: function() {
        return this._beginning;
      },

      set: function(v) {
        this._flagBeginning = this._beginning !== v;
        this._beginning = v;
      }

    });

    Object.defineProperty(object, 'ending', {

      enumerable: true,

      get: function() {
        return this._ending;
      },

      set: function(v) {
        this._flagEnding = this._ending !== v;
        this._ending = v;
      }

    });

    Object.defineProperty(object, 'length', {

      enumerable: true,

      get: function() {
        if (this._flagLength || this._length <= 0) {
          this._length = 0;
          if (!this.children) {
            return this._length;
          }
          for (var i = 0; i < this.children.length; i++) {
            var child = this.children[i];
            this._length += child.length;
          }
        }
        return this._length;
      }

    });

    Shape.MakeObservable(object);
    Group.MakeGetterSetters(object, properties);

    Object.defineProperty(object, 'children', {

      enumerable: true,

      get: function() {
        return this._children;
      },

      set: function(children) {

        var insertChildren = Group.InsertChildren.bind(this);
        var removeChildren = Group.RemoveChildren.bind(this);
        var orderChildren = Group.OrderChildren.bind(this);

        if (this._children) {
          this._children.unbind();
        }

        this._children = new Children(children);
        this._children.bind(Events.Types.insert, insertChildren);
        this._children.bind(Events.Types.remove, removeChildren);
        this._children.bind(Events.Types.order, orderChildren);

      }

    });

    Object.defineProperty(object, 'mask', {

      enumerable: true,

      get: function() {
        return this._mask;
      },

      set: function(v) {
        this._mask = v;
        this._flagMask = true;
        if (!v.clip) {
          v.clip = true;
        }
      }

    });

  },

  /**
   * @name Two.Group.MakeGetterSetters
   * @function
   * @param {Two.Group} group - The group to apply getters and setters.
   * @param {Object} properties - A key / value object containing properties to inherit.
   * @description Convenience method to apply getter / setter logic on an array of properties. Used in {@link Two.Group.MakeObservable}.
   */
  MakeGetterSetters: function(group, properties) {

    if (!Array.isArray(properties)) {
      properties = [properties];
    }

    _.each(properties, function(k) {
      Group.MakeGetterSetter(group, k);
    });

  },

  /**
   * @name Two.Group.MakeGetterSetter
   * @function
   * @param {Two.Group} group - The group to apply getters and setters.
   * @param {String} key - The key which will become a property on the group.
   * @description Convenience method to apply getter / setter logic specific to how `Two.Group`s trickle down styles to their children. Used in {@link Two.Group.MakeObservable}.
   */
  MakeGetterSetter: function(group, key) {

    var secret = '_' + key;

    Object.defineProperty(group, key, {

      enumerable: true,

      get: function() {
        return this[secret];
      },

      set: function(v) {
        this[secret] = v;
        // Trickle down styles
        for (var i = 0; i < this.children.length; i++) {
          var child = this.children[i];
          child[key] = v;
        }
      }

    });

  }

});

_.extend(Group.prototype, Shape.prototype, {

  // Flags
  // http://en.wikipedia.org/wiki/Flag

  /**
   * @name Two.Group#_flagAdditions
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Group#additions} need updating.
   */
  _flagAdditions: false,

  /**
   * @name Two.Group#_flagSubtractions
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Group#subtractions} need updating.
   */
  _flagSubtractions: false,

  /**
   * @name Two.Group#_flagOrder
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Group#order} need updating.
   */
  _flagOrder: false,

  /**
   * @name Two.Group#_flagOpacity
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Group#opacity} need updating.
   */
  _flagOpacity: true,

  /**
   * @name Two.Group#_flagBeginning
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Group#beginning} need updating.
   */
  _flagBeginning: false,

  /**
   * @name Two.Group#_flagEnding
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Group#ending} need updating.
   */
  _flagEnding: false,

  /**
   * @name Two.Group#_flagLength
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Group#length} need updating.
   */
  _flagLength: false,

  /**
   * @name Two.Group#_flagMask
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Group#mask} need updating.
   */
  _flagMask: false,

  // Underlying Properties

  /**
   * @name Two.Group#fill
   * @property {(CssColor|Two.Gradient|Two.Texture)} - The value of what all child shapes should be filled in with.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value} for more information on CSS Colors.
   */
  _fill: '#fff',

  /**
   * @name Two.Group#stroke
   * @property {(CssColor|Two.Gradient|Two.Texture)} - The value of what all child shapes should be outlined in with.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value} for more information on CSS Colors.
   */
  _stroke: '#000',

  /**
   * @name Two.Group#linewidth
   * @property {Number} - The thickness in pixels of the stroke for all child shapes.
   */
  _linewidth: 1.0,

  /**
   * @name Two.Group#opacity
   * @property {Number} - The opaqueness of all child shapes.
   * @nota-bene Becomes multiplied by the individual child's opacity property.
   */
  _opacity: 1.0,

  /**
   * @name Two.Group#visible
   * @property {Boolean} - Display the path or not.
   * @nota-bene For {@link Two.CanvasRenderer} and {@link Two.WebGLRenderer} when set to false all updating is disabled improving performance dramatically with many objects in the scene.
   */
  _visible: true,

  /**
   * @name Two.Group#cap
   * @property {String}
   * @see {@link https://www.w3.org/TR/SVG11/painting.html#StrokeLinecapProperty}
   */
  _cap: 'round',

  /**
   * @name Two.Group#join
   * @property {String}
   * @see {@link https://www.w3.org/TR/SVG11/painting.html#StrokeLinejoinProperty}
   */
  _join: 'round',

  /**
   * @name Two.Group#miter
   * @property {String}
   * @see {@link https://www.w3.org/TR/SVG11/painting.html#StrokeMiterlimitProperty}
   */
  _miter: 4,

  /**
   * @name Two.Group#closed
   * @property {Boolean} - Determines whether a final line is drawn between the final point in the `vertices` array and the first point of all child shapes.
   */
  _closed: true,

  /**
   * @name Two.Group#curved
   * @property {Boolean} - When the child's path is `automatic = true` this boolean determines whether the lines between the points are curved or not.
   */
  _curved: false,

  /**
   * @name Two.Group#automatic
   * @property {Boolean} - Determines whether or not Two.js should calculate curves, lines, and commands automatically for you or to let the developer manipulate them for themselves.
   */
  _automatic: true,

  /**
   * @name Two.Group#beginning
   * @property {Number} - Number between zero and one to state the beginning of where the path is rendered.
   * @description {@link Two.Group#beginning} is a percentage value that represents at what percentage into all child shapes should the renderer start drawing.
   * @nota-bene This is great for animating in and out stroked paths in conjunction with {@link Two.Group#ending}.
   */
  _beginning: 0,

  /**
   * @name Two.Group#ending
   * @property {Number} - Number between zero and one to state the ending of where the path is rendered.
   * @description {@link Two.Group#ending} is a percentage value that represents at what percentage into all child shapes should the renderer start drawing.
   * @nota-bene This is great for animating in and out stroked paths in conjunction with {@link Two.Group#beginning}.
   */
  _ending: 1.0,

  /**
   * @name Two.Group#length
   * @property {Number} - The sum of distances between all child lengths.
   */
  _length: 0,

  /**
   * @name Two.Group#mask
   * @property {Two.Shape} - The Two.js object to clip from a group's rendering.
   */
  _mask: null,

  constructor: Group,

  /**
   * @name Two.Group#clone
   * @function
   * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
   * @returns {Two.Group}
   * @description Create a new instance of {@link Two.Group} with the same properties of the current group.
   */
  clone: function(parent) {

    // /**
    //  * TODO: Group has a gotcha in that it's at the moment required to be bound to
    //  * an instance of two in order to add elements correctly. This needs to
    //  * be rethought and fixed.
    //  */

    var clone = new Group();
    var children = this.children.map(function(child) {
      return child.clone();
    });

    clone.add(children);

    clone.opacity = this.opacity;

    if (this.mask) {
      clone.mask = this.mask;
    }

    clone.translation.copy(this.translation);
    clone.rotation = this.rotation;
    clone.scale = this.scale;
    clone.className = this.className;

    if (this.matrix.manual) {
      clone.matrix.copy(this.matrix);
    }

    if (parent) {
      parent.add(clone);
    }

    return clone._update();

  },

  /**
   * @name Two.Group#toObject
   * @function
   * @returns {Object}
   * @description Return a JSON compatible plain object that represents the group.
   */
  toObject: function() {

    var result = {
      children: [],
      translation: this.translation.toObject(),
      rotation: this.rotation,
      scale: this.scale instanceof Vector ? this.scale.toObject() : this.scale,
      opacity: this.opacity,
      className: this.className,
      mask: (this.mask ? this.mask.toObject() : null)
    };

    if (this.matrix.manual) {
      result.matrix = this.matrix.toObject();
    }

    _.each(this.children, function(child, i) {
      result.children[i] = child.toObject();
    }, this);

    return result;

  },

  /**
   * @name Two.Group#corner
   * @function
   * @description Orient the children of the group to the upper left-hand corner of that group.
   */
  corner: function() {

    var rect = this.getBoundingClientRect(true);
    var corner = { x: rect.left, y: rect.top };

    this.children.forEach(function(child) {
      child.translation.sub(corner);
    });

    return this;

  },

  /**
   * @name Two.Group#center
   * @function
   * @description Orient the children of the group to the center of that group.
   */
  center: function() {

    var rect = this.getBoundingClientRect(true);

    rect.centroid = {
      x: rect.left + rect.width / 2 - this.translation.x,
      y: rect.top + rect.height / 2 - this.translation.y
    };

    this.children.forEach(function(child) {
      if (child.isShape) {
        child.translation.sub(rect.centroid);
      }
    });

    return this;

  },

  /**
   * @name Two.Group#getById
   * @function
   * @description Recursively search for id. Returns the first element found.
   * @returns {Two.Shape} - Or `null` if nothing is found.
   */
  getById: function (id) {
    var found = null;
    function search(node) {
      if (node.id === id) {
        return node;
      } else if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          found = search(node.children[i]);
          if (found) {
            return found;
          }
        }
      }
      return null;
    }
    return search(this);
  },

  /**
   * @name Two.Group#getByClassName
   * @function
   * @description Recursively search for classes. Returns an array of matching elements.
   * @returns {Two.Shape[]} - Or empty array if nothing is found.
   */
  getByClassName: function(className) {
    var found = [];
    function search(node) {
      if (Array.prototype.indexOf.call(node.classList, className) >= 0) {
        found.push(node);
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          var child = node.children[i];
          search(child);
        }
      }
      return found;
    }
    return search(this);
  },

  /**
   * @name Two.Group#getByType
   * @function
   * @description Recursively search for children of a specific type, e.g. {@link Two.Path}. Pass a reference to this type as the param. Returns an array of matching elements.
   * @returns {Two.Shape[]} - Empty array if nothing is found.
   */
  getByType: function(type) {
    var found = [];
    function search(node) {
      if (node instanceof type) {
        found.push(node);
      }
      if (node.children) {
        for (var i = 0; i < node.children.length; i++) {
          var child = node.children[i];
          search(child);
        }
      }
      return found;
    }
    return search(this);
  },

  /**
   * @name Two.Group#add
   * @function
   * @param {Two.Shape[]} objects - An array of objects to be added. Can be also be supplied as individual arguments.
   * @description Add objects to the group.
   */
  add: function(objects) {

    // Allow to pass multiple objects either as array or as multiple arguments
    // If it's an array also create copy of it in case we're getting passed
    // a childrens array directly.
    if (!(objects instanceof Array)) {
      objects = Array.prototype.slice.call(arguments);
    } else {
      objects = objects.slice();
    }

    // Add the objects
    for (var i = 0; i < objects.length; i++) {
      var child = objects[i];
      if (!(child && child.id)) {
        continue;
      }
      var index = Array.prototype.indexOf.call(this.children, child);
      if (index >= 0) {
        this.children.splice(index, 1);
      }
      this.children.push(child);
    }

    return this;

  },

  /**
   * @name Two.Group#add
   * @function
   * @param {Two.Shape[]} objects - An array of objects to be removed. Can be also removed as individual arguments.
   * @description Remove objects from the group.
   */
  remove: function(objects) {

    var l = arguments.length,
      grandparent = this.parent;

    // Allow to call remove without arguments
    // This will detach the object from its own parent.
    if (l <= 0 && grandparent) {
      grandparent.remove(this);
      return this;
    }

    // Allow to pass multiple objects either as array or as multiple arguments
    // If it's an array also create copy of it in case we're getting passed
    // a childrens array directly.
    if (!(objects instanceof Array)) {
      objects = Array.prototype.slice.call(arguments);
    } else {
      objects = objects.slice();
    }

    // Remove the objects
    for (var i = 0; i < objects.length; i++) {
      if (!objects[i] || !(this.children.ids[objects[i].id])) continue;
      this.children.splice(Array.prototype.indexOf.call(this.children, objects[i]), 1);
    }

    return this;

  },

  /**
   * @name Two.Group#getBoundingClientRect
   * @function
   * @param {Boolean} [shallow=false] - Describes whether to calculate off local matrix or world matrix.
   * @returns {Object} - Returns object with top, left, right, bottom, width, height attributes.
   * @description Return an object with top, left, right, bottom, width, and height parameters of the group.
   */
  getBoundingClientRect: function(shallow) {
    var rect;

    // TODO: Update this to not __always__ update. Just when it needs to.
    this._update(true);

    // Variables need to be defined here, because of nested nature of groups.
    var left = Infinity, right = -Infinity,
        top = Infinity, bottom = -Infinity;

    var regex = /texture|gradient/i;

    for (var i = 0; i < this.children.length; i++) {

      var child = this.children[i];

      if (!child.visible || regex.test(child._renderer.type)) {
        continue;
      }

      rect = child.getBoundingClientRect(shallow);

      if (typeof rect.top !== 'number'   || typeof rect.left !== 'number' ||
          typeof rect.right !== 'number' || typeof rect.bottom !== 'number') {
        continue;
      }

      top = min(rect.top, top);
      left = min(rect.left, left);
      right = max(rect.right, right);
      bottom = max(rect.bottom, bottom);

    }

    return {
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      width: right - left,
      height: bottom - top
    };

  },

  /**
   * @name Two.Group#noFill
   * @function
   * @description Apply `noFill` method to all child shapes.
   */
  noFill: function() {
    this.children.forEach(function(child) {
      child.noFill();
    });
    return this;
  },

  /**
   * @name Two.Group#noStroke
   * @function
   * @description Apply `noStroke` method to all child shapes.
   */
  noStroke: function() {
    this.children.forEach(function(child) {
      child.noStroke();
    });
    return this;
  },

  /**
   * @name Two.Group#subdivide
   * @function
   * @description Apply `subdivide` method to all child shapes.
   */
  subdivide: function() {
    var args = arguments;
    this.children.forEach(function(child) {
      child.subdivide.apply(child, args);
    });
    return this;
  },

  /**
   * @name Two.Group#_update
   * @function
   * @private
   * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
   * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
   * @nota-bene Try not to call this method more than once a frame.
   */
  _update: function() {

    if (this._flagBeginning || this._flagEnding) {

      var beginning = Math.min(this._beginning, this._ending);
      var ending = Math.max(this._beginning, this._ending);
      var length = this.length;
      var sum = 0;

      var bd = beginning * length;
      var ed = ending * length;

      for (var i = 0; i < this.children.length; i++) {

        var child = this.children[i];
        var l = child.length;

        if (bd > sum + l) {
          child.beginning = 1;
          child.ending = 1;
        } else if (ed < sum) {
          child.beginning = 0;
          child.ending = 0;
        } else if (bd > sum && bd < sum + l) {
          child.beginning = (bd - sum) / l;
          child.ending = 1;
        } else if (ed > sum && ed < sum + l) {
          child.beginning = 0;
          child.ending = (ed - sum) / l;
        } else {
          child.beginning = 0;
          child.ending = 1;
        }

        sum += l;

      }

    }

    return Shape.prototype._update.apply(this, arguments);

  },

  /**
   * @name Two.Group#flagReset
   * @function
   * @private
   * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
   */
  flagReset: function() {

    if (this._flagAdditions) {
      this.additions.length = 0;
      this._flagAdditions = false;
    }

    if (this._flagSubtractions) {
      this.subtractions.length = 0;
      this._flagSubtractions = false;
    }

    this._flagOrder = this._flagMask = this._flagOpacity =
      this._flagBeginning = this._flagEnding = false;

    Shape.prototype.flagReset.call(this);

    return this;

  }

});

Group.MakeObservable(Group.prototype);

// /**
//  * Helper function used to sync parent-child relationship within the
//  * `Two.Group.children` object.
//  *
//  * Set the parent of the passed object to another object
//  * and updates parent-child relationships
//  * Calling with one arguments will simply remove the parenting
//  */
function replaceParent(child, newParent) {

  var parent = child.parent;
  var index;

  if (parent === newParent) {
    add();
    return;
  }

  if (parent && parent.children.ids[child.id]) {

    index = Array.prototype.indexOf.call(parent.children, child);
    parent.children.splice(index, 1);

    splice();

  }

  if (newParent) {
    add();
    return;
  }

  splice();

  if (parent._flagAdditions && parent.additions.length === 0) {
    parent._flagAdditions = false;
  }
  if (parent._flagSubtractions && parent.subtractions.length === 0) {
    parent._flagSubtractions = false;
  }

  delete child.parent;

  function add() {

    if (newParent.subtractions.length > 0) {
      index = Array.prototype.indexOf.call(newParent.subtractions, child);

      if (index >= 0) {
        newParent.subtractions.splice(index, 1);
      }
    }

    if (newParent.additions.length > 0) {
      index = Array.prototype.indexOf.call(newParent.additions, child);

      if (index >= 0) {
        newParent.additions.splice(index, 1);
      }
    }

    child.parent = newParent;
    newParent.additions.push(child);
    newParent._flagAdditions = true;

  }

  function splice() {

    index = Array.prototype.indexOf.call(parent.additions, child);

    if (index >= 0) {
      parent.additions.splice(index, 1);
    }

    index = Array.prototype.indexOf.call(parent.subtractions, child);

    if (index < 0) {
      parent.subtractions.push(child);
      parent._flagSubtractions = true;
    }

  }

}

// Constants
var emptyArray = [];
var TWO_PI = Math.PI * 2,
  max$1 = Math.max,
  min$1 = Math.min,
  abs = Math.abs,
  sin$1 = Math.sin,
  cos$1 = Math.cos,
  acos = Math.acos,
  sqrt = Math.sqrt;

// Returns true if this is a non-transforming matrix
var isDefaultMatrix = function (m) {
  return (m[0] == 1 && m[3] == 0 && m[1] == 0 && m[4] == 1 && m[2] == 0 && m[5] == 0);
};

var canvas = {

  isHidden: /(undefined|none|transparent)/i,

  alignments: {
    left: 'start',
    middle: 'center',
    right: 'end'
  },

  shim: function(elem, name) {
    elem.tagName = elem.nodeName = name || 'canvas';
    elem.nodeType = 1;
    elem.getAttribute = function(prop) {
      return this[prop];
    };
    elem.setAttribute = function(prop, val) {
      this[prop] = val;
      return this;
    };
    return elem;
  },

  group: {

    renderChild: function(child) {
      canvas[child._renderer.type].render.call(child, this.ctx, true, this.clip);
    },

    render: function(ctx) {

      // TODO: Add a check here to only invoke _update if need be.
      this._update();

      var matrix = this._matrix.elements;
      var parent = this.parent;
      this._renderer.opacity = this._opacity
        * (parent && parent._renderer ? parent._renderer.opacity : 1);

      var mask = this._mask;
      // var clip = this._clip;

      var defaultMatrix = isDefaultMatrix(matrix);
      var shouldIsolate = !defaultMatrix || !!mask;

      if (!this._renderer.context) {
        this._renderer.context = {};
      }

      this._renderer.context.ctx = ctx;
      // this._renderer.context.clip = clip;

      if (shouldIsolate) {
        ctx.save();
        if (!defaultMatrix) {
          ctx.transform(  matrix[0], matrix[3], matrix[1],
            matrix[4], matrix[2], matrix[5]);
        }
      }

      if (mask) {
        canvas[mask._renderer.type].render.call(mask, ctx, true);
      }

      if (this.opacity > 0 && this.scale !== 0) {
        for (var i = 0; i < this.children.length; i++) {
          var child = this.children[i];
          canvas[child._renderer.type].render.call(child, ctx);
        }
      }

      if (shouldIsolate) {
        ctx.restore();
      }

      // Commented two-way functionality of clips / masks with groups and
      // polygons. Uncomment when this bug is fixed:
      // https://code.google.com/p/chromium/issues/detail?id=370951

      // if (clip) {
      //   ctx.clip();
      // }

      return this.flagReset();

    }

  },

  path: {

    render: function(ctx, forced, parentClipped) {

      var matrix, stroke, linewidth, fill, opacity, visible, cap, join, miter,
          closed, commands, length, last, next, prev, a, b, c, d, ux, uy, vx, vy,
          ar, bl, br, cl, x, y, clip, defaultMatrix, isOffset, dashes;

      // TODO: Add a check here to only invoke _update if need be.
      this._update();

      matrix = this._matrix.elements;
      stroke = this._stroke;
      linewidth = this._linewidth;
      fill = this._fill;
      opacity = this._opacity * this.parent._renderer.opacity;
      visible = this._visible;
      cap = this._cap;
      join = this._join;
      miter = this._miter;
      closed = this._closed;
      commands = this._renderer.vertices; // Commands
      length = commands.length;
      last = length - 1;
      defaultMatrix = isDefaultMatrix(matrix);
      dashes = this.dashes;

      // mask = this._mask;
      clip = this._clip;

      if (!forced && (!visible || clip)) {
        return this;
      }

      // Transform
      if (!defaultMatrix) {
        ctx.save();
        ctx.transform(matrix[0], matrix[3], matrix[1], matrix[4], matrix[2], matrix[5]);
      }

      // Commented two-way functionality of clips / masks with groups and
      // polygons. Uncomment when this bug is fixed:
      // https://code.google.com/p/chromium/issues/detail?id=370951

      // if (mask) {
      //   canvas[mask._renderer.type].render.call(mask, ctx, true);
      // }

      // Styles
      if (fill) {
        if (typeof fill === 'string') {
          ctx.fillStyle = fill;
        } else {
          canvas[fill._renderer.type].render.call(fill, ctx);
          ctx.fillStyle = fill._renderer.effect;
        }
      }
      if (stroke) {
        if (typeof stroke === 'string') {
          ctx.strokeStyle = stroke;
        } else {
          canvas[stroke._renderer.type].render.call(stroke, ctx);
          ctx.strokeStyle = stroke._renderer.effect;
        }
        if (linewidth) {
          ctx.lineWidth = linewidth;
        }
        if (miter) {
          ctx.miterLimit = miter;
        }
        if (join) {
          ctx.lineJoin = join;
        }
        if (!closed && cap) {
          ctx.lineCap = cap;
        }
      }
      if (typeof opacity === 'number') {
        ctx.globalAlpha = opacity;
      }

      if (dashes && dashes.length > 0) {
        ctx.lineDashOffset = dashes.offset || 0;
        ctx.setLineDash(dashes);
      }

      ctx.beginPath();

      for (var i = 0; i < commands.length; i++) {

        b = commands[i];

        x = b.x;
        y = b.y;

        switch (b.command) {

          case Commands.close:
            ctx.closePath();
            break;

          case Commands.arc:

            var rx = b.rx;
            var ry = b.ry;
            var xAxisRotation = b.xAxisRotation;
            var largeArcFlag = b.largeArcFlag;
            var sweepFlag = b.sweepFlag;

            prev = closed ? mod(i - 1, length) : max$1(i - 1, 0);
            a = commands[prev];

            var ax = a.x;
            var ay = a.y;

            canvas.renderSvgArcCommand(ctx, ax, ay, rx, ry, largeArcFlag, sweepFlag, xAxisRotation, x, y);
            break;

          case Commands.curve:

            prev = closed ? mod(i - 1, length) : Math.max(i - 1, 0);
            next = closed ? mod(i + 1, length) : Math.min(i + 1, last);

            a = commands[prev];
            c = commands[next];
            ar = (a.controls && a.controls.right) || Vector.zero;
            bl = (b.controls && b.controls.left) || Vector.zero;

            if (a._relative) {
              vx = (ar.x + a.x);
              vy = (ar.y + a.y);
            } else {
              vx = ar.x;
              vy = ar.y;
            }

            if (b._relative) {
              ux = (bl.x + b.x);
              uy = (bl.y + b.y);
            } else {
              ux = bl.x;
              uy = bl.y;
            }

            ctx.bezierCurveTo(vx, vy, ux, uy, x, y);

            if (i >= last && closed) {

              c = d;

              br = (b.controls && b.controls.right) || Vector.zero;
              cl = (c.controls && c.controls.left) || Vector.zero;

              if (b._relative) {
                vx = (br.x + b.x);
                vy = (br.y + b.y);
              } else {
                vx = br.x;
                vy = br.y;
              }

              if (c._relative) {
                ux = (cl.x + c.x);
                uy = (cl.y + c.y);
              } else {
                ux = cl.x;
                uy = cl.y;
              }

              x = c.x;
              y = c.y;

              ctx.bezierCurveTo(vx, vy, ux, uy, x, y);

            }

            break;

          case Commands.line:
            ctx.lineTo(x, y);
            break;

          case Commands.move:
            d = b;
            ctx.moveTo(x, y);
            break;

        }
      }

      // Loose ends

      if (closed) {
        ctx.closePath();
      }

      if (!clip && !parentClipped) {
        if (!canvas.isHidden.test(fill)) {
          isOffset = fill._renderer && fill._renderer.offset;
          if (isOffset) {
            ctx.save();
            ctx.translate(
              - fill._renderer.offset.x, - fill._renderer.offset.y);
            ctx.scale(fill._renderer.scale.x, fill._renderer.scale.y);
          }
          ctx.fill();
          if (isOffset) {
            ctx.restore();
          }
        }
        if (!canvas.isHidden.test(stroke)) {
          isOffset = stroke._renderer && stroke._renderer.offset;
          if (isOffset) {
            ctx.save();
            ctx.translate(
              - stroke._renderer.offset.x, - stroke._renderer.offset.y);
            ctx.scale(stroke._renderer.scale.x, stroke._renderer.scale.y);
            ctx.lineWidth = linewidth / stroke._renderer.scale.x;
          }
          ctx.stroke();
          if (isOffset) {
            ctx.restore();
          }
        }
      }

      if (!defaultMatrix) {
        ctx.restore();
      }

      if (clip && !parentClipped) {
        ctx.clip();
      }

      if (dashes && dashes.length > 0) {
        ctx.setLineDash(emptyArray);
      }

      return this.flagReset();

    }

  },

  text: {

    render: function(ctx, forced, parentClipped) {

      // TODO: Add a check here to only invoke _update if need be.
      this._update();

      var matrix = this._matrix.elements;
      var stroke = this._stroke;
      var linewidth = this._linewidth;
      var fill = this._fill;
      var decoration = this._decoration;
      var opacity = this._opacity * this.parent._renderer.opacity;
      var visible = this._visible;
      var defaultMatrix = isDefaultMatrix(matrix);
      var isOffset = fill._renderer && fill._renderer.offset
        && stroke._renderer && stroke._renderer.offset;
      var dashes = this.dashes;
      var alignment = canvas.alignments[this._alignment] || this._alignment;
      var baseline = this._baseline;

      var a, b, c, d, e, sx, sy, x1, y1, x2, y2;

      // mask = this._mask;
      var clip = this._clip;

      if (!forced && (!visible || clip)) {
        return this;
      }

      // Transform
      if (!defaultMatrix) {
        ctx.save();
        ctx.transform(matrix[0], matrix[3], matrix[1], matrix[4], matrix[2], matrix[5]);
      }

      // Commented two-way functionality of clips / masks with groups and
      // polygons. Uncomment when this bug is fixed:
      // https://code.google.com/p/chromium/issues/detail?id=370951

      // if (mask) {
      //   canvas[mask._renderer.type].render.call(mask, ctx, true);
      // }

      if (!isOffset) {
        ctx.font = [this._style, this._weight, this._size + 'px/' +
          this._leading + 'px', this._family].join(' ');
      }

      ctx.textAlign = alignment;
      ctx.textBaseline = baseline;

      // Styles
      if (fill) {
        if (typeof fill === 'string') {
          ctx.fillStyle = fill;
        } else {
          canvas[fill._renderer.type].render.call(fill, ctx);
          ctx.fillStyle = fill._renderer.effect;
        }
      }
      if (stroke) {
        if (typeof stroke === 'string') {
          ctx.strokeStyle = stroke;
        } else {
          canvas[stroke._renderer.type].render.call(stroke, ctx);
          ctx.strokeStyle = stroke._renderer.effect;
        }
        if (linewidth) {
          ctx.lineWidth = linewidth;
        }
      }
      if (typeof opacity === 'number') {
        ctx.globalAlpha = opacity;
      }
      if (dashes && dashes.length > 0) {
        ctx.lineDashOffset = dashes.offset || 0;
        ctx.setLineDash(dashes);
      }

      if (!clip && !parentClipped) {

        if (!canvas.isHidden.test(fill)) {

          if (fill._renderer && fill._renderer.offset) {

            sx = fill._renderer.scale.x;
            sy = fill._renderer.scale.y;

            ctx.save();
            ctx.translate( - fill._renderer.offset.x,
              - fill._renderer.offset.y);
            ctx.scale(sx, sy);

            a = this._size / fill._renderer.scale.y;
            b = this._leading / fill._renderer.scale.y;
            ctx.font = [this._style, this._weight, a + 'px/',
              b + 'px', this._family].join(' ');

            c = fill._renderer.offset.x / fill._renderer.scale.x;
            d = fill._renderer.offset.y / fill._renderer.scale.y;

            ctx.fillText(this.value, c, d);
            ctx.restore();

          } else {
            ctx.fillText(this.value, 0, 0);
          }

        }

        if (!canvas.isHidden.test(stroke)) {

          if (stroke._renderer && stroke._renderer.offset) {

            sx = stroke._renderer.scale.x;
            sy = stroke._renderer.scale.y;

            ctx.save();
            ctx.translate(- stroke._renderer.offset.x,
              - stroke._renderer.offset.y);
            ctx.scale(sx, sy);

            a = this._size / stroke._renderer.scale.y;
            b = this._leading / stroke._renderer.scale.y;
            ctx.font = [this._style, this._weight, a + 'px/',
              b + 'px', this._family].join(' ');

            c = stroke._renderer.offset.x / stroke._renderer.scale.x;
            d = stroke._renderer.offset.y / stroke._renderer.scale.y;
            e = linewidth / stroke._renderer.scale.x;

            ctx.lineWidth = e;
            ctx.strokeText(this.value, c, d);
            ctx.restore();

          } else {
            ctx.strokeText(this.value, 0, 0);
          }
        }
      }

      // Handle text-decoration
      if (/(underline|strikethrough)/i.test(decoration)) {

        var metrics = ctx.measureText(this.value);
        var scalar = 1;

        switch (decoration) {
          case 'underline':
            y1 = metrics.actualBoundingBoxAscent;
            y2 = metrics.actualBoundingBoxAscent;
            break;
          case 'strikethrough':
            y1 = 0;
            y2 = 0;
            scalar = 0.5;
            break;
        }

        switch (baseline) {
          case 'top':
            y1 += this._size * scalar;
            y2 += this._size * scalar;
            break;
          case 'baseline':
          case 'bottom':
            y1 -= this._size * scalar;
            y2 -= this._size * scalar;
            break;
        }

        switch (alignment) {
          case 'left':
          case 'start':
            x1 = 0;
            x2 = metrics.width;
            break;
          case 'right':
          case 'end':
            x1 = - metrics.width;
            x2 = 0;
            break;
          default:
            x1 = - metrics.width / 2;
            x2 = metrics.width / 2;
        }

        ctx.lineWidth = Math.max(Math.floor(this._size / 15), 1);
        ctx.strokeStyle = ctx.fillStyle;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

      }

      if (!defaultMatrix) {
        ctx.restore();
      }

      // TODO: Test for text
      if (clip && !parentClipped) {
        ctx.clip();
      }

      if (dashes && dashes.length > 0) {
        ctx.setLineDash(emptyArray);
      }

      return this.flagReset();

    }

  },

  'linear-gradient': {

    render: function(ctx) {

      this._update();

      if (!this._renderer.effect || this._flagEndPoints || this._flagStops) {

        this._renderer.effect = ctx.createLinearGradient(
          this.left._x, this.left._y,
          this.right._x, this.right._y
        );

        for (var i = 0; i < this.stops.length; i++) {
          var stop = this.stops[i];
          this._renderer.effect.addColorStop(stop._offset, stop._color);
        }

      }

      return this.flagReset();

    }

  },

  'radial-gradient': {

    render: function(ctx) {

      this._update();

      if (!this._renderer.effect || this._flagCenter || this._flagFocal
          || this._flagRadius || this._flagStops) {

        this._renderer.effect = ctx.createRadialGradient(
          this.center._x, this.center._y, 0,
          this.focal._x, this.focal._y, this._radius
        );

        for (var i = 0; i < this.stops.length; i++) {
          var stop = this.stops[i];
          this._renderer.effect.addColorStop(stop._offset, stop._color);
        }

      }

      return this.flagReset();

    }

  },

  texture: {

    render: function(ctx) {

      this._update();

      var image = this.image;

      if (!this._renderer.effect || ((this._flagLoaded || this._flagImage || this._flagVideo || this._flagRepeat) && this.loaded)) {
        this._renderer.effect = ctx.createPattern(this.image, this._repeat);
      }

      if (this._flagOffset || this._flagLoaded || this._flagScale) {

        if (!(this._renderer.offset instanceof Vector)) {
          this._renderer.offset = new Vector();
        }

        this._renderer.offset.x = - this._offset.x;
        this._renderer.offset.y = - this._offset.y;

        if (image) {

          this._renderer.offset.x += image.width / 2;
          this._renderer.offset.y += image.height / 2;

          if (this._scale instanceof Vector) {
            this._renderer.offset.x *= this._scale.x;
            this._renderer.offset.y *= this._scale.y;
          } else {
            this._renderer.offset.x *= this._scale;
            this._renderer.offset.y *= this._scale;
          }
        }

      }

      if (this._flagScale || this._flagLoaded) {

        if (!(this._renderer.scale instanceof Vector)) {
          this._renderer.scale = new Vector();
        }

        if (this._scale instanceof Vector) {
          this._renderer.scale.copy(this._scale);
        } else {
          this._renderer.scale.set(this._scale, this._scale);
        }

      }

      return this.flagReset();

    }

  },

  renderSvgArcCommand: function(ctx, ax, ay, rx, ry, largeArcFlag, sweepFlag, xAxisRotation, x, y) {

    xAxisRotation = xAxisRotation * Math.PI / 180;

    // Ensure radii are positive
    rx = abs(rx);
    ry = abs(ry);

    // Compute (x1′, y1′)
    var dx2 = (ax - x) / 2.0;
    var dy2 = (ay - y) / 2.0;
    var x1p = cos$1(xAxisRotation) * dx2 + sin$1(xAxisRotation) * dy2;
    var y1p = - sin$1(xAxisRotation) * dx2 + cos$1(xAxisRotation) * dy2;

    // Compute (cx′, cy′)
    var rxs = rx * rx;
    var rys = ry * ry;
    var x1ps = x1p * x1p;
    var y1ps = y1p * y1p;

    // Ensure radii are large enough
    var cr = x1ps / rxs + y1ps / rys;

    if (cr > 1) {

      // scale up rx,ry equally so cr == 1
      var s = sqrt(cr);
      rx = s * rx;
      ry = s * ry;
      rxs = rx * rx;
      rys = ry * ry;

    }

    var dq = (rxs * y1ps + rys * x1ps);
    var pq = (rxs * rys - dq) / dq;
    var q = sqrt(max$1(0, pq));
    if (largeArcFlag === sweepFlag) q = - q;
    var cxp = q * rx * y1p / ry;
    var cyp = - q * ry * x1p / rx;

    // Step 3: Compute (cx, cy) from (cx′, cy′)
    var cx = cos$1(xAxisRotation) * cxp
      - sin$1(xAxisRotation) * cyp + (ax + x) / 2;
    var cy = sin$1(xAxisRotation) * cxp
      + cos$1(xAxisRotation) * cyp + (ay + y) / 2;

    // Step 4: Compute θ1 and Δθ
    var startAngle = svgAngle(1, 0, (x1p - cxp) / rx, (y1p - cyp) / ry);
    var delta = svgAngle((x1p - cxp) / rx, (y1p - cyp) / ry,
      (- x1p - cxp) / rx, (- y1p - cyp) / ry) % TWO_PI;

    var endAngle = startAngle + delta;

    var clockwise = sweepFlag === 0;

    renderArcEstimate(ctx, cx, cy, rx, ry, startAngle, endAngle,
      clockwise, xAxisRotation);

  }

};

/**
 * @name Two.CanvasRenderer
 * @class
 * @extends Two.Events
 * @param {Object} [parameters] - This object is inherited when constructing a new instance of {@link Two}.
 * @param {Element} [parameters.domElement] - The `<canvas />` to draw to. If none given a new one will be constructed.
 * @param {Boolean} [parameters.overdraw] - Determines whether the canvas should clear the background or not. Defaults to `true`.
 * @param {Boolean} [parameters.smoothing=true] - Determines whether the canvas should antialias drawing. Set it to `false` when working with pixel art. `false` can lead to better performance, since it would use a cheaper interpolation algorithm.
 * @description This class is used by {@link Two} when constructing with `type` of `Two.Types.canvas`. It takes Two.js' scenegraph and renders it to a `<canvas />`.
 */
var Renderer = function(params) {

  // It might not make a big difference on GPU backed canvases.
  var smoothing = (params.smoothing !== false);

  /**
   * @name Two.CanvasRenderer#domElement
   * @property {Element} - The `<canvas />` associated with the Two.js scene.
   */
  this.domElement = params.domElement || document.createElement('canvas');

  /**
   * @name Two.CanvasRenderer#ctx
   * @property {Canvas2DContext} - Associated two dimensional context to render on the `<canvas />`.
   */
  this.ctx = this.domElement.getContext('2d');

  /**
   * @name Two.CanvasRenderer#overdraw
   * @property {Boolean} - Determines whether the canvas clears the background each draw call.
   * @default true
   */
  this.overdraw = params.overdraw || false;

  if (typeof this.ctx.imageSmoothingEnabled !== 'undefined') {
    this.ctx.imageSmoothingEnabled = smoothing;
  }

  /**
   * @name Two.CanvasRenderer#scene
   * @property {Two.Group} - The root group of the scenegraph.
   */
  this.scene = new Group();
  this.scene.parent = this;
};


_.extend(Renderer, {

  /**
   * @name Two.CanvasRenderer.Utils
   * @property {Object} - A massive object filled with utility functions and properties to render Two.js objects to a `<canvas />`.
   */
  Utils: canvas

});

_.extend(Renderer.prototype, Events, {

  constructor: Renderer,

  /**
   * @name Two.CanvasRenderer#setSize
   * @function
   * @fires resize
   * @param {Number} width - The new width of the renderer.
   * @param {Number} height - The new height of the renderer.
   * @param {Number} [ratio] - The new pixel ratio (pixel density) of the renderer. Defaults to calculate the pixel density of the user's screen.
   * @description Change the size of the renderer.
   */
  setSize: function(width, height, ratio) {

    this.width = width;
    this.height = height;

    this.ratio = typeof ratio === 'undefined' ? getRatio(this.ctx) : ratio;

    this.domElement.width = width * this.ratio;
    this.domElement.height = height * this.ratio;

    if (this.domElement.style) {
      _.extend(this.domElement.style, {
        width: width + 'px',
        height: height + 'px'
      });
    }

    return this.trigger(Events.Types.resize, width, height, ratio);

  },

  /**
   * @name Two.CanvasRenderer#render
   * @function
   * @description Render the current scene to the `<canvas />`.
   */
  render: function() {

    var isOne = this.ratio === 1;

    if (!isOne) {
      this.ctx.save();
      this.ctx.scale(this.ratio, this.ratio);
    }

    if (!this.overdraw) {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }

    canvas.group.render.call(this.scene, this.ctx);

    if (!isOne) {
      this.ctx.restore();
    }

    return this;

  }

});

function renderArcEstimate(ctx, ox, oy, rx, ry, startAngle, endAngle, clockwise, xAxisRotation) {

  var epsilon = Curve.Tolerance.epsilon;
  var deltaAngle = endAngle - startAngle;
  var samePoints = Math.abs(deltaAngle) < epsilon;

  // ensures that deltaAngle is 0 .. 2 PI
  deltaAngle = mod(deltaAngle, TWO_PI);

  if (deltaAngle < epsilon) {

    if (samePoints) {

      deltaAngle = 0;

    } else {

      deltaAngle = TWO_PI;

    }

  }

  if (clockwise === true && ! samePoints) {

    if (deltaAngle === TWO_PI) {

      deltaAngle = - TWO_PI;

    } else {

      deltaAngle = deltaAngle - TWO_PI;

    }

  }

  for (var i = 0; i < Constants.Resolution; i++) {

    var t = i / (Constants.Resolution - 1);

    var angle = startAngle + t * deltaAngle;
    var x = ox + rx * Math.cos(angle);
    var y = oy + ry * Math.sin(angle);

    if (xAxisRotation !== 0) {

      var cos = Math.cos(xAxisRotation);
      var sin = Math.sin(xAxisRotation);

      var tx = x - ox;
      var ty = y - oy;

      // Rotate the point about the center of the ellipse.
      x = tx * cos - ty * sin + ox;
      y = tx * sin + ty * cos + oy;

    }

    ctx.lineTo(x, y);

  }

}

function svgAngle(ux, uy, vx, vy) {

  var dot = ux * vx + uy * vy;
  var len = sqrt(ux * ux + uy * uy) *  sqrt(vx * vx + vy * vy);
  // floating point precision, slightly over values appear
  var ang = acos(max$1(-1, min$1(1, dot / len)));
  if ((ux * vy - uy * vx) < 0) {
    ang = - ang;
  }

  return ang;

}

var CanvasShim = {

  Image: null,

  isHeadless: false,

  /**
   * @name Utils.shim
   * @function
   * @param {canvas} canvas - The instanced `Canvas` object provided by `node-canvas`.
   * @param {Image} [Image] - The prototypical `Image` object provided by `node-canvas`. This is only necessary to pass if you're going to load bitmap imagery.
   * @returns {canvas} Returns the instanced canvas object you passed from with additional attributes needed for Two.js.
   * @description Convenience method for defining all the dependencies from the npm package `node-canvas`. See [node-canvas](https://github.com/Automattic/node-canvas) for additional information on setting up HTML5 `<canvas />` drawing in a node.js environment.
   */
  shim: function(canvas, Image) {
    Renderer.Utils.shim(canvas);
    if (typeof Image !== 'undefined') {
      CanvasShim.Image = Image;
    }
    CanvasShim.isHeadless = true;
    return canvas;
  }

};

var dom = {

  temp: (root$1.document ? root$1.document.createElement('div') : {}),

  hasEventListeners: typeof root$1.addEventListener === 'function',

  bind: function(elem, event, func, bool) {
    if (this.hasEventListeners) {
      elem.addEventListener(event, func, !!bool);
    } else {
      elem.attachEvent('on' + event, func);
    }
    return dom;
  },

  unbind: function(elem, event, func, bool) {
    if (dom.hasEventListeners) {
      elem.removeEventListeners(event, func, !!bool);
    } else {
      elem.detachEvent('on' + event, func);
    }
    return dom;
  },

  getRequestAnimationFrame: function() {

    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    var request = root$1.requestAnimationFrame, cancel;

    if(!request) {
      for (var i = 0; i < vendors.length; i++) {
        request = root$1[vendors[i] + 'RequestAnimationFrame'] || request;
        cancel = root$1[vendors[i] + 'CancelAnimationFrame']
          || root$1[vendors[i] + 'CancelRequestAnimationFrame'] || cancel;
      }

      request = request || function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = root$1.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };
    }

    return request;

  }

};

/**
 * @name Utils.Error
 * @class
 * @description Custom error throwing for Two.js specific identification.
 */
var TwoError = function(message) {
  this.name = 'Two.js';
  this.message = message;
};


TwoError.prototype = new Error();
TwoError.prototype.constructor = TwoError;

/**
 * @name Utils.defineGetterSetter
 * @function
 * @this Two#
 * @param {String} property - The property to add an enumerable getter / setter to.
 * @description Convenience function to setup the flag based getter / setter that most properties are defined as in Two.js.
 */
var defineGetterSetter = function(property) {

  var object = this;
  var secret = '_' + property;
  var flag = '_flag' + property.charAt(0).toUpperCase() + property.slice(1);

  Object.defineProperty(object, property, {
    enumerable: true,
    get: function() {
      return this[secret];
    },
    set: function(v) {
      this[secret] = v;
      this[flag] = true;
    }
  });

};

/**
 * @name Two.Registry
 * @class
 * @description An arbitrary class to manage a directory of things. Mainly used for keeping tabs of textures in Two.js.
 */
var Registry = function() {

  this.map = {};

};

_.extend(Registry.prototype, {

  constructor: Registry,

  /**
   * @name Two.Registry#add
   * @function
   * @param {String} id - A unique identifier.
   * @param value - Any type of variable to be registered to the directory.
   * @description Adds any value to the directory. Assigned by the `id`.
   */
  add: function(id, obj) {
    this.map[id] = obj;
    return this;
  },

  /**
   * @name Two.Registry#remove
   * @function
   * @param {String} id - A unique identifier.
   * @description Remove any value from the directory by its `id`.
   */
  remove: function(id) {
    delete this.map[id];
    return this;
  },

  /**
   * @name Two.Registry#get
   * @function
   * @param {String} id - A unique identifier.
   * @returns The associated value. If unavailable then `undefined` is returned.
   * @description Get a registered value by its `id`.
   */
  get: function(id) {
    return this.map[id];
  },

  /**
   * @name Two.Registry#contains
   * @function
   * @param {String} id - A unique identifier.
   * @returns {Boolean}
   * @description Convenience method to see if a value is registered to an `id` already.
   */
  contains: function(id) {
    return id in this.map;
  }

});

/**
 * @name Two.Stop
 * @class
 * @param {Number} [offset] - The offset percentage of the stop represented as a zero-to-one value. Default value flip flops from zero-to-one as new stops are created.
 * @param {CssColor} [color] - The color of the stop. Default value flip flops from white to black as new stops are created.
 * @param {Number} [opacity] - The opacity value. Default value is 1, cannot be lower than 0.
 * @nota-bene Used specifically in conjunction with {@link Two.Gradient}s to control color graduation.
 */
var Stop = function(offset, color, opacity) {

  /**
   * @name Two.Stop#_renderer
   * @property {Object}
   * @private
   * @description A private object to store relevant renderer specific variables.
   * @nota-bene With the {@link Two.SvgRenderer} you can access the underlying SVG element created via `stop._renderer.elem`.
   */
  this._renderer = {};
  this._renderer.type = 'stop';

  /**
   * @name Two.Stop#offset
   * @property {Number} - The offset percentage of the stop represented as a zero-to-one value.
   */
  this.offset = typeof offset === 'number' ? offset
    : Stop.Index <= 0 ? 0 : 1;

  /**
   * @name Two.Stop#opacity
   * @property {Number} - The alpha percentage of the stop represented as a zero-to-one value.
   */
  this.opacity = typeof opacity === 'number' ? opacity : 1;

  /**
   * @name Two.Stop#color
   * @property {CssColor} - The color of the stop.
   */
  this.color = (typeof color === 'string') ? color
    : Stop.Index <= 0 ? '#fff' : '#000';

  Stop.Index = (Stop.Index + 1) % 2;

};

_.extend(Stop, {

  /**
   * @name Two.Stop.Index
   * @property {Number} - The current index being referenced for calculating a stop's default offset value.
   */
  Index: 0,

  /**
   * @name Two.Stop.Properties
   * @property {String[]} - A list of properties that are on every {@link Two.Stop}.
   */
  Properties: [
    'offset',
    'opacity',
    'color'
  ],

  /**
   * @name Two.Stop.MakeObservable
   * @function
   * @param {Object} object - The object to make observable.
   * @description Convenience function to apply observable qualities of a {@link Two.Stop} to any object. Handy if you'd like to extend the {@link Two.Stop} class on a custom class.
   */
  MakeObservable: function(object) {

    _.each(Stop.Properties, function(property) {

      var object = this;
      var secret = '_' + property;
      var flag = '_flag' + property.charAt(0).toUpperCase() + property.slice(1);

      Object.defineProperty(object, property, {
        enumerable: true,
        get: function() {
          return this[secret];
        },
        set: function(v) {
          this[secret] = v;
          this[flag] = true;
          if (this.parent) {
            this.parent._flagStops = true;
          }
        }
      });

    }, object);

  }

});

_.extend(Stop.prototype, Events, {

  constructor: Stop,

  /**
   * @name Two.Stop#clone
   * @function
   * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
   * @returns {Two.Stop}
   * @description Create a new instance of {@link Two.Stop} with the same properties of the current path.
   */
  clone: function() {

    var clone = new Stop();

    _.each(Stop.Properties, function(property) {
      clone[property] = this[property];
    }, this);

    return clone;

  },

  /**
   * @name Two.Stop#toObject
   * @function
   * @returns {Object}
   * @description Return a JSON compatible plain object that represents the path.
   */
  toObject: function() {

    var result = {};

    _.each(Stop.Properties, function(k) {
      result[k] = this[k];
    }, this);

    return result;

  },

  /**
   * @name Two.Stop#flagReset
   * @function
   * @private
   * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
   */
  flagReset: function() {

    this._flagOffset = this._flagColor = this._flagOpacity = false;

    return this;

  }

});

Stop.MakeObservable(Stop.prototype);
Stop.prototype.constructor = Stop;

/**
 * @name Two.Gradient
 * @class
 * @param {Two.Stop[]} [stops] - A list of {@link Two.Stop}s that contain the gradient fill pattern for the gradient.
 * @description This is the base class for constructing different types of gradients with Two.js. The two common gradients are {@link Two.LinearGradient} and {@link Two.RadialGradient}.
 */
var Gradient = function(stops) {

  /**
   * @name Two.Gradient#_renderer
   * @property {Object}
   * @private
   * @description A private object to store relevant renderer specific variables.
   * @nota-bene With the {@link Two.SvgRenderer} you can access the underlying SVG element created via `gradient._renderer.elem`.
   */
  this._renderer = {};
  this._renderer.type = 'gradient';

  /**
   * @name Two.Gradient#id
   * @property {String} - Session specific unique identifier.
   * @nota-bene In the {@link Two.SvgRenderer} change this to change the underlying SVG element's id too.
   */
  this.id = Constants.Identifier + Constants.uniqueId();
  this.classList = [];

  this._renderer.flagStops = Gradient.FlagStops.bind(this);
  this._renderer.bindStops = Gradient.BindStops.bind(this);
  this._renderer.unbindStops = Gradient.UnbindStops.bind(this);

  /**
   * @name Two.Gradient#spread
   * @property {String} - Indicates what happens if the gradient starts or ends inside the bounds of the target rectangle. Possible values are `'pad'`, `'reflect'`, and `'repeat'`.
   * @see {@link https://www.w3.org/TR/SVG11/pservers.html#LinearGradientElementSpreadMethodAttribute} for more information
   */
  this.spread = 'pad';

  /**
   * @name Two.Gradient#stops
   * @property {Two.Stop[]} - An ordered list of {@link Two.Stop}s for rendering the gradient.
   */
  this.stops = stops;

};

_.extend(Gradient, {

  /**
   * @name Two.Gradient#Stop
   * @see {@link Two.Stop}
   */
  Stop: Stop,

  /**
   * @name Two.Gradient.Properties
   * @property {String[]} - A list of properties that are on every {@link Two.Gradient}.
   */
  Properties: [
    'spread'
  ],

  /**
   * @name Two.Gradient.MakeObservable
   * @function
   * @param {Object} object - The object to make observable.
   * @description Convenience function to apply observable qualities of a {@link Two.Gradient} to any object. Handy if you'd like to extend the {@link Two.Gradient} class on a custom class.
   */
  MakeObservable: function(object) {

    _.each(Gradient.Properties, defineGetterSetter, object);

    Object.defineProperty(object, 'stops', {

      enumerable: true,

      get: function() {
        return this._stops;
      },

      set: function(stops) {

        var updateStops = this._renderer.flagStops;
        var bindStops = this._renderer.bindStops;
        var unbindStops = this._renderer.unbindStops;

        // Remove previous listeners
        if (this._stops) {
          this._stops
            .unbind(Events.Types.insert, bindStops)
            .unbind(Events.Types.remove, unbindStops);
        }

        // Create new Collection with copy of Stops
        this._stops = new Collection((stops || []).slice(0));

        // Listen for Collection changes and bind / unbind
        this._stops
          .bind(Events.Types.insert, bindStops)
          .bind(Events.Types.remove, unbindStops);

        // Bind Initial Stops
        bindStops(this._stops);

      }

    });

  },

  /**
   * @name Two.Gradient.FlagStops
   * @function
   * @description Cached method to let renderers know stops have been updated on a {@link Two.Gradient}.
   */
  FlagStops: function() {
    this._flagStops = true;
  },

  /**
   * @name Two.Gradient.BindVertices
   * @function
   * @description Cached method to let {@link Two.Gradient} know vertices have been added to the instance.
   */
  BindStops: function(items) {

    // This function is called a lot
    // when importing a large SVG
    var i = items.length;
    while(i--) {
      items[i].bind(Events.Types.change, this._renderer.flagStops);
      items[i].parent = this;
    }

    this._renderer.flagStops();

  },

  /**
   * @name Two.Gradient.UnbindStops
   * @function
   * @description Cached method to let {@link Two.Gradient} know vertices have been removed from the instance.
   */
  UnbindStops: function(items) {

    var i = items.length;
    while(i--) {
      items[i].unbind(Events.Types.change, this._renderer.flagStops);
      delete items[i].parent;
    }

    this._renderer.flagStops();

  }

});

_.extend(Gradient.prototype, Events, {

  /**
   * @name Two.Gradient#_flagStops
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Gradient#stops} need updating.
   */
  _flagStops: false,
  /**
   * @name Two.Gradient#_flagSpread
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Gradient#spread} need updating.
   */
  _flagSpread: false,

  /**
   * @name Two.Gradient#clone
   * @function
   * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
   * @returns {Two.Gradient}
   * @description Create a new instance of {@link Two.Gradient} with the same properties of the current path.
   */
  clone: function(parent) {

    var stops = this.stops.map(function(s) {
      return s.clone();
    });

    var clone = new Gradient(stops);

    _.each(Gradient.Properties, function(k) {
      clone[k] = this[k];
    }, this);

    if (parent) {
      parent.add(clone);
    }

    return clone;

  },

  /**
   * @name Two.Gradient#toObject
   * @function
   * @returns {Object}
   * @description Return a JSON compatible plain object that represents the path.
   */
  toObject: function() {

    var result = {
      stops: this.stops.map(function(s) {
        return s.toObject();
      })
    };

    _.each(Gradient.Properties, function(k) {
      result[k] = this[k];
    }, this);

    return result;

  },

  /**
   * @name Two.Gradient#_update
   * @function
   * @private
   * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
   * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
   * @nota-bene Try not to call this method more than once a frame.
   */
  _update: function() {

    if (this._flagSpread || this._flagStops) {
      this.trigger(Events.Types.change);
    }

    return this;

  },

  /**
   * @name Two.Gradient#flagReset
   * @function
   * @private
   * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
   */
  flagReset: function() {

    this._flagSpread = this._flagStops = false;

    return this;

  }

});

Gradient.MakeObservable(Gradient.prototype);

/**
 * @name Two.LinearGradient
 * @class
 * @extends Two.Gradient
 * @param {Number} [x1=0] - The x position of the first end point of the linear gradient.
 * @param {Number} [y1=0] - The y position of the first end point of the linear gradient.
 * @param {Number} [x2=0] - The x position of the second end point of the linear gradient.
 * @param {Number} [y2=0] - The y position of the second end point of the linear gradient.
 * @param {Two.Stop[]} [stops] - A list of {@link Two.Stop}s that contain the gradient fill pattern for the gradient.
 * @nota-bene The linear gradient lives within the space of the parent object's matrix space.
 */
var LinearGradient = function(x1, y1, x2, y2, stops) {

  Gradient.call(this, stops);

  this._renderer.type = 'linear-gradient';

  var flagEndPoints = LinearGradient.FlagEndPoints.bind(this);

  /**
   * @name Two.LinearGradient#left
   * @property {Two.Vector} - The x and y value for where the first end point is placed on the canvas.
   */
  this.left = new Vector().bind(Events.Types.change, flagEndPoints);
  /**
   * @name Two.LinearGradient#right
   * @property {Two.Vector} - The x and y value for where the second end point is placed on the canvas.
   */
  this.right = new Vector().bind(Events.Types.change, flagEndPoints);

  if (typeof x1 === 'number') {
    this.left.x = x1;
  }
  if (typeof y1 === 'number') {
    this.left.y = y1;
  }
  if (typeof x2 === 'number') {
    this.right.x = x2;
  }
  if (typeof y2 === 'number') {
    this.right.y = y2;
  }

};

_.extend(LinearGradient, {

  /**
   * @name Two.LinearGradient#Stop
   * @see {@link Two.Stop}
   */
  Stop: Stop,

  /**
   * @name Two.LinearGradient.MakeObservable
   * @function
   * @param {Object} object - The object to make observable.
   * @description Convenience function to apply observable qualities of a {@link Two.LinearGradient} to any object. Handy if you'd like to extend the {@link Two.LinearGradient} class on a custom class.
   */
  MakeObservable: function(object) {
    Gradient.MakeObservable(object);
  },

  /**
   * @name Two.LinearGradient.FlagEndPoints
   * @function
   * @description Cached method to let renderers know end points have been updated on a {@link Two.LinearGradient}.
   */
  FlagEndPoints: function() {
    this._flagEndPoints = true;
  }

});

_.extend(LinearGradient.prototype, Gradient.prototype, {

  /**
   * @name Two.LinearGradient#_flagEndPoints
   * @private
   * @property {Boolean} - Determines whether the {@link Two.LinearGradient#left} or {@link Two.LinearGradient#right} changed and needs to update.
   */
  _flagEndPoints: false,

  constructor: LinearGradient,

  /**
   * @name Two.LinearGradient#clone
   * @function
   * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
   * @returns {Two.Gradient}
   * @description Create a new instance of {@link Two.LinearGradient} with the same properties of the current path.
   */
  clone: function(parent) {

    var stops = this.stops.map(function(stop) {
      return stop.clone();
    });

    var clone = new LinearGradient(this.left._x, this.left._y,
      this.right._x, this.right._y, stops);

    _.each(Gradient.Properties, function(k) {
      clone[k] = this[k];
    }, this);

    if (parent) {
      parent.add(clone);
    }

    return clone;

  },

  /**
   * @name Two.LinearGradient#toObject
   * @function
   * @returns {Object}
   * @description Return a JSON compatible plain object that represents the path.
   */
  toObject: function() {

    var result = Gradient.prototype.toObject.call(this);

    result.left = this.left.toObject();
    result.right = this.right.toObject();

    return result;

  },

  /**
   * @name Two.LinearGradient#_update
   * @function
   * @private
   * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
   * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
   * @nota-bene Try not to call this method more than once a frame.
   */
  _update: function() {

    if (this._flagEndPoints || this._flagSpread || this._flagStops) {
      this.trigger(Events.Types.change);
    }

    return this;

  },

  /**
   * @name Two.LinearGradient#flagReset
   * @function
   * @private
   * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
   */
  flagReset: function() {

    this._flagEndPoints = false;

    Gradient.prototype.flagReset.call(this);

    return this;

  }

});

LinearGradient.MakeObservable(LinearGradient.prototype);

/**
 * @name Two.RadialGradient
 * @class
 * @extends Two.Gradient
 * @param {Number} [x=0] - The x position of the origin of the radial gradient.
 * @param {Number} [y=0] - The y position of the origin of the radial gradient.
 * @param {Number} [radius=0] - The radius of the radial gradient.
 * @param {Two.Stop[]} [stops] - A list of {@link Two.Stop}s that contain the gradient fill pattern for the gradient.
 * @param {Number} [focalX=0] - The x position of the focal point on the radial gradient.
 * @param {Number} [focalY=0] - The y position of the focal point on the radial gradient.
 * @nota-bene The radial gradient lives within the space of the parent object's matrix space.
 */
var RadialGradient = function(cx, cy, r, stops, fx, fy) {

  Gradient.call(this, stops);

  this._renderer.type = 'radial-gradient';

  /**
   * @name Two.RadialGradient#center
   * @property {Two.Vector} - The x and y value for where the origin of the radial gradient is.
   */
  this.center = new Vector()
    .bind(Events.Types.change, (function() {
      this._flagCenter = true;
    }).bind(this));

  this.radius = typeof r === 'number' ? r : 20;

  /**
   * @name Two.RadialGradient#focal
   * @property {Two.Vector} - The x and y value for where the focal point of the radial gradient is.
   * @nota-bene This effects the spray or spread of the radial gradient.
   */
  this.focal = new Vector()
    .bind(Events.Types.change, (function() {
      this._flagFocal = true;
    }).bind(this));

  if (typeof cx === 'number') {
    this.center.x = cx;
  }
  if (typeof cy === 'number') {
    this.center.y = cy;
  }

  this.focal.copy(this.center);

  if (typeof fx === 'number') {
    this.focal.x = fx;
  }
  if (typeof fy === 'number') {
    this.focal.y = fy;
  }

};

_.extend(RadialGradient, {

  /**
   * @name Two.RadialGradient#Stop
   * @see {@link Two.Stop}
   */
  Stop: Stop,

  /**
   * @name Two.RadialGradient.Properties
   * @property {String[]} - A list of properties that are on every {@link Two.RadialGradient}.
   */
  Properties: [
    'radius'
  ],

  /**
   * @name Two.RadialGradient.MakeObservable
   * @function
   * @param {Object} object - The object to make observable.
   * @description Convenience function to apply observable qualities of a {@link Two.RadialGradient} to any object. Handy if you'd like to extend the {@link Two.RadialGradient} class on a custom class.
   */
  MakeObservable: function(object) {

    Gradient.MakeObservable(object);

    _.each(RadialGradient.Properties, defineGetterSetter, object);

  }

});

_.extend(RadialGradient.prototype, Gradient.prototype, {

  /**
   * @name Two.RadialGradient#_flagRadius
   * @private
   * @property {Boolean} - Determines whether the {@link Two.RadialGradient#radius} changed and needs to update.
   */
  _flagRadius: false,
  /**
   * @name Two.RadialGradient#_flagCenter
   * @private
   * @property {Boolean} - Determines whether the {@link Two.RadialGradient#center} changed and needs to update.
   */
  _flagCenter: false,
  /**
   * @name Two.RadialGradient#_flagFocal
   * @private
   * @property {Boolean} - Determines whether the {@link Two.RadialGradient#focal} changed and needs to update.
   */
  _flagFocal: false,

  constructor: RadialGradient,

  /**
   * @name Two.RadialGradient#clone
   * @function
   * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
   * @returns {Two.Gradient}
   * @description Create a new instance of {@link Two.RadialGradient} with the same properties of the current path.
   */
  clone: function(parent) {

    var stops = this.stops.map(function(stop) {
      return stop.clone();
    });

    var clone = new RadialGradient(this.center._x, this.center._y,
        this._radius, stops, this.focal._x, this.focal._y);

    _.each(Gradient.Properties.concat(RadialGradient.Properties), function(k) {
      clone[k] = this[k];
    }, this);

    if (parent) {
      parent.add(clone);
    }

    return clone;

  },

  /**
   * @name Two.RadialGradient#toObject
   * @function
   * @returns {Object}
   * @description Return a JSON compatible plain object that represents the path.
   */
  toObject: function() {

    var result = Gradient.prototype.toObject.call(this);

    _.each(RadialGradient.Properties, function(k) {
      result[k] = this[k];
    }, this);

    result.center = this.center.toObject();
    result.focal = this.focal.toObject();

    return result;

  },

  /**
   * @name Two.RadialGradient#_update
   * @function
   * @private
   * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
   * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
   * @nota-bene Try not to call this method more than once a frame.
   */
  _update: function() {

    if (this._flagRadius || this._flatCenter || this._flagFocal
      || this._flagSpread || this._flagStops) {
      this.trigger(Events.Types.change);
    }

    return this;

  },

  /**
   * @name Two.RadialGradient#flagReset
   * @function
   * @private
   * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
   */
  flagReset: function() {

    this._flagRadius = this._flagCenter = this._flagFocal = false;

    Gradient.prototype.flagReset.call(this);

    return this;

  }

});

RadialGradient.MakeObservable(RadialGradient.prototype);

var anchor;
var regex = {
  video: /\.(mp4|webm|ogg)$/i,
  image: /\.(jpe?g|png|gif|tiff|webp)$/i,
  effect: /texture|gradient/i
};

if (root$1.document) {
  anchor = document.createElement('a');
}

/**
 * @name Two.Texture
 * @class
 * @extends Two.Shape
 * @param {String|ImageElement} [src] - The URL path to an image file or an `<img />` element.
 * @param {Function} [callback] - An optional callback function once the image has been loaded.
 * @description Fundamental to work with bitmap data, a.k.a. pregenerated imagery, in Two.js. Supported formats include jpg, png, gif, and tiff. See {@link Two.Texture.RegularExpressions} for a full list of supported formats.
 */
var Texture = function(src, callback) {

  this._renderer = {};
  this._renderer.type = 'texture';
  this._renderer.flagOffset = Texture.FlagOffset.bind(this);
  this._renderer.flagScale = Texture.FlagScale.bind(this);

  this.id = Constants.Identifier + Constants.uniqueId();
  this.classList = [];

  /**
   * @name Two.Texture#loaded
   * @property {Boolean} - Shorthand value to determine if image has been loaded into the texture.
   */
  this.loaded = false;

  /**
   * @name Two.Texture#repeat
   * @property {String} - CSS style declaration to tile {@link Two.Path}. Valid values include: `'no-repeat'`, `'repeat'`, `'repeat-x'`, `'repeat-y'`.
   * @see {@link https://www.w3.org/TR/2dcontext/#dom-context-2d-createpattern}
   */
  this.repeat = 'no-repeat';

  /**
   * @name Two.Texture#offset
   * @property {Two.Vector} - A two-component vector describing any pixel offset of the texture when applied to a {@link Two.Path}.
   */
  this.offset = new Vector();

  if (typeof callback === 'function') {
    var loaded = (function() {
      this.unbind(Events.Types.load, loaded);
      if (typeof callback === 'function') {
        callback();
      }
    }).bind(this);
    this.bind(Events.Types.load, loaded);
  }

  /**
   * @name Two.Texture#src
   * @property {String} - The URL path to the image data.
   * @nota-bene This property is ultimately serialized in a {@link Two.Registry} to cache retrieval.
   */
  if (typeof src === 'string') {
    this.src = src;
  } else if (typeof src === 'object') {
    var elemString = Object.prototype.toString.call(src);
    if (
      elemString === '[object HTMLImageElement]' ||
      elemString === '[object HTMLCanvasElement]' ||
      elemString === '[object HTMLVideoElement]' ||
      elemString === '[object Image]'
    ) {
      /**
       * @name Two.Texture#image
       * @property {Element} - The corresponding DOM Element of the texture. Can be a `<img />`, `<canvas />`, or `<video />` element. See {@link Two.Texture.RegularExpressions} for a full list of supported elements.
       * @nota-bene In headless environments this is a `Canvas.Image` object. See {@link https://github.com/Automattic/node-canvas} for more information on headless image objects.
       */
      this.image = src;
    }
  }

  this._update();

};

_.extend(Texture, {

  /**
   * @name Two.Texture.Properties
   * @property {String[]} - A list of properties that are on every {@link Two.Texture}.
   */
  Properties: [
    'src',
    'loaded',
    'repeat'
  ],

  /**
   * @name Two.Texture.RegularExpressions
   * @property {Object} - A map of compatible DOM Elements categorized by media format.
   */
  RegularExpressions: regex,

  /**
   * @name Two.Texture.ImageRegistry
   * @property {Two.Registry} - A canonical listing of image data used in a single session of Two.js.
   * @nota-bene This object is used to cache image data between different textures.
   */
  ImageRegistry: new Registry(),

  /**
   * @name Two.Texture.getAbsoluteURL
   * @property {Function} - Serializes a URL as an absolute path for canonical attribution in {@link Two.ImageRegistry}.
   * @param {String} path
   * @returns {String} - The serialized absolute path.
   */
  getAbsoluteURL: function(path) {
    if (!anchor) {
      // TODO: Fix for headless environments
      return path;
    }
    anchor.href = path;
    return anchor.href;
  },

  /**
   * @name Two.Texture.loadHeadlessBuffer
   * @property {Function} - Loads an image as a buffer in headless environments.
   * @param {Two.Texture} texture - The {@link Two.Texture} to be loaded.
   * @param {Function} loaded - The callback function to be triggered once the image is loaded.
   * @nota-bene - This function uses node's `fs.readFileSync` to spoof the `<img />` loading process in the browser.
   */
  loadHeadlessBuffer: function(texture, loaded) {

    texture.image.onload = loaded;
    texture.image.src = texture.src;

  },

  /**
   * @name Two.Texture.getTag
   * @property {Function} - Retrieves the tag name of an image, video, or canvas node.
   * @param {ImageElement} - The image to infer the tag name from.
   * @returns {String} - Returns the tag name of an image, video, or canvas node.
   */
  getTag: function(image) {
    return (image && image.nodeName && image.nodeName.toLowerCase())
      // Headless environments
      || 'img';
  },

  /**
   * @name Two.Texture.getImage
   * @property {Function} - Convenience function to set {@link Two.Texture#image} properties with canonincal versions set in {@link Two.Texture.ImageRegistry}.
   * @param {String} src - The URL path of the image.
   * @returns {ImageElement} - Returns either a cached version of the image or a new one that is registered in {@link Two.Texture.ImageRegistry}.
   */
  getImage: function(src) {

    var absoluteSrc = Texture.getAbsoluteURL(src);

    if (Texture.ImageRegistry.contains(absoluteSrc)) {
      return Texture.ImageRegistry.get(absoluteSrc);
    }

    var image;

    if (CanvasShim.Image) {

      // TODO: Fix for headless environments
      image = new CanvasShim.Image();
      Renderer.Utils.shim(image, 'img');

    } else if (root$1.document) {

      if (regex.video.test(absoluteSrc)) {
        image = document.createElement('video');
      } else {
        image = document.createElement('img');
      }

    } else {

      console.warn('Two.js: no prototypical image defined for Two.Texture');

    }

    image.crossOrigin = 'anonymous';

    return image;

  },

  /**
   * @name Two.Register
   * @interface
   * @description A collection of functions to register different types of textures. Used internally by a {@link Two.Texture}.
   */
  Register: {
    canvas: function(texture, callback) {
      texture._src = '#' + texture.id;
      Texture.ImageRegistry.add(texture.src, texture.image);
      if (typeof callback === 'function') {
        callback();
      }
    },
    img: function(texture, callback) {

      var image = texture.image;

      var loaded = function(e) {
        if (!CanvasShim.isHeadless && image.removeEventListener && typeof image.removeEventListener === 'function') {
          image.removeEventListener('load', loaded, false);
          image.removeEventListener('error', error, false);
        }
        if (typeof callback === 'function') {
          callback();
        }
      };
      var error = function(e) {
        if (!CanvasShim.isHeadless && typeof image.removeEventListener === 'function') {
          image.removeEventListener('load', loaded, false);
          image.removeEventListener('error', error, false);
        }
        throw new TwoError('unable to load ' + texture.src);
      };

      if (typeof image.width === 'number' && image.width > 0
        && typeof image.height === 'number' && image.height > 0) {
          loaded();
      } else if (!CanvasShim.isHeadless && typeof image.addEventListener === 'function') {
        image.addEventListener('load', loaded, false);
        image.addEventListener('error', error, false);
      }

      texture._src = Texture.getAbsoluteURL(texture._src);

      if (!CanvasShim.isHeadless && image && image.getAttribute('two-src')) {
        return;
      }

      if (!CanvasShim.isHeadless) {
        image.setAttribute('two-src', texture.src);
      }

      Texture.ImageRegistry.add(texture.src, image);

      if (CanvasShim.isHeadless) {

        Texture.loadHeadlessBuffer(texture, loaded);

      } else {

        texture.image.src = texture.src;

      }

    },
    video: function(texture, callback) {

      if (CanvasShim.isHeadless) {
        throw new TwoError('video textures are not implemented in headless environments.');
      }

      var loaded = function(e) {
        texture.image.removeEventListener('canplaythrough', loaded, false);
        texture.image.removeEventListener('error', error, false);
        texture.image.width = texture.image.videoWidth;
        texture.image.height = texture.image.videoHeight;
        if (typeof callback === 'function') {
          callback();
        }
      };
      var error = function(e) {
        texture.image.removeEventListener('canplaythrough', loaded, false);
        texture.image.removeEventListener('error', error, false);
        throw new TwoError('unable to load ' + texture.src);
      };

      texture._src = Texture.getAbsoluteURL(texture._src);

      if (!texture.image.getAttribute('two-src')) {
        texture.image.setAttribute('two-src', texture.src);
        Texture.ImageRegistry.add(texture.src, texture.image);
      }

      if (texture.image.readyState >= 4) {
        loaded();
      } else {
        texture.image.addEventListener('canplaythrough', loaded, false);
        texture.image.addEventListener('error', error, false);
        texture.image.src = texture.src;
        texture.image.load();
      }

    }
  },

  /**
   * @name Two.Texture.load
   * @function
   * @param {Two.Texture} texture - The texture to load.
   * @param {Function} callback - The function to be called once the texture is loaded.
   */
  load: function(texture, callback) {

    var src = texture.src;
    var image = texture.image;
    var tag = Texture.getTag(image);

    if (texture._flagImage) {
      if (/canvas/i.test(tag)) {
        Texture.Register.canvas(texture, callback);
      } else {
        texture._src = (!CanvasShim.isHeadless && image.getAttribute('two-src')) || image.src;
        Texture.Register[tag](texture, callback);
      }
    }

    if (texture._flagSrc) {
      if (!image) {
        image = Texture.getImage(texture.src);
        texture.image = image;
      }
      tag = Texture.getTag(image);
      Texture.Register[tag](texture, callback);
    }

  },

  /**
   * @name Two.Texture.FlagOffset
   * @function
   * @description Cached method to let renderers know `offset` has been updated on a {@link Two.Texture}.
   */
  FlagOffset: function() {
    this._flagOffset = true;
  },

  /**
   * @name Two.Texture.FlagScale
   * @function
   * @description Cached method to let renderers know `scale` has been updated on a {@link Two.Texture}.
   */
  FlagScale: function() {
    this._flagScale = true;
  },

  /**
   * @name Two.Texture.MakeObservable
   * @function
   * @param {Object} object - The object to make observable.
   * @description Convenience function to apply observable qualities of a {@link Two.Texture} to any object. Handy if you'd like to extend or inherit the {@link Two.Texture} class on a custom class.
   */
  MakeObservable: function(object) {

    _.each(Texture.Properties, defineGetterSetter, object);

    Object.defineProperty(object, 'image', {
      enumerable: true,
      get: function() {
        return this._image;
      },
      set: function(image) {

        var tag = Texture.getTag(image);
        var index;

        switch (tag) {
          case 'canvas':
            index = '#' + image.id;
            break;
          default:
            index = image.src;
        }

        if (Texture.ImageRegistry.contains(index)) {
          this._image = Texture.ImageRegistry.get(image.src);
        } else {
          this._image = image;
        }

        this._flagImage = true;

      }

    });

    Object.defineProperty(object, 'offset', {
      enumerable: true,
      get: function() {
        return this._offset;
      },
      set: function(v) {
        if (this._offset) {
          this._offset.unbind(Events.Types.change, this._renderer.flagOffset);
        }
        this._offset = v;
        this._offset.bind(Events.Types.change, this._renderer.flagOffset);
        this._flagOffset = true;
      }
    });

    Object.defineProperty(object, 'scale', {
      enumerable: true,
      get: function() {
        return this._scale;
      },
      set: function(v) {

        if (this._scale instanceof Vector) {
          this._scale.unbind(Events.Types.change, this._renderer.flagScale);
        }

        this._scale = v;

        if (this._scale instanceof Vector) {
          this._scale.bind(Events.Types.change, this._renderer.flagScale);
        }

        this._flagScale = true;

      }
    });

  }

});

_.extend(Texture.prototype, Events, Shape.prototype, {

  /**
   * @name Two.Texture#_flagSrc
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Texture#src} needs updating.
   */
  _flagSrc: false,

  /**
   * @name Two.Texture#_flagImage
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Texture#image} needs updating.
   */
  _flagImage: false,

  /**
   * @name Two.Texture#_flagVideo
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Texture#video} needs updating.
   */
  _flagVideo: false,

  /**
   * @name Two.Texture#_flagLoaded
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Texture#loaded} needs updating.
   */
  _flagLoaded: false,

  /**
   * @name Two.Texture#_flagRepeat
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Texture#repeat} needs updating.
   */
  _flagRepeat: false,

  /**
   * @name Two.Texture#_flagOffset
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Texture#offset} needs updating.
   */
  _flagOffset: false,

  /**
   * @name Two.Texture#_flagScale
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Texture#scale} needs updating.
   */
  _flagScale: false,

  /**
   * @name Two.Texture#_src
   * @private
   * @see {@link Two.Texture#src}
   */
  _src: '',

  /**
   * @name Two.Texture#_image
   * @private
   * @see {@link Two.Texture#image}
   */
  _image: null,

  /**
   * @name Two.Texture#_loaded
   * @private
   * @see {@link Two.Texture#loaded}
   */
  _loaded: false,

  /**
   * @name Two.Texture#_repeat
   * @private
   * @see {@link Two.Texture#repeat}
   */
  _repeat: 'no-repeat',

  /**
   * @name Two.Texture#_scale
   * @private
   * @see {@link Two.Texture#scale}
   */
  _scale: 1,

  /**
   * @name Two.Texture#_offset
   * @private
   * @see {@link Two.Texture#offset}
   */
  _offset: null,

  constructor: Texture,

  /**
   * @name Two.Texture#clone
   * @function
   * @returns {Two.Texture}
   * @description Create a new instance of {@link Two.Texture} with the same properties of the current texture.
   */
  clone: function() {
    var clone = new Texture(this.src);
    clone.repeat = this.repeat;
    clone.offset.copy(this.origin);
    clone.scale = this.scale;
    return clone;
  },

  /**
   * @name Two.Texture#toObject
   * @function
   * @returns {Object}
   * @description Return a JSON compatible plain object that represents the texture.
   */
  toObject: function() {
    return {
      src: this.src,
      // image: this.image,
      repeat: this.repeat,
      origin: this.origin.toObject(),
      scale: typeof this.scale === 'number' ? this.scale : this.scale.toObject()
    };
  },

  /**
   * @name Two.Texture#_update
   * @function
   * @private
   * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
   * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
   * @nota-bene Try not to call this method more than once a frame.
   */
  _update: function() {

    if (this._flagSrc || this._flagImage) {

      this.trigger(Events.Types.change);

      if (this._flagSrc || this._flagImage) {
        this.loaded = false;
        Texture.load(this, (function() {
          this.loaded = true;
          this
            .trigger(Events.Types.change)
            .trigger(Events.Types.load);
        }).bind(this));
      }

    }

    if (this._image && this._image.readyState >= 4) {
      this._flagVideo = true;
    }

    return this;

  },

  /**
   * @name Two.Texture#flagReset
   * @function
   * @private
   * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
   */
  flagReset: function() {

    this._flagSrc = this._flagImage = this._flagLoaded
      = this._flagVideo = this._flagScale = this._flagOffset = false;

    return this;

  }

});

Texture.MakeObservable(Texture.prototype);

// Constants

var min$2 = Math.min, max$2 = Math.max, ceil = Math.ceil, floor = Math.floor;

/**
 * @name Two.Path
 * @class
 * @extends Two.Shape
 * @param {Two.Anchor[]} [vertices] - A list of {@link Two.Anchor}s that represent the order and coordinates to construct the rendered shape.
 * @param {Boolean} [closed=false] - Describes whether the shape is closed or open.
 * @param {Boolean} [curved=false] - Describes whether the shape automatically calculates bezier handles for each vertex.
 * @param {Boolean} [manual=false] - Describes whether the developer controls how vertices are plotted or if Two.js automatically plots coordinates based on closed and curved booleans.
 * @description This is the primary primitive class for creating all drawable shapes in Two.js. Unless specified methods return their instance of `Two.Path` for the purpose of chaining.
 */
var Path = function(vertices, closed, curved, manual) {

  Shape.call(this);

  this._renderer.type = 'path';
  this._renderer.flagVertices = Path.FlagVertices.bind(this);
  this._renderer.bindVertices = Path.BindVertices.bind(this);
  this._renderer.unbindVertices = Path.UnbindVertices.bind(this);

  this._renderer.flagFill = Path.FlagFill.bind(this);
  this._renderer.flagStroke = Path.FlagStroke.bind(this);
  this._renderer.vertices = [];
  this._renderer.collection = [];

  /**
   * @name Two.Path#closed
   * @property {Boolean} - Determines whether a final line is drawn between the final point in the `vertices` array and the first point.
   */
  this._closed = !!closed;

  /**
   * @name Two.Path#curved
   * @property {Boolean} - When the path is `automatic = true` this boolean determines whether the lines between the points are curved or not.
   */
  this._curved = !!curved;

  /**
   * @name Two.Path#beginning
   * @property {Number} - Number between zero and one to state the beginning of where the path is rendered.
   * @description {@link Two.Path#beginning} is a percentage value that represents at what percentage into the path should the renderer start drawing.
   * @nota-bene This is great for animating in and out stroked paths in conjunction with {@link Two.Path#ending}.
   */
  this.beginning = 0;

  /**
   * @name Two.Path#ending
   * @property {Number} - Number between zero and one to state the ending of where the path is rendered.
   * @description {@link Two.Path#ending} is a percentage value that represents at what percentage into the path should the renderer start drawing.
   * @nota-bene This is great for animating in and out stroked paths in conjunction with {@link Two.Path#beginning}.
   */
  this.ending = 1;

  // Style properties

  /**
   * @name Two.Path#fill
   * @property {(CssColor|Two.Gradient|Two.Texture)} - The value of what the path should be filled in with.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value} for more information on CSS Colors.
   */
  this.fill = '#fff';

  /**
   * @name Two.Path#stroke
   * @property {(CssColor|Two.Gradient|Two.Texture)} - The value of what the path should be outlined in with.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value} for more information on CSS Colors.
   */
  this.stroke = '#000';

  /**
   * @name Two.Path#linewidth
   * @property {Number} - The thickness in pixels of the stroke.
   */
  this.linewidth = 1.0;

  /**
   * @name Two.Path#opacity
   * @property {Number} - The opaqueness of the path.
   * @nota-bene Can be used in conjunction with CSS Colors that have an alpha value.
   */
  this.opacity = 1.0;

  /**
   * @name Two.Path#className
   * @property {String} - A class to be applied to the element to be compatible with CSS styling.
   * @nota-bene Only available for the SVG renderer.
   */
  this.className = '';

  /**
   * @name Two.Path#visible
   * @property {Boolean} - Display the path or not.
   * @nota-bene For {@link Two.CanvasRenderer} and {@link Two.WebGLRenderer} when set to false all updating is disabled improving performance dramatically with many objects in the scene.
   */
  this.visible = true;

  /**
   * @name Two.Path#cap
   * @property {String}
   * @see {@link https://www.w3.org/TR/SVG11/painting.html#StrokeLinecapProperty}
   */
  this.cap = 'butt';      // Default of Adobe Illustrator

  /**
   * @name Two.Path#join
   * @property {String}
   * @see {@link https://www.w3.org/TR/SVG11/painting.html#StrokeLinejoinProperty}
   */
  this.join = 'miter';    // Default of Adobe Illustrator

  /**
   * @name Two.Path#miter
   * @property {String}
   * @see {@link https://www.w3.org/TR/SVG11/painting.html#StrokeMiterlimitProperty}
   */
  this.miter = 4;         // Default of Adobe Illustrator

  /**
   * @name Two.Path#vertices
   * @property {Two.Anchor[]} - An ordered list of anchor points for rendering the path.
   * @description A list of {@link Two.Anchor} objects that consist of what form the path takes.
   * @nota-bene The array when manipulating is actually a {@link Two.Utils.Collection}.
   */
  this.vertices = vertices;

  /**
   * @name Two.Path#automatic
   * @property {Boolean} - Determines whether or not Two.js should calculate curves, lines, and commands automatically for you or to let the developer manipulate them for themselves.
   */
  this.automatic = !manual;

  /**
   * @name Two.Path#dashes
   * @property {Number[]} - Array of numbers. Odd indices represent dash length. Even indices represent dash space.
   * @description A list of numbers that represent the repeated dash length and dash space applied to the stroke of the text.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray} for more information on the SVG stroke-dasharray attribute.
   */
  this.dashes = [];

  /**
   * @name Two.Path#dashes#offset
   * @property {Number} - A number in pixels to offset {@link Two.Path#dashes} display.
   */
  this.dashes.offset = 0;

};

_.extend(Path, {

  /**
   * @name Two.Path.Properties
   * @property {String[]} - A list of properties that are on every {@link Two.Path}.
   */
  Properties: [
    'fill',
    'stroke',
    'linewidth',
    'opacity',
    'visible',
    'cap',
    'join',
    'miter',

    'closed',
    'curved',
    'automatic',
    'beginning',
    'ending'
  ],

  Utils: {
    getCurveLength: getCurveLength$1
  },

  /**
   * @name Two.Path.FlagVertices
   * @function
   * @description Cached method to let renderers know vertices have been updated on a {@link Two.Path}.
   */
  FlagVertices: function() {
    this._flagVertices = true;
    this._flagLength = true;
    if (this.parent) {
      this.parent._flagLength = true;
    }
  },

  /**
   * @name Two.Path.BindVertices
   * @function
   * @description Cached method to let {@link Two.Path} know vertices have been added to the instance.
   */
  BindVertices: function(items) {

    // This function is called a lot
    // when importing a large SVG
    var i = items.length;
    while (i--) {
      items[i].bind(Events.Types.change, this._renderer.flagVertices);
    }

    this._renderer.flagVertices();

  },

  /**
   * @name Two.Path.UnbindVertices
   * @function
   * @description Cached method to let {@link Two.Path} know vertices have been removed from the instance.
   */
  UnbindVertices: function(items) {

    var i = items.length;
    while (i--) {
      items[i].unbind(Events.Types.change, this._renderer.flagVertices);
    }

    this._renderer.flagVertices();

  },

  /**
   * @name Two.Path.FlagFill
   * @function
   * @description Cached method to let {@link Two.Path} know the fill has changed.
   */
  FlagFill: function() {
    this._flagFill = true;
  },

  /**
   * @name Two.Path.FlagFill
   * @function
   * @description Cached method to let {@link Two.Path} know the stroke has changed.
   */
  FlagStroke: function() {
    this._flagStroke = true;
  },

  /**
   * @name Two.Path.MakeObservable
   * @function
   * @param {Object} object - The object to make observable.
   * @description Convenience function to apply observable qualities of a {@link Two.Path} to any object. Handy if you'd like to extend the {@link Two.Path} class on a custom class.
   */
  MakeObservable: function(object) {

    Shape.MakeObservable(object);

    // Only the 7 defined properties are flagged like this. The subsequent
    // properties behave differently and need to be hand written.
    _.each(Path.Properties.slice(2, 8), defineGetterSetter, object);

    Object.defineProperty(object, 'fill', {
      enumerable: true,
      get: function() {
        return this._fill;
      },
      set: function(f) {

        if (this._fill instanceof Gradient
          || this._fill instanceof LinearGradient
          || this._fill instanceof RadialGradient
          || this._fill instanceof Texture) {
          this._fill.unbind(Events.Types.change, this._renderer.flagFill);
        }

        this._fill = f;
        this._flagFill = true;

        if (this._fill instanceof Gradient
          || this._fill instanceof LinearGradient
          || this._fill instanceof RadialGradient
          || this._fill instanceof Texture) {
          this._fill.bind(Events.Types.change, this._renderer.flagFill);
        }

      }
    });

    Object.defineProperty(object, 'stroke', {
      enumerable: true,
      get: function() {
        return this._stroke;
      },
      set: function(f) {

        if (this._stroke instanceof Gradient
          || this._stroke instanceof LinearGradient
          || this._stroke instanceof RadialGradient
          || this._stroke instanceof Texture) {
          this._stroke.unbind(Events.Types.change, this._renderer.flagStroke);
        }

        this._stroke = f;
        this._flagStroke = true;

        if (this._stroke instanceof Gradient
          || this._stroke instanceof LinearGradient
          || this._stroke instanceof RadialGradient
          || this._stroke instanceof Texture) {
          this._stroke.bind(Events.Types.change, this._renderer.flagStroke);
        }

      }
    });

    /**
     * @name Two.Path#length
     * @property {Number} - The sum of distances between all {@link Two.Path#vertices}.
     */
    Object.defineProperty(object, 'length', {
      get: function() {
        if (this._flagLength) {
          this._updateLength();
        }
        return this._length;
      }
    });

    Object.defineProperty(object, 'closed', {
      enumerable: true,
      get: function() {
        return this._closed;
      },
      set: function(v) {
        this._closed = !!v;
        this._flagVertices = true;
      }
    });

    Object.defineProperty(object, 'curved', {
      enumerable: true,
      get: function() {
        return this._curved;
      },
      set: function(v) {
        this._curved = !!v;
        this._flagVertices = true;
      }
    });

    Object.defineProperty(object, 'automatic', {
      enumerable: true,
      get: function() {
        return this._automatic;
      },
      set: function(v) {
        if (v === this._automatic) {
          return;
        }
        this._automatic = !!v;
        var method = this._automatic ? 'ignore' : 'listen';
        _.each(this.vertices, function(v) {
          v[method]();
        });
      }
    });

    Object.defineProperty(object, 'beginning', {
      enumerable: true,
      get: function() {
        return this._beginning;
      },
      set: function(v) {
        this._beginning = v;
        this._flagVertices = true;
      }
    });

    Object.defineProperty(object, 'ending', {
      enumerable: true,
      get: function() {
        return this._ending;
      },
      set: function(v) {
        this._ending = v;
        this._flagVertices = true;
      }
    });

    Object.defineProperty(object, 'vertices', {

      enumerable: true,

      get: function() {
        return this._collection;
      },

      set: function(vertices) {

        var updateVertices = this._renderer.flagVertices;
        var bindVertices = this._renderer.bindVertices;
        var unbindVertices = this._renderer.unbindVertices;

        // Remove previous listeners
        if (this._collection) {
          this._collection
            .unbind(Events.Types.insert, bindVertices)
            .unbind(Events.Types.remove, unbindVertices);
        }

        // Create new Collection with copy of vertices
        if (vertices instanceof Collection) {
          this._collection = vertices;
        } else {
          this._collection = new Collection(vertices || []);
        }


        // Listen for Collection changes and bind / unbind
        this._collection
          .bind(Events.Types.insert, bindVertices)
          .bind(Events.Types.remove, unbindVertices);

        // Bind Initial Vertices
        bindVertices(this._collection);

      }

    });

    /**
     * @name Two.Path#clip
     * @property {Two.Shape} - Object to define clipping area.
     * @nota-bene This property is currently not working becuase of SVG spec issues found here {@link https://code.google.com/p/chromium/issues/detail?id=370951}.
     */
    Object.defineProperty(object, 'clip', {
      enumerable: true,
      get: function() {
        return this._clip;
      },
      set: function(v) {
        this._clip = v;
        this._flagClip = true;
      }
    });

    Object.defineProperty(object, 'dashes', {
      enumerable: true,
      get: function() {
        return this._dashes;
      },
      set: function(v) {
        if (typeof v.offset !== 'number') {
          v.offset = this._dashes.offset || 0;
        }
        this._dashes = v;
      }
    });

  }

});

_.extend(Path.prototype, Shape.prototype, {

  // Flags
  // http://en.wikipedia.org/wiki/Flag

  /**
   * @name Two.Path#_flagVertices
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Path#vertices} need updating.
   */
  _flagVertices: true,

  /**
   * @name Two.Path#_flagLength
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Path#length} needs updating.
   */
  _flagLength: true,

  /**
   * @name Two.Path#_flagFill
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Path#fill} needs updating.
   */
  _flagFill: true,

  /**
   * @name Two.Path#_flagStroke
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Path#stroke} needs updating.
   */
  _flagStroke: true,

  /**
   * @name Two.Path#_flagLinewidth
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Path#linewidth} needs updating.
   */
  _flagLinewidth: true,

  /**
   * @name Two.Path#_flagOpacity
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Path#opacity} needs updating.
   */
  _flagOpacity: true,

  /**
   * @name Two.Path#_flagVisible
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Path#visible} needs updating.
   */
  _flagVisible: true,

  /**
   * @name Two.Path#_flagCap
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Path#cap} needs updating.
   */
  _flagCap: true,

  /**
   * @name Two.Path#_flagJoin
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Path#join} needs updating.
   */
  _flagJoin: true,

  /**
   * @name Two.Path#_flagMiter
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Path#miter} needs updating.
   */
  _flagMiter: true,

  /**
   * @name Two.Path#_flagClip
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Path#clip} needs updating.
   */
  _flagClip: false,

  // Underlying Properties

  /**
   * @name Two.Path#_length
   * @private
   * @see {@link Two.Path#length}
   */
  _length: 0,

  /**
   * @name Two.Path#_fill
   * @private
   * @see {@link Two.Path#fill}
   */
  _fill: '#fff',

  /**
   * @name Two.Path#_stroke
   * @private
   * @see {@link Two.Path#stroke}
   */
  _stroke: '#000',

  /**
   * @name Two.Path#_linewidth
   * @private
   * @see {@link Two.Path#linewidth}
   */
  _linewidth: 1.0,

  /**
   * @name Two.Path#_opacity
   * @private
   * @see {@link Two.Path#opacity}
   */
  _opacity: 1.0,

  /**
   * @name Two.Path#_visible
   * @private
   * @see {@link Two.Path#visible}
   */
  _visible: true,

  /**
   * @name Two.Path#_cap
   * @private
   * @see {@link Two.Path#cap}
   */
  _cap: 'round',

  /**
   * @name Two.Path#_join
   * @private
   * @see {@link Two.Path#join}
   */
  _join: 'round',

  /**
   * @name Two.Path#_miter
   * @private
   * @see {@link Two.Path#miter}
   */
  _miter: 4,

  /**
   * @name Two.Path#_closed
   * @private
   * @see {@link Two.Path#closed}
   */
  _closed: true,

  /**
   * @name Two.Path#_curved
   * @private
   * @see {@link Two.Path#curved}
   */
  _curved: false,

  /**
   * @name Two.Path#_automatic
   * @private
   * @see {@link Two.Path#automatic}
   */
  _automatic: true,

  /**
   * @name Two.Path#_beginning
   * @private
   * @see {@link Two.Path#beginning}
   */
  _beginning: 0,

  /**
   * @name Two.Path#_ending
   * @private
   * @see {@link Two.Path#ending}
   */
  _ending: 1.0,

  /**
   * @name Two.Path#_clip
   * @private
   * @see {@link Two.Path#clip}
   */
  _clip: false,

  /**
   * @name Two.Path#_dashes
   * @private
   * @see {@link Two.Path#dashes}
   */
  _dashes: [],

  constructor: Path,

  /**
   * @name Two.Path#clone
   * @function
   * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
   * @returns {Two.Path}
   * @description Create a new instance of {@link Two.Path} with the same properties of the current path.
   */
  clone: function(parent) {

    var clone = new Path();

    for (var j = 0; j < this.vertices.length; j++) {
      clone.vertices.push(this.vertices[j].clone());
    }

    for (var i = 0; i < Path.Properties.length; i++) {
      var k = Path.Properties[i];
      clone[k] = this[k];
    }

    clone.className = this.className;

    clone.translation.copy(this.translation);
    clone.rotation = this.rotation;
    clone.scale = this.scale;

    if (this.matrix.manual) {
      clone.matrix.copy(this.matrix);
    }

    if (parent) {
      parent.add(clone);
    }

    return clone._update();

  },

  /**
   * @name Two.Path#toObject
   * @function
   * @returns {Object}
   * @description Return a JSON compatible plain object that represents the path.
   */
  toObject: function() {

    var result = {
      vertices: this.vertices.map(function(v) {
        return v.toObject();
      })
    };

    _.each(Path.Properties, function(k) {
      result[k] = this[k];
    }, this);

    result.className = this.className;

    result.translation = this.translation.toObject();
    result.rotation = this.rotation;
    result.scale = this.scale instanceof Vector ? this.scale.toObject() : this.scale;

    if (this.matrix.manual) {
      result.matrix = this.matrix.toObject();
    }

    return result;

  },

  /**
   * @name Two.Path#noFill
   * @function
   * @description Short hand method to set fill to `transparent`.
   */
  noFill: function() {
    this.fill = 'transparent';
    return this;
  },

  /**
   * @name Two.Path#noStroke
   * @function
   * @description Short hand method to set stroke to `transparent`.
   */
  noStroke: function() {
    this.stroke = undefined;
    return this;
  },

  /**
   * @name Two.Path#corner
   * @function
   * @description Orient the vertices of the shape to the upper left-hand corner of the path.
   */
  corner: function() {

    var rect = this.getBoundingClientRect(true);

    rect.centroid = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };

    _.each(this.vertices, function(v) {
      v.subSelf(rect.centroid);
      v.x += rect.width / 2;
      v.y += rect.height / 2;
    });

    return this;

  },

  /**
   * @name Two.Path#center
   * @function
   * @description Orient the vertices of the shape to the center of the path.
   */
  center: function() {

    var rect = this.getBoundingClientRect(true);

    rect.centroid = {
      x: rect.left + rect.width / 2 - this.translation.x,
      y: rect.top + rect.height / 2 - this.translation.y
    };

    _.each(this.vertices, function(v) {
      v.subSelf(rect.centroid);
    });

    return this;

  },

  /**
   * @name Two.Path#remove
   * @function
   * @description Remove self from the scene / parent.
   */
  remove: function() {

    if (!this.parent) {
      return this;
    }

    this.parent.remove(this);

    return this;

  },

  /**
   * @name Two.Path#getBoundingClientRect
   * @function
   * @param {Boolean} [shallow=false] - Describes whether to calculate off local matrix or world matrix.
   * @returns {Object} - Returns object with top, left, right, bottom, width, height attributes.
   * @description Return an object with top, left, right, bottom, width, and height parameters of the path.
   */
  getBoundingClientRect: function(shallow) {
    var matrix, border, l, i, v0, c0, c1, v1;

    var left = Infinity, right = -Infinity,
        top = Infinity, bottom = -Infinity;

    // TODO: Update this to not __always__ update. Just when it needs to.
    this._update(true);

    matrix = shallow ? this._matrix : getComputedMatrix(this);

    border = this.linewidth / 2;
    l = this._renderer.vertices.length;

    if (l <= 0) {
      return {
        width: 0,
        height: 0
      };
    }

    for (i = 0; i < l; i++) {

      v1 = this._renderer.vertices[i];
      // If i = 0, then this "wraps around" to the last vertex. Otherwise, it's the previous vertex.
      // This is important for handling cyclic paths.
      v0 = this._renderer.vertices[(i + l - 1) % l];

      if (v0.controls && v1.controls) {

        if (v0.relative) {
          c0 = matrix.multiply(
            v0.controls.right.x + v0.x, v0.controls.right.y + v0.y, 1);
        } else {
          c0 = matrix.multiply(
            v0.controls.right.x, v0.controls.right.y, 1);
        }
        v0 = matrix.multiply(v0.x, v0.y, 1);

        if (v1.relative) {
          c1 = matrix.multiply(
            v1.controls.left.x + v1.x, v1.controls.left.y + v1.y, 1);
        } else {
          c1 = matrix.multiply(
            v1.controls.left.x, v1.controls.left.y, 1);
        }
        v1 = matrix.multiply(v1.x, v1.y, 1);

        var bb = getCurveBoundingBox(
          v0.x, v0.y, c0.x, c0.y, c1.x, c1.y, v1.x, v1.y);

        top = min$2(bb.min.y - border, top);
        left = min$2(bb.min.x - border, left);
        right = max$2(bb.max.x + border, right);
        bottom = max$2(bb.max.y + border, bottom);

      } else {

        if (i <= 1) {

          v0 = matrix.multiply(v0.x, v0.y, 1);

          top = min$2(v0.y - border, top);
          left = min$2(v0.x - border, left);
          right = max$2(v0.x + border, right);
          bottom = max$2(v0.y + border, bottom);

        }

        v1 = matrix.multiply(v1.x, v1.y, 1);

        top = min$2(v1.y - border, top);
        left = min$2(v1.x - border, left);
        right = max$2(v1.x + border, right);
        bottom = max$2(v1.y + border, bottom);

      }

    }

    return {
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      width: right - left,
      height: bottom - top
    };

  },

  /**
   * @name Two.Path#getPointAt
   * @function
   * @param {Boolean} t - Percentage value describing where on the Two.Path to estimate and assign coordinate values.
   * @param {Two.Vector} [obj=undefined] - Object to apply calculated x, y to. If none available returns new Object.
   * @returns {Object}
   * @description Given a float `t` from 0 to 1, return a point or assign a passed `obj`'s coordinates to that percentage on this Two.Path's curve.
   */
  getPointAt: function(t, obj) {

    var ia, ib, result;
    var x, x1, x2, x3, x4, y, y1, y2, y3, y4, left, right;
    var target = this.length * Math.min(Math.max(t, 0), 1);
    var length = this.vertices.length;
    var last = length - 1;

    var a = null;
    var b = null;

    for (var i = 0, l = this._lengths.length, sum = 0; i < l; i++) {

      if (sum + this._lengths[i] >= target) {

        if (this._closed) {
          ia = mod(i, length);
          ib = mod(i - 1, length);
          if (i === 0) {
            ia = ib;
            ib = i;
          }
        } else {
          ia = i;
          ib = Math.min(Math.max(i - 1, 0), last);
        }

        a = this.vertices[ia];
        b = this.vertices[ib];
        target -= sum;
        if (this._lengths[i] !== 0) {
          t = target / this._lengths[i];
        } else {
          t = 0;
        }

        break;

      }

      sum += this._lengths[i];

    }

    if (a === null || b === null) {
      return null;
    }

    if (!a) {
      return b;
    } else if (!b) {
      return a;
    }

    right = b.controls && b.controls.right;
    left = a.controls && a.controls.left;

    x1 = b.x;
    y1 = b.y;
    x2 = (right || b).x;
    y2 = (right || b).y;
    x3 = (left || a).x;
    y3 = (left || a).y;
    x4 = a.x;
    y4 = a.y;

    if (right && b.relative) {
      x2 += b.x;
      y2 += b.y;
    }

    if (left && a.relative) {
      x3 += a.x;
      y3 += a.y;
    }

    x = getComponentOnCubicBezier(t, x1, x2, x3, x4);
    y = getComponentOnCubicBezier(t, y1, y2, y3, y4);

    // Higher order points for control calculation.
    var t1x = lerp(x1, x2, t);
    var t1y = lerp(y1, y2, t);
    var t2x = lerp(x2, x3, t);
    var t2y = lerp(y2, y3, t);
    var t3x = lerp(x3, x4, t);
    var t3y = lerp(y3, y4, t);

    // Calculate the returned points control points.
    var brx = lerp(t1x, t2x, t);
    var bry = lerp(t1y, t2y, t);
    var alx = lerp(t2x, t3x, t);
    var aly = lerp(t2y, t3y, t);

    if (_.isObject(obj)) {

      obj.x = x;
      obj.y = y;

      if (!_.isObject(obj.controls)) {
        Anchor.AppendCurveProperties(obj);
      }

      obj.controls.left.x = brx;
      obj.controls.left.y = bry;
      obj.controls.right.x = alx;
      obj.controls.right.y = aly;

      if (!typeof obj.relative === 'boolean' || obj.relative) {
        obj.controls.left.x -= x;
        obj.controls.left.y -= y;
        obj.controls.right.x -= x;
        obj.controls.right.y -= y;
      }

      obj.t = t;

      return obj;

    }

    result = new Anchor(
      x, y, brx - x, bry - y, alx - x, aly - y,
      this._curved ? Commands.curve : Commands.line
    );

    result.t = t;

    return result;

  },

  /**
   * @name Two.Path#plot
   * @function
   * @description Based on closed / curved and sorting of vertices plot where all points should be and where the respective handles should be too.
   * @nota-bene While this method is public it is internally called by {@link Two.Path#_update} when `automatic = true`.
   */
  plot: function() {

    if (this.curved) {
      getCurveFromPoints(this._collection, this.closed);
      return this;
    }

    for (var i = 0; i < this._collection.length; i++) {
      this._collection[i].command = i === 0 ? Commands.move : Commands.line;
    }

    return this;

  },

  /**
   * @name Two.Path#subdivide
   * @function
   * @param {Integer} limit - How many times to recurse subdivisions.
   * @description Insert a {@link Two.Anchor} at the midpoint between every item in {@link Two.Path#vertices}.
   */
  subdivide: function(limit) {
    //TODO: DRYness (function below)
    this._update();

    var last = this.vertices.length - 1;
    var b = this.vertices[last];
    var closed = this._closed || this.vertices[last]._command === Commands.close;
    var points = [];
    _.each(this.vertices, function(a, i) {

      if (i <= 0 && !closed) {
        b = a;
        return;
      }

      if (a.command === Commands.move) {
        points.push(new Anchor(b.x, b.y));
        if (i > 0) {
          points[points.length - 1].command = Commands.line;
        }
        b = a;
        return;
      }

      var verts = getSubdivisions(a, b, limit);
      points = points.concat(verts);

      // Assign commands to all the verts
      _.each(verts, function(v, i) {
        if (i <= 0 && b.command === Commands.move) {
          v.command = Commands.move;
        } else {
          v.command = Commands.line;
        }
      });

      if (i >= last) {

        // TODO: Add check if the two vectors in question are the same values.
        if (this._closed && this._automatic) {

          b = a;

          verts = getSubdivisions(a, b, limit);
          points = points.concat(verts);

          // Assign commands to all the verts
          _.each(verts, function(v, i) {
            if (i <= 0 && b.command === Commands.move) {
              v.command = Commands.move;
            } else {
              v.command = Commands.line;
            }
          });

        } else if (closed) {
          points.push(new Anchor(a.x, a.y));
        }

        points[points.length - 1].command = closed
          ? Commands.close : Commands.line;

      }

      b = a;

    }, this);

    this._automatic = false;
    this._curved = false;
    this.vertices = points;

    return this;

  },

  /**
   * @name Two.Path#_updateLength
   * @function
   * @private
   * @param {Integer} [limit=] -
   * @param {Boolean} [silent=false] - If set to `true` then the path isn't updated before calculation. Useful for internal use.
   * @description Recalculate the {@link Two.Path#length} value.
   */
  _updateLength: function(limit, silent) {
    //TODO: DRYness (function above)
    if (!silent) {
      this._update();
    }

    var length = this.vertices.length;
    var last = length - 1;
    var b = this.vertices[last];
    var closed = false;//this._closed || this.vertices[last]._command === Commands.close;
    var sum = 0;

    if (typeof this._lengths === 'undefined') {
      this._lengths = [];
    }

    _.each(this.vertices, function(a, i) {

      if ((i <= 0 && !closed) || a.command === Commands.move) {
        b = a;
        this._lengths[i] = 0;
        return;
      }

      this._lengths[i] = getCurveLength$1(a, b, limit);
      sum += this._lengths[i];

      if (i >= last && closed) {

        b = this.vertices[(i + 1) % length];

        this._lengths[i + 1] = getCurveLength$1(a, b, limit);
        sum += this._lengths[i + 1];

      }

      b = a;

    }, this);

    this._length = sum;
    this._flagLength = false;

    return this;

  },

  /**
   * @name Two.Path#_update
   * @function
   * @private
   * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
   * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
   * @nota-bene Try not to call this method more than once a frame.
   */
  _update: function() {

    if (this._flagVertices) {

      if (this._automatic) {
        this.plot();
      }

      if (this._flagLength) {
        this._updateLength(undefined, true);
      }

      var l = this._collection.length;
      var closed = this._closed;

      var beginning = Math.min(this._beginning, this._ending);
      var ending = Math.max(this._beginning, this._ending);

      var bid = getIdByLength(this, beginning * this._length);
      var eid = getIdByLength(this, ending * this._length);

      var low = ceil(bid);
      var high = floor(eid);

      var left, right, prev, next, v;

      this._renderer.vertices.length = 0;

      for (var i = 0; i < l; i++) {

        if (this._renderer.collection.length <= i) {
          // Expected to be `relative` anchor points.
          this._renderer.collection.push(new Anchor());
        }

        if (i > high && !right) {

          v = this._renderer.collection[i];
          v.copy(this._collection[i]);
          this.getPointAt(ending, v);
          v.command = this._renderer.collection[i].command;
          this._renderer.vertices.push(v);

          right = v;
          prev = this._collection[i - 1];

          // Project control over the percentage `t`
          // of the in-between point
          if (prev && prev.controls) {

            v.controls.right.clear();

            this._renderer.collection[i - 1].controls.right
              .clear()
              .lerp(prev.controls.right, v.t);

          }

        } else if (i >= low && i <= high) {

          v = this._renderer.collection[i]
            .copy(this._collection[i]);
          this._renderer.vertices.push(v);

          if (i === high && contains(this, ending)) {
            right = v;
            if (!closed && right.controls) {
              right.controls.right.clear();
            }
          } else if (i === low && contains(this, beginning)) {
            left = v;
            left.command = Commands.move;
            if (!closed && left.controls) {
              left.controls.left.clear();
            }
          }

        }

      }

      // Prepend the trimmed point if necessary.
      if (low > 0 && !left) {

        i = low - 1;

        v = this._renderer.collection[i];
        v.copy(this._collection[i]);
        this.getPointAt(beginning, v);
        v.command = Commands.move;
        this._renderer.vertices.unshift(v);

        left = v;
        next = this._collection[i + 1];

        // Project control over the percentage `t`
        // of the in-between point
        if (next && next.controls) {

          v.controls.left.clear();

          this._renderer.collection[i + 1].controls.left
            .copy(next.controls.left)
            .lerp(Vector.zero, v.t);

        }

      }

    }

    Shape.prototype._update.apply(this, arguments);

    return this;

  },

  /**
   * @name Two.Path#flagReset
   * @function
   * @private
   * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
   */
  flagReset: function() {

    this._flagVertices =  this._flagFill =  this._flagStroke =
        this._flagLinewidth = this._flagOpacity = this._flagVisible =
        this._flagCap = this._flagJoin = this._flagMiter =
        this._flagClip = false;

    Shape.prototype.flagReset.call(this);

    return this;

  }

});

Path.MakeObservable(Path.prototype);

  // Utility functions

function contains(path, t) {

  if (t === 0 || t === 1) {
    return true;
  }

  var length = path._length;
  var target = length * t;
  var elapsed = 0;

  for (var i = 0; i < path._lengths.length; i++) {
    var dist = path._lengths[i];
    if (elapsed >= target) {
      return target - elapsed >= 0;
    }
    elapsed += dist;
  }

  return false;

}

/**
 * @protected
 * @param {Two.Path} path - The path to analyze against.
 * @param {Number} target - The target length at which to find an anchor.
 * @returns {Integer}
 * @description Return the id of an anchor based on a target length.
 */
function getIdByLength(path, target) {

  var total = path._length;

  if (target <= 0) {
    return 0;
  } else if (target >= total) {
    return path._lengths.length - 1;
  }

  for (var i = 0, sum = 0; i < path._lengths.length; i++) {

    if (sum + path._lengths[i] >= target) {
      target -= sum;
      return Math.max(i - 1, 0) + target / path._lengths[i];
    }

    sum += path._lengths[i];

  }

  return - 1;

}

function getCurveLength$1(a, b, limit) {
  // TODO: DRYness
  var x1, x2, x3, x4, y1, y2, y3, y4;

  var right = b.controls && b.controls.right;
  var left = a.controls && a.controls.left;

  x1 = b.x;
  y1 = b.y;
  x2 = (right || b).x;
  y2 = (right || b).y;
  x3 = (left || a).x;
  y3 = (left || a).y;
  x4 = a.x;
  y4 = a.y;

  if (right && b._relative) {
    x2 += b.x;
    y2 += b.y;
  }

  if (left && a._relative) {
    x3 += a.x;
    y3 += a.y;
  }

  return getCurveLength(x1, y1, x2, y2, x3, y3, x4, y4, limit);

}

function getSubdivisions(a, b, limit) {
  // TODO: DRYness
  var x1, x2, x3, x4, y1, y2, y3, y4;

  var right = b.controls && b.controls.right;
  var left = a.controls && a.controls.left;

  x1 = b.x;
  y1 = b.y;
  x2 = (right || b).x;
  y2 = (right || b).y;
  x3 = (left || a).x;
  y3 = (left || a).y;
  x4 = a.x;
  y4 = a.y;

  if (right && b._relative) {
    x2 += b.x;
    y2 += b.y;
  }

  if (left && a._relative) {
    x3 += a.x;
    y3 += a.y;
  }

  return subdivide(x1, y1, x2, y2, x3, y3, x4, y4, limit);

}

var TWO_PI$1 = Math.PI * 2, HALF_PI$1 = Math.PI / 2;
var cos$2 = Math.cos, sin$2 = Math.sin;

/**
 * @name Two.Circle
 * @class
 * @extends Two.Path
 * @param {Number} [x=0] - The x position of the circle.
 * @param {Number} [y=0] - The y position of the circle.
 * @param {Number} radius - The radius value of the circle.
 * @param {Number} [resolution=4] - The number of vertices used to construct the circle.
 */
var Circle = function(ox, oy, r, resolution) {

  // At least 2 vertices are required for proper circlage
  var amount = resolution ? Math.max(resolution, 2) : 4;

  var points = [];
  for (var i = 0; i < amount; i++) {
    points.push(new Anchor());
  }

  Path.call(this, points, true, true, true);

  /**
   * @name Two.Circle#radius
   * @property {Number} - The size of the radius of the circle.
   */
  this.radius = r;

  this._update();

  if (typeof ox === 'number') {
    this.translation.x = ox;
  }
  if (typeof oy === 'number') {
    this.translation.y = oy;
  }

};

_.extend(Circle, {

  /**
   * @name Two.Circle.Properties
   * @property {String[]} - A list of properties that are on every {@link Two.Circle}.
   */
  Properties: ['radius'],

  /**
   * @name Two.Circle.MakeObservable
   * @function
   * @param {Object} object - The object to make observable.
   * @description Convenience function to apply observable qualities of a {@link Two.Circle} to any object. Handy if you'd like to extend the {@link Two.Circle} class on a custom class.
   */
  MakeObservable: function(obj) {

    Path.MakeObservable(obj);
    _.each(Circle.Properties, defineGetterSetter, obj);

  }

});

_.extend(Circle.prototype, Path.prototype, {

  /**
   * @name Two.Circle#_flagRadius
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Circle#radius} needs updating.
   */
  _flagRadius: false,

  /**
   * @name Two.Circle#_radius
   * @private
   * @see {@link Two.Circle#radius}
   */
  _radius: 0,

  constructor: Circle,

  /**
   * @name Two.Circle#_update
   * @function
   * @private
   * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
   * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
   * @nota-bene Try not to call this method more than once a frame.
   */
  _update: function() {

    if (this._flagRadius) {
      // Coefficient for approximating circular arcs with Bezier curves
      var c = (4 / 3) * Math.tan(Math.PI / (this.vertices.length * 2));

      var radius = this._radius;
      var rc = radius * c;

      for (var i = 0, numVertices = this.vertices.length; i < numVertices; i++) {
        var pct = i / numVertices;
        var theta = pct * TWO_PI$1;

        var x = radius * cos$2(theta);
        var y = radius * sin$2(theta);

        var lx = rc * cos$2(theta - HALF_PI$1);
        var ly = rc * sin$2(theta - HALF_PI$1);

        var rx = rc * cos$2(theta + HALF_PI$1);
        var ry = rc * sin$2(theta + HALF_PI$1);

        var v = this.vertices[i];

        v.command = Commands.curve;
        v.set(x, y);
        v.controls.left.set(lx, ly);
        v.controls.right.set(rx, ry);
      }
    }

    Path.prototype._update.call(this);
    return this;

  },

  /**
   * @name Two.Circle#flagReset
   * @function
   * @private
   * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
   */
  flagReset: function() {

    this._flagRadius = false;

    Path.prototype.flagReset.call(this);
    return this;

  },

  /**
   * @name Two.Circle#clone
   * @function
   * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
   * @returns {Two.Circle}
   * @description Create a new instance of {@link Two.Circle} with the same properties of the current path.
   */
  clone: function(parent) {

    var clone = new Circle(0, 0, this.radius, this.vertices.length);

    clone.translation.copy(this.translation);
    clone.rotation = this.rotation;
    clone.scale = this.scale;

    if (this.matrix.manual) {
      clone.matrix.copy(this.matrix);
    }

    _.each(Path.Properties, function(k) {
      clone[k] = this[k];
    }, this);

    if (parent) {
      parent.add(clone);
    }

    return clone;

  },

  /**
   * @name Two.Circle#toObject
   * @function
   * @returns {Object}
   * @description Return a JSON compatible plain object that represents the path.
   */
  toObject: function() {

    var object = Path.prototype.toObject.call(this);

    _.each(Circle.Properties, function(property) {
      object[property] = this[property];
    }, this);

    return object;

  }

});

Circle.MakeObservable(Circle.prototype);

var TWO_PI$2 = Math.PI * 2, HALF_PI$2 = Math.PI / 2;
var cos$3 = Math.cos, sin$3 = Math.sin;

/**
 * @name Two.Ellipse
 * @class
 * @extends Two.Path
 * @param {Number} [x=0] - The x position of the ellipse.
 * @param {Number} [y=0] - The y position of the ellipse.
 * @param {Number} rx - The radius value of the ellipse in the x direction.
 * @param {Number} ry - The radius value of the ellipse in the y direction.
 * @param {Number} [resolution=4] - The number of vertices used to construct the ellipse.
 */
var Ellipse = function(ox, oy, rx, ry, resolution) {

  if (typeof ry !== 'number') {
    ry = rx;
  }

  // At least 2 vertices are required for proper circlage
  var amount = resolution ? Math.max(resolution, 2) : 4;

  var points = [];
  for (var i = 0; i < amount; i++) {
    points.push(new Anchor());
  }

  Path.call(this, points, true, true, true);

  /**
   * @name Two.Ellipse#width
   * @property {Number} - The width of the ellipse.
   */
  this.width = rx * 2;
  /**
   * @name Two.Ellipse#height
   * @property {Number} - The height of the ellipse.
   */
  this.height = ry * 2;

  this._update();
  this.translation.set(ox, oy);

};

_.extend(Ellipse, {

  /**
   * @name Two.Ellipse.Properties
   * @property {String[]} - A list of properties that are on every {@link Two.Ellipse}.
   */
  Properties: ['width', 'height'],

  /**
   * @name Two.Ellipse.MakeObservable
   * @function
   * @param {Object} object - The object to make observable.
   * @description Convenience function to apply observable qualities of a {@link Two.Ellipse} to any object. Handy if you'd like to extend the {@link Two.Ellipse} class on a custom class.
   */
  MakeObservable: function(obj) {

    Path.MakeObservable(obj);
    _.each(Ellipse.Properties, defineGetterSetter, obj);

  }

});

_.extend(Ellipse.prototype, Path.prototype, {

  /**
   * @name Two.Ellipse#_flagWidth
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Ellipse#width} needs updating.
   */
  _flagWidth: false,
  /**
   * @name Two.Ellipse#_flagHeight
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Ellipse#height} needs updating.
   */
  _flagHeight: false,

  /**
   * @name Two.Polygon#_width
   * @private
   * @see {@link Two.Ellipse#width}
   */
  _width: 0,
  /**
   * @name Two.Polygon#_height
   * @private
   * @see {@link Two.Ellipse#height}
   */
  _height: 0,

  constructor: Ellipse,

  /**
   * @name Two.Ellipse#_update
   * @function
   * @private
   * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
   * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
   * @nota-bene Try not to call this method more than once a frame.
   */
  _update: function() {

    if (this._flagWidth || this._flagHeight) {
      // Coefficient for approximating circular arcs with Bezier curves
      var c = (4 / 3) * Math.tan(Math.PI / (this.vertices.length * 2));
      var radiusX = this._width / 2;
      var radiusY = this._height / 2;

      for (var i = 0, numVertices = this.vertices.length; i < numVertices; i++) {
        var pct = i / numVertices;
        var theta = pct * TWO_PI$2;

        var x = radiusX * cos$3(theta);
        var y = radiusY * sin$3(theta);

        var lx = radiusX * c * cos$3(theta - HALF_PI$2);
        var ly = radiusY * c * sin$3(theta - HALF_PI$2);

        var rx = radiusX * c * cos$3(theta + HALF_PI$2);
        var ry = radiusY * c * sin$3(theta + HALF_PI$2);

        var v = this.vertices[i];

        v.command = Commands.curve;
        v.set(x, y);
        v.controls.left.set(lx, ly);
        v.controls.right.set(rx, ry);
      }
    }

    Path.prototype._update.call(this);
    return this;

  },

  /**
   * @name Two.Ellipse#flagReset
   * @function
   * @private
   * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
   */
  flagReset: function() {

    this._flagWidth = this._flagHeight = false;

    Path.prototype.flagReset.call(this);
    return this;

  },

  /**
   * @name Two.Ellipse#clone
   * @function
   * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
   * @returns {Two.Polygon}
   * @description Create a new instance of {@link Two.Polygon} with the same properties of the current path.
   */
  clone: function(parent) {

    var rx = this.width / 2;
    var ry = this.height / 2;
    var resolution = this.vertices.length;
    var clone = new Ellipse(0, 0, rx, ry, resolution);

    clone.translation.copy(this.translation);
    clone.rotation = this.rotation;
    clone.scale = this.scale;

    if (this.matrix.manual) {
      clone.matrix.copy(this.matrix);
    }

    _.each(Path.Properties, function(k) {
      clone[k] = this[k];
    }, this);

    if (parent) {
      parent.add(clone);
    }

    return clone;

  },

  /**
   * @name Two.Ellipse#toObject
   * @function
   * @returns {Object}
   * @description Return a JSON compatible plain object that represents the path.
   */
  toObject: function() {

    var object = Path.prototype.toObject.call(this);

    _.each(Ellipse.Properties, function(property) {
      object[property] = this[property];
    }, this);

    return object;

  }

});

Ellipse.MakeObservable(Ellipse.prototype);

/**
 * @name Two.Line
 * @class
 * @extends Two.Path
 * @param {Number} [x1=0] - The x position of the first vertex on the line.
 * @param {Number} [y1=0] - The y position of the first vertex on the line.
 * @param {Number} [x2=0] - The x position of the second vertex on the line.
 * @param {Number} [y2=0] - The y position of the second vertex on the line.
 */
var Line = function(x1, y1, x2, y2) {

  Path.call(this, [
      new Anchor(x1, y1),
      new Anchor(x2, y2)
  ]);

  this.vertices[0].command = Commands.move;
  this.vertices[1].command = Commands.line;

  this.automatic = false;

};

_.extend(Line.prototype, Path.prototype);
Line.prototype.constructor = Line;

Path.MakeObservable(Line.prototype);

/**
 * @name Two.Rectangle
 * @class
 * @extends Two.Path
 * @param {Number} [x=0] - The x position of the rectangle.
 * @param {Number} [y=0] - The y position of the rectangle.
 * @param {Number} width - The width value of the rectangle.
 * @param {Number} height - The width value of the rectangle.
 */
var Rectangle = function(x, y, width, height) {

  Path.call(this, [
    new Anchor(),
    new Anchor(),
    new Anchor(),
    new Anchor()
    // new Anchor() // TODO: Figure out how to handle this for `beginning` / `ending` animations
  ], true, false, true);

  /**
   * @name Two.Rectangle#width
   * @property {Number} - The size of the width of the rectangle.
   */
  this.width = width;
  /**
   * @name Two.Rectangle#height
   * @property {Number} - The size of the height of the rectangle.
   */
  this.height = height;

  /**
   * @name Two.Rectangle#origin
   * @property {Number} - A two-component vector describing the origin offset to draw the rectangle. Default is `0, 0`.
   */
  this.origin = new Vector();
  this.translation.set(x, y);

  this._update();

};

_.extend(Rectangle, {

  /**
   * @name Two.Rectangle.Properties
   * @property {String[]} - A list of properties that are on every {@link Two.Rectangle}.
   */
  Properties: ['width', 'height'],

  /**
   * @name Two.Rectangle.MakeObservable
   * @function
   * @param {Object} object - The object to make observable.
   * @description Convenience function to apply observable qualities of a {@link Two.Rectangle} to any object. Handy if you'd like to extend the {@link Two.Rectangle} class on a custom class.
   */
  MakeObservable: function(object) {

    Path.MakeObservable(object);
    _.each(Rectangle.Properties, defineGetterSetter, object);

    Object.defineProperty(object, 'origin', {
      enumerable: true,
      get: function() {
        return this._origin;
      },
      set: function(v) {
        if (this._origin) {
          this._origin.unbind(Events.Types.change, this._renderer.flagVertices);
        }
        this._origin = v;
        this._origin.bind(Events.Types.change, this._renderer.flagVertices);
        this._renderer.flagVertices();
      }
    });

  }

});

_.extend(Rectangle.prototype, Path.prototype, {

  /**
   * @name Two.Rectangle#_flagWidth
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Rectangle#width} needs updating.
   */
  _flagWidth: 0,
  /**
   * @name Two.Rectangle#_flagHeight
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Rectangle#height} needs updating.
   */
  _flagHeight: 0,

  /**
   * @name Two.Rectangle#_width
   * @private
   * @see {@link Two.Rectangle#width}
   */
  _width: 0,
  /**
   * @name Two.Rectangle#_height
   * @private
   * @see {@link Two.Rectangle#height}
   */
  _height: 0,

  _origin: null,

  constructor: Rectangle,

  /**
   * @name Two.Rectangle#_update
   * @function
   * @private
   * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
   * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
   * @nota-bene Try not to call this method more than once a frame.
   */
  _update: function() {

    if (this._flagWidth || this._flagHeight) {

      var xr = this._width / 2;
      var yr = this._height / 2;

      this.vertices[0].set(-xr, -yr).add(this._origin).command = Commands.move;
      this.vertices[1].set(xr, -yr).add(this._origin).command = Commands.line;
      this.vertices[2].set(xr, yr).add(this._origin).command = Commands.line;
      this.vertices[3].set(-xr, yr).add(this._origin).command = Commands.line;
      // FYI: Two.Sprite and Two.ImageSequence have 4 verts
      if (this.vertices[4]) {
        this.vertices[4].set(-xr, -yr).add(this._origin).command = Commands.line;
      }

    }

    Path.prototype._update.call(this);

    return this;

  },

  /**
   * @name Two.Rectangle#flagReset
   * @function
   * @private
   * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
   */
  flagReset: function() {

    this._flagWidth = this._flagHeight = false;
    Path.prototype.flagReset.call(this);

    return this;

  },

  /**
   * @name Two.Rectangle#clone
   * @function
   * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
   * @returns {Two.Rectangle}
   * @description Create a new instance of {@link Two.Rectangle} with the same properties of the current path.
   */
  clone: function(parent) {

    var clone = new Rectangle(0, 0, this.width, this.height);

    clone.translation.copy(this.translation);
    clone.rotation = this.rotation;
    clone.scale = this.scale;

    if (this.matrix.manual) {
      clone.matrix.copy(this.matrix);
    }

    _.each(Path.Properties, function(k) {
      clone[k] = this[k];
    }, this);

    if (parent) {
      parent.add(clone);
    }

    return clone;

  },

  /**
   * @name Two.Rectangle#toObject
   * @function
   * @returns {Object}
   * @description Return a JSON compatible plain object that represents the path.
   */
  toObject: function() {

    var object = Path.prototype.toObject.call(this);
    object.width = this.width;
    object.height = this.height;
    object.origin = this.origin.toObject();
    return object;

  }

});

Rectangle.MakeObservable(Rectangle.prototype);

/**
 * @name Two.RoundedRectangle
 * @class
 * @extends Two.Path
 * @param {Number} [x=0] - The x position of the rounded rectangle.
 * @param {Number} [y=0] - The y position of the rounded rectangle.
 * @param {Number} width - The width value of the rounded rectangle.
 * @param {Number} height - The width value of the rounded rectangle.
 * @param {Number} radius - The radius value of the rounded rectangle.
 * @param {Number} [resolution=12] - The number of vertices used to construct the rounded rectangle.
 */
var RoundedRectangle = function(ox, oy, width, height, radius) {

  if (typeof radius === 'undefined') {
    radius = Math.floor(Math.min(width, height) / 12);
  }

  var amount = 10;

  var points = [];
  for (var i = 0; i < amount; i++) {
    points.push(
      new Anchor(0, 0, 0, 0, 0, 0,
        i === 0 ? Commands.move : Commands.curve)
    );
  }

  // points[points.length - 1].command = Two.Commands.close;

  Path.call(this, points);

  this.closed = true;
  this.automatic = false;

  this._renderer.flagRadius = RoundedRectangle.FlagRadius.bind(this);

  /**
   * @name Two.RoundedRectangle#width
   * @property {Number} - The width of the rounded rectangle.
   */
  this.width = width;
  /**
   * @name Two.RoundedRectangle#height
   * @property {Number} - The height of the rounded rectangle.
   */
  this.height = height;
  /**
   * @name Two.RoundedRectangle#radius
   * @property {Number} - The size of the radius of the rounded rectangle.
   */
  this.radius = radius;

  this._update();
  this.translation.set(ox, oy);

};

_.extend(RoundedRectangle, {

  /**
   * @name Two.RoundedRectangle.Properties
   * @property {String[]} - A list of properties that are on every {@link Two.RoundedRectangle}.
   */
  Properties: ['width', 'height'],

  /**
   * @name Two.RoundedRectangle.FlagRadius
   * @property {Function} - A convenience function to trigger the flag for radius changing.
   */
  FlagRadius: function() {
    this._flagRadius = true;
  },

  /**
   * @name Two.RoundedRectangle.MakeObservable
   * @function
   * @param {Object} object - The object to make observable.
   * @description Convenience function to apply observable qualities of a {@link Two.RoundedRectangle} to any object. Handy if you'd like to extend the {@link Two.RoundedRectangle} class on a custom class.
   */
  MakeObservable: function(object) {

    Path.MakeObservable(object);
    _.each(RoundedRectangle.Properties, defineGetterSetter, object);

    Object.defineProperty(object, 'radius', {
      enumerable: true,
      get: function() {
        return this._radius;
      },
      set: function(v) {

        if (this._radius instanceof Vector) {
          this._radius.unbind(Events.Types.change, this._renderer.flagRadius);
        }

        this._radius = v;

        if (this._radius instanceof Vector) {
          this._radius.bind(Events.Types.change, this._renderer.flagRadius);
        }

        this._flagRadius = true;

      }
    });

  }

});

_.extend(RoundedRectangle.prototype, Path.prototype, {

  /**
   * @name Two.RoundedRectangle#_flagWidth
   * @private
   * @property {Boolean} - Determines whether the {@link Two.RoundedRectangle#width} needs updating.
   */
  _flagWidth: false,
  /**
   * @name Two.RoundedRectangle#_flagHeight
   * @private
   * @property {Boolean} - Determines whether the {@link Two.RoundedRectangle#height} needs updating.
   */
  _flagHeight: false,
  /**
   * @name Two.RoundedRectangle#_flagRadius
   * @private
   * @property {Boolean} - Determines whether the {@link Two.RoundedRectangle#radius} needs updating.
   */
  _flagRadius: false,

  /**
   * @name Two.RoundedRectangle#_width
   * @private
   * @see {@link Two.RoundedRectangle#width}
   */
  _width: 0,
  /**
   * @name Two.RoundedRectangle#_height
   * @private
   * @see {@link Two.RoundedRectangle#height}
   */
  _height: 0,
  /**
   * @name Two.RoundedRectangle#_radius
   * @private
   * @see {@link Two.RoundedRectangle#radius}
   */
  _radius: 0,

  constructor: RoundedRectangle,

  /**
   * @name Two.RoundedRectangle#_update
   * @function
   * @private
   * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
   * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
   * @nota-bene Try not to call this method more than once a frame.
   */
  _update: function() {

    if (this._flagWidth || this._flagHeight || this._flagRadius) {

      var width = this._width;
      var height = this._height;

      var rx, ry;

      if (this._radius instanceof Vector) {
        rx = this._radius.x;
        ry = this._radius.y;
      } else {
        rx = this._radius;
        ry = this._radius;
      }

      var v;
      var w = width / 2;
      var h = height / 2;

      v = this.vertices[0];
      v.x = - (w - rx);
      v.y = - h;

      // Upper Right Corner

      v = this.vertices[1];
      v.x = (w - rx);
      v.y = - h;
      v.controls.left.clear();
      v.controls.right.x = rx;
      v.controls.right.y = 0;

      v = this.vertices[2];
      v.x = w;
      v.y = - (h - ry);
      v.controls.right.clear();
      v.controls.left.clear();

      // Bottom Right Corner

      v = this.vertices[3];
      v.x = w;
      v.y = (h - ry);
      v.controls.left.clear();
      v.controls.right.x = 0;
      v.controls.right.y = ry;

      v = this.vertices[4];
      v.x = (w - rx);
      v.y = h;
      v.controls.right.clear();
      v.controls.left.clear();

      // Bottom Left Corner

      v = this.vertices[5];
      v.x = - (w - rx);
      v.y = h;
      v.controls.left.clear();
      v.controls.right.x = - rx;
      v.controls.right.y = 0;

      v = this.vertices[6];
      v.x = - w;
      v.y = (h - ry);
      v.controls.left.clear();
      v.controls.right.clear();

      // Upper Left Corner

      v = this.vertices[7];
      v.x = - w;
      v.y = - (h - ry);
      v.controls.left.clear();
      v.controls.right.x = 0;
      v.controls.right.y = - ry;

      v = this.vertices[8];
      v.x = - (w - rx);
      v.y = - h;
      v.controls.left.clear();
      v.controls.right.clear();

      v = this.vertices[9];
      v.copy(this.vertices[8]);

    }

    Path.prototype._update.call(this);

    return this;

  },

  /**
   * @name Two.RoundedRectangle#flagReset
   * @function
   * @private
   * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
   */
  flagReset: function() {

    this._flagWidth = this._flagHeight = this._flagRadius = false;
    Path.prototype.flagReset.call(this);

    return this;

  },

  /**
   * @name Two.RoundedRectangle#clone
   * @function
   * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
   * @returns {Two.RoundedRectangle}
   * @description Create a new instance of {@link Two.RoundedRectangle} with the same properties of the current path.
   */
  clone: function(parent) {

    var width = this.width;
    var height = this.height;
    var radius = this.radius;

    var clone = new RoundedRectangle(0, 0, width, height, radius);

    clone.translation.copy(this.translation);
    clone.rotation = this.rotation;
    clone.scale = this.scale;

    if (this.matrix.manual) {
      clone.matrix.copy(this.matrix);
    }

    _.each(Path.Properties, function(k) {
      clone[k] = this[k];
    }, this);

    if (parent) {
      parent.add(clone);
    }

    return clone;

  },

  /**
   * @name Two.RoundedRectangle#toObject
   * @function
   * @returns {Object}
   * @description Return a JSON compatible plain object that represents the path.
   */
  toObject: function() {

    var object = Path.prototype.toObject.call(this);

    _.each(RoundedRectangle.Properties, function(property) {
      object[property] = this[property];
    }, this);

    object.radius = typeof this.radius === 'number'
      ? this.radius : this.radius.toObject();

    return object;

  }

});

RoundedRectangle.MakeObservable(RoundedRectangle.prototype);

/**
 * @name Two.Text
 * @class
 * @extends Two.Shape
 * @param {String} message - The String to be rendered to the scene.
 * @param {Number} [x=0] - The position in the x direction for the object.
 * @param {Number} [y=0] - The position in the y direction for the object.
 * @param {Object} [styles] - An object where styles are applied. Attribute must exist in Two.Text.Properties.
 * @description This is a primitive class for creating drawable text that can be added to the scenegraph.
 */
var Text = function(message, x, y, styles) {

  Shape.call(this);

  this._renderer.type = 'text';
  this._renderer.flagFill = Text.FlagFill.bind(this);
  this._renderer.flagStroke = Text.FlagStroke.bind(this);

  this.value = message;

  if (typeof x === 'number') {
      this.translation.x = x;
  }
  if (typeof y === 'number') {
      this.translation.y = y;
  }

  /**
   * @name Two.Text#dashes
   * @property {Number[]} - Array of numbers. Odd indices represent dash length. Even indices represent dash space.
   * @description A list of numbers that represent the repeated dash length and dash space applied to the stroke of the text.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-dasharray} for more information on the SVG stroke-dasharray attribute.
   */
  this.dashes = [];

  /**
   * @name Two.Text#dashes#offset
   * @property {Number} - A number in pixels to offset {@link Two.Text#dashes} display.
   */
  this.dashes.offset = 0;

  if (!_.isObject(styles)) {
    return this;
  }

  _.each(Text.Properties, function(property) {

    if (property in styles) {
      this[property] = styles[property];
    }

  }, this);

};

_.extend(Text, {

  /**
   * @name Two.Text.Ratio
   * @property {Number} - Approximate aspect ratio of a typeface's character width to height.
   */
  Ratio: 0.6,

  /**
   * @name Two.Text.Properties
   * @property {String[]} - A list of properties that are on every {@link Two.Text}.
   */
  Properties: [
    'value', 'family', 'size', 'leading', 'alignment', 'linewidth', 'style',
    'weight', 'decoration', 'baseline', 'opacity', 'visible', 'className',
    'fill', 'stroke',
  ],

  /**
   * @name Two.Text.FlagFill
   * @function
   * @description Cached method to let renderers know the fill property have been updated on a {@link Two.Text}.
   */
  FlagFill: function() {
    this._flagFill = true;
  },

  /**
   * @name Two.Text.FlagStroke
   * @function
   * @description Cached method to let renderers know the stroke property have been updated on a {@link Two.Text}.
   */
  FlagStroke: function() {
    this._flagStroke = true;
  },

  MakeObservable: function(object) {

    Shape.MakeObservable(object);

    _.each(Text.Properties.slice(0, 12), defineGetterSetter, object);

    Object.defineProperty(object, 'fill', {
      enumerable: true,
      get: function() {
        return this._fill;
      },
      set: function(f) {

        if (this._fill instanceof Gradient
          || this._fill instanceof LinearGradient
          || this._fill instanceof RadialGradient
          || this._fill instanceof Texture) {
          this._fill.unbind(Events.Types.change, this._renderer.flagFill);
        }

        this._fill = f;
        this._flagFill = true;

        if (this._fill instanceof Gradient
          || this._fill instanceof LinearGradient
          || this._fill instanceof RadialGradient
          || this._fill instanceof Texture) {
          this._fill.bind(Events.Types.change, this._renderer.flagFill);
        }

      }
    });

    Object.defineProperty(object, 'stroke', {
      enumerable: true,
      get: function() {
        return this._stroke;
      },
      set: function(f) {

        if (this._stroke instanceof Gradient
          || this._stroke instanceof LinearGradient
          || this._stroke instanceof RadialGradient
          || this._stroke instanceof Texture) {
          this._stroke.unbind(Events.Types.change, this._renderer.flagStroke);
        }

        this._stroke = f;
        this._flagStroke = true;

        if (this._stroke instanceof Gradient
          || this._stroke instanceof LinearGradient
          || this._stroke instanceof RadialGradient
          || this._stroke instanceof Texture) {
          this._stroke.bind(Events.Types.change, this._renderer.flagStroke);
        }

      }
    });

    Object.defineProperty(object, 'clip', {
      enumerable: true,
      get: function() {
        return this._clip;
      },
      set: function(v) {
        this._clip = v;
        this._flagClip = true;
      }
    });

    Object.defineProperty(object, 'dashes', {
      enumerable: true,
      get: function() {
        return this._dashes;
      },
      set: function(v) {
        if (typeof v.offset !== 'number') {
          v.offset = this._dashes.offset || 0;
        }
        this._dashes = v;
      }
    });

  }

});

_.extend(Text.prototype, Shape.prototype, {

  // Flags
  // http://en.wikipedia.org/wiki/Flag

  /**
   * @name Two.Text#_flagValue
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Text#value} need updating.
   */
  _flagValue: true,

  /**
   * @name Two.Text#_flagFamily
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Text#family} need updating.
   */
  _flagFamily: true,

  /**
   * @name Two.Text#_flagSize
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Text#size} need updating.
   */
  _flagSize: true,

  /**
   * @name Two.Text#_flagLeading
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Text#leading} need updating.
   */
  _flagLeading: true,

  /**
   * @name Two.Text#_flagAlignment
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Text#alignment} need updating.
   */
  _flagAlignment: true,

  /**
   * @name Two.Text#_flagBaseline
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Text#baseline} need updating.
   */
  _flagBaseline: true,

  /**
   * @name Two.Text#_flagStyle
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Text#style} need updating.
   */
  _flagStyle: true,

  /**
   * @name Two.Text#_flagWeight
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Text#weight} need updating.
   */
  _flagWeight: true,

  /**
   * @name Two.Text#_flagDecoration
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Text#decoration} need updating.
   */
  _flagDecoration: true,

  /**
   * @name Two.Text#_flagFill
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Text#fill} need updating.
   */
  _flagFill: true,

  /**
   * @name Two.Text#_flagStroke
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Text#stroke} need updating.
   */
  _flagStroke: true,

  /**
   * @name Two.Text#_flagLinewidth
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Text#linewidth} need updating.
   */
  _flagLinewidth: true,

  /**
   * @name Two.Text#_flagOpacity
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Text#opacity} need updating.
   */
  _flagOpacity: true,

  /**
   * @name Two.Text#_flagClassName
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Text#className} need updating.
   */
  _flagClassName: true,

  /**
   * @name Two.Text#_flagVisible
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Text#visible} need updating.
   */
  _flagVisible: true,

  /**
   * @name Two.Text#_flagClip
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Text#clip} need updating.
   */
  _flagClip: false,

  // Underlying Properties

  /**
   * @name Two.Text#value
   * @property {String} - The characters to be rendered to the the screen. Referred to in the documentation sometimes as the `message`.
   */
  _value: '',

  /**
   * @name Two.Text#family
   * @property {String} - The font family Two.js should attempt to regsiter for rendering. The default value is `'sans-serif'`. Comma separated font names can be supplied as a "stack", similar to the CSS implementation of `font-family`.
   */
  _family: 'sans-serif',

  /**
   * @name Two.Text#size
   * @property {Number} - The font size in Two.js point space. Defaults to `13`.
   */
  _size: 13,

  /**
   * @name Two.Text#leading
   * @property {Number} - The height between lines measured from base to base in Two.js point space. Defaults to `17`.
   */
  _leading: 17,

  /**
   * @name Two.Text#alignment
   * @property {String} - Alignment of text in relation to {@link Two.Text#translation}'s coordinates. Possible values include `'left'`, `'center'`, `'right'`. Defaults to `'center'`.
   */
  _alignment: 'center',

  /**
   * @name Two.Text#baseline
   * @property {String} - The vertical aligment of the text in relation to {@link Two.Text#translation}'s coordinates. Possible values include `'top'`, `'middle'`, `'bottom'`, and `'baseline'`. Defaults to `'baseline'`.
   */
  _baseline: 'middle',

  /**
   * @name Two.Text#style
   * @property {String} - The font's style. Possible values include '`normal`', `'italic'`. Defaults to `'normal'`.
   */
  _style: 'normal',

  /**
   * @name Two.Text#weight
   * @property {Number} - A number at intervals of 100 to describe the font's weight. This compatibility varies with the typeface's variant weights. Larger values are bolder. Smaller values are thinner. Defaults to `'500'`.
   */
  _weight: 500,

  /**
   * @name Two.Text#decoration
   * @property {String} - String to delineate whether text should be decorated with for instance an `'underline'`. Defaults to `'none'`.
   */
  _decoration: 'none',

  /**
   * @name Two.Text#fill
   * @property {(CssColor|Two.Gradient|Two.Texture)} - The value of what the text object should be filled in with.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value} for more information on CSS Colors.
   */
  _fill: '#000',

  /**
   * @name Two.Text#stroke
   * @property {(CssColor|Two.Gradient|Two.Texture)} - The value of what the text object should be filled in with.
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/color_value} for more information on CSS Colors.
   */
  _stroke: 'transparent',

  /**
   * @name Two.Text#linewidth
   * @property {Number} - The thickness in pixels of the stroke.
   */
  _linewidth: 1,

  /**
   * @name Two.Text#opacity
   * @property {Number} - The opaqueness of the text object.
   * @nota-bene Can be used in conjunction with CSS Colors that have an alpha value.
   */
  _opacity: 1,

  /**
   * @name Two.Text#className
   * @property {String} - A class to be applied to the element to be compatible with CSS styling. Only available for the {@link Two.SvgRenderer}.
   */
  _className: '',

  /**
   * @name Two.Text#visible
   * @property {Boolean} - Display the text object or not.
   * @nota-bene For {@link Two.CanvasRenderer} and {@link Two.WebGLRenderer} when set to false all updating is disabled improving performance dramatically with many objects in the scene.
   */
  _visible: true,

  /**
   * @name Two.Text#clip
   * @property {Two.Shape} - Object to define clipping area.
   * @nota-bene This property is currently not working becuase of SVG spec issues found here {@link https://code.google.com/p/chromium/issues/detail?id=370951}.
   */
  _clip: false,

  /**
   * @name Two.Text#_dashes
   * @private
   * @see {@link Two.Text#dashes}
   */
  _dashes: [],

  constructor: Text,

  /**
   * @name Two.Text#remove
   * @function
   * @description Remove self from the scene / parent.
   */
  remove: function() {

    if (!this.parent) {
      return this;
    }

    this.parent.remove(this);

    return this;

  },

  /**
   * @name Two.Text#clone
   * @function
   * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
   * @returns {Two.Text}
   * @description Create a new instance of {@link Two.Text} with the same properties of the current text object.
   */
  clone: function(parent) {

    var clone = new Text(this.value);
    clone.translation.copy(this.translation);
    clone.rotation = this.rotation;
    clone.scale = this.scale;

    _.each(Text.Properties, function(property) {
      clone[property] = this[property];
    }, this);

    if (this.matrix.manual) {
      clone.matrix.copy(this.matrix);
    }

    if (parent) {
      parent.add(clone);
    }

    return clone._update();

  },

  /**
   * @name Two.Text#toObject
   * @function
   * @returns {Object}
   * @description Return a JSON compatible plain object that represents the text object.
   */
  toObject: function() {

    var result = {
      translation: this.translation.toObject(),
      rotation: this.rotation,
      scale: this.scale
    };

    if (this.matrix.manual) {
      result.matrix = this.matrix.toObject();
    }

    _.each(Text.Properties, function(property) {
      result[property] = this[property];
    }, this);

    return result;

  },

  /**
   * @name Two.Text#noFill
   * @function
   * @description Short hand method to set fill to `transparent`.
   */
  noFill: function() {
    this.fill = 'transparent';
    return this;
  },

  /**
   * @name Two.Text#noStroke
   * @function
   * @description Short hand method to set stroke to `transparent`.
   */
  noStroke: function() {
    this.stroke = undefined;
    this.linewidth = undefined;
    return this;
  },

  // A shim to not break `getBoundingClientRect` calls.
  // TODO: Implement a way to calculate proper bounding
  // boxes of `Two.Text`.

  /**
   * @name Two.Text#getBoundingClientRect
   * @function
   * @param {Boolean} [shallow=false] - Describes whether to calculate off local matrix or world matrix.
   * @returns {Object} - Returns object with top, left, right, bottom, width, height attributes.
   * @description Return an object with top, left, right, bottom, width, and height parameters of the text object.
   */
  getBoundingClientRect: function(shallow) {

    var matrix, v;
    var left, right, top, bottom;

    // TODO: Update this to not __always__ update. Just when it needs to.
    this._update(true);

    matrix = shallow ? this._matrix : getComputedMatrix(this);

    var height = this.leading;
    var width = this.value.length * this.size * Text.Ratio;

    switch (this.alignment) {
      case 'left':
        left = 0;
        right = width;
        break;
      case 'right':
        left = - width;
        right = 0;
        break;
      default:
        left = - width / 2;
        right = width / 2;
    }

    switch (this.baseline) {
      case 'top':
        top = 0;
        bottom = height;
        break;
      case 'bottom':
        top = - height;
        bottom = 0;
        break;
      default:
        top = - height / 2;
        bottom = height / 2;
    }

    v = matrix.multiply(left, top, 1);

    top = v.y;
    left = v.x;

    v = matrix.multiply(right, bottom, 1);

    right = v.x;
    bottom = v.y;

    return {
      top: top,
      left: left,
      right: right,
      bottom: bottom,
      width: right - left,
      height: bottom - top
    };

  },

  /**
   * @name Two.Text#flagReset
   * @function
   * @private
   * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
   */
  flagReset: function() {

    this._flagValue = this._flagFamily = this._flagSize =
      this._flagLeading = this._flagAlignment = this._flagFill =
      this._flagStroke = this._flagLinewidth = this._flagOpacity =
      this._flagVisible = this._flagClip = this._flagDecoration =
      this._flagClassName = this._flagBaseline = this._flagWeight =
        this._flagStyle = false;

    Shape.prototype.flagReset.call(this);

    return this;

  }

});

Text.MakeObservable(Text.prototype);

var alignments = {
  start: 'left',
  middle: 'center',
  end: 'right'
};

/**
 * @name Utils.getAlignment
 * @function
 * @param {AlignmentString}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/text-anchor}
 */
var getAlignment = function(anchor) {
  return alignments[anchor];
};

var getBaseline = function(node) {
  var a = node.getAttribute('dominant-baseline');
  var b = node.getAttribute('alignment-baseline');
  return a || b;
};

/**
 * @name Utils.extractCSSText
 * @function
 * @param {String} text - The CSS text body to be parsed and extracted.
 * @param {Object} [styles] - The styles object to apply CSS key values to.
 * @returns {Object} styles
 * @description Parse CSS text body and apply them as key value pairs to a JavaScript object.
 */
var extractCSSText = function(text, styles) {

  var commands, command, name, value;

  if (!styles) {
    styles = {};
  }

  commands = text.split(';');

  for (var i = 0; i < commands.length; i++) {
    command = commands[i].split(':');
    name = command[0];
    value = command[1];
    if (typeof name === 'undefined' || typeof value === 'undefined') {
      continue;
    }
    styles[name] = value.replace(/\s/, '');
  }

  return styles;

};

/**
 * @name Utils.getSvgStyles
 * @function
 * @param {SvgNode} node - The SVG node to parse.
 * @returns {Object} styles
 * @description Get the CSS comands from the `style` attribute of an SVG node and apply them as key value pairs to a JavaScript object.
 */
var getSvgStyles = function(node) {

  var styles = {};
  var attributes = getSvgAttributes(node);
  var length = Math.max(attributes.length, node.style.length);

  for (var i = 0; i < length; i++) {

    var command = node.style[i];
    var attribute = attributes[i];

    if (command) {
      styles[command] = node.style[command];
    }
    if (attribute) {
      styles[attribute] = node.getAttribute(attribute);
    }

  }

  return styles;

};

var getSvgAttributes = function(node) {

  var attributes = node.getAttributeNames();

  // Reserved attributes to remove
  var keywords = ['id', 'class', 'transform', 'xmlns', 'viewBox'];

  for (var i = 0; i < keywords.length; i++) {
    var keyword = keywords[i];
    var index = Array.prototype.indexOf.call(attributes, keyword);
    if (index >= 0) {
      attributes.splice(index, 1);
    }
  }

  return attributes;

};

/**
 * @name Utils.applySvgViewBox
 * @function
 * @param {Two.Shape} node - The Two.js object to apply viewbox matrix to
 * @param {String} value - The viewBox value from the SVG attribute
 * @returns {Two.Shape} node
 * @description Applies the transform of the SVG Viewbox on a given node.
 */
var applySvgViewBox = function(node, value) {

  var elements = value.split(/\s/);

  var x = parseFloat(elements[0]);
  var y = parseFloat(elements[1]);
  var width = parseFloat(elements[2]);
  var height = parseFloat(elements[3]);

  var s = Math.min(this.width / width, this.height / height);

  node.translation.x -= x * s;
  node.translation.y -= y * s;
  node.scale = s;

  return node;

};

var extrapolateScientificNotation = function(command) {
  var regex = /[\+\-]?[\d\.]*e[\-\+]?\d*/ig;
  var matches = command.match(regex);
  if (matches && matches.length > 0) {
    for (var i = 0; i < matches.length; i++) {
      var match = matches[i];
      var items = match.split(/e/i);
      var value = parseFloat(items[0]);
      var coefficient = Math.pow(10, parseFloat(items[1]));
      if (coefficient < 0) {
        value /= coefficient;
      } else {
        value *= coefficient;
      }
      command = command.replace(match, value);
    }
  }
  return command;
};

/**
 * @name Utils.applySvgAttributes
 * @function
 * @param {SvgNode} node - An SVG Node to extrapolate attributes from.
 * @param {Two.Shape} elem - The Two.js object to apply extrapolated attributes to.
 * @returns {Two.Shape} The Two.js object passed now with applied attributes.
 * @description This function iterates through an SVG Node's properties and stores ones of interest. It tries to resolve styles applied via CSS as well.
 * @TODO Reverse calculate {@link Two.Gradient}s for fill / stroke of any given path.
 */
var applySvgAttributes = function(node, elem, parentStyles) {

  var  styles = {}, attributes = {}, extracted = {}, i, key, value, attr;

  // Not available in non browser environments
  if (root$1.getComputedStyle) {
    // Convert CSSStyleDeclaration to a normal object
    var computedStyles = root$1.getComputedStyle(node);
    i = computedStyles.length;

    while (i--) {
      key = computedStyles[i];
      value = computedStyles[key];
      // Gecko returns undefined for unset properties
      // Webkit returns the default value
      if (typeof value !== 'undefined') {
        styles[key] = value;
      }
    }
  }

  // Convert NodeMap to a normal object
  for (i = 0; i < node.attributes.length; i++) {
    attr = node.attributes[i];
    if (/style/i.test(attr.nodeName)) {
      extractCSSText(attr.value, extracted);
    } else {
      attributes[attr.nodeName] = attr.value;
    }
  }

  // Getting the correct opacity is a bit tricky, since SVG path elements don't
  // support opacity as an attribute, but you can apply it via CSS.
  // So we take the opacity and set (stroke/fill)-opacity to the same value.
  if (typeof styles.opacity !== 'undefined') {
    styles['stroke-opacity'] = styles.opacity;
    styles['fill-opacity'] = styles.opacity;
    delete styles.opacity;
  }

  // Merge attributes and applied styles (attributes take precedence)
  if (parentStyles) {
    _.defaults(styles, parentStyles);
  }
  _.extend(styles, extracted, attributes);

  // Similarly visibility is influenced by the value of both display and visibility.
  // Calculate a unified value here which defaults to `true`.
  styles.visible = !(typeof styles.display === 'undefined' && /none/i.test(styles.display))
    || (typeof styles.visibility === 'undefined' && /hidden/i.test(styles.visibility));

  // Now iterate the whole thing
  for (key in styles) {
    value = styles[key];

    switch (key) {
      case 'transform':
        // TODO: Check this out https://github.com/paperjs/paper.js/blob/develop/src/svg/SvgImport.js#L315
        if (/none/i.test(value)) break;
        var m = (node.transform && node.transform.baseVal && node.transform.baseVal.length > 0)
          ? node.transform.baseVal[0].matrix
          : (node.getCTM ? node.getCTM() : null);

        // Might happen when transform string is empty or not valid.
        if (m === null) break;

        if (Constants.AutoCalculateImportedMatrices) {

          // Decompose and infer Two.js related properties.
          var transforms = decomposeMatrix(m);

          elem.translation.set(transforms.translateX, transforms.translateY);
          elem.rotation = Math.PI * (transforms.rotation / 180);
          elem.scale = new Vector(transforms.scaleX, transforms.scaleY);

          var x = parseFloat((styles.x + '').replace('px'));
          var y = parseFloat((styles.y + '').replace('px'));

          // Override based on attributes.
          if (x) {
            elem.translation.x = x;
          }

          if (y) {
            elem.translation.y = y;
          }

        } else {

          // Edit the underlying matrix and don't force an auto calc.
          var m = node.getCTM();
          elem._matrix.manual = true;
          elem._matrix.set(m.a, m.b, m.c, m.d, m.e, m.f);

        }

        break;
      case 'viewBox':
        applySvgViewBox.call(this, elem, value);
        break;
      case 'visible':
        if (elem instanceof Group) {
          elem._visible = value;
          break;
        }
        elem.visible = value;
        break;
      case 'stroke-linecap':
        if (elem instanceof Group) {
          elem._cap = value;
          break;
        }
        elem.cap = value;
        break;
      case 'stroke-linejoin':
        if (elem instanceof Group) {
          elem._join = value;
          break;
        }
        elem.join = value;
        break;
      case 'stroke-miterlimit':
        if (elem instanceof Group) {
          elem._miter = value;
          break;
        }
        elem.miter = value;
        break;
      case 'stroke-width':
        if (elem instanceof Group) {
          elem._linewidth = parseFloat(value);
          break;
        }
        elem.linewidth = parseFloat(value);
        break;
      case 'opacity':
      case 'stroke-opacity':
      case 'fill-opacity':
        // Only apply styles to rendered shapes
        // in the scene.
        if (elem instanceof Group) {
          elem._opacity = parseFloat(value);
          break;
        }
        elem.opacity = parseFloat(value);
        break;
      case 'fill':
      case 'stroke':
        if (elem instanceof Group) {
          key = '_' + key;
        }
        if (/url\(#.*\)/i.test(value)) {
          var scene = getScene(this);
          elem[key] = scene.getById(
            value.replace(/url\(#(.*)\)/i, '$1'));
        } else {
          elem[key] = (/none/i.test(value)) ? 'transparent' : value;
        }
        break;
      case 'id':
        elem.id = value;
        // Overwritten id for non-conflicts on same page SVG documents
        // TODO: Make this non-descructive
        node.id = value + '-' + Constants.Identifier + 'applied';
        break;
      case 'class':
      case 'className':
        elem.classList = value.split(' ');
        break;
      case 'x':
      case 'y':
        var ca = elem instanceof Gradient;
        var cb = elem instanceof LinearGradient;
        var cc = elem instanceof RadialGradient;
        if (ca || cb || cc) {
          break;
        }
        if (value.match('[a-z%]$') && !value.endsWith('px')) {
          var error = new TwoError(
            'only pixel values are supported with the ' + key + ' attribute.');
          console.warn(error.name, error.message);
        }
        elem.translation[key] = parseFloat(value);
        break;
      case 'font-family':
        if (elem instanceof Text) {
          elem.family = value;
        }
        break;
      case 'font-size':
        if (elem instanceof Text) {
          elem.size = value;
        }
        break;
      case 'font-weight':
        if (elem instanceof Text) {
          elem.weight = value;
        }
        break;
      case 'font-style':
        if (elem instanceof Text) {
          elem.style = value;
        }
        break;
      case 'text-decoration':
        if (elem instanceof Text) {
          elem.decoration = value;
        }
        break;
      case 'line-height':
        if (elem instanceof Text) {
          elem.leading = value;
        }
        break;
    }
  }

  return styles;

};

/**
 * @name Utils.updateDefsCache
 * @function
 * @param {SvgNode} node - The SVG Node with which to update the defs cache.
 * @param {Object} Object - The defs cache to be updated.
 * @description Update the cache of children of <defs /> tags.
 */
var updateDefsCache = function(node, defsCache) {
  for (var i = 0, l = node.childNodes.length; i < l; i++) {
    var n = node.childNodes[i];
    if (!n.id) continue;

    var tagName = n.localName;
    if (tagName === '#text') continue;

    defsCache.add(n.id, n);
  }
};

/**
 * @name Utils.getScene
 * @param {Two.Shape} node - The currently available object in the scenegraph.
 * @returns {Group} - The highest order {@link Two.Group} in the scenegraph.
 * @property {Function}
 */
var getScene = function(node) {

  while (node.parent) {
    node = node.parent;
  }

  return node.scene;

};

/**
 * @name Utils.read
 * @property {Object} read - A map of functions to read any number of SVG node types and create Two.js equivalents of them. Primarily used by the {@link Two#interpret} method.
 */
var read = {

  svg: function(node) {

    var defs = read.defs.current = new Registry();
    var elements = node.getElementsByTagName('defs');

    for (var i = 0; i < elements.length; i++) {
      updateDefsCache(elements[i], defs);
    }

    var svg = read.g.call(this, node);
    var viewBox = node.getAttribute('viewBox');

    svg.defs = defs;  // Export out the <defs /> for later use
    // Utils.applySvgViewBox(svg, viewBox);

    delete read.defs.current;

    return svg;

  },

  defs: function(node) {
    return null;
  },

  use: function(node, styles) {

    var href = node.getAttribute('href') || node.getAttribute('xlink:href');
    if (!href) {
      var error = new TwoError('encountered <use /> with no href.');
      console.warn(error.name, error.message);
      return null;
    }

    var id = href.slice(1);
    if (!read.defs.current.contains(id)) {
      var error = new TwoError(
        'unable to find element for reference ' + href + '.');
      console.warn(error.name, error.message);
      return null;
    }

    var template = read.defs.current.get(id);
    var fullNode = template.cloneNode(true);
    var overwriteAttrs = ['x', 'y', 'width', 'height', 'href', 'xlink:href'];

    for (var i = 0; i < node.attributes.length; i++) {
      var attr = node.attributes[i];
      var ca = overwriteAttrs.includes(attr.nodeName);
      var cb = !fullNode.hasAttribute(attr.nodeName);
      if (ca || cb) {
        fullNode.setAttribute(attr.nodeName, attr.value);
      }
    }

    var tagName = fullNode.localName;
    return read[tagName].call(this, fullNode, styles);

  },

  g: function(node, parentStyles) {

    var styles;
    var group = new Group();

    applySvgAttributes.call(this, node, group, parentStyles);

    this.add(group);

    // Switched up order to inherit more specific styles
    styles = getSvgStyles.call(this, node);

    for (var i = 0, l = node.childNodes.length; i < l; i++) {
      var n = node.childNodes[i];
      var tag = n.nodeName;
      if (!tag) return;

      var tagName = tag.replace(/svg:/ig, '').toLowerCase();

      if (tagName in read) {
        var o = read[tagName].call(group, n, styles);
        if (!!o && !o.parent) {
          group.add(o);
        }
      }
    }

    return group;

  },

  polygon: function(node, parentStyles) {

    var points = node.getAttribute('points');

    var verts = [];
    points.replace(/(-?[\d.?]+)[,|\s](-?[\d.?]+)/g, function(match, p1, p2) {
      verts.push(new Anchor(parseFloat(p1), parseFloat(p2)));
    });

    var poly = new Path(verts, true).noStroke();
    poly.fill = 'black';

    applySvgAttributes.call(this, node, poly, parentStyles);

    return poly;

  },

  polyline: function(node, parentStyles) {
    var poly = read.polygon.call(this, node, parentStyles);
    poly.closed = false;
    return poly;
  },

  path: function(node, parentStyles) {

    var path = node.getAttribute('d');
    var points = [];
    var closed = false, relative = false;

    if (path) {

      // Create a Two.Path from the paths.

      var coord = new Anchor();
      var control, coords;
      var commands = path.match(/[a-df-z][^a-df-z]*/ig);
      var last = commands.length - 1;

      // Split up polybeziers

      _.each(commands.slice(0), function(command, i) {

        var number, fid, lid, numbers, first, s;
        var j, ct, l, times;

        command = extrapolateScientificNotation(command);

        var type = command[0];
        var lower = type.toLowerCase();
        var items = command.slice(1).trim().split(/[\s,]+|(?=\s?[+-])/);
        var result = [], bin;
        var hasDoubleDecimals = false;

        // Handle double decimal values e.g: 48.6037.71.8
        // Like: https://m.abcsofchinese.com/images/svg/亼ji2.svg
        for (j = 0; j < items.length; j++) {

          number = items[j];
          fid = number.indexOf('.');
          lid = number.lastIndexOf('.');

          if (fid !== lid) {

            numbers = number.split('.');
            first = numbers[0] + '.' + numbers[1];

            items.splice(j, 1, first);

            for (s = 2; s < numbers.length; s++) {
              items.splice(j + s - 1, 0, '0.' + numbers[s]);
            }

            hasDoubleDecimals = true;

          }

        }

        if (hasDoubleDecimals) {
          command = type + items.join(',');
        }

        if (i <= 0) {
          commands = [];
        }

        switch (lower) {
          case 'h':
          case 'v':
            if (items.length > 1) {
              bin = 1;
            }
            break;
          case 'm':
          case 'l':
          case 't':
            if (items.length > 2) {
              bin = 2;
            }
            break;
          case 's':
          case 'q':
            if (items.length > 4) {
              bin = 4;
            }
            break;
          case 'c':
            if (items.length > 6) {
              bin = 6;
            }
            break;
          case 'a':
            if (items.length > 7) {
              bin = 7;
            }
            break;
        }

        // This means we have a polybezier.
        if (bin) {

          for (j = 0, l = items.length, times = 0; j < l; j+=bin) {

            ct = type;
            if (times > 0) {

              switch (type) {
                case 'm':
                  ct = 'l';
                  break;
                case 'M':
                  ct = 'L';
                  break;
              }

            }

            result.push(ct + items.slice(j, j + bin).join(' '));
            times++;

          }

          commands = Array.prototype.concat.apply(commands, result);

        } else {

          commands.push(command);

        }

      });

      // Create the vertices for our Two.Path

      _.each(commands, function(command, i) {

        var result, x, y;
        var type = command[0];
        var lower = type.toLowerCase();

        coords = command.slice(1).trim();
        coords = coords.replace(/(-?\d+(?:\.\d*)?)[eE]([+-]?\d+)/g, function(match, n1, n2) {
          return parseFloat(n1) * Math.pow(10, n2);
        });
        coords = coords.split(/[\s,]+|(?=\s?[+-])/);
        relative = type === lower;

        var x1, y1, x2, y2, x3, y3, x4, y4, reflection;

        switch (lower) {

          case 'z':
            if (i >= last) {
              closed = true;
            } else {
              x = coord.x;
              y = coord.y;
              result = new Anchor(
                x, y,
                undefined, undefined,
                undefined, undefined,
                Commands.close
              );
              // Make coord be the last `m` command
              for (var j = points.length - 1; j >= 0; j--) {
                var point = points[j];
                if (/m/i.test(point.command)) {
                  coord = point;
                  break;
                }
              }
            }
            break;

          case 'm':
          case 'l':

            control = undefined;

            x = parseFloat(coords[0]);
            y = parseFloat(coords[1]);

            result = new Anchor(
              x, y,
              undefined, undefined,
              undefined, undefined,
              /m/i.test(lower) ? Commands.move : Commands.line
            );

            if (relative) {
              result.addSelf(coord);
            }

            // result.controls.left.copy(result);
            // result.controls.right.copy(result);

            coord = result;
            break;

          case 'h':
          case 'v':

            var a = /h/i.test(lower) ? 'x' : 'y';
            var b = /x/i.test(a) ? 'y' : 'x';

            result = new Anchor(
              undefined, undefined,
              undefined, undefined,
              undefined, undefined,
              Commands.line
            );
            result[a] = parseFloat(coords[0]);
            result[b] = coord[b];

            if (relative) {
              result[a] += coord[a];
            }

            // result.controls.left.copy(result);
            // result.controls.right.copy(result);

            coord = result;
            break;

          case 'c':
          case 's':

            x1 = coord.x;
            y1 = coord.y;

            if (!control) {
              control = new Vector();//.copy(coord);
            }

            if (/c/i.test(lower)) {

              x2 = parseFloat(coords[0]);
              y2 = parseFloat(coords[1]);
              x3 = parseFloat(coords[2]);
              y3 = parseFloat(coords[3]);
              x4 = parseFloat(coords[4]);
              y4 = parseFloat(coords[5]);

            } else {

              // Calculate reflection control point for proper x2, y2
              // inclusion.

              reflection = getReflection(coord, control, relative);

              x2 = reflection.x;
              y2 = reflection.y;
              x3 = parseFloat(coords[0]);
              y3 = parseFloat(coords[1]);
              x4 = parseFloat(coords[2]);
              y4 = parseFloat(coords[3]);

            }

            if (relative) {
              x2 += x1;
              y2 += y1;
              x3 += x1;
              y3 += y1;
              x4 += x1;
              y4 += y1;
            }

            if (!_.isObject(coord.controls)) {
              Anchor.AppendCurveProperties(coord);
            }

            coord.controls.right.set(x2 - coord.x, y2 - coord.y);
            result = new Anchor(
              x4, y4,
              x3 - x4, y3 - y4,
              undefined, undefined,
              Commands.curve
            );

            coord = result;
            control = result.controls.left;

            break;

          case 't':
          case 'q':

            x1 = coord.x;
            y1 = coord.y;

            if (!control) {
              control = new Vector();
            }

            if (/q/i.test(lower)) {

              x2 = parseFloat(coords[0]);
              y2 = parseFloat(coords[1]);
              x3 = parseFloat(coords[0]);
              y3 = parseFloat(coords[1]);
              x4 = parseFloat(coords[2]);
              y4 = parseFloat(coords[3]);

            } else {

              reflection = getReflection(coord, control, relative);

              x2 = reflection.x;
              y2 = reflection.y;
              x3 = reflection.x;
              y3 = reflection.y;
              x4 = parseFloat(coords[0]);
              y4 = parseFloat(coords[1]);

            }

            if (relative) {
              x2 += x1;
              y2 += y1;
              x3 += x1;
              y3 += y1;
              x4 += x1;
              y4 += y1;
            }

            if (!_.isObject(coord.controls)) {
              Anchor.AppendCurveProperties(coord);
            }

            coord.controls.right.set(
              (x2 - coord.x) * 0.33, (y2 - coord.y) * 0.33);
            result = new Anchor(
              x4, y4,
              x3 - x4, y3 - y4,
              undefined, undefined,
              Commands.curve
            );

            coord = result;
            control = result.controls.left;

            break;

          case 'a':

            x1 = coord.x;
            y1 = coord.y;

            var rx = parseFloat(coords[0]);
            var ry = parseFloat(coords[1]);
            var xAxisRotation = parseFloat(coords[2]);// * PI / 180;
            var largeArcFlag = parseFloat(coords[3]);
            var sweepFlag = parseFloat(coords[4]);

            x4 = parseFloat(coords[5]);
            y4 = parseFloat(coords[6]);

            if (relative) {
              x4 += x1;
              y4 += y1;
            }

            var anchor = new Anchor(x4, y4);
            anchor.command = Commands.arc;
            anchor.rx = rx;
            anchor.ry = ry;
            anchor.xAxisRotation = xAxisRotation;
            anchor.largeArcFlag = largeArcFlag;
            anchor.sweepFlag = sweepFlag;

            result = anchor;

            coord = anchor;
            control = undefined;

            break;

        }

        if (result) {
          if (Array.isArray(result)) {
            points = points.concat(result);
          } else {
            points.push(result);
          }
        }

      });

    }

    path = new Path(points, closed, undefined, true).noStroke();
    path.fill = 'black';

    var rect = path.getBoundingClientRect(true);

    // Center objects to stay consistent
    // with the rest of the Two.js API.
    rect.centroid = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };

    _.each(path.vertices, function(v) {
      v.subSelf(rect.centroid);
    });

    applySvgAttributes.call(this, node, path, parentStyles);

    path.translation.addSelf(rect.centroid);

    return path;

  },

  circle: function(node, parentStyles) {

    var x = parseFloat(node.getAttribute('cx'));
    var y = parseFloat(node.getAttribute('cy'));
    var r = parseFloat(node.getAttribute('r'));

    var circle = new Circle(0, 0, r).noStroke();
    circle.fill = 'black';

    applySvgAttributes.call(this, node, circle, parentStyles);

    circle.translation.x = x;
    circle.translation.y = y;

    return circle;

  },

  ellipse: function(node, parentStyles) {

    var x = parseFloat(node.getAttribute('cx'));
    var y = parseFloat(node.getAttribute('cy'));
    var width = parseFloat(node.getAttribute('rx'));
    var height = parseFloat(node.getAttribute('ry'));

    var ellipse = new Ellipse(0, 0, width, height).noStroke();
    ellipse.fill = 'black';

    applySvgAttributes.call(this, node, ellipse, parentStyles);

    ellipse.translation.x = x;
    ellipse.translation.y = y;

    return ellipse;

  },

  rect: function(node, parentStyles) {

    var rx = parseFloat(node.getAttribute('rx'));
    var ry = parseFloat(node.getAttribute('ry'));

    if (!_.isNaN(rx) || !_.isNaN(ry)) {
      return read['rounded-rect'](node);
    }

    var x = parseFloat(node.getAttribute('x')) || 0;
    var y = parseFloat(node.getAttribute('y')) || 0;
    var width = parseFloat(node.getAttribute('width'));
    var height = parseFloat(node.getAttribute('height'));

    var w2 = width / 2;
    var h2 = height / 2;

    var rect = new Rectangle(0, 0, width, height)
      .noStroke();
    rect.fill = 'black';

    applySvgAttributes.call(this, node, rect, parentStyles);

    // For rectangles, (x, y) is the center of the shape rather than the top
    // left corner.
    rect.translation.x += w2;
    rect.translation.y += h2;

    return rect;

  },

  'rounded-rect': function(node, parentStyles) {

    var x = parseFloat(node.getAttribute('x')) || 0;
    var y = parseFloat(node.getAttribute('y')) || 0;
    var rx = parseFloat(node.getAttribute('rx')) || 0;
    var ry = parseFloat(node.getAttribute('ry')) || 0;

    var width = parseFloat(node.getAttribute('width'));
    var height = parseFloat(node.getAttribute('height'));

    var w2 = width / 2;
    var h2 = height / 2;
    var radius = new Vector(rx, ry);

    var rect = new RoundedRectangle(0, 0, width, height, radius)
      .noStroke();
    rect.fill = 'black';

    applySvgAttributes.call(this, node, rect, parentStyles);

    // For rectangles, (x, y) is the center of the shape rather than the top
    // left corner.
    rect.translation.x += w2;
    rect.translation.y += h2;

    return rect;

  },

  line: function(node, parentStyles) {

    var x1 = parseFloat(node.getAttribute('x1'));
    var y1 = parseFloat(node.getAttribute('y1'));
    var x2 = parseFloat(node.getAttribute('x2'));
    var y2 = parseFloat(node.getAttribute('y2'));

    var line = new Line(x1, y1, x2, y2).noFill();

    applySvgAttributes.call(this, node, line, parentStyles);

    return line;

  },

  lineargradient: function(node, parentStyles) {

    var x1 = parseFloat(node.getAttribute('x1'));
    var y1 = parseFloat(node.getAttribute('y1'));
    var x2 = parseFloat(node.getAttribute('x2'));
    var y2 = parseFloat(node.getAttribute('y2'));

    var ox = (x2 + x1) / 2;
    var oy = (y2 + y1) / 2;

    var stops = [];
    for (var i = 0; i < node.children.length; i++) {

      var child = node.children[i];

      var offset = child.getAttribute('offset');
      if (/%/ig.test(offset)) {
        offset = parseFloat(offset.replace(/%/ig, '')) / 100;
      }
      offset = parseFloat(offset);

      var color = child.getAttribute('stop-color');
      var opacity = child.getAttribute('stop-opacity');
      var style = child.getAttribute('style');

      var matches;
      if (color === null) {
        matches = style ? style.match(/stop-color:\s?([#a-fA-F0-9]*)/) : false;
        color = matches && matches.length > 1 ? matches[1] : undefined;
      }

      if (opacity === null) {
        matches = style ? style.match(/stop-opacity:\s?([0-9.-]*)/) : false;
        opacity = matches && matches.length > 1 ? parseFloat(matches[1]) : 1;
      } else {
        opacity = parseFloat(opacity);
      }

      stops.push(new Stop(offset, color, opacity));

    }

    var gradient = new LinearGradient(x1 - ox, y1 - oy, x2 - ox,
      y2 - oy, stops);

    applySvgAttributes.call(this, node, gradient, parentStyles);

    return gradient;

  },

  radialgradient: function(node, parentStyles) {

    var cx = parseFloat(node.getAttribute('cx')) || 0;
    var cy = parseFloat(node.getAttribute('cy')) || 0;
    var r = parseFloat(node.getAttribute('r'));

    var fx = parseFloat(node.getAttribute('fx'));
    var fy = parseFloat(node.getAttribute('fy'));

    if (_.isNaN(fx)) {
      fx = cx;
    }

    if (_.isNaN(fy)) {
      fy = cy;
    }

    var ox = Math.abs(cx + fx) / 2;
    var oy = Math.abs(cy + fy) / 2;

    var stops = [];
    for (var i = 0; i < node.children.length; i++) {

      var child = node.children[i];

      var offset = child.getAttribute('offset');
      if (/%/ig.test(offset)) {
        offset = parseFloat(offset.replace(/%/ig, '')) / 100;
      }
      offset = parseFloat(offset);

      var color = child.getAttribute('stop-color');
      var opacity = child.getAttribute('stop-opacity');
      var style = child.getAttribute('style');

      var matches;
      if (color === null) {
        matches = style ? style.match(/stop-color:\s?([#a-fA-F0-9]*)/) : false;
        color = matches && matches.length > 1 ? matches[1] : undefined;
      }

      if (opacity === null) {
        matches = style ? style.match(/stop-opacity:\s?([0-9.-]*)/) : false;
        opacity = matches && matches.length > 1 ? parseFloat(matches[1]) : 1;
      } else {
        opacity = parseFloat(opacity);
      }

      stops.push(new Stop(offset, color, opacity));

    }

    var gradient = new RadialGradient(cx - ox, cy - oy, r,
      stops, fx - ox, fy - oy);

    applySvgAttributes.call(this, node, gradient, parentStyles);

    return gradient;

  },

  text: function(node, parentStyles) {

    var alignment = getAlignment(node.getAttribute('text-anchor')) || 'left';
    var baseline = getBaseline(node) || 'baseline';
    var message = node.textContent;

    var text = new Text(message);

    applySvgAttributes.call(this, node, text, parentStyles);

    text.alignment = alignment;
    text.baseline = baseline;

    return text;

  }

};

/**
 * @name Utils.xhr
 * @function
 * @param {String} path
 * @param {Function} callback
 * @returns {XMLHttpRequest} The constructed and called XHR request.
 * @description Canonical method to initiate `GET` requests in the browser. Mainly used by {@link Two#load} method.
 */
var xhr = function(path, callback) {

  var xhr = new XMLHttpRequest();
  xhr.open('GET', path);

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr.responseText);
    }
  };

  xhr.send();
  return xhr;

};

/**
 * @name Two.ImageSequence
 * @class
 * @extends Two.Rectangle
 * @param {String|String[]|Two.Texture|Two.Texture[]} paths - A list of URLs or {@link Two.Texture}s.
 * @param {Number} [ox=0] - The initial `x` position of the Two.ImageSequence.
 * @param {Number} [oy=0] - The initial `y` position of the Two.ImageSequence.
 * @param {Integer} [frameRate=30] - The frame rate at which the images should playback at.
 * @description A convenient package to display still or animated images organized as a series of still images.
 */
var ImageSequence = function(paths, ox, oy, frameRate) {

  // Not using default constructor of Rectangle due to odd `beginning` / `ending` behavior.
  // See: https://github.com/jonobr1/two.js/issues/383
  Path.call(this, [
    new Anchor(),
    new Anchor(),
    new Anchor(),
    new Anchor()
  ], true);

  this._renderer.flagTextures = ImageSequence.FlagTextures.bind(this);
  this._renderer.bindTextures = ImageSequence.BindTextures.bind(this);
  this._renderer.unbindTextures = ImageSequence.UnbindTextures.bind(this);

  this.noStroke();
  this.noFill();

  /**
   * @name Two.ImageSequence#textures
   * @property {Two.Texture[]} - A list of textures to be used as frames for animating the {@link Two.ImageSequence}.
   */
  if (Array.isArray(paths)) {
    this.textures = paths.map(ImageSequence.GenerateTexture.bind(this));
  } else {
    // If just a single path convert into a single Two.Texture
    this.textures = [ImageSequence.GenerateTexture(paths)];
  }

  this.origin = new Vector();

  this._update();
  this.translation.set(ox || 0, oy || 0);

  /**
   * @name Two.ImageSequence#frameRate
   * @property {Integer} - The number of frames to animate against per second.
   */
  if (typeof frameRate === 'number') {
    this.frameRate = frameRate;
  } else {
    this.frameRate = ImageSequence.DefaultFrameRate;
  }

  /**
   * @name Two.ImageSequence#index
   * @property {Integer} - The index of the current tile of the sprite to display. Defaults to `0`.
   */
  this.index = 0;

};

_.extend(ImageSequence, {

  /**
   * @name Two.ImageSequence.Properties
   * @property {String[]} - A list of properties that are on every {@link Two.ImageSequence}.
   */
  Properties: [
    'frameRate',
    'index'
  ],

  /**
   * @name Two.ImageSequence.DefaultFrameRate
   * @property The default frame rate that {@link Two.ImageSequence#frameRate} is set to when instantiated.
   */
  DefaultFrameRate: 30,

  /**
   * @name Two.ImageSequence.FlagTextures
   * @function
   * @description Cached method to let renderers know textures have been updated on a {@link Two.ImageSequence}.
   */
  FlagTextures: function() {
    this._flagTextures = true;
  },

  /**
   * @name Two.ImageSequence.BindTextures
   * @function
   * @description Cached method to let {@link Two.ImageSequence} know textures have been added to the instance.
   */
  BindTextures: function(items) {

    var i = items.length;
    while (i--) {
      items[i].bind(Events.Types.change, this._renderer.flagTextures);
    }

    this._renderer.flagTextures();

  },

  /**
   * @name Two.ImageSequence.UnbindVertices
   * @function
   * @description Cached method to let {@link Two.ImageSequence} know textures have been removed from the instance.
   */
  UnbindTextures: function(items) {

    var i = items.length;
    while (i--) {
      items[i].unbind(Events.Types.change, this._renderer.flagTextures);
    }

    this._renderer.flagTextures();

  },

  /**
   * @name Two.ImageSequence.MakeObservable
   * @function
   * @param {Object} object - The object to make observable.
   * @description Convenience function to apply observable qualities of a {@link Two.ImageSequence} to any object. Handy if you'd like to extend or inherit the {@link Two.ImageSequence} class on a custom class.
   */
  MakeObservable: function(obj) {

    Rectangle.MakeObservable(obj);
    _.each(ImageSequence.Properties, defineGetterSetter, obj);

    Object.defineProperty(obj, 'textures', {

      enumerable: true,

      get: function() {
        return this._textures;
      },

      set: function(textures) {

        var updateTextures = this._renderer.flagTextures;
        var bindTextures = this._renderer.bindTextures;
        var unbindTextures = this._renderer.unbindTextures;

        // Remove previous listeners
        if (this._textures) {
          this._textures
            .unbind(Events.Types.insert, bindTextures)
            .unbind(Events.Types.remove, unbindTextures);
        }

        // Create new Collection with copy of vertices
        this._textures = new Collection((textures || []).slice(0));

        // Listen for Collection changes and bind / unbind
        this._textures
          .bind(Events.Types.insert, bindTextures)
          .bind(Events.Types.remove, unbindTextures);

        // Bind Initial Textures
        bindTextures(this._textures);

      }

    });

  },

  /**
   * @name Two.ImageSequence.GenerateTexture
   * @property {Function} - Shorthand function to prepare source image material into readable format by {@link Two.ImageSequence}.
   * @param {String|Two.Texture} textureOrString - The texture or string to create a {@link Two.Texture} from.
   * @description Function used internally by {@link Two.ImageSequence} to parse arguments and return {@link Two.Texture}s.
   * @returns {Two.Texture}
   */
  GenerateTexture: function(obj) {
    if (obj instanceof Texture) {
      return obj;
    } else if (typeof obj === 'string') {
      return new Texture(obj);
    }
  }

});

_.extend(ImageSequence.prototype, Rectangle.prototype, {

  /**
   * @name Two.ImageSequence#_flagTextures
   * @private
   * @property {Boolean} - Determines whether the {@link Two.ImageSequence#textures} need updating.
   */
  _flagTextures: false,

  /**
   * @name Two.ImageSequence#_flagFrameRate
   * @private
   * @property {Boolean} - Determines whether the {@link Two.ImageSequence#frameRate} needs updating.
   */
  _flagFrameRate: false,

  /**
   * @name Two.ImageSequence#_flagIndex
   * @private
   * @property {Boolean} - Determines whether the {@link Two.ImageSequence#index} needs updating.
   */
  _flagIndex: false,

  // Private variables

  /**
   * @name Two.ImageSequence#_amount
   * @private
   * @property {Integer} - Number of frames for a given {@link Two.ImageSequence}.
   */
  _amount: 1,

  /**
   * @name Two.ImageSequence#_duration
   * @private
   * @property {Number} - Number of milliseconds a {@link Two.ImageSequence}.
   */
  _duration: 0,

  /**
   * @name Two.ImageSequence#_index
   * @private
   * @property {Integer} - The current frame the {@link Two.ImageSequence} is currently displaying.
   */
  _index: 0,

  /**
   * @name Two.ImageSequence#_startTime
   * @private
   * @property {Milliseconds} - Epoch time in milliseconds of when the {@link Two.ImageSequence} started.
   */
  _startTime: 0,

  /**
   * @name Two.ImageSequence#_playing
   * @private
   * @property {Boolean} - Dictates whether the {@link Two.ImageSequence} is animating or not.
   */
  _playing: false,

  /**
   * @name Two.ImageSequence#_firstFrame
   * @private
   * @property {Integer} - The frame the {@link Two.ImageSequence} should start with.
   */
  _firstFrame: 0,

  /**
   * @name Two.ImageSequence#_lastFrame
   * @private
   * @property {Integer} - The frame the {@link Two.ImageSequence} should end with.
   */
  _lastFrame: 0,

  /**
   * @name Two.ImageSequence#_playing
   * @private
   * @property {Boolean} - Dictates whether the {@link Two.ImageSequence} should loop or not.
   */
  _loop: true,

  // Exposed through getter-setter

  /**
   * @name Two.ImageSequence#_textures
   * @private
   * @see {@link Two.ImageSequence#textures}
   */
  _textures: null,

  /**
   * @name Two.ImageSequence#_frameRate
   * @private
   * @see {@link Two.ImageSequence#frameRate}
   */
  _frameRate: 0,

  /**
   * @name Two.ImageSequence#_origin
   * @private
   * @see {@link Two.ImageSequence#origin}
   */
  _origin: null,

  constructor: ImageSequence,

  /**
   * @name Two.ImageSequence#play
   * @function
   * @param {Integer} [firstFrame=0] - The index of the frame to start the animation with.
   * @param {Integer} [lastFrame] - The index of the frame to end the animation with. Defaults to the last item in the {@link Two.ImageSequence#textures}.
   * @param {Function} [onLastFrame] - Optional callback function to be triggered after playing the last frame. This fires multiple times when the image sequence is looped.
   * @description Initiate animation playback of a {@link Two.ImageSequence}.
   */
  play: function(firstFrame, lastFrame, onLastFrame) {

    this._playing = true;
    this._firstFrame = 0;
    this._lastFrame = this.amount - 1;
    this._startTime = _.performance.now();

    if (typeof firstFrame === 'number') {
      this._firstFrame = firstFrame;
    }
    if (typeof lastFrame === 'number') {
      this._lastFrame = lastFrame;
    }
    if (typeof onLastFrame === 'function') {
      this._onLastFrame = onLastFrame;
    } else {
      delete this._onLastFrame;
    }

    if (this._index !== this._firstFrame) {
      this._startTime -= 1000 * Math.abs(this._index - this._firstFrame)
        / this._frameRate;
    }

    return this;

  },

  /**
   * @name Two.ImageSequence#pause
   * @function
   * @description Halt animation playback of a {@link Two.ImageSequence}.
   */
  pause: function() {

    this._playing = false;
    return this;

  },

  /**
   * @name Two.ImageSequence#stop
   * @function
   * @description Halt animation playback of a {@link Two.ImageSequence} and set the current frame back to the first frame.
   */
  stop: function() {

    this._playing = false;
    this._index = this._firstFrame;

    return this;

  },

  /**
   * @name Two.ImageSequence#clone
   * @function
   * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
   * @returns {Two.ImageSequence}
   * @description Create a new instance of {@link Two.ImageSequence} with the same properties of the current image sequence.
   */
  clone: function(parent) {

    var clone = new ImageSequence(this.textures, this.translation.x,
      this.translation.y, this.frameRate);

    clone._loop = this._loop;

    if (this._playing) {
      clone.play();
    }

    if (parent) {
      parent.add(clone);
    }

    return clone;

  },

  /**
   * @name Two.ImageSequence#toObject
   * @function
   * @returns {Object}
   * @description Return a JSON compatible plain object that represents the path.
   */
  toObject: function() {
    var object = Rectangle.prototype.toObject.call(this);
    object.textures = this.textures.map(function(texture) {
      return texture.toObject();
    });
    object.frameRate = this.frameRate;
    object.index = this.index;
    object._firstFrame = this._firstFrame;
    object._lastFrame = this._lastFrame;
    object._loop = this._loop;
    return object;
  },

  /**
   * @name Two.ImageSequence#_update
   * @function
   * @private
   * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
   * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
   * @nota-bene Try not to call this method more than once a frame.
   */
  _update: function() {

    var effects = this._textures;
    var width, height, elapsed, amount, duration, texture;
    var index, frames;

    if (this._flagTextures) {
      this._amount = effects.length;
    }

    if (this._flagFrameRate) {
      this._duration = 1000 * this._amount / this._frameRate;
    }

    if (this._playing && this._frameRate > 0) {

      amount = this._amount;

      if (_.isNaN(this._lastFrame)) {
        this._lastFrame = amount - 1;
      }

      // TODO: Offload perf logic to instance of `Two`.
      elapsed = _.performance.now() - this._startTime;
      frames = this._lastFrame + 1;
      duration = 1000 * (frames - this._firstFrame) / this._frameRate;

      if (this._loop) {
        elapsed = elapsed % duration;
      } else {
        elapsed = Math.min(elapsed, duration);
      }

      index = lerp(this._firstFrame, frames, elapsed / duration);
      index = Math.floor(index);

      if (index !== this._index) {

        this._index = index;
        texture = effects[this._index];

        if (texture.loaded) {

          width = texture.image.width;
          height = texture.image.height;

          if (this.width !== width) {
            this.width = width;
          }
          if (this.height !== height) {
            this.height = height;
          }

          this.fill = texture;

          if (index >= this._lastFrame - 1 && this._onLastFrame) {
            this._onLastFrame();  // Shortcut for chainable sprite animations
          }

        }

      }

    } else if (this._flagIndex || !(this.fill instanceof Texture)) {

      texture = effects[this._index];

      if (texture.loaded) {

        width = texture.image.width;
        height = texture.image.height;

        if (this.width !== width) {
          this.width = width;
        }
        if (this.height !== height) {
          this.height = height;
        }

      }

      this.fill = texture;

    }

    Rectangle.prototype._update.call(this);

    return this;

  },

  /**
   * @name Two.ImageSequence#flagReset
   * @function
   * @private
   * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
   */
  flagReset: function() {

    this._flagTextures = this._flagFrameRate = false;
    Rectangle.prototype.flagReset.call(this);

    return this;

  }

});

ImageSequence.MakeObservable(ImageSequence.prototype);

/**
 * @name Two.Sprite
 * @class
 * @extends Two.Rectangle
 * @param {String|Two.Texture} [path] - The URL path or {@link Two.Texture} to be used as the bitmap data displayed on the sprite.
 * @param {Number} [ox=0] - The initial `x` position of the Two.Sprite.
 * @param {Number} [oy=0] - The initial `y` position of the Two.Sprite.
 * @param {Integer} [cols=1] - The number of columns the sprite contains.
 * @param {Integer} [rows=1] - The number of rows the sprite contains.
 * @param {Integer} [frameRate=0] - The frame rate at which the partitions of the image should playback at.
 * @description A convenient package to display still or animated images through a tiled image source. For more information on the principals of animated imagery through tiling see [Texture Atlas](https://en.wikipedia.org/wiki/Texture_atlas) on Wikipedia.
 */
var Sprite = function(path, ox, oy, cols, rows, frameRate) {

  // Not using default constructor of Rectangle due to odd `beginning` / `ending` behavior.
  // See: https://github.com/jonobr1/two.js/issues/383
  Path.call(this, [
    new Anchor(),
    new Anchor(),
    new Anchor(),
    new Anchor()
  ], true);

  this.noStroke();
  this.noFill();

  /**
   * @name Two.Sprite#texture
   * @property {Two.Texture} - The texture to be used as bitmap data to display image in the scene.
   */
  if (path instanceof Texture) {
    this.texture = path;
  } else if (typeof path === 'string') {
    this.texture = new Texture(path);
  }

  this.origin = new Vector();

  this._update();
  this.translation.set(ox || 0, oy || 0);

  /**
   * @name Two.Sprite#columns
   * @property {Integer} - The number of columns to split the texture into. Defaults to `1`.
   */
  if (typeof cols === 'number') {
    this.columns = cols;
  }

  /**
   * @name Two.Sprite#rows
   * @property {Integer} - The number of rows to split the texture into. Defaults to `1`.
   */
  if (typeof rows === 'number') {
    this.rows = rows;
  }

  /**
   * @name Two.Sprite#frameRate
   * @property {Integer} - The number of frames to animate against per second. Defaults to `0` for non-animated sprites.
   */
  if (typeof frameRate === 'number') {
    this.frameRate = frameRate;
  }

  /**
   * @name Two.Sprite#index
   * @property {Integer} - The index of the current tile of the sprite to display. Defaults to `0`.
   */
  this.index = 0;

};

_.extend(Sprite, {

  /**
   * @name Two.Sprite.Properties
   * @property {String[]} - A list of properties that are on every {@link Two.Sprite}.
   */
  Properties: [
    'texture', 'columns', 'rows', 'frameRate', 'index'
  ],

  /**
   * @name Two.Sprite.MakeObservable
   * @function
   * @param {Object} object - The object to make observable.
   * @description Convenience function to apply observable qualities of a {@link Two.Sprite} to any object. Handy if you'd like to extend or inherit the {@link Two.Sprite} class on a custom class.
   */
  MakeObservable: function(obj) {

    Rectangle.MakeObservable(obj);
    _.each(Sprite.Properties, defineGetterSetter, obj);

  }

});

_.extend(Sprite.prototype, Rectangle.prototype, {

  /**
   * @name Two.Sprite#_flagTexture
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Sprite#texture} needs updating.
   */
  _flagTexture: false,

  /**
   * @name Two.Sprite#_flagColumns
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Sprite#columns} need updating.
   */
  _flagColumns: false,

  /**
   * @name Two.Sprite#_flagRows
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Sprite#rows} need updating.
   */
  _flagRows: false,

  /**
   * @name Two.Sprite#_flagFrameRate
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Sprite#flagFrameRate} needs updating.
   */
  _flagFrameRate: false,

  /**
   * @name Two.Sprite#_flagIndex
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Sprite#index} needs updating.
   */
  flagIndex: false,

  // Private variables

  /**
   * @name Two.Sprite#_amount
   * @private
   * @property {Integer} - Number of frames for a given {@link Two.Sprite}.
   */
  _amount: 1,

  /**
   * @name Two.Sprite#_duration
   * @private
   * @property {Number} - Number of milliseconds a {@link Two.Sprite}.
   */
  _duration: 0,

  /**
   * @name Two.Sprite#_startTime
   * @private
   * @property {Milliseconds} - Epoch time in milliseconds of when the {@link Two.Sprite} started.
   */
  _startTime: 0,

  /**
   * @name Two.Sprite#_playing
   * @private
   * @property {Boolean} - Dictates whether the {@link Two.Sprite} is animating or not.
   */
  _playing: false,

  /**
   * @name Two.Sprite#_firstFrame
   * @private
   * @property {Integer} - The frame the {@link Two.Sprite} should start with.
   */
  _firstFrame: 0,

  /**
   * @name Two.Sprite#_lastFrame
   * @private
   * @property {Integer} - The frame the {@link Two.Sprite} should end with.
   */
  _lastFrame: 0,

  /**
   * @name Two.Sprite#_playing
   * @private
   * @property {Boolean} - Dictates whether the {@link Two.Sprite} should loop or not.
   */
  _loop: true,

  // Exposed through getter-setter

  /**
   * @name Two.Sprite#_texture
   * @private
   * @see {@link Two.Sprite#texture}
   */
  _texture: null,

  /**
   * @name Two.Sprite#_columns
   * @private
   * @see {@link Two.Sprite#columns}
   */
  _columns: 1,

  /**
   * @name Two.Sprite#_rows
   * @private
   * @see {@link Two.Sprite#rows}
   */
  _rows: 1,

  /**
   * @name Two.Sprite#_frameRate
   * @private
   * @see {@link Two.Sprite#frameRate}
   */
  _frameRate: 0,

  /**
   * @name Two.Sprite#_index
   * @private
   * @property {Integer} - The current frame the {@link Two.Sprite} is currently displaying.
   */
  _index: 0,

  /**
   * @name Two.Sprite#_origin
   * @private
   * @see {@link Two.Sprite#origin}
   */
  _origin: null,

  constructor: Sprite,

  /**
   * @name Two.Sprite#play
   * @function
   * @param {Integer} [firstFrame=0] - The index of the frame to start the animation with.
   * @param {Integer} [lastFrame] - The index of the frame to end the animation with. Defaults to the last item in the {@link Two.Sprite#textures}.
   * @param {Function} [onLastFrame] - Optional callback function to be triggered after playing the last frame. This fires multiple times when the sprite is looped.
   * @description Initiate animation playback of a {@link Two.Sprite}.
   */
  play: function(firstFrame, lastFrame, onLastFrame) {

    this._playing = true;
    this._firstFrame = 0;
    this._lastFrame = this.amount - 1;
    this._startTime = _.performance.now();

    if (typeof firstFrame === 'number') {
      this._firstFrame = firstFrame;
    }
    if (typeof lastFrame === 'number') {
      this._lastFrame = lastFrame;
    }
    if (typeof onLastFrame === 'function') {
      this._onLastFrame = onLastFrame;
    } else {
      delete this._onLastFrame;
    }

    if (this._index !== this._firstFrame) {
      this._startTime -= 1000 * Math.abs(this._index - this._firstFrame)
        / this._frameRate;
    }

    return this;

  },

  /**
   * @name Two.Sprite#pause
   * @function
   * @description Halt animation playback of a {@link Two.Sprite}.
   */
  pause: function() {

    this._playing = false;
    return this;

  },

  /**
   * @name Two.Sprite#stop
   * @function
   * @description Halt animation playback of a {@link Two.Sprite} and set the current frame back to the first frame.
   */
  stop: function() {

    this._playing = false;
    this._index = 0;

    return this;

  },

  /**
   * @name Two.Sprite#clone
   * @function
   * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
   * @returns {Two.Sprite}
   * @description Create a new instance of {@link Two.Sprite} with the same properties of the current sprite.
   */
  clone: function(parent) {

    var clone = new Sprite(
      this.texture, this.translation.x, this.translation.y,
      this.columns, this.rows, this.frameRate
    );

    if (this.playing) {
      clone.play(this._firstFrame, this._lastFrame);
      clone._loop = this._loop;
    }

    if (parent) {
      parent.add(clone);
    }

    return clone;

  },

  /**
   * @name Two.Sprite#toObject
   * @function
   * @returns {Object}
   * @description Return a JSON compatible plain object that represents the path.
   */
  toObject: function() {
    var object = Rectangle.prototype.toObject.call(this);
    object.texture = this.texture.toObject();
    object.columns = this.columns;
    object.rows = this.rows;
    object.frameRate = this.frameRate;
    object.index = this.index;
    object._firstFrame = this._firstFrame;
    object._lastFrame = this._lastFrame;
    object._loop = this._loop;
    return object;
  },

  /**
   * @name Two.Sprite#_update
   * @function
   * @private
   * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
   * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
   * @nota-bene Try not to call this method more than once a frame.
   */
  _update: function() {

    var effect = this._texture;
    var cols = this._columns;
    var rows = this._rows;

    var width, height, elapsed, amount, duration;
    var index, iw, ih, frames;

    if (this._flagColumns || this._flagRows) {
      this._amount = this._columns * this._rows;
    }

    if (this._flagFrameRate) {
      this._duration = 1000 * this._amount / this._frameRate;
    }

    if (this._flagTexture) {
      this.fill = this._texture;
    }

    if (this._texture.loaded) {

      iw = effect.image.width;
      ih = effect.image.height;

      width = iw / cols;
      height = ih / rows;
      amount = this._amount;

      if (this.width !== width) {
        this.width = width;
      }
      if (this.height !== height) {
        this.height = height;
      }

      if (this._playing && this._frameRate > 0) {

        if (_.isNaN(this._lastFrame)) {
          this._lastFrame = amount - 1;
        }

        // TODO: Offload perf logic to instance of `Two`.
        elapsed = _.performance.now() - this._startTime;
        frames = this._lastFrame + 1;
        duration = 1000 * (frames - this._firstFrame) / this._frameRate;

        if (this._loop) {
          elapsed = elapsed % duration;
        } else {
          elapsed = Math.min(elapsed, duration);
        }

        index = lerp(this._firstFrame, frames, elapsed / duration);
        index = Math.floor(index);

        if (index !== this._index) {
          this._index = index;
          if (index >= this._lastFrame - 1 && this._onLastFrame) {
            this._onLastFrame();  // Shortcut for chainable sprite animations
          }
        }

      }

      var col = this._index % cols;
      var row = Math.floor(this._index / cols);

      var ox = - width * col + (iw - width) / 2;
      var oy = - height * row + (ih - height) / 2;

      // TODO: Improve performance
      if (ox !== effect.offset.x) {
        effect.offset.x = ox;
      }
      if (oy !== effect.offset.y) {
        effect.offset.y = oy;
      }

    }

    Rectangle.prototype._update.call(this);

    return this;

  },

  /**
   * @name Two.Sprite#flagReset
   * @function
   * @private
   * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
   */
  flagReset: function() {

    this._flagTexture = this._flagColumns = this._flagRows
      = this._flagFrameRate = false;

    Rectangle.prototype.flagReset.call(this);

    return this;
  }


});

Sprite.MakeObservable(Sprite.prototype);

var TWO_PI$3 = Math.PI * 2, HALF_PI$3 = Math.PI / 2;

/**
 * @name Two.ArcSegment
 * @class
 * @extends Two.Path
 * @param {Number} [x=0] - The x position of the arc segment.
 * @param {Number} [y=0] - The y position of the arc segment.
 * @param {Number} innerRadius - The inner radius value of the arc segment.
 * @param {Number} outerRadius - The outer radius value of the arc segment.
 * @param {Radians} startAngle - The start angle of the arc segment in radians.
 * @param {Radians} endAngle - The end angle of the arc segment in radians.
 * @param {Number} [resolution=24] - The number of vertices used to construct the arc segment.
 */
var ArcSegment = function(ox, oy, ir, or, sa, ea, res) {

  var amount = res || (Constants.Resolution * 3);
  var points = [];
  for (var i = 0; i < amount; i++) {
    points.push(new Anchor());
  }

  Path.call(this, points, true, false, true);

  /**
   * @name Two.ArcSegment#innerRadius
   * @property {Number} - The size of the inner radius of the arc segment.
   */
  this.innerRadius = ir;
  /**
   * @name Two.ArcSegment#outerRadius
   * @property {Number} - The size of the outer radius of the arc segment.
   */
  this.outerRadius = or;

  /**
   * @name Two.ArcSegment#startRadius
   * @property {Radians} - The angle of one side for the arc segment.
   */
  this.startAngle = sa;
  /**
   * @name Two.ArcSegment#endAngle
   * @property {Radians} - The angle of the other side for the arc segment.
   */
  this.endAngle = ea;

  this._update();

  if (typeof ox === 'number') {
    this.translation.x = ox;
  }
  if (typeof oy === 'number') {
    this.translation.y = oy;
  }

};

_.extend(ArcSegment, {

  /**
   * @name Two.ArcSegment.Properties
   * @property {String[]} - A list of properties that are on every {@link Two.ArcSegment}.
   */
  Properties: ['startAngle', 'endAngle', 'innerRadius', 'outerRadius'],

  /**
   * @name Two.ArcSegment.MakeObservable
   * @function
   * @param {Object} object - The object to make observable.
   * @description Convenience function to apply observable qualities of a {@link Two.ArcSegment} to any object. Handy if you'd like to extend the {@link Two.ArcSegment} class on a custom class.
   */
  MakeObservable: function(obj) {

    Path.MakeObservable(obj);
    _.each(ArcSegment.Properties, defineGetterSetter, obj);

  }

});

_.extend(ArcSegment.prototype, Path.prototype, {

  /**
   * @name Two.ArcSegment#_flagStartAngle
   * @private
   * @property {Boolean} - Determines whether the {@link Two.ArcSegment#startAngle} needs updating.
   */
  _flagStartAngle: false,
  /**
   * @name Two.ArcSegment#_flagEndAngle
   * @private
   * @property {Boolean} - Determines whether the {@link Two.ArcSegment#endAngle} needs updating.
   */
  _flagEndAngle: false,
  /**
   * @name Two.ArcSegment#_flagInnerRadius
   * @private
   * @property {Boolean} - Determines whether the {@link Two.ArcSegment#innerRadius} needs updating.
   */
  _flagInnerRadius: false,
  /**
   * @name Two.ArcSegment#_flagOuterRadius
   * @private
   * @property {Boolean} - Determines whether the {@link Two.ArcSegment#outerRadius} needs updating.
   */
  _flagOuterRadius: false,

  /**
   * @name Two.ArcSegment#_startAngle
   * @private
   * @see {@link Two.ArcSegment#startAngle}
   */
  _startAngle: 0,
  /**
   * @name Two.ArcSegment#_endAngle
   * @private
   * @see {@link Two.ArcSegment#endAngle}
   */
  _endAngle: TWO_PI$3,
  /**
   * @name Two.ArcSegment#_innerRadius
   * @private
   * @see {@link Two.ArcSegment#innerRadius}
   */
  _innerRadius: 0,
  /**
   * @name Two.ArcSegment#_outerRadius
   * @private
   * @see {@link Two.ArcSegment#outerRadius}
   */
  _outerRadius: 0,

  constructor: ArcSegment,

  /**
   * @name Two.ArcSegment#_update
   * @function
   * @private
   * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
   * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
   * @nota-bene Try not to call this method more than once a frame.
   */
  _update: function() {

    if (this._flagStartAngle || this._flagEndAngle || this._flagInnerRadius
      || this._flagOuterRadius) {

      var sa = this._startAngle;
      var ea = this._endAngle;

      var ir = this._innerRadius;
      var or = this._outerRadius;

      var connected = mod(sa, TWO_PI$3) === mod(ea, TWO_PI$3);
      var punctured = ir > 0;

      var vertices = this.vertices;
      var length = (punctured ? vertices.length / 2 : vertices.length);
      var command, id = 0;

      if (connected) {
        length--;
      } else if (!punctured) {
        length -= 2;
      }

      /**
       * Outer Circle
       */
      for (var i = 0, last = length - 1; i < length; i++) {

        var pct = i / last;
        var v = vertices[id];
        var theta = pct * (ea - sa) + sa;
        var step = (ea - sa) / length;

        var x = or * Math.cos(theta);
        var y = or * Math.sin(theta);

        switch (i) {
          case 0:
            command = Commands.move;
            break;
          default:
            command = Commands.curve;
        }

        v.command = command;
        v.x = x;
        v.y = y;
        v.controls.left.clear();
        v.controls.right.clear();

        if (v.command === Commands.curve) {
          var amp = or * step / Math.PI;
          v.controls.left.x = amp * Math.cos(theta - HALF_PI$3);
          v.controls.left.y = amp * Math.sin(theta - HALF_PI$3);
          v.controls.right.x = amp * Math.cos(theta + HALF_PI$3);
          v.controls.right.y = amp * Math.sin(theta + HALF_PI$3);
          if (i === 1) {
            v.controls.left.multiplyScalar(2);
          }
          if (i === last) {
            v.controls.right.multiplyScalar(2);
          }
        }

        id++;

      }

      if (punctured) {

        if (connected) {
          vertices[id].command = Commands.close;
          id++;
        } else {
          length--;
          last = length - 1;
        }

        /**
         * Inner Circle
         */
        for (i = 0; i < length; i++) {

          pct = i / last;
          v = vertices[id];
          theta = (1 - pct) * (ea - sa) + sa;
          step = (ea - sa) / length;

          x = ir * Math.cos(theta);
          y = ir * Math.sin(theta);
          command = Commands.curve;
          if (i <= 0) {
            command = connected ? Commands.move : Commands.line;
          }

          v.command = command;
          v.x = x;
          v.y = y;
          v.controls.left.clear();
          v.controls.right.clear();

          if (v.command === Commands.curve) {
            amp = ir * step / Math.PI;
            v.controls.left.x = amp * Math.cos(theta + HALF_PI$3);
            v.controls.left.y = amp * Math.sin(theta + HALF_PI$3);
            v.controls.right.x = amp * Math.cos(theta - HALF_PI$3);
            v.controls.right.y = amp * Math.sin(theta - HALF_PI$3);
            if (i === 1) {
              v.controls.left.multiplyScalar(2);
            }
            if (i === last) {
              v.controls.right.multiplyScalar(2);
            }
          }

          id++;

        }

        // Final Point
        vertices[id].copy(vertices[0]);
        vertices[id].command = Commands.line;

      } else if (!connected) {

        vertices[id].command = Commands.line;
        vertices[id].x = 0;
        vertices[id].y = 0;
        id++;

        // Final Point
        vertices[id].copy(vertices[0]);
        vertices[id].command = Commands.line;

      }

    }

    Path.prototype._update.call(this);

    return this;

  },

  /**
   * @name Two.ArcSegment#flagReset
   * @function
   * @private
   * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
   */
  flagReset: function() {

    Path.prototype.flagReset.call(this);

    this._flagStartAngle = this._flagEndAngle
      = this._flagInnerRadius = this._flagOuterRadius = false;

    return this;

  },

  /**
   * @name Two.ArcSegment#clone
   * @function
   * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
   * @returns {Two.ArcSegment}
   * @description Create a new instance of {@link Two.ArcSegment} with the same properties of the current path.
   */
  clone: function(parent) {

    var ir = this.innerRadius;
    var or = this.outerradius;
    var sa = this.startAngle;
    var ea = this.endAngle;
    var resolution = this.vertices.length;

    var clone = new ArcSegment(0, 0, ir, or, sa, ea, resolution);

    clone.translation.copy(this.translation);
    clone.rotation = this.rotation;
    clone.scale = this.scale;

    if (this.matrix.manual) {
      clone.matrix.copy(this.matrix);
    }

    _.each(Path.Properties, function(k) {
      clone[k] = this[k];
    }, this);

    if (parent) {
      parent.add(clone);
    }

    return clone;

  },

  /**
   * @name Two.ArcSegment#toObject
   * @function
   * @returns {Object}
   * @description Return a JSON compatible plain object that represents the path.
   */
  toObject: function() {

    var object = Path.prototype.toObject.call(this);

    _.each(ArcSegment.Properties, function(property) {
      object[property] = this[property];
    }, this);

    return object;

  }

});

ArcSegment.MakeObservable(ArcSegment.prototype);

var TWO_PI$4 = Math.PI * 2, cos$4 = Math.cos, sin$4 = Math.sin;

/**
 * @name Two.Polygon
 * @class
 * @extends Two.Path
 * @param {Number} [x=0] - The x position of the polygon.
 * @param {Number} [y=0] - The y position of the polygon.
 * @param {Number} radius - The radius value of the polygon.
 * @param {Number} [sides=12] - The number of vertices used to construct the polygon.
 */
var Polygon = function(ox, oy, r, sides) {

  sides = Math.max(sides || 0, 3);

  Path.call(this);

  this.closed = true;
  this.automatic = false;

  /**
   * @name Two.Polygon#width
   * @property {Number} - The size of the width of the polygon.
   */
  this.width = r * 2;
  /**
   * @name Two.Polygon#height
   * @property {Number} - The size of the height of the polygon.
   */
  this.height = r * 2;
  /**
   * @name Two.Polygon#sides
   * @property {Number} - The amount of sides the polyogn has.
   */
  this.sides = sides;

  this._update();
  this.translation.set(ox, oy);

};

_.extend(Polygon, {

  /**
   * @name Two.Polygon.Properties
   * @property {String[]} - A list of properties that are on every {@link Two.Polygon}.
   */
  Properties: ['width', 'height', 'sides'],

  /**
   * @name Two.Polygon.MakeObservable
   * @function
   * @param {Object} object - The object to make observable.
   * @description Convenience function to apply observable qualities of a {@link Two.Polygon} to any object. Handy if you'd like to extend the {@link Two.Polygon} class on a custom class.
   */
  MakeObservable: function(obj) {

    Path.MakeObservable(obj);
    _.each(Polygon.Properties, defineGetterSetter, obj);

  }

});

_.extend(Polygon.prototype, Path.prototype, {

  /**
   * @name Two.Polygon#_flagWidth
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Polygon#width} needs updating.
   */
  _flagWidth: false,
  /**
   * @name Two.Polygon#_flagHeight
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Polygon#height} needs updating.
   */
  _flagHeight: false,
  /**
   * @name Two.Polygon#_flagSides
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Polygon#sides} needs updating.
   */
  _flagSides: false,

  /**
   * @name Two.Polygon#_width
   * @private
   * @see {@link Two.Polygon#width}
   */
  _width: 0,
  /**
   * @name Two.Polygon#_height
   * @private
   * @see {@link Two.Polygon#height}
   */
  _height: 0,
  /**
   * @name Two.Polygon#_sides
   * @private
   * @see {@link Two.Polygon#sides}
   */
  _sides: 0,

  constructor: Polygon,

  /**
   * @name Two.Polygon#_update
   * @function
   * @private
   * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
   * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
   * @nota-bene Try not to call this method more than once a frame.
   */
  _update: function() {

    if (this._flagWidth || this._flagHeight || this._flagSides) {

      var sides = this._sides;
      var amount = sides + 1;
      var length = this.vertices.length;

      if (length > sides) {
        this.vertices.splice(sides - 1, length - sides);
        length = sides;
      }

      for (var i = 0; i < amount; i++) {

        var pct = (i + 0.5) / sides;
        var theta = TWO_PI$4 * pct + Math.PI / 2;
        var x = this._width * cos$4(theta) / 2;
        var y = this._height * sin$4(theta) / 2;

        if (i >= length) {
          this.vertices.push(new Anchor(x, y));
        } else {
          this.vertices[i].set(x, y);
        }

        this.vertices[i].command = i === 0
          ? Commands.move : Commands.line;

      }

    }

    Path.prototype._update.call(this);
    return this;

  },

  /**
   * @name Two.Polygon#flagReset
   * @function
   * @private
   * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
   */
  flagReset: function() {

    this._flagWidth = this._flagHeight = this._flagSides = false;
    Path.prototype.flagReset.call(this);

    return this;

  },

  /**
   * @name Two.Polygon#clone
   * @function
   * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
   * @returns {Two.Polygon}
   * @description Create a new instance of {@link Two.Polygon} with the same properties of the current path.
   */
  clone: function(parent) {

    var clone = new Polygon(0, 0, this.radius, this.sides);

    clone.translation.copy(this.translation);
    clone.rotation = this.rotation;
    clone.scale = this.scale;

    if (this.matrix.manual) {
      clone.matrix.copy(this.matrix);
    }

    _.each(Path.Properties, function(k) {
      clone[k] = this[k];
    }, this);

    if (parent) {
      parent.add(clone);
    }

    return clone;

  },

  /**
   * @name Two.Polygon#toObject
   * @function
   * @returns {Object}
   * @description Return a JSON compatible plain object that represents the path.
   */
  toObject: function() {

    var object = Path.prototype.toObject.call(this);

    _.each(Polygon.Properties, function(property) {
      object[property] = this[property];
    }, this);

    return object;

  }

});

Polygon.MakeObservable(Polygon.prototype);

var TWO_PI$5 = Math.PI * 2, cos$5 = Math.cos, sin$5 = Math.sin;

/**
 * @name Two.Star
 * @class
 * @extends Two.Path
 * @param {Number} [x=0] - The x position of the star.
 * @param {Number} [y=0] - The y position of the star.
 * @param {Number} innerRadius - The inner radius value of the star.
 * @param {Number} outerRadius - The outer radius value of the star.
 * @param {Number} [sides=5] - The number of sides used to construct the star.
 */
var Star = function(ox, oy, ir, or, sides) {

  if (arguments.length <= 3) {
    or = ir;
    ir = or / 2;
  }

  if (typeof sides !== 'number' || sides <= 0) {
    sides = 5;
  }

  Path.call(this);
  this.closed = true;
  this.automatic = false;

  /**
   * @name Two.Star#innerRadius
   * @property {Number} - The size of the inner radius of the star.
   */
  this.innerRadius = ir;
  /**
   * @name Two.Star#outerRadius
   * @property {Number} - The size of the outer radius of the star.
   */
  this.outerRadius = or;
  /**
   * @name Two.Star#sides
   * @property {Number} - The amount of sides the star has.
   */
  this.sides = sides;

  this._update();
  this.translation.set(ox, oy);

};

_.extend(Star, {

  /**
   * @name Two.Star.Properties
   * @property {String[]} - A list of properties that are on every {@link Two.Star}.
   */
  Properties: ['innerRadius', 'outerRadius', 'sides'],

  /**
   * @name Two.Star.MakeObservable
   * @function
   * @param {Object} object - The object to make observable.
   * @description Convenience function to apply observable qualities of a {@link Two.Star} to any object. Handy if you'd like to extend the {@link Two.Star} class on a custom class.
   */
  MakeObservable: function(obj) {

    Path.MakeObservable(obj);
    _.each(Star.Properties, defineGetterSetter, obj);

  }

});

_.extend(Star.prototype, Path.prototype, {

  /**
   * @name Two.Star#_flagInnerRadius
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Star#innerRadius} needs updating.
   */
  _flagInnerRadius: false,
  /**
   * @name Two.Star#_flagOuterRadius
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Star#outerRadius} needs updating.
   */
  _flagOuterRadius: false,
  /**
   * @name Two.Star#_flagSides
   * @private
   * @property {Boolean} - Determines whether the {@link Two.Star#sides} needs updating.
   */
  _flagSides: false,

  /**
   * @name Two.Star#_innerRadius
   * @private
   * @see {@link Two.Star#innerRadius}
   */
  _innerRadius: 0,
  /**
   * @name Two.Star#_outerRadius
   * @private
   * @see {@link Two.Star#outerRadius}
   */
  _outerRadius: 0,
  /**
   * @name Two.Star#_sides
   * @private
   * @see {@link Two.Star#sides}
   */
  _sides: 0,

  constructor: Star,

  /**
   * @name Two.Star#_update
   * @function
   * @private
   * @param {Boolean} [bubbles=false] - Force the parent to `_update` as well.
   * @description This is called before rendering happens by the renderer. This applies all changes necessary so that rendering is up-to-date but not updated more than it needs to be.
   * @nota-bene Try not to call this method more than once a frame.
   */
  _update: function() {

    if (this._flagInnerRadius || this._flagOuterRadius || this._flagSides) {

      var sides = this._sides * 2;
      var amount = sides + 1;
      var length = this.vertices.length;

      if (length > sides) {
        this.vertices.splice(sides - 1, length - sides);
        length = sides;
      }

      for (var i = 0; i < amount; i++) {

        var pct = (i + 0.5) / sides;
        var theta = TWO_PI$5 * pct;
        var r = (!(i % 2) ? this._innerRadius : this._outerRadius) / 2;
        var x = r * cos$5(theta);
        var y = r * sin$5(theta);

        if (i >= length) {
          this.vertices.push(new Anchor(x, y));
        } else {
          this.vertices[i].set(x, y);
        }

        this.vertices[i].command = i === 0
          ? Commands.move : Commands.line;

      }

    }

    Path.prototype._update.call(this);

    return this;

  },

  /**
   * @name Two.Star#flagReset
   * @function
   * @private
   * @description Called internally to reset all flags. Ensures that only properties that change are updated before being sent to the renderer.
   */
  flagReset: function() {

    this._flagInnerRadius = this._flagOuterRadius = this._flagSides = false;
    Path.prototype.flagReset.call(this);

    return this;

  },

  /**
   * @name Two.Star#clone
   * @function
   * @param {Two.Group} [parent] - The parent group or scene to add the clone to.
   * @returns {Two.Star}
   * @description Create a new instance of {@link Two.Star} with the same properties of the current path.
   */
  clone: function(parent) {

    var ir = this.innerRadius;
    var or = this.outerRadius;
    var sides = this.sides;

    var clone = new Star(0, 0, ir, or, sides);

    clone.translation.copy(this.translation);
    clone.rotation = this.rotation;
    clone.scale = this.scale;

    if (this.matrix.manual) {
      clone.matrix.copy(this.matrix);
    }

    _.each(Path.Properties, function(k) {
      clone[k] = this[k];
    }, this);

    if (parent) {
      parent.add(clone);
    }

    return clone;

  },

  /**
   * @name Two.Star#toObject
   * @function
   * @returns {Object}
   * @description Return a JSON compatible plain object that represents the path.
   */
  toObject: function() {

    var object = Path.prototype.toObject.call(this);

    _.each(Star.Properties, function(property) {
      object[property] = this[property];
    }, this);

    return object;

  }

});

Star.MakeObservable(Star.prototype);

var svg = {

  version: 1.1,

  ns: 'http://www.w3.org/2000/svg',
  xlink: 'http://www.w3.org/1999/xlink',

  alignments: {
    left: 'start',
    center: 'middle',
    right: 'end'
  },

  // Create an svg namespaced element.
  createElement: function(name, attrs) {
    var tag = name;
    var elem = document.createElementNS(svg.ns, tag);
    if (tag === 'svg') {
      attrs = _.defaults(attrs || {}, {
        version: svg.version
      });
    }
    if (attrs && Object.keys(attrs).length > 0) {
      svg.setAttributes(elem, attrs);
    }
    return elem;
  },

  // Add attributes from an svg element.
  setAttributes: function(elem, attrs) {
    var keys = Object.keys(attrs);
    for (var i = 0; i < keys.length; i++) {
      if (/href/.test(keys[i])) {
        elem.setAttributeNS(svg.xlink, keys[i], attrs[keys[i]]);
      } else {
        elem.setAttribute(keys[i], attrs[keys[i]]);
      }
    }
    return this;
  },

  // Remove attributes from an svg element.
  removeAttributes: function(elem, attrs) {
    for (var key in attrs) {
      elem.removeAttribute(key);
    }
    return this;
  },

  // Turn a set of vertices into a string for the d property of a path
  // element. It is imperative that the string collation is as fast as
  // possible, because this call will be happening multiple times a
  // second.
  toString: function(points, closed) {

    var l = points.length,
      last = l - 1,
      d, // The elusive last Commands.move point
      string = '';

    for (var i = 0; i < l; i++) {
      var b = points[i];
      var command;
      var prev = closed ? mod(i - 1, l) : Math.max(i - 1, 0);
      var next = closed ? mod(i + 1, l) : Math.min(i + 1, last);

      var a = points[prev];
      var c = points[next];

      var vx, vy, ux, uy, ar, bl, br, cl;
      var rx, ry, xAxisRotation, largeArcFlag, sweepFlag;

      // Access x and y directly,
      // bypassing the getter
      var x = toFixed(b.x);
      var y = toFixed(b.y);

      switch (b.command) {

        case Commands.close:
          command = Commands.close;
          break;

        case Commands.arc:

          rx = b.rx;
          ry = b.ry;
          xAxisRotation = b.xAxisRotation;
          largeArcFlag = b.largeArcFlag;
          sweepFlag = b.sweepFlag;

          command = Commands.arc + ' ' + rx + ' ' + ry + ' '
            + xAxisRotation + ' ' + largeArcFlag + ' ' + sweepFlag + ' '
            + x + ' ' + y;
          break;

        case Commands.curve:

          ar = (a.controls && a.controls.right) || Vector.zero;
          bl = (b.controls && b.controls.left) || Vector.zero;

          if (a.relative) {
            vx = toFixed((ar.x + a.x));
            vy = toFixed((ar.y + a.y));
          } else {
            vx = toFixed(ar.x);
            vy = toFixed(ar.y);
          }

          if (b.relative) {
            ux = toFixed((bl.x + b.x));
            uy = toFixed((bl.y + b.y));
          } else {
            ux = toFixed(bl.x);
            uy = toFixed(bl.y);
          }

          command = ((i === 0) ? Commands.move : Commands.curve) +
            ' ' + vx + ' ' + vy + ' ' + ux + ' ' + uy + ' ' + x + ' ' + y;
          break;

        case Commands.move:
          d = b;
          command = Commands.move + ' ' + x + ' ' + y;
          break;

        default:
          command = b.command + ' ' + x + ' ' + y;

      }

      // Add a final point and close it off

      if (i >= last && closed) {

        if (b.command === Commands.curve) {

          // Make sure we close to the most previous Commands.move
          c = d;

          br = (b.controls && b.controls.right) || b;
          cl = (c.controls && c.controls.left) || c;

          if (b.relative) {
            vx = toFixed((br.x + b.x));
            vy = toFixed((br.y + b.y));
          } else {
            vx = toFixed(br.x);
            vy = toFixed(br.y);
          }

          if (c.relative) {
            ux = toFixed((cl.x + c.x));
            uy = toFixed((cl.y + c.y));
          } else {
            ux = toFixed(cl.x);
            uy = toFixed(cl.y);
          }

          x = toFixed(c.x);
          y = toFixed(c.y);

          command +=
            ' C ' + vx + ' ' + vy + ' ' + ux + ' ' + uy + ' ' + x + ' ' + y;

        }

        if (b.command !== Commands.close) {
          command += ' Z';
        }

      }

      string += command + ' ';

    }

    return string;

  },

  getClip: function(shape) {

    var clip = shape._renderer.clip;

    if (!clip) {

      var root = shape;

      while (root.parent) {
        root = root.parent;
      }

      clip = shape._renderer.clip = svg.createElement('clipPath');
      root.defs.appendChild(clip);

    }

    return clip;

  },

  group: {

    // TODO: Can speed up.
    // TODO: How does this effect a f
    appendChild: function(object) {

      var elem = object._renderer.elem;

      if (!elem) {
        return;
      }

      var tag = elem.nodeName;

      if (!tag || /(radial|linear)gradient/i.test(tag) || object._clip) {
        return;
      }

      this.elem.appendChild(elem);

    },

    removeChild: function(object) {

      var elem = object._renderer.elem;

      if (!elem || elem.parentNode != this.elem) {
        return;
      }

      var tag = elem.nodeName;

      if (!tag) {
        return;
      }

      // Defer subtractions while clipping.
      if (object._clip) {
        return;
      }

      this.elem.removeChild(elem);

    },

    orderChild: function(object) {
      this.elem.appendChild(object._renderer.elem);
    },

    renderChild: function(child) {
      svg[child._renderer.type].render.call(child, this);
    },

    render: function(domElement) {

      this._update();

      // Shortcut for hidden objects.
      // Doesn't reset the flags, so changes are stored and
      // applied once the object is visible again
      if (this._opacity === 0 && !this._flagOpacity) {
        return this;
      }

      if (!this._renderer.elem) {
        this._renderer.elem = svg.createElement('g', {
          id: this.id
        });
        domElement.appendChild(this._renderer.elem);
      }

      // _Update styles for the <g>
      var flagMatrix = this._matrix.manual || this._flagMatrix;
      var context = {
        domElement: domElement,
        elem: this._renderer.elem
      };

      if (flagMatrix) {
        this._renderer.elem.setAttribute('transform', 'matrix(' + this._matrix.toString() + ')');
      }

      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        svg[child._renderer.type].render.call(child, domElement);
      }

      if (this._flagOpacity) {
        this._renderer.elem.setAttribute('opacity', this._opacity);
      }

      if (this._flagClassName) {
        this._renderer.elem.setAttribute('class', this.classList.join(' '));
      }

      if (this._flagAdditions) {
        this.additions.forEach(svg.group.appendChild, context);
      }

      if (this._flagSubtractions) {
        this.subtractions.forEach(svg.group.removeChild, context);
      }

      if (this._flagOrder) {
        this.children.forEach(svg.group.orderChild, context);
      }

      // Commented two-way functionality of clips / masks with groups and
      // polygons. Uncomment when this bug is fixed:
      // https://code.google.com/p/chromium/issues/detail?id=370951

      // if (this._flagClip) {

      //   clip = svg.getClip(this);
      //   elem = this._renderer.elem;

      //   if (this._clip) {
      //     elem.removeAttribute('id');
      //     clip.setAttribute('id', this.id);
      //     clip.appendChild(elem);
      //   } else {
      //     clip.removeAttribute('id');
      //     elem.setAttribute('id', this.id);
      //     this.parent._renderer.elem.appendChild(elem); // TODO: should be insertBefore
      //   }

      // }

      if (this._flagMask) {
        if (this._mask) {
          this._renderer.elem.setAttribute('clip-path', 'url(#' + this._mask.id + ')');
        } else {
          this._renderer.elem.removeAttribute('clip-path');
        }
      }

      return this.flagReset();

    }

  },

  path: {

    render: function(domElement) {

      this._update();

      // Shortcut for hidden objects.
      // Doesn't reset the flags, so changes are stored and
      // applied once the object is visible again
      if (this._opacity === 0 && !this._flagOpacity) {
        return this;
      }

      // Collect any attribute that needs to be changed here
      var changed = {};

      var flagMatrix = this._matrix.manual || this._flagMatrix;

      if (flagMatrix) {
        changed.transform = 'matrix(' + this._matrix.toString() + ')';
      }

      if (this._flagVertices) {
        var vertices = svg.toString(this._renderer.vertices, this._closed);
        changed.d = vertices;
      }

      if (this._fill && this._fill._renderer) {
        this._fill._update();
        svg[this._fill._renderer.type].render.call(this._fill, domElement, true);
      }

      if (this._flagFill) {
        changed.fill = this._fill && this._fill.id
          ? 'url(#' + this._fill.id + ')' : this._fill;
      }

      if (this._stroke && this._stroke._renderer) {
        this._stroke._update();
        svg[this._stroke._renderer.type].render.call(this._stroke, domElement, true);
      }

      if (this._flagStroke) {
        changed.stroke = this._stroke && this._stroke.id
          ? 'url(#' + this._stroke.id + ')' : this._stroke;
      }

      if (this._flagLinewidth) {
        changed['stroke-width'] = this._linewidth;
      }

      if (this._flagOpacity) {
        changed['stroke-opacity'] = this._opacity;
        changed['fill-opacity'] = this._opacity;
      }

      if (this._flagClassName) {
        changed['class'] = this.classList.join(' ');
      }

      if (this._flagVisible) {
        changed.visibility = this._visible ? 'visible' : 'hidden';
      }

      if (this._flagCap) {
        changed['stroke-linecap'] = this._cap;
      }

      if (this._flagJoin) {
        changed['stroke-linejoin'] = this._join;
      }

      if (this._flagMiter) {
        changed['stroke-miterlimit'] = this._miter;
      }

      if (this.dashes && this.dashes.length > 0) {
        changed['stroke-dasharray'] = this.dashes.join(' ');
        changed['stroke-dashoffset'] = this.dashes.offset || 0;
      }

      // If there is no attached DOM element yet,
      // create it with all necessary attributes.
      if (!this._renderer.elem) {

        changed.id = this.id;
        this._renderer.elem = svg.createElement('path', changed);
        domElement.appendChild(this._renderer.elem);

      // Otherwise apply all pending attributes
      } else {
        svg.setAttributes(this._renderer.elem, changed);
      }

      if (this._flagClip) {

        var clip = svg.getClip(this);
        var elem = this._renderer.elem;

        if (this._clip) {
          elem.removeAttribute('id');
          clip.setAttribute('id', this.id);
          clip.appendChild(elem);
        } else {
          clip.removeAttribute('id');
          elem.setAttribute('id', this.id);
          this.parent._renderer.elem.appendChild(elem); // TODO: should be insertBefore
        }

      }

      // Commented two-way functionality of clips / masks with groups and
      // polygons. Uncomment when this bug is fixed:
      // https://code.google.com/p/chromium/issues/detail?id=370951

      // if (this._flagMask) {
      //   if (this._mask) {
      //     elem.setAttribute('clip-path', 'url(#' + this._mask.id + ')');
      //   } else {
      //     elem.removeAttribute('clip-path');
      //   }
      // }

      return this.flagReset();

    }

  },

  text: {

    render: function(domElement) {

      this._update();

      var changed = {};

      var flagMatrix = this._matrix.manual || this._flagMatrix;

      if (flagMatrix) {
        changed.transform = 'matrix(' + this._matrix.toString() + ')';
      }

      if (this._flagFamily) {
        changed['font-family'] = this._family;
      }
      if (this._flagSize) {
        changed['font-size'] = this._size;
      }
      if (this._flagLeading) {
        changed['line-height'] = this._leading;
      }
      if (this._flagAlignment) {
        changed['text-anchor'] = svg.alignments[this._alignment] || this._alignment;
      }
      if (this._flagBaseline) {
        changed['alignment-baseline'] = changed['dominant-baseline'] = this._baseline;
      }
      if (this._flagStyle) {
        changed['font-style'] = this._style;
      }
      if (this._flagWeight) {
        changed['font-weight'] = this._weight;
      }
      if (this._flagDecoration) {
        changed['text-decoration'] = this._decoration;
      }
      if (this._fill && this._fill._renderer) {
        this._fill._update();
        svg[this._fill._renderer.type].render.call(this._fill, domElement, true);
      }
      if (this._flagFill) {
        changed.fill = this._fill && this._fill.id
          ? 'url(#' + this._fill.id + ')' : this._fill;
      }
      if (this._stroke && this._stroke._renderer) {
        this._stroke._update();
        svg[this._stroke._renderer.type].render.call(this._stroke, domElement, true);
      }
      if (this._flagStroke) {
        changed.stroke = this._stroke && this._stroke.id
          ? 'url(#' + this._stroke.id + ')' : this._stroke;
      }
      if (this._flagLinewidth) {
        changed['stroke-width'] = this._linewidth;
      }
      if (this._flagOpacity) {
        changed.opacity = this._opacity;
      }
      if (this._flagClassName) {
        changed['class'] = this.classList.join(' ');
      }
      if (this._flagVisible) {
        changed.visibility = this._visible ? 'visible' : 'hidden';
      }
      if (this.dashes && this.dashes.length > 0) {
        changed['stroke-dasharray'] = this.dashes.join(' ');
        changed['stroke-dashoffset'] = this.dashes.offset || 0;
      }

      if (!this._renderer.elem) {

        changed.id = this.id;

        this._renderer.elem = svg.createElement('text', changed);
        domElement.defs.appendChild(this._renderer.elem);

      } else {

        svg.setAttributes(this._renderer.elem, changed);

      }

      if (this._flagClip) {

        var clip = svg.getClip(this);
        var elem = this._renderer.elem;

        if (this._clip) {
          elem.removeAttribute('id');
          clip.setAttribute('id', this.id);
          clip.appendChild(elem);
        } else {
          clip.removeAttribute('id');
          elem.setAttribute('id', this.id);
          this.parent._renderer.elem.appendChild(elem); // TODO: should be insertBefore
        }

      }

      if (this._flagValue) {
        this._renderer.elem.textContent = this._value;
      }

      return this.flagReset();

    }

  },

  'linear-gradient': {

    render: function(domElement, silent) {

      if (!silent) {
        this._update();
      }

      var changed = {};

      if (this._flagEndPoints) {
        changed.x1 = this.left._x;
        changed.y1 = this.left._y;
        changed.x2 = this.right._x;
        changed.y2 = this.right._y;
      }

      if (this._flagSpread) {
        changed.spreadMethod = this._spread;
      }

      // If there is no attached DOM element yet,
      // create it with all necessary attributes.
      if (!this._renderer.elem) {

        changed.id = this.id;
        changed.gradientUnits = 'userSpaceOnUse';
        this._renderer.elem = svg.createElement('linearGradient', changed);
        domElement.defs.appendChild(this._renderer.elem);

      // Otherwise apply all pending attributes
      } else {

        svg.setAttributes(this._renderer.elem, changed);

      }

      if (this._flagStops) {

        var lengthChanged = this._renderer.elem.childNodes.length
          !== this.stops.length;

        if (lengthChanged) {
          while (this._renderer.elem.lastChild) {
            this._renderer.elem.removeChild(this._renderer.elem.lastChild);
          }
        }

        for (var i = 0; i < this.stops.length; i++) {

          var stop = this.stops[i];
          var attrs = {};

          if (stop._flagOffset) {
            attrs.offset = 100 * stop._offset + '%';
          }
          if (stop._flagColor) {
            attrs['stop-color'] = stop._color;
          }
          if (stop._flagOpacity) {
            attrs['stop-opacity'] = stop._opacity;
          }

          if (!stop._renderer.elem) {
            stop._renderer.elem = svg.createElement('stop', attrs);
          } else {
            svg.setAttributes(stop._renderer.elem, attrs);
          }

          if (lengthChanged) {
            this._renderer.elem.appendChild(stop._renderer.elem);
          }
          stop.flagReset();

        }

      }

      return this.flagReset();

    }

  },

  'radial-gradient': {

    render: function(domElement, silent) {

      if (!silent) {
        this._update();
      }

      var changed = {};

      if (this._flagCenter) {
        changed.cx = this.center._x;
        changed.cy = this.center._y;
      }
      if (this._flagFocal) {
        changed.fx = this.focal._x;
        changed.fy = this.focal._y;
      }

      if (this._flagRadius) {
        changed.r = this._radius;
      }

      if (this._flagSpread) {
        changed.spreadMethod = this._spread;
      }

      // If there is no attached DOM element yet,
      // create it with all necessary attributes.
      if (!this._renderer.elem) {

        changed.id = this.id;
        changed.gradientUnits = 'userSpaceOnUse';
        this._renderer.elem = svg.createElement('radialGradient', changed);
        domElement.defs.appendChild(this._renderer.elem);

      // Otherwise apply all pending attributes
      } else {

        svg.setAttributes(this._renderer.elem, changed);

      }

      if (this._flagStops) {

        var lengthChanged = this._renderer.elem.childNodes.length
          !== this.stops.length;

        if (lengthChanged) {
          while (this._renderer.elem.lastChild) {
            this._renderer.elem.removeChild(this._renderer.elem.lastChild);
          }
        }

        for (var i = 0; i < this.stops.length; i++) {

          var stop = this.stops[i];
          var attrs = {};

          if (stop._flagOffset) {
            attrs.offset = 100 * stop._offset + '%';
          }
          if (stop._flagColor) {
            attrs['stop-color'] = stop._color;
          }
          if (stop._flagOpacity) {
            attrs['stop-opacity'] = stop._opacity;
          }

          if (!stop._renderer.elem) {
            stop._renderer.elem = svg.createElement('stop', attrs);
          } else {
            svg.setAttributes(stop._renderer.elem, attrs);
          }

          if (lengthChanged) {
            this._renderer.elem.appendChild(stop._renderer.elem);
          }
          stop.flagReset();

        }

      }

      return this.flagReset();

    }

  },

  texture: {

    render: function(domElement, silent) {

      if (!silent) {
        this._update();
      }

      var changed = {};
      var styles = { x: 0, y: 0 };
      var image = this.image;

      if (this._flagLoaded && this.loaded) {

        switch (image.nodeName.toLowerCase()) {

          case 'canvas':
            styles.href = styles['xlink:href'] = image.toDataURL('image/png');
            break;
          case 'img':
          case 'image':
            styles.href = styles['xlink:href'] = this.src;
            break;

        }

      }

      if (this._flagOffset || this._flagLoaded || this._flagScale) {

        changed.x = this._offset.x;
        changed.y = this._offset.y;

        if (image) {

          changed.x -= image.width / 2;
          changed.y -= image.height / 2;

          if (this._scale instanceof Vector) {
            changed.x *= this._scale.x;
            changed.y *= this._scale.y;
          } else {
            changed.x *= this._scale;
            changed.y *= this._scale;
          }
        }

        if (changed.x > 0) {
          changed.x *= - 1;
        }
        if (changed.y > 0) {
          changed.y *= - 1;
        }

      }

      if (this._flagScale || this._flagLoaded || this._flagRepeat) {

        changed.width = 0;
        changed.height = 0;

        if (image) {

          styles.width = changed.width = image.width;
          styles.height = changed.height = image.height;

          // TODO: Hack / Band-aid
          switch (this._repeat) {
            case 'no-repeat':
              changed.width += 1;
              changed.height += 1;
              break;
          }

          if (this._scale instanceof Vector) {
            changed.width *= this._scale.x;
            changed.height *= this._scale.y;
          } else {
            changed.width *= this._scale;
            changed.height *= this._scale;
          }
        }

      }

      if (this._flagScale || this._flagLoaded) {
        if (!this._renderer.image) {
          this._renderer.image = svg.createElement('image', styles);
        } else {
          svg.setAttributes(this._renderer.image, styles);
        }
      }

      if (!this._renderer.elem) {

        changed.id = this.id;
        changed.patternUnits = 'userSpaceOnUse';
        this._renderer.elem = svg.createElement('pattern', changed);
        domElement.defs.appendChild(this._renderer.elem);

      } else if (Object.keys(changed).length !== 0) {

        svg.setAttributes(this._renderer.elem, changed);

      }

      if (this._renderer.elem && this._renderer.image && !this._renderer.appended) {
        this._renderer.elem.appendChild(this._renderer.image);
        this._renderer.appended = true;
      }

      return this.flagReset();

    }

  }

};

/**
 * @name Two.SVGRenderer
 * @class
 * @extends Two.Events
 * @param {Object} [parameters] - This object is inherited when constructing a new instance of {@link Two}.
 * @param {Element} [parameters.domElement] - The `<svg />` to draw to. If none given a new one will be constructed.
 * @description This class is used by {@link Two} when constructing with `type` of `Two.Types.svg` (the default type). It takes Two.js' scenegraph and renders it to a `<svg />`.
 */
var Renderer$1 = function(params) {

  /**
   * @name Two.SVGRenderer#domElement
   * @property {Element} - The `<svg />` associated with the Two.js scene.
   */
  this.domElement = params.domElement || svg.createElement('svg');

  /**
   * @name Two.SVGRenderer#scene
   * @property {Two.Group} - The root group of the scenegraph.
   */
  this.scene = new Group();
  this.scene.parent = this;

  /**
   * @name Two.SVGRenderer#defs
   * @property {SvgDefintionsElement} - The `<defs />` to apply gradients, patterns, and bitmap imagery.
   */
  this.defs = svg.createElement('defs');
  this.domElement.appendChild(this.defs);
  this.domElement.defs = this.defs;
  this.domElement.style.overflow = 'hidden';

};

_.extend(Renderer$1, {

  /**
   * @name Two.SVGRenderer.Utils
   * @property {Object} - A massive object filled with utility functions and properties to render Two.js objects to a `<svg />`.
   */
  Utils: svg

});

_.extend(Renderer$1.prototype, Events, {

  constructor: Renderer$1,

  /**
   * @name Two.SVGRenderer#setSize
   * @function
   * @param {Number} width - The new width of the renderer.
   * @param {Number} height - The new height of the renderer.
   * @description Change the size of the renderer.
   * @nota-bene Triggers a `Two.Events.resize`.
   */
  setSize: function(width, height) {

    this.width = width;
    this.height = height;

    svg.setAttributes(this.domElement, {
      width: width,
      height: height
    });

    return this.trigger(Events.Types.resize, width, height);

  },

  /**
   * @name Two.SVGRenderer#render
   * @function
   * @description Render the current scene to the `<svg />`.
   */
  render: function() {

    svg.group.render.call(this.scene, this.domElement);

    return this;

  }

});

// Constants

var multiplyMatrix = Matrix$1.Multiply,
  identity = [1, 0, 0, 0, 1, 0, 0, 0, 1],
  transformation = new NumArray(9),
  CanvasUtils = Renderer.Utils;

var webgl = {

  isHidden: /(undefined|none|transparent)/i,

  canvas: (root$1.document ? root$1.document.createElement('canvas') : { getContext: function() {} }),

  alignments: {
    left: 'start',
    middle: 'center',
    right: 'end'
  },

  matrix: new Matrix$1(),

  group: {

    removeChild: function(child, gl) {
      if (child.children) {
        for (var i = 0; i < child.children.length; i++) {
          webgl.group.removeChild(child.children[i], gl);
        }
        return;
      }
      // Deallocate texture to free up gl memory.
      gl.deleteTexture(child._renderer.texture);
      delete child._renderer.texture;
    },

    render: function(gl, program) {

      this._update();

      var parent = this.parent;
      var flagParentMatrix = (parent._matrix && parent._matrix.manual) || parent._flagMatrix;
      var flagMatrix = this._matrix.manual || this._flagMatrix;

      if (flagParentMatrix || flagMatrix) {

        if (!this._renderer.matrix) {
          this._renderer.matrix = new NumArray(9);
        }

        // Reduce amount of object / array creation / deletion
        this._matrix.toTransformArray(true, transformation);

        multiplyMatrix(transformation, parent._renderer.matrix, this._renderer.matrix);

        if (!(this._renderer.scale instanceof Vector)) {
          this._renderer.scale = new Vector();
        }

        if (this._scale instanceof Vector) {
          this._renderer.scale.x = this._scale.x;
          this._renderer.scale.y = this._scale.y;
        } else {
          this._renderer.scale.x = this._scale;
          this._renderer.scale.y = this._scale;
        }

        if (!(/renderer/i.test(parent._renderer.type))) {
          this._renderer.scale.x *= parent._renderer.scale.x;
          this._renderer.scale.y *= parent._renderer.scale.y;
        }

        if (flagParentMatrix) {
          this._flagMatrix = true;
        }

      }

      if (this._mask) {

        // Stencil away everything that isn't rendered by the mask
        gl.clear(gl.STENCIL_BUFFER_BIT);
        gl.enable(gl.STENCIL_TEST);

        gl.stencilFunc(gl.ALWAYS, 1, 0);
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.REPLACE);
        // Don't draw the element onto the canvas, only onto the stencil buffer
        gl.colorMask(false, false, false, false);

        webgl[this._mask._renderer.type].render.call(this._mask, gl, program, this);

        gl.stencilFunc(gl.EQUAL, 1, 0xff);
        gl.stencilOp(gl.KEEP, gl.KEEP, gl.KEEP);
        gl.colorMask(true, true, true, true);

      }

      this._flagOpacity = parent._flagOpacity || this._flagOpacity;

      this._renderer.opacity = this._opacity
        * (parent && parent._renderer ? parent._renderer.opacity : 1);

      var i;
      if (this._flagSubtractions) {
        for (i = 0; i < this.subtractions.length; i++) {
          webgl.group.removeChild(this.subtractions[i], gl);
        }
      }

      for (i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        webgl[child._renderer.type].render.call(child, gl, program);
      }

      if (this._mask) {
        gl.disable(gl.STENCIL_TEST);
      }

      return this.flagReset();

    }

  },

  path: {

    updateCanvas: function(elem) {

      var next, prev, a, c, ux, uy, vx, vy, ar, bl, br, cl, x, y;
      var isOffset;

      var commands = elem._renderer.vertices;
      var canvas = this.canvas;
      var ctx = this.ctx;

      // Styles
      var scale = elem._renderer.scale;
      var stroke = elem._stroke;
      var linewidth = elem._linewidth;
      var fill = elem._fill;
      var opacity = elem._renderer.opacity || elem._opacity;
      var cap = elem._cap;
      var join = elem._join;
      var miter = elem._miter;
      var closed = elem._closed;
      var dashes = elem.dashes;
      var length = commands.length;
      var last = length - 1;

      canvas.width = Math.max(Math.ceil(elem._renderer.rect.width * scale.x), 1);
      canvas.height = Math.max(Math.ceil(elem._renderer.rect.height * scale.y), 1);

      var centroid = elem._renderer.rect.centroid;
      var cx = centroid.x;
      var cy = centroid.y;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (fill) {
        if (typeof fill === 'string') {
          ctx.fillStyle = fill;
        } else {
          webgl[fill._renderer.type].render.call(fill, ctx, elem);
          ctx.fillStyle = fill._renderer.effect;
        }
      }
      if (stroke) {
        if (typeof stroke === 'string') {
          ctx.strokeStyle = stroke;
        } else {
          webgl[stroke._renderer.type].render.call(stroke, ctx, elem);
          ctx.strokeStyle = stroke._renderer.effect;
        }
        if (linewidth) {
          ctx.lineWidth = linewidth;
        }
        if (miter) {
          ctx.miterLimit = miter;
        }
        if (join) {
          ctx.lineJoin = join;
        }
        if (!closed && cap) {
          ctx.lineCap = cap;
        }
      }
      if (typeof opacity === 'number') {
        ctx.globalAlpha = opacity;
      }

      if (dashes && dashes.length > 0) {
        ctx.lineDashOffset = dashes.offset || 0;
        ctx.setLineDash(dashes);
      }

      var d;
      ctx.save();
      ctx.scale(scale.x, scale.y);

      ctx.translate(cx, cy);

      ctx.beginPath();
      for (var i = 0; i < commands.length; i++) {

        var b = commands[i];

        x = b.x;
        y = b.y;

        switch (b.command) {

          case Commands.close:
            ctx.closePath();
            break;

          case Commands.arc:

            var rx = b.rx;
            var ry = b.ry;
            var xAxisRotation = b.xAxisRotation;
            var largeArcFlag = b.largeArcFlag;
            var sweepFlag = b.sweepFlag;

            prev = closed ? mod(i - 1, length) : Math.max(i - 1, 0);
            a = commands[prev];

            var ax = a.x;
            var ay = a.y;

            CanvasUtils.renderSvgArcCommand(ctx, ax, ay, rx, ry, largeArcFlag, sweepFlag, xAxisRotation, x, y);
            break;

          case Commands.curve:

            prev = closed ? mod(i - 1, length) : Math.max(i - 1, 0);
            next = closed ? mod(i + 1, length) : Math.min(i + 1, last);

            a = commands[prev];
            c = commands[next];
            ar = (a.controls && a.controls.right) || Vector.zero;
            bl = (b.controls && b.controls.left) || Vector.zero;

            if (a._relative) {
              vx = ar.x + a.x;
              vy = ar.y + a.y;
            } else {
              vx = ar.x;
              vy = ar.y;
            }

            if (b._relative) {
              ux = bl.x + b.x;
              uy = bl.y + b.y;
            } else {
              ux = bl.x;
              uy = bl.y;
            }

            ctx.bezierCurveTo(vx, vy, ux, uy, x, y);

            if (i >= last && closed) {

              c = d;

              br = (b.controls && b.controls.right) || Vector.zero;
              cl = (c.controls && c.controls.left) || Vector.zero;

              if (b._relative) {
                vx = br.x + b.x;
                vy = br.y + b.y;
              } else {
                vx = br.x;
                vy = br.y;
              }

              if (c._relative) {
                ux = cl.x + c.x;
                uy = cl.y + c.y;
              } else {
                ux = cl.x;
                uy = cl.y;
              }

              x = c.x;
              y = c.y;

              ctx.bezierCurveTo(vx, vy, ux, uy, x, y);

            }

            break;

          case Commands.line:
            ctx.lineTo(x, y);
            break;

          case Commands.move:
            d = b;
            ctx.moveTo(x, y);
            break;

        }

      }

      // Loose ends

      if (closed) {
        ctx.closePath();
      }

      if (!webgl.isHidden.test(fill)) {
        isOffset = fill._renderer && fill._renderer.offset;
        if (isOffset) {
          ctx.save();
          ctx.translate(
            - fill._renderer.offset.x, - fill._renderer.offset.y);
          ctx.scale(fill._renderer.scale.x, fill._renderer.scale.y);
        }
        ctx.fill();
        if (isOffset) {
          ctx.restore();
        }
      }

      if (!webgl.isHidden.test(stroke)) {
        isOffset = stroke._renderer && stroke._renderer.offset;
        if (isOffset) {
          ctx.save();
          ctx.translate(
            - stroke._renderer.offset.x, - stroke._renderer.offset.y);
          ctx.scale(stroke._renderer.scale.x, stroke._renderer.scale.y);
          ctx.lineWidth = linewidth / stroke._renderer.scale.x;
        }
        ctx.stroke();
        if (isOffset) {
          ctx.restore();
        }
      }

      ctx.restore();

    },

    // Returns the rect of a set of verts. Typically takes vertices that are
    // "centered" around 0 and returns them to be anchored upper-left.
    getBoundingClientRect: function(vertices, border, rect) {

      var left = Infinity, right = -Infinity,
          top = Infinity, bottom = -Infinity,
          width, height;

      vertices.forEach(function(v) {

        var x = v.x, y = v.y, controls = v.controls;
        var a, b, c, d, cl, cr;

        top = Math.min(y, top);
        left = Math.min(x, left);
        right = Math.max(x, right);
        bottom = Math.max(y, bottom);

        if (!v.controls) {
          return;
        }

        cl = controls.left;
        cr = controls.right;

        if (!cl || !cr) {
          return;
        }

        a = v._relative ? cl.x + x : cl.x;
        b = v._relative ? cl.y + y : cl.y;
        c = v._relative ? cr.x + x : cr.x;
        d = v._relative ? cr.y + y : cr.y;

        if (!a || !b || !c || !d) {
          return;
        }

        top = Math.min(b, d, top);
        left = Math.min(a, c, left);
        right = Math.max(a, c, right);
        bottom = Math.max(b, d, bottom);

      });

      // Expand borders

      if (typeof border === 'number') {
        top -= border;
        left -= border;
        right += border;
        bottom += border;
      }

      width = right - left;
      height = bottom - top;

      rect.top = top;
      rect.left = left;
      rect.right = right;
      rect.bottom = bottom;
      rect.width = width;
      rect.height = height;

      if (!rect.centroid) {
        rect.centroid = {};
      }

      rect.centroid.x = - left;
      rect.centroid.y = - top;

    },

    render: function(gl, program, forcedParent) {

      if (!this._visible || !this._opacity) {
        return this;
      }

      this._update();

      // Calculate what changed

      var parent = forcedParent || this.parent;
      var flagParentMatrix = parent._matrix.manual || parent._flagMatrix;
      var flagMatrix = this._matrix.manual || this._flagMatrix;
      var parentChanged = this._renderer.parent !== parent;
      var flagTexture = this._flagVertices || this._flagFill
        || (this._fill instanceof LinearGradient && (this._fill._flagSpread || this._fill._flagStops || this._fill._flagEndPoints))
        || (this._fill instanceof RadialGradient && (this._fill._flagSpread || this._fill._flagStops || this._fill._flagRadius || this._fill._flagCenter || this._fill._flagFocal))
        || (this._fill instanceof Texture && (this._fill._flagLoaded && this._fill.loaded || this._fill._flagImage || this._fill._flagVideo || this._fill._flagRepeat || this._fill._flagOffset || this._fill._flagScale))
        || (this._stroke instanceof LinearGradient && (this._stroke._flagSpread || this._stroke._flagStops || this._stroke._flagEndPoints))
        || (this._stroke instanceof RadialGradient && (this._stroke._flagSpread || this._stroke._flagStops || this._stroke._flagRadius || this._stroke._flagCenter || this._stroke._flagFocal))
        || (this._stroke instanceof Texture && (this._stroke._flagLoaded && this._stroke.loaded || this._stroke._flagImage || this._stroke._flagVideo || this._stroke._flagRepeat || this._stroke._flagOffset || this._fill._flagScale))
        || this._flagStroke || this._flagLinewidth || this._flagOpacity
        || parent._flagOpacity || this._flagVisible || this._flagCap
        || this._flagJoin || this._flagMiter || this._flagScale
        || (this.dashes && this.dashes.length > 0)
        || !this._renderer.texture;

      if (flagParentMatrix || flagMatrix || parentChanged) {

        if (!this._renderer.matrix) {
          this._renderer.matrix = new NumArray(9);
        }

        // Reduce amount of object / array creation / deletion

        this._matrix.toTransformArray(true, transformation);

        multiplyMatrix(transformation, parent._renderer.matrix, this._renderer.matrix);

        if (!(this._renderer.scale instanceof Vector)) {
          this._renderer.scale = new Vector();
        }
        if (this._scale instanceof Vector) {
          this._renderer.scale.x = this._scale.x * parent._renderer.scale.x;
          this._renderer.scale.y = this._scale.y * parent._renderer.scale.y;
        } else {
          this._renderer.scale.x = this._scale * parent._renderer.scale.x;
          this._renderer.scale.y = this._scale * parent._renderer.scale.y;
        }

        if (parentChanged) {
          this._renderer.parent = parent;
        }
      }

      if (flagTexture) {

        if (!this._renderer.rect) {
          this._renderer.rect = {};
        }

        this._renderer.opacity = this._opacity * parent._renderer.opacity;

        webgl.path.getBoundingClientRect(this._renderer.vertices, this._linewidth, this._renderer.rect);

        webgl.updateTexture.call(webgl, gl, this);

      } else {

        // We still need to update child Two elements on the fill and
        // stroke properties.
        if (this._fill && this._fill._update) {
          this._fill._update();
        }
        if (this._stroke && this._stroke._update) {
          this._stroke._update();
        }

      }

      // if (this._mask) {
      //   webgl[this._mask._renderer.type].render.call(mask, gl, program, this);
      // }

      if (this._clip && !forcedParent) {
        return;
      }

      // Draw Texture
      gl.bindTexture(gl.TEXTURE_2D, this._renderer.texture);

      // Draw Rect
      var rect = this._renderer.rect;
      gl.uniformMatrix3fv(program.matrix, false, this._renderer.matrix);
      gl.uniform4f(program.rect, rect.left, rect.top, rect.right, rect.bottom);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      return this.flagReset();

    }

  },

  text: {

    updateCanvas: function(elem) {

      var canvas = this.canvas;
      var ctx = this.ctx;

      // Styles
      var scale = elem._renderer.scale;
      var stroke = elem._stroke;
      var linewidth = elem._linewidth * scale;
      var fill = elem._fill;
      var opacity = elem._renderer.opacity || elem._opacity;
      var dashes = elem.dashes;
      var decoration = elem._decoration;
      var alignment = CanvasUtils.alignments[elem._alignment] || elem._alignment;
      var baseline = elem._baseline;

      canvas.width = Math.max(Math.ceil(elem._renderer.rect.width * scale.x), 1);
      canvas.height = Math.max(Math.ceil(elem._renderer.rect.height * scale.y), 1);

      var centroid = elem._renderer.rect.centroid;
      var cx = centroid.x;
      var cy = centroid.y;

      var a, b, c, d, e, sx, sy, x1, y1, x2, y2;
      var isOffset = fill._renderer && fill._renderer.offset
        && stroke._renderer && stroke._renderer.offset;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (!isOffset) {
        ctx.font = [elem._style, elem._weight, elem._size + 'px/' +
          elem._leading + 'px', elem._family].join(' ');
      }

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';

      // Styles
      if (fill) {
        if (typeof fill === 'string') {
          ctx.fillStyle = fill;
        } else {
          webgl[fill._renderer.type].render.call(fill, ctx, elem);
          ctx.fillStyle = fill._renderer.effect;
        }
      }
      if (stroke) {
        if (typeof stroke === 'string') {
          ctx.strokeStyle = stroke;
        } else {
          webgl[stroke._renderer.type].render.call(stroke, ctx, elem);
          ctx.strokeStyle = stroke._renderer.effect;
        }
        if (linewidth) {
          ctx.lineWidth = linewidth;
        }
      }
      if (typeof opacity === 'number') {
        ctx.globalAlpha = opacity;
      }
      if (dashes && dashes.length > 0) {
        ctx.lineDashOffset = dashes.offset || 0;
        ctx.setLineDash(dashes);
      }

      ctx.save();
      ctx.scale(scale.x, scale.y);
      ctx.translate(cx, cy);

      if (!webgl.isHidden.test(fill)) {

        if (fill._renderer && fill._renderer.offset) {

          sx = fill._renderer.scale.x;
          sy = fill._renderer.scale.y;

          ctx.save();
          ctx.translate( - fill._renderer.offset.x,
            - fill._renderer.offset.y);
          ctx.scale(sx, sy);

          a = elem._size / fill._renderer.scale.y;
          b = elem._leading / fill._renderer.scale.y;
          ctx.font = [elem._style, elem._weight, a + 'px/',
            b + 'px', elem._family].join(' ');

          c = fill._renderer.offset.x / fill._renderer.scale.x;
          d = fill._renderer.offset.y / fill._renderer.scale.y;

          ctx.fillText(elem.value, c, d);
          ctx.restore();

        } else {
          ctx.fillText(elem.value, 0, 0);
        }

      }

      if (!webgl.isHidden.test(stroke)) {

        if (stroke._renderer && stroke._renderer.offset) {

          sx = stroke._renderer.scale.x;
          sy = stroke._renderer.scale.y;

          ctx.save();
          ctx.translate(- stroke._renderer.offset.x,
            - stroke._renderer.offset.y);
          ctx.scale(sx, sy);

          a = elem._size / stroke._renderer.scale.y;
          b = elem._leading / stroke._renderer.scale.y;
          ctx.font = [elem._style, elem._weight, a + 'px/',
            b + 'px', elem._family].join(' ');

          c = stroke._renderer.offset.x / stroke._renderer.scale.x;
          d = stroke._renderer.offset.y / stroke._renderer.scale.y;
          e = linewidth / stroke._renderer.scale.x;

          ctx.lineWidth = e;
          ctx.strokeText(elem.value, c, d);
          ctx.restore();

        } else {
          ctx.strokeText(elem.value, 0, 0);
        }

      }

      // Handle text-decoration
      if (/(underline|strikethrough)/i.test(decoration)) {

        var metrics = ctx.measureText(elem.value);

        switch (decoration) {
          case 'underline':
            y1 = metrics.actualBoundingBoxAscent;
            y2 = metrics.actualBoundingBoxAscent;
            break;
          case 'strikethrough':
            y1 = 0;
            y2 = 0;
            break;
        }

        x1 = - metrics.width / 2;
        x2 = metrics.width / 2;

        ctx.lineWidth = Math.max(Math.floor(elem._size / 15), 1);
        ctx.strokeStyle = ctx.fillStyle;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();

      }

      ctx.restore();

    },

    getBoundingClientRect: function(elem, rect) {

      var ctx = webgl.ctx;

      ctx.font = [elem._style, elem._weight, elem._size + 'px/' +
        elem._leading + 'px', elem._family].join(' ');

      ctx.textAlign = 'center';
      ctx.textBaseline = elem._baseline;

      // TODO: Estimate this better
      var width = ctx.measureText(elem._value).width * 1.25;
      var height = Math.max(elem._size, elem._leading) * 1.25;

      if (this._linewidth && !webgl.isHidden.test(this._stroke)) {
        width += this._linewidth * 2;
        height += this._linewidth * 2;
      }

      var w = width / 2;
      var h = height / 2;

      switch (webgl.alignments[elem._alignment] || elem._alignment) {

        case webgl.alignments.left:
          rect.left = 0;
          rect.right = width;
          break;
        case webgl.alignments.right:
          rect.left = - width;
          rect.right = 0;
          break;
        default:
          rect.left = - w;
          rect.right = w;
      }

      // TODO: Gradients aren't inherited...
      switch (elem._baseline) {
        case 'bottom':
          rect.top = - height;
          rect.bottom = 0;
          break;
        case 'top':
          rect.top = 0;
          rect.bottom = height;
          break;
        default:
          rect.top = - h;
          rect.bottom = h;
      }

      rect.width = width;
      rect.height = height;

      if (!rect.centroid) {
        rect.centroid = {};
      }

      // TODO:
      rect.centroid.x = w;
      rect.centroid.y = h;

    },

    render: function(gl, program, forcedParent) {

      if (!this._visible || !this._opacity) {
        return this;
      }

      this._update();

      // Calculate what changed

      var parent = forcedParent || this.parent;
      var flagParentMatrix = parent._matrix.manual || parent._flagMatrix;
      var flagMatrix = this._matrix.manual || this._flagMatrix;
      var parentChanged = this._renderer.parent !== parent;
      var flagTexture = this._flagVertices || this._flagFill
        || (this._fill instanceof LinearGradient && (this._fill._flagSpread || this._fill._flagStops || this._fill._flagEndPoints))
        || (this._fill instanceof RadialGradient && (this._fill._flagSpread || this._fill._flagStops || this._fill._flagRadius || this._fill._flagCenter || this._fill._flagFocal))
        || (this._fill instanceof Texture && (this._fill._flagLoaded && this._fill.loaded || this._fill._flagImage || this._fill._flagVideo || this._fill._flagRepeat || this._fill._flagOffset || this._fill._flagScale))
        || (this._stroke instanceof LinearGradient && (this._stroke._flagSpread || this._stroke._flagStops || this._stroke._flagEndPoints))
        || (this._stroke instanceof RadialGradient && (this._stroke._flagSpread || this._stroke._flagStops || this._stroke._flagRadius || this._stroke._flagCenter || this._stroke._flagFocal))
        || (this._stroke instanceof Texture && (this._stroke._flagLoaded && this._stroke.loaded || this._stroke._flagImage || this._stroke._flagVideo || this._stroke._flagRepeat || this._stroke._flagOffset || this._fill._flagScale))
        || this._flagStroke || this._flagLinewidth || this._flagOpacity
        || parent._flagOpacity || this._flagVisible || this._flagScale
        || this._flagValue || this._flagFamily || this._flagSize
        || this._flagLeading || this._flagAlignment || this._flagBaseline
        || this._flagStyle || this._flagWeight || this._flagDecoration
        || (this.dashes && this.dashes.length > 0)
        || !this._renderer.texture;

      if (flagParentMatrix || flagMatrix || parentChanged) {

        if (!this._renderer.matrix) {
          this._renderer.matrix = new NumArray(9);
        }

        // Reduce amount of object / array creation / deletion

        this._matrix.toTransformArray(true, transformation);

        multiplyMatrix(transformation, parent._renderer.matrix, this._renderer.matrix);

        if (!(this._renderer.scale instanceof Vector)) {
          this._renderer.scale = new Vector();
        }
        if (this._scale instanceof Vector) {
          this._renderer.scale.x = this._scale.x * parent._renderer.scale.x;
          this._renderer.scale.y = this._scale.y * parent._renderer.scale.y;
        } else {
          this._renderer.scale.x = this._scale * parent._renderer.scale.x;
          this._renderer.scale.y = this._scale * parent._renderer.scale.y;
        }

        if (parentChanged) {
          this._renderer.parent = parent;
        }
      }

      if (flagTexture) {

        if (!this._renderer.rect) {
          this._renderer.rect = {};
        }

        this._renderer.opacity = this._opacity * parent._renderer.opacity;

        webgl.text.getBoundingClientRect(this, this._renderer.rect);

        webgl.updateTexture.call(webgl, gl, this);

      } else {

        // We still need to update child Two elements on the fill and
        // stroke properties.
        if (this._fill && this._fill._update) {
          this._fill._update();
        }
        if (this._stroke && this._stroke._update) {
          this._stroke._update();
        }

      }

      // if (this._mask) {
      //   webgl[this._mask._renderer.type].render.call(mask, gl, program, this);
      // }

      if (this._clip && !forcedParent) {
        return;
      }

      // Draw Texture
      gl.bindTexture(gl.TEXTURE_2D, this._renderer.texture);

      // Draw Rect
      var rect = this._renderer.rect;
      gl.uniformMatrix3fv(program.matrix, false, this._renderer.matrix);
      gl.uniform4f(program.rect, rect.left, rect.top, rect.right, rect.bottom);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      return this.flagReset();

    }

  },

  'linear-gradient': {

    render: function(ctx, elem) {

      if (!ctx.canvas.getContext('2d')) {
        return;
      }

      this._update();

      if (!this._renderer.effect || this._flagEndPoints || this._flagStops) {

        this._renderer.effect = ctx.createLinearGradient(
          this.left._x, this.left._y,
          this.right._x, this.right._y
        );

        for (var i = 0; i < this.stops.length; i++) {
          var stop = this.stops[i];
          this._renderer.effect.addColorStop(stop._offset, stop._color);
        }

      }

      return this.flagReset();

    }

  },

  'radial-gradient': {

    render: function(ctx, elem) {

      if (!ctx.canvas.getContext('2d')) {
        return;
      }

      this._update();

      if (!this._renderer.effect || this._flagCenter || this._flagFocal
          || this._flagRadius || this._flagStops) {

        this._renderer.effect = ctx.createRadialGradient(
          this.center._x, this.center._y, 0,
          this.focal._x, this.focal._y, this._radius
        );

        for (var i = 0; i < this.stops.length; i++) {
          var stop = this.stops[i];
          this._renderer.effect.addColorStop(stop._offset, stop._color);
        }

      }

      return this.flagReset();

    }

  },

  texture: {

    render: function(ctx, elem) {

      if (!ctx.canvas.getContext('2d')) {
        return;
      }

      this._update();

      var image = this.image;

      if (((this._flagLoaded || this._flagImage || this._flagVideo || this._flagRepeat) && this.loaded)) {
        this._renderer.effect = ctx.createPattern(image, this._repeat);
      } else if (!this._renderer.effect) {
        return this.flagReset();
      }

      if (this._flagOffset || this._flagLoaded || this._flagScale) {

        if (!(this._renderer.offset instanceof Vector)) {
          this._renderer.offset = new Vector();
        }

        this._renderer.offset.x = - this._offset.x;
        this._renderer.offset.y = - this._offset.y;

        if (image) {

          this._renderer.offset.x += image.width / 2;
          this._renderer.offset.y += image.height / 2;

          if (this._scale instanceof Vector) {
            this._renderer.offset.x *= this._scale.x;
            this._renderer.offset.y *= this._scale.y;
          } else {
            this._renderer.offset.x *= this._scale;
            this._renderer.offset.y *= this._scale;
          }
        }

      }

      if (this._flagScale || this._flagLoaded) {

        if (!(this._renderer.scale instanceof Vector)) {
          this._renderer.scale = new Vector();
        }

        if (this._scale instanceof Vector) {
          this._renderer.scale.copy(this._scale);
        } else {
          this._renderer.scale.set(this._scale, this._scale);
        }

      }

      return this.flagReset();

    }

  },

  updateTexture: function(gl, elem) {

    this[elem._renderer.type].updateCanvas.call(webgl, elem);

    if (!elem._renderer.texture) {
      elem._renderer.texture = gl.createTexture();
    }

    gl.bindTexture(gl.TEXTURE_2D, elem._renderer.texture);

    // Set the parameters so we can render any size image.
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
    // gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);

    if (this.canvas.width <= 0 || this.canvas.height <= 0) {
      return;
    }

    // Upload the image into the texture.
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this.canvas);

  },

  program: {

    create: function(gl, shaders) {
      var program, linked, error;
      program = gl.createProgram();
      _.each(shaders, function(s) {
        gl.attachShader(program, s);
      });

      gl.linkProgram(program);
      linked = gl.getProgramParameter(program, gl.LINK_STATUS);
      if (!linked) {
        error = gl.getProgramInfoLog(program);
        gl.deleteProgram(program);
        throw new TwoError('unable to link program: ' + error);
      }

      return program;

    }

  },

  shaders: {

    create: function(gl, source, type) {
      var shader, compiled, error;
      shader = gl.createShader(gl[type]);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      compiled = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
      if (!compiled) {
        error = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        throw new TwoError('unable to compile shader ' + shader + ': ' + error);
      }

      return shader;

    },

    types: {
      vertex: 'VERTEX_SHADER',
      fragment: 'FRAGMENT_SHADER'
    },

    vertex: [
      'precision mediump float;',
      'attribute vec2 a_position;',
      '',
      'uniform mat3 u_matrix;',
      'uniform vec2 u_resolution;',
      'uniform vec4 u_rect;',
      '',
      'varying vec2 v_textureCoords;',
      '',
      'void main() {',
      '   vec2 rectCoords = (a_position * (u_rect.zw - u_rect.xy)) + u_rect.xy;',
      '   vec2 projected = (u_matrix * vec3(rectCoords, 1.0)).xy;',
      '   vec2 normal = projected / u_resolution;',
      '   vec2 clipspace = (normal * 2.0) - 1.0;',
      '',
      '   gl_Position = vec4(clipspace * vec2(1.0, -1.0), 0.0, 1.0);',
      '   v_textureCoords = a_position;',
      '}'
    ].join('\n'),

    fragment: [
      'precision mediump float;',
      '',
      'uniform sampler2D u_image;',
      'varying vec2 v_textureCoords;',
      '',
      'void main() {',
      '  vec4 texel = texture2D(u_image, v_textureCoords);',
      '  if (texel.a == 0.0) {',
      '    discard;',
      '  }',
      '  gl_FragColor = texel;',
      '}'
    ].join('\n')

  },

  TextureRegistry: new Registry()

};

webgl.ctx = webgl.canvas.getContext('2d');

/**
 * @name Two.WebGLRenderer
 * @class
 * @extends Two.Events
 * @param {Object} [parameters] - This object is inherited when constructing a new instance of {@link Two}.
 * @param {Element} [parameters.domElement] - The `<canvas />` to draw to. If none given a new one will be constructed.
 * @param {CanvasElement} [parameters.offscreenElement] - The offscreen two dimensional `<canvas />` to render each element on WebGL texture updates.
 * @param {Boolean} [parameters.antialias] - Determines whether the canvas should clear render with antialias on.
 * @description This class is used by {@link Two} when constructing with `type` of `Two.Types.webgl`. It takes Two.js' scenegraph and renders it to a `<canvas />` through the WebGL api.
 * @see {@link https://www.khronos.org/registry/webgl/specs/latest/1.0/}
 */
var Renderer$2 = function(params) {

  var gl, vs, fs;

  /**
   * @name Two.WebGLRenderer#domElement
   * @property {Element} - The `<canvas />` associated with the Two.js scene.
   */
  this.domElement = params.domElement || document.createElement('canvas');

  if (typeof params.offscreenElement !== 'undefined') {
    webgl.canvas = params.offscreenElement;
    webgl.ctx = webgl.canvas.getContext('2d');
  }

  /**
   * @name Two.WebGLRenderer#scene
   * @property {Two.Group} - The root group of the scenegraph.
   */
  this.scene = new Group();
  this.scene.parent = this;

  this._renderer = {
    type: 'renderer',
    matrix: new NumArray(identity),
    scale: 1,
    opacity: 1
  };
  this._flagMatrix = true;

  // http://games.greggman.com/game/webgl-and-alpha/
  // http://www.khronos.org/registry/webgl/specs/latest/#5.2
  params = _.defaults(params || {}, {
    antialias: false,
    alpha: true,
    premultipliedAlpha: true,
    stencil: true,
    preserveDrawingBuffer: true,
    overdraw: false
  });

  /**
   * @name Two.WebGLRenderer#overdraw
   * @property {Boolean} - Determines whether the canvas clears the background each draw call.
   * @default true
   */
  this.overdraw = params.overdraw;

  /**
   * @name Two.WebGLRenderer#ctx
   * @property {WebGLContext} - Associated two dimensional context to render on the `<canvas />`.
   */
  gl = this.ctx = this.domElement.getContext('webgl', params) ||
    this.domElement.getContext('experimental-webgl', params);

  if (!this.ctx) {
    throw new TwoError(
      'unable to create a webgl context. Try using another renderer.');
  }

  // Compile Base Shaders to draw in pixel space.
  vs = webgl.shaders.create(
    gl, webgl.shaders.vertex, webgl.shaders.types.vertex);
  fs = webgl.shaders.create(
    gl, webgl.shaders.fragment, webgl.shaders.types.fragment);

  /**
   * @name Two.WebGLRenderer#program
   * @property {WebGLProgram} - Associated WebGL program to render all elements from the scenegraph.
   */
  this.program = webgl.program.create(gl, [vs, fs]);
  gl.useProgram(this.program);

  // Create and bind the drawing buffer

  // look up where the vertex data needs to go.
  this.program.position = gl.getAttribLocation(this.program, 'a_position');
  this.program.matrix = gl.getUniformLocation(this.program, 'u_matrix');
  this.program.rect = gl.getUniformLocation(this.program, 'u_rect');

  // Bind the vertex buffer
  var positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.vertexAttribPointer(this.program.position, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(this.program.position);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new NumArray([
      0, 0,
      1, 0,
      0, 1,
      0, 1,
      1, 0,
      1, 1
    ]),
    gl.STATIC_DRAW);

  // Setup some initial statements of the gl context
  gl.enable(gl.BLEND);

  gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);

  gl.blendEquation(gl.FUNC_ADD);
  gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
};

_.extend(Renderer$2, {

  /**
   * @name Two.WebGLRenderer.Utils
   * @property {Object} - A massive object filled with utility functions and properties to render Two.js objects to a `<canvas />` through the WebGL API.
   */
  Utils: webgl

});

_.extend(Renderer$2.prototype, Events, {

  constructor: Renderer$2,

  /**
   * @name Two.WebGLRenderer#setSize
   * @function
   * @fires resize
   * @param {Number} width - The new width of the renderer.
   * @param {Number} height - The new height of the renderer.
   * @param {Number} [ratio] - The new pixel ratio (pixel density) of the renderer. Defaults to calculate the pixel density of the user's screen.
   * @description Change the size of the renderer.
   */
  setSize: function(width, height, ratio) {

    this.width = width;
    this.height = height;

    this.ratio = typeof ratio === 'undefined' ? getRatio(this.ctx) : ratio;

    this.domElement.width = width * this.ratio;
    this.domElement.height = height * this.ratio;

    if (_.isObject(this.domElement.style)) {
      _.extend(this.domElement.style, {
        width: width + 'px',
        height: height + 'px'
      });
    }

    // Set for this.stage parent scaling to account for HDPI
    this._renderer.matrix[0] = this._renderer.matrix[4] = this._renderer.scale = this.ratio;

    this._flagMatrix = true;

    this.ctx.viewport(0, 0, width * this.ratio, height * this.ratio);

    var resolutionLocation = this.ctx.getUniformLocation(
      this.program, 'u_resolution');
    this.ctx.uniform2f(resolutionLocation, width * this.ratio, height * this.ratio);

    return this.trigger(Events.Types.resize, width, height, ratio);

  },

  /**
   * @name Two.WebGLRenderer#render
   * @function
   * @description Render the current scene to the `<canvas />`.
   */
  render: function() {

    var gl = this.ctx;

    if (!this.overdraw) {
      gl.clear(gl.COLOR_BUFFER_BIT);
    }

    webgl.group.render.call(this.scene, gl, this.program);
    this._flagMatrix = false;

    return this;

  }

});

// Utils

/**
 * @name Two
 * @class
 * @global
 * @param {Object} [options]
 * @param {Boolean} [options.fullscreen=false] - Set to `true` to automatically make the stage adapt to the width and height of the parent document. This parameter overrides `width` and `height` parameters if set to `true`. This overrides `options.fitted` as well.
 * @param {Boolean} [options.fitted=false] = Set to `true` to automatically make the stage adapt to the width and height of the parent element. This parameter overrides `width` and `height` parameters if set to `true`.
 * @param {Number} [options.width=640] - The width of the stage on construction. This can be set at a later time.
 * @param {Number} [options.height=480] - The height of the stage on construction. This can be set at a later time.
 * @param {String} [options.type=Two.Types.svg] - The type of renderer to setup drawing with. See {@link Two.Types} for available options.
 * @param {Boolean} [options.autostart=false] - Set to `true` to add the instance to draw on `requestAnimationFrame`. This is a convenient substitute for {@link Two#play}.
 * @param {Element} [options.domElement] - The canvas or SVG element to draw into. This overrides the `options.type` argument.
 * @description The entrypoint for Two.js. Instantiate a `new Two` in order to setup a scene to render to. `Two` is also the publicly accessible namespace that all other sub-classes, functions, and utilities attach to.
 */
var Two = function(options) {

  // Determine what Renderer to use and setup a scene.

  var params = _.defaults(options || {}, {
    fullscreen: false,
    fitted: false,
    width: 640,
    height: 480,
    type: Two.Types.svg,
    autostart: false
  });

  _.each(params, function(v, k) {
    if (/fullscreen/i.test(k) || /autostart/i.test(k)) {
      return;
    }
    this[k] = v;
  }, this);

  // Specified domElement overrides type declaration only if the element does not support declared renderer type.
  if (_.isElement(params.domElement)) {
    var tagName = params.domElement.tagName.toLowerCase();
    // TODO: Reconsider this if statement's logic.
    if (!/^(CanvasRenderer-canvas|WebGLRenderer-canvas|SVGRenderer-svg)$/.test(this.type+'-'+tagName)) {
      this.type = Two.Types[tagName];
    }
  }

  this.renderer = new Two[this.type](this);
  this.setPlaying(params.autostart);
  this.frameCount = 0;

  /**
   * @name Two#fit
   * @function
   * @description If `options.fullscreen` or `options.fitted` in construction create this function. It sets the `width` and `height` of the instance to its respective parent `window` or `element` depending on the `options` passed.
   */
  if (params.fullscreen) {

    this.fit = fitToWindow.bind(this);
    this.fit.domElement = window;
    this.fit.attached = true;
    _.extend(document.body.style, {
      overflow: 'hidden',
      margin: 0,
      padding: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: 'fixed'
    });
    _.extend(this.renderer.domElement.style, {
      display: 'block',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      position: 'fixed'
    });
    dom.bind(this.fit.domElement, 'resize', this.fit);
    this.fit();

  } else if (params.fitted) {

    this.fit = fitToParent.bind(this);
    _.extend(this.renderer.domElement.style, {
      display: 'block'
    });

  } else if (!_.isElement(params.domElement)) {

    this.renderer.setSize(params.width, params.height, this.ratio);
    this.width = params.width;
    this.height = params.height;

  }

  this.renderer.bind(Events.Types.resize, updateDimensions.bind(this));
  this.scene = this.renderer.scene;

  Two.Instances.push(this);
  if (params.autostart) {
    raf.init();
  }

};

_.extend(Two, Constants);

_.extend(Two.prototype, Events, {

  constructor: Two,

  /**
   * @name Two#appendTo
   * @function
   * @param {Element} elem - The DOM element to append the Two.js stage to.
   * @description Shorthand method to append your instance of Two.js to the `document`.
   */
  appendTo: function(elem) {

    elem.appendChild(this.renderer.domElement);

    if (this.fit) {
      if (this.fit.domElement !== window) {
        this.fit.domElement = elem;
        this.fit.attached = false;
      }
      this.update();
    }

    return this;

  },

  /**
   * @name Two#play
   * @function
   * @fires Two.Events.Types.play event
   * @description Call to start an internal animation loop.
   * @nota-bene This function initiates a `requestAnimationFrame` loop.
   */
  play: function() {

    this.playing = true;
    raf.init();
    return this.trigger(Events.Types.play);

  },

  /**
   * @name Two#pause
   * @function
   * @fires Two.Events.Types.pause event
   * @description Call to stop the internal animation loop for a specific instance of Two.js.
   */
  pause: function() {

    this.playing = false;
    return this.trigger(Events.Types.pause);

  },

  setPlaying: function(p) {
    this.playing = p;
  },

  /**
   * @name Two#release
   * @function
   * @param {Object} obj
   * @returns {Object} The object passed for event deallocation.
   * @description Release an arbitrary class' events from the Two.js corpus and recurse through its children and or vertices.
   */
  release: function(obj) {

    var i, v, child;

    if (!_.isObject(obj)) {
      return;
    }

    if (typeof obj.unbind === 'function') {
      obj.unbind();
    }

    if (obj.vertices) {
      if (typeof obj.vertices.unbind === 'function') {
        obj.vertices.unbind();
      }
      for (i = 0; i < obj.vertices.length; i++) {
        v = obj.vertices[i];
        if (typeof v.unbind === 'function') {
          v.unbind();
        }
      }
    }

    if (obj.children) {
      for (i = 0; i < obj.children.length; i++) {
        child = obj.children[i];
        this.release(child);
      }
    }

    return obj;

  },

  /**
   * @name Two#update
   * @fires Two.Events.Types.update event
   * @description Update positions and calculations in one pass before rendering. Then render to the canvas.
   * @nota-bene This function is called automatically if using {@link Two#play} or the `autostart` parameter in construction.
   */
  update: function() {

    var animated = !!this._lastFrame;
    var now = _.performance.now();

    if (animated) {
      this.timeDelta = parseFloat((now - this._lastFrame).toFixed(3));
    }
    this._lastFrame = now;

    if (this.fit && !this.fit.attached) {

        dom.bind(this.fit.domElement, 'resize', this.fit);
        this.fit.attached = true;
        this.fit();

    }

    var width = this.width;
    var height = this.height;
    var renderer = this.renderer;

    // Update width / height for the renderer
    if (width !== renderer.width || height !== renderer.height) {
      renderer.setSize(width, height, this.ratio);
    }

    this.trigger(Events.Types.update, this.frameCount, this.timeDelta);

    return this.render();

  },

  /**
   * @name Two#render
   * @fires render
   * @description Render all drawable and visible objects of the scene.
   */
  render: function() {

    this.renderer.render();
    return this.trigger(Events.Types.render, this.frameCount++);

  },

  // Convenience Methods

  /**
   * @name Two#add
   * @function
   * @param {(Two.Shape[]|...Two.Shape)} [objects] - An array of Two.js objects. Alternatively can add objects as individual arguments.
   * @description A shorthand method to add specific Two.js objects to the scene.
   */
  add: function(o) {

    var objects = o;
    if (!(objects instanceof Array)) {
      objects = Array.prototype.slice.call(arguments);
    }

    this.scene.add(objects);
    return this;

  },

  /**
   * @name Two#remove
   * @function
   * @param {(Two.Shape[]|...Two.Shape)} [objects] - An array of Two.js objects.
   * @description A shorthand method to remove specific Two.js objects from the scene.
   */
  remove: function(o) {

    var objects = o;
    if (!(objects instanceof Array)) {
      objects = Array.prototype.slice.call(arguments);
    }

    this.scene.remove(objects);

    return this;

  },

  /**
   * @name Two#clear
   * @function
   * @description Remove all all Two.js objects from the scene.
   */
  clear: function() {

    this.scene.remove(this.scene.children);
    return this;

  },

  /**
   * @name Two#makeLine
   * @function
   * @param {Number} x1
   * @param {Number} y1
   * @param {Number} x2
   * @param {Number} y2
   * @returns {Two.Line}
   * @description Creates a Two.js line and adds it to the scene.
   */
  makeLine: function(x1, y1, x2, y2) {

    var line = new Line(x1, y1, x2, y2);
    this.scene.add(line);

    return line;

  },

  /**
   * @name Two#makeArrow
   * @function
   * @param {Number} x1
   * @param {Number} y1
   * @param {Number} x2
   * @param {Number} y2
   * @returns {Two.Path}
   * @description Creates a Two.js arrow and adds it to the scene.
   */
  makeArrow: function(x1, y1, x2, y2, size) {

    var headlen = typeof size === 'number' ? size : 10;

    var angle = Math.atan2(y2 - y1, x2 - x1);

    var vertices = [

      new Anchor(x1, y1, undefined, undefined, undefined, undefined, Commands.move),
      new Anchor(x2, y2, undefined, undefined, undefined, undefined, Commands.line),
      new Anchor(
        x2 - headlen * Math.cos(angle - Math.PI / 4),
        y2 - headlen * Math.sin(angle - Math.PI / 4),
        undefined, undefined, undefined, undefined, Commands.line
      ),

      new Anchor(x2, y2, undefined, undefined, undefined, undefined, Commands.move),
      new Anchor(
        x2 - headlen * Math.cos(angle + Math.PI / 4),
        y2 - headlen * Math.sin(angle + Math.PI / 4),
        undefined, undefined, undefined, undefined, Commands.line
      )

    ];

    var path = new Path(vertices, false, false, true);
    path.noFill();
    path.cap = 'round';
    path.join = 'round';

    this.scene.add(path);

    return path;
  },

  /**
   * @name Two#makeRectangle
   * @function
   * @param {Number} x
   * @param {Number} y
   * @param {Number} width
   * @param {Number} height
   * @returns {Two.Rectangle}
   * @description Creates a Two.js rectangle and adds it to the scene.
   */
  makeRectangle: function(x, y, width, height) {

    var rect = new Rectangle(x, y, width, height);
    this.scene.add(rect);

    return rect;

  },

  /**
   * @name Two#makeRoundedRectangle
   * @function
   * @param {Number} x
   * @param {Number} y
   * @param {Number} width
   * @param {Number} height
   * @param {Number} sides
   * @returns {Two.Rectangle}
   * @description Creates a Two.js rounded rectangle and adds it to the scene.
   */
  makeRoundedRectangle: function(x, y, width, height, sides) {

    var rect = new RoundedRectangle(x, y, width, height, sides);
    this.scene.add(rect);

    return rect;

  },

  /**
   * @name Two#makeCircle
   * @function
   * @param {Number} x
   * @param {Number} y
   * @param {Number} radius
   * @param {Number} [resolution=4]
   * @returns {Two.Circle}
   * @description Creates a Two.js circle and adds it to the scene.
   */
  makeCircle: function(x, y, radius, resolution) {

    var circle = new Circle(x, y, radius, resolution);
    this.scene.add(circle);

    return circle;

  },

  /**
   * @name Two#makeEllipse
   * @function
   * @param {Number} x
   * @param {Number} y
   * @param {Number} rx
   * @param {Number} ry
   * @param {Number} [resolution=4]
   * @returns {Two.Ellipse}
   * @description Creates a Two.js ellipse and adds it to the scene.
   */
  makeEllipse: function(x, y, rx, ry, resolution) {

    var ellipse = new Ellipse(x, y, rx, ry, resolution);
    this.scene.add(ellipse);

    return ellipse;

  },

  /**
   * @name Two#makeStar
   * @function
   * @param {Number} x
   * @param {Number} y
   * @param {Number} outerRadius
   * @param {Number} innerRadius
   * @param {Number} sides
   * @returns {Two.Star}
   * @description Creates a Two.js star and adds it to the scene.
   */
  makeStar: function(ox, oy, outerRadius, innerRadius, sides) {

    var star = new Star(ox, oy, outerRadius, innerRadius, sides);
    this.scene.add(star);

    return star;

  },

  /**
   * @name Two#makeCurve
   * @function
   * @param {Two.Anchor[]} [points] - An array of {@link Two.Anchor} points.
   * @param {...Number} - Alternatively you can pass alternating `x` / `y` coordinate values as individual arguments. These will be combined into {@link Two.Anchor}s for use in the path.
   * @returns {Two.Path} - Where `path.curved` is set to `true`.
   * @description Creates a Two.js path that is curved and adds it to the scene.
   * @nota-bene In either case of passing an array or passing numbered arguments the last argument is an optional `Boolean` that defines whether the path should be open or closed.
   */
  makeCurve: function(p) {

    var l = arguments.length, points = p;
    if (!Array.isArray(p)) {
      points = [];
      for (var i = 0; i < l; i+=2) {
        var x = arguments[i];
        if (typeof x !== 'number') {
          break;
        }
        var y = arguments[i + 1];
        points.push(new Anchor(x, y));
      }
    }

    var last = arguments[l - 1];
    var curve = new Path(points, !(typeof last === 'boolean' ? last : undefined), true);
    var rect = curve.getBoundingClientRect();
    curve.center().translation
      .set(rect.left + rect.width / 2, rect.top + rect.height / 2);

    this.scene.add(curve);

    return curve;

  },

  /**
   * @name Two#makePolygon
   * @function
   * @param {Number} x
   * @param {Number} y
   * @param {Number} radius
   * @param {Number} sides
   * @returns {Two.Polygon}
   * @description Creates a Two.js polygon and adds it to the scene.
   */
  makePolygon: function(x, y, radius, sides) {

    var poly = new Polygon(x, y, radius, sides);
    this.scene.add(poly);

    return poly;

  },

  /**
   * @name Two#makeArcSegment
   * @function
   * @param {Number} x
   * @param {Number} y
   * @param {Number} innerRadius
   * @param {Number} outerRadius
   * @param {Number} startAngle
   * @param {Number} endAngle
   * @param {Number} [resolution=Two.Resolution] - The number of vertices that should comprise the arc segment.
   */
  makeArcSegment: function(ox, oy, ir, or, sa, ea, res) {
    var arcSegment = new ArcSegment(ox, oy, ir, or, sa, ea, res);
    this.scene.add(arcSegment);
    return arcSegment;
  },

  /**
   * @name Two#makePath
   * @function
   * @param {Two.Anchor[]} [points] - An array of {@link Two.Anchor} points.
   * @param {...Number} - Alternatively you can pass alternating `x` / `y` coordinate values as individual arguments. These will be combined into {@link Two.Anchor}s for use in the path.
   * @returns {Two.Path}
   * @description Creates a Two.js path and adds it to the scene.
   * @nota-bene In either case of passing an array or passing numbered arguments the last argument is an optional `Boolean` that defines whether the path should be open or closed.
   */
  makePath: function(p) {

    var l = arguments.length, points = p;
    if (!Array.isArray(p)) {
      points = [];
      for (var i = 0; i < l; i+=2) {
        var x = arguments[i];
        if (typeof x !== 'number') {
          break;
        }
        var y = arguments[i + 1];
        points.push(new Anchor(x, y));
      }
    }

    var last = arguments[l - 1];
    var path = new Path(points, !(typeof last === 'boolean' ? last : undefined));
    var rect = path.getBoundingClientRect();
    if (typeof rect.top === 'number'   && typeof rect.left === 'number' &&
        typeof rect.right === 'number' && typeof rect.bottom === 'number') {
      path.center().translation
        .set(rect.left + rect.width / 2, rect.top + rect.height / 2);
    }

    this.scene.add(path);

    return path;

  },

  /**
   * @name Two#makeText
   * @function
   * @param {String} message
   * @param {Number} x
   * @param {Number} y
   * @param {Object} [styles] - An object to describe any of the {@link Two.Text.Properties} including `fill`, `stroke`, `linewidth`, `family`, `alignment`, `leading`, `opacity`, etc..
   * @returns {Two.Text}
   * @description Creates a Two.js text object and adds it to the scene.
   */
  makeText: function(message, x, y, styles) {
    var text = new Text(message, x, y, styles);
    this.add(text);
    return text;
  },

  /**
   * @name Two#makeLinearGradient
   * @function
   * @param {Number} x1
   * @param {Number} y1
   * @param {Number} x2
   * @param {Number} y2
   * @param {...Two.Stop} [stops] - Any number of color stops sometimes reffered to as ramp stops. If none are supplied then the default black-to-white two stop gradient is applied.
   * @returns {Two.LinearGradient}
   * @description Creates a Two.js linear gradient and ads it to the scene. In the case of an effect it's added to an invisible "definitions" group.
   */
  makeLinearGradient: function(x1, y1, x2, y2 /* stops */) {

    var stops = Array.prototype.slice.call(arguments, 4);
    var gradient = new LinearGradient(x1, y1, x2, y2, stops);

    this.add(gradient);

    return gradient;

  },

  /**
   * @name Two#makeRadialGradient
   * @function
   * @param {Number} x1
   * @param {Number} y1
   * @param {Number} radius
   * @param {...Two.Stop} [stops] - Any number of color stops sometimes reffered to as ramp stops. If none are supplied then the default black-to-white two stop gradient is applied.
   * @returns {Two.RadialGradient}
   * @description Creates a Two.js linear-gradient object and ads it to the scene. In the case of an effect it's added to an invisible "definitions" group.
   */
  makeRadialGradient: function(x1, y1, r /* stops */) {

    var stops = Array.prototype.slice.call(arguments, 3);
    var gradient = new RadialGradient(x1, y1, r, stops);

    this.add(gradient);

    return gradient;

  },

  /**
   * @name Two#makeSprite
   * @function
   * @param {(String|Two.Texture)} pathOrTexture - The URL path to an image or an already created {@link Two.Texture}.
   * @param {Number} x
   * @param {Number} y
   * @param {Number} [columns=1]
   * @param {Number} [rows=1]
   * @param {Integer} [frameRate=0]
   * @param {Boolean} [autostart=false]
   * @returns {Two.Sprite}
   * @description Creates a Two.js sprite object and adds it to the scene. Sprites can be used for still images as well as animations.
   */
  makeSprite: function(path, x, y, cols, rows, frameRate, autostart) {

    var sprite = new Sprite(path, x, y, cols, rows, frameRate);
    if (autostart) {
      sprite.play();
    }
    this.add(sprite);

    return sprite;

  },

  /**
   * @name Two#makeImageSequence
   * @function
   * @param {(String[]|Two.Texture[])} pathsOrTextures - An array of paths or of {@link Two.Textures}.
   * @param {Number} x
   * @param {Number} y
   * @param {Number} [frameRate=0]
   * @param {Boolean} [autostart=false]
   * @returns {Two.ImageSequence}
   * @description Creates a Two.js image sequence object and adds it to the scene.
   */
  makeImageSequence: function(paths, x, y, frameRate, autostart) {

    var imageSequence = new ImageSequence(paths, x, y, frameRate);
    if (autostart) {
      imageSequence.play();
    }
    this.add(imageSequence);

    return imageSequence;

  },

  /**
   * @name Two#makeTexture
   * @function
   * @param {(String|Image|Canvas|Video)} [pathOrSource] - The URL path to an image or a DOM image-like element.
   * @param {Function} [callback] - Function to be invoked when the image is loaded.
   * @returns {Two.Texture}
   * @description Creates a Two.js texture object.
   */
  makeTexture: function(path, callback) {

    var texture = new Texture(path, callback);
    return texture;

  },

  /**
   * @name Two#makeGroup
   * @function
   * @param {(Two.Shape[]|...Two.Shape)} [objects] - Two.js objects to be added to the group in the form of an array or as individual arguments.
   * @returns {Two.Group}
   * @description Creates a Two.js group object and adds it to the scene.
   */
  makeGroup: function(o) {

    var objects = o;
    if (!(objects instanceof Array)) {
      objects = Array.prototype.slice.call(arguments);
    }

    var group = new Group();
    this.scene.add(group);
    group.add(objects);

    return group;

  },

  /**
   * @name Two#interpret
   * @function
   * @param {SvgNode} svgNode - The SVG node to be parsed.
   * @param {Boolean} shallow - Don't create a top-most group but append all content directly.
   * @param {Boolean} add – Automatically add the reconstructed SVG node to scene.
   * @returns {Two.Group}
   * @description Interpret an SVG Node and add it to this instance's scene. The distinction should be made that this doesn't `import` svg's, it solely interprets them into something compatible for Two.js - this is slightly different than a direct transcription.
   */
  interpret: function(svgNode, shallow, add) {

    var tag = svgNode.tagName.toLowerCase();

    add = (typeof add !== 'undefined') ? add : true;

    if (!(tag in read)) {
      return null;
    }

    var node = read[tag].call(this, svgNode);

    if (add) {
      this.add(shallow && node instanceof Group ? node.children : node);
    } else if (node.parent) {
      // Remove `g` tags that have been added to scenegraph / DOM
      // in order to be compatible with `getById` methods.
      node.remove();
    }

    return node;

  },

  /**
   * @name Two#load
   * @function
   * @param {String|SvgNode} pathOrSVGContent - The URL path of an SVG file or an SVG document as text.
   * @param {Function} callback - Function to call once loading has completed.
   * @returns {Two.Group}
   * @description Load an SVG file or SVG text and interpret it into Two.js legible objects.
   */
  load: function(text, callback) {

    var group = new Group();
    var elem, i, j;

    var attach = (function(data) {

      dom.temp.innerHTML = data;

      for (i = 0; i < dom.temp.children.length; i++) {
        elem = dom.temp.children[i];
        if (/svg/i.test(elem.nodeName)) {
          // Two.Utils.applySvgViewBox.call(this, group, elem.getAttribute('viewBox'));
          for (j = 0; j < elem.children.length; j++) {
            group.add(this.interpret(elem.children[j]));
          }
        } else {
          group.add(this.interpret(elem));
        }
      }

      if (typeof callback === 'function') {
        var svg = dom.temp.children.length <= 1
          ? dom.temp.children[0] : dom.temp.children;
        callback(group, svg);
      }

    }).bind(this);

    if (/.*\.svg/ig.test(text)) {

      xhr(text, attach);

      return group;

    }

    attach(text);

    return group;

  }

});

function fitToWindow() {

  var wr = document.body.getBoundingClientRect();

  var width = this.width = wr.width;
  var height = this.height = wr.height;

  this.renderer.setSize(width, height, this.ratio);

}

function fitToParent() {

  var parent = this.renderer.domElement.parentElement;
  if (!parent) {
    console.warn('Two.js: Attempting to fit to parent, but no parent found.');
    return;
  }
  var wr = parent.getBoundingClientRect();

  var width = this.width = wr.width;
  var height = this.height = wr.height;

  this.renderer.setSize(width, height, this.ratio);

}

function updateDimensions(width, height) {
  this.width = width;
  this.height = height;
  this.trigger(Events.Types.resize, width, height);
}

// Request Animation Frame

var raf = dom.getRequestAnimationFrame();

function loop() {

  for (var i = 0; i < Two.Instances.length; i++) {
    var t = Two.Instances[i];
    if (t.playing) {
      t.update();
    }
  }

  Two.nextFrameID = raf(loop);

}

raf.init = function() {
  loop();
  raf.init = function() {};
};

_.extend(Two, {
  Anchor: Anchor,
  Collection: Collection,
  Events: Events,
  Group: Group,
  Matrix: Matrix$1,
  Path: Path,
  Registry: Registry,
  Shape: Shape,
  Text: Text,
  Vector: Vector,

  Gradient: Gradient,
  ImageSequence: ImageSequence,
  LinearGradient: LinearGradient,
  RadialGradient: RadialGradient,
  Sprite: Sprite,
  Stop: Stop,
  Texture: Texture,

  ArcSegment: ArcSegment,
  Circle: Circle,
  Ellipse: Ellipse,
  Line: Line,
  Polygon: Polygon,
  Rectangle: Rectangle,
  RoundedRectangle: RoundedRectangle,
  Star: Star,

  CanvasRenderer: Renderer,
  SVGRenderer: Renderer$1,
  WebGLRenderer: Renderer$2,

  /**
   * @name Two.Commands
   * @property {Object} - Map of possible path commands. Taken from the SVG specification.
   */
  Commands: Commands,

  Utils: _.extend({

    Error: TwoError,
    getRatio: getRatio,
    defineGetterSetter: defineGetterSetter,
    read: read,
    xhr: xhr

  }, _, CanvasShim, Curves, math)

});

/* harmony default export */ __webpack_exports__["default"] = (Two);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);