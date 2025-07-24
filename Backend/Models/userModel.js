import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true ['Name is required'],
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Please fill a valid email address'],
    },
    password:{
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long'],
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },  
});

const userModel = mongoose.model("All_User", userSchema);
export default userModel;