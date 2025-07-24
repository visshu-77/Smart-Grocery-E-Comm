import userController from '../Controllers/userControllers.js';

import express from 'express';
const app = express.Router();

app.post('/register', userController.register);
app.post('/login', userController.Login);

export default app;