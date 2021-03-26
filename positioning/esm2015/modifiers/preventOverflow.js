import { getBoundaries, isModifierEnabled } from '../utils';
export function preventOverflow(data) {
    if (!isModifierEnabled(data.options, 'preventOverflow')) {
        return data;
    }
    // NOTE: DOM access here
    // resets the target Offsets's position so that the document size can be calculated excluding
    // the size of the targetOffsets element itself
    const transformProp = 'transform';
    const targetStyles = data.instance.target.style; // assignment to help minification
    const { top, left, [transformProp]: transform } = targetStyles;
    targetStyles.top = '';
    targetStyles.left = '';
    targetStyles[transformProp] = '';
    const boundaries = getBoundaries(data.instance.target, data.instance.host, 0, // padding
    data.options.modifiers.preventOverflow.boundariesElement || 'scrollParent', false // positionFixed
    );
    // NOTE: DOM access here
    // restores the original style properties after the offsets have been computed
    targetStyles.top = top;
    targetStyles.left = left;
    targetStyles[transformProp] = transform;
    const order = ['left', 'right', 'top', 'bottom'];
    const check = {
        primary(placement) {
            let value = data.offsets.target[placement];
            // options.escapeWithReference
            if (data.offsets.target[placement] < boundaries[placement]) {
                value = Math.max(data.offsets.target[placement], boundaries[placement]);
            }
            return { [placement]: value };
        },
        secondary(placement) {
            const mainSide = placement === 'right' ? 'left' : 'top';
            let value = data.offsets.target[mainSide];
            // escapeWithReference
            if (data.offsets.target[placement] > boundaries[placement]) {
                value = Math.min(data.offsets.target[mainSide], boundaries[placement] -
                    (placement === 'right' ? data.offsets.target.width : data.offsets.target.height));
            }
            return { [mainSide]: value };
        }
    };
    let side;
    order.forEach(placement => {
        side = ['left', 'top']
            .indexOf(placement) !== -1
            ? 'primary'
            : 'secondary';
        data.offsets.target = Object.assign(Object.assign({}, data.offsets.target), check[side](placement));
    });
    return data;
}
//# sourceMappingURL=preventOverflow.js.map