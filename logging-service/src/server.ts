import express from 'express';
import cors from 'cors';
import loggingMiddleware from './middleware/logging';
import logService from './services/logService';
import fs from 'fs';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());
app.use(loggingMiddleware);

app.post('/log', (req, res) => {
  const { message, level, error } = req.body;
  logService.log({
    level: level,
    message: message,
    error: error
  });
  res.status(200).json({ message: 'Log saved' });
});

app.get('/logs', (req, res) => {
  const logs = fs.readFileSync(path.join(__dirname, '..', 'combined.log'), 'utf-8');
  res.status(200).json({ logs });
});

app.get('/logs/:level', (req, res) => {
  const { level } = req.params;
  const logs = fs.readFileSync(path.join(__dirname, `..`, `${level}.log`), 'utf-8');
  res.status(200).json({ logs });
});

app.listen(3005, () => {
  console.log('Logging service is listening on port 3005');
});
