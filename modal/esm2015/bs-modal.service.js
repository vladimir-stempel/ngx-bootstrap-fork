import { Injectable, EventEmitter, RendererFactory2, Inject, Optional } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { ModalBackdropComponent } from './modal-backdrop.component';
import { ModalContainerComponent } from './modal-container.component';
import { CLASS_NAME, modalConfigDefaults, ModalOptions, TRANSITION_DURATIONS, MODAL_CONFIG_DEFAULT_OVERRIDE } from './modal-options.class';
import { BsModalRef } from './bs-modal-ref.service';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/component-loader";
import * as i2 from "./modal-options.class";
export class BsModalService {
    constructor(rendererFactory, clf, modalDefaultOption) {
        this.clf = clf;
        this.modalDefaultOption = modalDefaultOption;
        this.onShow = new EventEmitter();
        this.onShown = new EventEmitter();
        this.onHide = new EventEmitter();
        this.onHidden = new EventEmitter();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = null;
        this.loaders = [];
        this._backdropLoader = this.clf.createLoader(null, null, null);
        this._renderer = rendererFactory.createRenderer(null, null);
        this.config = modalDefaultOption ?
            (Object.assign({}, modalConfigDefaults, modalDefaultOption)) :
            modalConfigDefaults;
    }
    /** Shows a modal */
    show(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content, config) {
        this.modalsCount++;
        this._createLoaders();
        // must be different per every show() call
        const id = (config === null || config === void 0 ? void 0 : config.id) || (new Date()).getUTCMilliseconds();
        this.config = this.modalDefaultOption ?
            Object.assign({}, modalConfigDefaults, this.modalDefaultOption, config) :
            Object.assign({}, modalConfigDefaults, config);
        this.config.id = id;
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    }
    hide(id) {
        if (this.modalsCount === 1 || id == null) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 && id != null ? this.modalsCount - 1 : 0;
        setTimeout(() => {
            this._hideModal(id);
            this.removeLoaders(id);
        }, this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0);
    }
    _showBackdrop() {
        const isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        const isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(ModalBackdropComponent)
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    }
    _hideBackdrop() {
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        const duration = this.config.animated ? TRANSITION_DURATIONS.BACKDROP : 0;
        setTimeout(() => this.removeBackdrop(), duration);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _showModal(content) {
        var _a;
        const modalLoader = this.loaders[this.loaders.length - 1];
        if (this.config && this.config.providers) {
            for (const provider of this.config.providers) {
                modalLoader.provide(provider);
            }
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const bsModalRef = new BsModalRef();
        const modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: BsModalRef, useValue: bsModalRef })
            .attach(ModalContainerComponent)
            .to('body');
        bsModalRef.hide = () => modalContainerRef.instance.hide();
        bsModalRef.setClass = (newClass) => {
            modalContainerRef.instance.config.class = newClass;
        };
        bsModalRef.onHidden = new EventEmitter();
        bsModalRef.onHide = new EventEmitter();
        this.copyEvent(modalLoader.onBeforeHide, bsModalRef.onHide);
        this.copyEvent(modalLoader.onHidden, bsModalRef.onHidden);
        // call 'show' method after assign setClass in bsModalRef.
        // it makes modal component's bsModalRef available to call setClass method
        modalContainerRef.show({
            content,
            isAnimated: this.config.animated,
            initialState: this.config.initialState,
            bsModalService: this,
            id: this.config.id
        });
        modalContainerRef.instance.level = this.getModalsCount();
        bsModalRef.content = modalLoader.getInnerComponent() || null;
        bsModalRef.id = (_a = modalContainerRef.instance.config) === null || _a === void 0 ? void 0 : _a.id;
        return bsModalRef;
    }
    _hideModal(id) {
        if (id != null) {
            const indexToRemove = this.loaders.findIndex(loader => loader.instance.config.id === id);
            const modalLoader = this.loaders[indexToRemove];
            if (modalLoader) {
                modalLoader.hide(id);
            }
        }
        else {
            this.loaders.forEach((loader) => {
                loader.hide(loader.instance.config.id);
            });
        }
    }
    getModalsCount() {
        return this.modalsCount;
    }
    setDismissReason(reason) {
        this.lastDismissReason = reason;
    }
    removeBackdrop() {
        this._renderer.removeClass(document.body, CLASS_NAME.OPEN);
        this._backdropLoader.hide();
        this.backdropRef = null;
    }
    /** Checks if the body is overflowing and sets scrollbar width */
    /** @internal */
    checkScrollbar() {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    }
    setScrollbar() {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window
            .getComputedStyle(document.body)
            .getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = `${this.originalBodyPadding +
                this.scrollbarWidth}px`;
        }
    }
    resetScrollbar() {
        document.body.style.paddingRight = `${this.originalBodyPadding}px`;
    }
    // thx d.walsh
    getScrollbarWidth() {
        const scrollDiv = this._renderer.createElement('div');
        this._renderer.addClass(scrollDiv, CLASS_NAME.SCROLLBAR_MEASURER);
        this._renderer.appendChild(document.body, scrollDiv);
        const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this._renderer.removeChild(document.body, scrollDiv);
        return scrollbarWidth;
    }
    _createLoaders() {
        const loader = this.clf.createLoader(null, null, null);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    }
    removeLoaders(id) {
        if (id != null) {
            const indexToRemove = this.loaders.findIndex(loader => loader.instance.config.id === id);
            if (indexToRemove >= 0) {
                this.loaders.splice(indexToRemove, 1);
                this.loaders.forEach((loader, i) => {
                    loader.instance.level = i + 1;
                });
            }
        }
        else {
            this.loaders.splice(0, this.loaders.length);
        }
    }
    copyEvent(from, to) {
        from.subscribe((data) => {
            to.emit(this.lastDismissReason || data);
        });
    }
}
BsModalService.ɵfac = function BsModalService_Factory(t) { return new (t || BsModalService)(i0.ɵɵinject(i0.RendererFactory2), i0.ɵɵinject(i1.ComponentLoaderFactory), i0.ɵɵinject(MODAL_CONFIG_DEFAULT_OVERRIDE, 8)); };
BsModalService.ɵprov = i0.ɵɵdefineInjectable({ token: BsModalService, factory: BsModalService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsModalService, [{
        type: Injectable
    }], function () { return [{ type: i0.RendererFactory2 }, { type: i1.ComponentLoaderFactory }, { type: i2.ModalOptions, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [MODAL_CONFIG_DEFAULT_OVERRIDE]
            }] }]; }, null); })();
//# sourceMappingURL=bs-modal.service.js.map