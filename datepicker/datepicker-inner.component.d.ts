import { EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DateFormatter } from './date-formatter';
import * as i0 from "@angular/core";
declare type CompareDatesFn = (date1: Date, date2: Date) => number;
export declare class DatePickerInnerComponent implements OnInit, OnChanges {
    locale: string;
    datepickerMode: string;
    startingDay: number;
    yearRange: number;
    minDate: Date;
    maxDate: Date;
    minMode: string;
    maxMode: string;
    showWeeks: boolean;
    formatDay: string;
    formatMonth: string;
    formatYear: string;
    formatDayHeader: string;
    formatDayTitle: string;
    formatMonthTitle: string;
    onlyCurrentMonth: boolean;
    shortcutPropagation: boolean;
    customClass: {
        date: Date;
        mode: string;
        clazz: string;
    }[];
    monthColLimit: number;
    yearColLimit: number;
    dateDisabled: {
        date: Date;
        mode: string;
    }[];
    dayDisabled: number[];
    initDate: Date;
    selectionDone: EventEmitter<Date>;
    update: EventEmitter<Date>;
    activeDateChange: EventEmitter<Date>;
    stepDay: {};
    stepMonth: {};
    stepYear: {};
    uniqueId: string;
    protected modes: string[];
    protected dateFormatter: DateFormatter;
    protected _activeDate: Date;
    protected selectedDate: Date;
    protected activeDateId: string;
    protected refreshViewHandlerDay: () => void;
    protected compareHandlerDay: CompareDatesFn;
    protected refreshViewHandlerMonth: () => void;
    protected compareHandlerMonth: CompareDatesFn;
    protected refreshViewHandlerYear: () => void;
    protected compareHandlerYear: CompareDatesFn;
    get activeDate(): Date;
    set activeDate(value: Date);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    checkIfActiveDateGotUpdated(activeDate: any): void;
    setCompareHandler(handler: CompareDatesFn, type: string): void;
    compare(date1: Date, date2: Date): number | undefined;
    setRefreshViewHandler(handler: () => void, type: string): void;
    refreshView(): void;
    dateFilter(date: Date, format: string): string;
    isActive(dateObject: any): boolean;
    createDateObject(date: Date, format: string): any;
    split(arr: any[], size: number): any[];
    fixTimeZone(date: Date): Date;
    select(date: Date, isManual?: boolean): void;
    move(direction: number): void;
    toggleMode(_direction: number): void;
    protected getCustomClassForDate(date: Date): string;
    protected compareDateDisabled(date1Disabled: {
        date: Date;
        mode: string;
    }, date2: Date): number;
    protected isDisabled(date: Date): boolean;
    static ɵfac: i0.ɵɵFactoryDef<DatePickerInnerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DatePickerInnerComponent, "datepicker-inner", never, { "locale": "locale"; "datepickerMode": "datepickerMode"; "startingDay": "startingDay"; "yearRange": "yearRange"; "minDate": "minDate"; "maxDate": "maxDate"; "minMode": "minMode"; "maxMode": "maxMode"; "showWeeks": "showWeeks"; "formatDay": "formatDay"; "formatMonth": "formatMonth"; "formatYear": "formatYear"; "formatDayHeader": "formatDayHeader"; "formatDayTitle": "formatDayTitle"; "formatMonthTitle": "formatMonthTitle"; "onlyCurrentMonth": "onlyCurrentMonth"; "shortcutPropagation": "shortcutPropagation"; "customClass": "customClass"; "monthColLimit": "monthColLimit"; "yearColLimit": "yearColLimit"; "dateDisabled": "dateDisabled"; "dayDisabled": "dayDisabled"; "initDate": "initDate"; "activeDate": "activeDate"; }, { "selectionDone": "selectionDone"; "update": "update"; "activeDateChange": "activeDateChange"; }, never, ["*"]>;
}
export {};
//# sourceMappingURL=datepicker-inner.component.d.ts.map