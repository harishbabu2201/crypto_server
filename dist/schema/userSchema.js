"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.userSchema = (0, apollo_server_express_1.gql) `

type User{
name:String
email:String
password:String
}

type UserResponse{
message:String!
user:User
}

type UserAllResponse{
message:String!
user:[User]!
}

type Query{
getUsers:UserAllResponse
getOneuser(id:ID!):UserResponse
}


type Mutation{
createUser(name:String!,email:String!,password:String!):UserResponse
}
`;
