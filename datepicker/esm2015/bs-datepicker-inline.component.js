import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { BsDatepickerConfig } from './bs-datepicker.config';
import { BsDatepickerInlineConfig } from './bs-datepicker-inline.config';
import { BsDatepickerInlineContainerComponent } from './themes/bs/bs-datepicker-inline-container.component';
import * as i0 from "@angular/core";
import * as i1 from "./bs-datepicker-inline.config";
import * as i2 from "ngx-bootstrap/component-loader";
export class BsDatepickerInlineDirective {
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        this._elementRef = _elementRef;
        /**
         * Emits when datepicker value has been changed
         */
        this.bsValueChange = new EventEmitter();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
    }
    /**
     * Initial value of datepicker
     */
    set bsValue(value) {
        if (this._bsValue === value) {
            return;
        }
        if (!this._bsValue && value) {
            const now = new Date();
            value.setMilliseconds(now.getMilliseconds());
            value.setSeconds(now.getSeconds());
            value.setMinutes(now.getMinutes());
            value.setHours(now.getHours());
        }
        this._bsValue = value;
        this.bsValueChange.emit(value);
    }
    ngOnInit() {
        this.setConfig();
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe((value) => {
            this._datepickerRef.instance.value = value;
        }));
        // if date changes from picker (view -> model)
        this._subs.push(this._datepickerRef.instance.valueChange.subscribe((value) => {
            this.bsValue = value;
        }));
    }
    ngOnChanges(changes) {
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes.minDate) {
            this._datepickerRef.instance.minDate = this.minDate;
            this.setConfig();
        }
        if (changes.maxDate) {
            this._datepickerRef.instance.maxDate = this.maxDate;
            this.setConfig();
        }
        if (changes.datesDisabled) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
            this.setConfig();
        }
        if (changes.datesEnabled) {
            this._datepickerRef.instance.datesEnabled = this.datesEnabled;
            this._datepickerRef.instance.value = this._bsValue;
        }
        if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
            this.setConfig();
        }
        if (changes.dateCustomClasses) {
            this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
            this.setConfig();
        }
        if (changes.dateTooltipTexts) {
            this._datepickerRef.instance.dateTooltipTexts = this.dateTooltipTexts;
            this.setConfig();
        }
    }
    /**
     * Set config for datepicker
     */
    setConfig() {
        if (this._datepicker) {
            this._datepicker.hide();
        }
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: this._bsValue,
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
            dateTooltipTexts: this.dateTooltipTexts || this.bsConfig && this.bsConfig.dateTooltipTexts,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
            datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled
        });
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDatepickerInlineContainerComponent)
            .to(this._elementRef)
            .show();
    }
    ngOnDestroy() {
        this._datepicker.dispose();
    }
}
BsDatepickerInlineDirective.ɵfac = function BsDatepickerInlineDirective_Factory(t) { return new (t || BsDatepickerInlineDirective)(i0.ɵɵdirectiveInject(i1.BsDatepickerInlineConfig), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i2.ComponentLoaderFactory)); };
BsDatepickerInlineDirective.ɵdir = i0.ɵɵdefineDirective({ type: BsDatepickerInlineDirective, selectors: [["bs-datepicker-inline"]], inputs: { bsValue: "bsValue", bsConfig: "bsConfig", isDisabled: "isDisabled", minDate: "minDate", maxDate: "maxDate", dateCustomClasses: "dateCustomClasses", dateTooltipTexts: "dateTooltipTexts", datesEnabled: "datesEnabled", datesDisabled: "datesDisabled" }, outputs: { bsValueChange: "bsValueChange" }, exportAs: ["bsDatepickerInline"], features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerInlineDirective, [{
        type: Directive,
        args: [{
                selector: 'bs-datepicker-inline',
                exportAs: 'bsDatepickerInline'
            }]
    }], function () { return [{ type: i1.BsDatepickerInlineConfig }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i2.ComponentLoaderFactory }]; }, { bsValue: [{
            type: Input
        }], bsConfig: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], dateCustomClasses: [{
            type: Input
        }], dateTooltipTexts: [{
            type: Input
        }], datesEnabled: [{
            type: Input
        }], datesDisabled: [{
            type: Input
        }], bsValueChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=bs-datepicker-inline.component.js.map