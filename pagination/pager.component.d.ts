import { ChangeDetectorRef, ElementRef, EventEmitter, OnInit, Provider } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { PageChangedEvent } from './pagination.component';
import { PaginationConfig } from './pagination.config';
import { ConfigModel, PagesModel } from './models';
import * as i0 from "@angular/core";
export declare const PAGER_CONTROL_VALUE_ACCESSOR: Provider;
export declare class PagerComponent implements ControlValueAccessor, OnInit {
    private elementRef;
    private changeDetection;
    config: ConfigModel;
    /** if `true` aligns each link to the sides of pager */
    align: boolean;
    /** limit number for page links in pager */
    maxSize: number;
    /** if false first and last buttons will be hidden */
    boundaryLinks: boolean;
    /** if false previous and next buttons will be hidden */
    directionLinks: boolean;
    /** first button text */
    firstText: string;
    /** previous button text */
    previousText: string;
    /** next button text */
    nextText: string;
    /** last button text */
    lastText: string;
    /** if true current page will in the middle of pages list */
    rotate: boolean;
    /** add class to <code><li\></code> */
    pageBtnClass: string;
    /** if true pagination component will be disabled */
    disabled: boolean;
    /** fired when total pages count changes, $event:number equals to total pages count */
    numPages: EventEmitter<number>;
    /** fired when page was changed, $event:{page, itemsPerPage} equals to
     * object with current page index and number of items per page
     */
    pageChanged: EventEmitter<PageChangedEvent>;
    /** maximum number of items per page. If value less than 1 will display all items on one page */
    get itemsPerPage(): number;
    set itemsPerPage(v: number);
    /** total number of items in all pages */
    get totalItems(): number;
    set totalItems(v: number);
    get totalPages(): number;
    set totalPages(v: number);
    set page(value: number);
    get page(): number;
    onChange: Function;
    onTouched: Function;
    classMap: string;
    pages: PagesModel[];
    protected _itemsPerPage: number;
    protected _totalItems: number;
    protected _totalPages: number;
    protected inited: boolean;
    protected _page: number;
    constructor(elementRef: ElementRef, paginationConfig: PaginationConfig, changeDetection: ChangeDetectorRef);
    configureOptions(config: ConfigModel): void;
    ngOnInit(): void;
    writeValue(value: number): void;
    getText(key: string): string;
    noPrevious(): boolean;
    noNext(): boolean;
    registerOnChange(fn: () => void): void;
    registerOnTouched(fn: () => void): void;
    selectPage(page: number, event?: Event): void;
    protected makePage(num: number, text: string, active: boolean): {
        number: number;
        text: string;
        active: boolean;
    };
    protected getPages(currentPage: number, totalPages: number): PagesModel[];
    protected calculateTotalPages(): number;
    static ??fac: i0.????FactoryDef<PagerComponent, never>;
    static ??cmp: i0.????ComponentDefWithMeta<PagerComponent, "pager", never, { "align": "align"; "maxSize": "maxSize"; "boundaryLinks": "boundaryLinks"; "directionLinks": "directionLinks"; "firstText": "firstText"; "previousText": "previousText"; "nextText": "nextText"; "lastText": "lastText"; "rotate": "rotate"; "pageBtnClass": "pageBtnClass"; "disabled": "disabled"; "itemsPerPage": "itemsPerPage"; "totalItems": "totalItems"; }, { "numPages": "numPages"; "pageChanged": "pageChanged"; }, never, never>;
}
//# sourceMappingURL=pager.component.d.ts.map