
import mongoose from "mongoose";

let intialized= false

export async function connect(){
    mongoose.set('strictQuery', true)
    if(intialized){
        console.log('MongoDB already connected')
        return ;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: 'next-imdb'
        })
        intialized = true
        console.log('MongoDB connected')
    } catch (error) {
        console.log('MongoDB connection error', error)
    }

}