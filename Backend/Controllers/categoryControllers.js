import categoryModels from '../Models/categoryModels.js';

const addCategory = async(req,res)=>{
    try{
        const { name, description, image } = req.body;
        if(!(name && description && image)){
            return res.status(400).json({ message: 'All fields are required' });   
        }
        const newCategory = new categoryModels({
            name,
            description,
            image,
        });
        await newCategory.save();
        res.status(201).json({ message: 'Category added successfully', category: newCategory });
    }catch(error){
        res.status(500).json({message: 'Error adding category', error});
        console.error(error);
    }
}

export default { addCategory };