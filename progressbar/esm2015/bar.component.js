import { Component, Host, HostBinding, Input, ElementRef, Renderer2 } from '@angular/core';
import { ProgressbarComponent } from './progressbar.component';
import { isBs3 } from 'ngx-bootstrap/utils';
import * as i0 from "@angular/core";
import * as i1 from "./progressbar.component";
const _c0 = ["*"];
// todo: number pipe
// todo: use query from progress?
export class BarComponent {
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
BarComponent.ɵfac = function BarComponent_Factory(t) { return new (t || BarComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.ProgressbarComponent, 1), i0.ɵɵdirectiveInject(i0.Renderer2)); };
BarComponent.ɵcmp = i0.ɵɵdefineComponent({ type: BarComponent, selectors: [["bar"]], hostAttrs: ["role", "progressbar", "aria-valuemin", "0"], hostVars: 15, hostBindings: function BarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("aria-valuenow", ctx.value)("aria-valuetext", ctx.percent ? ctx.percent.toFixed(0) + "%" : "")("aria-valuemax", ctx.max);
        i0.ɵɵstyleProp("height", "100", "%")("width", ctx.setBarWidth, "%");
        i0.ɵɵclassProp("progress-bar-animated", !ctx.isBs3 && ctx.animate)("progress-bar-striped", ctx.striped)("active", ctx.isBs3 && ctx.animate)("progress-bar", ctx.addClass);
    } }, inputs: { max: "max", type: "type", value: "value" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function BarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BarComponent, [{
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
    }], function () { return [{ type: i0.ElementRef }, { type: i1.ProgressbarComponent, decorators: [{
                type: Host
            }] }, { type: i0.Renderer2 }]; }, { max: [{
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
//# sourceMappingURL=bar.component.js.map