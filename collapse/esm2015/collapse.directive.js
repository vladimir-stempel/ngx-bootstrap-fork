import { AnimationBuilder } from '@angular/animations';
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2 } from '@angular/core';
import { collapseAnimation, expandAnimation } from './collapse-animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/animations";
export class CollapseDirective {
    constructor(_el, _renderer, _builder) {
        this._el = _el;
        this._renderer = _renderer;
        /** This event fires as soon as content collapses */
        this.collapsed = new EventEmitter();
        /** This event fires when collapsing is started */
        this.collapses = new EventEmitter();
        /** This event fires as soon as content becomes visible */
        this.expanded = new EventEmitter();
        /** This event fires when expansion is started */
        this.expands = new EventEmitter();
        // shown
        this.isExpanded = true;
        this.collapseNewValue = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
        /** turn on/off animation */
        this.isAnimated = false;
        this._display = 'block';
        this._stylesLoaded = false;
        this._COLLAPSE_ACTION_NAME = 'collapse';
        this._EXPAND_ACTION_NAME = 'expand';
        this._factoryCollapseAnimation = _builder.build(collapseAnimation);
        this._factoryExpandAnimation = _builder.build(expandAnimation);
    }
    set display(value) {
        if (!this.isAnimated) {
            this._renderer.setStyle(this._el.nativeElement, 'display', value);
            return;
        }
        this._display = value;
        if (value === 'none') {
            this.hide();
            return;
        }
        this.show();
    }
    /** A flag indicating visibility of content (shown or hidden) */
    set collapse(value) {
        this.collapseNewValue = value;
        if (!this._player || this._isAnimationDone) {
            this.isExpanded = value;
            this.toggle();
        }
    }
    get collapse() {
        return this.isExpanded;
    }
    ngAfterViewChecked() {
        this._stylesLoaded = true;
        if (!this._player || !this._isAnimationDone) {
            return;
        }
        this._player.reset();
        this._renderer.setStyle(this._el.nativeElement, 'height', '*');
    }
    /** allows to manually toggle content visibility */
    toggle() {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    /** allows to manually hide content */
    hide() {
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapsing = false;
        this.collapses.emit(this);
        this._isAnimationDone = false;
        this.animationRun(this.isAnimated, this._COLLAPSE_ACTION_NAME)(() => {
            this._isAnimationDone = true;
            if (this.collapseNewValue !== this.isCollapsed && this.isAnimated) {
                this.show();
                return;
            }
            this.collapsed.emit(this);
            this._renderer.setStyle(this._el.nativeElement, 'display', 'none');
        });
    }
    /** allows to manually show collapsed content */
    show() {
        this._renderer.setStyle(this._el.nativeElement, 'display', this._display);
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.isCollapsing = false;
        this.expands.emit(this);
        this._isAnimationDone = false;
        this.animationRun(this.isAnimated, this._EXPAND_ACTION_NAME)(() => {
            this._isAnimationDone = true;
            if (this.collapseNewValue !== this.isCollapsed && this.isAnimated) {
                this.hide();
                return;
            }
            this.expanded.emit(this);
            this._renderer.removeStyle(this._el.nativeElement, 'overflow');
        });
    }
    animationRun(isAnimated, action) {
        if (!isAnimated || !this._stylesLoaded) {
            return (callback) => callback();
        }
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'hidden');
        this._renderer.addClass(this._el.nativeElement, 'collapse');
        const factoryAnimation = (action === this._EXPAND_ACTION_NAME)
            ? this._factoryExpandAnimation
            : this._factoryCollapseAnimation;
        if (this._player) {
            this._player.destroy();
        }
        this._player = factoryAnimation.create(this._el.nativeElement);
        this._player.play();
        return (callback) => this._player.onDone(callback);
    }
}
CollapseDirective.ɵfac = function CollapseDirective_Factory(t) { return new (t || CollapseDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.AnimationBuilder)); };
CollapseDirective.ɵdir = i0.ɵɵdefineDirective({ type: CollapseDirective, selectors: [["", "collapse", ""]], hostVars: 10, hostBindings: function CollapseDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("aria-expanded", ctx.isExpanded)("aria-hidden", ctx.isCollapsed);
        i0.ɵɵclassProp("collapse", ctx.isCollapse)("in", ctx.isExpanded)("show", ctx.isExpanded)("collapsing", ctx.isCollapsing);
    } }, inputs: { display: "display", isAnimated: "isAnimated", collapse: "collapse" }, outputs: { collapsed: "collapsed", collapses: "collapses", expanded: "expanded", expands: "expands" }, exportAs: ["bs-collapse"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollapseDirective, [{
        type: Directive,
        args: [{
                selector: '[collapse]',
                exportAs: 'bs-collapse',
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    '[class.collapse]': 'true'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.AnimationBuilder }]; }, { collapsed: [{
            type: Output
        }], collapses: [{
            type: Output
        }], expanded: [{
            type: Output
        }], expands: [{
            type: Output
        }], isExpanded: [{
            type: HostBinding,
            args: ['class.in']
        }, {
            type: HostBinding,
            args: ['class.show']
        }, {
            type: HostBinding,
            args: ['attr.aria-expanded']
        }], isCollapsed: [{
            type: HostBinding,
            args: ['attr.aria-hidden']
        }], isCollapse: [{
            type: HostBinding,
            args: ['class.collapse']
        }], isCollapsing: [{
            type: HostBinding,
            args: ['class.collapsing']
        }], display: [{
            type: Input
        }], isAnimated: [{
            type: Input
        }], collapse: [{
            type: Input
        }] }); })();
//# sourceMappingURL=collapse.directive.js.map