import productControllers from '../Controllers/productControllers.js';
import express from 'express';
const router = express.Router();

router.post("/addProduct", productControllers.addProduct);

export default router;