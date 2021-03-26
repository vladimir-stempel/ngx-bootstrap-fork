export function shift(data) {
    const placement = data.placement;
    const basePlacement = placement.split(' ')[0];
    const shiftVariation = placement.split(' ')[1];
    if (shiftVariation) {
        const { host, target } = data.offsets;
        const isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
        const side = isVertical ? 'left' : 'top';
        const measurement = isVertical ? 'width' : 'height';
        const shiftOffsets = {
            start: { [side]: host[side] },
            end: {
                [side]: host[side] + host[measurement] - target[measurement]
            }
        };
        data.offsets.target = Object.assign(Object.assign({}, target), {
            [side]: (side === shiftVariation ? shiftOffsets.start[side] : shiftOffsets.end[side])
        });
    }
    return data;
}
//# sourceMappingURL=shift.js.map