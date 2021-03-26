(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/progressbar', ['exports', '@angular/core', 'ngx-bootstrap/utils', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].progressbar = {}), global.ng.core, global.utils, global.ng.common));
}(this, (function (exports, i0, utils, i1) { 'use strict';

    var ProgressbarConfig = /** @class */ (function () {
        function ProgressbarConfig() {
            /** if `true` changing value of progress bar will be animated */
            this.animate = false;
            /** maximum total value of progress element */
            this.max = 100;
        }
        return ProgressbarConfig;
    }());
    ProgressbarConfig.ɵfac = function ProgressbarConfig_Factory(t) { return new (t || ProgressbarConfig)(); };
    ProgressbarConfig.ɵprov = i0.ɵɵdefineInjectable({ token: ProgressbarConfig, factory: ProgressbarConfig.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarConfig, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    function ProgressbarComponent_bar_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "bar", 2);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("type", ctx_r0.type)("value", ctx_r0._value)("max", ctx_r0._max);
        }
    }
    function ProgressbarComponent_ng_template_1_bar_0_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "bar", 2);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var item_r3 = ctx.$implicit;
            i0.ɵɵproperty("type", item_r3.type)("value", item_r3.value)("max", item_r3.max);
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(item_r3.label);
        }
    }
    function ProgressbarComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵtemplate(0, ProgressbarComponent_ng_template_1_bar_0_Template, 2, 4, "bar", 3);
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngForOf", ctx_r1._value);
        }
    }
    var _c0 = ["*"];
    var ProgressbarComponent = /** @class */ (function () {
        function ProgressbarComponent(config) {
            this.isStacked = false;
            this._max = 100;
            this.addClass = true;
            this.bars = [];
            Object.assign(this, config);
        }
        Object.defineProperty(ProgressbarComponent.prototype, "animate", {
            /** if `true` changing value of progress bar will be animated */
            set: function (value) {
                this._animate = value;
                this.bars.forEach(function (b) {
                    b.animate = value;
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProgressbarComponent.prototype, "striped", {
            /** If `true`, striped classes are applied */
            set: function (value) {
                this._striped = value;
                this.bars.forEach(function (b) {
                    b.striped = value;
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProgressbarComponent.prototype, "value", {
            /** current value of progress bar. Could be a number or array of objects
             * like {"value":15,"type":"info","label":"15 %"}
             */
            set: function (value) {
                this.isStacked = Array.isArray(value);
                this._value = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProgressbarComponent.prototype, "isBs3", {
            get: function () {
                return utils.isBs3();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ProgressbarComponent.prototype, "max", {
            /** maximum total value of progress element */
            get: function () {
                return this._max;
            },
            set: function (v) {
                this._max = v;
                this.bars.forEach(function (bar) {
                    bar.recalculatePercentage();
                });
            },
            enumerable: false,
            configurable: true
        });
        ProgressbarComponent.prototype.addBar = function (bar) {
            bar.animate = this._animate;
            bar.striped = this._striped;
            this.bars.push(bar);
        };
        ProgressbarComponent.prototype.removeBar = function (bar) {
            this.bars.splice(this.bars.indexOf(bar), 1);
        };
        return ProgressbarComponent;
    }());
    ProgressbarComponent.ɵfac = function ProgressbarComponent_Factory(t) { return new (t || ProgressbarComponent)(i0.ɵɵdirectiveInject(ProgressbarConfig)); };
    ProgressbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProgressbarComponent, selectors: [["progressbar"]], hostVars: 3, hostBindings: function ProgressbarComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("max", ctx.max);
                i0.ɵɵclassProp("progress", ctx.addClass);
            }
        }, inputs: { animate: "animate", striped: "striped", type: "type", value: "value", max: "max" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[3, "type", "value", "max", 4, "ngIf"], [3, "ngIf"], [3, "type", "value", "max"], [3, "type", "value", "max", 4, "ngFor", "ngForOf"]], template: function ProgressbarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵtemplate(0, ProgressbarComponent_bar_0_Template, 2, 3, "bar", 0);
                i0.ɵɵtemplate(1, ProgressbarComponent_ng_template_1_Template, 1, 1, "ng-template", 1);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", !ctx.isStacked);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.isStacked);
            }
        }, styles: ["[_nghost-%COMP%] {\n      width: 100%;\n      display: flex;\n    }"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'progressbar',
                        templateUrl: './progressbar.component.html',
                        styles: [
                            "\n    :host {\n      width: 100%;\n      display: flex;\n    }\n  "
                        ]
                    }]
            }], function () { return [{ type: ProgressbarConfig }]; }, { animate: [{
                    type: i0.Input
                }], striped: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], max: [{
                    type: i0.HostBinding,
                    args: ['attr.max']
                }, {
                    type: i0.Input
                }], addClass: [{
                    type: i0.HostBinding,
                    args: ['class.progress']
                }] });
    })();

    var _c0$1 = ["*"];
    // todo: number pipe
    // todo: use query from progress?
    var BarComponent = /** @class */ (function () {
        function BarComponent(el, progress, renderer) {
            this.el = el;
            this.renderer = renderer;
            this.addClass = true;
            this.percent = 0;
            this.progress = progress;
        }
        Object.defineProperty(BarComponent.prototype, "setBarWidth", {
            get: function () {
                this.recalculatePercentage();
                return this.percent;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(BarComponent.prototype, "isBs3", {
            get: function () {
                return utils.isBs3();
            },
            enumerable: false,
            configurable: true
        });
        BarComponent.prototype.ngOnInit = function () {
            this.progress.addBar(this);
        };
        BarComponent.prototype.ngOnDestroy = function () {
            this.progress.removeBar(this);
        };
        BarComponent.prototype.ngOnChanges = function (changes) {
            if (changes.value) {
                if (!changes.value.currentValue && changes.value.currentValue !== 0) {
                    return;
                }
                this.value = changes.value.currentValue;
                this.recalculatePercentage();
            }
            if (changes.type) {
                this.type = changes.type.currentValue;
                this.applyTypeClasses();
            }
        };
        BarComponent.prototype.recalculatePercentage = function () {
            this.percent = +(this.value / this.progress.max * 100).toFixed(2);
            var totalPercentage = this.progress.bars
                .reduce(function (total, bar) {
                return total + bar.percent;
            }, 0);
            if (totalPercentage > 100) {
                this.percent -= totalPercentage - 100;
            }
        };
        BarComponent.prototype.applyTypeClasses = function () {
            if (this._prevType) {
                var barTypeClass = "progress-bar-" + this._prevType;
                var bgClass = "bg-" + this._prevType;
                this.renderer.removeClass(this.el.nativeElement, barTypeClass);
                this.renderer.removeClass(this.el.nativeElement, bgClass);
                this._prevType = null;
            }
            if (this.type) {
                var barTypeClass = "progress-bar-" + this.type;
                var bgClass = "bg-" + this.type;
                this.renderer.addClass(this.el.nativeElement, barTypeClass);
                this.renderer.addClass(this.el.nativeElement, bgClass);
                this._prevType = this.type;
            }
        };
        return BarComponent;
    }());
    BarComponent.ɵfac = function BarComponent_Factory(t) { return new (t || BarComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(ProgressbarComponent, 1), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    BarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BarComponent, selectors: [["bar"]], hostAttrs: ["role", "progressbar", "aria-valuemin", "0"], hostVars: 15, hostBindings: function BarComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("aria-valuenow", ctx.value)("aria-valuetext", ctx.percent ? ctx.percent.toFixed(0) + "%" : "")("aria-valuemax", ctx.max);
                i0.ɵɵstyleProp("height", "100", "%")("width", ctx.setBarWidth, "%");
                i0.ɵɵclassProp("progress-bar-animated", !ctx.isBs3 && ctx.animate)("progress-bar-striped", ctx.striped)("active", ctx.isBs3 && ctx.animate)("progress-bar", ctx.addClass);
            }
        }, inputs: { max: "max", type: "type", value: "value" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0$1, decls: 1, vars: 0, template: function BarComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵprojection(0);
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BarComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'bar',
                        templateUrl: './bar.component.html',
                        // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                        host: {
                            role: 'progressbar',
                            'aria-valuemin': '0',
                            '[class.progress-bar-animated]': '!isBs3 && animate',
                            '[class.progress-bar-striped]': 'striped',
                            '[class.active]': 'isBs3 && animate',
                            '[attr.aria-valuenow]': 'value',
                            '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
                            '[attr.aria-valuemax]': 'max',
                            '[style.height.%]': '"100"'
                        }
                    }]
            }], function () {
            return [{ type: i0.ElementRef }, { type: ProgressbarComponent, decorators: [{
                            type: i0.Host
                        }] }, { type: i0.Renderer2 }];
        }, { max: [{
                    type: i0.Input
                }], type: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], setBarWidth: [{
                    type: i0.HostBinding,
                    args: ['style.width.%']
                }], addClass: [{
                    type: i0.HostBinding,
                    args: ['class.progress-bar']
                }] });
    })();

    var ProgressbarModule = /** @class */ (function () {
        function ProgressbarModule() {
        }
        ProgressbarModule.forRoot = function () {
            return { ngModule: ProgressbarModule, providers: [] };
        };
        return ProgressbarModule;
    }());
    ProgressbarModule.ɵmod = i0.ɵɵdefineNgModule({ type: ProgressbarModule });
    ProgressbarModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ProgressbarModule_Factory(t) { return new (t || ProgressbarModule)(); }, imports: [[i1.CommonModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ProgressbarModule, { declarations: [BarComponent, ProgressbarComponent], imports: [i1.CommonModule], exports: [BarComponent, ProgressbarComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i1.CommonModule],
                        declarations: [BarComponent, ProgressbarComponent],
                        exports: [BarComponent, ProgressbarComponent]
                    }]
            }], null, null);
    })();
    i0.ɵɵsetComponentScope(ProgressbarComponent, [i1.NgIf, BarComponent, i1.NgForOf], []);

    /**
     * Generated bundle index. Do not edit.
     */

    exports.BarComponent = BarComponent;
    exports.ProgressbarComponent = ProgressbarComponent;
    exports.ProgressbarConfig = ProgressbarConfig;
    exports.ProgressbarModule = ProgressbarModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-progressbar.umd.js.map
