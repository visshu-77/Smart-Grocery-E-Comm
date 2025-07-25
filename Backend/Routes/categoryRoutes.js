import categoryControllers from '../Controllers/categoryControllers.js';
import express from 'express';
const router = express.Router();

router.post("/addCategory", categoryControllers.addCategory);

export default router;