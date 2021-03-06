(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@angular/forms'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/sortable', ['exports', '@angular/core', '@angular/common', '@angular/forms', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].sortable = {}), global.ng.core, global.ng.common, global.ng.forms, global.rxjs));
}(this, (function (exports, i0, i2, forms, rxjs) { 'use strict';

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

    var DraggableItemService = /** @class */ (function () {
        function DraggableItemService() {
            this.onCapture = new rxjs.Subject();
        }
        DraggableItemService.prototype.dragStart = function (item) {
            this.draggableItem = item;
        };
        DraggableItemService.prototype.getItem = function () {
            return this.draggableItem;
        };
        DraggableItemService.prototype.captureItem = function (overZoneIndex, newIndex) {
            if (this.draggableItem.overZoneIndex !== overZoneIndex) {
                this.draggableItem.lastZoneIndex = this.draggableItem.overZoneIndex;
                this.draggableItem.overZoneIndex = overZoneIndex;
                this.onCapture.next(this.draggableItem);
                this.draggableItem = Object.assign({}, this.draggableItem, {
                    overZoneIndex: overZoneIndex,
                    i: newIndex
                });
            }
            return this.draggableItem;
        };
        DraggableItemService.prototype.onCaptureItem = function () {
            return this.onCapture;
        };
        return DraggableItemService;
    }());
    DraggableItemService.??fac = function DraggableItemService_Factory(t) { return new (t || DraggableItemService)(); };
    DraggableItemService.??prov = i0.????defineInjectable({ token: DraggableItemService, factory: DraggableItemService.??fac });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(DraggableItemService, [{
                type: i0.Injectable
            }], null, null);
    })();

    function SortableComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r5_1 = i0.????getCurrentView();
            i0.????elementStart(0, "div", 4);
            i0.????listener("dragover", function SortableComponent_div_1_Template_div_dragover_0_listener($event) { i0.????restoreView(_r5_1); var ctx_r4 = i0.????nextContext(); return ctx_r4.onItemDragover($event, 0); })("dragenter", function SortableComponent_div_1_Template_div_dragenter_0_listener($event) { i0.????restoreView(_r5_1); var ctx_r6 = i0.????nextContext(); return ctx_r6.cancelEvent($event); });
            i0.????text(1);
            i0.????elementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.????nextContext();
            i0.????property("ngClass", ctx_r0.placeholderClass)("ngStyle", ctx_r0.placeholderStyle);
            i0.????advance(1);
            i0.????textInterpolate(ctx_r0.placeholderItem);
        }
    }
    function SortableComponent_div_2_ng_template_1_Template(rf, ctx) { }
    var _c0 = function (a0, a1) { return [a0, a1]; };
    var _c1 = function (a0, a1) { return { item: a0, index: a1 }; };
    function SortableComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r11_1 = i0.????getCurrentView();
            i0.????elementStart(0, "div", 5);
            i0.????listener("dragstart", function SortableComponent_div_2_Template_div_dragstart_0_listener($event) { i0.????restoreView(_r11_1); var item_r7 = ctx.$implicit; var i_r8 = ctx.index; var ctx_r10 = i0.????nextContext(); return ctx_r10.onItemDragstart($event, item_r7, i_r8); })("dragend", function SortableComponent_div_2_Template_div_dragend_0_listener($event) { i0.????restoreView(_r11_1); var ctx_r12 = i0.????nextContext(); return ctx_r12.resetActiveItem($event); })("dragover", function SortableComponent_div_2_Template_div_dragover_0_listener($event) { i0.????restoreView(_r11_1); var i_r8 = ctx.index; var ctx_r13 = i0.????nextContext(); return ctx_r13.onItemDragover($event, i_r8); })("dragenter", function SortableComponent_div_2_Template_div_dragenter_0_listener($event) { i0.????restoreView(_r11_1); var ctx_r14 = i0.????nextContext(); return ctx_r14.cancelEvent($event); });
            i0.????template(1, SortableComponent_div_2_ng_template_1_Template, 0, 0, "ng-template", 6);
            i0.????elementEnd();
        }
        if (rf & 2) {
            var item_r7 = ctx.$implicit;
            var i_r8 = ctx.index;
            var ctx_r1 = i0.????nextContext();
            var _r2 = i0.????reference(4);
            i0.????property("ngClass", i0.????pureFunction2(5, _c0, ctx_r1.itemClass, i_r8 === ctx_r1.activeItem ? ctx_r1.itemActiveClass : ""))("ngStyle", ctx_r1.getItemStyle(i_r8 === ctx_r1.activeItem));
            i0.????attribute("aria-grabbed", i_r8 === ctx_r1.activeItem);
            i0.????advance(1);
            i0.????property("ngTemplateOutlet", ctx_r1.itemTemplate || _r2)("ngTemplateOutletContext", i0.????pureFunction2(8, _c1, item_r7, i_r8));
        }
    }
    function SortableComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
            i0.????text(0);
        }
        if (rf & 2) {
            var item_r15 = ctx.item;
            i0.????textInterpolate(item_r15.value);
        }
    }
    var SortableComponent = /** @class */ (function () {
        function SortableComponent(transfer) {
            var _this = this;
            /** class name for items wrapper */
            this.wrapperClass = '';
            /** style object for items wrapper */
            this.wrapperStyle = {};
            /** class name for item */
            this.itemClass = '';
            /** style object for item */
            this.itemStyle = {};
            /** class name for active item */
            this.itemActiveClass = '';
            /** style object for active item */
            this.itemActiveStyle = {};
            /** class name for placeholder */
            this.placeholderClass = '';
            /** style object for placeholder */
            this.placeholderStyle = {};
            /** placeholder item which will be shown if collection is empty */
            this.placeholderItem = '';
            /** fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
             *  Returns new items collection as a payload.
             */
            this.onChange = new i0.EventEmitter();
            this.showPlaceholder = false;
            this.activeItem = -1;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.onTouched = Function.prototype;
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.onChanged = Function.prototype;
            this.transfer = transfer;
            this.currentZoneIndex = SortableComponent.globalZoneIndex++;
            this.transfer
                .onCaptureItem()
                .subscribe(function (item) { return _this.onDrop(item); });
        }
        Object.defineProperty(SortableComponent.prototype, "items", {
            get: function () {
                return this._items;
            },
            set: function (value) {
                this._items = value;
                var out = this.items.map(function (x) { return x.initData; });
                this.onChanged(out);
                this.onChange.emit(out);
            },
            enumerable: false,
            configurable: true
        });
        SortableComponent.prototype.onItemDragstart = function (event, item, i) {
            this.initDragstartEvent(event);
            this.onTouched();
            this.transfer.dragStart({
                event: event,
                item: item,
                i: i,
                initialIndex: i,
                lastZoneIndex: this.currentZoneIndex,
                overZoneIndex: this.currentZoneIndex
            });
        };
        SortableComponent.prototype.onItemDragover = function (event, i) {
            if (!this.transfer.getItem()) {
                return;
            }
            event.preventDefault();
            var dragItem = this.transfer.captureItem(this.currentZoneIndex, this.items.length);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var newArray = [];
            if (!this.items.length) {
                newArray = [dragItem.item];
            }
            else if (dragItem.i > i) {
                newArray = __spread(this.items.slice(0, i), [
                    dragItem.item
                ], this.items.slice(i, dragItem.i), this.items.slice(dragItem.i + 1));
            }
            else {
                // this.draggedItem.i < i
                newArray = __spread(this.items.slice(0, dragItem.i), this.items.slice(dragItem.i + 1, i + 1), [
                    dragItem.item
                ], this.items.slice(i + 1));
            }
            this.items = newArray;
            dragItem.i = i;
            this.activeItem = i;
            this.updatePlaceholderState();
        };
        SortableComponent.prototype.cancelEvent = function (event) {
            if (!this.transfer.getItem() || !event) {
                return;
            }
            event.preventDefault();
        };
        SortableComponent.prototype.onDrop = function (item) {
            if (item &&
                item.overZoneIndex !== this.currentZoneIndex &&
                item.lastZoneIndex === this.currentZoneIndex) {
                this.items = this.items.filter(function (x, i) { return i !== item.i; });
                this.updatePlaceholderState();
            }
            this.resetActiveItem(undefined);
        };
        SortableComponent.prototype.resetActiveItem = function (event) {
            this.cancelEvent(event);
            this.activeItem = -1;
        };
        SortableComponent.prototype.registerOnChange = function (callback) {
            this.onChanged = callback;
        };
        SortableComponent.prototype.registerOnTouched = function (callback) {
            this.onTouched = callback;
        };
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        SortableComponent.prototype.writeValue = function (value) {
            var _this = this;
            if (value) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                this.items = value.map(function (x, i) { return ({
                    id: i,
                    initData: x,
                    value: _this.fieldName ? x[_this.fieldName] : x
                }); });
            }
            else {
                this.items = [];
            }
            this.updatePlaceholderState();
        };
        SortableComponent.prototype.updatePlaceholderState = function () {
            this.showPlaceholder = !this._items.length;
        };
        SortableComponent.prototype.getItemStyle = function (isActive) {
            return isActive
                ? Object.assign({}, this.itemStyle, this.itemActiveStyle)
                : this.itemStyle;
        };
        SortableComponent.prototype.initDragstartEvent = function (event) {
            // it is necessary for mozilla
            // data type should be 'Text' instead of 'text/plain' to keep compatibility
            // with IE
            event.dataTransfer.setData('Text', 'placeholder');
        };
        return SortableComponent;
    }());
    SortableComponent.globalZoneIndex = 0;
    SortableComponent.??fac = function SortableComponent_Factory(t) { return new (t || SortableComponent)(i0.????directiveInject(DraggableItemService)); };
    SortableComponent.??cmp = i0.????defineComponent({ type: SortableComponent, selectors: [["bs-sortable"]], inputs: { fieldName: "fieldName", wrapperClass: "wrapperClass", wrapperStyle: "wrapperStyle", itemClass: "itemClass", itemStyle: "itemStyle", itemActiveClass: "itemActiveClass", itemActiveStyle: "itemActiveStyle", placeholderClass: "placeholderClass", placeholderStyle: "placeholderStyle", placeholderItem: "placeholderItem", itemTemplate: "itemTemplate" }, outputs: { onChange: "onChange" }, exportAs: ["bs-sortable"], features: [i0.????ProvidersFeature([
                {
                    provide: forms.NG_VALUE_ACCESSOR,
                    useExisting: i0.forwardRef(function () { return SortableComponent; }),
                    multi: true
                }
            ])], decls: 5, vars: 4, consts: [[3, "ngClass", "ngStyle", "dragover", "dragenter", "drop", "mouseleave"], [3, "ngClass", "ngStyle", "dragover", "dragenter", 4, "ngIf"], ["draggable", "true", "aria-dropeffect", "move", 3, "ngClass", "ngStyle", "dragstart", "dragend", "dragover", "dragenter", 4, "ngFor", "ngForOf"], ["defItemTemplate", ""], [3, "ngClass", "ngStyle", "dragover", "dragenter"], ["draggable", "true", "aria-dropeffect", "move", 3, "ngClass", "ngStyle", "dragstart", "dragend", "dragover", "dragenter"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function SortableComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.????elementStart(0, "div", 0);
                i0.????listener("dragover", function SortableComponent_Template_div_dragover_0_listener($event) { return ctx.cancelEvent($event); })("dragenter", function SortableComponent_Template_div_dragenter_0_listener($event) { return ctx.cancelEvent($event); })("drop", function SortableComponent_Template_div_drop_0_listener($event) { return ctx.resetActiveItem($event); })("mouseleave", function SortableComponent_Template_div_mouseleave_0_listener($event) { return ctx.resetActiveItem($event); });
                i0.????template(1, SortableComponent_div_1_Template, 2, 3, "div", 1);
                i0.????template(2, SortableComponent_div_2_Template, 2, 11, "div", 2);
                i0.????elementEnd();
                i0.????template(3, SortableComponent_ng_template_3_Template, 1, 1, "ng-template", null, 3, i0.????templateRefExtractor);
            }
            if (rf & 2) {
                i0.????property("ngClass", ctx.wrapperClass)("ngStyle", ctx.wrapperStyle);
                i0.????advance(1);
                i0.????property("ngIf", ctx.showPlaceholder);
                i0.????advance(1);
                i0.????property("ngForOf", ctx.items);
            }
        }, directives: [i2.NgClass, i2.NgStyle, i2.NgIf, i2.NgForOf, i2.NgTemplateOutlet], encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(SortableComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'bs-sortable',
                        exportAs: 'bs-sortable',
                        template: "\n<div\n    [ngClass]=\"wrapperClass\"\n    [ngStyle]=\"wrapperStyle\"\n    (dragover)=\"cancelEvent($event)\"\n    (dragenter)=\"cancelEvent($event)\"\n    (drop)=\"resetActiveItem($event)\"\n    (mouseleave)=\"resetActiveItem($event)\">\n  <div\n        *ngIf=\"showPlaceholder\"\n        [ngClass]=\"placeholderClass\"\n        [ngStyle]=\"placeholderStyle\"\n        (dragover)=\"onItemDragover($event, 0)\"\n        (dragenter)=\"cancelEvent($event)\"\n    >{{placeholderItem}}</div>\n    <div\n        *ngFor=\"let item of items; let i=index;\"\n        [ngClass]=\"[ itemClass, i === activeItem ? itemActiveClass : '' ]\"\n        [ngStyle]=\"getItemStyle(i === activeItem)\"\n        draggable=\"true\"\n        (dragstart)=\"onItemDragstart($event, item, i)\"\n        (dragend)=\"resetActiveItem($event)\"\n        (dragover)=\"onItemDragover($event, i)\"\n        (dragenter)=\"cancelEvent($event)\"\n        aria-dropeffect=\"move\"\n        [attr.aria-grabbed]=\"i === activeItem\"\n    ><ng-template [ngTemplateOutlet]=\"itemTemplate || defItemTemplate\"\n  [ngTemplateOutletContext]=\"{item:item, index: i}\"></ng-template></div>\n</div>\n\n<ng-template #defItemTemplate let-item=\"item\">{{item.value}}</ng-template>\n",
                        providers: [
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: i0.forwardRef(function () { return SortableComponent; }),
                                multi: true
                            }
                        ]
                    }]
            }], function () { return [{ type: DraggableItemService }]; }, { fieldName: [{
                    type: i0.Input
                }], wrapperClass: [{
                    type: i0.Input
                }], wrapperStyle: [{
                    type: i0.Input
                }], itemClass: [{
                    type: i0.Input
                }], itemStyle: [{
                    type: i0.Input
                }], itemActiveClass: [{
                    type: i0.Input
                }], itemActiveStyle: [{
                    type: i0.Input
                }], placeholderClass: [{
                    type: i0.Input
                }], placeholderStyle: [{
                    type: i0.Input
                }], placeholderItem: [{
                    type: i0.Input
                }], itemTemplate: [{
                    type: i0.Input
                }], onChange: [{
                    type: i0.Output
                }] });
    })();

    var SortableModule = /** @class */ (function () {
        function SortableModule() {
        }
        SortableModule.forRoot = function () {
            return { ngModule: SortableModule, providers: [DraggableItemService] };
        };
        return SortableModule;
    }());
    SortableModule.??mod = i0.????defineNgModule({ type: SortableModule });
    SortableModule.??inj = i0.????defineInjector({ factory: function SortableModule_Factory(t) { return new (t || SortableModule)(); }, imports: [[i2.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.????setNgModuleScope(SortableModule, { declarations: [SortableComponent], imports: [i2.CommonModule], exports: [SortableComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.??setClassMetadata(SortableModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [SortableComponent],
                        imports: [i2.CommonModule],
                        exports: [SortableComponent]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.DraggableItemService = DraggableItemService;
    exports.SortableComponent = SortableComponent;
    exports.SortableModule = SortableModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-sortable.umd.js.map
