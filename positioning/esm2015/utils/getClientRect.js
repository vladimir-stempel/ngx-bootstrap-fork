export function getClientRect(offsets) {
    return Object.assign(Object.assign({}, offsets), { right: offsets.left + offsets.width, bottom: offsets.top + offsets.height });
}
//# sourceMappingURL=getClientRect.js.map