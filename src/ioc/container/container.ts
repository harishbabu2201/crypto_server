import inversify, { Container } from "inversify";
import { TYPES } from "../types/types";
import { IUserService, UserService } from "../services/userService";
import { ResponseHelper } from "../helpers/responseHelpers";



const container =new Container();


container.bind<IUserService>(TYPES.UserService).to(UserService)
container.bind<ResponseHelper>(TYPES.ResponseHelper).to(ResponseHelper).inSingletonScope()

export default container