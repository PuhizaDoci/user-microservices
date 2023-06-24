import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { connectDb } from './config/db';
import loginController from './controllers/loginController';

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDb();

app.post('/login', loginController.loginUser);

app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});
