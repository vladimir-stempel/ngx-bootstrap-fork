(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('rxjs'), require('ngx-bootstrap/component-loader'), require('ngx-bootstrap/positioning'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/tooltip', ['exports', '@angular/core', 'ngx-bootstrap/utils', 'rxjs', 'ngx-bootstrap/component-loader', 'ngx-bootstrap/positioning', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].tooltip = {}), global.ng.core, global.utils, global.rxjs, global.i1, global.i3, global.ng.common));
}(this, (function (exports, i0, utils, rxjs, i1, i3, common) { 'use strict';

    /** Default values provider for tooltip */
    var TooltipConfig = /** @class */ (function () {
        function TooltipConfig() {
            /** sets disable adaptive position */
            this.adaptivePosition = true;
            /** tooltip placement, supported positions: 'top', 'bottom', 'left', 'right' */
            this.placement = 'top';
            /** array of event names which triggers tooltip opening */
            this.triggers = 'hover focus';
            /** delay before showing the tooltip */
            this.delay = 0;
        }
        return TooltipConfig;
    }());
    TooltipConfig.ɵfac = function TooltipConfig_Factory(t) { return new (t || TooltipConfig)(); };
    TooltipConfig.ɵprov = i0.ɵɵdefineInjectable({ token: TooltipConfig, factory: TooltipConfig.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipConfig, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    var _c0 = ["*"];
    var TooltipContainerComponent = /** @class */ (function () {
        function TooltipContainerComponent(config) {
            Object.assign(this, config);
        }
        Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
            get: function () {
                return utils.isBs3();
            },
            enumerable: false,
            configurable: true
        });
        TooltipContainerComponent.prototype.ngAfterViewInit = function () {
            this.classMap = { in: false, fade: false };
            this.classMap[this.placement] = true;
            this.classMap["tooltip-" + this.placement] = true;
            this.classMap.in = true;
            if (this.animation) {
                this.classMap.fade = true;
            }
            if (this.containerClass) {
                this.classMap[this.containerClass] = true;
            }
        };
        return TooltipContainerComponent;
    }());
    TooltipContainerComponent.ɵfac = function TooltipContainerComponent_Factory(t) { return new (t || TooltipContainerComponent)(i0.ɵɵdirectiveInject(TooltipConfig)); };
    TooltipContainerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TooltipContainerComponent, selectors: [["bs-tooltip-container"]], hostAttrs: ["role", "tooltip"], hostVars: 7, hostBindings: function TooltipContainerComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("id", ctx.id);
                i0.ɵɵclassMap("tooltip in tooltip-" + ctx.placement + " " + "bs-tooltip-" + ctx.placement + " " + ctx.placement + " " + ctx.containerClass);
                i0.ɵɵclassProp("show", !ctx.isBs3)("bs3", ctx.isBs3);
            }
        }, ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "tooltip-arrow", "arrow"], [1, "tooltip-inner"]], template: function TooltipContainerComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵelement(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵprojection(2);
                i0.ɵɵelementEnd();
            }
        }, styles: [".tooltip[_nghost-%COMP%] {\n      display: block;\n      pointer-events: none;\n    }\n    .bs3.tooltip.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%] {\n      margin-left: -2px;\n    }\n    .bs3.tooltip.bottom[_nghost-%COMP%] {\n      margin-top: 0px;\n    }\n    .bs3.bs-tooltip-left[_nghost-%COMP%], .bs3.bs-tooltip-right[_nghost-%COMP%]{\n      margin: 0px;\n    }\n    .bs3.bs-tooltip-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-tooltip-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%] {\n      margin: .3rem 0;\n    }"], changeDetection: 0 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipContainerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'bs-tooltip-container',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                        host: {
                            '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
                            '[class.show]': '!isBs3',
                            '[class.bs3]': 'isBs3',
                            '[attr.id]': 'this.id',
                            role: 'tooltip'
                        },
                        styles: [
                            "\n    :host.tooltip {\n      display: block;\n      pointer-events: none;\n    }\n    :host.bs3.tooltip.top>.arrow {\n      margin-left: -2px;\n    }\n    :host.bs3.tooltip.bottom {\n      margin-top: 0px;\n    }\n    :host.bs3.bs-tooltip-left, :host.bs3.bs-tooltip-right{\n      margin: 0px;\n    }\n    :host.bs3.bs-tooltip-right .arrow, :host.bs3.bs-tooltip-left .arrow {\n      margin: .3rem 0;\n    }\n  "
                        ],
                        template: "\n    <div class=\"tooltip-arrow arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    "
                    }]
            }], function () { return [{ type: TooltipConfig }]; }, null);
    })();

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

    var id = 0;
    var TooltipDirective = /** @class */ (function () {
        function TooltipDirective(_viewContainerRef, cis, config, _elementRef, _renderer, _positionService) {
            this._elementRef = _elementRef;
            this._renderer = _renderer;
            this._positionService = _positionService;
            this.tooltipId = id++;
            /** Fired when tooltip content changes */
            this.tooltipChange = new i0.EventEmitter();
            /**
             * Css class for tooltip container
             */
            this.containerClass = '';
            /** @deprecated - removed, will be added to configuration */
            this.tooltipAnimation = true;
            /** @deprecated */
            this.tooltipFadeDuration = 150;
            /** @deprecated */
            this.tooltipStateChanged = new i0.EventEmitter();
            this._tooltip = cis
                .createLoader(this._elementRef, _viewContainerRef, this._renderer)
                .provide({ provide: TooltipConfig, useValue: config });
            Object.assign(this, config);
            this.onShown = this._tooltip.onShown;
            this.onHidden = this._tooltip.onHidden;
        }
        Object.defineProperty(TooltipDirective.prototype, "isOpen", {
            /**
             * Returns whether or not the tooltip is currently being shown
             */
            get: function () {
                return this._tooltip.isShown;
            },
            set: function (value) {
                if (value) {
                    this.show();
                }
                else {
                    this.hide();
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "htmlContent", {
            /** @deprecated - please use `tooltip` instead */
            set: function (value) {
                utils.warnOnce('tooltipHtml was deprecated, please use `tooltip` instead');
                this.tooltip = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_placement", {
            /** @deprecated - please use `placement` instead */
            // eslint-disable-next-line @angular-eslint/no-input-rename
            set: function (value) {
                utils.warnOnce('tooltipPlacement was deprecated, please use `placement` instead');
                this.placement = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_isOpen", {
            get: function () {
                utils.warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
                return this.isOpen;
            },
            /** @deprecated - please use `isOpen` instead */
            // eslint-disable-next-line @angular-eslint/no-input-rename
            set: function (value) {
                utils.warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
                this.isOpen = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_enable", {
            get: function () {
                utils.warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
                return this.isDisabled;
            },
            /** @deprecated - please use `isDisabled` instead */
            // eslint-disable-next-line @angular-eslint/no-input-rename
            set: function (value) {
                utils.warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
                this.isDisabled = !value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_appendToBody", {
            get: function () {
                utils.warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
                return this.container === 'body';
            },
            /** @deprecated - please use `container="body"` instead */
            // eslint-disable-next-line @angular-eslint/no-input-rename
            set: function (value) {
                utils.warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
                this.container = value ? 'body' : this.container;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_popupClass", {
            /** @deprecated - will replaced with customClass */
            // eslint-disable-next-line @angular-eslint/no-input-rename
            set: function (value) {
                utils.warnOnce('tooltipClass deprecated');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_tooltipContext", {
            /** @deprecated - removed */
            // eslint-disable-next-line @angular-eslint/no-input-rename
            set: function (value) {
                utils.warnOnce('tooltipContext deprecated');
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_tooltipPopupDelay", {
            /** @deprecated */
            // eslint-disable-next-line @angular-eslint/no-input-rename
            set: function (value) {
                utils.warnOnce('tooltipPopupDelay is deprecated, use `delay` instead');
                this.delay = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TooltipDirective.prototype, "_tooltipTrigger", {
            /** @deprecated -  please use `triggers` instead */
            get: function () {
                utils.warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
                return this.triggers;
            },
            set: function (value) {
                utils.warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
                this.triggers = (value || '').toString();
            },
            enumerable: false,
            configurable: true
        });
        TooltipDirective.prototype.ngOnInit = function () {
            var _this = this;
            this._tooltip.listen({
                triggers: this.triggers,
                show: function () { return _this.show(); }
            });
            this.tooltipChange.subscribe(function (value) {
                if (!value) {
                    _this._tooltip.hide();
                }
            });
            this.onShown.subscribe(function () {
                _this.setAriaDescribedBy();
            });
            this.onHidden.subscribe(function () {
                _this.setAriaDescribedBy();
            });
        };
        TooltipDirective.prototype.setAriaDescribedBy = function () {
            this._ariaDescribedby = this.isOpen ? "tooltip-" + this.tooltipId : null;
            if (this._ariaDescribedby) {
                this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
            }
            else {
                this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            }
        };
        /**
         * Toggles an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         */
        TooltipDirective.prototype.toggle = function () {
            if (this.isOpen) {
                return this.hide();
            }
            this.show();
        };
        /**
         * Opens an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         */
        TooltipDirective.prototype.show = function () {
            var _this = this;
            this._positionService.setOptions({
                modifiers: {
                    flip: {
                        enabled: this.adaptivePosition
                    },
                    preventOverflow: {
                        enabled: this.adaptivePosition,
                        boundariesElement: this.boundariesElement || 'scrollParent'
                    }
                }
            });
            if (this.isOpen ||
                this.isDisabled ||
                this._delayTimeoutId ||
                !this.tooltip) {
                return;
            }
            var showTooltip = function () {
                if (_this._delayTimeoutId) {
                    _this._delayTimeoutId = undefined;
                }
                _this._tooltip
                    .attach(TooltipContainerComponent)
                    .to(_this.container)
                    .position({ attachment: _this.placement })
                    .show({
                    content: _this.tooltip,
                    placement: _this.placement,
                    containerClass: _this.containerClass,
                    id: "tooltip-" + _this.tooltipId
                });
            };
            var cancelDelayedTooltipShowing = function () {
                if (_this._tooltipCancelShowFn) {
                    _this._tooltipCancelShowFn();
                }
            };
            if (this.delay) {
                if (this._delaySubscription) {
                    this._delaySubscription.unsubscribe();
                }
                this._delaySubscription = rxjs.timer(this.delay).subscribe(function () {
                    showTooltip();
                    cancelDelayedTooltipShowing();
                });
                if (this.triggers) {
                    utils.parseTriggers(this.triggers)
                        .forEach(function (trigger) {
                        _this._tooltipCancelShowFn = _this._renderer.listen(_this._elementRef.nativeElement, trigger.close, function () {
                            _this._delaySubscription.unsubscribe();
                            cancelDelayedTooltipShowing();
                        });
                    });
                }
            }
            else {
                showTooltip();
            }
        };
        /**
         * Closes an element’s tooltip. This is considered a “manual” triggering of
         * the tooltip.
         */
        TooltipDirective.prototype.hide = function () {
            var _this = this;
            if (this._delayTimeoutId) {
                clearTimeout(this._delayTimeoutId);
                this._delayTimeoutId = undefined;
            }
            if (!this._tooltip.isShown) {
                return;
            }
            this._tooltip.instance.classMap.in = false;
            setTimeout(function () {
                _this._tooltip.hide();
            }, this.tooltipFadeDuration);
        };
        TooltipDirective.prototype.ngOnDestroy = function () {
            this._tooltip.dispose();
            this.tooltipChange.unsubscribe();
            if (this._delaySubscription) {
                this._delaySubscription.unsubscribe();
            }
            this.onShown.unsubscribe();
            this.onHidden.unsubscribe();
        };
        return TooltipDirective;
    }());
    TooltipDirective.ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i1.ComponentLoaderFactory), i0.ɵɵdirectiveInject(TooltipConfig), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i3.PositioningService)); };
    TooltipDirective.ɵdir = i0.ɵɵdefineDirective({ type: TooltipDirective, selectors: [["", "tooltip", ""], ["", "tooltipHtml", ""]], inputs: { adaptivePosition: "adaptivePosition", tooltip: "tooltip", placement: "placement", triggers: "triggers", container: "container", containerClass: "containerClass", boundariesElement: "boundariesElement", isOpen: "isOpen", isDisabled: "isDisabled", delay: "delay", htmlContent: ["tooltipHtml", "htmlContent"], _placement: ["tooltipPlacement", "_placement"], _isOpen: ["tooltipIsOpen", "_isOpen"], _enable: ["tooltipEnable", "_enable"], _appendToBody: ["tooltipAppendToBody", "_appendToBody"], tooltipAnimation: "tooltipAnimation", _popupClass: ["tooltipClass", "_popupClass"], _tooltipContext: ["tooltipContext", "_tooltipContext"], _tooltipPopupDelay: ["tooltipPopupDelay", "_tooltipPopupDelay"], tooltipFadeDuration: "tooltipFadeDuration", _tooltipTrigger: ["tooltipTrigger", "_tooltipTrigger"] }, outputs: { tooltipChange: "tooltipChange", onShown: "onShown", onHidden: "onHidden", tooltipStateChanged: "tooltipStateChanged" }, exportAs: ["bs-tooltip"] });
    __decorate([
        utils.OnChange(),
        __metadata("design:type", Object)
    ], TooltipDirective.prototype, "tooltip", void 0);
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[tooltip], [tooltipHtml]',
                        exportAs: 'bs-tooltip'
                    }]
            }], function () { return [{ type: i0.ViewContainerRef }, { type: i1.ComponentLoaderFactory }, { type: TooltipConfig }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i3.PositioningService }]; }, { adaptivePosition: [{
                    type: i0.Input
                }], tooltip: [{
                    type: i0.Input
                }], tooltipChange: [{
                    type: i0.Output
                }], placement: [{
                    type: i0.Input
                }], triggers: [{
                    type: i0.Input
                }], container: [{
                    type: i0.Input
                }], containerClass: [{
                    type: i0.Input
                }], boundariesElement: [{
                    type: i0.Input
                }], isOpen: [{
                    type: i0.Input
                }], isDisabled: [{
                    type: i0.Input
                }], delay: [{
                    type: i0.Input
                }], onShown: [{
                    type: i0.Output
                }], onHidden: [{
                    type: i0.Output
                }], htmlContent: [{
                    type: i0.Input,
                    args: ['tooltipHtml']
                }], _placement: [{
                    type: i0.Input,
                    args: ['tooltipPlacement']
                }], _isOpen: [{
                    type: i0.Input,
                    args: ['tooltipIsOpen']
                }], _enable: [{
                    type: i0.Input,
                    args: ['tooltipEnable']
                }], _appendToBody: [{
                    type: i0.Input,
                    args: ['tooltipAppendToBody']
                }], tooltipAnimation: [{
                    type: i0.Input
                }], _popupClass: [{
                    type: i0.Input,
                    args: ['tooltipClass']
                }], _tooltipContext: [{
                    type: i0.Input,
                    args: ['tooltipContext']
                }], _tooltipPopupDelay: [{
                    type: i0.Input,
                    args: ['tooltipPopupDelay']
                }], tooltipFadeDuration: [{
                    type: i0.Input
                }], _tooltipTrigger: [{
                    type: i0.Input,
                    args: ['tooltipTrigger']
                }], tooltipStateChanged: [{
                    type: i0.Output
                }] });
    })();

    var TooltipModule = /** @class */ (function () {
        function TooltipModule() {
        }
        TooltipModule.forRoot = function () {
            return {
                ngModule: TooltipModule,
                providers: [i1.ComponentLoaderFactory, i3.PositioningService]
            };
        };
        return TooltipModule;
    }());
    TooltipModule.ɵmod = i0.ɵɵdefineNgModule({ type: TooltipModule });
    TooltipModule.ɵinj = i0.ɵɵdefineInjector({ factory: function TooltipModule_Factory(t) { return new (t || TooltipModule)(); }, imports: [[common.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TooltipModule, { declarations: [TooltipDirective, TooltipContainerComponent], imports: [common.CommonModule], exports: [TooltipDirective] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [common.CommonModule],
                        declarations: [TooltipDirective, TooltipContainerComponent],
                        exports: [TooltipDirective],
                        entryComponents: [TooltipContainerComponent]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TooltipConfig = TooltipConfig;
    exports.TooltipContainerComponent = TooltipContainerComponent;
    exports.TooltipDirective = TooltipDirective;
    exports.TooltipModule = TooltipModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-tooltip.umd.js.map
