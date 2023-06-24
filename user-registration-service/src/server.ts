import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import userController from './controllers/userController';
import { connectDb } from './config/db';

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDb();

app.post('/register', userController.registerUser);

app.get('/users/:email', userController.getUserByEmail);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});