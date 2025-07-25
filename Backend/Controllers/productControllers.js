import productModel from '../Models/productModels.js';

const addProduct = async(req,res)=>{
    try{
        const {
            name,
            price,
            description,
            category
        } = req.body;

        if(!(name && price && description && category)){
            return res.status(400).json({mesg:"All fields are required"});
        }
        const newProduct = new productModel({
            name,
            price,
            description,
            category
        });
        const product = await newProduct.save();
        if(!product){
            return res.status(500).json({mesg:"Product not added"});
        }
        res.status(201).json({mesg:"Product added successfully", product: newProduct});

    }catch(error){
        res.status(500).json({mesg:"Internal Server Error"});
        console.error(error);
    }
}

export default { addProduct };