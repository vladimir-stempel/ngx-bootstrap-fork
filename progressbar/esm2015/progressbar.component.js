import { Component, HostBinding, Input } from '@angular/core';
import { ProgressbarConfig } from './progressbar.config';
import { isBs3 } from 'ngx-bootstrap/utils';
import * as i0 from "@angular/core";
import * as i1 from "./progressbar.config";
function ProgressbarComponent_bar_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "bar", 2);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("type", ctx_r0.type)("value", ctx_r0._value)("max", ctx_r0._max);
} }
function ProgressbarComponent_ng_template_1_bar_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "bar", 2);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵproperty("type", item_r3.type)("value", item_r3.value)("max", item_r3.max);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r3.label);
} }
function ProgressbarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ProgressbarComponent_ng_template_1_bar_0_Template, 2, 4, "bar", 3);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngForOf", ctx_r1._value);
} }
const _c0 = ["*"];
export class ProgressbarComponent {
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
ProgressbarComponent.ɵfac = function ProgressbarComponent_Factory(t) { return new (t || ProgressbarComponent)(i0.ɵɵdirectiveInject(i1.ProgressbarConfig)); };
ProgressbarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: ProgressbarComponent, selectors: [["progressbar"]], hostVars: 3, hostBindings: function ProgressbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("max", ctx.max);
        i0.ɵɵclassProp("progress", ctx.addClass);
    } }, inputs: { animate: "animate", striped: "striped", type: "type", value: "value", max: "max" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[3, "type", "value", "max", 4, "ngIf"], [3, "ngIf"], [3, "type", "value", "max"], [3, "type", "value", "max", 4, "ngFor", "ngForOf"]], template: function ProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, ProgressbarComponent_bar_0_Template, 2, 3, "bar", 0);
        i0.ɵɵtemplate(1, ProgressbarComponent_ng_template_1_Template, 1, 1, "ng-template", 1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", !ctx.isStacked);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isStacked);
    } }, styles: ["[_nghost-%COMP%] {\n      width: 100%;\n      display: flex;\n    }"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarComponent, [{
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
    }], function () { return [{ type: i1.ProgressbarConfig }]; }, { animate: [{
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
//# sourceMappingURL=progressbar.component.js.map