import CryptoJS from "crypto-js";
import { injectable } from "inversify";
import "reflect-metadata";
import User from "../../model/userModel";
import bcrypt from "bcryptjs";
import container from "../container/container";
import { TYPES } from "../types/types";
import {  ResponseHelper } from "../helpers/responseHelpers";
export interface IUserService {
  serviceCreateUser(name: string, email: string, password: string): any;
}

@injectable()
export class UserService implements IUserService {
  public serviceCreateUser = async (
    name: string,
    email: string,
    password: string
  ) => {
    var key = CryptoJS.enc.Hex.parse("000102030405060708090a0b0c0d0e0f");

    var iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");

    var encryptedEmail = CryptoJS.AES.encrypt(email, key, { iv: iv });

    // const exisitngUser = await User.findOne({ email: encryptedEmail });

    // if (exisitngUser) {
    //   return container
    //     .get<ResponseHelper>(TYPES.ResponseHelper)
    //     .userResponse("User already present");
    // }

    const hashed = await bcrypt.hash(password, 15);

    const user = new User({
      name,
      email: encryptedEmail,
      password: hashed,
    });

    await user.save();

    console.log(user);

    var decrypted = CryptoJS.AES.decrypt(encryptedEmail, key, { iv: iv });

    var decryptedEmail = decrypted.toString(CryptoJS.enc.Utf8);

    return container
      .get<ResponseHelper>(TYPES.ResponseHelper)
      .userResponse("User Resgistered", user);
  };
}
