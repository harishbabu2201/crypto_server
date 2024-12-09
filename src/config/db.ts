// mongodb+srv://harish:harish-shoe@flutter-projects.yixebpq.mongodb.net/dev

import mongoose from "mongoose";


export class Db{
    public db(url:any){
    try {
        const con=mongoose.connect(url)
    } catch (error) {
        console.log(error);
        
    }
    }
}