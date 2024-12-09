import mongoose, { Document, Schema } from "mongoose"

interface IUser extends Document{
    name:string
    email:string
    password:string
}



const userModel=new Schema<IUser>({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    password:{
        type:String
    }
})


const User =mongoose.model<IUser>("Users",userModel)
export default User


