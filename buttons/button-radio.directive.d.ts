import { ChangeDetectorRef, ElementRef, OnInit, Provider, Renderer2 } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ButtonRadioGroupDirective } from './button-radio-group.directive';
import * as i0 from "@angular/core";
export declare const RADIO_CONTROL_VALUE_ACCESSOR: Provider;
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
export declare class ButtonRadioDirective implements ControlValueAccessor, OnInit {
    private el;
    private cdr;
    private renderer;
    private group;
    onChange: Function;
    onTouched: Function;
    /** Radio button value, will be set to `ngModel` */
    btnRadio: string;
    /** If `true` — radio button can be unchecked */
    uncheckable: boolean;
    /** Current value of radio component or group */
    get value(): null | string;
    set value(value: null | string);
    /** If `true` — radio button is disabled */
    get disabled(): boolean;
    set disabled(disabled: boolean);
    get controlOrGroupDisabled(): boolean;
    get hasDisabledClass(): boolean;
    get isActive(): boolean;
    readonly role: string;
    get tabindex(): undefined | number;
    get hasFocus(): boolean;
    private _value;
    private _disabled;
    private _hasFocus;
    constructor(el: ElementRef, cdr: ChangeDetectorRef, renderer: Renderer2, group: ButtonRadioGroupDirective);
    toggleIfAllowed(): void;
    onSpacePressed(event: KeyboardEvent): void;
    focus(): void;
    onFocus(): void;
    onBlur(): void;
    canToggle(): boolean;
    ngOnInit(): void;
    _onChange(value: string): void;
    writeValue(value: string): void;
    registerOnChange(fn: () => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(disabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDef<ButtonRadioDirective, [null, null, null, { optional: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ButtonRadioDirective, "[btnRadio]", never, { "btnRadio": "btnRadio"; "uncheckable": "uncheckable"; "value": "value"; "disabled": "disabled"; }, {}, never>;
}
//# sourceMappingURL=button-radio.directive.d.ts.map