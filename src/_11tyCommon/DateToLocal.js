"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateToLocal = void 0;
function dateToLocal(dt) {
    let nd = new Date(dt.valueOf());
    nd.setDate(nd.getDate() + 1);
    return nd.toLocaleDateString("en-us", {
        year: "numeric",
        month: "short",
    });
}
exports.dateToLocal = dateToLocal;
