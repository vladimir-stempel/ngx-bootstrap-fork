import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { filter } from 'rxjs/operators';
import { BsDatepickerConfig } from './bs-datepicker.config';
import { BsDaterangepickerInlineConfig } from './bs-daterangepicker-inline.config';
import { BsDaterangepickerInlineContainerComponent } from './themes/bs/bs-daterangepicker-inline-container.component';
import * as i0 from "@angular/core";
import * as i1 from "./bs-daterangepicker-inline.config";
import * as i2 from "ngx-bootstrap/component-loader";
export class BsDaterangepickerInlineDirective {
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        this._elementRef = _elementRef;
        /**
         * Emits when daterangepicker value has been changed
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
        this._subs.push(this._datepickerRef.instance.valueChange
            .pipe(filter((range) => range && range[0] && !!range[1]))
            .subscribe((value) => {
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
        if (changes.datesEnabled) {
            this._datepickerRef.instance.datesEnabled = this.datesEnabled;
        }
        if (changes.datesDisabled) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
            this.setConfig();
        }
        if (changes.daysDisabled) {
            this._datepickerRef.instance.daysDisabled = this.daysDisabled;
            this.setConfig();
        }
        if (changes.isDisabled) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
            this.setConfig();
        }
        if (changes.dateCustomClasses) {
            this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
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
            daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
            dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
            datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
            ranges: this.bsConfig && this.bsConfig.ranges,
            maxDateRange: this.bsConfig && this.bsConfig.maxDateRange
        });
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDaterangepickerInlineContainerComponent)
            .to(this._elementRef)
            .show();
    }
    ngOnDestroy() {
        this._datepicker.dispose();
    }
}
BsDaterangepickerInlineDirective.ɵfac = function BsDaterangepickerInlineDirective_Factory(t) { return new (t || BsDaterangepickerInlineDirective)(i0.ɵɵdirectiveInject(i1.BsDaterangepickerInlineConfig), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i2.ComponentLoaderFactory)); };
BsDaterangepickerInlineDirective.ɵdir = i0.ɵɵdefineDirective({ type: BsDaterangepickerInlineDirective, selectors: [["bs-daterangepicker-inline"]], inputs: { bsValue: "bsValue", bsConfig: "bsConfig", isDisabled: "isDisabled", minDate: "minDate", maxDate: "maxDate", dateCustomClasses: "dateCustomClasses", daysDisabled: "daysDisabled", datesDisabled: "datesDisabled", datesEnabled: "datesEnabled" }, outputs: { bsValueChange: "bsValueChange" }, exportAs: ["bsDaterangepickerInline"], features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDaterangepickerInlineDirective, [{
        type: Directive,
        args: [{
                selector: 'bs-daterangepicker-inline',
                exportAs: 'bsDaterangepickerInline'
            }]
    }], function () { return [{ type: i1.BsDaterangepickerInlineConfig }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i2.ComponentLoaderFactory }]; }, { bsValue: [{
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
        }], daysDisabled: [{
            type: Input
        }], datesDisabled: [{
            type: Input
        }], datesEnabled: [{
            type: Input
        }], bsValueChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=bs-daterangepicker-inline.component.js.map