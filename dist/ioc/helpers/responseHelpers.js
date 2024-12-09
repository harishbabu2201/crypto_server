"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseHelper = void 0;
class ResponseHelper {
    userResponse(message, user, token) {
        this.message = message;
        this.user = user;
        this.token = token;
    }
}
exports.ResponseHelper = ResponseHelper;
