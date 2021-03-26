import { __decorate, __metadata } from "tslib";
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2, ViewContainerRef } from '@angular/core';
import { TooltipContainerComponent } from './tooltip-container.component';
import { TooltipConfig } from './tooltip.config';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { OnChange, warnOnce, parseTriggers } from 'ngx-bootstrap/utils';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { timer } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/component-loader";
import * as i2 from "./tooltip.config";
import * as i3 from "ngx-bootstrap/positioning";
let id = 0;
export class TooltipDirective {
    constructor(_viewContainerRef, cis, config, _elementRef, _renderer, _positionService) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._positionService = _positionService;
        this.tooltipId = id++;
        /** Fired when tooltip content changes */
        this.tooltipChange = new EventEmitter();
        /**
         * Css class for tooltip container
         */
        this.containerClass = '';
        /** @deprecated - removed, will be added to configuration */
        this.tooltipAnimation = true;
        /** @deprecated */
        this.tooltipFadeDuration = 150;
        /** @deprecated */
        this.tooltipStateChanged = new EventEmitter();
        this._tooltip = cis
            .createLoader(this._elementRef, _viewContainerRef, this._renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    /**
     * Returns whether or not the tooltip is currently being shown
     */
    get isOpen() {
        return this._tooltip.isShown;
    }
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /** @deprecated - please use `tooltip` instead */
    set htmlContent(value) {
        warnOnce('tooltipHtml was deprecated, please use `tooltip` instead');
        this.tooltip = value;
    }
    /** @deprecated - please use `placement` instead */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _placement(value) {
        warnOnce('tooltipPlacement was deprecated, please use `placement` instead');
        this.placement = value;
    }
    /** @deprecated - please use `isOpen` instead */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _isOpen(value) {
        warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
        this.isOpen = value;
    }
    get _isOpen() {
        warnOnce('tooltipIsOpen was deprecated, please use `isOpen` instead');
        return this.isOpen;
    }
    /** @deprecated - please use `isDisabled` instead */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _enable(value) {
        warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
        this.isDisabled = !value;
    }
    get _enable() {
        warnOnce('tooltipEnable was deprecated, please use `isDisabled` instead');
        return this.isDisabled;
    }
    /** @deprecated - please use `container="body"` instead */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _appendToBody(value) {
        warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
        this.container = value ? 'body' : this.container;
    }
    get _appendToBody() {
        warnOnce('tooltipAppendToBody was deprecated, please use `container="body"` instead');
        return this.container === 'body';
    }
    /** @deprecated - will replaced with customClass */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _popupClass(value) {
        warnOnce('tooltipClass deprecated');
    }
    /** @deprecated - removed */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _tooltipContext(value) {
        warnOnce('tooltipContext deprecated');
    }
    /** @deprecated */
    // eslint-disable-next-line @angular-eslint/no-input-rename
    set _tooltipPopupDelay(value) {
        warnOnce('tooltipPopupDelay is deprecated, use `delay` instead');
        this.delay = value;
    }
    /** @deprecated -  please use `triggers` instead */
    get _tooltipTrigger() {
        warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
        return this.triggers;
    }
    set _tooltipTrigger(value) {
        warnOnce('tooltipTrigger was deprecated, please use `triggers` instead');
        this.triggers = (value || '').toString();
    }
    ngOnInit() {
        this._tooltip.listen({
            triggers: this.triggers,
            show: () => this.show()
        });
        this.tooltipChange.subscribe((value) => {
            if (!value) {
                this._tooltip.hide();
            }
        });
        this.onShown.subscribe(() => {
            this.setAriaDescribedBy();
        });
        this.onHidden.subscribe(() => {
            this.setAriaDescribedBy();
        });
    }
    setAriaDescribedBy() {
        this._ariaDescribedby = this.isOpen ? `tooltip-${this.tooltipId}` : null;
        if (this._ariaDescribedby) {
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
        }
        else {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
        }
    }
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    show() {
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: this.adaptivePosition
                },
                preventOverflow: {
                    enabled: this.adaptivePosition,
                    boundariesElement: this.boundariesElement || 'scrollParent'
                }
            }
        });
        if (this.isOpen ||
            this.isDisabled ||
            this._delayTimeoutId ||
            !this.tooltip) {
            return;
        }
        const showTooltip = () => {
            if (this._delayTimeoutId) {
                this._delayTimeoutId = undefined;
            }
            this._tooltip
                .attach(TooltipContainerComponent)
                .to(this.container)
                .position({ attachment: this.placement })
                .show({
                content: this.tooltip,
                placement: this.placement,
                containerClass: this.containerClass,
                id: `tooltip-${this.tooltipId}`
            });
        };
        const cancelDelayedTooltipShowing = () => {
            if (this._tooltipCancelShowFn) {
                this._tooltipCancelShowFn();
            }
        };
        if (this.delay) {
            if (this._delaySubscription) {
                this._delaySubscription.unsubscribe();
            }
            this._delaySubscription = timer(this.delay).subscribe(() => {
                showTooltip();
                cancelDelayedTooltipShowing();
            });
            if (this.triggers) {
                parseTriggers(this.triggers)
                    .forEach((trigger) => {
                    this._tooltipCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, trigger.close, () => {
                        this._delaySubscription.unsubscribe();
                        cancelDelayedTooltipShowing();
                    });
                });
            }
        }
        else {
            showTooltip();
        }
    }
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    hide() {
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(() => {
            this._tooltip.hide();
        }, this.tooltipFadeDuration);
    }
    ngOnDestroy() {
        this._tooltip.dispose();
        this.tooltipChange.unsubscribe();
        if (this._delaySubscription) {
            this._delaySubscription.unsubscribe();
        }
        this.onShown.unsubscribe();
        this.onHidden.unsubscribe();
    }
}
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i1.ComponentLoaderFactory), i0.ɵɵdirectiveInject(i2.TooltipConfig), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i3.PositioningService)); };
TooltipDirective.ɵdir = i0.ɵɵdefineDirective({ type: TooltipDirective, selectors: [["", "tooltip", ""], ["", "tooltipHtml", ""]], inputs: { adaptivePosition: "adaptivePosition", tooltip: "tooltip", placement: "placement", triggers: "triggers", container: "container", containerClass: "containerClass", boundariesElement: "boundariesElement", isOpen: "isOpen", isDisabled: "isDisabled", delay: "delay", htmlContent: ["tooltipHtml", "htmlContent"], _placement: ["tooltipPlacement", "_placement"], _isOpen: ["tooltipIsOpen", "_isOpen"], _enable: ["tooltipEnable", "_enable"], _appendToBody: ["tooltipAppendToBody", "_appendToBody"], tooltipAnimation: "tooltipAnimation", _popupClass: ["tooltipClass", "_popupClass"], _tooltipContext: ["tooltipContext", "_tooltipContext"], _tooltipPopupDelay: ["tooltipPopupDelay", "_tooltipPopupDelay"], tooltipFadeDuration: "tooltipFadeDuration", _tooltipTrigger: ["tooltipTrigger", "_tooltipTrigger"] }, outputs: { tooltipChange: "tooltipChange", onShown: "onShown", onHidden: "onHidden", tooltipStateChanged: "tooltipStateChanged" }, exportAs: ["bs-tooltip"] });
__decorate([
    OnChange(),
    __metadata("design:type", Object)
], TooltipDirective.prototype, "tooltip", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipDirective, [{
        type: Directive,
        args: [{
                selector: '[tooltip], [tooltipHtml]',
                exportAs: 'bs-tooltip'
            }]
    }], function () { return [{ type: i0.ViewContainerRef }, { type: i1.ComponentLoaderFactory }, { type: i2.TooltipConfig }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i3.PositioningService }]; }, { adaptivePosition: [{
            type: Input
        }], tooltip: [{
            type: Input
        }], tooltipChange: [{
            type: Output
        }], placement: [{
            type: Input
        }], triggers: [{
            type: Input
        }], container: [{
            type: Input
        }], containerClass: [{
            type: Input
        }], boundariesElement: [{
            type: Input
        }], isOpen: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }], delay: [{
            type: Input
        }], onShown: [{
            type: Output
        }], onHidden: [{
            type: Output
        }], htmlContent: [{
            type: Input,
            args: ['tooltipHtml']
        }], _placement: [{
            type: Input,
            args: ['tooltipPlacement']
        }], _isOpen: [{
            type: Input,
            args: ['tooltipIsOpen']
        }], _enable: [{
            type: Input,
            args: ['tooltipEnable']
        }], _appendToBody: [{
            type: Input,
            args: ['tooltipAppendToBody']
        }], tooltipAnimation: [{
            type: Input
        }], _popupClass: [{
            type: Input,
            args: ['tooltipClass']
        }], _tooltipContext: [{
            type: Input,
            args: ['tooltipContext']
        }], _tooltipPopupDelay: [{
            type: Input,
            args: ['tooltipPopupDelay']
        }], tooltipFadeDuration: [{
            type: Input
        }], _tooltipTrigger: [{
            type: Input,
            args: ['tooltipTrigger']
        }], tooltipStateChanged: [{
            type: Output
        }] }); })();
//# sourceMappingURL=tooltip.directive.js.map