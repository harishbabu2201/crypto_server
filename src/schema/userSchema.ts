import { gql } from "apollo-server-express";

export const userSchema=gql`

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
`
;