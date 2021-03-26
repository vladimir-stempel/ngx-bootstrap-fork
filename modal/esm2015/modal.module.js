import { NgModule } from '@angular/core';
import { ModalBackdropComponent } from './modal-backdrop.component';
import { ModalDirective } from './modal.directive';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { ModalContainerComponent } from './modal-container.component';
import { BsModalService } from './bs-modal.service';
import * as i0 from "@angular/core";
export class ModalModule {
    static forRoot() {
        return {
            ngModule: ModalModule,
            providers: [BsModalService, ComponentLoaderFactory, PositioningService]
        };
    }
    static forChild() {
        return {
            ngModule: ModalModule,
            providers: [BsModalService, ComponentLoaderFactory, PositioningService]
        };
    }
}
ModalModule.ɵmod = i0.ɵɵdefineNgModule({ type: ModalModule });
ModalModule.ɵinj = i0.ɵɵdefineInjector({ factory: function ModalModule_Factory(t) { return new (t || ModalModule)(); } });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ModalModule, { declarations: [ModalBackdropComponent,
        ModalDirective,
        ModalContainerComponent], exports: [ModalBackdropComponent, ModalDirective] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    ModalBackdropComponent,
                    ModalDirective,
                    ModalContainerComponent
                ],
                exports: [ModalBackdropComponent, ModalDirective],
                entryComponents: [ModalBackdropComponent, ModalContainerComponent]
            }]
    }], null, null); })();
//# sourceMappingURL=modal.module.js.map