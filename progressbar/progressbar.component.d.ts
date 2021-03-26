import { ProgressbarConfig } from './progressbar.config';
import { ProgressbarType } from './progressbar-type.interface';
import { BarComponent } from './bar.component';
import * as i0 from "@angular/core";
export declare class ProgressbarComponent {
    /** if `true` changing value of progress bar will be animated */
    set animate(value: boolean);
    /** If `true`, striped classes are applied */
    set striped(value: boolean);
    /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
    type: ProgressbarType;
    /** current value of progress bar. Could be a number or array of objects
     * like {"value":15,"type":"info","label":"15 %"}
     */
    set value(value: number | Record<string, number | string>);
    isStacked: boolean;
    _striped: boolean;
    _animate: boolean;
    _max: number;
    _value: number | Record<string, number | string>;
    get isBs3(): boolean;
    /** maximum total value of progress element */
    get max(): number;
    set max(v: number);
    addClass: boolean;
    bars: BarComponent[];
    constructor(config: ProgressbarConfig);
    addBar(bar: BarComponent): void;
    removeBar(bar: BarComponent): void;
    static ɵfac: i0.ɵɵFactoryDef<ProgressbarComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<ProgressbarComponent, "progressbar", never, { "animate": "animate"; "striped": "striped"; "type": "type"; "value": "value"; "max": "max"; }, {}, never, ["*"]>;
}
//# sourceMappingURL=progressbar.component.d.ts.map