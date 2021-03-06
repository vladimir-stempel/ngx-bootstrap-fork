import { ElementRef, EventEmitter, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { Subscription } from 'rxjs';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { BsDatepickerAbstractComponent } from '../../base/bs-datepicker-container';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
import { CalendarCellViewModel, DayViewModel } from '../../models';
import { BsDatepickerActions } from '../../reducer/bs-datepicker.actions';
import { BsDatepickerEffects } from '../../reducer/bs-datepicker.effects';
import { BsDatepickerStore } from '../../reducer/bs-datepicker.store';
import * as i0 from "@angular/core";
export declare class BsDatepickerContainerComponent extends BsDatepickerAbstractComponent implements OnInit, OnDestroy {
    private _config;
    private _store;
    private _element;
    private _actions;
    private _positionService;
    set value(value: Date);
    valueChange: EventEmitter<Date>;
    animationState: string;
    _subs: Subscription[];
    constructor(_renderer: Renderer2, _config: BsDatepickerConfig, _store: BsDatepickerStore, _element: ElementRef, _actions: BsDatepickerActions, _effects: BsDatepickerEffects, _positionService: PositioningService);
    ngOnInit(): void;
    get isTopPosition(): boolean;
    positionServiceEnable(): void;
    daySelectHandler(day: DayViewModel): void;
    monthSelectHandler(day: CalendarCellViewModel): void;
    yearSelectHandler(day: CalendarCellViewModel): void;
    setToday(): void;
    clearDate(): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDef<BsDatepickerContainerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<BsDatepickerContainerComponent, "bs-datepicker-container", never, {}, {}, never, never>;
}
//# sourceMappingURL=bs-datepicker-container.component.d.ts.map