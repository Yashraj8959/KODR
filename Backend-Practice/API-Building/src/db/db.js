import mongoose from 'mongoose';

export const connectDB = ()=> {
    try {
        mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("MongoDB connected");
        })
        .catch((e)=>{
            console.log(e)
            console.log("DataBase not Connected");
        })
    } catch (error) {
        console.log(error)
    }
}
