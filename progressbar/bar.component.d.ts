import { OnDestroy, OnInit, ElementRef, Renderer2, SimpleChanges, OnChanges } from '@angular/core';
import { ProgressbarComponent } from './progressbar.component';
import * as i0 from "@angular/core";
export declare class BarComponent implements OnInit, OnDestroy, OnChanges {
    private el;
    private renderer;
    max: number;
    /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
    type: string;
    /** current value of progress bar */
    value: number;
    get setBarWidth(): number;
    addClass: boolean;
    get isBs3(): boolean;
    striped: boolean;
    animate: boolean;
    percent: number;
    progress: ProgressbarComponent;
    private _prevType;
    constructor(el: ElementRef, progress: ProgressbarComponent, renderer: Renderer2);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    recalculatePercentage(): void;
    private applyTypeClasses;
    static ɵfac: i0.ɵɵFactoryDef<BarComponent, [null, { host: true; }, null]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<BarComponent, "bar", never, { "max": "max"; "type": "type"; "value": "value"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=bar.component.d.ts.map