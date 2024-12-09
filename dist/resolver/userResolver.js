"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResolver = void 0;
const container_1 = __importDefault(require("../ioc/container/container"));
const types_1 = require("../ioc/types/types");
exports.userResolver = {
    Query: {
        getOneuser: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id }) {
            console.log(id);
        })
    },
    Mutation: {
        createUser: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { name, email, password }) {
            const res = yield container_1.default.get(types_1.TYPES.UserService).serviceCreateUser(name, email, password);
            // return {
            //     message: container
            //     .get<ResponseHelper>(TYPES.ResponseHelper).message,
            //     user:container
            //     .get<ResponseHelper>(TYPES.ResponseHelper).user
            // }
        })
    }
};
