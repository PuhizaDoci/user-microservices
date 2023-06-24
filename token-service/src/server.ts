import express from 'express';
import cors from 'cors';
import tokenRoutes from './routes/tokenRoutes';
import sequelize from './config/db';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/token', tokenRoutes);

sequelize.sync().then(() => {
  app.listen(3003, () => {
    console.log('Token service is listening on port 3003');
  });
});
