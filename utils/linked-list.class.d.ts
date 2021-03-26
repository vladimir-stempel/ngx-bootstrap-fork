interface ListNode<T> {
    value: T;
    next?: ListNode<T>;
    previous?: ListNode<T>;
}
export declare class LinkedList<T> {
    length: number;
    protected head: ListNode<T>;
    protected tail: ListNode<T>;
    protected current: ListNode<T>;
    protected asArray: T[];
    get(position: number): T;
    add(value: T, position?: number): void;
    remove(position?: number): void;
    set(position: number, value: T): void;
    toArray(): T[];
    findAll(fn: any): {
        index: number;
        value: T;
    }[];
    push(...args: T[]): number;
    pop(): T;
    unshift(...args: T[]): number;
    shift(): T;
    forEach(fn: (value: T, index: number) => void): void;
    indexOf(value: T): number;
    some(fn: (value: T) => boolean): boolean;
    every(fn: (value: T) => boolean): boolean;
    toString(): string;
    find(fn: (value: T, index: number) => boolean): T;
    findIndex(fn: (value: T, index: number) => boolean): number;
    protected getNode(position: number): ListNode<T>;
    protected createInternalArrayRepresentation(): void;
}
export {};
//# sourceMappingURL=linked-list.class.d.ts.map