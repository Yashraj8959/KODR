import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    },
    blog:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog"
    }]
})

export const User = mongoose.model('User', userSchema)