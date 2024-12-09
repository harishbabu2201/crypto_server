import container from "../ioc/container/container"
import { ResponseHelper } from "../ioc/helpers/responseHelpers";

import { IUserService } from "../ioc/services/userService"
import { TYPES } from "../ioc/types/types"




export const userResolver={

Query:{
    getOneuser:async(_:any,{id}:{id:any})=>{
console.log(id);

    }
},

Mutation:{
    createUser:async(_:any,{name,email,password}:{name:string,email:string,password:string})=>{
const res=await container.get<IUserService>(TYPES.UserService).serviceCreateUser(name,email,password);

// return {
//     message: container
//     .get<ResponseHelper>(TYPES.ResponseHelper).message,
//     user:container
//     .get<ResponseHelper>(TYPES.ResponseHelper).user
// }

    }
}


}