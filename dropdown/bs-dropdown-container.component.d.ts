import { ChangeDetectorRef, ElementRef, OnDestroy, Renderer2 } from '@angular/core';
import { BsDropdownState } from './bs-dropdown.state';
import { AnimationBuilder } from '@angular/animations';
import * as i0 from "@angular/core";
export declare class BsDropdownContainerComponent implements OnDestroy {
    private _state;
    private cd;
    private _renderer;
    private _element;
    isOpen: boolean;
    private _factoryDropDownAnimation;
    get direction(): 'down' | 'up';
    private _subscription;
    constructor(_state: BsDropdownState, cd: ChangeDetectorRef, _renderer: Renderer2, _element: ElementRef, _builder: AnimationBuilder);
    /** @internal */
    _contains(el: Element): boolean;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<BsDropdownContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<BsDropdownContainerComponent, "bs-dropdown-container", never, {}, {}, never, ["*"]>;
}
//# sourceMappingURL=bs-dropdown-container.component.d.ts.map