import { ChangeDetectorRef, Directive, ElementRef, forwardRef, Host, Renderer2 } from '@angular/core';
import { NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { formatDate, getLocale, isAfter, isBefore, isDate, isDateValid, parseDate, utcAsLocal } from 'ngx-bootstrap/chronos';
import { BsDatepickerDirective } from './bs-datepicker.component';
import { BsLocaleService } from './bs-locale.service';
import { Subscription } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "./bs-datepicker.component";
import * as i2 from "./bs-locale.service";
const BS_DATEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BsDatepickerInputDirective),
    multi: true
};
const BS_DATEPICKER_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => BsDatepickerInputDirective),
    multi: true
};
export class BsDatepickerInputDirective {
    constructor(_picker, _localeService, _renderer, _elRef, changeDetection) {
        this._picker = _picker;
        this._localeService = _localeService;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this.changeDetection = changeDetection;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        this._validatorChange = Function.prototype;
        this._subs = new Subscription();
    }
    ngOnInit() {
        // update input value on datepicker value update
        this._subs.add(this._picker.bsValueChange.subscribe((value) => {
            this._setInputValue(value);
            if (this._value !== value) {
                this._value = value;
                this._onChange(value);
                this._onTouched();
            }
            this.changeDetection.markForCheck();
        }));
        // update input value on locale change
        this._subs.add(this._localeService.localeChange.subscribe(() => {
            this._setInputValue(this._value);
        }));
        this._subs.add(this._picker.dateInputFormat$.pipe(distinctUntilChanged()).subscribe(() => {
            this._setInputValue(this._value);
        }));
    }
    ngOnDestroy() {
        this._subs.unsubscribe();
    }
    onKeydownEvent(event) {
        if (event.keyCode === 13 || event.code === 'Enter') {
            this.hide();
        }
    }
    _setInputValue(value) {
        const initialDate = !value ? ''
            : formatDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
        this._renderer.setProperty(this._elRef.nativeElement, 'value', initialDate);
    }
    onChange(event) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.writeValue(event.target.value);
        this._onChange(this._value);
        if (this._picker._config.returnFocusToInput) {
            this._renderer.selectRootElement(this._elRef.nativeElement).focus();
        }
        this._onTouched();
    }
    validate(c) {
        const _value = c.value;
        if (_value === null || _value === undefined || _value === '') {
            return null;
        }
        if (isDate(_value)) {
            const _isDateValid = isDateValid(_value);
            if (!_isDateValid) {
                return { bsDate: { invalid: _value } };
            }
            if (this._picker && this._picker.minDate && isBefore(_value, this._picker.minDate, 'date')) {
                this.writeValue(this._picker.minDate);
                return { bsDate: { minDate: this._picker.minDate } };
            }
            if (this._picker && this._picker.maxDate && isAfter(_value, this._picker.maxDate, 'date')) {
                this.writeValue(this._picker.maxDate);
                return { bsDate: { maxDate: this._picker.maxDate } };
            }
        }
    }
    registerOnValidatorChange(fn) {
        this._validatorChange = fn;
    }
    writeValue(value) {
        if (!value) {
            this._value = null;
        }
        else {
            const _localeKey = this._localeService.currentLocale;
            const _locale = getLocale(_localeKey);
            if (!_locale) {
                throw new Error(`Locale "${_localeKey}" is not defined, please add it with "defineLocale(...)"`);
            }
            this._value = parseDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
            if (this._picker._config.useUtc) {
                this._value = utcAsLocal(this._value);
            }
        }
        this._picker.bsValue = this._value;
    }
    setDisabledState(isDisabled) {
        this._picker.isDisabled = isDisabled;
        if (isDisabled) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
            return;
        }
        this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    onBlur() {
        this._onTouched();
    }
    hide() {
        this._picker.hide();
        this._renderer.selectRootElement(this._elRef.nativeElement).blur();
        if (this._picker._config.returnFocusToInput) {
            this._renderer.selectRootElement(this._elRef.nativeElement).focus();
        }
    }
}
BsDatepickerInputDirective.ɵfac = function BsDatepickerInputDirective_Factory(t) { return new (t || BsDatepickerInputDirective)(i0.ɵɵdirectiveInject(i1.BsDatepickerDirective, 1), i0.ɵɵdirectiveInject(i2.BsLocaleService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
BsDatepickerInputDirective.ɵdir = i0.ɵɵdefineDirective({ type: BsDatepickerInputDirective, selectors: [["input", "bsDatepicker", ""]], hostBindings: function BsDatepickerInputDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("change", function BsDatepickerInputDirective_change_HostBindingHandler($event) { return ctx.onChange($event); })("keyup.esc", function BsDatepickerInputDirective_keyup_esc_HostBindingHandler() { return ctx.hide(); })("keydown", function BsDatepickerInputDirective_keydown_HostBindingHandler($event) { return ctx.onKeydownEvent($event); })("blur", function BsDatepickerInputDirective_blur_HostBindingHandler() { return ctx.onBlur(); });
    } }, features: [i0.ɵɵProvidersFeature([BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR])] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerInputDirective, [{
        type: Directive,
        args: [{
                selector: `input[bsDatepicker]`,
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    '(change)': 'onChange($event)',
                    '(keyup.esc)': 'hide()',
                    '(keydown)': 'onKeydownEvent($event)',
                    '(blur)': 'onBlur()'
                },
                providers: [BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR]
            }]
    }], function () { return [{ type: i1.BsDatepickerDirective, decorators: [{
                type: Host
            }] }, { type: i2.BsLocaleService }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, null); })();
//# sourceMappingURL=bs-datepicker-input.directive.js.map