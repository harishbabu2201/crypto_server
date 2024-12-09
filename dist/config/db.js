"use strict";
// mongodb+srv://harish:harish-shoe@flutter-projects.yixebpq.mongodb.net/dev
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
class Db {
    db(url) {
        try {
            const con = mongoose_1.default.connect(url);
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.Db = Db;
