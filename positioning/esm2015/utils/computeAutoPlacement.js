/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 */
import { getBoundaries } from './getBoundaries';
function getArea({ width, height }) {
    return width * height;
}
export function computeAutoPlacement(placement, refRect, target, host, allowedPositions = ['top', 'bottom', 'right', 'left'], boundariesElement = 'viewport', padding = 0) {
    if (placement.indexOf('auto') === -1) {
        return placement;
    }
    const boundaries = getBoundaries(target, host, padding, boundariesElement);
    const rects = {
        top: {
            width: boundaries.width,
            height: refRect.top - boundaries.top
        },
        right: {
            width: boundaries.right - refRect.right,
            height: boundaries.height
        },
        bottom: {
            width: boundaries.width,
            height: boundaries.bottom - refRect.bottom
        },
        left: {
            width: refRect.left - boundaries.left,
            height: boundaries.height
        }
    };
    const sortedAreas = Object.keys(rects)
        .map(key => (Object.assign(Object.assign({ key }, rects[key]), { area: getArea(rects[key]) })))
        .sort((a, b) => b.area - a.area);
    let filteredAreas = sortedAreas.filter(({ width, height }) => {
        return width >= target.clientWidth
            && height >= target.clientHeight;
    });
    filteredAreas = filteredAreas.filter((position) => {
        return allowedPositions
            .some((allowedPosition) => {
            return allowedPosition === position.key;
        });
    });
    const computedPlacement = filteredAreas.length > 0
        ? filteredAreas[0].key
        : sortedAreas[0].key;
    const variation = placement.split(' ')[1];
    // for tooltip on auto position
    target.className = target.className.replace(/bs-tooltip-auto/g, `bs-tooltip-${computedPlacement}`);
    return computedPlacement + (variation ? `-${variation}` : '');
}
//# sourceMappingURL=computeAutoPlacement.js.map