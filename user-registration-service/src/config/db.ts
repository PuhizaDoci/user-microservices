import { Sequelize } from 'sequelize';

const connectDb = () => {
  const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  sequelize.authenticate()
    .then(() => {
      console.log('Connection to the database has been established successfully.');
    })
    .catch((error) => {
      console.error('Unable to connect to the database:', error);
    });

  return sequelize;
};

export default connectDb();
export { connectDb };
