import { getOffsets, getReferenceOffsets, updateContainerClass, setStyles } from './utils';
import { arrow, flip, preventOverflow, shift, initData } from './modifiers';
export class Positioning {
    position(hostElement, targetElement /*, round = true*/) {
        return this.offset(hostElement, targetElement /*, false*/);
    }
    offset(hostElement, targetElement /*, round = true*/) {
        return getReferenceOffsets(targetElement, hostElement);
    }
    positionElements(hostElement, targetElement, position, appendToBody, options) {
        const chainOfModifiers = [flip, shift, preventOverflow, arrow];
        return chainOfModifiers.reduce((modifiedData, modifier) => modifier(modifiedData), initData(targetElement, hostElement, position, options));
    }
}
const positionService = new Positioning();
export function positionElements(hostElement, targetElement, placement, appendToBody, options, renderer) {
    const data = positionService.positionElements(hostElement, targetElement, placement, appendToBody, options);
    const offsets = getOffsets(data);
    setStyles(targetElement, {
        'will-change': 'transform',
        top: '0px',
        left: '0px',
        transform: `translate3d(${offsets.left}px, ${offsets.top}px, 0px)`
    }, renderer);
    if (data.instance.arrow) {
        setStyles(data.instance.arrow, data.offsets.arrow, renderer);
    }
    updateContainerClass(data, renderer);
}
//# sourceMappingURL=ng-positioning.js.map