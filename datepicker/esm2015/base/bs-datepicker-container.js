export class BsDatepickerAbstractComponent {
    constructor() {
        this.customRanges = [];
        this.chosenRange = [];
    }
    set minDate(value) {
        this._effects.setMinDate(value);
    }
    set maxDate(value) {
        this._effects.setMaxDate(value);
    }
    set daysDisabled(value) {
        this._effects.setDaysDisabled(value);
    }
    set datesDisabled(value) {
        this._effects.setDatesDisabled(value);
    }
    set datesEnabled(value) {
        this._effects.setDatesEnabled(value);
    }
    set isDisabled(value) {
        this._effects.setDisabled(value);
    }
    set dateCustomClasses(value) {
        this._effects.setDateCustomClasses(value);
    }
    set dateTooltipTexts(value) {
        this._effects.setDateTooltipTexts(value);
    }
    // todo: valorkin fix
    // eslint-disable-next-line
    setViewMode(event) { }
    // eslint-disable-next-line
    navigateTo(event) { }
    // eslint-disable-next-line
    dayHoverHandler(event) { }
    // eslint-disable-next-line
    weekHoverHandler(event) { }
    // eslint-disable-next-line
    monthHoverHandler(event) { }
    // eslint-disable-next-line
    yearHoverHandler(event) { }
    // eslint-disable-next-line
    daySelectHandler(day) { }
    // eslint-disable-next-line
    monthSelectHandler(event) { }
    // eslint-disable-next-line
    yearSelectHandler(event) { }
    // eslint-disable-next-line
    setRangeOnCalendar(dates) { }
    // eslint-disable-next-line
    setToday() { }
    // eslint-disable-next-line
    clearDate() { }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _stopPropagation(event) {
        event.stopPropagation();
    }
}
//# sourceMappingURL=bs-datepicker-container.js.map