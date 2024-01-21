"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConstants = void 0;
const crypto = require('crypto');
const secretKey = crypto.randomBytes(32).toString('hex');
console.log(secretKey);
exports.jwtConstants = {
    secret: secretKey
};
//# sourceMappingURL=jwt.constant.js.map