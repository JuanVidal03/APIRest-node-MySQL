// import library
import { createPool } from 'mysql2/promise';
// enviroment variables
import {DB_HOST, DB_USER,DB_PASSWORD,DB_DATABASE,DB_PORT} from '../config.js'

// creating the connection
export const connection = createPool({

  host:DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  port: DB_PORT,
  database: DB_DATABASE
});