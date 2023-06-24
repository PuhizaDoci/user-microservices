import { Sequelize } from 'sequelize';
require("dotenv").config({path:"./.env"})

const connectDb = () => {
  console.log(process.env.DB_HOST);
  console.log(process.env.DB_PORT);
  
  const sequelize = new Sequelize({
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  console.log(sequelize);
  
  sequelize.authenticate()
    .then(() => {
      console.log('Connection to the database has been established successfully.');
    })
    .catch((error) => {
      console.error('Unable to connect to the database:', error);
    });

  return sequelize;
};

export { connectDb };
