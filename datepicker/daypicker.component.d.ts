import { OnInit } from '@angular/core';
import { DatePickerInnerComponent } from './datepicker-inner.component';
import * as i0 from "@angular/core";
export declare class DayPickerComponent implements OnInit {
    labels: any[];
    title: string;
    rows: any[];
    weekNumbers: number[];
    datePicker: DatePickerInnerComponent;
    constructor(datePicker: DatePickerInnerComponent);
    get isBs4(): boolean;
    ngOnInit(): void;
    protected getDates(startDate: Date, n: number): Date[];
    protected getISO8601WeekNumber(date: Date): number;
    static ɵfac: i0.ɵɵFactoryDef<DayPickerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DayPickerComponent, "daypicker", never, {}, {}, never, never>;
}
//# sourceMappingURL=daypicker.component.d.ts.map