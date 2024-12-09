

export class ResponseHelper {
    public message:string | undefined
    public user?:any
    public token?:any
    userResponse(message: string, user?: any, token?: any):any {
        this.message=message
        this.user=user
        this.token=token
        
    }
}