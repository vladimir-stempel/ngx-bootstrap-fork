import { ChangeDetectorRef, Provider, QueryList } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ButtonRadioDirective } from './button-radio.directive';
import * as i0 from "@angular/core";
export declare const RADIO_CONTROL_VALUE_ACCESSOR: Provider;
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
export declare class ButtonRadioGroupDirective implements ControlValueAccessor {
    private cdr;
    onChange: Function;
    onTouched: Function;
    readonly role: string;
    radioButtons: QueryList<ButtonRadioDirective>;
    get value(): string | null;
    set value(value: string | null);
    private _value;
    private _disabled;
    get tabindex(): null | number;
    constructor(cdr: ChangeDetectorRef);
    writeValue(value: string | null): void;
    registerOnChange(fn: () => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(disabled: boolean): void;
    onFocus(): void;
    onBlur(): void;
    selectNext(event: KeyboardEvent): void;
    selectPrevious(event: KeyboardEvent): void;
    get disabled(): boolean;
    private selectInDirection;
    private getActiveOrFocusedRadio;
    static ɵfac: i0.ɵɵFactoryDef<ButtonRadioGroupDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<ButtonRadioGroupDirective, "[btnRadioGroup]", never, {}, {}, ["radioButtons"]>;
}
//# sourceMappingURL=button-radio-group.directive.d.ts.map