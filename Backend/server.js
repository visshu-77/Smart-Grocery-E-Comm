import express from 'express';
import mongoose from 'mongoose';   
import dotenv from 'dotenv';    
const port = process.env.PORT || 3000;
const app = express();
dotenv.config();
import userRoutes from './Routes/userRoutes.js';
import adminRoutes from './Routes/adminRoutes.js';
import productRoutes from './Routes/productRoutes.js';
import categoryRoutes from './Routes/categoryRoutes.js';

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');  
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error); 
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req,res)=>{
    res.send('Hello E-commerce API');
});

app.use("/api",userRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/products", productRoutes);
app.use("/api/categories", categoryRoutes);

app.listen(3000, () => {
  console.log(`Server is running on port number ${port}`);
}); 