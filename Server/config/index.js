require('dotenv').config();


const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: 3000,
  DB_USER: 'postgres',
  DB_PASSWORD: 'postgres',
  DB_HOST: '127.0.0.1',
  DB_NAME: 'spl_database',
  DB_PORT: 5432,
};
module.exports = { config };

//Created by Santiago Rey