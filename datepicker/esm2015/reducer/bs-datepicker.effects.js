import { Injectable } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { BsDatepickerActions } from './bs-datepicker.actions';
import { BsLocaleService } from '../bs-locale.service';
import * as i0 from "@angular/core";
import * as i1 from "./bs-datepicker.actions";
import * as i2 from "../bs-locale.service";
export class BsDatepickerEffects {
    constructor(_actions, _localeService) {
        this._actions = _actions;
        this._localeService = _localeService;
        this._subs = [];
    }
    init(_bsDatepickerStore) {
        this._store = _bsDatepickerStore;
        return this;
    }
    /** setters */
    setValue(value) {
        this._store.dispatch(this._actions.select(value));
    }
    setRangeValue(value) {
        this._store.dispatch(this._actions.selectRange(value));
    }
    setMinDate(value) {
        this._store.dispatch(this._actions.minDate(value));
        return this;
    }
    setMaxDate(value) {
        this._store.dispatch(this._actions.maxDate(value));
        return this;
    }
    setDaysDisabled(value) {
        this._store.dispatch(this._actions.daysDisabled(value));
        return this;
    }
    setDatesDisabled(value) {
        this._store.dispatch(this._actions.datesDisabled(value));
        return this;
    }
    setDatesEnabled(value) {
        this._store.dispatch(this._actions.datesEnabled(value));
        return this;
    }
    setDisabled(value) {
        this._store.dispatch(this._actions.isDisabled(value));
        return this;
    }
    setDateCustomClasses(value) {
        this._store.dispatch(this._actions.setDateCustomClasses(value));
        return this;
    }
    setDateTooltipTexts(value) {
        this._store.dispatch(this._actions.setDateTooltipTexts(value));
        return this;
    }
    /* Set rendering options */
    setOptions(_config) {
        const _options = Object.assign({ locale: this._localeService.currentLocale }, _config);
        this._store.dispatch(this._actions.setOptions(_options));
        return this;
    }
    /** view to mode bindings */
    setBindings(container) {
        container.daysCalendar = this._store
            .select(state => state.flaggedMonths)
            .pipe(filter(months => !!months));
        // month calendar
        container.monthsCalendar = this._store
            .select(state => state.flaggedMonthsCalendar)
            .pipe(filter(months => !!months));
        // year calendar
        container.yearsCalendar = this._store
            .select(state => state.yearsCalendarFlagged)
            .pipe(filter(years => !!years));
        container.viewMode = this._store.select(state => state.view.mode);
        container.options = this._store
            .select(state => state.showWeekNumbers)
            .pipe(map(showWeekNumbers => ({ showWeekNumbers })));
        return this;
    }
    /** event handlers */
    setEventHandlers(container) {
        container.setViewMode = (event) => {
            this._store.dispatch(this._actions.changeViewMode(event));
        };
        container.navigateTo = (event) => {
            this._store.dispatch(this._actions.navigateStep(event.step));
        };
        container.dayHoverHandler = (event) => {
            const _cell = event.cell;
            if (_cell.isOtherMonth || _cell.isDisabled) {
                return;
            }
            this._store.dispatch(this._actions.hoverDay(event));
            _cell.isHovered = event.isHovered;
        };
        container.monthHoverHandler = (event) => {
            event.cell.isHovered = event.isHovered;
        };
        container.yearHoverHandler = (event) => {
            event.cell.isHovered = event.isHovered;
        };
        return this;
    }
    registerDatepickerSideEffects() {
        this._subs.push(this._store.select(state => state.view).subscribe(() => {
            this._store.dispatch(this._actions.calculate());
        }));
        // format calendar values on month model change
        this._subs.push(this._store
            .select(state => state.monthsModel)
            .pipe(filter(monthModel => !!monthModel))
            .subscribe(() => this._store.dispatch(this._actions.format())));
        // flag day values
        this._subs.push(this._store
            .select(state => state.formattedMonths)
            .pipe(filter(month => !!month))
            .subscribe(() => this._store.dispatch(this._actions.flag())));
        // flag day values
        this._subs.push(this._store
            .select(state => state.selectedDate)
            .pipe(filter(selectedDate => !!selectedDate))
            .subscribe(() => this._store.dispatch(this._actions.flag())));
        // flag for date range picker
        this._subs.push(this._store
            .select(state => state.selectedRange)
            .pipe(filter(selectedRange => !!selectedRange))
            .subscribe(() => this._store.dispatch(this._actions.flag())));
        // monthsCalendar
        this._subs.push(this._store
            .select(state => state.monthsCalendar)
            .subscribe(() => this._store.dispatch(this._actions.flag())));
        // years calendar
        this._subs.push(this._store
            .select(state => state.yearsCalendarModel)
            .pipe(filter(state => !!state))
            .subscribe(() => this._store.dispatch(this._actions.flag())));
        // on hover
        this._subs.push(this._store
            .select(state => state.hoveredDate)
            .pipe(filter(hoveredDate => !!hoveredDate))
            .subscribe(() => this._store.dispatch(this._actions.flag())));
        // date custom classes
        this._subs.push(this._store
            .select(state => state.dateCustomClasses)
            .pipe(filter(dateCustomClasses => !!dateCustomClasses))
            .subscribe(() => this._store.dispatch(this._actions.flag())));
        // date tooltip texts
        this._subs.push(this._store
            .select(state => state.dateTooltipTexts)
            .pipe(filter(dateTooltipTexts => !!dateTooltipTexts))
            .subscribe(() => this._store.dispatch(this._actions.flag())));
        // on locale change
        this._subs.push(this._localeService.localeChange
            .subscribe(locale => this._store.dispatch(this._actions.setLocale(locale))));
        return this;
    }
    destroy() {
        for (const sub of this._subs) {
            sub.unsubscribe();
        }
    }
}
BsDatepickerEffects.ɵfac = function BsDatepickerEffects_Factory(t) { return new (t || BsDatepickerEffects)(i0.ɵɵinject(i1.BsDatepickerActions), i0.ɵɵinject(i2.BsLocaleService)); };
BsDatepickerEffects.ɵprov = i0.ɵɵdefineInjectable({ token: BsDatepickerEffects, factory: BsDatepickerEffects.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerEffects, [{
        type: Injectable
    }], function () { return [{ type: i1.BsDatepickerActions }, { type: i2.BsLocaleService }]; }, null); })();
//# sourceMappingURL=bs-datepicker.effects.js.map