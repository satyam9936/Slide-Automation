import mongoose,{Schema, Document} from "mongoose"

export interface Message extends Document{
    content:string;
    createdAt: Date
}
 const MessageSchema:Schema<Message>= new Schema({
    content:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        required:true,
        default: Date.now
    }


 })
 export interface User extends Document{
    username:string;
    password:string;
    email: string;
    verifycode:string;
    verifycodeExpiry: Date;
    isAcceptingMessage:boolean;
    message:Message[]
    
}
const UserSchema:Schema<User>= new Schema({
    username:{
        type: String,
        required: [true,"Username is required"],
        trim: true,
        unique: true,


    },
    email:{
        type: String,
        required: [true,"Email is required"],
        unique:true,
        match:[/.+\@.+\..+/, 'please use a valid email address']
        
    },
    password:{
        type: String,
        required: [true,"Password is required"],
    },
    verifycode:{
        type: String,
        required: [true,"Verify code is required"],
    },
    verifycodeExpiry:{
        type: Date,
        required: [true,"VerifycodeExpiry is required"],
    }

})
   
