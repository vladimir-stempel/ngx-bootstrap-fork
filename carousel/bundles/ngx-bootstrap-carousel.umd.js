(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/carousel', ['exports', '@angular/core', 'ngx-bootstrap/utils', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].carousel = {}), global.ng.core, global.utils, global.ng.common));
}(this, (function (exports, i0, utils, i2) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    /**
     * Returns the index of the last element in the array where predicate is true, and -1
     * otherwise.
     * @param array The source array to search in
     * @param predicate find calls predicate once for each element of the array, in descending
     * order, until it finds one where predicate returns true. If such an element is found,
     * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
     */
    function findLastIndex(array, predicate) {
        var l = array.length;
        while (l--) {
            if (predicate(array[l], l, array)) {
                return l;
            }
        }
        return -1;
    }
    function chunkByNumber(array, size) {
        var out = [];
        var n = Math.ceil((array.length) / size);
        var i = 0;
        while (i < n) {
            var chunk = array.splice(0, (i === n - 1) && size < array.length ? array.length : size);
            out.push(chunk);
            i++;
        }
        return out;
    }

    var CarouselConfig = /** @class */ (function () {
        function CarouselConfig() {
            /* Default interval of auto changing of slides */
            this.interval = 5000;
            /* Is loop of auto changing of slides can be paused */
            this.noPause = false;
            /* Is slides can wrap from the last to the first slide */
            this.noWrap = false;
            /* Show carousel-indicators */
            this.showIndicators = true;
            /* Slides can be paused on focus */
            this.pauseOnFocus = false;
            /* If `true` - carousel indicators indicate slides chunks works ONLY if singleSlideOffset = FALSE */
            this.indicatorsByChunk = false;
            /* If value more then 1 — carousel works in multilist mode */
            this.itemsPerSlide = 1;
            /* If `true` — carousel shifts by one element. By default carousel shifts by number
              of visible elements (itemsPerSlide field) */
            this.singleSlideOffset = false;
        }
        return CarouselConfig;
    }());
    CarouselConfig.ɵfac = function CarouselConfig_Factory(t) { return new (t || CarouselConfig)(); };
    CarouselConfig.ɵprov = i0.ɵɵdefineInjectable({ token: CarouselConfig, factory: CarouselConfig.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselConfig, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    function CarouselComponent_ol_1_li_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r7_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "li", 7);
            i0.ɵɵlistener("click", function CarouselComponent_ol_1_li_1_Template_li_click_0_listener() { i0.ɵɵrestoreView(_r7_1); var i_r5 = ctx.index; var ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.selectSlide(i_r5); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var slide_r4 = ctx.$implicit;
            i0.ɵɵclassProp("active", slide_r4.active === true);
        }
    }
    function CarouselComponent_ol_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "ol", 5);
            i0.ɵɵtemplate(1, CarouselComponent_ol_1_li_1_Template, 1, 2, "li", 6);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx_r0.indicatorsSlides());
        }
    }
    function CarouselComponent_a_4_span_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "span", 11);
            i0.ɵɵtext(1, "Previous");
            i0.ɵɵelementEnd();
        }
    }
    function CarouselComponent_a_4_Template(rf, ctx) {
        if (rf & 1) {
            var _r10_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "a", 8);
            i0.ɵɵlistener("click", function CarouselComponent_a_4_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r10_1); var ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.previousSlide(); });
            i0.ɵɵelement(1, "span", 9);
            i0.ɵɵtemplate(2, CarouselComponent_a_4_span_2_Template, 2, 0, "span", 10);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵclassProp("disabled", ctx_r1.activeSlide === 0 && ctx_r1.noWrap);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx_r1.isBs4);
        }
    }
    function CarouselComponent_a_5_Template(rf, ctx) {
        if (rf & 1) {
            var _r12_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "a", 12);
            i0.ɵɵlistener("click", function CarouselComponent_a_5_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r12_1); var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.nextSlide(); });
            i0.ɵɵelement(1, "span", 13);
            i0.ɵɵelementStart(2, "span", 11);
            i0.ɵɵtext(3, "Next");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵclassProp("disabled", ctx_r2.isLast(ctx_r2.activeSlide) && ctx_r2.noWrap);
        }
    }
    var _c0 = function (a0) { return { "display": a0 }; };
    var _c1 = ["*"];
    var Direction;
    (function (Direction) {
        Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
        Direction[Direction["NEXT"] = 1] = "NEXT";
        Direction[Direction["PREV"] = 2] = "PREV";
    })(Direction || (Direction = {}));
    /**
     * Base element to create carousel
     */
    var CarouselComponent = /** @class */ (function () {
        function CarouselComponent(config, ngZone) {
            this.ngZone = ngZone;
            /* If `true` - carousel indicators indicate slides chunks
               works ONLY if singleSlideOffset = FALSE */
            this.indicatorsByChunk = false;
            /* If value more then 1 — carousel works in multilist mode */
            this.itemsPerSlide = 1;
            /* If `true` — carousel shifts by one element. By default carousel shifts by number
               of visible elements (itemsPerSlide field) */
            this.singleSlideOffset = false;
            /** Turn on/off animation. Animation doesn't work for multilist carousel */
            this.isAnimated = false;
            /** Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property */
            this.activeSlideChange = new i0.EventEmitter(false);
            /** Will be emitted when active slides has been changed in multilist mode */
            this.slideRangeChange = new i0.EventEmitter();
            /* Index to start display slides from it */
            this.startFromIndex = 0;
            this._slides = new utils.LinkedList();
            this._currentVisibleSlidesIndex = 0;
            this.destroyed = false;
            this.getActive = function (slide) { return slide.active; };
            this.makeSlidesConsistent = function (slides) {
                slides.forEach(function (slide, index) { return slide.item.order = index; });
            };
            Object.assign(this, config);
        }
        Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
            get: function () {
                return this._currentActiveSlide;
            },
            /** Index of currently displayed slide(started for 0) */
            set: function (index) {
                if (this.multilist) {
                    return;
                }
                if (this._slides.length && index !== this._currentActiveSlide) {
                    this._select(index);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "interval", {
            /**
             * Delay of item cycling in milliseconds. If false, carousel won't cycle
             * automatically.
             */
            get: function () {
                return this._interval;
            },
            set: function (value) {
                this._interval = value;
                this.restartTimer();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "slides", {
            get: function () {
                return this._slides.toArray();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(CarouselComponent.prototype, "isBs4", {
            get: function () {
                return !utils.isBs3();
            },
            enumerable: false,
            configurable: true
        });
        CarouselComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            setTimeout(function () {
                if (_this.singleSlideOffset) {
                    _this.indicatorsByChunk = false;
                }
                if (_this.multilist) {
                    _this._chunkedSlides = chunkByNumber(_this.mapSlidesAndIndexes(), _this.itemsPerSlide);
                    _this.selectInitialSlides();
                }
            }, 0);
        };
        CarouselComponent.prototype.ngOnDestroy = function () {
            this.destroyed = true;
        };
        /**
         * Adds new slide. If this slide is first in collection - set it as active
         * and starts auto changing
         * @param slide
         */
        CarouselComponent.prototype.addSlide = function (slide) {
            this._slides.add(slide);
            if (this.multilist && this._slides.length <= this.itemsPerSlide) {
                slide.active = true;
            }
            if (!this.multilist && this.isAnimated) {
                slide.isAnimated = true;
            }
            if (!this.multilist && this._slides.length === 1) {
                this._currentActiveSlide = undefined;
                this.activeSlide = 0;
                this.play();
            }
            if (this.multilist && this._slides.length > this.itemsPerSlide) {
                this.play();
            }
        };
        /**
         * Removes specified slide. If this slide is active - will roll to another
         * slide
         * @param slide
         */
        CarouselComponent.prototype.removeSlide = function (slide) {
            var _this = this;
            var remIndex = this._slides.indexOf(slide);
            if (this._currentActiveSlide === remIndex) {
                // removing of active slide
                var nextSlideIndex_1 = void 0;
                if (this._slides.length > 1) {
                    // if this slide last - will roll to first slide, if noWrap flag is
                    // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                    // middle of collection, index of next slide is same to removed
                    nextSlideIndex_1 = !this.isLast(remIndex)
                        ? remIndex
                        : this.noWrap ? remIndex - 1 : 0;
                }
                this._slides.remove(remIndex);
                // prevents exception with changing some value after checking
                setTimeout(function () {
                    _this._select(nextSlideIndex_1);
                }, 0);
            }
            else {
                this._slides.remove(remIndex);
                var currentSlideIndex_1 = this.getCurrentSlideIndex();
                setTimeout(function () {
                    // after removing, need to actualize index of current active slide
                    _this._currentActiveSlide = currentSlideIndex_1;
                    _this.activeSlideChange.emit(_this._currentActiveSlide);
                }, 0);
            }
        };
        CarouselComponent.prototype.nextSlideFromInterval = function (force) {
            if (force === void 0) { force = false; }
            this.move(Direction.NEXT, force);
        };
        /**
         * Rolling to next slide
         * @param force: {boolean} if true - will ignore noWrap flag
         */
        CarouselComponent.prototype.nextSlide = function (force) {
            if (force === void 0) { force = false; }
            if (this.isPlaying) {
                this.restartTimer();
            }
            this.move(Direction.NEXT, force);
        };
        /**
         * Rolling to previous slide
         * @param force: {boolean} if true - will ignore noWrap flag
         */
        CarouselComponent.prototype.previousSlide = function (force) {
            if (force === void 0) { force = false; }
            if (this.isPlaying) {
                this.restartTimer();
            }
            this.move(Direction.PREV, force);
        };
        CarouselComponent.prototype.getFirstVisibleIndex = function () {
            return this.slides.findIndex(this.getActive);
        };
        CarouselComponent.prototype.getLastVisibleIndex = function () {
            return findLastIndex(this.slides, this.getActive);
        };
        CarouselComponent.prototype.move = function (direction, force) {
            if (force === void 0) { force = false; }
            var firstVisibleIndex = this.getFirstVisibleIndex();
            var lastVisibleIndex = this.getLastVisibleIndex();
            if (this.noWrap) {
                if (direction === Direction.NEXT &&
                    this.isLast(lastVisibleIndex) ||
                    direction === Direction.PREV &&
                        firstVisibleIndex === 0) {
                    return;
                }
            }
            if (!this.multilist) {
                this.activeSlide = this.findNextSlideIndex(direction, force);
            }
            else {
                this.moveMultilist(direction);
            }
        };
        /**
         * Swith slides by enter, space and arrows keys
         * @internal
         */
        CarouselComponent.prototype.keydownPress = function (event) {
            if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
                this.nextSlide();
                event.preventDefault();
                return;
            }
            if (event.keyCode === 37 || event.key === 'LeftArrow') {
                this.previousSlide();
                return;
            }
            if (event.keyCode === 39 || event.key === 'RightArrow') {
                this.nextSlide();
                return;
            }
        };
        /**
         * Play on mouse leave
         * @internal
         */
        CarouselComponent.prototype.onMouseLeave = function () {
            if (!this.pauseOnFocus) {
                this.play();
            }
        };
        /**
         * Play on mouse up
         * @internal
         */
        CarouselComponent.prototype.onMouseUp = function () {
            if (!this.pauseOnFocus) {
                this.play();
            }
        };
        /**
         * When slides on focus autoplay is stopped(optional)
         * @internal
         */
        CarouselComponent.prototype.pauseFocusIn = function () {
            if (this.pauseOnFocus) {
                this.isPlaying = false;
                this.resetTimer();
            }
        };
        /**
         * When slides out of focus autoplay is started
         * @internal
         */
        CarouselComponent.prototype.pauseFocusOut = function () {
            this.play();
        };
        /**
         * Rolling to specified slide
         * @param index: {number} index of slide, which must be shown
         */
        CarouselComponent.prototype.selectSlide = function (index) {
            if (this.isPlaying) {
                this.restartTimer();
            }
            if (!this.multilist) {
                this.activeSlide = this.indicatorsByChunk ? index * this.itemsPerSlide : index;
            }
            else {
                this.selectSlideRange(this.indicatorsByChunk ? index * this.itemsPerSlide : index);
            }
        };
        /**
         * Starts a auto changing of slides
         */
        CarouselComponent.prototype.play = function () {
            if (!this.isPlaying) {
                this.isPlaying = true;
                this.restartTimer();
            }
        };
        /**
         * Stops a auto changing of slides
         */
        CarouselComponent.prototype.pause = function () {
            if (!this.noPause) {
                this.isPlaying = false;
                this.resetTimer();
            }
        };
        /**
         * Finds and returns index of currently displayed slide
         */
        CarouselComponent.prototype.getCurrentSlideIndex = function () {
            return this._slides.findIndex(this.getActive);
        };
        /**
         * Defines, whether the specified index is last in collection
         * @param index
         */
        CarouselComponent.prototype.isLast = function (index) {
            return index + 1 >= this._slides.length;
        };
        /**
         * Defines, whether the specified index is first in collection
         * @param index
         */
        CarouselComponent.prototype.isFirst = function (index) {
            return index === 0;
        };
        CarouselComponent.prototype.indicatorsSlides = function () {
            var _this = this;
            return this.slides.filter(function (slide, index) { return !_this.indicatorsByChunk || index % _this.itemsPerSlide === 0; });
        };
        CarouselComponent.prototype.selectInitialSlides = function () {
            var startIndex = this.startFromIndex <= this._slides.length
                ? this.startFromIndex
                : 0;
            this.hideSlides();
            if (this.singleSlideOffset) {
                this._slidesWithIndexes = this.mapSlidesAndIndexes();
                if (this._slides.length - startIndex < this.itemsPerSlide) {
                    var slidesToAppend = this._slidesWithIndexes.slice(0, startIndex);
                    this._slidesWithIndexes = __spread(this._slidesWithIndexes, slidesToAppend).slice(slidesToAppend.length)
                        .slice(0, this.itemsPerSlide);
                }
                else {
                    this._slidesWithIndexes = this._slidesWithIndexes.slice(startIndex, startIndex + this.itemsPerSlide);
                }
                this._slidesWithIndexes.forEach(function (slide) { return slide.item.active = true; });
                this.makeSlidesConsistent(this._slidesWithIndexes);
            }
            else {
                this.selectRangeByNestedIndex(startIndex);
            }
            this.slideRangeChange.emit(this.getVisibleIndexes());
        };
        /**
         * Defines next slide index, depending of direction
         * @param direction: Direction(UNKNOWN|PREV|NEXT)
         * @param force: {boolean} if TRUE - will ignore noWrap flag, else will
         *   return undefined if next slide require wrapping
         */
        CarouselComponent.prototype.findNextSlideIndex = function (direction, force) {
            var nextSlideIndex = 0;
            if (!force &&
                (this.isLast(this.activeSlide) &&
                    direction !== Direction.PREV &&
                    this.noWrap)) {
                return undefined;
            }
            switch (direction) {
                case Direction.NEXT:
                    // if this is last slide, not force, looping is disabled
                    // and need to going forward - select current slide, as a next
                    nextSlideIndex = !this.isLast(this._currentActiveSlide)
                        ? this._currentActiveSlide + 1
                        : !force && this.noWrap ? this._currentActiveSlide : 0;
                    break;
                case Direction.PREV:
                    // if this is first slide, not force, looping is disabled
                    // and need to going backward - select current slide, as a next
                    nextSlideIndex =
                        this._currentActiveSlide > 0
                            ? this._currentActiveSlide - 1
                            : !force && this.noWrap
                                ? this._currentActiveSlide
                                : this._slides.length - 1;
                    break;
                default:
                    throw new Error('Unknown direction');
            }
            return nextSlideIndex;
        };
        CarouselComponent.prototype.mapSlidesAndIndexes = function () {
            return this.slides
                .slice()
                .map(function (slide, index) {
                return {
                    index: index,
                    item: slide
                };
            });
        };
        CarouselComponent.prototype.selectSlideRange = function (index) {
            if (this.isIndexInRange(index)) {
                return;
            }
            this.hideSlides();
            if (!this.singleSlideOffset) {
                this.selectRangeByNestedIndex(index);
            }
            else {
                var startIndex = this.isIndexOnTheEdges(index)
                    ? index
                    : index - this.itemsPerSlide + 1;
                var endIndex = this.isIndexOnTheEdges(index)
                    ? index + this.itemsPerSlide
                    : index + 1;
                this._slidesWithIndexes = this.mapSlidesAndIndexes().slice(startIndex, endIndex);
                this.makeSlidesConsistent(this._slidesWithIndexes);
                this._slidesWithIndexes.forEach(function (slide) { return slide.item.active = true; });
            }
            this.slideRangeChange.emit(this.getVisibleIndexes());
        };
        CarouselComponent.prototype.selectRangeByNestedIndex = function (index) {
            var selectedRange = this._chunkedSlides
                .map(function (slidesList, i) {
                return {
                    index: i,
                    list: slidesList
                };
            })
                .find(function (slidesList) {
                return slidesList.list.find(function (slide) { return slide.index === index; }) !== undefined;
            });
            this._currentVisibleSlidesIndex = selectedRange.index;
            this._chunkedSlides[selectedRange.index].forEach(function (slide) {
                slide.item.active = true;
            });
        };
        CarouselComponent.prototype.isIndexOnTheEdges = function (index) {
            return (index + 1 - this.itemsPerSlide <= 0 ||
                index + this.itemsPerSlide <= this._slides.length);
        };
        CarouselComponent.prototype.isIndexInRange = function (index) {
            if (this.singleSlideOffset) {
                var visibleIndexes = this._slidesWithIndexes.map(function (slide) { return slide.index; });
                return visibleIndexes.indexOf(index) >= 0;
            }
            return (index <= this.getLastVisibleIndex() &&
                index >= this.getFirstVisibleIndex());
        };
        CarouselComponent.prototype.hideSlides = function () {
            this.slides.forEach(function (slide) { return slide.active = false; });
        };
        CarouselComponent.prototype.isVisibleSlideListLast = function () {
            return this._currentVisibleSlidesIndex === this._chunkedSlides.length - 1;
        };
        CarouselComponent.prototype.isVisibleSlideListFirst = function () {
            return this._currentVisibleSlidesIndex === 0;
        };
        CarouselComponent.prototype.moveSliderByOneItem = function (direction) {
            var firstVisibleIndex;
            var lastVisibleIndex;
            var indexToHide;
            var indexToShow;
            if (this.noWrap) {
                firstVisibleIndex = this.getFirstVisibleIndex();
                lastVisibleIndex = this.getLastVisibleIndex();
                indexToHide = direction === Direction.NEXT
                    ? firstVisibleIndex
                    : lastVisibleIndex;
                indexToShow = direction !== Direction.NEXT
                    ? firstVisibleIndex - 1
                    : !this.isLast(lastVisibleIndex)
                        ? lastVisibleIndex + 1 : 0;
                this._slides.get(indexToHide).active = false;
                this._slides.get(indexToShow).active = true;
                var slidesToReorder = this.mapSlidesAndIndexes().filter(function (slide) { return slide.item.active; });
                this.makeSlidesConsistent(slidesToReorder);
                this.slideRangeChange.emit(this.getVisibleIndexes());
            }
            else {
                var displayedIndex = void 0;
                firstVisibleIndex = this._slidesWithIndexes[0].index;
                lastVisibleIndex = this._slidesWithIndexes[this._slidesWithIndexes.length - 1].index;
                if (direction === Direction.NEXT) {
                    this._slidesWithIndexes.shift();
                    displayedIndex = this.isLast(lastVisibleIndex)
                        ? 0
                        : lastVisibleIndex + 1;
                    this._slidesWithIndexes.push({
                        index: displayedIndex,
                        item: this._slides.get(displayedIndex)
                    });
                }
                else {
                    this._slidesWithIndexes.pop();
                    displayedIndex = this.isFirst(firstVisibleIndex)
                        ? this._slides.length - 1
                        : firstVisibleIndex - 1;
                    this._slidesWithIndexes = __spread([{
                            index: displayedIndex,
                            item: this._slides.get(displayedIndex)
                        }], this._slidesWithIndexes);
                }
                this.hideSlides();
                this._slidesWithIndexes.forEach(function (slide) { return slide.item.active = true; });
                this.makeSlidesConsistent(this._slidesWithIndexes);
                this.slideRangeChange.emit(this._slidesWithIndexes.map(function (slide) { return slide.index; }));
            }
        };
        CarouselComponent.prototype.moveMultilist = function (direction) {
            if (this.singleSlideOffset) {
                this.moveSliderByOneItem(direction);
            }
            else {
                this.hideSlides();
                if (this.noWrap) {
                    this._currentVisibleSlidesIndex = direction === Direction.NEXT
                        ? this._currentVisibleSlidesIndex + 1
                        : this._currentVisibleSlidesIndex - 1;
                }
                else {
                    if (direction === Direction.NEXT) {
                        this._currentVisibleSlidesIndex = this.isVisibleSlideListLast()
                            ? 0
                            : this._currentVisibleSlidesIndex + 1;
                    }
                    else {
                        this._currentVisibleSlidesIndex = this.isVisibleSlideListFirst()
                            ? this._chunkedSlides.length - 1
                            : this._currentVisibleSlidesIndex - 1;
                    }
                }
                this._chunkedSlides[this._currentVisibleSlidesIndex].forEach(function (slide) { return slide.item.active = true; });
                this.slideRangeChange.emit(this.getVisibleIndexes());
            }
        };
        CarouselComponent.prototype.getVisibleIndexes = function () {
            if (!this.singleSlideOffset) {
                return this._chunkedSlides[this._currentVisibleSlidesIndex]
                    .map(function (slide) { return slide.index; });
            }
            else {
                return this._slidesWithIndexes.map(function (slide) { return slide.index; });
            }
        };
        /**
         * Sets a slide, which specified through index, as active
         * @param index
         */
        CarouselComponent.prototype._select = function (index) {
            if (isNaN(index)) {
                this.pause();
                return;
            }
            if (!this.multilist) {
                var currentSlide = this._slides.get(this._currentActiveSlide);
                if (currentSlide) {
                    currentSlide.active = false;
                }
            }
            var nextSlide = this._slides.get(index);
            if (nextSlide) {
                this._currentActiveSlide = index;
                nextSlide.active = true;
                this.activeSlide = index;
                this.activeSlideChange.emit(index);
            }
        };
        /**
         * Starts loop of auto changing of slides
         */
        CarouselComponent.prototype.restartTimer = function () {
            var _this = this;
            this.resetTimer();
            var interval = +this.interval;
            if (!isNaN(interval) && interval > 0) {
                this.currentInterval = this.ngZone.runOutsideAngular(function () {
                    return setInterval(function () {
                        var nInterval = +_this.interval;
                        _this.ngZone.run(function () {
                            if (_this.isPlaying &&
                                !isNaN(_this.interval) &&
                                nInterval > 0 &&
                                _this.slides.length) {
                                _this.nextSlideFromInterval();
                            }
                            else {
                                _this.pause();
                            }
                        });
                    }, interval);
                });
            }
        };
        Object.defineProperty(CarouselComponent.prototype, "multilist", {
            get: function () {
                return this.itemsPerSlide > 1;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Stops loop of auto changing of slides
         */
        CarouselComponent.prototype.resetTimer = function () {
            if (this.currentInterval) {
                clearInterval(this.currentInterval);
                this.currentInterval = void 0;
            }
        };
        return CarouselComponent;
    }());
    CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(i0.ɵɵdirectiveInject(CarouselConfig), i0.ɵɵdirectiveInject(i0.NgZone)); };
    CarouselComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CarouselComponent, selectors: [["carousel"]], inputs: { noWrap: "noWrap", noPause: "noPause", showIndicators: "showIndicators", pauseOnFocus: "pauseOnFocus", indicatorsByChunk: "indicatorsByChunk", itemsPerSlide: "itemsPerSlide", singleSlideOffset: "singleSlideOffset", isAnimated: "isAnimated", activeSlide: "activeSlide", startFromIndex: "startFromIndex", interval: "interval" }, outputs: { activeSlideChange: "activeSlideChange", slideRangeChange: "slideRangeChange" }, ngContentSelectors: _c1, decls: 6, vars: 6, consts: [["tabindex", "0", 1, "carousel", "slide", 3, "mouseenter", "mouseleave", "mouseup", "keydown", "focusin", "focusout"], ["class", "carousel-indicators", 4, "ngIf"], [1, "carousel-inner", 3, "ngStyle"], ["class", "left carousel-control carousel-control-prev", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "right carousel-control carousel-control-next", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], [1, "carousel-indicators"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["tabindex", "0", "role", "button", 1, "left", "carousel-control", "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "icon-prev", "carousel-control-prev-icon"], ["class", "sr-only", 4, "ngIf"], [1, "sr-only"], ["tabindex", "0", "role", "button", 1, "right", "carousel-control", "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "icon-next", "carousel-control-next-icon"]], template: function CarouselComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵlistener("mouseenter", function CarouselComponent_Template_div_mouseenter_0_listener() { return ctx.pause(); })("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener() { return ctx.onMouseLeave(); })("mouseup", function CarouselComponent_Template_div_mouseup_0_listener() { return ctx.onMouseUp(); })("keydown", function CarouselComponent_Template_div_keydown_0_listener($event) { return ctx.keydownPress($event); })("focusin", function CarouselComponent_Template_div_focusin_0_listener() { return ctx.pauseFocusIn(); })("focusout", function CarouselComponent_Template_div_focusout_0_listener() { return ctx.pauseFocusOut(); });
                i0.ɵɵtemplate(1, CarouselComponent_ol_1_Template, 2, 1, "ol", 1);
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵprojection(3);
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(4, CarouselComponent_a_4_Template, 3, 3, "a", 3);
                i0.ɵɵtemplate(5, CarouselComponent_a_5_Template, 4, 2, "a", 4);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.showIndicators && ctx.slides.length > 1);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c0, ctx.multilist ? "flex" : "block"));
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.slides.length > 1);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.slides.length > 1);
            }
        }, directives: [i2.NgIf, i2.NgStyle, i2.NgForOf], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'carousel',
                        templateUrl: './carousel.component.html'
                    }]
            }], function () { return [{ type: CarouselConfig }, { type: i0.NgZone }]; }, { noWrap: [{
                    type: i0.Input
                }], noPause: [{
                    type: i0.Input
                }], showIndicators: [{
                    type: i0.Input
                }], pauseOnFocus: [{
                    type: i0.Input
                }], indicatorsByChunk: [{
                    type: i0.Input
                }], itemsPerSlide: [{
                    type: i0.Input
                }], singleSlideOffset: [{
                    type: i0.Input
                }], isAnimated: [{
                    type: i0.Input
                }], activeSlideChange: [{
                    type: i0.Output
                }], slideRangeChange: [{
                    type: i0.Output
                }], activeSlide: [{
                    type: i0.Input
                }], startFromIndex: [{
                    type: i0.Input
                }], interval: [{
                    type: i0.Input
                }] });
    })();

    var _c0$1 = ["*"];
    var SlideComponent = /** @class */ (function () {
        function SlideComponent(carousel) {
            this.itemWidth = '100%';
            this.order = 0;
            /** Wraps element by appropriate CSS classes */
            this.addClass = true;
            this.carousel = carousel;
        }
        /** Fires changes in container collection after adding a new slide instance */
        SlideComponent.prototype.ngOnInit = function () {
            this.carousel.addSlide(this);
            this.itemWidth = 100 / this.carousel.itemsPerSlide + "%";
        };
        /** Fires changes in container collection after removing of this slide instance */
        SlideComponent.prototype.ngOnDestroy = function () {
            this.carousel.removeSlide(this);
        };
        return SlideComponent;
    }());
    SlideComponent.ɵfac = function SlideComponent_Factory(t) { return new (t || SlideComponent)(i0.ɵɵdirectiveInject(CarouselComponent)); };
    SlideComponent.ɵcmp = i0.ɵɵdefineComponent({ type: SlideComponent, selectors: [["slide"]], hostVars: 13, hostBindings: function SlideComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("aria-hidden", !ctx.active);
                i0.ɵɵstyleProp("width", ctx.itemWidth)("order", ctx.order);
                i0.ɵɵclassProp("active", ctx.active)("carousel-animation", ctx.isAnimated)("item", ctx.addClass)("carousel-item", ctx.addClass);
            }
        }, inputs: { active: "active" }, ngContentSelectors: _c0$1, decls: 2, vars: 2, consts: [[1, "item"]], template: function SlideComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵprojection(1);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵclassProp("active", ctx.active);
            }
        }, styles: [".carousel-animation[_nghost-%COMP%] {\n       transition: opacity 0.6s ease, visibility 0.6s ease;\n       float: left;\n    }\n    .carousel-animation.active[_nghost-%COMP%] {\n      opacity: 1;\n      visibility: visible;\n    }\n    .carousel-animation[_nghost-%COMP%]:not(.active) {\n      display: block;\n      position: absolute;\n      opacity: 0;\n      visibility: hidden;\n    }"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlideComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'slide',
                        template: "\n    <div [class.active]=\"active\" class=\"item\">\n      <ng-content></ng-content>\n    </div>\n  ",
                        // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                        host: {
                            '[attr.aria-hidden]': '!active'
                        },
                        styles: ["\n    :host.carousel-animation {\n       transition: opacity 0.6s ease, visibility 0.6s ease;\n       float: left;\n    }\n    :host.carousel-animation.active {\n      opacity: 1;\n      visibility: visible;\n    }\n    :host.carousel-animation:not(.active) {\n      display: block;\n      position: absolute;\n      opacity: 0;\n      visibility: hidden;\n    }\n  "]
                    }]
            }], function () { return [{ type: CarouselComponent }]; }, { active: [{
                    type: i0.HostBinding,
                    args: ['class.active']
                }, {
                    type: i0.Input
                }], itemWidth: [{
                    type: i0.HostBinding,
                    args: ['style.width']
                }], order: [{
                    type: i0.HostBinding,
                    args: ['style.order']
                }], isAnimated: [{
                    type: i0.HostBinding,
                    args: ['class.carousel-animation']
                }], addClass: [{
                    type: i0.HostBinding,
                    args: ['class.item']
                }, {
                    type: i0.HostBinding,
                    args: ['class.carousel-item']
                }] });
    })();

    var CarouselModule = /** @class */ (function () {
        function CarouselModule() {
        }
        CarouselModule.forRoot = function () {
            return { ngModule: CarouselModule, providers: [] };
        };
        return CarouselModule;
    }());
    CarouselModule.ɵmod = i0.ɵɵdefineNgModule({ type: CarouselModule });
    CarouselModule.ɵinj = i0.ɵɵdefineInjector({ factory: function CarouselModule_Factory(t) { return new (t || CarouselModule)(); }, imports: [[i2.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CarouselModule, { declarations: [SlideComponent, CarouselComponent], imports: [i2.CommonModule], exports: [SlideComponent, CarouselComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i2.CommonModule],
                        declarations: [SlideComponent, CarouselComponent],
                        exports: [SlideComponent, CarouselComponent]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.CarouselComponent = CarouselComponent;
    exports.CarouselConfig = CarouselConfig;
    exports.CarouselModule = CarouselModule;
    exports.SlideComponent = SlideComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-carousel.umd.js.map
