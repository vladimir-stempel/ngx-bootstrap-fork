(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/utils'), require('@angular/common'), require('ngx-bootstrap/collapse')) :
    typeof define === 'function' && define.amd ? define('ngx-bootstrap/accordion', ['exports', '@angular/core', 'ngx-bootstrap/utils', '@angular/common', 'ngx-bootstrap/collapse'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-bootstrap'] = global['ngx-bootstrap'] || {}, global['ngx-bootstrap'].accordion = {}), global.ng.core, global.utils, global.ng.common, global.i3));
}(this, (function (exports, i0, utils, i2, i3) { 'use strict';

    /**
     * Configuration service, provides default values for the AccordionComponent.
     */
    var AccordionConfig = /** @class */ (function () {
        function AccordionConfig() {
            /** Whether the other panels should be closed when a panel is opened */
            this.closeOthers = false;
            /** turn on/off animation */
            this.isAnimated = false;
        }
        return AccordionConfig;
    }());
    AccordionConfig.ɵfac = function AccordionConfig_Factory(t) { return new (t || AccordionConfig)(); };
    AccordionConfig.ɵprov = i0.ɵɵdefineInjectable({ token: AccordionConfig, factory: AccordionConfig.ɵfac, providedIn: 'root' });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionConfig, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], null, null);
    })();

    var _c0 = ["*"];
    /** Displays collapsible content panels for presenting information in a limited amount of space. */
    var AccordionComponent = /** @class */ (function () {
        function AccordionComponent(config) {
            /** turn on/off animation */
            this.isAnimated = false;
            this.groups = [];
            Object.assign(this, config);
        }
        AccordionComponent.prototype.closeOtherPanels = function (openGroup) {
            if (!this.closeOthers) {
                return;
            }
            this.groups.forEach(function (group) {
                if (group !== openGroup) {
                    group.isOpen = false;
                }
            });
        };
        AccordionComponent.prototype.addGroup = function (group) {
            group.isAnimated = this.isAnimated;
            this.groups.push(group);
        };
        AccordionComponent.prototype.removeGroup = function (group) {
            var index = this.groups.indexOf(group);
            if (index !== -1) {
                this.groups.splice(index, 1);
            }
        };
        return AccordionComponent;
    }());
    AccordionComponent.ɵfac = function AccordionComponent_Factory(t) { return new (t || AccordionComponent)(i0.ɵɵdirectiveInject(AccordionConfig)); };
    AccordionComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AccordionComponent, selectors: [["accordion"]], hostAttrs: ["role", "tablist", 1, "panel-group", 2, "display", "block"], hostVars: 1, hostBindings: function AccordionComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵattribute("aria-multiselectable", ctx.closeOthers);
            }
        }, inputs: { isAnimated: "isAnimated", closeOthers: "closeOthers" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function AccordionComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef();
                i0.ɵɵprojection(0);
            }
        }, encapsulation: 2 });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'accordion',
                        template: "<ng-content></ng-content>",
                        // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                        host: {
                            '[attr.aria-multiselectable]': 'closeOthers',
                            role: 'tablist',
                            class: 'panel-group',
                            style: 'display: block'
                        }
                    }]
            }], function () { return [{ type: AccordionConfig }]; }, { isAnimated: [{
                    type: i0.Input
                }], closeOthers: [{
                    type: i0.Input
                }] });
    })();

    var _c0$1 = function (a0) { return { "text-muted": a0 }; };
    function AccordionPanelComponent_button_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "button", 7);
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0$1, ctx_r0.isDisabled));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", ctx_r0.heading, " ");
        }
    }
    var _c1 = [[["", "accordion-heading", ""]], "*"];
    var _c2 = ["[accordion-heading]", "*"];
    /**
     * ### Accordion heading
     * Instead of using `heading` attribute on the `accordion-group`, you can use
     * an `accordion-heading` attribute on `any` element inside of a group that
     * will be used as group's header template.
     */
    var AccordionPanelComponent = /** @class */ (function () {
        function AccordionPanelComponent(accordion) {
            /** turn on/off animation */
            this.isAnimated = false;
            /** Emits when the opened state changes */
            this.isOpenChange = new i0.EventEmitter();
            this._isOpen = false;
            this.accordion = accordion;
        }
        Object.defineProperty(AccordionPanelComponent.prototype, "isOpen", {
            // Questionable, maybe .panel-open should be on child div.panel element?
            /** Is accordion group open or closed. This property supports two-way binding */
            get: function () {
                return this._isOpen;
            },
            set: function (value) {
                var _this = this;
                if (value !== this.isOpen) {
                    if (value) {
                        this.accordion.closeOtherPanels(this);
                    }
                    this._isOpen = value;
                    Promise.resolve(null).then(function () {
                        _this.isOpenChange.emit(value);
                    })
                        .catch(function (error) {
                        console.log(error);
                    });
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(AccordionPanelComponent.prototype, "isBs3", {
            get: function () {
                return utils.isBs3();
            },
            enumerable: false,
            configurable: true
        });
        AccordionPanelComponent.prototype.ngOnInit = function () {
            this.panelClass = this.panelClass || 'panel-default';
            this.accordion.addGroup(this);
        };
        AccordionPanelComponent.prototype.ngOnDestroy = function () {
            this.accordion.removeGroup(this);
        };
        AccordionPanelComponent.prototype.toggleOpen = function () {
            if (!this.isDisabled) {
                this.isOpen = !this.isOpen;
            }
        };
        return AccordionPanelComponent;
    }());
    AccordionPanelComponent.ɵfac = function AccordionPanelComponent_Factory(t) { return new (t || AccordionPanelComponent)(i0.ɵɵdirectiveInject(AccordionComponent)); };
    AccordionPanelComponent.ɵcmp = i0.ɵɵdefineComponent({ type: AccordionPanelComponent, selectors: [["accordion-group"], ["accordion-panel"]], hostAttrs: [1, "panel", 2, "display", "block"], hostVars: 2, hostBindings: function AccordionPanelComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("panel-open", ctx.isOpen);
            }
        }, inputs: { heading: "heading", panelClass: "panelClass", isDisabled: "isDisabled", isOpen: "isOpen" }, outputs: { isOpenChange: "isOpenChange" }, ngContentSelectors: _c2, decls: 9, vars: 6, consts: [[1, "panel", "card", 3, "ngClass"], ["role", "tab", 1, "panel-heading", "card-header", 3, "ngClass", "click"], [1, "panel-title"], ["role", "button", 1, "accordion-toggle"], ["class", "btn btn-link", "type", "button", 3, "ngClass", 4, "ngIf"], ["role", "tabpanel", 1, "panel-collapse", "collapse", 3, "collapse", "isAnimated"], [1, "panel-body", "card-block", "card-body"], ["type", "button", 1, "btn", "btn-link", 3, "ngClass"]], template: function AccordionPanelComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c1);
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵlistener("click", function AccordionPanelComponent_Template_div_click_1_listener() { return ctx.toggleOpen(); });
                i0.ɵɵelementStart(2, "div", 2);
                i0.ɵɵelementStart(3, "div", 3);
                i0.ɵɵtemplate(4, AccordionPanelComponent_button_4_Template, 2, 4, "button", 4);
                i0.ɵɵprojection(5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(6, "div", 5);
                i0.ɵɵelementStart(7, "div", 6);
                i0.ɵɵprojection(8, 1);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngClass", ctx.panelClass);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngClass", ctx.isDisabled ? "panel-disabled" : "panel-enabled");
                i0.ɵɵadvance(2);
                i0.ɵɵattribute("aria-expanded", ctx.isOpen);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.heading);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("collapse", !ctx.isOpen)("isAnimated", ctx.isAnimated);
            }
        }, directives: [i2.NgClass, i2.NgIf, i3.CollapseDirective], styles: ["[_nghost-%COMP%]   .card-header.panel-enabled[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .card-header.panel-disabled[_ngcontent-%COMP%]   .btn.btn-link[_ngcontent-%COMP%]{cursor:default;text-decoration:none}"] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionPanelComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'accordion-group, accordion-panel',
                        templateUrl: './accordion-group.component.html',
                        // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                        host: {
                            class: 'panel',
                            style: 'display: block'
                        },
                        styleUrls: ['./accordion.scss']
                    }]
            }], function () {
            return [{ type: AccordionComponent, decorators: [{
                            type: i0.Inject,
                            args: [AccordionComponent]
                        }] }];
        }, { heading: [{
                    type: i0.Input
                }], panelClass: [{
                    type: i0.Input
                }], isDisabled: [{
                    type: i0.Input
                }], isOpenChange: [{
                    type: i0.Output
                }], isOpen: [{
                    type: i0.HostBinding,
                    args: ['class.panel-open']
                }, {
                    type: i0.Input
                }] });
    })();

    var AccordionModule = /** @class */ (function () {
        function AccordionModule() {
        }
        AccordionModule.forRoot = function () {
            return { ngModule: AccordionModule, providers: [] };
        };
        return AccordionModule;
    }());
    AccordionModule.ɵmod = i0.ɵɵdefineNgModule({ type: AccordionModule });
    AccordionModule.ɵinj = i0.ɵɵdefineInjector({ factory: function AccordionModule_Factory(t) { return new (t || AccordionModule)(); }, imports: [[i2.CommonModule, i3.CollapseModule]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AccordionModule, { declarations: [AccordionComponent, AccordionPanelComponent], imports: [i2.CommonModule, i3.CollapseModule], exports: [AccordionComponent, AccordionPanelComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionModule, [{
                type: i0.NgModule,
                args: [{
                        imports: [i2.CommonModule, i3.CollapseModule],
                        declarations: [AccordionComponent, AccordionPanelComponent],
                        exports: [AccordionComponent, AccordionPanelComponent]
                    }]
            }], null, null);
    })();

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AccordionComponent = AccordionComponent;
    exports.AccordionConfig = AccordionConfig;
    exports.AccordionModule = AccordionModule;
    exports.AccordionPanelComponent = AccordionPanelComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-bootstrap-accordion.umd.js.map
