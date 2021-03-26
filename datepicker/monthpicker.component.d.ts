import { OnInit } from '@angular/core';
import { DatePickerInnerComponent } from './datepicker-inner.component';
import * as i0 from "@angular/core";
export declare class MonthPickerComponent implements OnInit {
    title: string;
    rows: any[];
    datePicker: DatePickerInnerComponent;
    maxMode: string;
    constructor(datePicker: DatePickerInnerComponent);
    get isBs4(): boolean;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<MonthPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MonthPickerComponent, "monthpicker", never, {}, {}, never, never>;
}
//# sourceMappingURL=monthpicker.component.d.ts.map