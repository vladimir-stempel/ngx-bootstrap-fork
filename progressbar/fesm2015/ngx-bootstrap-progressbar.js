import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵelementStart, ɵɵprojection, ɵɵelementEnd, ɵɵnextContext, ɵɵproperty, ɵɵtext, ɵɵadvance, ɵɵtextInterpolate, ɵɵtemplate, ɵɵdirectiveInject, ɵɵdefineComponent, ɵɵattribute, ɵɵclassProp, ɵɵprojectionDef, Component, Input, HostBinding, ElementRef, Renderer2, ɵɵstyleProp, ɵɵNgOnChangesFeature, Host, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule, ɵɵsetComponentScope } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { CommonModule, NgIf, NgForOf } from '@angular/common';

class ProgressbarConfig {
    constructor() {
        /** if `true` changing value of progress bar will be animated */
        this.animate = false;
        /** maximum total value of progress element */
        this.max = 100;
    }
}
ProgressbarConfig.ɵfac = function ProgressbarConfig_Factory(t) { return new (t || ProgressbarConfig)(); };
ProgressbarConfig.ɵprov = ɵɵdefineInjectable({ token: ProgressbarConfig, factory: ProgressbarConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProgressbarConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

function ProgressbarComponent_bar_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "bar", 2);
    ɵɵprojection(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("type", ctx_r0.type)("value", ctx_r0._value)("max", ctx_r0._max);
} }
function ProgressbarComponent_ng_template_1_bar_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "bar", 2);
    ɵɵtext(1);
    ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    ɵɵproperty("type", item_r3.type)("value", item_r3.value)("max", item_r3.max);
    ɵɵadvance(1);
    ɵɵtextInterpolate(item_r3.label);
} }
function ProgressbarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtemplate(0, ProgressbarComponent_ng_template_1_bar_0_Template, 2, 4, "bar", 3);
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngForOf", ctx_r1._value);
} }
const _c0 = ["*"];
class ProgressbarComponent {
    constructor(config) {
        this.isStacked = false;
        this._max = 100;
        this.addClass = true;
        this.bars = [];
        Object.assign(this, config);
    }
    /** if `true` changing value of progress bar will be animated */
    set animate(value) {
        this._animate = value;
        this.bars.forEach((b) => {
            b.animate = value;
        });
    }
    /** If `true`, striped classes are applied */
    set striped(value) {
        this._striped = value;
        this.bars.forEach((b) => {
            b.striped = value;
        });
    }
    /** current value of progress bar. Could be a number or array of objects
     * like {"value":15,"type":"info","label":"15 %"}
     */
    set value(value) {
        this.isStacked = Array.isArray(value);
        this._value = value;
    }
    get isBs3() {
        return isBs3();
    }
    /** maximum total value of progress element */
    get max() {
        return this._max;
    }
    set max(v) {
        this._max = v;
        this.bars.forEach((bar) => {
            bar.recalculatePercentage();
        });
    }
    addBar(bar) {
        bar.animate = this._animate;
        bar.striped = this._striped;
        this.bars.push(bar);
    }
    removeBar(bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    }
}
ProgressbarComponent.ɵfac = function ProgressbarComponent_Factory(t) { return new (t || ProgressbarComponent)(ɵɵdirectiveInject(ProgressbarConfig)); };
ProgressbarComponent.ɵcmp = ɵɵdefineComponent({ type: ProgressbarComponent, selectors: [["progressbar"]], hostVars: 3, hostBindings: function ProgressbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵattribute("max", ctx.max);
        ɵɵclassProp("progress", ctx.addClass);
    } }, inputs: { animate: "animate", striped: "striped", type: "type", value: "value", max: "max" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[3, "type", "value", "max", 4, "ngIf"], [3, "ngIf"], [3, "type", "value", "max"], [3, "type", "value", "max", 4, "ngFor", "ngForOf"]], template: function ProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, ProgressbarComponent_bar_0_Template, 2, 3, "bar", 0);
        ɵɵtemplate(1, ProgressbarComponent_ng_template_1_Template, 1, 1, "ng-template", 1);
    } if (rf & 2) {
        ɵɵproperty("ngIf", !ctx.isStacked);
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.isStacked);
    } }, styles: ["[_nghost-%COMP%] {\n      width: 100%;\n      display: flex;\n    }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProgressbarComponent, [{
        type: Component,
        args: [{
                selector: 'progressbar',
                templateUrl: './progressbar.component.html',
                styles: [
                    `
    :host {
      width: 100%;
      display: flex;
    }
  `
                ]
            }]
    }], function () { return [{ type: ProgressbarConfig }]; }, { animate: [{
            type: Input
        }], striped: [{
            type: Input
        }], type: [{
            type: Input
        }], value: [{
            type: Input
        }], max: [{
            type: HostBinding,
            args: ['attr.max']
        }, {
            type: Input
        }], addClass: [{
            type: HostBinding,
            args: ['class.progress']
        }] }); })();

