import { Subject } from 'rxjs';
import { DraggableItem } from './draggable-item';
import * as i0 from "@angular/core";
export declare class DraggableItemService {
    private draggableItem;
    private onCapture;
    dragStart(item: DraggableItem): void;
    getItem(): DraggableItem;
    captureItem(overZoneIndex: number, newIndex: number): DraggableItem;
    onCaptureItem(): Subject<DraggableItem>;
    static ɵfac: i0.ɵɵFactoryDef<DraggableItemService, never>;
    static ɵprov: i0.ɵɵInjectableDef<DraggableItemService>;
}
//# sourceMappingURL=draggable-item.service.d.ts.map