import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerInputDirective } from './bs-datepicker-input.directive';
import { BsDatepickerDirective } from './bs-datepicker.component';
import { BsDaterangepickerInputDirective } from './bs-daterangepicker-input.directive';
import { BsDaterangepickerDirective } from './bs-daterangepicker.component';
import { BsDatepickerInlineDirective } from './bs-datepicker-inline.component';
import { BsLocaleService } from './bs-locale.service';
import { BsDatepickerActions } from './reducer/bs-datepicker.actions';
import { BsDatepickerEffects } from './reducer/bs-datepicker.effects';
import { BsDatepickerStore } from './reducer/bs-datepicker.store';
import { BsDatepickerContainerComponent } from './themes/bs/bs-datepicker-container.component';
import { BsDaterangepickerContainerComponent } from './themes/bs/bs-daterangepicker-container.component';
import { BsDatepickerInlineContainerComponent } from './themes/bs/bs-datepicker-inline-container.component';
import { BsDaterangepickerInlineContainerComponent } from './themes/bs/bs-daterangepicker-inline-container.component';
import { BsDaterangepickerInlineDirective } from './bs-daterangepicker-inline.component';
import { BsCalendarLayoutComponent } from './themes/bs/bs-calendar-layout.component';
import { BsCurrentDateViewComponent } from './themes/bs/bs-current-date-view.component';
import { BsCustomDatesViewComponent } from './themes/bs/bs-custom-dates-view.component';
import { BsDatepickerDayDecoratorComponent } from './themes/bs/bs-datepicker-day-decorator.directive';
import { BsDatepickerNavigationViewComponent } from './themes/bs/bs-datepicker-navigation-view.component';
import { BsDaysCalendarViewComponent } from './themes/bs/bs-days-calendar-view.component';
import { BsMonthCalendarViewComponent } from './themes/bs/bs-months-calendar-view.component';
import { BsTimepickerViewComponent } from './themes/bs/bs-timepicker-view.component';
import { BsYearsCalendarViewComponent } from './themes/bs/bs-years-calendar-view.component';
import * as i0 from "@angular/core";
export class BsDatepickerModule {
    static forRoot() {
        return {
            ngModule: BsDatepickerModule,
            providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDatepickerStore,
                BsDatepickerActions,
                BsDatepickerEffects,
                BsLocaleService
            ]
        };
    }
}
BsDatepickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: BsDatepickerModule });
BsDatepickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function BsDatepickerModule_Factory(t) { return new (t || BsDatepickerModule)(); }, imports: [[CommonModule, TooltipModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BsDatepickerModule, { declarations: [BsCalendarLayoutComponent,
        BsCurrentDateViewComponent,
        BsCustomDatesViewComponent,
        BsDatepickerDayDecoratorComponent,
        BsDatepickerNavigationViewComponent,
        BsDaysCalendarViewComponent,
        BsMonthCalendarViewComponent,
        BsTimepickerViewComponent,
        BsYearsCalendarViewComponent,
        BsDatepickerContainerComponent,
        BsDatepickerDirective,
        BsDatepickerInlineContainerComponent,
        BsDatepickerInlineDirective,
        BsDatepickerInputDirective,
        BsDaterangepickerContainerComponent,
        BsDaterangepickerDirective,
        BsDaterangepickerInlineContainerComponent,
        BsDaterangepickerInlineDirective,
        BsDaterangepickerInputDirective], imports: [CommonModule, TooltipModule], exports: [BsDatepickerContainerComponent,
        BsDatepickerDirective,
        BsDatepickerInlineContainerComponent,
        BsDatepickerInlineDirective,
        BsDatepickerInputDirective,
        BsDaterangepickerContainerComponent,
        BsDaterangepickerDirective,
        BsDaterangepickerInlineContainerComponent,
        BsDaterangepickerInlineDirective,
        BsDaterangepickerInputDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, TooltipModule],
                declarations: [
                    BsCalendarLayoutComponent,
                    BsCurrentDateViewComponent,
                    BsCustomDatesViewComponent,
                    BsDatepickerDayDecoratorComponent,
                    BsDatepickerNavigationViewComponent,
                    BsDaysCalendarViewComponent,
                    BsMonthCalendarViewComponent,
                    BsTimepickerViewComponent,
                    BsYearsCalendarViewComponent,
                    BsDatepickerContainerComponent,
                    BsDatepickerDirective,
                    BsDatepickerInlineContainerComponent,
                    BsDatepickerInlineDirective,
                    BsDatepickerInputDirective,
                    BsDaterangepickerContainerComponent,
                    BsDaterangepickerDirective,
                    BsDaterangepickerInlineContainerComponent,
                    BsDaterangepickerInlineDirective,
                    BsDaterangepickerInputDirective
                ],
                entryComponents: [
                    BsDatepickerContainerComponent,
                    BsDaterangepickerContainerComponent,
                    BsDatepickerInlineContainerComponent,
                    BsDaterangepickerInlineContainerComponent
                ],
                exports: [
                    BsDatepickerContainerComponent,
                    BsDatepickerDirective,
                    BsDatepickerInlineContainerComponent,
                    BsDatepickerInlineDirective,
                    BsDatepickerInputDirective,
                    BsDaterangepickerContainerComponent,
                    BsDaterangepickerDirective,
                    BsDaterangepickerInlineContainerComponent,
                    BsDaterangepickerInlineDirective,
                    BsDaterangepickerInputDirective
                ]
            }]
    }], null, null); })();
//# sourceMappingURL=bs-datepicker.module.js.map