/**
 * Tells if a given input is a number
 */
export function isNumeric(n) {
    return n !== '' && !isNaN(parseFloat(n)) && isFinite(parseFloat(n));
}
//# sourceMappingURL=isNumeric.js.map