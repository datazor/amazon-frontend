import { model } from "mongoose";
import mongoose from "mongoose";

const User = new mongoose.Schema({

    name: {type: String, required: true},
    email: {type: String, required:true},
    password:{type: String, required:true},
    createdAt:{type:Date,default:Date.now},
    basket:{type:[Object],required:false}
},
{collection:'user-data'}
)

const user = mongoose.model('userDB',User)

export default user ;

  