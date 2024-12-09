"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.UserService = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const inversify_1 = require("inversify");
require("reflect-metadata");
const userModel_1 = __importDefault(require("../../model/userModel"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
let UserService = class UserService {
    constructor() {
        this.serviceCreateUser = (name, email, password) => __awaiter(this, void 0, void 0, function* () {
            var key = crypto_js_1.default.enc.Hex.parse("000102030405060708090a0b0c0d0e0f");
            var iv = crypto_js_1.default.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
            var encryptedEmail = crypto_js_1.default.AES.encrypt(email, key, { iv: iv });
            // const exisitngUser = await User.findOne({ email: encryptedEmail });
            // if (exisitngUser) {
            //   return container
            //     .get<ResponseHelper>(TYPES.ResponseHelper)
            //     .userResponse("User already present");
            // }
            const hashed = yield bcryptjs_1.default.hash(password, 15);
            const user = new userModel_1.default({
                name,
                email: encryptedEmail,
                password: hashed,
            });
            yield user.save();
            console.log(user);
            var decrypted = crypto_js_1.default.AES.decrypt(encryptedEmail, key, { iv: iv });
            var decryptedEmail = decrypted.toString(crypto_js_1.default.enc.Utf8);
            // return container
            //   .get<ResponseHelper>(TYPES.ResponseHelper)
            //   .userResponse("User Resgistered", user);
        });
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, inversify_1.injectable)()
], UserService);
