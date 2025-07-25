import adminControllers from "../Controllers/adminControllers.js";
import express from 'express';
const app = express.Router();   

app.get('/users', adminControllers.getAllUsers);

export default app;