import { EventEmitter } from '@angular/core';
import { BsComponentRef } from 'ngx-bootstrap/component-loader';
import * as i0 from "@angular/core";
export declare class BsDropdownState {
    direction: 'down' | 'up';
    autoClose: boolean;
    insideClick: boolean;
    isAnimated: boolean;
    isOpenChange: EventEmitter<boolean>;
    isDisabledChange: EventEmitter<boolean>;
    toggleClick: EventEmitter<boolean>;
    /**
     * Content to be displayed as popover.
     */
    dropdownMenu: Promise<BsComponentRef<unknown>>;
    resolveDropdownMenu: (componentRef: BsComponentRef<unknown>) => void;
    constructor();
    static ɵfac: i0.ɵɵFactoryDef<BsDropdownState, never>;
    static ɵprov: i0.ɵɵInjectableDef<BsDropdownState>;
}
//# sourceMappingURL=bs-dropdown.state.d.ts.map