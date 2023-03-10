"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failedStatus = exports.sucessStatus = void 0;
const sucessStatus = (data) => ({
    statuscode: 200,
    data,
});
exports.sucessStatus = sucessStatus;
const failedStatus = (errorDescription) => ({
    statuscode: 400,
    errorDescription,
});
exports.failedStatus = failedStatus;
//# sourceMappingURL=statuses.js.map