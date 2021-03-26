import { BsCustomDates } from '../themes/bs/bs-custom-dates-view.component';
import { BsDatepickerEffects } from '../reducer/bs-datepicker.effects';
import { Observable } from 'rxjs';
import { BsDatepickerViewMode, BsNavigationEvent, CalendarCellViewModel, CellHoverEvent, DatepickerRenderOptions, DatepickerDateCustomClasses, DatepickerDateTooltipText, DaysCalendarViewModel, DayViewModel, MonthsCalendarViewModel, WeekViewModel, YearsCalendarViewModel } from '../models';
export declare abstract class BsDatepickerAbstractComponent {
    containerClass: string;
    isOtherMonthsActive: boolean;
    showTodayBtn: boolean;
    todayBtnLbl: string;
    todayPos: string;
    showClearBtn: boolean;
    clearBtnLbl: string;
    clearPos: string;
    _effects: BsDatepickerEffects;
    customRanges: BsCustomDates[];
    customRangeBtnLbl: string;
    chosenRange: Date[];
    set minDate(value: Date);
    set maxDate(value: Date);
    set daysDisabled(value: number[]);
    set datesDisabled(value: Date[]);
    set datesEnabled(value: Date[]);
    set isDisabled(value: boolean);
    set dateCustomClasses(value: DatepickerDateCustomClasses[]);
    set dateTooltipTexts(value: DatepickerDateTooltipText[]);
    viewMode: Observable<BsDatepickerViewMode>;
    daysCalendar: Observable<DaysCalendarViewModel[]>;
    monthsCalendar: Observable<MonthsCalendarViewModel[]>;
    yearsCalendar: Observable<YearsCalendarViewModel[]>;
    options: Observable<DatepickerRenderOptions>;
    setViewMode(event: BsDatepickerViewMode): void;
    navigateTo(event: BsNavigationEvent): void;
    dayHoverHandler(event: CellHoverEvent): void;
    weekHoverHandler(event: WeekViewModel): void;
    monthHoverHandler(event: CellHoverEvent): void;
    yearHoverHandler(event: CellHoverEvent): void;
    daySelectHandler(day: DayViewModel): void;
    monthSelectHandler(event: CalendarCellViewModel): void;
    yearSelectHandler(event: CalendarCellViewModel): void;
    setRangeOnCalendar(dates: BsCustomDates): void;
    setToday(): void;
    clearDate(): void;
    _stopPropagation(event: any): void;
}
//# sourceMappingURL=bs-datepicker-container.d.ts.map