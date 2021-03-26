import { EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export interface BsCustomDates {
    label: string;
    value: Date | Date[];
}
export declare class BsCustomDatesViewComponent {
    ranges: BsCustomDates[];
    selectedRange: Date[];
    customRangeLabel: string;
    onSelect: EventEmitter<BsCustomDates>;
    customRange: any;
    selectFromRanges(range: BsCustomDates): void;
    checkRange(): boolean;
    static ɵfac: i0.ɵɵFactoryDef<BsCustomDatesViewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<BsCustomDatesViewComponent, "bs-custom-date-view", never, { "ranges": "ranges"; "selectedRange": "selectedRange"; "customRangeLabel": "customRangeLabel"; }, { "onSelect": "onSelect"; }, never, never>;
}
//# sourceMappingURL=bs-custom-dates-view.component.d.ts.map