import express from 'express';
import mongoose from 'mongoose';   
import dotenv from 'dotenv';    
const port = process.env.PORT || 3000;
const app = express();
dotenv.config();
import userRoutes from './Routes/userRoutes.js';

mongoose.connect("mongodb+srv://vishal676570:oM5N9RltpJJWRXQU@cluster0.e00ckzz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');  
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error); 
});

app.use(express.json());

app.get('/', (req,res)=>{
    res.send('Hello E-commerce API');
});

app.use("/api",userRoutes);

app.listen(3000, () => {
  console.log(`Server is running on port number ${port}`);
}); 