const _c0$1 = ["*"];
// todo: number pipe
// todo: use query from progress?
class BarComponent {
    constructor(el, progress, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.addClass = true;
        this.percent = 0;
        this.progress = progress;
    }
    get setBarWidth() {
        this.recalculatePercentage();
        return this.percent;
    }
    get isBs3() {
        return isBs3();
    }
    ngOnInit() {
        this.progress.addBar(this);
    }
    ngOnDestroy() {
        this.progress.removeBar(this);
    }
    ngOnChanges(changes) {
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
    }
    recalculatePercentage() {
        this.percent = +(this.value / this.progress.max * 100).toFixed(2);
        const totalPercentage = this.progress.bars
            .reduce(function (total, bar) {
            return total + bar.percent;
        }, 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    }
    applyTypeClasses() {
        if (this._prevType) {
            const barTypeClass = `progress-bar-${this._prevType}`;
            const bgClass = `bg-${this._prevType}`;
            this.renderer.removeClass(this.el.nativeElement, barTypeClass);
            this.renderer.removeClass(this.el.nativeElement, bgClass);
            this._prevType = null;
        }
        if (this.type) {
            const barTypeClass = `progress-bar-${this.type}`;
            const bgClass = `bg-${this.type}`;
            this.renderer.addClass(this.el.nativeElement, barTypeClass);
            this.renderer.addClass(this.el.nativeElement, bgClass);
            this._prevType = this.type;
        }
    }
}
BarComponent.ɵfac = function BarComponent_Factory(t) { return new (t || BarComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ProgressbarComponent, 1), ɵɵdirectiveInject(Renderer2)); };
BarComponent.ɵcmp = ɵɵdefineComponent({ type: BarComponent, selectors: [["bar"]], hostAttrs: ["role", "progressbar", "aria-valuemin", "0"], hostVars: 15, hostBindings: function BarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵattribute("aria-valuenow", ctx.value)("aria-valuetext", ctx.percent ? ctx.percent.toFixed(0) + "%" : "")("aria-valuemax", ctx.max);
        ɵɵstyleProp("height", "100", "%")("width", ctx.setBarWidth, "%");
        ɵɵclassProp("progress-bar-animated", !ctx.isBs3 && ctx.animate)("progress-bar-striped", ctx.striped)("active", ctx.isBs3 && ctx.animate)("progress-bar", ctx.addClass);
    } }, inputs: { max: "max", type: "type", value: "value" }, features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c0$1, decls: 1, vars: 0, template: function BarComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(BarComponent, [{
        type: Component,
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
    }], function () { return [{ type: ElementRef }, { type: ProgressbarComponent, decorators: [{
                type: Host
            }] }, { type: Renderer2 }]; }, { max: [{
            type: Input
        }], type: [{
            type: Input
        }], value: [{
            type: Input
        }], setBarWidth: [{
            type: HostBinding,
            args: ['style.width.%']
        }], addClass: [{
            type: HostBinding,
            args: ['class.progress-bar']
        }] }); })();

class ProgressbarModule {
    static forRoot() {
        return { ngModule: ProgressbarModule, providers: [] };
    }
}
ProgressbarModule.ɵmod = ɵɵdefineNgModule({ type: ProgressbarModule });
ProgressbarModule.ɵinj = ɵɵdefineInjector({ factory: function ProgressbarModule_Factory(t) { return new (t || ProgressbarModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(ProgressbarModule, { declarations: [BarComponent, ProgressbarComponent], imports: [CommonModule], exports: [BarComponent, ProgressbarComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(ProgressbarModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [BarComponent, ProgressbarComponent],
                exports: [BarComponent, ProgressbarComponent]
            }]
    }], null, null); })();
ɵɵsetComponentScope(ProgressbarComponent, [NgIf, BarComponent, NgForOf], []);

/**
 * Generated bundle index. Do not edit.
 */

export { BarComponent, ProgressbarComponent, ProgressbarConfig, ProgressbarModule };
//# sourceMappingURL=ngx-bootstrap-progressbar.js.map
