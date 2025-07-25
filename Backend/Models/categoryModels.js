import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required: [true, "Category name is required"],
    },
    description :{
        type:String,
        required: [true, "Category description is required"],
    },
    image:{
        type:String,
        required: [true, "Category image is required"],
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const Category = mongoose.model("ProductCategory", categorySchema);
export default Category;