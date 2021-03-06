/**
 * Get the opposite placement of the given one
 */
export function getOppositePlacement(placement) {
    const hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return placement.replace(/left|right|bottom|top/g, matched => hash[matched]);
}
//# sourceMappingURL=getOppositePlacement.js.map