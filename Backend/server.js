import express from 'express';
import mongoose from 'mongoose';   
import dotenv from 'dotenv';    
const port = process.env.PORT || 3000;
const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');  
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error); 
});

app.get('/', (req,res)=>{
    res.send('Hello E-commerce API');
});

app.listen(3000, () => {
  console.log(`Server is running on port number ${port}`);
}); 