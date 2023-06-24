import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userController from './controllers/userController';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/user/:id', userController.getUserById);
app.get('/users', userController.getAllUsers);
app.put('/user/:id', userController.updateUser);
app.put('/user/:id/password', userController.updatePassword);
app.delete('/user/:id', userController.deleteUser);

app.listen(3006, () => {
  console.log('Server is listening on port 3003');
});
