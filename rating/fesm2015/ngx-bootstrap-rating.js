import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵtext, ɵɵtextInterpolate, ɵɵgetCurrentView, ɵɵelementStart, ɵɵelementEnd, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtemplate, ɵɵreference, ɵɵadvance, ɵɵtextInterpolate1, ɵɵstyleProp, ɵɵclassProp, ɵɵproperty, ɵɵpureFunction2, forwardRef, EventEmitter, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵdefineComponent, ɵɵProvidersFeature, ɵɵtemplateRefExtractor, ɵɵattribute, Component, ChangeDetectionStrategy, Input, Output, HostListener, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgForOf, NgTemplateOutlet, CommonModule } from '@angular/common';

/** Default values provider for rating */
class RatingConfig {
    constructor() {
        /** aria label for rating */
        this.ariaLabel = 'rating';
    }
}
RatingConfig.ɵfac = function RatingConfig_Factory(t) { return new (t || RatingConfig)(); };
RatingConfig.ɵprov = ɵɵdefineInjectable({ token: RatingConfig, factory: RatingConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RatingConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

function RatingComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    ɵɵtext(0);
} if (rf & 2) {
    const value_r3 = ctx.value;
    const index_r4 = ctx.index;
    ɵɵtextInterpolate(index_r4 < value_r3 ? "\u2605" : "\u2606");
} }
function RatingComponent_ng_template_3_ng_template_3_Template(rf, ctx) { }
const _c0 = function (a0, a1) { return { index: a0, value: a1 }; };
function RatingComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 3);
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵelementStart(2, "span", 4);
    ɵɵlistener("mouseenter", function RatingComponent_ng_template_3_Template_span_mouseenter_2_listener() { ɵɵrestoreView(_r9); const index_r6 = ctx.index; const ctx_r8 = ɵɵnextContext(); return ctx_r8.enter(index_r6 + 1); })("click", function RatingComponent_ng_template_3_Template_span_click_2_listener() { ɵɵrestoreView(_r9); const index_r6 = ctx.index; const ctx_r10 = ɵɵnextContext(); return ctx_r10.rate(index_r6 + 1); });
    ɵɵtemplate(3, RatingComponent_ng_template_3_ng_template_3_Template, 0, 0, "ng-template", 5);
    ɵɵelementEnd();
} if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const index_r6 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    const _r0 = ɵɵreference(2);
    ɵɵadvance(1);
    ɵɵtextInterpolate1("(", index_r6 < ctx_r2.value ? "*" : " ", ")");
    ɵɵadvance(1);
    ɵɵstyleProp("cursor", ctx_r2.readonly ? "default" : "pointer");
    ɵɵclassProp("active", index_r6 < ctx_r2.value);
    ɵɵproperty("title", r_r5.title);
    ɵɵadvance(1);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.customTemplate || _r0)("ngTemplateOutletContext", ɵɵpureFunction2(8, _c0, index_r6, ctx_r2.value));
} }
const RATING_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RatingComponent),
    multi: true
};
class RatingComponent {
    constructor(changeDetection, config) {
        this.changeDetection = changeDetection;
        /** number of icons */
        this.max = 5;
        /** fired when icon selected, $event:number equals to selected rating */
        this.onHover = new EventEmitter();
        /** fired when icon selected, $event:number equals to previous rating value */
        this.onLeave = new EventEmitter();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        Object.assign(this, config);
    }
    onKeydown(event) {
        if ([37, 38, 39, 40].indexOf(event.which) === -1) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        const sign = event.which === 38 || event.which === 39 ? 1 : -1;
        this.rate(this.value + sign);
    }
    ngOnInit() {
        this.max = typeof this.max !== 'undefined' ? this.max : 5;
        this.titles =
            typeof this.titles !== 'undefined' && this.titles.length > 0
                ? this.titles
                : [];
        this.range = this.buildTemplateObjects(this.max);
    }
    // model -> view
    writeValue(value) {
        if (value % 1 !== value) {
            this.value = Math.round(value);
            this.preValue = value;
            this.changeDetection.markForCheck();
            return;
        }
        this.preValue = value;
        this.value = value;
        this.changeDetection.markForCheck();
    }
    enter(value) {
        if (!this.readonly) {
            this.value = value;
            this.changeDetection.markForCheck();
            this.onHover.emit(value);
        }
    }
    reset() {
        this.value = Math.round(this.preValue);
        this.changeDetection.markForCheck();
        this.onLeave.emit(this.value);
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    rate(value) {
        if (!this.readonly && value >= 0 && value <= this.range.length) {
            this.writeValue(value);
            this.onChange(value);
        }
    }
    buildTemplateObjects(max) {
        const result = [];
        for (let i = 0; i < max; i++) {
            result.push({
                index: i,
                title: this.titles[i] || i + 1
            });
        }
        return result;
    }
}
RatingComponent.ɵfac = function RatingComponent_Factory(t) { return new (t || RatingComponent)(ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(RatingConfig)); };
RatingComponent.ɵcmp = ɵɵdefineComponent({ type: RatingComponent, selectors: [["rating"]], hostBindings: function RatingComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("keydown", function RatingComponent_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); });
    } }, inputs: { max: "max", readonly: "readonly", titles: "titles", customTemplate: "customTemplate" }, outputs: { onHover: "onHover", onLeave: "onLeave" }, features: [ɵɵProvidersFeature([RATING_CONTROL_VALUE_ACCESSOR])], decls: 4, vars: 4, consts: [["tabindex", "0", "role", "slider", "aria-valuemin", "0", 3, "mouseleave", "keydown"], ["star", ""], ["ngFor", "", 3, "ngForOf"], [1, "sr-only"], [1, "bs-rating-star", 3, "title", "mouseenter", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "span", 0);
        ɵɵlistener("mouseleave", function RatingComponent_Template_span_mouseleave_0_listener() { return ctx.reset(); })("keydown", function RatingComponent_Template_span_keydown_0_listener($event) { return ctx.onKeydown($event); });
        ɵɵtemplate(1, RatingComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
        ɵɵtemplate(3, RatingComponent_ng_template_3_Template, 4, 11, "ng-template", 2);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-valuemax", ctx.range.length)("aria-valuenow", ctx.value);
        ɵɵadvance(3);
        ɵɵproperty("ngForOf", ctx.range);
    } }, directives: [NgForOf, NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RatingComponent, [{
        type: Component,
        args: [{
                selector: 'rating',
                templateUrl: './rating.component.html',
                providers: [RATING_CONTROL_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: ChangeDetectorRef }, { type: RatingConfig }]; }, { max: [{
            type: Input
        }], readonly: [{
            type: Input
        }], titles: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }], onHover: [{
            type: Output
        }], onLeave: [{
            type: Output
        }], onKeydown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }] }); })();

class RatingModule {
    static forRoot() {
        return {
            ngModule: RatingModule,
            providers: []
        };
    }
}
RatingModule.ɵmod = ɵɵdefineNgModule({ type: RatingModule });
RatingModule.ɵinj = ɵɵdefineInjector({ factory: function RatingModule_Factory(t) { return new (t || RatingModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(RatingModule, { declarations: [RatingComponent], imports: [CommonModule], exports: [RatingComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(RatingModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [RatingComponent],
                exports: [RatingComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { RatingComponent, RatingConfig, RatingModule };
//# sourceMappingURL=ngx-bootstrap-rating.js.map
