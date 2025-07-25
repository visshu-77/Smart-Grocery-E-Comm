import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true["name is required"],
    },
    price:{
        type:Number,
        required:true["price is required"],
    },
    description:{
        type:String,
        required:true["description is required"],
    },
    category:{
        type:String,
        required:true["category is required"],
    },

});

const Product = mongoose.model("Products", productSchema);
export default Product;