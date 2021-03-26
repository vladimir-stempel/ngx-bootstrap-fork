import { __decorate, __metadata } from 'tslib';
import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵgetCurrentView, ɵɵelementStart, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵtext, ɵɵelementEnd, ɵɵtemplate, ɵɵprojection, ɵɵclassMap, ɵɵproperty, ɵɵadvance, EventEmitter, ɵɵdirectiveInject, ChangeDetectorRef, ɵɵdefineComponent, ɵɵprojectionDef, Component, ChangeDetectionStrategy, Input, Output, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { OnChange } from 'ngx-bootstrap/utils';
import { NgIf, NgClass, CommonModule } from '@angular/common';

class AlertConfig {
    constructor() {
        /** default alert type */
        this.type = 'warning';
        /** is alerts are dismissible by default */
        this.dismissible = false;
        /** default time before alert will dismiss */
        this.dismissOnTimeout = undefined;
    }
}
AlertConfig.ɵfac = function AlertConfig_Factory(t) { return new (t || AlertConfig)(); };
AlertConfig.ɵprov = ɵɵdefineInjectable({ token: AlertConfig, factory: AlertConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AlertConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

function AlertComponent_ng_template_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 2);
    ɵɵlistener("click", function AlertComponent_ng_template_0_ng_template_1_Template_button_click_0_listener() { ɵɵrestoreView(_r3); const ctx_r2 = ɵɵnextContext(2); return ctx_r2.close(); });
    ɵɵelementStart(1, "span", 3);
    ɵɵtext(2, "\u00D7");
    ɵɵelementEnd();
    ɵɵelementStart(3, "span", 4);
    ɵɵtext(4, "Close");
    ɵɵelementEnd();
    ɵɵelementEnd();
} }
function AlertComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, AlertComponent_ng_template_0_ng_template_1_Template, 5, 0, "ng-template", 0);
    ɵɵprojection(2);
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap("alert alert-" + ctx_r0.type);
    ɵɵproperty("ngClass", ctx_r0.classes);
    ɵɵadvance(1);
    ɵɵproperty("ngIf", ctx_r0.dismissible);
} }
const _c0 = ["*"];
class AlertComponent {
    constructor(_config, changeDetection) {
        this.changeDetection = changeDetection;
        /** Alert type.
         * Provides one of four bootstrap supported contextual classes:
         * `success`, `info`, `warning` and `danger`
         */
        this.type = 'warning';
        /** If set, displays an inline "Close" button */
        this.dismissible = false;
        /** Is alert visible */
        this.isOpen = true;
        /** This event fires immediately after close instance method is called,
         * $event is an instance of Alert component.
         */
        this.onClose = new EventEmitter();
        /** This event fires when alert closed, $event is an instance of Alert component */
        this.onClosed = new EventEmitter();
        this.classes = '';
        this.dismissibleChange = new EventEmitter();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe(( /*dismissible: boolean*/) => {
            this.classes = this.dismissible ? 'alert-dismissible' : '';
            this.changeDetection.markForCheck();
        });
    }
    ngOnInit() {
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout(() => this.close(), parseInt(this.dismissOnTimeout, 10));
        }
    }
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     */
    close() {
        if (!this.isOpen) {
            return;
        }
        this.onClose.emit(this);
        this.isOpen = false;
        this.changeDetection.markForCheck();
        this.onClosed.emit(this);
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(ɵɵdirectiveInject(AlertConfig), ɵɵdirectiveInject(ChangeDetectorRef)); };
AlertComponent.ɵcmp = ɵɵdefineComponent({ type: AlertComponent, selectors: [["alert"], ["bs-alert"]], inputs: { type: "type", dismissible: "dismissible", dismissOnTimeout: "dismissOnTimeout", isOpen: "isOpen" }, outputs: { onClose: "onClose", onClosed: "onClosed" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [[3, "ngIf"], ["role", "alert", 3, "ngClass"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "sr-only"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵtemplate(0, AlertComponent_ng_template_0_Template, 3, 4, "ng-template", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.isOpen);
    } }, directives: [NgIf, NgClass], encapsulation: 2, changeDetection: 0 });
__decorate([
    OnChange(),
    __metadata("design:type", Object)
], AlertComponent.prototype, "dismissible", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AlertComponent, [{
        type: Component,
        args: [{
                selector: 'alert,bs-alert',
                templateUrl: './alert.component.html',
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: AlertConfig }, { type: ChangeDetectorRef }]; }, { type: [{
            type: Input
        }], dismissible: [{
            type: Input
        }], dismissOnTimeout: [{
            type: Input
        }], isOpen: [{
            type: Input
        }], onClose: [{
            type: Output
        }], onClosed: [{
            type: Output
        }] }); })();

class AlertModule {
    static forRoot() {
        return { ngModule: AlertModule, providers: [] };
    }
}
AlertModule.ɵmod = ɵɵdefineNgModule({ type: AlertModule });
AlertModule.ɵinj = ɵɵdefineInjector({ factory: function AlertModule_Factory(t) { return new (t || AlertModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(AlertModule, { declarations: [AlertComponent], imports: [CommonModule], exports: [AlertComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵsetClassMetadata(AlertModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [AlertComponent],
                exports: [AlertComponent],
                entryComponents: [AlertComponent]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AlertComponent, AlertConfig, AlertModule };
//# sourceMappingURL=ngx-bootstrap-alert.js.map
